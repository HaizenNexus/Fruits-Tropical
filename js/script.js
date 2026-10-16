const SABORES = [
    {
        nome: 'MORANGO',
        cor: '#ff0000',
        imgFruit: 'assets/Morango-refrigerante-foregroundBlur.png',
        imgRefri: 'assets/Morango-refrigerante.png'
    },
    {
        nome: 'ABACATE',
        cor: '#008000',
        imgFruit: 'assets/Abacate-refrigerante-foregroundBlur.png',
        imgRefri: 'assets/Abacate-refrigerante.png'
    },
    {
        nome: 'LARANJA',
        cor: '#ffa500',
        imgFruit: 'assets/Laranja-refrigerante-foregroundBlur.png',
        imgRefri: 'assets/Laranja-refrigerante.png'
    },
    {
        nome: 'LIMÃO',
        cor: '#BFFF00',
        imgFruit: 'assets/frutalimão.png',
        imgRefri: 'assets/drinklimão.png'
    },
    {
        nome: 'UVA',
        cor: '#6A5ACD',
        imgFruit: 'assets/frutauva.png',
        imgRefri: 'assets/drinkuva.png'
    },
    {
        nome: 'GUARANÁ',
        cor: '#8B4513',
        imgFruit: 'assets/frutaguarana.png',
        imgRefri: 'assets/refrideguarana.png'
    }
];

const container = document.getElementById('container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let activeIndex = 0;

function criarSlides() {
    SABORES.forEach((sabor, index) => {
        const item = document.createElement('div');
        item.classList.add('item');
        if (index === 0) item.classList.add('active');
        item.style.setProperty('--background', sabor.cor);

        item.innerHTML = `
            <div class="title">${sabor.nome}</div>
            <img src="${sabor.imgFruit}" class="fruit">
            <img src="${sabor.imgRefri}" class="refri">
        `;
        container.appendChild(item);
    });
}

function updateActive() {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === activeIndex);
    });
}

nextBtn.onclick = () => {
    activeIndex = (activeIndex + 1) % SABORES.length;
    updateActive();
};

prevBtn.onclick = () => {
    activeIndex = (activeIndex - 1 + SABORES.length) % SABORES.length;
    updateActive();
};

// Iniciar o projeto
criarSlides();
