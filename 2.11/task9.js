//Проверка логина

let name = prompt('Enter name:');

if (name === 'Admin') {
    let password = prompt('Enter password:');

    if (password === "I'm in charge") {
        alert('Hello!');
    } else if (password === null || password === null) {
        alert('Cancel!');
    } else {
        alert('Incorrect password');
    }
} else if (name === '' || name === null) {
    alert('Cancel!');
} else {
    alert('Incorrect name!');
}
