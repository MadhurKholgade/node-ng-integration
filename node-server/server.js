const express = require("express");
const app = express();
const path = require('path');

const students = [
    {
        'firstname':'John',
        'lastname':'Doe',
        'city':'Newyork'
    },
    {
        'firstname':'Dahn',
        'lastname':'Wahlin',
        'city':'London'
    }
];

// Point static path to dist
const app_Path = path.join(process.cwd(), '../ng-client/dist');
app.use(express.static(app_Path, { etag: true, maxAge: 0 }));

// Catch all other routes and return the index file

app.get('/app', (req, res) => {
    res.send(students);
});

app.listen(3500, function(){
    console.log("Server has started on port: 3500");
});