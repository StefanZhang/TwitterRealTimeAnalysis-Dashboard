# Data Visualization Project

## Data

The data I propose to visualize for my project is self-collected twitter data through Twitter API using Apache Flume and Apache Spark, with the hashtag "DonalTrump" [example here](https://gist.github.com/StefanZhang/a2ba319870c1d8b8135a16cdd4273d32)

## Project Description

This project is based on the results of the "Real-time Sentiment Dashboard with Tweets Presidential Candidates" project that I am working on at the WPI DS504 Bigdata management course, which uses Apache Flume and Apache Spark to construct data pipeline and perform sentiment analysis. 

## Questions & Tasks

 * Do the majority of people on twitter like Donald? 
 * What are the most frequently used words/phrases in tweets that are in favor of Donald? 
 * What are the most frequently used words/phrases in tweets that are not in favor of Donald? 
 * During what days that people talk about Donald, positive or negative? And what does it potentially related to?

## Sketches

* Sentiment Pie Chart
![P1-3.jpg](https://i.loli.net/2020/09/23/Hsdhl9xKDAQEfuZ.jpg)

This will describe the percentage of people's sentiment towards Donald on twitter. Different color represents positive, negative, and neutral. 
Mouse hover over the pie chart will display the more detailed information such as the total counts. 

* Time vs. Counts
![P1-4.jpg](https://i.loli.net/2020/09/23/yb42G1TIUPav3hV.jpg)

This visualization shows the relationship between time and counts of tweets. I am using different colored lines to represent different sentiment. 
A menu will be implemented for this project, so user can also select sentiment in this line chart. 

## Schedule of Deliverables
|Date  | Task | Description |
|--|--| -- |
| Week1 | Environment Setup | Configure the web environment, set up database, make sure the CSV is generating/loading properly.
| Week2 | Create Data Viz I| Create the first version of data viz, including pie chart and line chart. 
| Week3 | Create Data Viz II | Evaluate the data viz performance, create new viz if necessary. 
| Week4 | Create Data Viz III | Polish the data viz, add user interaction/menu.
| Week5 | Finalize Project | Finalize the project, make sure it ready for submission. 

- Configure the web environment: Make sure the web hosting is all set, domain name set up the correct A record points to the web host.
- Setup database: MySQL is appropriately setup.
- CSV is generating/loading correctly: Make sure CSV can generate dynamically, and front-end frameworks can have access to them.
- Create the first version of data viz: Create a pie chart and line chart based on the sketch.
- Evaluate the data viz performance: Trying to figure out if the current data viz is effective, is there a better way?
- Polish the data viz: Adjust the details of the data viz, front size is right, things are lined up...
- Add user interaction/menu: Add interactions/menu accordingly, to enhance the data viz.
- Finalize the project: Double check everything mentioned above.

