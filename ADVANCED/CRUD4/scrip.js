

renderProduct2(dataProduct);

// ======= Render product manage =====
function renderProduct2(data)
{
    let listProduct = document.querySelector("#mr-tableRender");
    let contentProduct=`
    <tr>
        <th>No</th>
        <th colspan="2">Name</th>
        <th>Price</th>
        <th>Action</th>
    </tr>`;
    data.forEach((product,index) => {
        contentProduct+=`
        <tr>
        <td>${index+1}</td>
        <td>
            <img src="${product.image}" alt="">
        </td>
        <td>${product.productName}</td>
        <td>${product.Price} VNĐ</td>
        <td>
            <button onclick="handleEditProduct('${product.id}')">Edit</button>
            <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
        </td>
    </tr>`
    });
    listProduct.innerHTML = contentProduct;
}

// ===== Search Product =====
function handleSearchProduct(value)
{
    const dataSearch = dataProduct.filter(
        (product) =>
        product.productName.toLowerCase().includes(value.toLowerCase())
    );
    renderProduct2(dataSearch);
}
// ====== Delect product ======
function handleDeleteProduct(id)
{
    dataProduct.forEach((product,index)=>{
        if(id==product.id)
        {dataProduct.splice(index,1)}
    });
    renderProduct2(dataProduct);
}

function handleEditProduct(id)
{
    const idEdit = document.querySelector("#idEdit");
    const imageEdit = document.querySelector("#imageEdit");
    const productNameEdit = document.querySelector("#nameEdit");
    const priceEdit = document.querySelector("#priceEdit");
    const btnUpdate = document.querySelector("#btnUpdate");
    const printImage =document.querySelector("#printImage");
    dataProduct.forEach((product,index)=>{
        if(id==product.id)
        {
            idEdit.value = product.id;
            productNameEdit.value = product.productName;
            priceEdit.value = product.Price;
            // imageEdit.value = product.image;
            printImage.innerHTML = `<img id="printImage" src='${product.image}' >`
            console.log(printImage);
            btnUpdate.setAttribute("onclick", `handleUpdateProduct('${product.id}')`);
        }
    });
}
function handleUpdateProduct(id)
{
    // const add_form = document.getElementById("form_add");
    // add_form.style.top = "50%";
    // add_form.style.left = `calc(50% - 300px)`;


    const idUpdate = document.querySelector("#idEdit");
    const imageUpdate = document.querySelector("#imageEdit");
    const productNameUpdate = document.querySelector("#nameEdit");
    const priceUpdate = document.querySelector("#priceEdit");

    let newproduct={
        id:idUpdate.value,
        image: imageUpdate.value,
        productName: productNameUpdate.value,
        Price:priceUpdate.value
    }
    console.log(newproduct);
    dataProduct.forEach((product,index)=>{
        if(id==product.id)
        {dataProduct.splice(index,1,newproduct)}
    });
    renderProduct2(dataProduct);
}