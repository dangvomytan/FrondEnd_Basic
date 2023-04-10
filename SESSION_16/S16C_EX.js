let count=0;
let array =[];
function EX16C_EX3_Add()
{
    count++;
    const element = document.querySelector("#tbx_EX16_EX3");
    let valueInput = count+","+element.value;
    let valueCover = valueInput.split(",");
    array.push(valueCover);
    element.value="";
    console.log(array);
    console.log(count);
    renderProduct(array);
}
function renderProduct(data)
 {
    const myTable = document.querySelector("#tbl_EX16C_EX3_DataProduct");
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
        contentTable+=`<td><button onclick="EX16C_EX3_Update()" >Update</button>
                           <button >Delete</button></td>`
        contentTable+="</tr>"
    }
    myTable.innerHTML= contentTable;
 }
 function EX16C_EX3_Update(element)
{
    renderProduct(array);
    console.log("ele "+element);

}