document.write("<h3> Q Task 1: Identify which of the following variable names are legal and which are illegal: </h3>");
document.write("</br> <h5>Legal Variable Names:</h5>  <p> a)myVariable </br> c) _special </br> e) 7eleven </br> f)$price </p>");
document.write("<h5>Illegal Variable Names:</h5><p> b) 123variable (Variable names cannot start with a number) </br> d) first name (Variable names cannot have spaces) </br>g) your-variable       </p> ");
document.write("</br></br> <h3>Q Task 2: Assignment Operators </h3>");
var total = 10 ;
total += 5 ;
total -= 3 ;
total *= 2 ;
console.log(total);
document.write("<h5>Answer in console</h5>");
document.write("</br></br><h3>Q Task 3: Prompt and Variables (Math): </h3>");
var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");
var sumOfNum = firstNum + secondNum ;
document.write(" <h6>The Sum of first number  "+firstNum+" and second number "+secondNum+" is = "+sumOfNum +"</h6>");
document.write("</br></br><h3>Q Task 4:   String Concatenation:</h3>");
var bookTitle ="Bal-e-jibreel"  ;
var author = "Allama Iqbal";
var year ="1935" ;
var intro = "The book "+bookTitle+"by "+author+" was publish in "+year;
document.write("<h5>"+intro+"</h5>");
document.write("</br></br><h3>QTask 5: Checking Even or Odd </h3>");
var evenOrOdd1 = prompt(" Please Enter a number");
if (evenOrOdd1 === "" ){
    document.write("<h5>You didn't enter anything. Please enter a number.</h5>");
}else{
    var evenOrOdd = parseFloat(evenOrOdd1);
    if (!isNaN(evenOrOdd)) {
        if (evenOrOdd % 2 === 0) {
            document.write(evenOrOdd + " is even.");
        } else {
            document.write(evenOrOdd + " is odd.");
        }
    } 
}

document.write("</br></br><h3>Q Task 6: Grade Calculation </h3>");
var score = +prompt("Enter your exam score (out of 100):");
if(score >= 0 && score <= 100){
var grade ;
if (score >= 90){
 document.write("<h5>A+</h5>");
}else if (score >= 80){
    document.write("<h5>A</h5>");
   }else if (score >= 70){
    document.write("<h5>B</h5>");
   }else if (score >= 60){
    document.write("<h5>D</h5>");
   }else if (score >= 50){
    document.write("<h5>Fail</h5>");
   }
}


document.write("</br></br><h3>Q Task 7: Maximum of Three Numbers </h3>");
var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");
var num3= +prompt("Enter Third Number");
if(num1 && num2 && num3){
    var maxNum;
    if(num1 >= num2 && num1 >= num3){
       maxNum = num1 ;
    }else if(num2 >= num1 && num2 >= num3){
        maxNum = num2 ;
     }else if (num3 >= num1 && num3 >= num2){
        maxNum = num3 ;
     }
     document.write("<h5>The greater number is "+maxNum+"</h5>" );
}else{
    document.write("Invalid input. Please enter valid numbers.");
}

document.write("</br></br><h3>Q Task 8: Odd or Even Sum using loop </h3>");
var sum = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

document.write("<h5> The sum of even numbers from 1 to 100 is: ", sum+"</h5>");


document.write("</br></br><h3>Q Task 9: Output ? </br> a = ? , b= ? , c =? , result =? </h3>");
var a = 5;
var b = 3;
var c = 7;
var result = a++ - ++c + b + ++c - b++;

document.write("1)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 1;
var b = 2;
var c = 0;
var result = ++a - --a + ++c +c -a++ + --b;

document.write("</br></br> 2)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 2;
var b = 4;
var c = 6;
var result = a++ - --b + c-- + b++ - b++ - ++c;

document.write("</br></br> 3)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 10;
var b = 5;
var c = 8;
var result = ++a + --b - c++ - ++c + b--;

document.write("</br></br> 4)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 3;
var b = 2;
var c = 1;
var result = b-- - --a + ++c - a++ + ++b - a;

document.write("</br></br> 5)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 1;
var b = 5;
var c = 3;
var result =++c + a-- - b++ + c-- - --a ;

document.write("</br></br> 6)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 7;
var b = 0;
var c = 1;
var result =++c - a-- + --b + b++ - --c + c;

document.write("</br></br> 7)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 3;
var b = 4;
var c = 9;
var result =--a + ++b + c-- - b++ + ++c - --c - --b;

document.write("</br></br> 8)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 6;
var b = 1;
var c = 93;
var result =c++ - b + a-- - --c + b ;

document.write("</br></br> 9)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

var a = 10;
var b = 5;
var c = 8;
var result =a + --b - c - ++c + b-- + a++ ;

document.write("</br></br> 10)</br> a =", a);
document.write("</br>   b =", b);
document.write("</br>   c =", c);
document.write("</br> result =", result);

document.write("</br></br><h3>Q Task 10: Output ? </h3>");


	console.log(undefined && false);  
	console.log(true && false); 
	console.log(true && undefined); 
	console.log(undefined && undefined); 
	console.log('undefined' || 'true'); 
	console.log(null || 'true'); 
	console.log(null || undefined); 
	console.log(null && true || false); 
	console.log(null && true || false && true); 
	console.log(null && true || true && true); 
	console.log((null && true) || (true && 1)); 


document.write("Answer in console");




document.write("");



























