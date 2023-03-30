function clickSubmit()
{
    console.group("on-site")
    const name = document.getElementById("name").value;
    const sAddress = document.getElementById("streetAddress").value;
    const lAddress = document.getElementById("lineAddress").value;
    console.log("name:",name);
    console.log("Street Address:",sAddress);
    console.log("Street Address:",lAddress);


    console.groupEnd("on-site")
}