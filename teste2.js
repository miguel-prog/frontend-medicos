/*if(0 == false && false == [] && "0" == 0 && "" == []){
    console.log("sao iguais");
}


function fazAlgo(tarefa){
    console.log("fazendo algo " + tarefa);
}
*/

const fazAlgo = ( tarefa ) => { 
    console.log("fazendo algo" + tarefa);
};

function somar(n1,n2){
    return n1 + n2; 
}

function multiplicar(n1,n2){
    return n1 * n2; 
}

function calcular(n1,n2,operacao){
    return operacao(n1,n2); 
}


//const quadrado ( n ) => {return n * n};
const quadrado = n => n*n;



console.log("Soma: ",calcular(5,7,multiplicar))

fazAlgo("Nada");
fazAlgo("Atividade");
fazAlgo("Descansar"); 