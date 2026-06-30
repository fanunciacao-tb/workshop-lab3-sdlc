const express = require('express');
const app = express();
const fs = require('fs');

// 1. VULNERABILIDADE DE SQL INJECTION (CodeQL vai detectar isso)
// O aluno aprenderá que concatenar strings em query é perigoso.
app.get('/user', (req, res) => {
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = " + userId; 
    res.send("Executando query: " + query);
});

// 2. VULNERABILIDADE DE XSS (Cross-Site Scripting)
// O aluno aprenderá que nunca deve confiar em entrada de usuário no HTML.
app.get('/perfil', (req, res) => {
    const nome = req.query.nome;
    res.send("<h1>Bem-vindo, " + nome + "</h1>");
});

// 3. VULNERABILIDADE DE PATH TRAVERSAL
// O aluno aprenderá que o sistema de arquivos pode ser exposto se não validado.
app.get('/download', (req, res) => {
    const arquivo = req.query.file;
    // O CodeQL vai alertar que estamos usando uma variável não segura para abrir arquivos
    res.sendFile(__dirname + '/uploads/' + arquivo);
});

// 4. SEGREDOS HARDCODED (Secret Scanning vai detectar isso)
// O aluno aprenderá que chaves de API NUNCA devem estar no código.
const AWS_ACCESS_KEY = "AKIA-IMAGINARIA-123456789";
const STRIPE_SECRET = "sk_test_51MzExampleCode";

console.log("Servidor rodando...");
