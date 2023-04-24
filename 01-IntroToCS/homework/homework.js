function BinarioADecimal(nro = undefined) {
   if (nro === undefined || typeof nro !== "string" || !/^[01]+$/.test(nro)) {
     console.error("Datos incorrectos. Por favor, ingrese un número binario válido.");
     return;
   }
   return parseInt(nro, 2);
 }
 
 function DecimalABinario(nro = undefined) {
   if (nro === undefined || typeof nro !== "number" || !Number.isInteger(nro) || nro < 0) {
     console.error("Datos incorrectos. Por favor, ingrese un número entero no negativo válido.");
     return;
   }
   return nro.toString(2);
 }
 

 
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
