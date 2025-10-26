// 1. Importa as funções que irá usar
import { initMobileMenu } from './mobileMenu.js';
import { initFormMasks } from './formMasks.js';

// 2. Cria a função principal
function main() {
  // Roda as funções imediatamente, pois o HTML já existe!
  initMobileMenu();
  initFormMasks();
}

// 3. Roda a função principal quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', main);