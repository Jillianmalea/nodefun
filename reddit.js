const path = require('path');
const fs = require('fs');
const request = require('request')
let arr = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) throw err

    JSON.parse(body).data.children.forEach(pizza => {
        {
            arr.push({
                author: pizza.data.author,
                url: pizza.data.url,
                title: pizza.data.url
            })
        }
    });
    console.log(tomatos);
    fs.writeFile(datePath, JSON.stringify(tomato), err => {
        if (err) throw err;
        console.log('got it');
    
    })

})