
function fomatSrcImage(src)
{
    const array = src.split('\\');
    const string = '../NEW/images/'+array[2];
    return string;
}
function getImage(src)
{

    let str = fomatSrcImage(src);
    const elementImage = document.querySelector("#printImage");
    elementImage.innerHTML=`<img src="${str}" alt="">` ;
}
function handleShowHiddenFomrUpadte(string)
    {
        const form = document.querySelector("#mr-updateform");
        const formTitle = document.querySelector("#AddTitle");
        const buttonAdd = document.querySelector("#btnAdd");
        const buttonEdit = document.querySelector("#btnEdit");
        const elementInputId =  document.querySelector("#tbxIdInput")
        if(string=='add')
        {
            form.style.display = "block";
            formTitle.innerHTML = "Thêm mới sản phẩm";
            buttonAdd.style.display ="inline"

            buttonEdit.style.display ="none";
        }
        else 
        {
            if(string=='cancel')
            {
                form.style.display = "none";
            }
            else
            {
                form.style.display = "block";
                formTitle.innerHTML = "Cập nhật sản phẩm";
                buttonEdit.style.display ="inline";
                buttonAdd.style.display="none";
                elementInputId.readOnly="true";
        }
    }
}
function localStorageGetItem(key)
    {
        const data = JSON.parse(localStorage.getItem(`${key}`))?? [];
        return data;
}
function localStorageSetItem(key,data)
    {
        localStorage.setItem(`${key}`, JSON.stringify(data));
}
function getValueInput()
{
    const info = {};
    const inputElements = document.querySelectorAll("#formProductInput");
    inputElements.forEach((element)=>
    {
        element.addEventListener("input",(event)=>
        {
            info[event.target.name] = event.target.value;
        });
    });
    return info;
}
// Render sản phẩm
function renderProduct()
    {
        const ProductsDB = localStorageGetItem("product");
        console.log("pro",ProductsDB);
        const tableBody = document.querySelector("#mr-tableRender");
        let contentTable =`
        <tr>
            <th>STT</th>    
            <th colspan="3">Sản phẩm</th>
            <th>Giá</th>
            <th>Hành động</th>
        </tr>`;
        ProductsDB.forEach((product,index) =>
        {
            contentTable+=`
            <tr>
                <td>${index+1}</td>
                <td>${product.idProduct}</td>
                <td>
                    <img src="${product.imageProduct}" alt="">
                </td>
                <td>${product.nameProduct}</td>
                <td>${product.priceProduct}</td>
                <td>
                <button onclick="handleShowHiddenFomrUpadte('${product.idProduct}')">Edit</button>
                <button onclick="handleDeleteProduct('${product.idProduct}')">Delete</button>
                </td>
            </tr>
            `
        });
        tableBody.innerHTML=contentTable;
}
//====== MAIN ================================================================
    renderProduct();
    const ProductsDB = localStorageGetItem("product");
    const formElement = document.querySelector("#formProductInput");
    const valueInput = getValueInput();


    formElement.addEventListener("submit",(e)=>
    {
        const ProductsDB = localStorageGetItem("product");
        const infoProduct ={
            idProduct: valueInput.idProduct,
            imageProduct: fomatSrcImage(valueInput.imageProduct),
            nameProduct: valueInput.nameProduct,
            priceProduct: valueInput.priceProduct,
            descriptionProduct: valueInput.descriptionProduct,
        }
        e.preventDefault();
        if(e.submitter.id=="btnAdd")
        {
            ProductsDB.push(infoProduct);
            localStorageSetItem("product",ProductsDB);
            console.log("data",ProductsDB);
            renderProduct();
        }
    });