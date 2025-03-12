document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const nota3Input = document.getElementById('nota3');
    const nota4Input = document.getElementById('nota4');
    const promedioParagraph = document.getElementById('promedio');
    const resultadoParagraph = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nota1 = parseFloat(nota1Input.value);
        const nota2 = parseFloat(nota2Input.value);
        const nota3 = parseFloat(nota3Input.value);
        const nota4 = parseFloat(nota4Input.value);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            promedioParagraph.textContent = 'Por favor, ingrese números válidos';
            return;
        }

        if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10 || nota4 < 1 || nota4 > 10) {
            promedioParagraph.textContent = 'Por favor, ingrese notas entre 1 y 10';
            return;
        }

        const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
        promedioParagraph.textContent = `El promedio de tus notas es: ${promedio.toFixed(2)}`;
        if (promedio === 10){ resultadoParagraph.textContent= 'su nota es la mejor posible'  
        }
        else if(promedio >= 8) {
            resultadoParagraph.textContent = `su nota es superior`
        }
        else if (promedio >= 6) {
            resultadoParagraph.textContent = `su nota es básica`
        }
        else {
            resultadoParagraph.textContent = `no tienes nota suficiente para aprobar`
        }
    });
});