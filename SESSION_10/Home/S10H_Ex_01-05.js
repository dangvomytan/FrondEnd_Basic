// Kiểm tra năm nhuận
function leapYear()
{
    let year = parseInt(prompt("Enter a year"));
    let isLeapYear = false;
    if (year % 4 == 0) 
    {
        if (year % 100 == 0) 
        {
        if (year % 400 == 0) 
        {
            isLeapYear = true;
        }
    } 
    else 
    {
        isLeapYear = true;
    }
    }
    if (isLeapYear) 
    {
        alert(year + " is a leap year");
    } else 
    {
        alert(year + " is NOT a leap year");    
    }
}

function ifElse()
{
    let value = prompt('What is the "official" name of JavaScript?', '');
    if (value == 'ECMAScript')
    {
        alert('Right!');
    } 
    else 
    {
        alert("You don't know? ECMAScript!");
    }
}

function login()
{
    let userName = prompt("Who's there?", '');
    if (userName == 'Admin') 
    {
        let pass = prompt('Password?', '');
        if (pass == 'TheMaster') 
        {
            alert('Welcome!');
            
        } 
        else if (pass == null) 
        {
            alert('Canceled.');
        }
        else
        {
            alert('Wrong password');
            
        }        
    } 
    else if (userName == null) 
    {
        alert('Canceled');
    } 
    else 
    {
        alert("I don't know you");
        
    }
}

function switchCase1(){
    let browser = prompt("brower: ",'')
    switch (browser) 
    {
        case 'Edge':
        alert("You've got the Edge!");
        break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
        alert('Okay we support these browsers too');
        break;
        default:
        alert('We hope that this page looks ok!');
    }
}

function switchCase2()
{
    let a=prompt('a=?','')
    switch (a) {
        case 0:
            alert(0);
        break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
        break;
    }

}

function ThucHanh5_1()
{
let a = prompt("a: ");
let b = prompt("b: ");
result = (a + b < 4) ? 'Below' : 'Over';
console.log("kq" +result);
alert('resul: ',result);
}
function ThucHanh5_2()
{
    let message = prompt("message: ");
     message = (login=="Employee") ? "Hello" : (login=="Director") ? 'Greetings' :
    (login == '') ?
    'No login' : '';    
    alert(message);
}