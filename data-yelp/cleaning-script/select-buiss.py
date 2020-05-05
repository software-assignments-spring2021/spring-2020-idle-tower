# Select 100 resturants randomly to use since computing power and server space is limited 

import pandas as pd 

buis_df = pd.read_csv(r"cleaned_business.csv")

filtered = buis_df.loc[buis_df["review_count"] >= 50]
filtered = filtered.sample(n = 100)
ids = filtered["business_id"]

with open('list_buiss_id.txt', 'w') as f:
    for item in ids:
        f.write("%s\n" % item)