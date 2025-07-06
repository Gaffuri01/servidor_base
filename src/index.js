const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Listar todos
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Cadastrar usuario
app.post('/usuarios/', (req, res) => {
  const { nome, descricao } = req.body;
  db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, descricao], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, nome, descricao });
  });
});

// Atualizar usuario
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Usuario atualizado!');
  });
});

// Deletar usuario
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Usuario deletado!');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});