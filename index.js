const express = require('express');

const server = express();

server.use(express.jsonn());

const games = ('Call of Duty', 'League of Legends', 'DOTA', 'Valorant', 'Fortnite' );


// retornar um jogo
server.get('/games/:index', (req, res) => {
    const { index } = req.params;

    return res.json(games[index]);
});

// retornar todos os jogos
server.get('/games', (req, res) => {
    return res.json(games);
});


//criar um novo jogo 
server.post('/games', (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(games);
});


//update de um jogo
server.put('/games/:index', (req, res) => {
    const { index } = req.params;  
    const { name } = req.body;

    games[index] = name;

    return res.json(games);
});


//excluir um jogo
server.delete('/games/:index', (req, res) => {
    const { index } = req.params;

    games.splice(index, 1);
    return res.json({message:"Você deletou um jogo do nosso sistema!"});
});


server.listen(3000);