# 🚀 Getting Started

## Passos rápidos para começar

### 1️⃣ Abrir localmente

```bash
# Opção A: Duplo clique em index.html
# Opção B: Abrir com servidor local
python -m http.server 8000
# Depois acesse: http://localhost:8000
```

### 2️⃣ Editar textos

Abra `index.html` em seu editor favorito (VS Code, Sublime, etc):
- Procure por `<label>` para mudar perguntas
- Procure por `placeholder=` para mudar dicas
- Procure por `<h1>` e `<p>` para mudar títulos

### 3️⃣ Customizar cores

Abra `src/css/styles.css`:
```css
:root {
  --gold: #c9a84c;      ← Sua cor primária
  --black: #050507;     ← Fundo escuro
  --white: #f0ede8;     ← Cor do texto
}
```

### 4️⃣ Colocar sua logo

1. Prepare uma imagem PNG 300x300px com fundo transparente
2. Renomeie para `supere.png`
3. Substitua `src/img/supere.png`
4. Pronto!

### 5️⃣ Publicar no GitHub

```bash
# Criar repositório
git init
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub (https://github.com/new)
git remote add origin https://github.com/seu-usuario/supere.git
git push -u origin main

# Deploy automático com GitHub Pages
# Settings > Pages > Deploy from branch > main / root
```

Seu site estará em: `https://seu-usuario.github.io/supere`

## 📋 Checklist de setup

- [ ] Abrir `index.html` no navegador
- [ ] Testar formulário (preencher todos os passos)
- [ ] Mudar textos conforme necessário
- [ ] Atualizar cores
- [ ] Adicionar sua logo
- [ ] Testar em mobile
- [ ] Criar repositório GitHub
- [ ] Fazer deploy
- [ ] Compartilhar link com comunidade

## 💡 Próximas melhorias opcionais

```javascript
// Salvar dados em servidor
async function submitForm() {
  // ... validação ...
  
  const response = await fetch('seu-servidor.com/api/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
  });
  
  // ... resto do código ...
}
```

## 🆘 Troubleshooting

### "Imagem não aparece"
- Certifique-se de que `src/img/supere.png` existe
- Verifique o caminho em `index.html`

### "Estilos não carregam"
- Certifique-se de que `src/css/styles.css` existe
- Limpe o cache do navegador (Ctrl+Shift+R)

### "JavaScript não funciona"
- Abra DevTools (F12) e veja o console de erros
- Certifique-se de que `src/js/main.js` existe

## 📞 Suporte

Para dúvidas:
1. Consulte `README.md`
2. Consulte `STRUCTURE.md`
3. Consulte `GIT_SETUP.md`

## 🎉 Pronto!

Seu website está pronto para receber visitantes da Igreja Batista Supere!

---

**Desenvolvido com ❤️**
