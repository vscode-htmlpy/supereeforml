# 🧪 Guia de Teste - EmailJS Integração

## ✅ Checklist Pré-Teste

Antes de testar, certifique-se de que:

- [ ] Você tem uma conta no EmailJS criada
- [ ] Seu email foi conectado ao EmailJS (Gmail/Outlook/etc)
- [ ] Um template de email foi criado
- [ ] Você copiou sua **Public Key** do EmailJS
- [ ] Você copiou seu **Template ID**
- [ ] Atualizou o arquivo `index.html` com as credenciais

---

## 🔧 Passo 1: Configurar o Código

Abra o arquivo `index.html` em um editor de texto (VS Code, Notepad++, etc).

Procure por esta seção (próximo ao final do arquivo):

```javascript
// ===== EMAILJS CONFIGURATION =====
// Insira sua PUBLIC_KEY abaixo
const EMAILJS_PUBLIC_KEY = "SUA_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "service_ma7u1y4";
const EMAILJS_TO_EMAIL = "seu_email@example.com";
// Insira seu TEMPLATE_ID abaixo
const EMAILJS_TEMPLATE_ID = "TEMPLATE_ID";
```

**Substitua os 4 campos em vermelho:**

```javascript
const EMAILJS_PUBLIC_KEY = "k1a2b3c4d5e6f7g8h9i0j1k2l3";  // Sua Public Key
const EMAILJS_SERVICE_ID = "service_ma7u1y4";              // Pode deixar igual
const EMAILJS_TO_EMAIL = "seu_email@gmail.com";            // Seu email pessoal
const EMAILJS_TEMPLATE_ID = "template_xyz789abc";         // Seu Template ID
```

**Exemplo concreto:**
```javascript
const EMAILJS_PUBLIC_KEY = "JhsK8mzPqL2nRsT9vUwXyZ0aB1cDeFg";
const EMAILJS_SERVICE_ID = "service_ma7u1y4";
const EMAILJS_TO_EMAIL = "joao.silva@gmail.com";
const EMAILJS_TEMPLATE_ID = "template_l5m8n2p1o9k0j";
```

**Depois de alterar**, salve o arquivo (Ctrl+S).

---

## 🌐 Passo 2: Teste Local

### Opção A: Servidor Local (Recomendado)

Se você tiver Node.js instalado:

```bash
# Instale um servidor web simples
npm install -g http-server

# Navegue até a pasta do projeto
cd "C:\Users\amand\Downloads\SUPERE"

# Inicie o servidor
http-server

# Você verá algo como:
# Starting up http-server, serving ./
# Available on:
#   http://127.0.0.1:8080
#   http://localhost:8080
```

Abra no navegador: `http://localhost:8080`

### Opção B: Abrir Diretamente no Navegador

Se não quiser instalar nada:

1. Abra o File Explorer
2. Navegue até `C:\Users\amand\Downloads\SUPERE`
3. Clique duas vezes em `index.html`
4. O site abrirá no seu navegador padrão

---

## 📝 Passo 3: Testar o Formulário

### Teste Completo do Formulário:

1. **STEP 1 - Origem:**
   - Selecione: "Estou chegando pela primeira vez ✨"
   - Preencha os 3 campos de texto com dados de teste
   - Clique em **Continuar**

2. **STEP 2 - Dados Pessoais:**
   - Nome: `João de Teste` (ou outro nome)
   - Idade: `25`
   - Data de Aniversário: Selecione qualquer data
   - Clique em **Continuar**

3. **STEP 3 - Jornada no Supere:**
   - Família espiritual: Clique em "Sim, sou da família"
   - Grupo Supere: Clique em "Sim, tenho um grupo"
   - Nome do Grupo: `Grupo Teste`
   - Cidade: `São Paulo — Zona Norte`
   - Clique em **Continuar**

4. **STEP 4 - Notificações:**
   - Receber notificações: Clique em "Sim, quero receber"
   - WhatsApp: `(11) 98765-4321` (ou outro número)
   - Clique em **Enviar**

---

## 📧 Passo 4: Verificar o Email

### Esperado - Sucesso:
```
✅ Alert: "Mensagem enviada com sucesso!"
✅ Página muda para "Recebemos com amor"
✅ Um email é recebido na sua caixa
```

**Onde procurar o email:**
- Inbox principal (Gmail, Outlook, etc)
- Pasta **SPAM** ou **Lixo eletrônico** (às vezes os primeiros emails vão aqui)

### Esperado - Erro:
```
❌ Alert: "Erro ao enviar mensagem"
❌ Página permanece na STEP 4
```

Se receber erro, veja a seção "🐛 Solução de Problemas" abaixo.

---

