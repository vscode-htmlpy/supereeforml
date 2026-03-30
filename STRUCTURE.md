# 📁 Estrutura do Projeto

```
supere/
│
├── 📄 index.html              ← Página principal (HTML limpo)
├── 📄 README.md               ← Documentação do projeto
├── 📄 GIT_SETUP.md            ← Guia para inicializar Git e deploy
├── 📄 package.json            ← Metadados do projeto
├── 📄 .gitignore              ← Arquivos ignorados no Git
│
└── src/                       ← Código-fonte
    │
    ├── css/
    │   └── 🎨 styles.css      ← Todos os estilos (CSS puro, sem framework)
    │
    ├── js/
    │   └── ⚙️ main.js         ← Toda a lógica JavaScript
    │
    └── img/
        └── 🖼️ supere.png      ← Logo circular (PNG com transparência)
```

## 📋 Descrição dos arquivos

### **Raiz do projeto**

| Arquivo | Propósito |
|---------|-----------|
| `index.html` | Página HTML principal com semântica limpa |
| `README.md` | Documentação completa do projeto |
| `GIT_SETUP.md` | Guia passo-a-passo para git e deploy |
| `package.json` | Metadados, scripts e dependências |
| `.gitignore` | Arquivos/pastas ignoradas no versionamento |

### **src/ — Código-fonte**

#### `css/styles.css`
- 1000+ linhas de CSS moderno
- Variáveis CSS (`--gold`, `--black`, etc)
- Animações suaves
- Media queries responsivas
- Sem dependências

#### `js/main.js`
- Funcionalidade completa do formulário
- Gerenciamento de estado
- Validações
- Cursores customizados
- Sem jQuery, sem frameworks — JavaScript puro

#### `img/supere.png`
- Logo circular com fundo transparente
- Otimizado para web
- 80x80px (escalável com CSS)

## 🎯 Arquitetura

### Separação de Responsabilidades

```
HTML    → Estrutura e semântica
CSS     → Visual e animações
JS      → Interatividade e lógica
```

### Fluxo de dados

```
Usuário interage
        ↓
JavaScript captura evento
        ↓
State é atualizado
        ↓
DOM é modificado
        ↓
CSS anima transição
```

## 🚀 Como expandir

### Adicionar novo passo ao formulário

1. Edit `index.html` → adicione `<div class="step" id="step5">`
2. Edit `src/js/main.js` → atualize `totalSteps = 5`
3. Edit `src/css/styles.css` → adicione estilos se necessário

### Adicionar campo customizado

1. Edit `index.html` → adicione `<input>` ou `<textarea>`
2. Edit `src/js/main.js` → adicione ao objeto `state`
3. Edit `src/js/main.js` → trate validação em `goToStep()`

### Integrar com backend

1. Crie endpoint API em seu servidor
2. Edit `src/js/main.js` → adicione `fetch()` em `submitForm()`
3. Salve dados no banco de dados

## 📦 Deploy

### GitHub Pages (Grátis)
```bash
git push
# Site fica em: seu-usuario.github.io/supere
```

### Netlify (Drag and drop)
```bash
# Arraste a pasta supere/ no netlify.com
# Site fica em: supere-seu-nome.netlify.app
```

### Seu servidor
```bash
# FTP/SFTP os arquivos para seu host
# Configure domínio
# Pronto!
```

## 🔒 Segurança

- ✅ Sem dependências externas (sem vulnerabilidades)
- ✅ Validação frontend
- ✅ Pronto para HTTPS
- ⚠️ **TODO**: Backend deve validar dados novamente

## 🎨 Customização rápida

### Mudar cores
`src/css/styles.css` linhas 1-11:
```css
--gold: #c9a84c;      /* Mude para sua cor primária */
--black: #050507;     /* Fundo */
```

### Mudar logo
1. Prepare imagem PNG com fundo transparente
2. Substitua `src/img/supere.png`
3. Pronto!

### Mudar textos
Edit `index.html` e procure por labels e placeholders.

## 📊 Performance

- ⚡ **0 dependências** → carrega super rápido
- ⚡ **CSS puro** → sem overhead de framework
- ⚡ **JavaScript otimizado** → sem loops desnecessários
- 🎯 Lighthouse: ~95+ pontos

## 📝 Versionamento

```bash
git log --oneline
# Veja histórico de mudanças
```

---

Estrutura pronta para produção! 🎉
