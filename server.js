const express = require('express')

require('dotenv').config()

const mongoConfig = require('./config')

let pokemon = require('./models/pokemon')

const Pokemons = require('./models/Pokemons')

const app = express()

const PORT = 3000

mongoConfig()


// Load the create engine function
const jsxEngine = require('jsx-view-engine')

// load the method override function
const methodOverride = require('method-override')

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }))

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// give our form more HTTP methods to work with like DELETE and PUT
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    // console.log(pokemon)
res.send('Welcome to the pokemon app')    
})

app.get('/pokemon', async (req, res) => {
    let pokemonsData
    try { 
        pokemonsData = await Pokemons.find()
        console.log('got to db ', pokemonsData)
    } catch(err){
        console.log('err: ' + err)
    }
    
    res.render('Index', { pokemon: pokemonsData })
})


app.get('/pokemon/new', async (req, res) => {
    res.render('New')
})

app.delete('/pokemon/:id', async (req, res) => {
    try {
        await Pokemons.findByIdAndDelete(req.params.id)
    }catch (err) {
        console.log('err delete: ' + err)
    }
    res.redirect('/pokemon')
})

app.post('/pokemon', async (req, res) => {
    let pokemon = req.body
    pokemon.img = `http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}`

    try {
        await Pokemons.create(pokemon)
        console.log(pokemon)
        
    }catch(err) {
        console.log('err post: ' + err)
    }

    res.redirect('/pokemon')
})

app.get('/pokemon/:id', async (req, res) => {

    try {
       let pokemon =  await Pokemons.findById(req.params.id) 
       res.render('Show', { pokemon })
    }catch(err) {
        console.log('err get: ' + err)
        res.redirect('/pokemon')
    }

    
})



app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})