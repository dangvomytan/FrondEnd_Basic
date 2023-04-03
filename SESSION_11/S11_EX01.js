//Kiểm tra a có chia hết cho b
function Ex01(){
    const a = Number(prompt("Nhâp một số a"));
    const b = Number(prompt("Nhập một số b"));
    if(a%b==0)
    {
        alert("a chia hết cho b");
    }
    else
    {
        alert("a không chia hết cho b");
    }
}
function Ex02()
{
    const yearOld = Number(prompt("Nhập tuổi của bạn"));
    if(yearOld==16)
    {
        alert("Bạn "+yearOld+" tuổi. Bạn đủ điều kiện vào lớp 10");
    }
    else
    {
        alert("Bạn "+yearOld+" tuổi. Bạn không đủ điều kiện vào lớp 10");
    }
}
function Ex03()
{
    const number = Number(prompt("Nhập một số nguyên bất kỳ"));
    if(number<0)
    {
        alert("Số bạn vừa nhập nhỏ hơn 0");
    }
    else
    {
        alert("Số bạn vừa nhập lớn hơn 0");       
    }
}

function Ex04()
{
    const a = Number(prompt("Nhâp số a"));
    const b = Number(prompt("Nhập số b"));
    const c = Number(prompt("Nhập số c"));
    const max = a;
    if(max>b)
    {
        if(max > c)
        {
            alert("Số a = "+a+" là sô lớn nhất");   
        }
        else
        {
            alert("Số c = "+c+" là sô lớn nhất");              
        }
    }
    else
    {
        if(max>c)
        {
            alert("Số b = "+b+" là sô lớn nhất");  
        }
        else
        {
            alert("Số c = "+c+" là sô lớn nhất"); 
        }
    }
}

function Ex05()
{
    const doanhSo = Number(prompt("Nhâp tổng doanh số:"));
    const bacMot = doanhSo*5/100;
    const bacHai = doanhSo*10/100;
    const bacBa  = doanhSo*20/100;


    if(doanhSo<=100)
    {
        const hoaHong = doanhSo*bacMot;
    }
    else
    {
        if(doanhSo<=300)
        {
            const hoaHong = doanhSo*bacHai;; 
        }
        else
        {
            if(doanhSo<300)
            {
                const hoaHong = doanhSo*bacBa;

            }
        }
    }
    alert("Với doanh số là: "
    +doanhSo+". Thì hoa hồng nhập đươc là: "
    +hoaHong); 
}

function Ex06()
{
    const soPhut = Number(prompt("Số phút gọi trong tháng"));

    const phi50  = 600;
    const phi150 = 400;
    const phi200 = 200;

    const phiCuocCD = 25000;
    const phiCuoc50  = 600;
    const phiCuoc150 = 400;
    const phiCuoc200 = 200;
    let tongTien = 0;
    if(soPhut>200)
    {
        const tongTien = phiCuocCD + (soPhut*phi200) - phiCuoc200 - phiCuoc150 - phiCuoc50;
    }
    else
    {
        if(soPhut>=150)
        {
            tongTien = phiCuocCD + (soPhut*phi150)  - phiCuoc150 - phiCuoc50;
        }
        else
        {
            if(soPhut>=50)
            {
                tongTien = phiCuocCD + (soPhut*phi50) - phiCuoc50;
            }
            else
            {
                tongTien = phiCuocCD;
            }
        }
    }
    alert("Số tiền cước điện thoại phải đóng là: "+tongTien+" VNĐ"); 
}