const express = require("express")
const cors = require("cors")



const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://nxcnoxqbimurjhygwyds.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Y25veHFiaW11cmpoeWd3eWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MzYwNjEsImV4cCI6MjAyMjMxMjA2MX0.6bOQFT0V4co4xVYO7PWXgk5Vrhr-U_SY2gaOHzTucF0"
const supabase = createClient(supabaseUrl, supabaseKey)

const server = express()
server.use(cors())
server.use(express.json())
server.listen(3000,function(){
    console.log('vas-y')
})



server.post('/',async function(req,res){
  let nom = req.body.nom
  let prenom = req.body.prenom

  const { data, error } = await supabase
    .from('etudiants')
    .insert([
      { nom: nom, prenom: prenom },
    ])
    .select()
    console.log(data);
    if(error){
      res.status(500)
    }else{
      res.status(200).json()
    }
  
})




server.post('/ctrl', async function(req, res){
    nom = req.body.nom
    prenom=req.body.prenom
  let { data: triches, error} = await supabase
  .from('etudiants')
  .select('id')
  .eq('nom', nom)
  .eq('prenom', prenom)


  id = triches[0].id
  
  const { data} = await supabase
  .from('triches')
  .insert([
    { id_etudiant: id, triche: 'copier ou coller' },
  ])
  .select()
})



server.post('/droit', async function(req, res) {
  nom = req.body.nom
  prenom=req.body.prenom
  let { data: triches, error} = await supabase
  .from('etudiants')
  .select('id')
  .eq('nom', nom)
  .eq('prenom', prenom)


  id = triches[0].id

  const { data} = await supabase
  .from('triches')
  .insert([
    { id_etudiant: id, triche: 'clic droit' },
  ])
  .select()
});


server.post('/sortie', async function(req, res) {
  nom = req.body.nom
  prenom=req.body.prenom

  let { data: triches, error} = await supabase
  .from('etudiants')
  .select('id')
  .eq('nom', nom)
  .eq('prenom', prenom)


  id = triches[0].id

  const { data} = await supabase
  .from('triches')
  .insert([
    { id_etudiant: id, triche: 'sortie de page' },
  ])
  .select()
});





