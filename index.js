let first_num = prompt ('Enter first number');
let second_num = prompt ('Enter second number');
let operation = prompt ('Enter operation');


function plus(){
     const result = Number(first_num) + Number(second_num);
     console.log(`Результат: ${first_num} + ${second_num} = ${result}`);
}

function minus(){
       const result = Number(first_num) - Number(second_num);
       console.log(`Результат: ${first_num} - ${second_num} = ${result}`);
}

function multiplication(){
       const result = Number(first_num) * Number(second_num);
       console.log(`Результат: ${first_num} * ${second_num} = ${result}`);
}

function division (){
       const result = Number(first_num) / Number(second_num);
       console.log(`Результат: ${first_num} / ${second_num} = ${result}`);
}


if (operation == '+'){
       plus();
}
else if (operation == '-'){
       minus();
}
else if (operation == '*'){
       multiplication();
}
else if (operation == '/'){
       division();
}


