"ese strict"
let test = [12, 929, 11, 3, 199];
function my (param) {
  let result = "";
  if (result % 3 === 0) {
    result = result + 100;
  } else {
    result = result;
  }
  return result
}
console.log(my);

console.log("-------------------");
let news = [12, 929, 11, 3, 199];
let first = news.map(function(x) {
  return x * 2;
});
console.log(first);
 console.log("----------------");

 let bills = [50.23, 19.12, 34.01, 100.11];
 let total = bills.map(function(bill) {
   return console.log(((bill * 0.15)+bill).toFixed(2));
 });
console.log("----------------");
var arr1 = [
  ["fabijoniskes", "seskine", "pasilaiciai"],
  ["centras", "senamiestis", "uzupis"]
];
 for (var row = 0; row < arr1.length; row++) {
   for (var column = 0; column < arr1[row].length; column++) {
     console.log(arr1[row] [column]);
   }
 }
console.log("----------------");

 var numbers1 = [
   [243, 12, 23, 12],
   [34, 2, 1, 553],
   [67, 56, 45, 553]
 ];
 function calc(arr) {
   for (var i = 0; i < arr.length; i++) {
     for (var j = 0; j < arr[i].length; j++) {
       (arr[i][j] % 2 === 0) ? arr[i][j] = "even" : arr[i][j] = "odd";
       }
     }
   return arr
 }
console.log(calc(numbers1));
 console.log("----------------");

let names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
function all() {
  for (i = 0; i < arr.length; i++);
}
console.log(names[0], names[5]);

console.log("-----------------");
var personazai = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark'];
console.log(personazai[0],personazai[5]);

console.log("---------------------");
var personazai = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark'];
console.log(personazai[prompt('ivesti skaiciu nuo 0 - 5')]);

console.log("--------------------------------");

let student = {
  name: "zygis",
  age: 31,
  studies: "programming",
  subjects: ["maths", "javascript", "computer science", "physics"],
  avgGrade: "80%",
  scolarship: true,
}
console.log(student.name);

console.log("-----------------");

let student2 = {
  name: "petras",
  activity: function() {
    return `${this.name} plays football after clases`
  },
}
console.log(student2.activity());
console.log("=================");

let food = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausages", "Pancakes"],
}
console.log(food);

console.log("-------------------------------");

let savingAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  whithdraw: function removeMoney(amount) {
    let verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccountBalance -= amount;
    }
  },
};
console.log("Wellcome, Your account balance is currently" + balance + "And your interest rate is" + interestRatePercent);
