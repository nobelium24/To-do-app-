const express = require ("express")
const res = require("express/lib/response")
const app = express()
const ejs = require ("ejs")
const bodyParser = require ("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs")
let newList = []
let inputedit;
let editMode = false;
let index
// app.get("/", (req, res)=> {
//     res.sendFile(__dirname+"/index.html")
// })
// app.get("/display", (req, res)=> {
//     res.render("display", {newList})
// })

app.get("/",  (req, res)=> {
    res.render("todo", {newList, inputedit, editMode})
    
  
})

app.post("/", (req, res)=> {
    console.log(req.body)
    newList.push(req.body)
    inputedit ='';
    // res.render("todo", {newList})
    res.redirect("/")
})

app.post("/delete", (req, res)=>{
    let index = req.body.del
    let ade = newList.filter((wole, i)=>(i!=index))
    newList=ade
    // res.render("todo", {newList})
    res.redirect("/")
})

app.post ("/edit", (req, res)=> {
    editMode=true
    index = (req.body.editbtn)
    let myItem = newList[index]
    inputedit = myItem.enter
    console.log();
    res.redirect("/")
    
})

app.post ("/update", (req, res)=> {
    editMode=false
    newList[index] = req.body
    inputedit = "";
    res.redirect("/")
})

app.listen(5000, ()=> {
    console.log(`This app is listening on Port 5000`);
})