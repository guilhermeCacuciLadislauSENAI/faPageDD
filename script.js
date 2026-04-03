// Alerta no Botão ---
const btnBoasVindas = document.getElementById('btn-boas-vindas');

btnBoasVindas.addEventListener('click', function() {
    alert("Bem-vindo, Arisen! Sua jornada em Vermund e Battahl acaba de começar.");
});


// Alterar o Texto ---
const btnAlterarTexto = document.getElementById('btn-alterar-texto');
const paragrafo = document.getElementById('paragrafo-texto');

btnAlterarTexto.addEventListener('click', function() {
    // textContent altera o texto contido na tag
    paragrafo.textContent = "Dica: Sempre tenha no seu grupo um Mago com a magia 'Afinidade de Fogo' antes de explorar cavernas ou enfrentar goblins.";
});


// Alterar Cor de Fundo (Mudando para a "Noite") ---
const btnAlterarCor = document.getElementById('btn-alterar-cor');
const secaoCor = document.getElementById('secao-cor');

btnAlterarCor.addEventListener('click', function() {
    // Alterando o estilo via JavaScript
    secaoCor.style.backgroundColor = "#2b221d"; // Fundo bem escuro
    secaoCor.style.color = "#d8c3a5"; // Texto em bege para dar contraste
    
    // Atualizando o título h2 para não ficar apagado
    secaoCor.querySelector('h2').style.color = "#e98074"; 
});


// Esconder e Mostrar Conteúdo ---
const btnMostrarEsconder = document.getElementById('btn-mostrar-esconder');
const conteudoEscondido = document.getElementById('conteudo-escondido');

btnMostrarEsconder.addEventListener('click', function() {
    // Lógica para alternar (toggle) a visibilidade
    if (conteudoEscondido.style.display === 'none') {
        conteudoEscondido.style.display = 'block';
        btnMostrarEsconder.textContent = "Ocultar Ponto Fraco";
    } else {
        conteudoEscondido.style.display = 'none';
        btnMostrarEsconder.textContent = "Revelar Ponto Fraco";
    }
});


// Alerta clicando no Menu (Usando a propriedade onclick clássica) ---
const linkJornada = document.querySelector('a[href="#jornada"]');
const linkBestiario = document.querySelector('a[href="#bestiario"]');
const linkFenda = document.querySelector('a[href="#fenda"]');

linkJornada.onclick = function() {
    alert("Você acessou os registros da Jornada.");
};

linkBestiario.onclick = function() {
    alert("Você abriu o Bestiário dos monstros.");
};

linkFenda.onclick = function() {
    alert("Você se aproximou da Fenda.");
};

// Eventos de Mouse (Mouseover e Mouseout) ---
const imagem = document.getElementById('imagem-interativa');

// Link para uma imagem que parece uma pedra comum (inativa)
const imagemInativa = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop"; 

// Link para uma imagem brilhante/mística que simula a Fenda ativada
const imagemAtiva = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop"; 

// Quando o mouse passa POR CIMA da imagem
imagem.addEventListener('mouseover', function() {
    imagem.src = imagemAtiva;
});

// Quando o mouse SAI de cima da imagem
imagem.addEventListener('mouseout', function() {
    imagem.src = imagemInativa;
});