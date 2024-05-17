/* eslint-disable */
const fs = require("node:fs") // se coloca node para indicar que fs ya esta en node la dependencia no hay mas que instalar

//crea archivo, detiene la ejecucion hasta que termine de hacer el archivo
fs.writeFileSync('hola.txt', 'Hola Koders');