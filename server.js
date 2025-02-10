const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static(__dirname)); //tells express to look in the main directory where server.js is located to look for any requested static files. 

// Create some data
const plants = {
  chard: {
    'name':'Swiss Chard',
    'cultivar':'Celebration',
    'maturity':20,
  },
  kale: {
    'name':'Kale',
    'cultivar':'Lacinato/Dinosaur',
    'maturity':21,
  },
  unknown: {
    'name':'You should plant something.',
    'cultivar':'Something yummy.',
    'maturity':30,
  }
}


// Set up the server and serve html page as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') /* look in the same location as this server.js and find this file */
})

// Create API endpoint that will send JSON objects
app.get('/api/:name', (req, res) => { // colon lets express know that the query parameter is going to be on the url
  const plantName = req.params.name.toLowerCase();

  if(plants[plantName]) {
    res.json(plants[plantName])
  } else {
    res.json(plants['unknown'])
  }
})

// tell server to listen for requests and confirm in console
app.listen(process.env.PORT || PORT, ()=> {
  console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
