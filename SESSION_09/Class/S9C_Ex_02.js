// console.log("check document:", document);

function convert()
{
    const amount = document.getElementById("amount").value;
    // console.log("check amount", amount);
    const currency = document.getElementById("fromeCurrency").value;
    // console.log("check slect currency: ",fromeCurrency);
    if(currency == "USD")
    {
        document.getElementById("convertAmount").innerHTML = (amount *23000).toLocaleString("en-GB") +" VNĐ";
        // tolocaleString("en-GB"); ==> method fomat string
    }
    else 
    {
        if (currency == "VND")
        {
            document.getElementById("convertAmount").innerHTML = (amount/ 23000).toFixed(2) + " USD";
        }
        else
        {
            document.getElementById("convertAmount").innerHTML = "Frome currency change";
        }
    }
}

function curencyChange()
{
    const fromeCurrency = document.getElementById("fromeCurrency");
    const toCurrency= document.getElementById("toCurrency");
    if (fromeCurrency.value == "USD") 
    {
        document.getElementById("toCurrency").value = "VND";
    }
    else
    {
        if (fromeCurrency.value == "VND") 
        {
            document.getElementById("toCurrency").value = "USD";
        }
        else
        {
            document.getElementById("toCurrency").value = "Select"; 
        }
    }
}