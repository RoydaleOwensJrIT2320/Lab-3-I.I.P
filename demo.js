//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement

Loops:
For loop
While loop
Do while loop

Break
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}
function multiple()
{
    var m = 24;
    var b = 42;
    var r = m * b;
    alert("The result is" + r);
}
function division()
{
    var k = 48;
    var o = 12;
    var t = k / o;
    alert("The Result is " + t);
}
function mean()
{
    var t = 25;
    var f = 47;
    var n = 98;
    var s = 46;
    var ff = 52;
    var fff = 5;
    var d = t + f + n + s + +ff;
    var r = d / fff;
    alert("The average is " + r);
}
function sum()
{
  var sum = 0;
  
  for(var c=1;c<=200;c++)
  {
      if(c % 2 == 0) sum+= c;
      
  }
  alert("Total Sum Is " + sum);
    
  
    
}
function series()
{
    var f1 = 0;
    var f2 = 1
    
    var i =2;
    while (i <20) 
    {
        var f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        i++  
    }
    console.log(f3);
}

