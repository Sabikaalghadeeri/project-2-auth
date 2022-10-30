
   router.delete('/:id', (req, res) =>{
    console.log('This is my req Params object', req.params)
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
 let dinoData = JSON.parse(dinosaurs)
 
 // remove the deleted dinosaur from the dinosaurs array
 dinoData.splice(req.params.idx, 1)
 
 // save the new dinosaurs to the data.json file
 fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
 
 //redirect to the GET /dinosaurs route (index)
 res.redirect('/dinosaurs')
})