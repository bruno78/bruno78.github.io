---
mod: 11
title: Event Manager
category: Software Engineering, Script
featured: false
column: 3
published: true
date: 2015-08-22
excerpt_separator: <!-- excerpt -->
tags:
  - Ruby
---

A Ruby program that uses a mailing list to create e-mails to your local representative
<!-- excerpt -->

This program is from the Jumpslab Event Manager Tutorial. It is a Ruby program that reads a CSV file containing names, addresses, and emails of people who have signed up for a mailing list. The program parses the CSV Files, sending the zip codes to Sunlight's Congressional API (gem). The API returns the data identifying each persons local representative. The program then generates individual emails with messages asking each person to contact their local respective regarding a particular subject matter. The templates were created using Ruby's ERB.

The code can be found here:

<https://github.com/bruno78/event_manager>

Event Manager tutorial that can be found at:

[jumpstart lab](http://tutorials.jumpstartlab.com/projects/eventmanager.html#eventmanager)
