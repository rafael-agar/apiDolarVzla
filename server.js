const express = require('express');
const cors = require('cors');
const { pyDolarVenezuela } = require("consulta-dolar-venezuela");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola, Bienvenido a la API de Dolar Vzla del BCV!');
});

app.get('/dolar-venezuela', async (req, res) => {
  const pyDolar = new pyDolarVenezuela('bcv');
  const data = await pyDolar.getMonitor("USD");
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
