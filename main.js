

var one = +prompt ('Введите первое число')
var two = +prompt ('Введите второе число')
var three = +prompt ('Введите третье число')

var mn, mx, sr;

if (one < two) {
    mn = one; 
}else mn = two;
if (three < mn) {
    mn = three;
}
if (one > two){
    mx = one; 
}else mx = two;
if (three > mx) {
    mx = three;
    sr = one + two + three - mn - mx;
    alert('Среднее число ' + sr);
}else {((one !== mn && one !== mx) || (two !== mn && two !== mx) || (three !== mn && three !== mx)) 
    alert ('Что то не то')
}


