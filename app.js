//   ALL JAVASCRIPT CHAPTERS SOLUTIONS  //

// ==== Chapter # 21-25 String Methods and Task # 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName);

// ==== Chapter # 21-25 String Methods and Task # 2

// var mobiles = prompt("Enter your favourite Mobile model");
// var d = mobiles.length;
// document.write(
//   "My favourite phone is: " + mobiles + "<br>" + "Length of string: " + d
// );

// ==== Chapter # 21-25 String Methods and Task # 3

// var pak = "Pakistani";
// var a = pak.indexOf("n");
// document.write("String: " + pak + "<br>" + "Index of 'n': " + a);

// ==== Chapter # 21-25 String Methods and Task # 4

// var hello = "Hello World";
// var h = hello.lastIndexOf("l");
// document.write("String: " + hello + "<br>" + "Last index of 'l': " + h);

// ==== Chapter # 21-25 String Methods and Task # 5

// var paki = "Pakistani";
// var a = paki.charAt(3);
// document.write("String: " + paki + "<br>" + "Character at index 3: " + a);

// ==== Chapter # 21-25 String Methods and Task # 6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert("Hello! " + fullName);

// ==== Chapter # 21-25 String Methods and Task # 7

// var city = "Hyderabad";
// var c = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>" + "Afer replacement: " + c);

// ==== Chapter # 21-25 String Methods and Task # 8

// var message =
//   "“Ali and Sami are best friends. They play cricket and football together.”;";
// var end = message.replace(/and/g, "&");
// document.write(end);

// ==== Chapter # 21-25 String Methods and Task # 9

// var num = "472";
// var con = parseInt(num);
// document.write(
//   "Value: " +
//     num +
//     "<br>" +
//     "Type: " +
//     typeof "472" +
//     "<br>" +
//     "Value: " +
//     con +
//     "<br>" +
//     "Type: " +
//     typeof con
// );

// ==== Chapter # 21-25 String Methods and Task # 10

// var user = prompt("Enter Your favourite Biscuit");
// var u = user.toUpperCase();
// document.write("User input: " + user + "<br>" + "Upper case : " + u);

// ==== Chapter # 21-25 String Methods and Task # 11

// var user1 = prompt("Enter Your favourite Biscuit");
// var d = user1.toString();
// // var d = user1.slice(0);
// var u1 = d.charAt(0).toUpperCase() + d.slice(1);
// document.write("User input: " + user1 + "<br>" + "Title case : " + u1);

// ==== Chapter # 21-25 String Methods and Task # 12

// var number = 35.36;
// var n = number.toString();
// var d = n.replace(".", "");
// document.write("Number: " + number + "<br>" + "Result: " + d);

// ==== Chapter # 21-25 String Methods and Task # 13

// var name1 = prompt("Enter your Username");

// for (var i = 0; i < name1.length; i++) {
//   if (name1.slice(i) === "@") {
//     alert("Please! Enter a valid username");
//     break;
//   } else if (name1.slice(i) === ".") {
//     alert("Please! Enter a valid username");
//     break;
//   } else if (name1.slice(i) === "!") {
//     alert("Please! Enter a valid username");
//     break;
//   } else if (name1.slice(i) === ",") {
//     alert("Please! Enter a valid username");
//     break;
//   }
// }
// alert(name1);

// ==== Chapter # 21-25 String Methods and Task # 14

// var ask = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var arr = [];
// arr[0] = ["cake"];
// arr[1] = ["apple pie"];
// arr[2] = ["cookie"];
// arr[3] = ["chips"];
// arr[4] = ["patties"];
// var a = (arr[0] = 0);
// var b = (arr[1] = 1);
// var c = (arr[2] = 2);
// var d = (arr[3] = 3);
// var e = (arr[4] = 4);
// var f = ask + arr;

// if (ask === "cake") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[0] + " in our bakery"
//   );
// } else if (ask === "apple pie") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[1] + " in our bakery"
//   );
// } else if (ask === "cookie") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[2] + " in our bakery"
//   );
// } else if (ask === "chips") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[3] + " in our bakery"
//   );
// } else if (ask === "patties") {
//   document.write(
//     ask + " is <b> available </b> at index " + arr[4] + " in our bakery"
//   );
// } else {
//   document.write(
//     "We are sorry . " + ask + " is not <b> available </b> in our bakery"
//   );
// }

// ==== Chapter # 21-25 String Methods and Task # 15

