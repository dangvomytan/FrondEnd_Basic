//--- bài tâp 1 ----------
let x=0;
let array01 = Array();
let array02 = [-3,5,1,3,2,10];
function Add_Element()
{
    let element =  document.querySelector("#tbx_EX01");
    let printString = document.querySelector("#lbl_EX01");
    array01[x] = element.value;
    console.log("x1"+x);
    printString.innerHTML="Element: "+array01[x]+" add at index "+x;
    x++;
    document.querySelector("#tbx_EX01").value="";
}
function Display_Array()
{
    let printString = document.querySelector("#lbl_EX01");
    let strElement =""
    for(let i = 0; i< array01.length;i++)
    {
        strElement+="Element "+i+ ": " +array01[i] + "<br/>";
    }
    printString.innerHTML= strElement;
}
//--- bài tâp 2 ----------
let printArray02 = document.querySelector("#lbl_EX021");    
printArray02.innerHTML= array02;
function Reverse_Element()
{
    let first = 0;
    let last = array02.length -1;

    let printString = document.querySelector("#lbl_EX022");
    while(first<last)
    {
        let b = array02[first];
        array02[first] = array02[last];
        array02[last] = b;
        first++;
        last--;
    }
    printString.innerHTML =array02;
}
//--- bài tâp 3 ----------

function Search_Element()
{
    let element03 = document.querySelector("#tbx_EX03");
    let printArray02 = document.querySelector("#lbl_EX031");
    let printString = document.querySelector("#lbl_EX032");
    for(let i=0; i<array02.length;i++)
    {
        if(element03.value==array02[i])
        {
            printString.innerHTML="Value " + array02[i] + " found at " + i;
        }
    }
    printArray02.innerHTML=array02;
}
//--- bài tâp 4 ----------
function Search_MaxElement()
{
    let max = array02[0];
    let index=0;
    let printArray02 = document.querySelector("#lbl_EX041");
    let printString = document.querySelector("#lbl_EX042");
    for(let i=0; i<array02.length;i++)
    {
        if(max<array02[i])
        {
           max=array02[[i]];
           index=i;
        }
    }
    printArray02.innerHTML=array02;
    printString.innerHTML="max: " + max + " at position " + index;
}
//--- bài tâp 5 ----------

function CaroGame()
{
    let b=document.querySelector("#lbl_EX05");
    let board =[];
    let data="";
    for(let i=0;i<5;i++)
    {
        board[i] = new Array(0, 0, 0, 0, 0,);
    }
    for(let i=0;i<5; i++)
    {
        data += "<br/>";
        for (let j = 0; j < 5; j++) 
        {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value'onclick='changeValue()'>"
    b.innerHTML=data;
    
}