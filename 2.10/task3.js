//Покажите знак числа + Проверка на число

let result = prompt('Enter the number:');
let numberResult = Number(result);

if (isNaN(numberResult)) {
    alert("It's not a number");
} else {
    if (result > 0) {
        alert('Number > 0');
    } else if (result < 0) {
        alert('Number < 0');
    } else {
        alert('Number == 0');
    }
}
