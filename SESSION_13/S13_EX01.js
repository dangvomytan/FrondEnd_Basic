function EX11()
{
    for(i=1;i<=100;i++)
    {
        console.log(i);
        if(i==99)
        {
            console.log("Đã hoàn thành",i); 
            document.getElementById("lbe_EX11").innerHTML="Đã hoàn thành";
            break;
        }
    }
}
function EX12()
{
    let temp;
    do
    {
         temp = Number(prompt("Nhập vào nhiệt độ"));
        if(temp<20 && !Number.isNaN(temp))
        {
            alert("nhiệt độ: "+temp+"C.Hãy tăng nhiệt độ");
        }
        else
        {
            if(temp>100 && !Number.isNaN(temp))
            {
                alert("nhiệt độ: "+temp+"C.Hãy giảm nhiệt độ");
            }
            else
            {
                alert("nhiệt độ: "+temp+"C");
            }
        }
    }
    while(temp <20 || temp>100 || Number.isNaN(temp))
}


function EX_4()
{
    let str="";
    for(let i=2;i<=10;i++)
    {
        str +="<br>";
        for(let j=2; j<=10; j++)
        {
            str += `${i} x ${j} =${i*j}`;
            str +="<br>";
        }
        str +="<br>";
    }
    const t = document.querySelector("#lbl_EX4");
    t.innerHTML=str;

}