// var pass = prompt("Enter your password");
// document.write("Entered Password: " + pass);
// var input = pass;

// if (isNaN(parseInt(input[0]))) {
// } else {
//   document.write(
//     "<br>" +
//       "Password should not start with number" +
//       "<br>" +
//       "Please enter valid password"
//   );
// }

// for (var i = 6; i > input.length; i++) {
//   document.write("<br>" + "Please put at least 6 character password");
//   break;
// }

// ==== Chapter # 21-25 String Methods and Task # 16

// var str = "University of Karachi";
// var d = str.split("");
// // var e = str.split("");
// document.write(
//   d[0] +
//     "<br>" +
//     d[1] +
//     "<br>" +
//     d[2] +
//     "<br>" +
//     d[3] +
//     "<br>" +
//     d[4] +
//     "<br>" +
//     d[5] +
//     "<br>" +
//     d[6] +
//     "<br>" +
//     d[7] +
//     "<br>" +
//     d[8] +
//     "<br>" +
//     d[9] +
//     "<br>" +
//     "<br>" +
//     d[11] +
//     "<br>" +
//     d[12] +
//     "<br>" +
//     "<br>" +
//     d[14] +
//     "<br>" +
//     d[15] +
//     "<br>" +
//     d[16] +
//     "<br>" +
//     d[17] +
//     "<br>" +
//     d[18] +
//     "<br>" +
//     d[19] +
//     "<br>" +
//     d[20]
// );

// ==== Chapter # 21-25 String Methods and Task # 17

// var input1 = prompt("Enter your country");
// var d = input1.charAt(input1.length - 1);
// document.write(
//   "User input: " + input1 + "<br>" + "Last character of input: " + d
// );

// ==== Chapter # 21-25 String Methods and Task # 18

// var Text = "The quick brown fox jumps over the lazy dog";
// var counting = (Text.match(/the/g) || []).length;
// document.write(
//   "Text:" +
//     Text +
//     "<br> " +
//     "There are " +
//     counting +
//     " occurrence(s) of word 'the' "
// );

// ==== Chapter # 26-30 Math methods  and Task # 1

// var num = prompt("Enter positive integer number");
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// var round = Math.round(num);

// document.write(
//   "number: " +
//     num +
//     "<br>" +
//     "round of value: " +
//     round +
//     "<br> " +
//     "floor value: " +
//     floor +
//     "<br> " +
//     "ceil value: " +
//     ceil
// );

// ==== Chapter # 26-30 Math methods  and Task # 2

// var num = prompt("Enter negative integer number");
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// var round = Math.round(num);

// document.write(
//   "number: " +
//     num +
//     "<br>" +
//     "round of value: " +
//     round +
//     "<br> " +
//     "floor value: " +
//     floor +
//     "<br> " +
//     "ceil value: " +
//     ceil
// );

// ==== Chapter # 26-30 Math methods  and Task # 3

// var num2 = -4;
// var round2 = Math.abs(num2);
// document.write("The absolute value of " + num2 + " is " + round2);

// ==== Chapter # 26-30 Math methods  and Task # 4

// var ran = Math.random();
// var ran1 = Math.random();
// var Num = ran * 10;
// var Num1 = ran1 * 10;
// var Stars = Math.floor(Num);
// var Stars1 = Math.floor(Num1);
// document.write(
//   "random dice value: " + Stars + "<br>" + "random dice value: " + Stars1
// );

// ==== Chapter # 26-30 Math methods  and Task # 5

// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if (floor === 0) {
//   document.write("<b>2</b>" + " <br>" + "random coin value: " + "Heads");
// } else {
//   document.write("<b>1</b>" + " <br>" + "random coin value: " + "Tails");
// }

// ====Chapter # 26-30 Math methods  and Task # 6

// var random = Math.random() * 100;
// var hundred = Math.floor(random);
// document.write("random between 1 and 100: " + hundred);

// ====Chapter # 26-30 Math methods  and Task # 7

// var parse = prompt("Enter your weight in kilogram");
// var pae = parseInt(parse) + " kilograms";
// document.write("The weight of user is " + pae);

// ====Chapter # 26-30 Math methods  and Task # 8

