# spring-2020-idle-tower

# Food Check 

## Project Vision Statement
A web app for restaurant owners to better understand their business. 

## Project Title
Food Check

## Themes 
0. UX
1. Front End 
2. Backend 
3. Database Integration 
4. Deployment 

## Product Roadmap 
Sprint 0 (UX)  --> Mar 03 <br/>
Sprint 1 (Front End)  --> Mar 26 <br/>
Sprint 2 (Back End) --> Apr 14 <br/>
Sprint 3 (Database Integration) --> Apr 28 <br/>
Sprint 4 (Deployment) --> May 07 <br/>


## What and Why?
For restaurant owners:
The F&B industry is fairly not digitalized, yet there are a lot of customer review sites that are online that a restaurant
owner could leverage to better understand their own business and how they fair against their competitors. 

For to-be/ aspiring owners: 
Getting into F&B could be daunting. Getting data on a specific market and landscape could also be challenging. This platform 
could provide insights on present restaurants and how they are doing, what they are doing well, what are popular in certain 
neighbourhoods. 

## For Whom?
- current restaurant owners 
- to-be restaurant owners/ aspiring restaurant owners 
- possibly expand to B2C

## How? 
We will show different metrics that are insights to (to-be/ aspiring/ current) restaurant owners to help them better understand their 
online reputation, through analyzing various components on online review platforms 
Metrics: 
1. Changes over time 
- tracking the change in star ratings over time 
- tracking the growth of reviews/ stars over time 

2. Sentiment Analysis on restaurant reviews 
- Show most positive and negative comments on the restaurants 
- an overall food-check score that combines sentiments on reviews and star ratings 

3. Analysis on competitors (either restaurants nearby and of simliar cuisine/business model) 
- Opening hours (we could compare their peak hours) 
- Features: Take out/ online seating
- Pricing 
- Ratings (how others fair against yours) 

4. Overall Insights:
- What's popular in the area (could be a particular cuisine) 
- Most Popular restaurants in an area 

## Scope 
This will be a full-fledge web app that we will have include data science/ backend/ frontend. Hence division of labour would 
be distributed fairly evenly and we could all pick up new technologies in our interested fields respectively.
The technologies we will be learning are fairly commonplace and API's/ datasets are very well documented.

Difficulties: 
- myraid of new technologies we need to learn (NLP/AWS/MERN stack) 
- developing accurante NLP analysis with very little experience 
- Combing data on different API's will require some time and skills
- Getting most recent data will be constrained 

## Release Plan 
- We aim to release after 3rd sprint. We belive that after the database is linked we will be able to release the inital version that can do the core features of NLP and rating tracking. From there more features and user stories will be added for greater functionality 


## Resources
Yelp Data: https://www.yelp.com/dataset/download

Contributing: https://github.com/nyu-software-engineering/spring-2020-idle-tower/blob/master/CONTRIBUTING.md

Prototype: https://github.com/nyu-software-engineering/spring-2020-idle-tower/blob/master/ux-design/Agile-wireframe.xd

## Running on a remove machine

1. Clone the repo onto the remote machine.
2. Create a `config.json` file in the same directory as the repo (NOTE: not in the repo, just above it).
3. Create a `.env` file in front-end directory.
4. cd into back-end diretory, then run `npm run forever`.
5. cd into front-end directory, then run `npm run build`, then run `npm run prod`.

### How to Update

1. Git pull the updates.
2. Run `forever stopall`
3. Run `npm run forever`