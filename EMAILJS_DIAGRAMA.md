# 🎯 Diagrama Visual da Integração EmailJS

## 📊 Fluxo de Funcionamento

```
┌─────────────────────────────────────────────────────────────────┐
│                      VISITANTE DO SITE                         │
│                                                                 │
│  1. Acessa seu site (index.html)                              │
│  2. Preenche o formulário multi-step                          │
│  3. Clica em "Enviar" (STEP 4)                                │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                   PÁGINA HTML (Cliente)                         │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ form id="formulario"                                   │   │
│  │  - Coleta: nome, idade, aniversário, etc              │   │
│  │  - Campos hidden: name, email, message                │   │
│  └────────────────────────────────────────────────────────┘   │
│                           │                                    │
│                    ┌──────▼──────┐                             │
│                    │   submitForm()                           │
│                    │  (main.js)                               │
│                    └──────┬──────┘                             │
│                           │                                    │
│                    ┌──────▼──────────────┐                     │
│                    │ enviarViaEmailJS()  │                     │
│                    │ (index.html script) │                     │
│                    └──────┬──────────────┘                     │
│                           │                                    │
│              ┌────────────┴────────────┐                       │
│              │                         │                       │
│    ┌─────────▼──────────┐   ┌─────────▼──────────┐            │
│    │ Preenche campos    │   │   Carrega script   │            │
│    │ hidden com dados   │   │   EmailJS do CDN   │            │
│    │                    │   │                    │            │
│    │ - emailjs_name     │   │ (já carregado)    │            │
│    │ - emailjs_email    │   └────────────────────┘            │
│    │ - emailjs_message  │                                     │
│    └─────────┬──────────┘                                     │
│              │                                                 │
│              └─────────────┬──────────────┘                    │
│                            │                                   │
│                     ┌──────▼──────┐                            │
│                     │  emailjs    │                            │
│                     │  .sendForm()│                            │
│                     └──────┬──────┘                            │
└──────────────────────────────┼────────────────────────────────┘
                               │
                               │ HTTPS Request
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EMAILJS SERVERS                              │
│                 (cdn.jsdelivr.net)                              │
│                                                                 │
│  1. Recebe dados do formulário                                │
│  2. Valida Public Key                                         │
│  3. Processa template                                         │
│  4. Envia para seu provedor de email                          │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│              SEU PROVEDOR DE EMAIL                              │
│        (Gmail, Outlook, Yahoo, etc)                            │
│                                                                 │
│  📧 Recebe email via SMTP                                      │
│  📧 Formata e envia                                            │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                  VOCÊ RECEBE EMAIL                              │
│                                                                 │
│  📬 Inbox (ou pasta de spam)                                  │
│  📨 Com todos os dados do visitante                           │
│  → Nome, idade, informações da família espiritual             │
│  → Como conheceu a igreja                                     │
│  → Telefone para contato                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Fluxo de Resposta (Feedback ao Usuário)

```
┌─────────────────────────────────────┐
│   EmailJS Processa e Envia          │
└────────────┬────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌─────────┐      ┌──────────┐
│ SUCESSO │      │   ERRO   │
└────┬────┘      └──┬───────┘
     │               │
     ▼               ▼
  ┌──────────────┐ ┌──────────────────┐
  │   .then()    │ │   .catch()       │
  └──┬───────────┘ └──┬────────────────┘
     │               │
     ▼               ▼
  alert(            alert(
  "Mensagem         "Erro ao
   enviada com      enviar
   sucesso!")       mensagem"
  )                 )
     │               │
     └───────┬───────┘
             │
             ▼
  ┌─────────────────────────┐
  │  Usuário vê resultado   │
  │  e procede              │
  └─────────────────────────┘
```

---

## 📝 Estrutura de Dados no Email

```
Email Recebido:
═══════════════════════════════════════════════════════════

De: noreply@emailjs.com
Para: seu_email@gmail.com
Assunto: [Configurado por você]