// var val = prompt("Enter a number between 1 to 10");
// var num = [2, 4, 5, 7, 10];
// var f = parseInt(val);
// if (val == num[0]) {
//   alert("Congratulations!");
// } else if (val == num[1]) {
//   alert("Congratulations!");
// } else if (val == num[2]) {
//   alert("Congratulations!");
// } else if (val == num[3]) {
//   alert("Congratulations!");
// } else if (val == num[4]) {
//   alert("Congratulations!");
// } else {
//   alert("Try again");
// }
// console.log(val);

// ====Chapter # 31-34 Date methods and Task # 1

// var a = new Date();
// var b = a.toString();
// document.write(b);

// ====Chapter # 31-34 Date methods and Task # 2

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var date = new Date();
// var month = month[date.getMonth()];
// alert("Current month: " + month);

// ====Chapter # 31-34 Date methods and Task # 3

// var day = new Array();
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";
// var days = new Date();
// var day1 = day[days.getDay()];
// alert("Today is " + day1);

// ====Chapter # 31-34 Date methods and Task # 4

// var day = new Array();
// var d = day;
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";
// var days = new Date();
// var day1 = day[days.getDay()];
// if (day1 === day[0]) {
//   alert("It's Fun day");
// } else if (day1 === day[6]) {
//   alert("It's Fun day");
// }
// alert(day1);

// ====Chapter # 31-34 Date methods and Task # 5

// var a = new Date();
// var b = a.getDate(a);
// if (a < 16) {
//   alert("First fifteen days of the month");
// } else if (a > 16) {
//   alert("Last days of the month");
// }
// console.log(b);

// ====Chapter # 31-34 Date methods and Task # 6

// var a = new Date();
// var b = a.toString();

// var dt = new Date();
// var time = dt.getTime();
// var d = time / 1000 / 60;
// console.log(time);

// document.write(
//   "Current date: " +
//     dt +
//     "<br>" +
//     "Elapsed milliseconds since january 1, 1970: " +
//     time +
//     "<br>" +
//     "Elapsed minutes since january 1, 1970: " +
//     d
// );

// ====Chapter # 31-34 Date methods and Task # 7

// var a = new Date();
// var b = a.getHours();
// if (b < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }
// console.log(b);

// ====Chapter # 31-34 Date methods and Task # 8

// var a = new Date("Dec 31, 2020");
// var laterdate = a;
// document.write("Later date: " + laterdate);

// ====Chapter # 31-34 Date methods and Task # 9

// var date1 = new Date("06/18/2015");
// var date2 = new Date("06/18/2020");

// var Difference_In_Time = date2.getTime() - date1.getTime();

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// document.write(Difference_In_Days + " days has passed since 1st Ramadan, 2015");

// ====Chapter # 31-34 Date methods and Task # 10

// var date1 = new Date("01/01/2015");
// var date2 = new Date("12/05/2015");

// var Difference_In_Days = Math.abs(date1 - date2) / 1000;
// document.write(
//   "On reference date " +
//     date2 +
//     "," +
//     "<br>" +
//     Difference_In_Days +
//     " seconds had passed since beginning of 2015"
// );

// ====Chapter # 31-34 Date methods and Task # 11

// var Current = new Date();
// Current.setHours(2, 5);
// var Current1 = new Date();
// Current1.setHours(3, 5);
// document.write(
//   "Current date: " + Current + "<br>" + "1 hours ago it's was " + Current1
// );

// ====Chapter # 31-34 Date methods and Task # 12

// var Current = new Date();
// var past = new Date();
// past.setFullYear(1920);
// document.write(
//   "current date: " + Current + "<br>" + "100 years back, it was " + past
// );

// ====Chapter # 31-34 Date methods and Task # 13

// var age = prompt("Enter your age");
// var d = parseInt(age);
// var diff = Date.now() - d;
// var age_dt = new Date(diff);

// var f = Math.abs(age_dt.getFullYear() - d);

// document.write("Your age is  " + age + "<br>" + "Your birth year is " + f);

// ====Chapter # 31-34 Date methods and Task # 14

// var name = "Abdul Wahab";
// var month = "February";
// var number_unit = 500;
// var charges = 20;
// var sum = number_unit * charges;
// var late = 400;
// var sum_late = sum + late;
// document.write(
//   "<h1>K-Electric Bill </h1>" +
//     "<br>" +
//     "Customer Name: " +
//     name +
//     "<br>" +
//     "Month: " +
//     month +
//     "<br>" +
//     "Number of unit: " +
//     number_unit +
//     "<br>" +
//     "Charges per unit: " +
//     charges +
//     "<br>" +
//     "<br>" +
//     "Net Amount Payable (within Due Date) " +
//     sum +
//     "<br>" +
//     "Late Payment Surcharge " +
//     late +
//     "<br>" +
//     "Gross Amount Payable (after Due Date) " +
//     sum_late
// );

