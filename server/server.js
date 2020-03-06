const path = require ('path');
const fs = require ('fs');
let dataPath = (path.join(__dirname,'../chirps.js.json'))
let chirps = [{
    name: 'james',
    message: 'simp salad1'},
    {name: 'james',
    message: 'simp salad2'},
    {name: 'james',
    message: 'simp salad3'},
    {name: 'james',
    message: 'simp salad4'},
    {name: 'james',
    message: 'simp salad5'},
];
fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err;
    console.log('got eeeem')
})
fs.readFile('chirps.json',(err, (data) => {
    if (err) throw err;
    let readChirps = JSON.parse(data);
    console.log(readChirps);}))
    
