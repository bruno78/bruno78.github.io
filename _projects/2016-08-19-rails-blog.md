---
mod: 18
title: Rails Blog
featured: false
category: programming
link: https://bgtavares.herokuapp.com
published: true
date: 2016-08-22
excerpt_separator: <!-- excerpt -->
tags:
  - Rails
  - Ruby
  - Web development
---

A blog created on Rails 4.2.5 filled with great features
<!-- excerpt -->

Learning Process

Most blog building tutorials out there just teach you the basic: how to create, edit, and delete posts; how to add and delete comments; how to add authorization to allow users to sign up, sign in and sign out; as well as, how to edit and delete one's own posts and comments.

In creating this blog, I went a bit beyond the basics, creating a blog with only one user. I wanted the posts to have the ability to render markdown content and have syntax highlighting - like posts on github. Instead of using "act_as_taggable" gem, for fun I decided to research and create my own tags. I inserted the tags on the side bar with their counts shown to the sides. Additionally, I included the method "tag-cloud" (though it's not showing) inside of the blog app in case I later wanted to implement it on the blog. In terms of attaching an image, I wanted to be able to customize its size, yet still have the image be responsive. That led me to weigh the difference between using carrierwave and paperclip gems. I ended up using carrierwave as it gave me the flexibility I wanted. My posts can render links, videos, and images (the videos are responsive as well). I used sendgrid to handle the contact page. When a message form is completed, it is sent through sendgrid and then to my email.

The most difficult part of building the blog was making the design decisions. Choosing a font and a style that would best represent myself was perhaps the hardest part. I wanted an aesthetic that would be both retro and contemporary, having a clean layout with touch of vibrant color.

While I plan to continue developing the blog, making improvements along the way, I'm happy with the results so far. I hope you enjoy viewing the blog as much as I enjoyed creating it.

About this app

This app was built on Rails 4.2.5.1

It has the following features:

* Posts
* Create / Edit / Destroy
* Markdown (RedCarpet)
* Syntax highlighting (pygments)
* Tagging and search by tags
* The posts can render links, videos and images
* You can adjust the heigh x width of the image and still responsive
* It will display three posts per page (will_paginate)
* Image uploader (carrierwave)
* Responsiviness (bootstrap)
* User (devise)
* Contact
* Contact form
* Sendgrid


For github repo:

<https://github.com/bruno78/personal-blog>
