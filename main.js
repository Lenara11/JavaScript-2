

var one = +prompt ('Введите первое число')
var two = +prompt ('Введите второе число')
var three = +prompt ('Введите третье число')



if (one > three && one < two || one < three && one > two) {
    console.log('Среднее число ' + one);
}else if (two > one && two < three || one < three && two > three) {
    console.log('Среднее число ' + two);
}else if (three > two && three < one || three > one && three < two) {
    console.log('Среднее число ' + three);
}else {
    console.log('Нет среднего числа');
    
}





