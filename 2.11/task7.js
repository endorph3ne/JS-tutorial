//Проверка значения вне диапазона

let age = prompt('Enter your age:');
age = Number(age);

if (!(age >= 14 && age <= 90)) {
    alert('Good!');
}

if (age < 14 || age > 91) {
    alert('Good!');
}
