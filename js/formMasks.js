// Funções "helper" para aplicar as máscaras
const maskPhone = (value) => {
  return value
    .replace(/\D/g, '') // Remove tudo que não é dígito
    .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen depois do quinto dígito
    .substring(0, 15); // Limita o tamanho
};

const maskCPF = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .substring(0, 14);
};

const maskCEP = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 9);
};

// Função principal que será exportada
export function initFormMasks() {
  const phoneInput = document.querySelector('#telefone');
  const cpfInput = document.querySelector('#cpf');
  const cepInput = document.querySelector('#cep');

  // Adiciona o "ouvidor de eventos" para cada campo

  if(phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = maskPhone(e.target.value);
    });
  }

  if(cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      e.target.value = maskCPF(e.target.value);
    });
  }

  if(cepInput) {
    cepInput.addEventListener('input', (e) => {
      e.target.value = maskCEP(e.target.value);
    });
  }
}