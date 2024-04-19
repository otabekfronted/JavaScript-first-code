let clientName = prompt("Ismingizni kiriting:");
let first_letter = clientName.charAt(0).toUpperCase();
let continuation = clientName.slice(1).toLowerCase();
let result = `${first_letter}${continuation}`;
alert(`Salom ${result}`);
