alert("Программа для вывода последний и средней цифры ввёденного числа")
var number = prompt("Введите трёхзначное число: ")
var lastnumber = number % 10
number = Math.floor(number/10)
var middlenumber = number % 10
console.log("Последняя цифра(единицы): "+ lastnumber)
console.log("Средняя цифра(десятки): "+ middlenumber)