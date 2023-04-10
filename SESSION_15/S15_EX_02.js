
const arrayNumber=[];
function EX15_EX21()
{
    const inputValue = document.querySelector("#tbx_EX15_EX21");
    const coverValue = (inputValue.value).split(",")
    arrayNumber.push(coverValue); 
    inputValue.value=""
    console.log(arrayNumber);
}
function EX15_EX22()
{
for (const number of arrayNumber)
{
    
}


}
const DataProduct=[];
function DataProoductAdd()
{
    const inputValue = document.querySelector("#tbx_EX15_EX3");
    const coverValue = (inputValue.value).split(";")
    DataProduct.push(coverValue);
    inputValue.value=""
    console.log(DataProduct);
    renderProduct(DataProduct);
}
renderProduct(DataProduct);

 function renderProduct(data)
 {
    const myTable = document.querySelector("#tblDataProduct");
    let contentTable= "";
    contentTable += "<tr>"
    contentTable += "<td>STT</td> <td>NAME</td> <td>ACTION</td>"
    contentTable += "</tr>"
    for(let row=0; row < data.length; row++)
    {
        contentTable+="<tr>"
        for(let col=0;col<data[0].length;col++)
        {
            contentTable+=`<td>${data[row][col]}</td>`
        }
        contentTable+=`<td><button >Update</button>
                           <button >Delete</button></td>`
        contentTable+="</tr>"
    }

    myTable.innerHTML= contentTable;
 }
 function DataProoductDelete()
{
    const inputValue = document.querySelector("#tbx_EX15_EX3");
    const coverValue = (inputValue.value).split(";")
    DataProduct.push(coverValue);
    inputValue.value=""
    console.log(DataProduct);
    renderProduct(DataProduct);
}
function DataProoductUdate()
{
    const inputValue = document.querySelector("#tbx_EX15_EX3");
    const coverValue = (inputValue.value).split(";")
    DataProduct.push(coverValue);
    inputValue.value=""
    console.log(DataProduct);
    renderProduct(DataProduct);
}