---
mod: 25
title: Art_Bridge Architecture
featured: true
category: programming
link: http://artbridgearchitecture.com
published: true
date: 2017-04-05
excerpt_separator: <!-- excerpt -->
tags:
  - Laravel
  - PHP
  - Web development
---

As the architectural firm had grown over the last few years and had completed more high-end design projects, they needed an expanded website to better feature their work.
<!-- excerpt -->
The website was changed from a single home page with contact info to a full web application featuring the firm's diverse scope of work, as well as, a vision page, about page, and contact page.

The website was a collaboration between myself and Art Bride Architecture’s director of design. I transformed the director’s ideas into code, working back-and-forth on the final design layouts, implementing best solutions for problems along the way, developing the entire site using PHP’s Laravel 5.4 framework.

__Process:__

The firm’s old website was a single page in html with a title, a single project photo centered on the page, and a list of staff names (under the photo) with basic contact info. The director of design presented his ideas for the new website. The overall structure consisted of: 1. Front-page; 2. Work page; 3. About page; 4. Vision page; and 5. Contact page.

Since I had began my programming studies as a Ruby on Rails developer, I thought of using Rails, but the firm’s web hosting service, Hostmonster, only accepted version 3 of Rails. Since 3 had security issues, we needed to find a more suitable framework. I then thought we should use a content management system, like WordPress or Drupal, but soon realized we needed something more flexible and customizable. Knowing that Hostmonster worked well with PHP, and after some research and discussions with the director, we concluded that using Laravel 5.4 would be the best solution.

During the development process, I suggested adding an administration page so work page content could be more easily changed when needed by the user, which the director loved. Voyager proved a nice solution for the “missing” admin interface page. Thus I implemented the admin form for both the work page images and the work popups.  For Voyager issues, I used a Slack chat group dedicated to solving Voyager issues, which proved very helpful.

__Result:__

I used a MySQL database to store all the content and display images/work info. The website is also fully responsive. ABA’s director is very happy with his being able to easily add/change projects whenever wanted. The final website is visually dynamic and engaging, yet simple and intuitive (user friendly), and beautifully displays all the firm’s new work.


Art_Bridge Architecture PLLC:
[<img class="img-responsive" src="{{ "/assets/img/art_bridge_website.png" | prepend: site.baseurl }}">](http://artbridgearchitecture.com)
