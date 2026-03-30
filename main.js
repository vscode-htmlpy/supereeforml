// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 60);
});

// ===== STATE =====
const state = {
  origin: null,
  comoConheceuTipo: null,
  comoConheceuSpec: null,
  comoConheceuDesc: '',
  conheceAlguem: '',
  nome: '',
  idade: '',
  aniversario: '',
  grupo: null,
  nomeGrupoLider: '',
  querGrupo: null,
  telefoneMembro: '',
  diasCelebracoes: '',
  notify: null,
  telefone: ''
};

let currentStep = 1;
const totalSteps = 4;

// ===== PROGRESS =====
function updateProgress(step) {
  const pct = ((step - 1) / totalSteps) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

// ===== OPTION SELECTION =====
function selectOption(el, group, value) {
  // Encontrar apenas os cards dentro do mesmo grupo/container pai
  const container = el.closest('.options') || el.closest('.option-card')?.parentElement;
  if (container) {
    container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  } else {
    document.querySelectorAll(`.option-card`).forEach(c => c.classList.remove('selected'));
  }
  
  el.classList.add('selected');
  state[group] = value;
  
  if (group === 'origin') {
    document.getElementById('err-origin').classList.remove('show');
  }
  
  if (group === 'comoConheceuTipo') {
    const condComoConheceu = document.getElementById('cond-comoConheceu');
    condComoConheceu.classList.add('show');
    
    // Limpar seleção anterior
    state.comoConheceuSpec = null;
    document.querySelectorAll('#comoConheceuSpecOptions .option-card').forEach(opt => {
      opt.classList.remove('selected');
      opt.style.display = 'none';
    });
    
    // Mostrar opções relevantes baseado na seleção
    if (value === 'redesocial') {
      document.getElementById('spec-instagram').style.display = '';
      document.getElementById('spec-facebook').style.display = '';
      document.getElementById('spec-youtube').style.display = '';
      document.getElementById('spec-outrarede').style.display = '';
    } else if (value === 'indicacao') {
      document.getElementById('spec-amigo').style.display = '';
      document.getElementById('spec-familia').style.display = '';
    } else if (value === 'proximidade') {
      document.getElementById('spec-proximidade').style.display = '';
      document.getElementById('spec-amigolug').style.display = '';
    }
    // Para internet e outro, não mostrar especificações
  }
  
  if (group === 'comoConheceuSpec') {
    // Atualizar seleção de especificação
  }
}

// ===== TOGGLE BUTTONS =====
function toggleBtn(group, val) {
  document.getElementById(group + '-sim').classList.toggle('active', val === 'sim');
  document.getElementById(group + '-nao').classList.toggle('active', val === 'nao');
  state[group] = val;
  document.getElementById('err-' + group)?.classList.remove('show');

  if (group === 'grupo') {
    // Mostrar/esconder condicionais do grupo
    document.getElementById('cond-grupo-sim').classList.toggle('show', val === 'sim');
    document.getElementById('cond-grupo-nao').classList.toggle('show', val === 'nao');
    // Limpar valores anteriores
    if (val === 'nao') {
      state.querGrupo = null;
      document.getElementById('cond-quer-grupo').classList.remove('show');
    }
  }
  if (group === 'querGrupo') {
    // Mostrar telefone se SIM, esconder se NÃO
    document.getElementById('cond-quer-grupo-sim').classList.toggle('show', val === 'sim');
    // Mostrar celebrações em ambos os casos
    document.getElementById('cond-celebracoes').classList.toggle('show', val !== null);
  }
  if (group === 'notify') {
    document.getElementById('cond-notify').classList.toggle('show', val === 'sim');
  }
}

// ===== PHONE FORMATTING =====
function formatPhone(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length >= 7) {
    v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
  } else if (v.length >= 3) {
    v = '(' + v.slice(0,2) + ') ' + v.slice(2);
  }
  input.value = v;
}

