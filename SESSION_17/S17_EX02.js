function squaredCalculation(number)
{
    let x = number*number;
    return x;
}
function circleArea(number)
{
    let s = ((number*number)/4)*3.14;
    return s;
}
function circleCircumference(number)
{
    let c = number*3.14;
    return c
}
function factorialCalculation(number)
{
    let f=1;
    for(let i=1;i<=number;i++)
    {
        f= f*i;
    }
    return f;
}
function isNumber(value)
{
    let check=true;
    if(isNaN(value))
        {check=false;}
    else
        {check=true;}
    return check;
}
function minArray(value)
{
    let min=value[0];
    for(let i=0; i< value.length;i++)
    {
        if(min>value[i])
        min=value[i];
    }
    console.log(min);
    return min;
}
function isInteger(number)
{
    let check=true;
    if(number>=0)
        {check=true;}
    else
        {check=false;}
    return check;
}
//=========================================================
function S17_EX021(number)
{
    PrintResult = document.querySelector("#lbl_S17_EX021");
    PrintResult.innerHTML = squaredCalculation(number);
}
function S17_EX0221()
{
    const valueInput =  document.querySelector("#tbx_EX17_EX022").value;
    PrintResult = document.querySelector("#lbl_S17_EX022");
    PrintResult.innerHTML = "S="+circleArea(valueInput);
}
function S17_EX0222()
{
    const valueInput =  document.querySelector("#tbx_EX17_EX022").value;
    PrintResult = document.querySelector("#lbl_S17_EX022");
    PrintResult.innerHTML = "C="+circleCircumference(valueInput);
}
function S17_EX023(number)
{
    PrintResult = document.querySelector("#lbl_S17_EX023");
    console.log(number);
    PrintResult.innerHTML = factorialCalculation(number);
}
function S17_EX024(value)
{
    PrintResult = document.querySelector("#lbl_S17_EX024");
    console.log(value);
    PrintResult.innerHTML = isNumber(value);
}
function S17_EX025(element)
{
    const array=[];
    const valueInput =  element.value;
    const coverValue = valueInput.split(",")
    for(let i= 0; i<coverValue.length;i++)
    {
        if(!isNaN(i))
        {
            array.push(coverValue[i]);
        }
    }
    console.log(array);
    const printString = document.querySelector("#lbl_S17_EX025");
    printString.innerHTML="Min: " +minArray(array); 
}
function S17_EX026(value)
{
    PrintResult = document.querySelector("#lbl_S17_EX026");
    console.log(value);
    PrintResult.innerHTML = isInteger(value);
}