## 📱 Conteúdo do Email Esperado

O email que você receber conterá:

```
✦ GRUPO SUPERE ✦
Igreja Batista Supere

🎉 Novo Visitante!

📋 DADOS PESSOAIS
- Nome: João de Teste
- Idade: 25
- Aniversário: [data selecionada]
- Telefone: +55 (11) 98765-4321

--- COMO CHEGOU ATÉ NÓS ---
- Origem: Primeiro acesso
- Como conheceu: [seu texto de teste]
- Conhece alguém: [seu texto de teste]
- O que chamou atenção: [seu texto de teste]

--- VIDA ESPIRITUAL ---
- Família espiritual: Sim
- Participa de Grupo Supere: Sim
- Nome do Grupo: Grupo Teste
- Cidade do Grupo: São Paulo — Zona Norte

--- NOTIFICAÇÕES ---
- Receber notificações: Sim
```

---

## 🐛 Solução de Problemas

### Erro: "Erro ao enviar mensagem"

**Causa 1: Public Key incorreta**
- ✅ Solução: Copie novamente sua Public Key no EmailJS (Account → API Keys)
- Certifique-se de copiar EXATAMENTE sem espaços

**Causa 2: Template ID incorreto ou não existe**
- ✅ Solução: Verifique se o template existe em **Email Templates**
- Copie o Template ID novamente com cuidado

**Causa 3: Service ID inválido**
- ✅ Solução: Verifique se tem um serviço de email conectado
- Em **Email Services**, você deve ter pelo menos um email (Gmail, Outlook, etc)

**Causa 4: Problema de CORS/Blog**
- ✅ Solução: Verifique o console do navegador:
  1. Clique em **F12** (Developer Tools)
  2. Vá para aba **Console**
  3. Procure por mensagens de erro
  4. Leia a mensagem completa

### Não recebe email

**Possível causa 1: De fato não foi enviado**
- Verifique se recebeu o `alert("Mensagem enviada com sucesso!")`
- Se não recebeu o alert, veja a seção anterior

**Possível causa 2: Email foi para SPAM**
- Procure em "Lixo Eletrônico", "Spam", "Promoções"
- Marque como "Não é spam"

**Possível causa 3: Filtros de email muito rigorosos**
- Alguns emails corporativos bloqueiam emails automáticos
- Teste com outro email pessoal (Gmail, Hotmail, etc)

### O formulário não deixa avançar

**Se ficar preso em qualquer STEP:**
- Verifique se todos os campos obrigatórios estão preenchidos
- Procure por mensagens de erro vermelhas na tela
- Certifique-se de que clicou corretamente nos botões

### Teste de Console (Debug)

Se deseja ver detalhes técnicos:

1. Abra o navegador com o site
2. Pressione **F12** para abrir Developer Tools
3. Vá para aba **Console**
4. Complete o formulário normalmente
5. Você verá mensagens como:
   ```
   Email enviado com sucesso! {response: ...}
   ```
   ou
   ```
   Erro ao enviar email: {error: ...}
   ```

---

## ✨ Teste de Produção (GitHub Pages)

Depois que tudo funcionar localmente:

1. **Commit das mudanças:**
   ```bash
   git add .
   git commit -m "feat: integração EmailJS ao formulário"
   git push origin main
   ```

2. **Acesse seu site GitHub Pages:**
   - `https://seu_usuario.github.io/SUPERE`

3. **Repita os testes:**
   - Preencha o formulário novamente
   - Verifique se o email é recebido
   - Teste com dados diferentes

---

## 📋 Checklist de Testes

- [ ] Código atualizado com credenciais corretas
- [ ] Site abre no navegador sem erros
- [ ] Formulário carrega corretamente
- [ ] Consegue preencher todos os steps
- [ ] Botão "Enviar" funciona
- [ ] Recebe `alert("Mensagem enviada com sucesso!")`
- [ ] Email é recebido na caixa
- [ ] Conteúdo do email está correto
- [ ] GitHub Pages funciona com EmailJS
- [ ] Testou com dados reais do seu site

---

## 📞 Precisa de Ajuda?

Se algo não funcionar:

1. **Console do Navegador (F12)** - Procure por erros vermelhos
2. **Documentação EmailJS** - https://www.emailjs.com/docs/
3. **Arquivo EMAILJS_SETUP.md** - Instruções passo a passo
4. **Verifique o PDF** - Há templates de exemplo

---

## 🎉 Sucesso!

Se recebeu o email com sucesso, parabéns! 🎊

Seus visitantes agora podem enviar formulários e você receberá automaticamente as informações no seu email.

---

**Data:** 30 de março de 2026  
**Versão:** 1.0  
**Status:** Pronto para Teste
