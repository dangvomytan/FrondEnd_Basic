renderProduct1(dataProduct);
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