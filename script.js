var textomsj = document.querySelector(".mensaje");
var textorst = document.querySelector(".resultado");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesncriptar = document.querySelector("#desencriptar");
var btnCopiar = document.querySelector("#copiar");

function encriptar() {
    var mensaje = textomsj.value;
    mensaje = mensaje.replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
    var msjencriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("a", "ai").replaceAll("u", "ufat");
    textorst.value = msjencriptado;
    document.querySelector(".resultado").focus();

}
function desencriptar() {
    var msjencriptado = textomsj.value;
    var mensaje = msjencriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ai", "a").replaceAll("ufat", "u");
    textorst.value = mensaje;
    document.querySelector(".resultado").focus();
}
function copiar() {
    var resultado = textorst.value;
    navigator.clipboard.writeText(resultado);
    alert("¡Texto copiado correctamente!");
}

btnEncriptar.onclick = encriptar;
btnDesncriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;