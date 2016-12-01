---
layout: post
title: Offline First - No Internet connection and it's ok!
blurb: Emerging technologies that will make us re-think the way we do apps.
date: 2016-10-05
published: true
tags:
 - Offline First
 - JavaScript
 - Mobile development
 - Web development
 - Meetups
---

Going to Meetups is a good way to learn more about upcoming technologies. Of late, I've enjoyed learning how to develop mobile apps using JavaScript. One concept that interested me is *Offline First*.  

### *"No Internet connection!"*

How many times have you tried to open an app with little or no internet connection and the first thing you see is this error message: "No internet connection"? At that point, you know it's over; you can't use your application until you get a network signal. Well, Offline First solves this problem. The idea is to create apps that will still work even when you have flakey or non-existent connection. That said, the technology doesn't do anything miraculous; it just stores the right amount of data to keep your app working no matter the circumstances. For example, if you are on a subway with no Internet connection and you decide to open your Offline-First twitter feed app, it will show you the tweets from the last time it was synchronized with the internet. As soon as you have connection again, it will update without your having to do anything. All it actually does is, instead of giving you a "no connection error", it gives you the data from it's last internet sync.

Offline First uses a JavaScript database named PouchDB which is a trunked down version of Apache's CouchDB (which you can also use) and it runs within your browser/app. The advantage of these apps are:

1. It's faster since all the CRUD operations happens within your app.
2. It supposedly takes less battery and bandwidth because data is synchronized periodically, in batches instead of constantly.
3. The main and foremost: it works offline.

Offline First apps are good for:

* Frontend Web apps
* Backend Web apps
* Mobile apps
* Desktop apps
* Internet of Things (IoT)

If you want to learn more about Offline First or go for test drive, give a shot using Hoodie, a nice [noBackend](http://hood.ie/initiatives/#nobackend) framework:

<http://hood.ie/>

or if you are looking for something more lightweight as in a script, Up Up is your way to go:

<https://www.talater.com/upup/>
