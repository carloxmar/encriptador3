const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

var sonido = new Audio();
sonido.src="sonidos/sonidoclick.mp3";

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage = "none"
   
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","obes"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for( let i=0; i < matrizCodigo.length; i++){
       if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

       }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","obes"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for( let i=0; i < matrizCodigo.length; i++){
       if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

       }
    }
    return stringDesencriptada
}

function btnCopiar() {
    var copyText = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Deseas copiar el texto");
    });
  }
  function pegarTexto() {
    // Obtener el contenido del portapapeles
    navigator.clipboard.readText()
      .then(texto => {
        // Obtener el elemento textarea
        const textarea = document.querySelector('textarea');
  
        // Pegar el texto en el textarea
        textarea.value = texto;
      })
      .catch(error => {
        console.error('Error al leer el portapapeles:', error);
      });
  }
  
  // Obtener el botón de pegar por su clase
  const botonPegar = document.querySelector('.btn-pegar');
  
  // Asignar un evento de clic al botón
  botonPegar.addEventListener('click', pegarTexto);

  
  
  
 

 
  