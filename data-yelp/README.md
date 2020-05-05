# Overivew 
- I tried 2 different NLP methods and selected the best based on accuracy 
- Determined a "Food Check" Score based on average of my sentiment classification for each review in a resturant 
- Picked the top 5 most postive and most negative reviews for each resturant 

## Folders 
- cleaning-script: the python script I used to clean yelp data for resturants only 
- processed-files: buis and review csv files that we used in the final deployment 
- training-testing-set: the answer key 

## NLP methods 
1. BoW selecting for all words --> Naive Bayes (80.33% accuracy)
2. BoW selecting for only adjectives --> Naive Bayes (70% accuracy)


## Answer Key 
- 70:30 split for training and test set respectively 
- Answer key contains a total of 1000 labled reviews 
    - 1 = Positive Sentiment
    - 0 = Negative Sentiment 

