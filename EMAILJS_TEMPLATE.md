# EmailJS Template Pronto para Usar

## 📧 Template HTML Recomendado

Quando criar seu template no EmailJS, use este HTML pronto. Ele formatará os emails de forma bonita e profissional:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            border-bottom: 3px solid #c9a84c;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        .header h2 {
            margin: 0;
            color: #2c2c2c;
            font-size: 24px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            background-color: #f0ebe5;
            color: #8b6f47;
            padding: 10px 15px;
            border-left: 4px solid #c9a84c;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field {
            margin-bottom: 12px;
        }
        .field-label {
            font-weight: bold;
            color: #4a4a4a;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .field-value {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
            padding-left: 10px;
            border-left: 2px solid #e0e0e0;
        }
        .footer {
            border-top: 1px solid #e0e0e0;
            padding-top: 15px;
            margin-top: 25px;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
        .logo-section {
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="logo-section">
            <h1 style="color: #c9a84c; margin: 0; font-size: 28px;">✦ Grupo Supere ✦</h1>
            <p style="color: #999; margin: 5px 0 0 0; font-size: 12px;">Igreja Batista Supere</p>
        </div>

        <div class="header">
            <h2>🎉 Novo Visitante!</h2>
        </div>

        <!-- DADOS PESSOAIS -->
        <div class="section">
            <div class="section-title">📋 Dados Pessoais</div>
            
            <div class="field">
                <div class="field-label">Nome Completo</div>
                <div class="field-value">{{name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Contato</div>
                <div class="field-value">{{email}}</div>
            </div>
        </div>

        <!-- MENSAGEM PRINCIPAL -->
        <div class="section">
            <div class="section-title">💬 Informações Completas</div>
            <div class="field-value" style="white-space: pre-wrap; line-height: 1.8;">{{message}}</div>
        </div>

        <div class="footer">
            <p>Este é um email automático enviado pelo formulário do Grupo Supere.</p>
            <p>Por favor, não responda este email. Para contato direto, use o número de WhatsApp informado.</p>
            <p style="margin-top: 15px; color: #c9a84c;">Que Deus te abençoe! ✦</p>
        </div>
    </div>
</body>
</html>
```

---

## 🎨 Versão Simplificada (Alternativa)

Se preferir um template mais simples:

```html
<h2>Novo Visitante - Grupo Supere ✦</h2>

<p><strong>Nome:</strong> {{name}}</p>
<p><strong>Contato:</strong> {{email}}</p>

<hr>

<h3>Detalhes Completos:</h3>
<pre>{{message}}</pre>

<hr>

<p style="font-size: 12px; color: #999;">
    Este é um email automático. Que Deus te abençoe!
</p>
```

---

## 📌 Como Usar

### No Dashboard do EmailJS:

1. Vá para **Email Templates**
2. Clique em **Create New Template**
3. Preencha:
   - **Template Name:** `grupo-supere-contact` (ou outro nome)
   - **Subject:** Escolha um dos abaixo
   - **HTML:** Cole o código HTML acima (escolha entre versão completa ou simplificada)

### Sugestões para Subject:

```
✦ Novo visitante - {{name}}

Novo contato do formulário - Grupo Supere

[Supere] Novo visitante registrado - {{name}}

Benção! Novo membro em contato - {{name}}
```

4. Clique em **Save Template**
5. **Copie o Template ID** (mostrado na tela)
6. Cole este ID no seu `index.html` em: `const EMAILJS_TEMPLATE_ID = "template_seu_id_aqui"`

---

## ✨ Variáveis Disponíveis

O template pode usar qualquer uma destas variáveis:

- `{{name}}` - Nome do visitante
- `{{email}}` - Contato/WhatsApp
- `{{message}}` - Toda a mensagem formatada com os dados coletados

---

## 🎯 Preview do Email

Quando alguém preencher o formulário, receberá um email assim:

```
═══════════════════════════════════
    ✦ GRUPO SUPERE ✦
    Igreja Batista Supere
═══════════════════════════════════

🎉 Novo Visitante!

────────────────────────────────
📋 DADOS PESSOAIS
────────────────────────────────
Nome: João Silva
Contato: (11) 98765-4321

────────────────────────────────
💬 INFORMAÇÕES COMPLETAS
────────────────────────────────

Novo Visitante - Grupo Supere

--- DADOS PESSOAIS ---
Nome: João Silva
Idade: 28 anos
Aniversário: 15/03/1996
Telefone: +55 (11) 98765-4321

--- COMO CHEGOU ATÉ NÓS ---
Origem: Primeiro acesso
Como conheceu: Vi um post no Instagram
...
```

---

## 🔧 Personalizações

Você pode adicionar CSS customizado, cores, fonts, etc. Experimente!

### Exemplos de Cores para o Supere:

- Dourado: `#c9a84c` ou `#d4af37`
- Escuro: `#2c2c2c` ou `#1a1a1a`
- Bege claro: `#f0ebe5` ou `#f5f1ed`
- Marrom suave: `#8b6f47` ou `#a0826d`

---

## 💡 Dicas

1. **Teste primeiro** - Envie um email de teste pelo dashboard do EmailJS antes de publicar
2. **Verifique spam** - Os primeiros emails podem cair em spam
3. **Responsive** - O template acima funciona bem em celular e desktop
4. **Faça backup** - Salve uma cópia do seu template HTML em um arquivo local

---

## 📚 Próximos Passos

1. Escolha um template acima (recomendamos a versão completa)
2. Copie e cole no EmailJS
3. Salve o template e anote o **Template ID**
4. Atualize seu `index.html` com o Template ID
5. Teste!

---

**Data:** 30 de março de 2026  
**Versão:** 1.0
