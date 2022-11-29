Problem 1 : Check whether a number is Prime or not

let num = 13
let count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++
  }
}
if (count == 2) {
  console.log("a prime number");
} else {
  console.log("not a prime number");
}


Problem 2 : Check whether a string is palindrome or not.

let str = "naman";
let rev = "";

for (let i = str.length-1 ; i >= 0; i--) {
  rev += str[i];
}
if (str == rev) {
  console.log("Palindrome");
} else {
  console.log("not a Palindrome");
}


