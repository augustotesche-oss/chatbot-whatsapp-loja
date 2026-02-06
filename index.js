const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

/* =========================
   HORÁRIO DE ATENDIMENTO
========================= */
function dentroHorario() {
  const agora = new Date();
  const dia = agora.getDay(); // 0 = domingo
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const horarioAtual = hora + minuto / 60;

  // Segunda (1) a Sexta (5)
  if (dia >= 1 && dia <= 5) {
    if (
      (horarioAtual >= 8 && horarioAtual < 12) ||
      (horarioAtual >= 13.5 && horarioAtual < 18)
    ) {
      return true;
    }
  }
  return false;
}

/* =========================
   MENUS
========================= */
const menuPrincipal = `
Olá! 👋 Seja bem-vindo à *Nossa Loja*.

🕘 Horário de atendimento:
Seg–Sex: 08:00–12:00 | 13:30–18:00
❌ Sábados e domingos: fechado

Escolha uma opção ou escreva o serviço desejado:

1️⃣ Informática
2️⃣ Impressoras
3️⃣ Vendas
4️⃣ Elétrica / Alarmes / Câmeras
5️⃣ Energia Solar
`;

const menuInformatica = `
💻 *Informática*
1️⃣ Manutenção / Conserto
2️⃣ PC lento / Formatação
3️⃣ Upgrade (SSD, Memória)
4️⃣ Suporte técnico
`;

const menuImpressoras = `
🖨️ *Impressoras*
1️⃣ Manutenção de impressora
2️⃣ Recarga de cartucho / toner
3️⃣ Serviço de impressão
`;

const menuVendas = `
🛒 *Vendas*
1️⃣ Computadores e notebooks
2️⃣ Impressoras
3️⃣ Acessórios e suprimentos
`;

const menuEletrica = `
⚡ *Elétrica / Alarmes / Câmeras*
1️⃣ Serviços elétricos
2️⃣ Alarmes
3️⃣ Câmeras de monitoramento
`;

const menuSolar = `
☀️ *Energia Solar*
1️⃣ Orçamento
2️⃣ Instalação
3️⃣ Manutenção
`;

/* =========================
   PALAVRAS-CHAVE
========================= */
function detectarMenu(texto) {
  texto = texto.toLowerCase();

  if (texto.match(/pc|computador|notebook|lento|formatar|ssd|memória|informática/))
    return "informatica";

  if (texto.match(/impressora|cartucho|toner|recarga|imprimir|impressão/))
    return "impressoras";

  if (texto.match(/comprar|preço|valor|venda|produto|acessório/))
    return "vendas";

  if (texto.match(/elétrica|luz|tomada|alarme|câmera|cftv/))
    return "eletrica";

  if (texto.match(/solar|energia solar|placa|painel/))
    return "solar";

  if (texto.match(/atendente|humano|pessoa|falar com alguém/))
    return "humano";

  return null;
}

/* =========================
   ROTA PRINCIPAL
========================= */
app.post("/mensagem", (req, res) => {
  const texto = req.body.mensagem || "";
  const menuDetectado = detectarMenu(texto);

  if (!dentroHorario()) {
    return res.json({
      resposta:
        "⏰ No momento estamos fora do horário de atendimento.\n\n" +
        menuPrincipal +
        "\n👉 Assim que retornarmos, um atendente continuará o atendimento."
    });
  }

  if (!texto || texto.toLowerCase() === "oi") {
    return res.json({ resposta: menuPrincipal });
  }

  if (texto === "1" || menuDetectado === "informatica") {
    return res.json({ resposta: menuInformatica });
  }

  if (texto === "2" || menuDetectado === "impressoras") {
    return res.json({ resposta: menuImpressoras });
  }

  if (texto === "3" || menuDetectado === "vendas") {
    return res.json({ resposta: menuVendas });
  }

  if (texto === "4" || menuDetectado === "eletrica") {
    return res.json({ resposta: menuEletrica });
  }

  if (texto === "5" || menuDetectado === "solar") {
    return res.json({ resposta: menuSolar });
  }

  if (menuDetectado === "humano") {
    return res.json({
      resposta:
        "Perfeito 😊\nUm atendente será acionado.\n\nSe puder, diga rapidamente qual serviço você precisa."
    });
  }

  res.json({
    resposta:
      "Não entendi muito bem 🤔\n\n" +
      "Por favor, escolha uma opção do menu ou descreva o serviço que você precisa."
  });
});

/* =========================
   SERVIDOR
========================= */
app.listen(PORT, () => {
  console.log("✅ Servidor do chatbot está funcionando!");
});
