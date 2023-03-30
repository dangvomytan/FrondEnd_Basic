function celsiusToFahrenheit()
{
    let C = prompt("Nhập vào độ C: ");
    const F = (C*9)/5+32;
    document.write("Độ F là: "+F+"F");
}
function averageScore()
{
    let Math = Number(prompt("Nhập điểm toán:"));
    let Physics = Number(prompt("Nhập điểm lý:"));

    let Chemistry = Number(prompt("Nhập điểm Hóa: ")); 
    const Average=(Math + Physics + Chemistry)/3;
    document.write("Điểm trung bình: "+ Average);
}
function DienTichHinhTron()
{
    let r = Number(prompt("Nhập bán kính hình tròn:"));
    const s = (r*r)*3.14;
    document.write("Diện tích hình tròn: "+ s);
}
function ChuViHinhTron()
{
    let d = Number(prompt("Nhập đường kính hình tròn:"));
    const c = d*3.14;
    document.write("Chu vi hình tròn: "+ c);
}