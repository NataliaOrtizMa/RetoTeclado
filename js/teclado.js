/**
 * Casilla de ingreso de texto
 * Teclas de números
 * Teclas en el orden en que están
 * Tecla Tab Bloc Mayus y Shift /Todavía no ponerles funcionalidad
 * Esc (De decoración)
 * Comilla, más, llaves, coma, punto, guin. Tilde sí pero sin funcionalidad
 * Backspace (Borrar de a un caracter)
 * Enter (Salto de línea)
 * Símbolo de pregunta ¿
 * Barra espaciadora
 * Flechas no
 * 1. Hacerlo en HTML
 * 2. Agregar funcionalidad: Escribir letra, borrar de a un caracter, agregar espacio, símbolos, números
 * Extra: Ver cómo se hace salto de línea (Hacer de último)
 */
let teclado = document.getElementById("teclado");
let casilla = document.getElementById("casilla");
// Botones Numeros
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
// Botones Letras - Linea 1
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
// Botones Letras - Linea 2
let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnEnie = document.getElementById("btnEnie");
// Botones Letras - Linea 3
let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");
// Botones Simbolos
let btnQuoteMark = document.getElementById("btnQuoteMark");
let btnQuestionMark = document.getElementById("btnQuestionMark");
let btnMas = document.getElementById("btnMas");
let btnOpenBracket = document.getElementById("btnOpenBracket");
let btnCloseBracket = document.getElementById("btnCloseBracket");
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnGuion = document.getElementById("btnGuion");
// Botones funciones
let btnEnter = document.getElementById("btnEnter");
let btnSpaceBar = document.getElementById("btnSpaceBar");
let btnDel = document.getElementById("btnDel");
let cadena = "";


teclado.addEventListener("click", function (ev) {
    if (casilla.hasChildNodes() == false){
        linebreak = document.createElement("p");
        casilla.appendChild(linebreak);
    } else {
        if (ev.target.id == "btnEnter" && casilla.lastChild.textContent != 0) {
            linebreak = document.createElement("p");
            casilla.appendChild(linebreak);
        }
    }
    let character = ev.target.id === "btn1" ? "1" :
              ev.target.id == "btn2" ? "2" :
              ev.target.id == "btn3" ? "3" :
              ev.target.id == "btn4" ? "4" :
              ev.target.id == "btn5" ? "5" :
              ev.target.id == "btn6" ? "6" :
              ev.target.id == "btn7" ? "7" :
              ev.target.id == "btn8" ? "8" :
              ev.target.id == "btn9" ? "9" :
              ev.target.id == "btn0" ? "0" :
              ev.target.id == "btnQ" ? "Q" :
              ev.target.id == "btnW" ? "W" :
              ev.target.id == "btnE" ? "E" :
              ev.target.id == "btnR" ? "R" :
              ev.target.id == "btnT" ? "T" :
              ev.target.id == "btnY" ? "Y" :
              ev.target.id == "btnU" ? "U" :
              ev.target.id == "btnI" ? "I" :
              ev.target.id == "btnO" ? "O" :
              ev.target.id == "btnP" ? "P" :
              ev.target.id == "btnA" ? "A" :
              ev.target.id == "btnS" ? "S" :
              ev.target.id == "btnD" ? "D" :
              ev.target.id == "btnF" ? "F" :
              ev.target.id == "btnG" ? "G" :
              ev.target.id == "btnH" ? "H" :
              ev.target.id == "btnJ" ? "J" :
              ev.target.id == "btnK" ? "K" :
              ev.target.id == "btnL" ? "L" :
              ev.target.id == "btnEnie" ? "Ñ" :
              ev.target.id == "btnZ" ? "Z" :
              ev.target.id == "btnX" ? "X" :
              ev.target.id == "btnC" ? "C" :
              ev.target.id == "btnV" ? "V" :
              ev.target.id == "btnB" ? "B" :
              ev.target.id == "btnN" ? "N" :
              ev.target.id == "btnM" ? "M" :
              ev.target.id == "btnQuoteMark" ? "'" :
              ev.target.id == "btnQuestionMark" ? "¿" :
              ev.target.id == "btnOpenBracket" ? "{" :
              ev.target.id == "btnCloseBracket" ? "}" :
              ev.target.id == "btnMas" ? "+" :
              ev.target.id == "btnComa" ? "," :
              ev.target.id == "btnPunto" ? "." :
              ev.target.id == "btnGuion" ? "-" :
              ev.target.id == "btnSpaceBar" ? "&nbsp;" : "" ;
    casilla.lastChild.innerHTML += character;
    
    if (ev.target.id == "btnDel") {
        texto = casilla.lastChild.textContent;
        if (texto.length > 0) {
            cadena = texto.substring(0, texto.length - 1);
            // console.log(cadena);
            // casilla.innerHTML = cadena;
            casilla.lastChild.innerHTML = cadena;
            if (cadena.length == 0) {
                casilla.removeChild(casilla.lastChild);
            } else {      
            }
        }   
    }
})
