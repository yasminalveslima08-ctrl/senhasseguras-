const; numerosenha =document.queryselector('.parametro-senha__texto.');
let tamanhosenha =12;
numerosenha.textcontent = tamanhosenha;

const botoes= document.queryselector('.parametro-senha__botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;
function diminuitamanho(){

if (tamanhosenha>1){
//tamanhosenha =tamanhosenha-1;
tamanhosenha--;
}
numerosenha.textcontent = tamanhosenha;
}
function aumentaTamanho(){
    if(tamanhosenha<20){
       //tamanhosenha = tamanhosenha+1;
  tamanhosenha++;
    }
    numerosenha.textcontent = tamanhosenha;
    }


