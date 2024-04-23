"use strict";
// if1

// let a = +prompt("Son kiriting");
// if (a > 0) {
//     alert(a + 1);
// } else {
//     alert(a);
// }

// if2

// let a = +prompt("Son kiriting");
// if (a > 0) {
//     alert(a + 1);
// } else {
//     alert(a - 2);
// }

// if3

// let a = +prompt("Son kiriting");
// if (a > 0) {
//     alert(a + 1);
// } else if (a < 0) {
//     alert(a - 2);
// } else {
//     alert(10);
// }

// if4

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");
// let sum = 0;
// let manfiy = 0;
// if (a > 0) {
//     sum += 1;
//     if (b > 0) {
//         sum += 1;
//         if (c > 0) {
//             sum += 1;
//         }
//     }
// }
// alert(`Musbat sonlar ${sum} ta`);

// if5
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");
// let sum = 0;
// let manfiy = 0;
// if (a > 0) {
//     sum += 1;
// } else {
//     manfiy += 1;
// }
// if (b > 0) {
//     sum += 1;
// } else {
//     manfiy += 1;
// }
// if (c > 0) {
//     sum += 1;
// } else {
//     manfiy += 1;
// }
// alert(`Musbat sonlar ${sum}ta . Manfiy sonlar ${manfiy}ta`);

// if6
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a > b) {
//     alert(a);
// } else if (a < b) {
//     alert(b);
// } else alert("Bir xil son kiritildi");

// if7
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a > b) {
//     alert(`tartib raqami 2`);
// } else if (a < b) {
//     alert(`tartib raqami 1`);
// } else alert("Bir xil son kiritildi");

// if8
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a > b) {
//     alert(`Katta son ${a}. Kichik son ${b}`);
// } else if (a < b) {
//     alert(`Katta son ${b}. Kichik son ${a}`);
// } else alert("Bir xil son kiritildi");

// if9
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a > b) {
//     alert(`A=${b} B=${a}`);
// } else if (a < b) {
//     alert(`B=${a} A=${b}`);
// } else alert("Bir xil son kiritildi");

// if10
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a != b) {
//     alert(a + b);
// } else if (a == b) {
//     alert(0);
// } else {
//     alert(a, b);
// }

// if11
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// if (a != b) {
//     if (a > b) {
//         alert(a);
//     } else if (a < b) {
//         alert(b);
//     }
// } else {
//     alert(0);
// }

// if12
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchinchi sonni kiriting");

// if (b > a && a < c) {
//     alert(`Eng kichik son ${a}`);
// } else if (a > b && b < c) {
//     alert(`Eng kichik son ${b}`);
// } else {
//     alert(`Eng kichik son ${c}`);
// }

// if13
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchinchi sonni kiriting");

// if ((a >= b && a <= c) || (a <= b && a >= c)) {
//     alert(a);
// } else if ((b >= a && b <= c) || (b <= a && b >= c)) {
//     alert(b);
// } else {
//     alert(c);
// }

// var ortacha = avarageNumber(a, b, c);
// console.log("Ortacha son:", ortacha);

// if14
// let a = +prompt("Birinchi sonni  kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");
// if (a <= b && a >= c) {
//     alert(`Katta son${c}. Kichik son ${b}`);
// } else if (a >= b && a <= c) {
//     alert(`Katta son${b}. Kichik son ${c}`);
// } else if (b <= c && b >= a) {
//     alert(`Katta son${a}. Kichik son ${c}`);
// } else if (b >= c && b <= a) {
//     alert(`Katta son${c}. Kichik son ${a}`);
// } else if (c <= b && c >= a) {
//     alert(`Katta son${b}. Kichik son ${a}`);
// } else if (c >= b && c <= a) {
//     alert(`Katta son${a}. Kichik son ${b}`);
// }

// if15
// let a = +prompt("Son kiriting");
// let b = +prompt("Son kiriting");
// let c = +prompt("Son kiriting");
// if (a <= b && a >= c) {
//     alert(`${a} ${b}`);
// } else if (a >= b && a <= c) {
//     alert(`${a} ${c}`);
// } else if (b <= c && b >= a) {
//     alert(`${b}, ${c}`);
// } else if (b >= c && b <= a) {
//     alert(`${b}, ${a}`);
// } else if (c <= b && c >= a) {
//     alert(`${c}, ${a}`);
// } else if (c >= b && c <= a) {
//     alert(`${c}, ${b}`);
// }

// ===============================================================================================
// Boolean

// Boolean1
// let a = prompt("Son kiriting");
// if (a > 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// // Boolean2
// let a = prompt("Son kiriting");
// if (a % 2 == 1) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean3
// let a = prompt("Son kiriting");
// if (a % 2 == 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean4
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a > 2 && b <= 3) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean5;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a >= 0 && b < -2) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean6;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");
// let c = prompt("Uchinchi sonni kiriting");

// if (a <= b <= c) {
//     alert(true);
// } else {
//     alert(false);
// }

