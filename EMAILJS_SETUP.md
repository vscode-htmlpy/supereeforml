# 📧 Configuração EmailJS - Grupo Supere

## Passo 1: Criar Conta no EmailJS

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em **Sign Up** e crie uma conta (use seu email pessoal ou corporativo)
3. Verifique seu email para ativar a conta

---

## Passo 2: Conectar Provedor de Email

### Opção A: Gmail
1. No dashboard do EmailJS, vá para **Email Services**
2. Clique em **Add Service**
3. Selecione **Gmail**
4. Clique em **Connect with Gmail**
5. Autoriz a conexão
6. Seu Service ID será: `gmail` (ou será exibido no dashboard)

### Opção B: Outro Email (Outlook, Yahoo, etc.)
1. Em **Email Services**, clique em **Add Service**
2. Selecione o provedor
3. Siga as instruções de autenticação
4. Anote o **Service ID**

> ℹ️ **Já temos um Service ID fornecido: `service_ma7u1y4`**
> Se este já está configurado em sua conta, passe para o próximo passo.

---

## Passo 3: Criar Template de Email

1. Vá para **Email Templates** no dashboard
2. Clique em **Create New Template**
3. Configure assim:

**Template Name:** Qualquer nome (ex: "Grupo Supere Contact")

**HTML:**
```html
<h2>Novo Visitante - Grupo Supere</h2>
<p><strong>Nome:</strong> {{name}}</p>
<p><strong>Email/Telefone:</strong> {{email}}</p>
<hr>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>
```

4. Clique em **Save**
5. **Copie o Template ID** (exemplo: `template_abc123xyz`)

---

## Passo 4: Obter Sua PUBLIC_KEY

1. Vá para **Account** (ícone de engrenagem)
2. Clique em **API Keys**
3. Copie sua **Public Key** (começa com `service_` ou similar)

---

## Passo 5: Configurar o Código

Abra o arquivo `index.html` e procure por esta seção (próximo ao final do arquivo):

```javascript
// ===== EMAILJS CONFIGURATION =====
// Insira sua PUBLIC_KEY abaixo
const EMAILJS_PUBLIC_KEY = "SUA_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "service_ma7u1y4";
const EMAILJS_TO_EMAIL = "seu_email@example.com";
// Insira seu TEMPLATE_ID abaixo
const EMAILJS_TEMPLATE_ID = "TEMPLATE_ID";
```

**Substitua:**
- `"SUA_PUBLIC_KEY"` → Cole sua Public Key do passo 4
- `"service_ma7u1y4"` → Use o Service ID fornecido (ou o seu)
- `"seu_email@example.com"` → Coloque seu email pessoal
- `"TEMPLATE_ID"` → Cole o Template ID do passo 3

### Exemplo completo:
```javascript
const EMAILJS_PUBLIC_KEY = "k1a2b3c4d5e6f7g8h9i0j1k2l3";
const EMAILJS_SERVICE_ID = "service_ma7u1y4";
const EMAILJS_TO_EMAIL = "seu_nome@gmail.com";
const EMAILJS_TEMPLATE_ID = "template_xyz789abc";
```

---

## Passo 6: Testar no Seu Site (GitHub Pages)

1. **Commit e Push** suas mudanças para o repositório GitHub
2. Acesse seu site GitHub Pages
3. Preencha o formulário de teste
4. Clique em **Enviar**
5. Se tudo estiver correto, você receberá:
   - Um `alert("Mensagem enviada com sucesso!")`
   - Um email com os dados do visitante

---

## ✅ Checklist de Configuração

- [ ] Conta EmailJS criada
- [ ] Email conectado (Gmail/Outlook/etc)
- [ ] Template criado com as variáveis: `{{name}}`, `{{email}}`, `{{message}}`
- [ ] Template ID copiado
- [ ] Public Key copiada
- [ ] Arquivo `index.html` atualizado com as credenciais
- [ ] Arquivo subido para GitHub Pages
- [ ] Teste de envio realizado
- [ ] Email recebido com sucesso

---

## 🐛 Solução de Problemas

### "Erro ao enviar mensagem"
- Verifique se a PUBLIC_KEY está correta
- Verifique se o TEMPLATE_ID existe
- Abra o console do navegador (F12) para ver mensagens de erro

### Não recebo o email
- Verifique a pasta de SPAM
- Confirme que o Service ID está correto
- Verifique se o email está verificado no EmailJS

### O formulário não envia
- Verifique se todos os campos obrigatórios were preenchidos
- Abra o DevTools (F12) e veja a aba **Console** para erros JavaScript

---

## 📝 Informações Enviadas

Quando um visitante envia o formulário, o seguinte é enviado por email:

- **Nome completo**
- **Idade**
- **Data de aniversário**
- **Como conheceu a igreja**
- **Conhece alguém**
- **O que chamou atenção**
- **Se é da família espiritual**
- **Se participa de algum Grupo Supere**
- **Nome/cidade do grupo (se aplicável)**
- **Aceita notificações**
- **Telefone/WhatsApp (se fornecido)**

---

## 🔒 Segurança

- A **PUBLIC_KEY** é segura de ser publicada (é apenas para autenticação do formulário)
- O **Service ID** também não é uma credencial sensível
- Nunca coloque a **Secret Key** no código front-end

---

## 📚 Recursos Adicionais

- [Documentação EmailJS](https://www.emailjs.com/docs/)
- [EmailJS Templates](https://www.emailjs.com/docs/user-guide/email-templates/)
- [GitHub Pages](https://pages.github.com/)

---

**Data de criação:** 30 de março de 2026  
**Status:** ✅ Pronto para configuração
