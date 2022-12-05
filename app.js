// Requiring module
const express =require('express');

// Creating express object
const app = express();

//Handling GET request
app.get('/',(req, res) =>{
    res.send('A api esta rodando ' + 'no meu servidor')
   res.end() })

   //Handling GET request
app.get('/retorno',(req, res) =>{
    res.send('estou conseguindo aprender nodejs')
   res.end() })

   // Port Number
   const PORT = process.env.PORT ||5000;

   //Server Setup
   app.listen(PORT,console.log( `Aerver started on port ${PORT}`));