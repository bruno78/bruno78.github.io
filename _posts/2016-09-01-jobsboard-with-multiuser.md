---
layout: post
title: Jobs board with multi-user
published: true
blurb: In this tutorial, I'll be showing how to create a multi-user capability where users upon sign-in will choose if they are signing in as a job-hunter or a company.
date: 2016-08-11
excerpt_separator: <!-- excerpt -->
tags:
  - multi-user
  - Rails
  - Ruby
  - Jobsboard
  - tutorial

---

Most job tutorials out there only teaches the very basics like how to set up a model, post jobs, apply for jobs, user sign up, sign in and sign out, leaving out the crucial fun: how to create user with different roles. I've looked into the Devise - Cancan - Rolify tutorial and for some reason it wasn't very clear because most of these tutorials are focused on Administrator, Moderator and User/author sort of roles or roles assign by administrator or assigned in the console or a many-to-many relationship. I'm still learning Rails by myself and sometimes even posting questions on Stack Overflow is not very helpful. So some methods suggested to create a table with Roles... but when you deploy the app, would these roles would have to be assigned again since the database would be cleared. The closest approach was The RailsCasts on [Embedded Associations](http://railscasts.com/episodes/189-embedded-association) but the video was from 2009 and I was using devise gem which works a bit different than following the formula. So everything was fine but upon sign up where I have a form to assign the role to the user but unfortunately when I look at the user role it was either nil or the default value... Frustrating...

Anyways, in this tutorial I'll explain how to assign different roles upon sign-up where users will choose between "job-hunters" which will be able to apply for jobs and have profiles, and companies which will be able to post jobs and contact users. If you haven't created the jobs-board app you can get my repo here (...) or watch Mackenzie Child Tutorial here (...).

Once you have the devise gem installed and you are all set, ready to sign up your first user, let's add another gem, Enumerize. Open your Gemfile file and add this:

Gemfile
```ruby
gem 'enumerize'
```
on bash type:
```bash
bundle install
```
Then add a role column to your User model:
```bash
rails g migration add_role_to_users role:string
```
Update the database:
```bash
rake db:migrate
```
At app/model/user.rb, add the enumerize and roles:
```ruby
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  extend Enumerize
  enumerize :role, in: [:job-hunter, :company], default: :job-hunter
end
```
Up to this point all the newly created users will have the job-hunter role as default. We will create the option to change at the sign up form where, if you are using devise, you can add this line <%= f.select :role, User.role.options %> at
views/devise/registrations/new.html.erb
```ruby
<h2>Sign up</h2>

<%= simple_form_for(resource, as: resource_name, url: registration_path(resource_name)) do |f| %>
  <%= f.error_notification %>

  <div class="form-inputs">
    <%= f.input :email, required: true, autofocus: true %>
    <%= f.input :password, required: true, hint: ("#{@minimum_password_length} characters minimum" if @minimum_password_length) %>
    <%= f.input :password_confirmation, required: true %>
    <%= f.select :role, User.role.options %>
  </div>

  <div class="form-actions">
    <%= f.button :submit, "Sign up" %>
  </div>
<% end %>

<%= render "devise/shared/links" %>
```
Now the missing key for me is here, the only way the changes would be permanent if you add the new key to permissions. I knew that but since we didn't have UserController file because devise takes care of that for us, I didn't know where to do it. It's on the devise documentation but for a beginner like me it wasn't obvious...

app/controllers/application_controller.rb
```ruby
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_devise_permitted_parameters, if: :devise_controller?

  protected

  def configure_devise_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:role])
  end
end
```
Once you create the method and add the key :role sign up, the changes will be permanent. Next step, set restrictions/privilege for the each roles