// boolean8
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a % 2 == 1 && b % 2 == 1) {
//     alert(true);
// } else {
//     alert(false);
// }

// boolean9
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a % 2 == 1 || b % 2 == 1) {
//     alert(true);
// } else {
//     alert(false);
// }

// // boolean10
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a % 2 == 0 && b % 2 == 1) {
//     alert(true);
// } else if (a % 2 == 1 && b % 2 == 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// boolean11
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");

// if (a % 2 == 0 && b % 2 == 0) {
//     alert(true);
// } else if (a % 2 == 1 && b % 2 == 1) {
//     alert(true);
// } else {
//     alert(false);
// }

// // Boolean12;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");
// let c = prompt("Uchinchi sonni kiriting");

// if (a > 0 && b > 0 && c > 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean13;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");
// let c = prompt("Uchinchi sonni kiriting");

// if (a > 0 && b < 0 && c < 0) {
//     alert(true);
// } else if (a < 0 && b > 0 && c < 0) {
//     alert(true);
// } else if (a < 0 && b < 0 && c > 0) {
//     alert(true);
// } else if (a < 0 && b < 0 && c < 0) {
//     alert(false);
// } else {
//     alert(true);
// }

// Boolean14;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");
// let c = prompt("Uchinchi sonni kiriting");

// if (a > 0 && b < 0 && b < 0) {
//     alert(true);
// } else if (a < 0 && b > 0 && c < 0) {
//     alert(true);
// } else if (a < 0 && b < 0 && c > 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean15;
// let a = prompt("Birinchi sonni kiriting");
// let b = prompt("Ikkinchi sonni kiriting");
// let c = prompt("Uchinchi sonni kiriting");

// if (a > 0 && b > 0 && c < 0) {
//     alert(true);
// } else if (a < 0 && b > 0 && c > 0) {
//     alert(true);
// } else if (a > 0 && b < 0 && c > 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean16
// let a = +prompt("Son kiriting");
// if (a >= 10 && a <= 99) {
//     if (a % 2 == 0) {
//         alert(true);
//     } else {
//         alert(false);
//     }
// } else {
//     alert(false);
// }

// // Boolean17
// let a = +prompt("Son kiriting");
// if (a >= 100 && a <= 999) {
//     if (a % 2 == 1) {
//         alert(true);
//     } else {
//         alert(false);
//     }
// } else {
//     alert(false);
// }

// Boolean18
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");

// if (a == b || a == c || b == c) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean19
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");
// if (
//     (a == -b && a == -c && b == -c) ||
//     (b == -a && b == -c && a == -c) ||
//     (c == -a && c == -b && a == -b)
// ) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean20
// let n = +prompt("3 xonali son kiriting");
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if (a != b && a != c && c != b) {
//     alert(true);
// } else {
//     alert(false);
// }

// // Boolean21
// let n = +prompt("3 xonali son kiriting");
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if (a > b && a > c && c < b) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean22
// let n = +prompt("3 xonali son kiriting");
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if ((a > b && a > c && c < b) || (a < b && a < c && c > b)) {
//     alert(true);
// } else {
//     alert(false);
// }

// Boolean23
// let n = +prompt("3 xonali son kiriting");
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if ((a == c && a == b && c == b) || (a == c && a != b && c != b)) {
//     alert(true);
// } else {
//     alert(false);
// }

// =========================================================================================
// for

// for1
// let a = prompt("Son kiriting");
// for (let i = 0; i <= a; i++) {
//     console.log(i);
// }

// for2
// let a = +prompt("Son kiriting");

// let a = 10;
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for3
// let a = prompt("Son kiriting");
// let sum = 0;
// for (let i = 1; i <= a; i++) {
//     sum += i;
// }
// console.log(sum);

// // for4
// let a = prompt("Son kiriting");
// let juft = 0;
// let sum = 0;
// for (let i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//         console.log(`Juft sonlar ${i}`);
//         juft += i;
//     }
// }
// console.log(`Juft sonlar yig'indisi ${juft}`);

// // for5
// let a = prompt("Son kiriting");
// let toq = 0;
// for (let i = 1; i <= a; i++) {
//     if (i % 2 == 1) {
//         console.log(`toq sonlar ${i}`);
//         toq += i;
//     }
// }
// console.log(`Toq sonlar yig'indisi ${toq}`);

// // for6
// let a = prompt("Son kiriting");
// let sum = 0;
// for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//         sum += 1;
//         console.log(`Sonning bo'luvchilari ${i}`);
//     }
// }

// for7
// let a = prompt("Son kiriting");
// let sum = 0;
// let toq = 0;
// for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//         sum += 1;
//         toq += i;
//     }
// }
// console.log(`Sonning bo'luvchilarining yig'indisi ${toq}`);
// console.log(`Sonning bo'luvchilar sonni ${sum}ta`);

// for8
// let i = 1;
// let n = +prompt("son kiriting");
// let sum = 0;
// let sum2 = 0;

// for (i; i <= n; i++) {
//     if (n % i == 0) {
//         sum += 1;
//     }
// }
// if (sum == 2) {
//     alert("tub son ");
// } else {
//     alert("tub son emas");
// }
