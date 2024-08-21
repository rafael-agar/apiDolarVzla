const express = require('express');
const cors = require('cors');
const { pyDolarVenezuela } = require("consulta-dolar-venezuela");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/dolar-venezuela', async (req, res) => {
  const pyDolar = new pyDolarVenezuela('bcv');
  const data = await pyDolar.getMonitor("USD");
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
