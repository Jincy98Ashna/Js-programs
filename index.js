document.write("<h1>JS sample</h1>");

//.... Farenheit to celsius degree....

// function celsius(f){
//     var c=5/9*(f-32);
//     console.log("Farenheit to celsius ="+c);
// }
// celsius(100);

//.... squre of a number......

// function squre(p){
//     sq=p*p;
//     console.log("squre="+sq);
// }
// squre(5);

// ....Add two nos pass o/p as argument....

// function add(a,b,z){
//     z=a+b;
//     console.log("sum="+z);
// }add(3,4,7);

// ...if-else...greater or not

// let a=prompt("Enter a number: ");
// let b=prompt("Enter another number: ");
// if(a>b){
//     console.log("Greater number is "+a);

// }else{
//     console.log("greater number is "+b);
// }

// ...multiple of 7 or not....
// a=prompt("Enter a number");
// if(a%7==0){
//     console.log("Entered number is a multiple of 7");
// }else{
//     console.log("Entered number is not a multiple of 7");
// }

//....Even or odd...
// num=prompt("Enter a number: ");
// if(num%2==0){
//     console.log("Number is EVEN");
// }else{
//     console.log("Number is ODD");
// }

// ...leap year or not....
// year=prompt("Enter a year: ");
// if(year%4==0){
//     console.log("LEAP YEAR");
// }else{
//     console.log("NOT A LEAP YEAR");
// }

// ..vowel or consonent..
// alpha=prompt("Enter an alphabet: ");
// if(alpha=="a"|| alpha=="A"|| alpha=="e"|| alpha=="E"|| alpha=="i"|| alpha=="I"||
// alpha=="o"|| alpha=="O"|| alpha=="u"|| alpha=="U"){
// console.log("Entered alphabet is a vowel");
// }
// else{
//     console.log("Entered alphabet is a consonent");
// }

// ..weekday print...

// num=prompt("Enter a number from 1 to 7");
// if(num==1){
//     console.log("Sunday");
// }else if(num==2){
//     console.log("Monday");
// }else if(num==3){
//     console.log("Tuesday");
// }else if(num==4){
//     console.log("Wedensday");
// }else if(num==5){
//     console.log("Thursday");
// }else if(num==6){
//     console.log("Friday");
// }else if(num==7){
//     console.log("Saturday")
// }else{
//     console.log("Invalid entry!!!");
// }

// ...sign of 3 nos..
// a=prompt("Enter 1st number: ");
// b=prompt("Enter 2nd number: ");
// c=prompt("Enter 3rd number: ");
// if(a>0&&b>0&&c>0){
//     alert("The sign is +");
// }else if(a>0&&b<0&&c<0){
//     alert("The sign is +");
// }else if(a<0&&b>0&&c<0){
//     alert("The sign is +");
// }else if(a<0&&b<0&&c>0){
//     alert("The sign is +");
// }else{
//     alert("The sign is -");
// }

// ...largest of 5 nos...
a=prompt("Enter 1st no: ");
b=prompt("Enter 2nd no: ");
c=prompt("Enter 3rd no: ");
d=prompt("Enter 4th no: ");
e=prompt("Enter 5th no: ");
if(a>b&&a>c&&a>d&&a>e){
    console.log("Largest is "+a);
}else if(b>a&&b>c&&b>d&&b>e){
    console.log("Largest is "+b);
}else if(c>a&&c>b&&c>d&&c>e){
    console.log("Largest is "+c);
}else if(d>a&&d>b&&d>c&&d>e){
    console.log("Largest is "+d);
}else {
    console.log("Largest is "+e);
}