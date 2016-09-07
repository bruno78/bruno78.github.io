---
mod: 10
title: Event Manager
featured: false
category: programming
published: true
date: 2015-08-22
excerpt_separator: <!-- excerpt -->
tags:
  - Program
  - Ruby
---

A Ruby program that uses a mailing list to create e-mails to your local representative
<!-- excerpt -->

This program is from the Jumpstart Lab's Event Manager Tutorial. It is a Ruby program that reads a CSV file containing names, addresses, and emails of people who have signed up for a mailing list. The program parses the CSV Files, sending the zip codes to Sunlight's Congressional API (gem). The API returns the data identifying each persons local representative. The program then generates individual emails with messages asking each person to contact their local respective regarding a particular subject matter. The templates were created using ERB.

Github repo:

<https://github.com/bruno78/event_manager>

Event Manager tutorial that can be found at:

[jumpstart lab](http://tutorials.jumpstartlab.com/projects/eventmanager.html#eventmanager)
