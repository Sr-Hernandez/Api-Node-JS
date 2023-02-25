const express = require('express');
const app = express();
const port = 3000;

let data = [];

// Endpoint para obtener todos los datos
app.get('/data', (req, res) => {
  res.send(data);
});

// Endpoint para agregar un nuevo dato
app.get('/data/agregar', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.send('Dato agregado exitosamente');
});

// Endpoint para actualizar un dato existente
app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  data[id] = newData;
  res.send('Dato actualizado exitosamente');
});

// Endpoint para eliminar un dato existente
app.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  data.splice(id, 1);
  res.send('Dato eliminado exitosamente');
});

app.listen(port, () => {
  console.log(`API corriendo en el puerto ${port}`);
});