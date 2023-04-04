// In dãy số fibonacci
function EX_21()
{
    let n=Number(prompt("Nhập n"));
    let a=0, b=1,fibo=0;
    let string ="";
    for(i=1;i<n;i++)
    {
        fibo=a+b;
        b=a;
        a=fibo;
        string = string + fibo + ",";
    }
    alert("Dãy số fibonacci: "+string)
}
// Tính giai thừa của một số nguyên dương
function EX_22()
{
    let n=Number(prompt("Nhập số nguyên dương n"))
    let factorial=1;
    for(i=1;i<=n;i++)
    {
        factorial= factorial*i;
        console.log("fac:"+factorial);
    }
    alert("Số giai thừa của "+n+" là: "+factorial);
}
// In hình tam giac
function EX_231()
{
    let string="";
    const hieght =document.querySelector("#tbx_EX23").value;
    let printString = document.querySelector("#lbl_EX23");
    if(hieght==0 ||hieght =='')
    {
        printString.innerHTML="Hãy nhập chiều cao cho hình !";
    }
    else
    {
        for(let row=1; row<=hieght; row++)
        {
            for(let col=0; col<row; col++)
            {
                string += "*";
            }
            string += "<br>";
        } 
        printString.innerHTML = string;
    }
}
function EX_232()
{
    let string="";
    const hieght =document.querySelector("#tbx_EX23").value;
    let printString = document.querySelector("#lbl_EX23");
    if(hieght==0 ||hieght =='')
    {
        printString.innerHTML="Hãy nhập chiều cao cho hình !";
    }
    else
    {
        for(let row=hieght; row>=1; row--)
        {
            for(let col=0; col<row; col++)
            {
                string += "*";
            }
            string += "<br>";
        } 
        printString.innerHTML = string;
    }
}
function EX_233()
{
    let string="";
    const start = "*";
    const space = "&nbsp;";
    const hieght =document.querySelector("#tbx_EX23").value;
    let printString = document.querySelector("#lbl_EX23");
    if(hieght==0 ||hieght =='')
    {
        printString.innerHTML="Hãy nhập chiều cao cho hình !";
    }
    else
    {
        for (let i = 1; i <= hieght; i++) {
            string += space.repeat(hieght - i);
            string += start.repeat(i);
            string += "<br>";
          }
          printString.innerHTML = string;
    }
}
function EX_234()
{
    let string="";
    const start = "*";
    const space = "&nbsp;";
    const hieght =document.querySelector("#tbx_EX23").value;
    let printString = document.querySelector("#lbl_EX23");
    if(hieght==0 ||hieght =='')
    {
        printString.innerHTML="Hãy nhập chiều cao cho hình !";
    }
    else
    {
        for (let i = hieght; i >0; i--) 
        {
            string += space.repeat(hieght - i);
            string += start.repeat(i);
            string +=" ";
            string += "<br>";
        }
        printString.innerHTML = string;
    }
}
// Vẽ hình chữ nhật rỗng
function EX_24()
{
    let string="";
    const start = "*";
    const space = "&nbsp;";
    const hieght =document.querySelector("#tbx_EX23").value;
    const width = hieght * 4;
    let printString = document.querySelector("#lbl_EX23");
    if(hieght==0 ||hieght =='')
    {
        printString.innerHTML="Hãy nhập chiều rộng cho hình !";
    }
    else
    {
        for (let a = 1; a <= hieght; a++) 
        {
            for(let b =1; b<=width;b++)
            {
                if(a==1||b==1||a==hieght||b==width)
                {
                    string += start;

                }
                else
                {
                    string += space;
                }
            }
                string += "<br>";
          }
          printString.innerHTML = string;
    }
}
function EX_25()
{
    let str = "";
    for (let row = 0; row <= 5; row++) {
      for (let col = 0; col <= 6; col++) {
        if ((row == 0 && col % 3 != 0) || (row == 1 && col % 3 == 0))
        {
            str += "* &nbsp;";
        } 
        else 
            if (row - col == 2 || row + col == 8) 
            {
                str += "* &nbsp;";
            } else 
            {
                str += "&nbsp;&nbsp;&nbsp;";
            }
        }
      str += "<br>";
    }
    const heart = document.querySelector("#lbl_EX23");
    heart.innerHTML = str;
}
// Tính lãi suất ngân hàng
function EX_26()
{
    const debt =isNaN(document.querySelector("#tbx_EX261").value);
    const month =isNaN(document.querySelector("#tbx_EX262").value);
    const interest =isNaN(document.querySelector("#tbx_EX263").value);
    let printString = document.querySelector("#lbl_EX26");
    let interestRate=0;
    if(debt!="")
    {
        if(month!="")
        {
            if(interest!="")
            {
                interestRate = debt*(Math.pow(1+interest)*month-1);
            }
        }
    }
    else
    {

    }
    printString.innerHTML=interestRate;
}
