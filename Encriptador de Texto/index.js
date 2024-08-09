document.addEventListener("DOMContentLoaded", () => {
    // Crear el botón de copiar
    let copyButton = document.createElement("button");
    copyButton.id = "copy-button";
    copyButton.textContent = "Copiar";
    copyButton.style.display = "none"; // Inicialmente oculto

    // Aplicar estilos al botón
    copyButton.style.position = "absolute";
    copyButton.style.alignItems = "center";
    copyButton.style.justifyContent = "center";
    copyButton.style.padding = "24px";
    copyButton.style.width = "340px";
    copyButton.style.backgroundColor = "#FFFFFF";
    copyButton.style.border = "1px solid #0A3871";
    copyButton.style.borderRadius = "24px";
    copyButton.style.fontStyle = "normal";
    copyButton.style.fontWeight = "400";
    copyButton.style.fontSize = "16px";
    copyButton.style.color = "#0A3871";
    copyButton.style.textAlign = "center";
    copyButton.style.bottom = "10px";
    copyButton.style.right = "30px";

    // Agregar el botón de copiar al contenedor con la clase 'encriptado'
    let encriptado = document.querySelector(".encriptado");
    encriptado.appendChild(copyButton);

    // Asignar la función de copiar al botón
    copyButton.addEventListener("click", copiarTexto);
});

// Función para encriptar el texto ingresado por el usuario
function encriptar() {
    let textoUsuario = document.getElementById("texto").value;
    let titulo = document.querySelector('h2');
    let parrafo = document.querySelector(".respuesta");
    let imagen = document.getElementById("muñeco");
    let textoIndicativo = document.querySelector(".texto-indicativo");

    // Validar que el texto solo contenga letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(textoUsuario)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos");
        return;
    }

    // Reemplazar caracteres específicos por sus equivalentes encriptados
    let textoEncriptado = textoUsuario
                            .replace(/e/gi,"enter")
                            .replace(/i/gi,"imes")
                            .replace(/a/gi,"ai")
                            .replace(/o/gi,"ober")
                            .replace(/u/gi,"ufat");

    // Actualizar la interfaz con el texto encriptado
    if (textoUsuario.length !== 0) {
        document.getElementById("texto").value = "";
        titulo.style.display = "none";
        titulo.style.top = "0%";
        parrafo.textContent = textoEncriptado;
        imagen.style.top = "0%";
        imagen.style.display = "none";
        textoIndicativo.style.top = "3%";
        parrafo.style.fontSize = "24px";
        document.getElementById("copy-button").style.display = "inline";
    } else {
        alert("Debes ingresar algún texto");
    }
}

// Función para desencriptar el texto ingresado por el usuario
function desencriptar() {
    let textoUsuario = document.getElementById("texto").value;
    let titulo = document.querySelector('h2');
    let parrafo = document.querySelector(".respuesta");
    let imagen = document.getElementById("muñeco");
    let textoIndicativo = document.querySelector(".texto-indicativo");

    // Validar que el texto solo contenga letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(textoUsuario)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos");
        return;
    }

    // Reemplazar caracteres encriptados por sus equivalentes originales
    let textoDesencriptado = textoUsuario
                            .replace(/enter/gi,"e")
                            .replace(/imes/gi,"i")
                            .replace(/ai/gi,"a")
                            .replace(/ober/gi,"o")
                            .replace(/ufat/gi,"u");

    // Actualizar la interfaz con el texto desencriptado
    if (textoUsuario.length !== 0) {
        document.getElementById("texto").value = "";
        titulo.style.display = "none";
        titulo.style.top = "0%";
        parrafo.textContent = textoDesencriptado;
        imagen.style.top = "0%";
        imagen.style.display = "none";
        textoIndicativo.style.top = "3%";
        parrafo.style.fontSize = "24px";
        document.getElementById("copy-button").style.display = "inline"; 
    } else {
        alert("Debes ingresar algún texto");
    }
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    let textoEncriptado = document.querySelector(".respuesta").textContent;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
