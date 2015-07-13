Meteor.publish("articles", function () {
    return Articles.find({
        $or:[
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]},
            {$and:[
              {"owner": this.userId},
              {"owner":{$exists:true}}
            ]}       
]

});
});
