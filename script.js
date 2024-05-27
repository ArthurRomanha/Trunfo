let cartas = new Map();
cartas.set("gustavo", {id:"gustavo", forca:5, defesa:10, magia:5});//inicializa as cartas
cartas.set("juan", {id:"juan", forca:10, defesa:5, magia:5});
cartas.set("arthur", {id:"arthur", forca:5, defesa:5, magia:10});

let nomesDasCartas = Array.from(cartas.keys()); 
//transforma o nome das cartas em um array, para tratar melhor, devido à uma particularidade do map


let numeroDaCartaDoAversario = Math.floor(Math.random()*nomesDasCartas.length);//numero aleatorio para a carta adversaria
let cartaAversarioDaVez = nomesDasCartas[numeroDaCartaDoAversario];//escolhe qual será a carta a partir do seu nome
let cartaAversario = cartas.get(cartaAversarioDaVez);//puxa o objeto CARTA a partir do nome selecionado
console.log(cartaAversario);

let forcaCartaAversario = cartaAversario.forca;
let defesaCartaAversario = cartaAversario.defesa;
let magiaCartaAversario = cartaAversario.magia;

let numeroDaMinhaCarta = Math.floor(Math.random()*nomesDasCartas.length);

while(numeroDaCartaDoAversario == numeroDaMinhaCarta){
    //executa a funcao até que o numero aleatório da minha carta seja diferente da carta do adversário
    numeroDaMinhaCarta = Math.floor(Math.random()*nomesDasCartas.length);
}

let minhaCartaDaVez = nomesDasCartas[numeroDaMinhaCarta]
let minhaCarta = cartas.get(minhaCartaDaVez);
console.log(minhaCarta);

let forcaminhaCarta = minhaCarta.forca;
let defesaminhaCarta = minhaCarta.defesa;
let magiaminhaCarta = minhaCarta.magia;

