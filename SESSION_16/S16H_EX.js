function processConfirm(answer)
{
    let result= "";
    if(answer)
    {
        result="Excellent. We'll play a nice game of chess."; 
    }
    else
    {
        result="Maybe later then.";
    }
    return answer;
}
function EX16H_EX1()
{
    let confirmAnswer =  confirm("Shall we play a game?");
    let theAnswer = processConfirm(confirmAnswer)
    const printString = document.querySelector("#lbl_EX16H_EX1")
    printString.innerHTML= theAnswer;
}

function EX16H_EX2(value)
{
    let valueInput= Number(value);
    const printString= document.querySelector("#lbl_EX16H_EX2");
    printString.innerHTML="Độ C: "+((valueInput-32) /1.8);
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
 function EX16H_EX3(element)
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
    const printString = document.querySelector("#lbl_EX16H_EX3");
    printString.innerHTML="Min: " +minArray(array);
 }