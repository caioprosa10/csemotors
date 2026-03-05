const express = require('express');
const path = require('path');
const fs = require('fs'); // Módulo para checar arquivos
const app = express();
const port = 5500;

// 1. Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. --- BLOCO DE DEBUG (PARA RESOLVER O ERRO DE VEZ) ---
const publicPath = path.join(__dirname, 'public');

console.log("=========================================");
console.log("🔍 DIAGNÓSTICO DO SERVIDOR:");
console.log("Pasta atual do projeto:", __dirname);
console.log("Buscando pasta 'public' em:", publicPath);

if (fs.existsSync(publicPath)) {
    console.log("✅ SUCESSO: A pasta 'public' foi encontrada!");
    console.log("Conteúdo dentro da public:", fs.readdirSync(publicPath));
} else {
    console.log("❌ ERRO CRÍTICO: A pasta 'public' NÃO existe nesse local!");
    console.log("Arquivos que eu vejo na raiz:", fs.readdirSync(__dirname));
}
console.log("=========================================");

// 3. Configuração de Arquivos Estáticos (CSS, Imagens)
app.use(express.static(publicPath));

// 4. Rota Principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// 5. Inicialização
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
});