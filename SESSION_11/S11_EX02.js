function Ex01(){
    const C = Number(prompt("Nhập độ C:"));
    const F = C *(9/5) + 32;
        alert("Độ F:"+F);
}
function Ex02(){
    const m = Number(prompt("Nhập mét:"));
    const ft = m*3.2808;
        alert(ft+" feet:");
}
function Ex03(){
    const a = Number(prompt("Nhập độ dài cạnh hình vuông:"));
    const s = a*a;
        alert(s+" m2");
}
function Ex04(){
    const a = Number(prompt("Nhập độ dài cạnh a:"));
    const b = Number(prompt("Nhập độ dài cạnh b:"));
    const s = a*b;
        alert(s+" m2");
}
function Ex05(){             
    const a = Number(prompt("Nhập độ dài cạnh a:"));
    const b = Number(prompt("Nhập độ dài cạnh b:"));
    const s = (1/2*a)*b;
        alert(s+" m2");
}
function Ex06(){
    const a = Number(prompt("Nhập  a:"));
    const b = Number(prompt("Nhập  b:"));
    if(a==0)
    {
        if(b==0)
        {
            alert("Phương trình vô số nghiệm");
        }
        else
        {
            alert("Phương trình vô nghiệm");           
        }
    }
    else
    {
        const x = -b/a;
        alert("Phương trình có nghiệm là: "+x);  
    }
}
function Ex07()
{
    const a = Number(prompt("Nhập  a:"));
    const b = Number(prompt("Nhập  b:"));
    const c = Number(prompt("Nhập  c:"));
    if(a==0)
    {
        if(b==0)
        {
            if(c==0)
            {
                alert("Phương trình vô số nghiệm");                
            }
            else
            {
                alert("Phương trình vô nghiệm");           
            }
        }
        else
        {
            const x= -b/c;
            alert("Phương trình có một nghiệm : "+x);           
        }
    }
    else
    {
        const delta = b*b - 4*a*c;
        if(delta > 0) 
        {
            const x1=((-b) + Math.sqrt(delta)) /(2*a);
            const x2=((-b) - Math.sqrt(delta)) /(2*a);
            alert("Phương trình có hai nghiệm là: x1= "+x1+" x2= "+x2);  
        }
         else 
        {
            if(delta==0)
            {
                x=(-b)/(2*a);
                alert("Phương trình có nghiệm kép là: x1 = x2 = "+x);  
            }
            else
            {
                alert("Phương trình vô nghiệm.");  
            }
        }

    }
}
function Ex08(){
    const yearOld = Number(prompt("Nhập tuổi:"));
    if(0<yearOld && yearOld<120)
    {
        alert("Đây là tuổi của một người");        
    }
    else
    {
        alert("Đây không phải tuổi của một người");
    }

}