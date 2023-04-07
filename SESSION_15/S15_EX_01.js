//----- Bài tâp 1---------//
function EX15_EX011()
{
    let numbersEX01=[];
    let count=0;
    const valueInput = document.querySelector("#tbx_EX15_EX01");
    const arrayString =  document.querySelector("#lbl_EX15_EX011");
    const printString =  document.querySelector("#lbl_EX15_EX012");
    const arrayNumbers =  (valueInput.value).split(",");
    for(const number of arrayNumbers)
    {
        if(!isNaN(number))
        {
            numbersEX01.push(number);
            if(number>=10)
            {
                count++;
                console.log(count);
            }
        }
    }
    arrayString.innerHTML="Array = ("+numbersEX01+")";
    printString.innerHTML="Count element >= 10: " +count;
}
//----- Bài tâp 1---------//
function EX15_EX012()
{
    const numbersEX02=[];
    const valueInput = document.querySelector("#tbx_EX15_EX02");
    const arrayString =  document.querySelector("#lbl_EX15_EX021");
    const printString =  document.querySelector("#lbl_EX15_EX022");
    const arrayNumber =  (valueInput.value).split(",");
    let index="";
    for(const number of arrayNumber)
    {
        if(!isNaN(number))
        {
            numbersEX02.push(number);
        }
    }
    const max = Math.max(...numbersEX02);
    for(const number in numbersEX02)
    {
        if(max==numbersEX02[number])
        {
            index += number;
        }
    }
    arrayString.innerHTML=numbersEX02;
    printString.innerHTML="Element: "+index+"  Max= "+max;
}