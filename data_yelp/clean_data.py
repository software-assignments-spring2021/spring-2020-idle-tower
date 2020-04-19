# Used to clean dataset for only resurant data
# Originaly done in jupyter notebook
import pandas as pd

#import the data from yelp dataset 
business_df = pd.read_json(r"business.json", lines = True)
tip_df = pd.read_json(r"tip.json", lines = True)
review_df = pd.read_json(r"review.json", lines = True)


#get all the categories (exploration)
all_categories = []
empty_categories_count = 0 
list_item = ""
for index, item in enumerate(business_df.categories):
    #check if its already in all_categories
    if item != None: 
        item_split = item.split(sep = ", ")
        for i in item_split: 
            if i not in all_categories:
                all_categories.append(i)
    else:
        empty_categories_count += 1
    
print ("Number of empty categories", empty_categories_count)   

#get rid of all rows empty --> avoid diff in row error
na_business_df = business_df.dropna(subset = ["categories"])

# produce T/F series of rows that contain resturant + drops "None" rows 
TF_business_df = business_df.categories.str.contains("Restaurants").dropna()
print (TF_business_df)
print(TF_business_df.unique())

#verification that removed all the None
print (business_df.shape[0] == TF_business_df.shape[0] + empty_categories_count)

# produces final filtered data of resturants
filtered_business_df = na_business_df[TF_business_df]
