/*Mesa de trabalho - aula 1
Felipe Toniolo - Andrea Matsunaga - Wagner Moreira - Davi Muller - Mauro Lucio - Amanda Gabriela*/

const numbers = [1, 3, 5, 8, 12, 42, 96, 1024];

//for "normal"
let res2 = 0;
for (let i = 0; i < numbers.length; i++){
    res2 += numbers[i];
    console.log(res2);
}
console.log("\n");
//for...of
let res3 = 0;
for (let valor of numbers){
    res3 += valor;
    console.log(res3);
}

//bônus - reduce
let resultado = numbers.reduce((prev, current) => prev + current, 0);
console.log("\n" + resultado);