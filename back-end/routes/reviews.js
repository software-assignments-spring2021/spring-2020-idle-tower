var MongoClient = require('mongodb').MongoClient;

// Connect to the db its
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    
    db.collection('reviews', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    });
                
});