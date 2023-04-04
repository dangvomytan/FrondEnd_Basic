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
    string="";
    for(i=0;i<5;i++)
    {
        for(j=1;j<2;j++)
        {
            string=string+"*";
            console.log(string);
        }
    }   
}
function EX_232()
{
    string="";
    for(i=5;i>=0;i--)
    {
        for(j=1;j>i;j++)
        {
            string=string+"*";
            console.log(string);
        }
    }   
}