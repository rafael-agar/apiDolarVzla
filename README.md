consulta-dolar-venezuela

Es una librería de Node.js que te permite obtener los valores del dólar en diferentes monitores en Venezuela. La librería es fácil de usar y ofrece una manera rápida y eficiente de obtener información relevante sobre el mercado cambiario en Venezuela.

Instalación Para instalar la librería, puedes usar el siguiente comando en tu terminal:

npm install consulta-dolar-venezuela Uso La clase pyDolarVenezuela de la librería te permite obtener los valores del dólar en diferentes monitores en Venezuela.

Métodos disponibles getMonitor(monitorCode): Este método te permite obtener los valores de un monitor específico. El parámetro monitorCode es el código del monitor que se desea obtener. getAllMonitors(): Este método te permite obtener los valores de todos los monitores.

Para ver un ejemplo y mas detalles de este paquete NPM, visitar la pagina oficial: https://www.npmjs.com/package/consulta-dolar-venezuela

EJEMPLO JAVASCRIPT

window.addEventListener("DOMContentLoaded", () => { const precio = document.getElementById("dolarValue");

fetch('http://DOMINIO/dolar-venezuela')
    .then(response => response.json())
    .then(data => {
        precio.innerText = `El valor del dólar en Venezuela es: ${data.price} ${data.symbol}`;
    })
    .catch((error) => console.log('Error:', error));
});

https://rafaelagar.com
info@rafaelagar.com
i.t.rafaelagar@gmail.com