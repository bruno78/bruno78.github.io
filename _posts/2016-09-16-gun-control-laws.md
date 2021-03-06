---
layout: post
title: How have Americans' views changed regarding gun control through the years?
blurb: It seems more people than ever are talking about gun regulations; however, it's been more then a decade since congress has passed a new law on gun control.
date: 2016-09-16
published: true
tags:
 - python
 - data analysis
 - programming
 - capstone project
---


Every time a major gun incident occurs, like the [Orlando mass shooting](https://en.wikipedia.org/wiki/2016_Orlando_nightclub_shooting), or [toddlers accidentally shooting themselves or their loved ones](https://www.washingtonpost.com/news/wonk/wp/2016/05/01/toddlers-have-shot-at-least-23-people-this-year), there tends to be a public outcry asking why we don't have stricter gun control laws, yet legislation is still pending.

It's ironic to note that while some laws, such as [laws](http://www.patheos.com/blogs/formerlyfundie/the-disgusting-hypocrisy-of-the-anti-trans-bathroom-movement/) regarding who can and cannot use what public bathroom are passed in some states post haste, the same demographic often tends to oppose stricter gun control laws so vehemently that those laws are never passed.

News outlets often portray public opinion as being highly divided despite the data actually showing otherwise. For example, Fox News often presents the false claim that people who support gun control want to take peoples guns away [the government will take away their guns](http://www.foxnews.com/opinion/2016/06/06/four-ways-president-hillary-clinton-will-work-to-end-gun-ownership.html). Other news outlets often oversimplify the issue, targeting specific arguments [stricter gun laws would not allow people with a history of mental illness to purchase them](http://csgv.org/issues/guns-and-mental-health/). It was these kinds of politically-biased and oversimplified reports that led me to want to know more about the actual statistics regarding percentages of American's supporting/opposing gun control.


### Opinions on Gun Permits

Looking at the [General Social Survey](http://gss.norc.org/) dataset, 1972-2014, perhaps the biggest surprise, in general, was that across the entire survey period the percentage of Americans that favored gun permits never fell below 70%.

<div id="wrapper">
  <img class="img-responsive" src="{{ "/assets/img/gunlaw-opinion.svg" | prepend: site.baseurl }}">
</div>


The data shows there were four peaks during which gun permits were viewed more favorably. The first peak was during the period from 1972 to 1974, the highest point being in 1974 at 76.1% favorable. Then favorability dropped to 70.8% in 1980. In 1982 it rose again to 74.2% but then went back down to 72.4% in 1984.

The longest and largest relative rise was sustained from 1987 to 1993 during which support for gun permits increases substantially, almost 10% compared to approximately 3% during the other peaks. Similarly, in the opposite direction, from 1998 to 2014 there was a continuous decline in favorable opinions, reaching a low of 72.3% in 2014. It's interesting to note that that percentage is almost the same as when the survey was first stated in 1972, 42 years prior.

The next question, was what current events correlated with the peaks and valleys in favorable opinion?

### Mass Shootings vs Opinions on Gun Permits

The [Mother Jones Investigation on Mass Shootings](http://www.motherjones.com/politics/2012/07/mass-shootings-map) is a possible way to answer this question. Their data only covers the time period from 1982 to 2016 but provides some interesting insights. For instance, 58% of mass shootings were committed by whites, with 55% of those having prior signs of possible mental health illnesses. 79% of the weapons used by mass shooters were acquired legally. This data supports the argument that stricter background checks that search mental heath histories, might prevent some mass shootings. This data may also help to explain, in terms of the rise in frequency and severity of mass shootings, the peaks in support for gun permits between 1987 and 2000.

<div id="wrapper">
  <img class="img-responsive" src="{{ "/assets/img/mass_shootings-vs-gunlaws.svg" | prepend: site.baseurl }}">
</div>

One way to look at this case would be, whenever there are no mass shootings or lower numbers of victims, the number of people supporting gun permits goes down because people are either not thinking about the issue, or during those times people don't associate buying a gun as much with mass shootings.

One might think, when a mass shooting occurs, the number of people in favor of gun regulations would rise. It is certainly a logical deduction but as we've found with the data it is not a conclusion that we can make with any degree of certainty, at least, not one we can make with our comparison alone.

That said, it's possible that the tipping point of raising support for gun permits in 1984 stemmed from a mass shooting where James Oliver Huberty, 41 years old, opened fire in a McDonald's restaurant in San Ysidro, California killing 22 people and injuring 19, before being killed himself by a police office. The incident is known as San Ysidro McDonald's massacre and there were 41 victims in total.

After that shooting, there was at least one shooting every year from 1984 through 1993, with four mass shooting occurring in 1993 alone. Support for gun permits increased throughout this period. The Long Island Rail Road shootings in Garden City NY alone left 25 victims, the most of that period. Soon after that though, support for gun permits started to decrease, despite mass shootings continuing to occur, though on a less frequent basis.

When the Air Force base shootings occurred in 1994, with 28 victims, it was a possible tipping point for the rise in opinions again. In 1998, there were 3 mass shootings but favorability down. At this point, it seems there is a pattern where the years with only one mass shooting, a raise in favorability is sparked, while the years with three or more mass shootings, favorability goes down. One would think that more mass shootings would cause favorability to rise or at least stay the same but the opposite seems to true.

From 2000 to 2004, where we have only one mass shooting a year, the numbers don't go up, and in 2004, the Damageplan Gun Show Shootings seemed to trigger another raise in favorable opinions though not significantly. Then from 2006 to 2014 the numbers consistently go down, breaking all possible patterns.

Perhaps some of the reason for the unexpected patterns described above, could be that when mass shootings increase within a single year, there's a rise in the number of [people who feel the need to protect themselves](https://www.youtube.com/watch?v=n9xUCI3nJsQ), and so therefore the number of people in favor of gun control goes down. It is an interesting paradox that while less strict gun control laws would make it easier for a sane person to purchase a gun, it would also make it easier for person with a history of mental illness to purchase a gun.


### Conclusion

For the case that gun control favorability rises, as the number of mass shootings rise, there is not a strong direct correlation. While some mass shootings may have triggered a rise in favorability that does not hold up across the period we studied. As we've seen there are two types of correlations. In 1984, after a mass shooting, favorability went up as would be expected. But we also found two other examples, where favorability went down after mass shootings. Therefore it's not possible to say that there is a direst correlation between the rise in mass shootings and the rise in favorability.

Perhaps looking at how the media reports shootings, and for how long shootings are covered, as well as, what kinds of people are affected by each shooting, like children in schools, perhaps that may lead to more direct proof that's there's a strong relationship between mass shootings and public opinion. Also, perhaps looking at the correlation between views of politicians as they are influenced by gun lobbyists, the NRA etc., perhaps a stronger determinant could be found.

#### About GSS

The General Social Survey is part of the National Data Program for the Social Sciences conducted since 1972 by NORC at the University of Chicago, supported by the National Science Foundation.

The [GSS website](http://gss.norc.org/About-The-GSS) explains that the goals of the program are twofold: " to conduct basic scientific research on the structure and development of American society"; and "to distribute up-to-date, important, high-quality data to social scientists, students, policy makers, and others."

Additionally the website's homepage http://gss.norc.org/  says, "Since 1972, the General Social Survey (GSS) has provided politicians, policymakers, and scholars with a clear and unbiased perspective on what Americans think and feel about such issues as national spendi​ng priorities, crime and punishment, intergroup relations, and confidence in institutions."

The National Data Program for the Social Sciences is directed by Tom W. Smith, Peter V. Marsden, and Michael Hout. It is advised by a Board of Overseers consisting of prominent social scientists.

#### About Mother Jones Investigation

It's a dataset on Mass Shootings originally covered 1982-2012 and has since been expanded through 2016. For more information, click [here](http://www.motherjones.com/politics/2012/07/mass-shootings-map)


The code for this project can be found [here](https://github.com/bruno78/python-capstone-project.git)
