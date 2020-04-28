const express = require('express');
const port = 3000;

const app = express();

//app.use(express.static('public'));
app.set('view engine', 'ejs');

// create a route for the index page
app.get('/index', (req, res, next) => {
    res.render('pages/index', {
        color: 'red',
        title: 'Welcome',
        users,
        element: '<div>Some text</div>',
    });
});

// create a route for the index page
app.get('/', (req, res, next) => {
  res.render('pages/landing', {
      color: 'red',
      title: 'Welcome',
      users,
      element: '<div>Some text</div>',
  });
});



const profileLookup = (_id) => {
    /* 
        This function should return an array of matching users
        Hopefully that array only has 1 element which is THE
        matching user. So the result should look like:
        [{
            name: 'Brian Murdock',
            email: 'brian@helio.com',
            id: 312,
        }]
    */
    const id = parseInt(_id);
    return users.filter((user) => {
        return user.id === id;
    });
};

app.get('/profile/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let user = profileLookup(id);
    if (user.length === 0) {
        console.log('user not found..');
        res.render('pages/notfound');
        return;
    }
    user = user[0];

    console.log('found user: ', user);
    res.render('pages/profile', {
        title: `Profile > ${users.first_name}`,
        user,
    });
});

const users = [{
  "id": 1,
  "name": "Werner Olczyk",
  "email": "wolczyk0@howstuffworks.com",
  "gender": "Male",
  "ip_address": "54.160.211.154"
}, {
  "id": 2,
  "name": "Francesco Dressell",
  "email": "fdressell1@posterous.com",
  "gender": "Male",
  "ip_address": "178.138.59.20"
}, {
  "id": 3,
  "name": "Reinwald Knottley",
  "email": "rknottley2@stumbleupon.com",
  "gender": "Male",
  "ip_address": "163.180.87.78"
}, {
  "id": 4,
  "name": "Jeanna Cruikshanks",
  "email": "jcruikshanks3@homestead.com",
  "gender": "Female",
  "ip_address": "211.246.40.7"
}, {
  "id": 5,
  "name": "Jeth Varran",
  "email": "jvarran4@163.com",
  "gender": "Male",
  "ip_address": "210.19.241.106"
}, {
  "id": 6,
  "name": "Brittne Dunstone",
  "email": "bdunstone5@scientificamerican.com",
  "gender": "Female",
  "ip_address": "146.29.135.127"
}, {
  "id": 7,
  "name": "Davey Yakovitch",
  "email": "dyakovitch6@sogou.com",
  "gender": "Male",
  "ip_address": "33.22.118.139"
}, {
  "id": 8,
  "name": "Homer Cherm",
  "email": "hcherm7@list-manage.com",
  "gender": "Male",
  "ip_address": "101.247.66.69"
}, {
  "id": 9,
  "name": "Kristan Mirfin",
  "email": "kmirfin8@google.com.br",
  "gender": "Female",
  "ip_address": "59.170.25.74"
}, {
  "id": 10,
  "name": "Jo Cutts",
  "email": "jcutts9@about.com",
  "gender": "Female",
  "ip_address": "118.230.149.231"
}, {
  "id": 11,
  "name": "Walsh Tidmas",
  "email": "wtidmasa@digg.com",
  "gender": "Male",
  "ip_address": "171.234.122.77"
}, {
  "id": 12,
  "name": "Olimpia Pottie",
  "email": "opottieb@bloglines.com",
  "gender": "Female",
  "ip_address": "107.235.68.29"
}, {
  "id": 13,
  "name": "Waneta Moscone",
  "email": "wmosconec@hibu.com",
  "gender": "Female",
  "ip_address": "19.10.139.228"
}, {
  "id": 14,
  "name": "Carl Zahor",
  "email": "czahord@netvibes.com",
  "gender": "Male",
  "ip_address": "205.21.191.115"
}, {
  "id": 15,
  "name": "Jeremy Blaxall",
  "email": "jblaxalle@hubpages.com",
  "gender": "Male",
  "ip_address": "1.33.10.13"
}, {
  "id": 16,
  "name": "Tracey Jerrome",
  "email": "tjerromef@japanpost.jp",
  "gender": "Female",
  "ip_address": "61.57.39.223"
}, {
  "id": 17,
  "name": "Lester Canacott",
  "email": "lcanacottg@pen.io",
  "gender": "Male",
  "ip_address": "190.166.43.37"
}, {
  "id": 18,
  "name": "Rudolph Coopey",
  "email": "rcoopeyh@ucsd.edu",
  "gender": "Male",
  "ip_address": "210.54.104.171"
}, {
  "id": 19,
  "name": "Abbie Donkersley",
  "email": "adonkersleyi@homestead.com",
  "gender": "Male",
  "ip_address": "89.99.70.21"
}, {
  "id": 20,
  "name": "Frank Ashbrook",
  "email": "fashbrookj@cdbaby.com",
  "gender": "Female",
  "ip_address": "248.34.140.151"
}]
app.listen(port, (err) => {
    if (err) {
        console.log('Error launching server: ', err);
    }
    console.log(`Application is listening on port ${port}...`);
});