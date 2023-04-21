const dataProduct =[
    {
        id: "1",
        image: "../CRUD2/image/drink (6).jpg",
        productName: "Trà chanh",
        Price:"25.000"
    },
    {   
        id: "2",
        image: "../CRUD2/image/drink (7).jpg",
        productName: "Trà chanh",
        Price:"25.000"
    },
    {
        id: "3",
        image: "../CRUD2/image/drink (8).jpg",
        productName: "Trà chanh",
        Price:"25.000"
    },
    {
        id: "4",
        image: "../CRUD2/image/drink (9).jpg",
        productName: "Trà chanh",
        Price:"25.000"
    },
    
];
renderProduct(dataProduct);
function renderProduct(data)
{
    let tableProduct = document.querySelector("#tbl_Product");
    let contentTable = `
        <tr>
            <th>No</th>
            <th>Ảnh</th>
            <th>Tên sản phẫm</th>
            <th>Giá</th>
            <th>Action</th>
            </th>
        </tr>
    `
    data.forEach((product,index) => {
        contentTable+=
            `
            <tr>
            <td>${index+1}</td>
            <td><img src="${product.image}" alt=""></td>
            <td>${product.productName}</td>
            <td>${product.Price}</td>
            <td>
                <button onclick ="editProduct(${product.id})">Edit</button>
                <BUtton onclick ="deleteProduct(${product.id})">Delete</BUtton>
            </td>
        </tr>
            `
    });
    tableProduct.innerHTML = contentTable;
}
function addProduct()
{
    const inputId=document.querySelector("#tbx_id").value;
    const inputImage = document.querySelector("#fle_image").value;
    const inputProductName = document.querySelector("#tbx_productName").value;
    const inputPrice = document.querySelector("#tbx_price").value;
    const newProduct = {}
    newProduct.id=inputId;
    newProduct.image = inputImage;
    newProduct.productName = inputProductName;
    newProduct.Price = inputPrice;
    dataProduct.push(newProduct);
    console.log(newProduct);
    renderProduct(dataProduct);
}

function editProduct(id)
{

}
// Xóa sản phẩm
function deleteProduct(id)
{
    console.log(id);
    dataProduct.forEach((product,index) =>
    {
        if(id==product.id)
        {
            dataProduct.splice(index,1);
        }
    });
    renderProduct(dataProduct);
}