function Ex01()
{
    for(i=1;i<=100;i++)
    {
        console.log(i);
        if(i==99)
        {
            console.log("Đã hoàn thành",i); 
            alert("Đã hoàn thành",+i)
            break;
        }
    }
}
function Ex02()
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