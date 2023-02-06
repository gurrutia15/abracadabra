const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Puerto 3000')
});

app.use(express.static('assets'))

const users = ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian']

app.get('/abracadabra/usuarios', (req, res) => {
    res.json ({ 'usuarios': users})
})

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usuarioInscrito = req.params.usuario.replace(/^\w/, (u)=>u.toUpperCase())
    const jugador = users.includes (usuarioInscrito)
    jugador == true ? next() :res.send('<img src="http://localhost:3000/who.jpeg">')

})

app.get('/abracadabra/juego/:usuario', (req, res) => {
    res.sendFile(__dirname + '/index.html')    
})

app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = Math.floor(Math.random() * (4 - 1)) + 1;
    const conejo = req.params.n
    conejo == n
    ? res.send('<img src="http://localhost:3000/conejito.jpg">')
    : res.send('<img src="http://localhost:3000/voldemort.jpg">')   
})
