class Carta{
  constructor(palos,valor=[],texto){
    this.palos=palos;
    this.valor=valor;
    this.texto=texto;
    
  }
}

class Palo{
  constructor(figura){
    this.figura=figura;
  }
}
var palos = [new Palo("trebol "),new Palo("corazon Rojo"),new Palo("corazon Negro"),new Palo("brillo ")];
var letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
 var  valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class Fabrica {
      mazo=[];
      mazoMezclado=[];
      elemento;
  crearBarajas() {
    
    palos.forEach(function (elementPalo) {
    letras.forEach(function (elementLetra, index) {
          if (index == 0) {
              this.mazo.push(new Carta(elementPalo, [1, 11], elementLetra))
          } else if (index > 9) {
              this.mazo.push(new Carta(elementPalo, valor[9], elementLetra))
          } else {
              this.mazo.push(new Carta(elementPalo, valor[index], elementLetra))
          }
      },this)
  },this)
  
  
    
}
mezclar(){
  while (this.mazoMezclado.length < 52) {
    let ale = Math.floor(Math.random() * (52));
    this.elemento = this.mazoMezclado.find(element => element == ale)
    let condicion = (this.elemento == undefined) ? this.mazoMezclado.push(ale) : ale;
}

for (let i = 0; i < this.mazo.length - 1; i++) {
    this.elemento = this.mazo[this.mazoMezclado[i]]
    this.mazo[this.mazoMezclado[i]] = this.mazo[i]
    this.mazo[i] = this.elemento;
}
return this.mazo   
}

}



class Juego extends Fabrica {
  barajaPedida=[]
  contador=0;
  pedir(){
    this.barajaPedida.push(this.mazoMezclado[this.contador].valor);
        this.contador++;
        
        validar()
        return this.barajaPedida
  }
  validar() {
    
    let filtro = this.nuevaBaraja.reduce(
      function(antes, ahora) {
          if (typeof(antes) == 'object') {
              if (antes > 10) {
                  return antes[0] + ahora;
              } else {
       return antes[1] + ahora;
              }
          } else {
              return antes + ahora;
          }

      })

  if (filtro == 21) {
      console.log('Ganaste! :)')
  } else if (filtro < 21) {
      console.log('Pide otra vez.. :3')
  } else if (filtro > 21) {
      console.log('Perdiste! :(')
  }
  console.log('el valor de la suma es'+filtro);
    
  }
}