Corpo:
┌──────────────────────────────────────┐
│  seu_template@html                   │
│                                      │
│  Substitui:                          │
│  - {{name}} → João Silva            │
│  - {{email}} → (11) 98765-4321      │
│  - {{message}} → (texto formatado)   │
│                                      │
│  Resultado final:                    │
│  ┌──────────────────────────────┐   │
│  │  *GRUPO SUPERE*              │   │
│  │  Novo Visitante              │   │
│  │                              │   │
│  │  Nome: João Silva            │   │
│  │  Contato: (11) 98765-4321    │   │
│  │                              │   │
│  │  [dados completos...]        │   │
│  └──────────────────────────────┘   │
└──────────────────────────────────────┘
```

---

## 🔐 Fluxo de Autenticação

```
1. SEU SITE
   └─→ Carrega script EmailJS do CDN
       └─→ Chama: emailjs.init("PUBLIC_KEY")
           │
           └─→ EmailJS verifica a chave
               │
               ├─→ ✅ Válida? Pronto para enviar
               │
               └─→ ❌ Inválida? Erro

2. AO ENVIAR
   └─→ Seu site chama:
       emailjs.sendForm(
         SERVICE_ID,      ← Qual email usar (Gmail, Outlook, etc)
         TEMPLATE_ID,     ← Qual template HTML usar
         formulario_elem  ← Quais dados enviar
       )
       
       └─→ EmailJS verifica todas as chaves
           └─→ Se todas válidas, envia
               └─→ Se algo inválido, retorna erro
```

---

## 📦 O Que Você Consegue Agora

```
ANTES (Sem EmailJS):
┌─────────────────────┐
│  Visitante preenche │─→ Tela de "recebi" ─→ Dados perdidos
│  formulário         │
└─────────────────────┘

DEPOIS (Com EmailJS):
┌─────────────────────┐
│  Visitante preenche │─→ Email automático ─→ Você recebe
│  formulário         │                       dados
└─────────────────────┘
```

---

## 🎯 Componentes Principais

```
index.html
├─ <form id="formulario">
│  ├─ Campos visíveis (nome, idade, etc)
│  └─ Campos hidden (name, email, message)
│
├─ Script CDN EmailJS
│  └─ https://cdn.jsdelivr.net/.../email.min.js
│
└─ Script de Configuração
   ├─ EMAILJS_PUBLIC_KEY = "sua_chave"
   ├─ EMAILJS_SERVICE_ID = "seu_servico"
   ├─ EMAILJS_TEMPLATE_ID = "seu_template"
   └─ função enviarViaEmailJS()

main.js
├─ Mantém lógica original
│  └─ submitForm()
│
└─ Agora chama:
   └─ enviarViaEmailJS()
      └─ emailjs.sendForm()
```

---

## 🌐 Compatibilidade

```
🖥️ Desktop
  ├─ Chrome ✅
  ├─ Firefox ✅
  ├─ Safari ✅
  └─ Edge ✅

📱 Mobile
  ├─ iPhone Safari ✅
  ├─ Android Chrome ✅
  └─ Qualquer navegador moderno ✅

🃏 Plataformas
  ├─ GitHub Pages ✅
  ├─ Netlify ✅
  ├─ Vercel ✅
  └─ Qualquer host estático ✅

⚠️ Não precisa de:
  ├─ Backend/servidor
  ├─ Node.js
  ├─ Database
  └─ Qualquer autenticação complexa
```

---

## 📊 Requisitos Cumpridos

```
✅ 1. Script oficial EmailJS adicionado
✅ 2. emailjs.init() com PUBLIC_KEY
✅ 3. emailjs.sendForm() configurado
✅ 4. Service ID: service_ma7u1y4
✅ 5. Espaço para TEMPLATE_ID e PUBLIC_KEY
✅ 6. Formulário com id="formulario"
✅ 7. event.preventDefault() implementado
✅ 8. alert("Sucesso!") configurado
✅ 9. alert("Erro!") configurado
✅ 10. Design não alterado
✅ 11. Funciona em GitHub Pages
✅ 12. Campos: name, email, message
```

---

## 🚀 Próximo Passo

```
            VOCÊ
              │
              ▼
    1. Criar conta EmailJS
              │
              ▼
    2. Conectar seu email
              │
              ▼
    3. Criar template HTML
              │
              ▼
    4. Copiar credenciais
              │
              ▼
    5. Atualizar index.html
              │
              ▼
    6. Testar localmente
              │
              ▼
    7. Upload para GitHub
              │
              ▼
       🎉 FUNCIONANDO! 🎉
```

---

**Diagrama criado:** 30 de março de 2026  
**Status:** Visual dos requisitos implementados  
**Próximo:** Leia EMAILJS_SETUP.md para começar!
