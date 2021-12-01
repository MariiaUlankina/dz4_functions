let first_num = prompt ('Enter first number');
let second_num = prompt ('Enter second number');
let operation = prompt ('Enter operation');

function summ(operation){
    if (operation == '+'){
        let result = Number(first_num) + Number(second_num);
        let showMessage = alert (`Результат: ${first_num} ${operation} ${second_num} = ${result}`) 
    }
}



console.log(summ)