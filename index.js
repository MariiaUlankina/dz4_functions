let operation = prompt ('Enter operation');


function plus(first_num,second_num){
       first_num = +prompt ('Enter first number');
       second_num = +prompt ('Enter second number');
       const result = first_num + second_num;
       console.log(`Результат: ${first_num} + ${second_num} = ${result}`);
}

function minus(first_num,second_num){
       first_num = +prompt ('Enter first number');
       second_num = +prompt ('Enter second number');
       const result = first_num - second_num;
       console.log(`Результат: ${first_num} - ${second_num} = ${result}`);
}

function multiplication(first_num,second_num){
       first_num = +prompt ('Enter first number');
       second_num = +prompt ('Enter second number');
       const result = first_num * second_num;
       console.log(`Результат: ${first_num} * ${second_num} = ${result}`);
}

function division (first_num,second_num){
       first_num = +prompt ('Enter first number');
       second_num = +prompt ('Enter second number');
       const result = first_num / second_num;
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


