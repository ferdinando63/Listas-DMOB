const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();
__dirname = path.resolve();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render(__dirname + '/Exe1.html', { valor: "" });
})

app.post('/valor', (req, res) => {

  var form = req.body.valor;
  
  console.log(req.body);
  var valor = 0;
  for (var i = 0; i < form.length; i++) {
    valor += parseInt(form[i]);
    console.log(form[i])
  }
  console.log(valor)
  res.render(__dirname + '/Exe1.html', { valor: "Resultado: " + valor })
})

app.get('/Exe2', (req,res) => {

  res.render(__dirname+'/Exe2.html',{result: ""});
})

app.get('/operacao', (req,res) => {
  var n1 = req.query.n1;
  var n2 = req.query.n2;
  var sub = 0;
  sub = (parseInt(n1)) - (parseInt(n2));
    res.render(__dirname+'/Exe2.html',{result: "Resultado da Subtração de "+n1+" - "+ n2 +" = "+ sub});
})

app.post("/operacao", (req,res)=>{
  var nm1 = req.body.n1;
  var nm2 = req.body.n2;
  var soma = parseInt(nm1) + parseInt(nm2)
  
  res.render(__dirname+'/Exe2.html',{result: "Resultado da Soma de "+nm1+" + "+nm2+" = "+ soma});
})

app.listen(process.env.port || 3001);

console.log('Running at Port 3001');