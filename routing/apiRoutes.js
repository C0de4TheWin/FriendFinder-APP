//Importing Data then exporting


//Got stuck on this API route. Keeps displaying a 'cannot find module.../data/friends' spent an hour staring at my screen here.

var superfriendList = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log(req.body);
            return res.json(friends);
    
    });
    app.post("/api/friends", function (req, res) {
        if (superfriendList.scores === true) {
            superfriendList.push(req.body);
            res.json(true);
    
        }
    })}