// ===== STEP NAVIGATION =====
function goToStep(next) {
  let valid = true;

  if (currentStep === 1) {
    if (!state.origin) {
      document.getElementById('err-origin').classList.add('show');
      valid = false;
    }
  }
  if (currentStep === 2) {
    const nome = document.getElementById('nomeCompleto').value.trim();
    if (!nome) {
      document.getElementById('nomeCompleto').style.borderBottomColor = '#e06c6c';
      valid = false;
    }
    state.nome = nome;
    state.idade = document.getElementById('idade').value;
    state.aniversario = document.getElementById('aniversario').value;
  }
  if (currentStep === 3) {
    if (!state.grupo) {
      document.getElementById('err-grupo').classList.add('show');
      valid = false;
    }
    
    // Se faz parte de um grupo, pedir info do líder
    if (state.grupo === 'sim') {
      state.nomeGrupoLider = document.getElementById('nomeGrupoLider').value.trim();
    } 
    // Se não faz parte, verificar se quer fazer
    else if (state.grupo === 'nao') {
      if (!state.querGrupo) {
        document.getElementById('err-querGrupo')?.classList.add('show');
        valid = false;
      }
      // Se quer fazer parte
      if (state.querGrupo === 'sim') {
        state.telefoneMembro = document.getElementById('telefoneMembro').value.trim();
        state.diasCelebracoes = document.getElementById('diasCelebracoes').value.trim();
        if (!state.telefoneMembro) {
          document.getElementById('telefoneMembro').style.borderBottomColor = '#e06c6c';
          valid = false;
        }
      } 
      // Se não quer fazer parte
      else if (state.querGrupo === 'nao') {
        state.diasCelebracoes = document.getElementById('diasCelebracoes2').value.trim();
      }
    }
  }

  if (!valid) return;

  document.getElementById('step' + currentStep).classList.remove('active');
  currentStep = next;
  document.getElementById('step' + next).classList.add('active');
  updateProgress(next);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FORM SUBMISSION =====
function submitForm() {
  let valid = true;
  if (!state.notify) {
    document.getElementById('err-notify').classList.add('show');
    valid = false;
  }
  if (state.notify === 'sim') {
    const tel = document.getElementById('telefone').value.trim();
    if (!tel) {
      document.getElementById('telefone').style.borderBottomColor = '#e06c6c';
      valid = false;
    }
    state.telefone = tel;
  }
  if (!valid) return;

  state.comoConheceu = document.getElementById('comoConheceu')?.value || '';
  state.conheceAlguem = document.getElementById('conheceAlguem')?.value || '';
  state.oQueChamou = document.getElementById('oQueChamou')?.value || '';

  // Enviar dados via EmailJS
  if (typeof enviarViaEmailJS === 'function') {
    enviarViaEmailJS();
  }

  buildSummary();
  document.getElementById('step4').classList.remove('active');
  document.getElementById('stepThankYou').classList.add('active');
  document.getElementById('progressBar').style.width = '100%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== GO TO THANK YOU SUMMARY =====
function goToThankYouSummary() {
  document.getElementById('stepThankYou').classList.remove('active');
  document.getElementById('stepSuccess').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SUMMARY BUILDER =====
function buildSummary() {
  const fmt = (v, fallback = '—') => v || fallback;
  const aniversario = state.aniversario ? new Date(state.aniversario + 'T00:00:00').toLocaleDateString('pt-BR') : '—';
  
  // Mapear os tipos de "como conheceu"
  const comoConheceuMap = {
    'redesocial': 'Redes Sociais',
    'indicacao': 'Indicação de Amigo/Família',
    'internet': 'Busca na Internet',
    'proximidade': 'Igreja Próxima a Mim',
    'outro': 'Outro'
  };
  
  const comoConheceuSpecMap = {
    'instagram': 'Instagram',
    'facebook': 'Facebook',
    'youtube': 'YouTube',
    'outrarede': 'Outra Rede Social',
    'amigo': 'Por um Amigo/Conhecido',
    'familia': 'Por Família',
    'proximidade': 'Supere é próxima da minha casa',
    'amigolug': 'Por um conhecido/amigo de lá'
  };

  const rows = [
    { title: 'DADOS PESSOAIS', items: [
      { key: 'Nome', val: fmt(state.nome) },
      { key: 'Idade', val: state.idade ? state.idade + ' anos' : '—' },
      { key: 'Aniversário', val: aniversario },
    ]},
    { title: 'COMO CHEGOU ATÉ NÓS', items: [
      state.origin ? { key: 'Origem', val: state.origin === 'novo' ? 'Primeiro acesso' : 'Já é da família' } : null,
      state.comoConheceuTipo ? { key: 'Como conheceu', val: comoConheceuMap[state.comoConheceuTipo] || state.comoConheceuTipo } : null,
      state.comoConheceuSpec ? { key: 'Especificação', val: comoConheceuSpecMap[state.comoConheceuSpec] || state.comoConheceuSpec } : null,
      state.comoConheceuDesc ? { key: 'Detalhes', val: state.comoConheceuDesc } : null,
      state.conheceAlguem ? { key: 'Conhece alguém', val: state.conheceAlguem } : null,
    ].filter(Boolean)},
    { title: 'GRUPO SUPERE', items: [
      state.grupo ? { key: 'Faz parte de um grupo?', val: state.grupo === 'sim' ? 'Sim' : 'Não' } : null,
      state.grupo === 'sim' && state.nomeGrupoLider ? { key: 'Líder do grupo', val: state.nomeGrupoLider } : null,
      state.grupo === 'nao' && state.querGrupo ? { key: 'Gostaria de fazer parte?', val: state.querGrupo === 'sim' ? 'Sim' : 'Não' } : null,
      state.grupo === 'nao' && state.querGrupo === 'sim' && state.telefoneMembro ? { key: 'Telefone para contato', val: '+55 ' + state.telefoneMembro } : null,
      state.diasCelebracoes ? { key: 'Celebrações de interesse', val: state.diasCelebracoes.replace(/\n/g, ' | ') } : null,
    ].filter(Boolean)},
    { title: 'NOTIFICAÇÕES', items: [
      state.notify ? { key: 'Deseja receber notificações?', val: state.notify === 'sim' ? 'Sim' : 'Não' } : null,
      state.notify === 'sim' && state.telefone ? { key: 'WhatsApp', val: '+55 ' + state.telefone } : null,
    ].filter(Boolean)},
  ];

  // Construir HTML do resumo
  let html = '';
  rows.forEach(section => {
    if (section.items.length > 0) {
      html += `<div class="summary-section">
        <h4 class="summary-title">${section.title}</h4>`;
      section.items.forEach(item => {
        html += `<div class="detail-row">
          <span class="key">${item.key}</span>
          <span class="val">${item.val}</span>
        </div>`;
      });
      html += `</div>`;
    }
  });
  
  document.getElementById('summaryCard').innerHTML = html;
}

// ===== CHAR COUNT =====
function updateCharCount(textarea) {
  const count = textarea.value.length;
  const maxLength = textarea.maxLength;
  const charCountEl = document.getElementById('charCount');
  if (charCountEl) {
    charCountEl.textContent = `${count} / ${maxLength} caracteres`;
  }
  // Armazenar no state
  if (textarea.id === 'comoConheceuDesc') {
    state.comoConheceuDesc = textarea.value;
  }
}
