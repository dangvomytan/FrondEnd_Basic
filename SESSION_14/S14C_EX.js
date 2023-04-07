const myColor = ["Red","Green","While","Black"];
function EX14C_EX011()
{

   const joinMyColor =  myColor.join();
   let PrintString = document.querySelector("#lbl_EX14C_EX01");
   PrintString.innerHTML = joinMyColor;
}
// Bài tập 2
 const inputNumber2 = document.querySelector("#lbl_EX14C_EX012");
// oninput --> funtion được gọi khi giá trị trong in put thay đổi
 function EX14C_EX012(element)
{
    const valueInput=element.value;

    inputNumber2.innerHTML =valueInput;
}


    // const valueInput=element.value;
    // let resulString=[];
    // for(let i = 0; i <valueInput.legth;i++)
    // {
    //     if(valueInput[i]%2==0 && valueInput[i+1]%2==0)
    //     {
    //         resulString.push(valueInput[i]+"-");
    //     }
    //     else
    //     {
    //         resulString.push(valueInput[i]);
    //     }
    //     console.log(resulString);
    // }
// const a= resulString.join("");
// inputNumber2.innerHTML=a;

//    let PrintString = document.querySelector("#lbl_EX14C_EX01");
//    PrintString.innerHTML = resulString;
// }
// oninput()
// onchange()



// Bài tập 3
function EX14C_EX013(element)
{
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const PrintString13 = document.querySelector("#lbl_EX14C_EX013");
    let valueInput = element.value; 
    coverStr="";
    for(const str of valueInput)
    { 
        //Dùng includes() để xác định phần tử đó có trong chuỗi, giá tri trả về True/ False
        if(UPPER.includes(str))
        {
            coverStr += str.toLowerCase();
        }
        else
        {
            coverStr += str.toUpperCase();
        }
    }
    PrintString13.innerHTML= coverStr;
}
// Bài tập 4
function EX14C_EX02(element)
{
    const en = ["cat", "dog","birt","hello","goodbye"];
    const vn = ["mèo", "chó", "chim","xin chào","tạm biệt"];
    const PrintString2 = document.querySelector("#lbl_EX14C_EX02");
    let valueInput = element.value; 
    let str="";
    for(i=0;i<en.length;i++)
    {
        if(valueInput.toLowerCase() == en[i])
        {
            str += vn[i];
        }
        else
        if(valueInput.toLowerCase() == vn[i])
        {
            str += en[i];
        }
    }
    PrintString2.innerHTML= str;
}
// Bài tập 4
function EX14C_EX03(element)
{




















    let valueInput = element.value; 
    const PrintString3 = document.querySelector("#lbl_EX14C_EX03");



    PrintString3.innerHTML= valueInput;
}