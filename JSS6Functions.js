// function:perform some specific task 

//1- function without parameter
function abc() //function define
{
document.write("hello <br>");
document.write("function in js <br>");
document.write("in todays class <br>");
}
abc();//function call

document.write("today we have a modular <br>"); //single statement don't have nay relation with function

abc();//Again function call

//2-function with parameters
//ex1
function sum(value1 =30, value2=10) //function define (two parameters pass)
{
document.write("add is: " , value1 + value2)
}
sum();
sum(12, 60);//function call with argument
// sum(50, 60);//function call with argument
// sum(200, 30);//function call with argument

//ex2 
// function fullname(fname , lname){
//  document.write("my name is"+ " " + fname+ " " + lname) ;  
// }
// fullname("rayan","sheikh");
// fullname("tayab","ali");