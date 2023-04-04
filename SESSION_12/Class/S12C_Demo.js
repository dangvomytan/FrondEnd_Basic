function Demo01()
{
    var max=0;
    const n = Number(prompt("nhập vào n số nguyên"));
    for(i=1;i<=n;i++)
    {
        const ai = Number(prompt("Xin nhập số thứ "+i));
        if(max < ai)
        {
            max=ai;
        }
    }
    alert("Số lớn nhất là: "+max);
}
// For:      vòng lặp biết được số lần lặp
// While:    vòng lặp không biết số lần lặp. So sánh điều kiện đúng thì thực hiện lặp.
// Do whie:  vòng lặp không biết số lần lặp. Thực hiện vòng lặp rồi so sánh điều kiện. True thì dừng.

// break       trong vòng lặp, thì khi đến break thì dừng
// 
// for(i=0;i<n;i++)
// {
//     if(ai==10)
//     {
//         break;
//         // nếu phần tử ai=10 thì dừng vòng lặp
//     }}
// continue    trong vòng lặp, thì khi đến continue thì bỏ qua và tiếp tục vòng lặp mới.
// for(i=0;i<n;i++)
// {
//     if(ai==10)
//     {
//         continue;
//         // nếu phần tử ai = 10 thì bỏ qua vòng lặp 
//     }
// }
 const element = document.getElementById("button_1");
 element.style.backgroundColor="green";