let count=0;
let dataProduct =[["Nokia"],["Samsung"],["Asus ROG"],["Motorola"]];
renderProduct(dataProduct);
function EX16C_EX3_Add()
{
    const element = document.querySelector("#tbx_EX16_EX3");
    const valueInput = [element.value];
    dataProduct.push(valueInput);
    element.value="";
    console.log(dataProduct);
    renderProduct(dataProduct);
}
function renderProduct(data)
 {
    const myTable = document.querySelector("#tbl_EX16C_EX3_DataProduct");
    let contentTable =  `<tr>
                            <td>STT</td>
                            <td>NAME PRODUCT</td>
                            <td>ACTION</td>
                        </tr>`
    dataProduct.forEach((product, index) =>
    {
        contentTable += `<tr>
                            <td>${index+1}</td>
                            <td><input value=${product} readonly id="product-${index}"></td>
                            <td>
                                <button onclick="EX16C_EX3_Edit(${index})" ><i class="fa-regular fa-pen-to-square fa-xl"></i></button>
                                <button onclick="EX16C_EX3_Delete(${index})"><i class="fa-solid fa-trash fa-xl"></i></button></td>
                            </td>
                        </tr>`
    });
    myTable.innerHTML= contentTable;
 }
 function EX16C_EX3_Edit(index)
{
    const inputProduct = document.querySelector("#tbx_EX16_EX3");
    inputProduct.value=dataProduct[index];
    const buttonAdd = document.querySelector("#btn_EX16C_EX31");
    const buttonUpdate = document.querySelector("#btn_EX16C_EX32");
    buttonAdd.style.display = "none";
    buttonUpdate.style.display= "inLine-block";
    // console.log(dataProduct[element]);
    //setAttribute()
    buttonUpdate.setAttribute("onclick",`EX16C_EX3_Update(${index})`)
}
function EX16C_EX3_Update(index)
{
    const inputProduct = document.querySelector("#tbx_EX16_EX3");
    // console.log("up"+inputProduct.value);
    dataProduct.splice(index,1,inputProduct.value)
    renderProduct(dataProduct);
    inputProduct.value="";
    const buttonAdd = document.querySelector("#btn_EX16C_EX31");
    const buttonUpdate = document.querySelector("#btn_EX16C_EX32");
    buttonAdd.style.display = "inLine-block";
    buttonUpdate.style.display= "none";
}
function EX16C_EX3_Delete(index)
{
    dataProduct.splice(index,1);
    renderProduct(dataProduct);
}