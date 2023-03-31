function Demo_01()
{
    const radius = Number(prompt("Nhận bán kính:", ""));
    if(radius>0)
    {
        const area = (radius * radius) * 3.14;
        console.log("Arer:", area);
    }
}
function Demo_02_1()
{
    const number = Number(prompt("Nhận vào một số bất kì:", ""));
    if(number%2==0)
    {
        console.log( number + " is Even:");
    }
    else
    {
            console.log( number + " is Odd:");
    }
}
// Kết quả giá trị trả về: if-else
// true : true, value
// false: false, undefind, null," ", 0, NaN
function Demo_02_2()
{
    const number = Number(prompt("Nhận vào một số bất kì:", ""));
    const isEven = number %2 == 0;
    // isEven trả về kiểu dữ liệu là True
    if(isEven)
    {
        console.log( number + " is Even:");
    }
    else
    {
            console.log( number + " is Odd:");
    }
}
 function Demo_03()
 {
    const order = prompt("Chọn món ăn: Hủ tiếu hoặc Mì Quảng" ,"");
    if(order=="Hủ tiếu")
    {
        let topping = prompt("Chọn tapping: Xương, Bò, Đặc biệt" ,"");
        if(topping == "Bò")
            alert("Bạn đã chọn Hủ tiếu Xương: 35K");
        else
        {
            if(topping == "Xương")
                alert("Bạn đã chọn Hủ tiếu Bò: 30K");  
            else
                if(topping == "Đặc biệt")
                    alert("Bạn đã chọn Hủ tiếu Đặc biệt: 50K"); 
                else
                    alert("Bạn đã chọn Hủ tiếu không ttopping: 20K"); 
        }
    }
    else
    {
        if(order=="Mì quảng")
        {
            let topping = prompt("Chọn tapping: Gà, Cá, Bò");
            if(topping == "Gà")
                alert("Bạn đã chọn Mì Gà: 25K");
            else
            {
                if(topping == "Cá")
                    alert("Bạn đã chọn Mì Cá: 30K");
                else
                {
                    if(topping == "Bò")
                        alert("Bạn đã chọn Mì Bò: 30K"); 
                    else
                        alert("Bạn đã chọn Mì không ttopping: 20K"); 
                }
            }
        }
        else
            alert("Món ăn không có trong thực đơn, Mời bạn chọn món khác hoặc đi chỗ khác ăn !"); 
    }

 }
 function Demo_04()
 {
    const _laptop       = "laptop";
    const _SmartPhone   = "Điện thoại"
    const _Table        = "Máy tính bảng"
    const _Nothing      = "Xin lỗi, không có sản phẩm bạn yêu cầu.Vui lòng chọn sản phẩm khác."

    const DELL      = "Dell";
    const ASUS      = "Asus";
    const HP        = "hp"
    const APPLE     = "Apple"
    const LG        ="LG"

    const product = prompt("Bạn muốn mua sản phẩm nào. Chúng tôi có "+_laptop+", "+_SmartPhone+", "+_Table+".");

   
    // const brand_Smartphone  = prompt("Vui lòng nhập hãng "+_SmartPhone +" bạn quan tâm.Chúng tôi có "+ASUS+", "+APPLE+", "+LG+".");
    // const brand_Table       = prompt("Vui lòng nhập hãng "+_Table +" bạn quan tâm.Chúng tôi có "+ASUS+", "+APPLE+", "+LG+".");

    if(product==_laptop)
    {
        const brand = prompt("Vui lòng nhập hãng "+
        _laptop
        +" bạn quan tâm.Chúng tôi có "+
        DELL
        +", "+
        ASUS
        +", "+
        HP
        +".");
        if(brand==DELL)
        {
            
        }
    }
    else
    if(product==_SmartPhone)
    {

    }
    else
    if(product==_Table)
    {

    }
    else
    {
        alert(_Nothing);
    }
 }
 function Ex_02()
 {
    const m = Number(import("Nhập vào tháng"))
    switch(m)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng có 31 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
             alert("Tháng có 31 ngày");
            break;
        case 2:
            alert("Tháng có 28 ngày");
            break;
        default:
        alert("Tháng không hợp lệ, vui lòng nhập từ tháng 1 đến tháng 12");
    }
 }
 function Demo_05()
 {
    const point = Number(prompt("Nhập vào điểm toán"));
    switch (true) {
        case point>= 8:
            alert("loại giỏi")
            break;
    
        default:
            break;
    }

 }
function Demo_06()
{
    const bac_1 = 50*1500;
    const bac_2 = 100*1700;
    const bac_3 = 100*2000;
    const bac_4 = 100*2500;
    const bac_5 = 100*2800;
    const bac_6 = 100*3000;


    
    const number= Number(prompt("Nhập vào số điện"));
    if(0<number<=50)
    {
        const price = number * 1500;
    }
    else 
    {
        if(number <=100)
        {
            const remember = number - 50;
            const price = (remember * 1700) + bac_1;
        }
        else
        {
            if(number <=200)
            {
                const remember = number - 150;
                const price = (remember * 2000) + bac_1 + bac_2;
            }
            else
            {
                if(number <=300)
                {
                    const remember = number - 250;
                    const price = (remember * 2500) + bac_1 + bac_2+ bac_3;
                }
                else
                {
                    if(number <=400)
                    {
                        const remember = number - 350;
                        const price = (remember * 2800) + bac_1 + bac_2+ bac_3+bac_4;
                    }   
                    else
                    {
                        const remember = number - 450;
                        const price = (remember * 2800) + bac_1 + bac_2+ bac_3+bac_4+bac_5;

                    }   
                }
            }
        }
    }
    alert("Số tiền điện phải trả là: " + price);

}
