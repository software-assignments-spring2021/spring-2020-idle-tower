#this script is used to generate the final script
#references files in cleaning-script folder dont want to double upload 
#============================================

#import the files 
import re 
import nltk
import ssl
import pandas as pd 
import numpy as np
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import BernoulliNB
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score

cv = CountVectorizer()
train_data_2 = pd.read_csv('training_set.csv')
test_data = pd.read_csv('testing_set.csv')

X_train = cv.fit_transform(train_data_2["Review"]).toarray()
y_train = train_data_2["Liked"].values

X_test = cv.transform(test_data["Review"]).toarray()
y_test = test_data["Liked"].values

#train the model 
classifier = BernoulliNB(alpha=0.8)
classifier.fit(X_train, y_train)


# Predicting the Test set results
y_pred = classifier.predict(X_test)

# Making the Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print ("Confusion Matrix:\n",cm)

# Accuracy, Precision and Recall
score1 = accuracy_score(y_test,y_pred)

score2 = precision_score(y_test,y_pred)
score3= recall_score(y_test,y_pred)
print("\n")
print("Accuracy is ",round(score1*100,2),"%")
print("Precision is ",round(score2,2))
print("Recall is ",round(score3,2))

#import files 
business = pd.read_csv("cleaned_business.csv")
reviews = pd.read_csv("cleanish_reviews.csv") 
ids = pd.read_csv('list_buiss_id.txt', sep=" ", header=None)
ids.columns = ["id"]

reviews = reviews.drop(["Unnamed: 0"], axis = 1)

columns_review = ["review_id","user_id","business_id","stars","useful","funny","cool","text","date","sentiment"]
final_reviews = pd.DataFrame(columns= columns_review)

for i in range(len(ids)): 
    id_curr = ids.iloc[i].id
    
    df = df.append({"business_id": id_curr}, ignore_index=True)
    
    #Review data that matches the current business id 
    all_reviews = reviews[reviews["business_id"] == id_curr]
    
    #vectorize the reviews for that resturant 
    X_test = cv.transform(all_reviews["text"]).toarray()
    #creates the predicted sentiment for each review 
    y_pred = classifier.predict(X_test)
    #you dont have to round 
    rounded_y_pred = np.mean(y_pred)*100
    #update the column with our calculated score 
    business.loc[business['business_id'] == id_curr, "food_check_score"] = rounded_y_pred
    
    
    #This is for Agile dont regard this part 
    #===========================================
    #add a column for sentiment in all_reviews 
    all_reviews["sentiment"] = y_pred
    
    #split positive and negative 
    only_positive = all_reviews.loc[all_reviews['sentiment'] == 1]
    only_negative = all_reviews.loc[all_reviews['sentiment']==0]
    
    #order by the rankings and take the top 5 of each pos/neg
    only_positive = only_positive.sort_values(by=["stars"],ascending = False).head(5)
    only_negative = only_negative.sort_values(by=["stars"],ascending = True).head(5)
    
    
    #append the data frame to a final one containing all the reviews 
    final_reviews = final_reviews.append(only_positive)
    final_reviews = final_reviews.append(only_negative)
    #pd.concat([final_reviews,only_positive])
    

#export 
final_reviews.to_csv("reviews.csv")
business.to_csv("final_business.csv")
