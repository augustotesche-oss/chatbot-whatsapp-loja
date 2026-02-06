let estadoAtual = 'menu';

function menuPrincipal() {
  estadoAtual = 'menu';
  return `
Olá! 👋
Tudo bem?

Sou o atendimento automático da loja e vou te ajudar agora 😊
É só escolher uma opção:

1️⃣ Informática (PCs e Notebooks)
2️⃣ Elétrica
3️⃣ Alarmes e Câmeras
4️⃣ Impressoras
5️⃣ Energia Solar
6️⃣ Vendas
7️⃣ Falar com um atendente
`;
}

/* ===== SUBMENUS ===== */

function submenuInformatica() {
  estadoAtual = 'informatica';
  return `
🖥️ Informática

O que você precisa no momento?

1️⃣ Conserto ou manutenção
2️⃣ Computador lento / formatação
3️⃣ Upgrade (SSD, memória, etc.)
4️⃣ Suporte técnico
5️⃣ Voltar ao menu
`;
}

function submenuEletrica() {
  estadoAtual = 'eletrica';
  return `
⚡ Elétrica

Qual serviço você precisa?

1️⃣ Residencial
2️⃣ Comercial
3️⃣ Reparos / manutenção
4️⃣ Orçamento
5️⃣ Voltar ao menu
`;
}

function submenuAlarmes() {
  estadoAtual = 'alarmes';
  return `
📷 Alarmes e Câmeras

Como podemos ajudar?

1️⃣ Instalação
2️⃣ Manutenção
3️⃣ Orçamento
4️⃣ Suporte
5️⃣ Voltar ao menu
`;
}

function submenuImpressoras() {
  estadoAtual = 'impressoras';
  return `
🖨️ Impressoras

O que você precisa?

1️⃣ Conserto / manutenção
2️⃣ Impressão de arquivos
3️⃣ Recarga de cartucho / toner
4️⃣ Compra de impressora
5️⃣ Voltar ao menu
`;
}

function submenuSolar() {
  estadoAtual = 'solar';
  return `
☀️ Energia Solar

Você procura:

1️⃣ Residencial
2️⃣ Comercial
3️⃣ Orçamento
4️⃣ Informações gerais
5️⃣ Voltar ao menu
`;
}

function submenuVendas() {
  estadoAtual = 'vendas';
  return `
🛒 Vendas

O que você está procurando?

1️⃣ PCs / Notebooks
2️⃣ Impressoras
3️⃣ Acessórios
4️⃣ Suprimentos (tinta, toner)
5️⃣ Voltar ao menu
`;
}

/* ===== RESPOSTAS ===== */

function respostaOpcao(opcao) {

  // quebra global para atendente
  if (
    opcao.toLowerCase().includes('atendente') ||
    opcao.toLowerCase().includes('humano')
  ) {
    return `
👨‍💼 Certo 😊
Vou chamar um atendente pra te ajudar.
Só um instante, por favor.
`;
  }

  /* MENU PRINCIPAL */
  if (estadoAtual === 'menu') {
    switch (opcao) {
      case '1': return submenuInformatica();
      case '2': return submenuEletrica();
      case '3': return submenuAlarmes();
      case '4': return submenuImpressoras();
      case '5': return submenuSolar();
      case '6': return submenuVendas();
      case '7':
        return `
👨‍💼 Certo 😊
Vou chamar um atendente pra te ajudar.
Só um instante, por favor.
`;
      default:
        return '❌ Opção inválida. Digite um número do menu.';
    }
  }

  /* INFORMATICA */
  if (estadoAtual === 'informatica') {
    switch (opcao) {
      case '1': return '🔧 Conserto / Manutenção\n\nPode informar o modelo do equipamento e o problema?';
      case '2': return '💻 Computador lento\n\nDescreva o que está acontecendo para agilizar 😊';
      case '3': return '⚙️ Upgrade\n\nQual melhoria você procura? (SSD, memória, etc.)';
      case '4': return '🛠️ Suporte técnico\n\nExplique a dúvida ou problema.';
      case '5': return menuPrincipal();
      default: return '❌ Digite uma opção de 1 a 5.';
    }
  }

  /* ELETRICA */
  if (estadoAtual === 'eletrica') {
    switch (opcao) {
      case '1': return '🏠 Elétrica residencial\n\nPode nos contar um pouco sobre o serviço?';
      case '2': return '🏢 Elétrica comercial\n\nDescreva o serviço desejado.';
      case '3': return '🔌 Reparos / manutenção\n\nInforme o problema elétrico.';
      case '4': return '💰 Orçamento\n\nDescreva o serviço para orçamento.';
      case '5': return menuPrincipal();
      default: return '❌ Digite uma opção de 1 a 5.';
    }
  }

  /* ALARMES */
  if (estadoAtual === 'alarmes') {
    switch (opcao) {
      case '1': return '📷 Instalação\n\nÉ residência ou empresa?';
      case '2': return '🔧 Manutenção\n\nInforme o problema apresentado.';
      case '3': return '💰 Orçamento\n\nDescreva sua necessidade.';
      case '4': return '🛠️ Suporte técnico\n\nExplique a situação.';
      case '5': return menuPrincipal();
      default: return '❌ Digite uma opção de 1 a 5.';
    }
  }

  /* IMPRESSORAS */
  if (estadoAtual === 'impressoras') {
    switch (opcao) {
      case '1':
        return '🔧 Conserto / Manutenção\n\nInforme o modelo da impressora e o problema.';
      case '2':
        return '🖨️ Impressão de arquivos\n\nEnvie o arquivo ou descreva o serviço.';
      case '3':
        return '♻️ Recarga de Cartucho / Toner\n\nInforme o modelo da impressora ou do cartucho 😊';
      case '4':
        return '🛒 Compra de impressora\n\nVocê procura modelo doméstico ou empresarial?';
      case '5':
        return menuPrincipal();
      default:
        return '❌ Digite uma opção de 1 a 5.';
    }
  }

  /* ENERGIA SOLAR */
  if (estadoAtual === 'solar') {
    switch (opcao) {
      case '1': return '🏠 Energia solar residencial\n\nPodemos ajudar com informações ou orçamento.';
      case '2': return '🏢 Energia solar comercial\n\nDescreva sua necessidade.';
      case '3': return '💰 Orçamento\n\nInforme o local e tipo de instalação.';
      case '4': return 'ℹ️ Informações gerais\n\nQual sua dúvida?';
      case '5': return menuPrincipal();
      default: return '❌ Digite uma opção de 1 a 5.';
    }
  }

  /* VENDAS */
  if (estadoAtual === 'vendas') {
    switch (opcao) {
      case '1': return '💻 PCs / Notebooks\n\nVocê procura uso doméstico ou profissional?';
      case '2': return '🖨️ Impressoras\n\nQual tipo você procura?';
      case '3': return '🎧 Acessórios\n\nQual acessório você precisa?';
      case '4': return '🧴 Suprimentos\n\nInforme o modelo da impressora.';
      case '5': return menuPrincipal();
      default: return '❌ Digite uma opção de 1 a 5.';
    }
  }

}

module.exports = {
  menuPrincipal,
  respostaOpcao
};
