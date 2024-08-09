const express = require("express")
const middleware = require('./middlewares/checker')

//setting up express App
const app = express()

//setting up middleware
app.use(express.static("public"))
app.use(middleware)


//port
const PORT = 8000

//setting up template engin
app.set("view engine", "ejs")


//setting up route handles 
app.get('/', (req, res)=>{
    res.render('home', { title:"Home"})
})

app.get('/service', (req, res)=>{
    res.render("service", { title: "Our service"})
})

app.get("/contact-us", (req, res)=>{
    res.render("contact-us", { title: "Contact-us"})
})
 
app.listen(PORT, ()=>{ console.log(`App listening on port ${PORT}`)})

