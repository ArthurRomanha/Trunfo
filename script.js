let gustavo = {
    nome: "Gustavo",
    img: "imagens/gustavo.jpg",
    atributos: {
        forca: 5,
        defesa: 10,
        magia: 5
    }
}
let juan = {
    nome: "Juan",
    img: "",
    atributos: {
        forca: 10,
        defesa: 5,
        magia: 5
    }
}
let arthur = {
    nome: "Arthur",
    img: "imagens/arthur.jpg",
    atributos: {
        forca: 5,
        defesa: 5,
        magia: 10
    }
}

let btnRecomecar = document.getElementById('btnRecomecar');
btnRecomecar.style.display = 'none';
let form = document.getElementById('form');
form.reset();

let cartas = [gustavo, juan, arthur];
    let numeroDaMinhaCarta = Math.floor(Math.random() * cartas.length);
    let minhaCarta = cartas[numeroDaMinhaCarta];
    console.log(minhaCarta);

    let numeroDaCartaDoAversario = Math.floor(Math.random() * cartas.length);//numero aleatorio para a carta do oponente
    while (numeroDaCartaDoAversario == numeroDaMinhaCarta) {
        //executa a funcao até que o numero aleatório da minha carta seja diferente da carta do oponente
        numeroDaCartaDoAversario = Math.floor(Math.random() * cartas.length);
    }
    let cartaOponente = cartas[numeroDaCartaDoAversario];//escolhe qual será a carta a partir do seu nome
    console.log(cartaOponente);

    exibeAtributos();

function exibeAtributos() {
    let imgMinhaCarta = document.getElementById('imgMinhaCarta');
    let textoNomeMinhaCarta = document.getElementById('nomeMinhaCarta');
    let textoForcaMinhaCarta = document.getElementById('forcaMinhaCarta');
    let textoDefesaMinhaCarta = document.getElementById('defesaMinhaCarta');
    let textoMagiaMinhaCarta = document.getElementById('magiaMinhaCarta');

    imgMinhaCarta.src = minhaCarta.img;
    textoNomeMinhaCarta.textContent = minhaCarta.nome;
    textoForcaMinhaCarta.textContent = `Força: ${minhaCarta.atributos.forca}`;
    textoDefesaMinhaCarta.textContent = `Defesa: ${minhaCarta.atributos.defesa}`;
    textoMagiaMinhaCarta.textContent = `Magia: ${minhaCarta.atributos.magia}`;
}
function comparaAtributos() {
    btnRecomecar.style.display = 'inline';
    var selectedAttribute = document.querySelector('input[name="atributo"]:checked');

    console.log(selectedAttribute);
    if (selectedAttribute) {
        let valueSelectedAttribute = selectedAttribute.value;
        console.log(valueSelectedAttribute);
        if (minhaCarta.atributos[valueSelectedAttribute] > cartaOponente.atributos[valueSelectedAttribute]) {
            mostraAdversario();
            let resultado = document.getElementById('resultado');
            resultado.textContent = 'Você Venceu!'
        } else if(minhaCarta.atributos[valueSelectedAttribute] == cartaOponente.atributos[valueSelectedAttribute]) {
            mostraAdversario();
            resultado.textContent = 'Empatou!';
        }else{
            mostraAdversario();
            resultado.textContent = 'Você Perdeu!';
        }
    }else{
        alert("Escolha um atributo para continuar!");
    }
}
function mostraAdversario(){
    let imgCartaOponente = document.getElementById('imgCartaOponente');
    let textoNomeCartaOponente = document.getElementById('nomeCartaOponente');
    let textoForcaCartaOponente = document.getElementById('forcaCartaOponente');
    let textoDefesaCartaOponente = document.getElementById('defesaCartaOponente');
    let textoMagiaCartaOponente = document.getElementById('magiaCartaOponente');

    imgCartaOponente.src = cartaOponente.img;
    textoNomeCartaOponente.textContent = cartaOponente.nome;
    textoForcaCartaOponente.textContent = `Força: ${cartaOponente.atributos.forca}`
    textoDefesaCartaOponente.textContent = `Defesa: ${cartaOponente.atributos.defesa}`
    textoMagiaCartaOponente.textContent = `Magia: ${cartaOponente.atributos.magia}`
}
function recomecar(){
    window.location.reload();
}