// ====Chapter # 35-38 function and Task # 1

// function greetings(greets) {
//   var greets = new Date();
//   document.write(greets);
// }
// greetings();

// ====Chapter # 35-38 function and Task # 2

// function fullname(user) {
//   var first_name = prompt("Enter your first name");
//   var last_name = prompt("Enter your last name");
//   alert("Hello, " + first_name + " " + last_name);
// }
// fullname();

// ====Chapter # 35-38 function and Task # 3

// function sum(a, b, c) {
//   var a = +prompt("Enter first value");
//   var b = +prompt("Enter second value");
//   var c = a + b;
//   alert(c);
// }
// sum();

// ====Chapter # 35-38 function and Task # 4

// function calc(num1, oper, num2) {
//   if (oper === "+") return num1 + num2;
//   else if (oper === "-") return num1 - num2;
//   else if (oper === "*") return num1 * num2;
//   else if (oper === "/") return num1 / num2;
//   else {
//     return "Incorrect Value!";
//   }
// }

// var result = calc(5, "+", 4);
// var result1 = calc(6, "-", 3);
// var result2 = calc(2, "*", 4);
// var result3 = calc(20, "/", 2);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// ====Chapter # 35-38 function and Task # 5

// function square(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(square(4, 3));
// square();

// ====Chapter # 35-38 function and Task # 6

// function factorial(n) {
//   var answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// }
// var n = 6;
// answer = factorial(n);
// console.log("The factorial of " + n + " is " + answer);

// ====Chapter # 35-38 function and Task # 7

// function sum() {
//   var FirstNumber = prompt("Enter first value");
//   var SecondNumber = prompt("Enter second value");

//   var result = FirstNumber,
//     SecondNumber;

//   for (var i = 2; i <= SecondNumber; i++) {
//     result += i;
//   }

//   document.write(result + "<br>");
// }
// sum();

// ====Chapter # 35-38 function and Task # 8

// function hypotenuse(a, b) {
//   function square(f) {
//     return f * f;
//   }
//   return Math.sqrt(square(a) + square(b));
// }

// function secondFunction() {
//   var result;
//   result = hypotenuse(3, 4);
//   console.log(result);
// }
// hypotenuse();
// secondFunction();

// ====Chapter # 35-38 function and Task # 9

// var length;
// var width;
// function area(length, width) {
//   return length * width;
// }
// function perimeter(length, width) {
//   return 2 * (length + width);
// }

// document.write("The area of your rectangle is " + area(4, 8));
// document.write(" The perimeter of your rectangle is " + perimeter(4, 8));

// ====Chapter # 35-38 function and Task # 10

// function palindrome(word, check) {
//   var word = prompt("Enter your Word?");
//   var check = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     check += word[i];
//   }
//   if (word === check) {
//     console.log(word + " is palindrome word");
//   }
// }
// palindrome();

// ====Chapter # 35-38 function and Task # 11

// function uppercase(String) {
//   var splitString = String.toLowerCase().split(" ");
//   for (var i = 0; i < splitString.length; i++) {
//     splitString[i] =
//       splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
//   }

//   return splitString.join(" ");
// }

// document.write(uppercase("the quick brwon fox"));

// ====Chapter # 35-38 function and Task # 12

// function longkeyword(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   str.forEach(function (str) {
//     if (longest < str.length) {
//       longest = str.length;
//       word = str;
//     }
//   });
//   return word;
// }
// console.log(longkeyword("Web Development Tutorial"));

// ====Chapter # 35-38 function and Task # 13

// function counting(string, keyword) {
//   var word_Count = 0;
//   for (var l = 0; l < string.length; l++) {
//     if (string.charAt(l) == keyword) {
//       word_Count += 1;
//     }
//   }
//   return word_Count;
// }
// console.log(counting("JSResourceS.com", "o"));

// ====Chapter # 35-38 function and Task # 14

// function calcCircumfrence(radius) {
//   var y = Math.PI * radius * 2;
//   console.log("The circumfrence is " + y + ".");
// }
// function calcArea(radius) {
//   var x = Math.PI * radius * radius;
//   console.log("The area is " + x + ".");
// }
// calcCircumfrence(20);
// calcArea(5);
