Where the Web Server starts listening on a given port
    bin/www - at the bottom of the page.
 App-level configurations that setup:
The View Engine
    line 14 of app.js
JSON Parsing
    line 17 of app.js
Routes
    lines 7, 8 of app.js 
Error Handling
    line 31 of app.js 
Additional Middleware
    bin/www
Route Handlers
    ******************************
View Engine Templates
    in views folder
Implement your own Route Handler that will render a new view
    see routes/profile.js
Create a new View Template
    see views/footer.js 
Create or Find a JSON Dataset
    ********* started jsoLocation.js - need to link
    go to mockaroo, get it to generate a dataset, put in code, maie a for loop that displays all of the people.
In the Handler, extract the JSON data for use in JavaScript
Pass that data to the Template
Hydrate your EJS view the JSON data
Launch your Express App and test it using a browser by hitting your new route
Stretch Your Thoughts: answer the following questions: 

What type of resources can you host with Express?
What are the benefits of using a View Engine overusing Vanilla technologies?
Why does the Express Generator split up the functionality into so many files?

// Array to hold all of the people objects
const people = ['Hello 1, 2, 3'];
// Function to generate new people objects
const peopleFactory = [{
  "id": 1,
  "name": "Arni Ryal",
  "email": "aryal0@imgur.com",
  "gender": "Male",
  "ip_address": "136.236.215.93"
}, {
  "id": 2,
  "name": "Sterne Scherer",
  "email": "sscherer1@addthis.com",
  "gender": "Male",
  "ip_address": "163.147.1.88"
}, {
  "id": 3,
  "name": "Trish Maffia",
  "email": "tmaffia2@scribd.com",
  "gender": "Female",
  "ip_address": "169.32.77.25"
}, {
  "id": 4,
  "name": "Genevieve Mattingley",
  "email": "gmattingley3@ezinearticles.com",
  "gender": "Female",
  "ip_address": "7.69.15.95"
}, {
  "id": 5,
  "name": "Agace Stout",
  "email": "astout4@slate.com",
  "gender": "Female",
  "ip_address": "142.148.102.201"
}, {
  "id": 6,
  "name": "Jeth Strotone",
  "email": "jstrotone5@ihg.com",
  "gender": "Male",
  "ip_address": "180.165.13.137"
}, {
  "id": 7,
  "name": "Thor Whatford",
  "email": "twhatford6@ebay.co.uk",
  "gender": "Male",
  "ip_address": "25.186.241.225"
}, {
  "id": 8,
  "name": "Rutledge Usborn",
  "email": "rusborn7@cbslocal.com",
  "gender": "Male",
  "ip_address": "199.63.97.249"
}, {
  "id": 9,
  "name": "Nathalia Chalke",
  "email": "nchalke8@utexas.edu",
  "gender": "Female",
  "ip_address": "202.212.158.162"
}, {
  "id": 10,
  "name": "Tonnie Stoddart",
  "email": "tstoddart9@dagondesign.com",
  "gender": "Male",
  "ip_address": "164.0.191.241"
}, {
  "id": 11,
  "name": "Hollis Tommasi",
  "email": "htommasia@gravatar.com",
  "gender": "Male",
  "ip_address": "200.154.149.20"
}, {
  "id": 12,
  "name": "Gustaf Domenicone",
  "email": "gdomeniconeb@jugem.jp",
  "gender": "Male",
  "ip_address": "166.11.187.251"
}, {
  "id": 13,
  "name": "Steve Clemmow",
  "email": "sclemmowc@usda.gov",
  "gender": "Male",
  "ip_address": "6.139.97.105"
}, {
  "id": 14,
  "name": "Elga Pawfoot",
  "email": "epawfootd@google.com.hk",
  "gender": "Female",
  "ip_address": "21.42.127.192"
}, {
  "id": 15,
  "name": "Brok Macknish",
  "email": "bmacknishe@ow.ly",
  "gender": "Male",
  "ip_address": "165.229.26.81"
}, {
  "id": 16,
  "name": "Corey Cumine",
  "email": "ccuminef@live.com",
  "gender": "Male",
  "ip_address": "108.166.169.244"
}, {
  "id": 17,
  "name": "Laughton Toffolini",
  "email": "ltoffolinig@issuu.com",
  "gender": "Male",
  "ip_address": "174.70.104.221"
}, {
  "id": 18,
  "name": "Cayla Doll",
  "email": "cdollh@amazon.co.jp",
  "gender": "Female",
  "ip_address": "72.230.33.240"
}, {
  "id": 19,
  "name": "Colet Toten",
  "email": "ctoteni@t-online.de",
  "gender": "Male",
  "ip_address": "254.144.29.113"
}, {
  "id": 20,
  "name": "Quentin Novic",
  "email": "qnovicj@gov.uk",
  "gender": "Male",
  "ip_address": "71.32.73.190"
}]
const peopleRoute = '/people';
// Get route should just return the people array
app.get(peopleRoute, (req, res, next) => {
    // Method - HTTP method used to make the request
    console.log('Method: ', req.method);
    /* Host - www.google.com, localhost, where app is accessed by client (domain name or ip address)*/
    console.log('Host: ', req.host);
    // Path - the location of the resource requested. (/people in this case)
    console.log('Path: ', req.path);
    // Headers - 
    console.log('Headers: ', req.headers);
    // Query string - string the url has if there's a query string
    console.log('Query String: ', req.query);
    // Body - the request must contain a body for ths to show up
    console.log('Body: ', req.body);
    // Params - in route, if followed by another parameter i.e. ( /people/:id) then id is the param
    console.log('Params: ', req.params);
    if (people.length === 0) {
        res.status(400).send('There are no people.');
        return;
    }
    res.json(people);
});
app.post(peopleRoute, (req, res, next) => {
});
app.put(peopleRoute, (req, res, next) => {
    // This is how to set up a status code for an error
    const body = req.body;
    if (typeof body.firstName !== 'string' || typeof body.lastName !== 'string' ||
    typeof body.age !== 'number') {
        res.status(400).send('Invalid person data.');
        return;
    } 
    people.push(peopleFactory(body));
    res.json({message: 'People updated', data: people});
});
app.delete(peopleRoute, (req, res, next) => {
});
app.patch(peopleRoute, (req, res, next) => {
});
