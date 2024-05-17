/* eslint-disable */
const fs = require("node:fs")

//REGRESA EL CONTENIDO DEL ARCHIVO
const content = fs.readFileSync("hola.txt", "utf8") //utf8 es un codificado de texto

console.log("content: ", content);


//crear una carpeta...
