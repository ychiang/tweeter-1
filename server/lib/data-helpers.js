"use strict";

module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to MongoDB
    saveTweet: function(newTweet, callback) {
      db.collection('tweeter').insertOne(newTweet) 
        
      callback(null, true);
    },
    // Get all tweets in MongoDB
    getTweets: function(callback) {
      const sortNewestFrist = (a, b) => a.created_at - b.created_at;
      db.collection('tweeter').find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        } else {
          callback(null, tweets.sort(sortNewestFrist));
          }
      });
    }
  }
}
