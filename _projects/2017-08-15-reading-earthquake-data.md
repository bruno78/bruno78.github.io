---
mod: 26
title: Reading live EarthQuake data
category: Object Oriented Programming, Software Engineering, API, Maps
featured: false
column: 3
published: true
date: 2017-08-15
excerpt_separator: <!-- excerpt -->
tags:
  - Java
  - Processing
  - Unfolding Maps API
  - Android Geolocation
---

A Java program that reads and analyzes live earthquake data.
<!-- excerpt -->
This program reads Earthquake data either from a file or live from the government website: http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom. It displays a map showing magnitude and its intensity in different locations around the globe. It uses:

* Android Geolocation api, and is under The Apache 2.0 license. This API uses Geolocation to display data in different points of the map.
* Unfolding Maps api. It provides maps from several sources. ex. Google, Microsoft, Yahoo, etc.
* Processing Library. Applet to display graphics on the screen.
* edu.duke Library. It provides a very simple way to access directory and file resources.
Apache Commons Library. It reads and parse CSV files.

more on github: https://github.com/bruno78/reading-earthquake-data
