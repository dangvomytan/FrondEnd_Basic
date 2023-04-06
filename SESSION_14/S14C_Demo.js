// khai báo mảng và dung for - of để show list
function list_drinks()
{
    const drinks = ["coffee","tea milk","milk"]
    const litstDrinks = document.querySelector("#lbl_DM01");
    let stringListDrinks = "<ul>";
    for(const drink of drinks)
    {
        stringListDrinks += `<li>${drink}</li>`;
        console.log("element:"+stringListDrinks);
    }
    stringListDrinks +="</ul>"
    litstDrinks.innerHTML=stringListDrinks;
}
// Thên dữ liệu vào array - Push() --> add
//
// Hàm "puss()"
// - thêm phần tử mới vào cuối mảng
// - trả về độ dài mới của array

// Xây dựng bảng cửu chương
for(let row = 0; row <9 ;i++)
{
    
}