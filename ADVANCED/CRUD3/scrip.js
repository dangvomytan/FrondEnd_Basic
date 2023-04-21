const dataProduct =[
    {
        id: "GS-001",
        image: "../CRUD3/images/GBD-H1000-1A7.png",
        productName: "GBD-H1000-1A7",
        Price:"13904800"
    },
    {
        id: "GS-002",
        image: "../CRUD3/images/MTG-B2000YBD-1A.png",
        productName: "MTG-B2000YBD-1A",
        Price:"31285800"
    },
    {
        id: "GS-003",
        image: "../CRUD3/images/GWG-2000-1A5.png",
        productName: "GWG-2000-1A5",
        Price:"25909000"
    },
    {
        id: "GS-004",
        image: "../CRUD3/images/MTG-B2000SKZ-1A.png",
        productName: "MTG-B2000SKZ-1A",
        Price:"32571000"
    },
    {
        id: "GS-005",
        image: "../CRUD3/images/GWF-A1000BRT-1A.png",
        productName: "GWF-A1000BRT-1A",
        Price:"38200000"
    },
    {
        id: "GS-006",
        image: "../CRUD3/images/EQB-1000HRS-1A.png",
        productName: "EQB-1000HRS-1A",
        Price:"32900000"
    },
    {
        id: "GS-007",
        image: "../CRUD3/images/GWF-A1000-1A.jpg",
        productName: "GWF-A1000-1A",
        Price:"16697100"
    },
    {
        id: "GS-008",
        image: "../CRUD3/images/GST-B100B-1A4.png",
        productName: "GST-B100B-1A4",
        Price:"8463700"
    },
    {
        id: "GS-009",
        image: "../CRUD3/images/MTG-B1000DCM-1A.png",
        productName: "MTG-B1000DCM-1A",
        Price:"25909100"
    },
    {
        id: "GS-010",
        image: "../CRUD3/images/MRG-B1000D-1A.png",
        productName: "MRG-B1000D-1A",
        Price:"237000000"
    },
];
renderProduct1(dataProduct);
renderProduct2(dataProduct);
function renderProduct1(data)
{
    let listProduct = document.querySelector(".listProduct");
    let contentProduct='';
    data.forEach((product,index) => {
        contentProduct+=`
    <div class="cardProduct">
        <div class="cardImage">
            <img src="${product.image}" alt="">
        </div>
        <div class="cardContent">
            <p class="productName">${product.productName}</p>
            <p class="productPrice">${product.Price}đ</p>
        </div>
    </div>`
    });
    listProduct.innerHTML = contentProduct;
}
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