(function () {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (!form) return;

  const rules = {
    nome:     { required: true, minLength: 3, label: 'Nome' },
    email:    { required: true, email: true,  label: 'E-mail' },
    telefone: { required: false, phone: true, label: 'Telefone' },
    servico:  { required: true,               label: 'Serviço' },
    mensagem: { required: true, minLength: 10, label: 'Mensagem' },
  };

  const showError = (field, msg) => {
    const el = form.querySelector(`#${field}`);
    const err = form.querySelector(`#${field}-error`);
    if (el)  el.classList.add('error');
    if (err) { err.textContent = msg; err.classList.add('visible'); }
  };

  const clearError = (field) => {
    const el = form.querySelector(`#${field}`);
    const err = form.querySelector(`#${field}-error`);
    if (el)  el.classList.remove('error');
    if (err) { err.textContent = ''; err.classList.remove('visible'); }
  };

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v) => !v || /^[\d\s\(\)\-\+]{8,}$/.test(v);

  const validate = (field, value) => {
    const r = rules[field];
    if (!r) return true;

    if (r.required && !value.trim()) {
      showError(field, `${r.label} é obrigatório.`);
      return false;
    }
    if (r.minLength && value.trim().length < r.minLength) {
      showError(field, `${r.label} deve ter pelo menos ${r.minLength} caracteres.`);
      return false;
    }
    if (r.email && !validateEmail(value)) {
      showError(field, 'Informe um e-mail válido.');
      return false;
    }
    if (r.phone && !validatePhone(value)) {
      showError(field, 'Informe um telefone válido.');
      return false;
    }

    clearError(field);
    return true;
  };

  // Validação em tempo real
  Object.keys(rules).forEach(field => {
    const el = form.querySelector(`#${field}`);
    if (el) {
      el.addEventListener('blur', () => validate(field, el.value));
      el.addEventListener('input', () => { if (el.classList.contains('error')) validate(field, el.value); });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    Object.keys(rules).forEach(field => {
      const el = form.querySelector(`#${field}`);
      if (el && !validate(field, el.value)) valid = false;
    });

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Enviando…';
    submitBtn.disabled = true;

    // Simula envio (substituir por fetch real)
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'Enviar Mensagem';
      submitBtn.disabled = false;
      if (success) { success.classList.add('visible'); setTimeout(() => success.classList.remove('visible'), 5000); }
    }, 1500);
  });
})();
