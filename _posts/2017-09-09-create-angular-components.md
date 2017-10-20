---
layout: post
title: Creating-Angular-Components tool
blurb: A faster way to create Angular components from templates
date: 2017-09-09
published: true
tags:
 - Angular-cli
 - Angular
 - create-angular-components
 - TypeScript
 - Components
---

Today I'm going to show a very useful tool that might help you to speed up your process in creating your Angular applications.

When working with one page template like Bootstrap or mockups, the task of creating each individual component, and then cutting and pasting each template section can become cumbersome. Imagine if you're using Angular-cli, and for each component you have to issue a ``` ng g component my-new-component ``` command plus cut and paste? Isn't there an easier way? Yes! That's when create-angular-components tool comes into action.  

### First things first

For this demonstration, I'm assuming you already have angular-cli and/or have your Angular app installed. If not, please follow these [steps](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services).

Once you have your application up and running, let's install Create Angular Components tool:

```bash
npm install -g create-angular-components
```

So far this is the basic tree structure of my angular application

<div id="wrapper">
  <img class="img-responsive" src="{{ "/assets/img/cac-init-tree-structure.png" | prepend: site.baseurl }}">
</div>

### Using the template file

Here's a very simple example of a html mockup or one page template, that I copied to the app folder:

```
my-app
  └── src
      └── app
          └── template.html
```
Note: I decided to call it template.html instead of index.html not to confuse with the file with same name on src folder, but you can call it anything you want.

```html

<!DOCTYPE html>
<html lang='en'>
<head>
  <!-- content omitted for brevity -->
</head>
<nav class="navbar">
     <ul>
       <li>
         <a class="nav-link" href="#about">About</a>
       </li>
       <li>
         <a class="nav-link" href="#services">Services</a>
       </li>
     </ul>
</nav>

<section class"portfolio">
  <h1> Welcome to My Portfolio Page </h1>

  <div class="about">
    <h2>About me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </div>

  <div class="Portfolio-content-1">
    <h2> This is Portfolio content </h2>
    <p> A brief description </p>
  </div>

  <div class="Portfolio-content-2"></div>
</section>

<footer>
  <p> Copyrights </p>
</footer>

```

As you can see, it's structured in these following sections:

* \- nav
* \- section
  * \- about
  * \- portfolio content
* \- footer

Those are the parts I want to transform into components and subcomponents.

### Setting up

Now, all we have to do is mark up the html elements we want to transform into components by adding ``` data-component="ComponentName" ```. Don't forget: use CamelCase!

<div id="wrapper">
  <img class="img-responsive" src="{{ "/assets/img/cac-markedupfile.png" | prepend: site.baseurl }}">
</div>

### Firing up the command

Once all elements are marked with data-component attributes, it's time to issue the command.

In the command line, if you are not on your app's root folder:

```bash
cd my-app
cac template.html
```
_...drum roll..._
et voila! If everything runs successfully you will see a message stating that 5 components were generated (3 components and 2 subcomponents) into ``` /Users/user-name/my-app/src/app ```.

Looking at the final result of your folder tree, you should have:

<div id="wrapper">
  <img class="img-responsive" src="{{ "/assets/img/cac-treefinalresult.png" | prepend: site.baseurl }}">
</div>


Looking at ``` about.component.html ``` you should see all the content of the about from your template:

```html
<div class="about">
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
</div>

```

This is your about.component.ts ready to be populated:

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor () {}
}

```
Not only it generates a folder with the name you've specified in the data-component attribute, including the TypeScript file, css file, html file with your content, but also the unit test file. Pretty cool, eh?

Also your template.html file remains intact. You can either remove it or redo your components whenever you want.

Well, this is it for today. A big thanks to Alexey Okhrimenko (@aiboy on Github) for creating this great tool, and if you want visit his github page or see the repo, please go [here](https://github.com/aiboy/create-angular-components)
