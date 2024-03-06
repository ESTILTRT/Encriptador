//texto-mostrar 
const textoAEncriptar = document.getElementById("textoEncriptar");
let boton = document.getElementById(`btnCopiar`);



const valores = [
    ["a", "ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
    ["á", "ai"],
    ["é","enter"],
    ["í","imes"],
    ["ó","ober"],
    ["ú","ufat"]
];

function cambirEstilo(texto){
    document.getElementById(`sinMensaje`).style.display = `none`;
    boton.innerHTML = `Copiar`
    let elementoHTML = document.getElementById(`textoMostrar`);
    elementoHTML.style.height = `710px`
    elementoHTML.style.fontSize = `25px`;
    elementoHTML.innerHTML = texto;
}

function btnEncriptar() { 
    encriptarTexto((textoAEncriptar.value).toLowerCase());
}

function encriptarTexto(texto){
    if(texto == ""){
        return
    }else{
        let newFrace = "";
        let cambio = ""
        let vocal = false;

        for (let p = 0; p < texto.length; p++) {
            for (let i = 0; i < valores.length; i++) {
                vocal = false;
                if(texto[p] == valores[i][0]){
                    vocal = true;
                    cambio = valores[i][1]
                    break
                }
            };
            if(vocal == true){
                newFrace += cambio;
            }else{
                newFrace += texto[p];
            }
        };
        cambirEstilo(newFrace)
    }
}
function desencriptarTexto(){
    let texto = textoAEncriptar.value;
    if(texto == ""){
        return
    }else{
        for (let i = 0; i < valores.length; i++) {
            if(texto.includes(valores[i][1])){
                texto = texto.replaceAll(
                    valores[i][1],
                    valores[i][0]
                );
            }
        }
        cambirEstilo(texto);
    }
}

function Copiar(){
    let textoCopiar = document.getElementById(`textoMostrar`);
    navigator.clipboard.writeText(textoCopiar.value);
    boton.innerHTML = `Copiado`;
}