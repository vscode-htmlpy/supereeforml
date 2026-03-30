# Git Setup Guide

## Inicializar repositório

```bash
git init
git add .
git commit -m "Initial commit: Igreja Batista Supere form"
```

## Adicionar remote (GitHub)

1. Crie um repositório no GitHub: https://github.com/new
2. Execute:

```bash
git remote add origin https://github.com/seu-usuario/supere.git
git branch -M main
git push -u origin main
```

## Fazer deploy

### GitHub Pages

1. Vá em **Settings** > **Pages**
2. Selecione `main` como branch
3. Marque `/root` como pasta
4. Seu site estará disponível em: `https://seu-usuario.github.io/supere/`

### Netlify

1. Acesse https://netlify.com
2. Clique em "New site from Git"
3. Conecte seu GitHub
4. Configure:
   - Build command: deixe em branco
   - Publish directory: deixe em branco
5. Deploy automático a cada push!

### Vercel

1. Acesse https://vercel.com
2. Importe seu repositório
3. Deploy automático funciona out-of-the-box

## Local development

```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

## Estrutura final esperada

```
supere/
├── .git/              # Git repository
├── .gitignore
├── README.md
├── package.json
├── index.html
├── src/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/supere.png
```

## Comandos úteis

```bash
# Ver status
git status

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Sua mensagem aqui"

# Fazer push
git push

# Ver histórico
git log --oneline
```

---

Seu projeto está pronto para ser versionado e compartilhado! 🎉
