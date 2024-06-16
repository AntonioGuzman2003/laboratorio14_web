const express=require('express');
const conectarDB = require('./config/db');
const app=express();
const cors = require("cors");
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));
// app.get('/',(req, res) => {
//     res.send("Hola mundo")
// })

app.listen(4000, ()=>{
    console.log("El servidor de Antonio esta corriendo");
})