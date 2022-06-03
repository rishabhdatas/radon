const express = require('express');

const router = express.Router();

router.get('/movies', (req, res) =>{
    let movies = ['Lagaan', 'Avengers', '3 idiots', 'Batman'];
    res.send(movies);
})

    router.get('/movies/:indexNumber', (req, res) =>{
    let movies = ['Superman', 'Avengers', 'Spiderman', 'Batman'];
    if(req.params.indexNumber>=4){
      res.send("use a valid index");
      return;
    }
    res.send(movies[req.params.indexNumber]);  
})

router.get('/films', (req, res) => {
    let filmLists = [{
    "id": 1,
    "name": "The Shining"
}, {
    "id": 2,
    "name": "Incendies"
}, {
    "id": 3,
    "name": "Rang de Basanti"
}, {
    "id": 4,
    "name": "Finding Nemo"
}]

    res.send(filmLists);
})

router.get('/films/:indexNumber', (req, res) => {
    let filmLists = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    if(req.params.indexNumber>=4){
        res.send("No movie exists with this id");
        return;
    }
    res.send(filmLists[req.params.indexNumber]);
})
module.exports = router;
// adding this comment for no reason