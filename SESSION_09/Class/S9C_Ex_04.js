function clickSubmit()
{

    const name = document.getElementById("name").value;
    const sAddress = document.getElementById("streetAddress").value;
    const lAddress = document.getElementById("lineAddress").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const postal = document.getElementById("postal").value;
    const country = document.getElementById("coutry");
    const progree = document.getElementById("progress");
    
        console.log("Country: ", document.getElementById("materialsYes").value);

   
   
   
    console.group("on-site")
    console.log("name: ",name);
    console.log("Street Address: ",sAddress);
    console.log("Address: Line",lAddress);
    console.log("City: ",city);
    console.log("State/Region/Province: ",state);
    console.log("Postal/Zip Code: ",postal);
    console.log("Progress: ", progress.value);
    // console.log("Materials: ", materials);
    console.log("Country: ", country);
    console.log("Country: ", country);
    
    console.groupEnd("on-site")
}