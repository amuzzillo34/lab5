var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
    name = req.query.name;
    description = req.query.description;
    var newData = {
                "name":name,
                "description":description,
                "imageURL": "http://lorempixel.com/400/400/people"
    }
    data.friends.push(newData);
    res.render('index', data);
    
}