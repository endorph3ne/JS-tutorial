//Перепишите 'if..else' в '?'

let login = prompt('Enter login: ');
let message;

message =
    login == 'Employee'
        ? 'Hello'
        : login == 'Director'
        ? 'Hello, Sir'
        : login == ''
        ? 'No login'
        : '';

alert(message);
