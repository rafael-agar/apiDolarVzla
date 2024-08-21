const express = require('express');
const cors = require('cors');
const { pyDolarVenezuela } = require("consulta-dolar-venezuela");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API de Dólar Vzla del BCV</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
      <div class="container mt-5">
        <h1 class="text-center">Bienvenido a la API de Dólar Vzla del BCV</h1>
        <p class="text-center">Esta API te permite obtener el valor del dólar en Venezuela utilizando el monitor del BCV.</p>
        <p class="text-center">Para obtener el valor del dólar, puedes acceder al endpoint <code>/dolar-venezuela</code>.</p>
        <hr>
        <p class="text-center">Desarrollado por Rafael Agar</p>
        <p class="text-center">
          <a href="mailto:info@rafaelagar.com">info@rafaelagar.com</a> |
          <a href="mailto:i.t.rafaelagar@gmail.com">i.t.rafaelagar@gmail.com</a> |
          <a href="https://rafaelagar.com" target="_blank">rafaelagar.com</a>
        </p>
      </div>
    </body>
    </html>
  `);
});


app.get('/dolar-venezuela', async (req, res) => {
  const pyDolar = new pyDolarVenezuela('bcv');
  const data = await pyDolar.getMonitor("USD");
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
