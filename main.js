var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['1555 Jackson','San Francisco','CA', '94612']
    },
    steve: {
        firstName: "Steve",
        lastName: "Palmer",
        number: "(206) 235-2254",
        address: ['One Microsoft Way','Redmond','WA','98052']
        
    }
    
};

var list = function (friends) {
    for (var key in friends) {
        console.log(key);

    }
};

var search = function(name) {
    for (var key in friends) {
        if(friends[key].firstName === name) {
        console.log(friends[key]);
return friends[key];
}
}

};
search("Steve");