---
title: Thoughts on LLM Webscraping
description: Generating life lessons... 
tags: tech
---
Recently, at work, I had the opportunity to try out ScrapeGraphAI - an LLM web scraping library for Python. 
We were working on imputing data for an asset database that was being used for a predictive maintenance tool. Upon initial inspection, the database provided was incredibly sparse. Critical columns such as the installation date were almost entirely empty or showed unnatural patterns emerging from previous attempts to beef up the existing data. There was a notable absence of a product number / code column. Unfortunately, the suppliers refused to provide additional data related to these gaps so we had to look into numerical methods.

While it wouldn't be my personal first choice to use an LLM web scraper in this situation (and it was not my decision), it seemed like an interesting way to explore improving the quality and quantity of data available. In turn, hopefully, the clients would be able to use the predictive maintenance tool more effectively.

### Scrape Graph AI

Scrape Graph AI is an LLM web-scraping library for Python. It has a very accessible API and it was a straightforward and quick process to get it started. It is powered by LLMs and returns structured data from web pages guided by prompts.

There are different modes you can use to scrape data off the internet including examining singular specified pages all the way to scouring the entire web which costs more tokens. 

By feeding the API's prompt with the data we could from the database, the hope was that the LLM would be able to piece together what we had and return reasonable answers.

### Methodology
I wrote a fairly simple script that took the relevant (for search) columns from the original dataset and fed the data from these columns from rows where a reasonable amount of these columns were full (which did not leave... much). I then created a lookup table which we fuzzy matched against to impute data for the rest of the table. A rudimentary solution to be fair.

### Lessons Learnt

### Garbage In - Garbage Out
The first lesson of ML... A multi-trillion dollar stock market evaluation is not immune to this simple fact.

An row entry only telling you to look for a Bosch fridge could return (from a quick look on the website), an expense from £299 to £2399! This is obviously not helpful if you are trying to draw up the cost of potential replacements!

### It didn't scale
ScrapeGraphAI tokens started to ramp up in price rapdily. I was only experimenting with generating a lookup from a few hundred rows of the original table and felt a lot of pressure from the token limit. It was also slow to return results, taking over 40 minutes for 50 rows. Even if this experiment worked out, it may not have transferred well to other applications larger in scope.

### Precise scraping needs context and guidance 
This is obvious to anyone that knows how LLMs work, and a more critical fact when you consider the importance of useful data in a predictive maintenance database. I watched as the scraper feebly cobbled together the first instance of a resemblence of its mash-up of useless provided data and its extensive existing model. I say feeble because it appeared that way to me, but the model of course made sense to itself. I'm sure with a product name, manufacturer, product code, single point of supplier website, the scraper would have done an excellent job. But in the real world with very very few instances of rows with all of this information, it struggled.

With such a huge variety of assets being tracked, there was also no single and central place to find missing asset data. I could see this solution working in more ideal scenarios (but then again, maybe it wouldn't be the first thing to go to either) where you do have a centralised store and a lot of information to use. 

### Focus on the basics and foundation
Getting to the point where using an LLM web scraper may be a viable point for filling out a database means *many* *many* things have gone wrong on the way there. 

In summary, I had fun with this project. I can see the potential of LLM web scrapers! 

On a more sour note, ScrapeGraphAI repeatedly tried to charge me despite cancelling my subscriptions. Their customer service was not helpful at all on this front.