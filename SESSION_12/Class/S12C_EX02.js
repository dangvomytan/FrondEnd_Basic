function Ex2()
{
    let N =Number(prompt("Nhập số nguyên"));
    let isPrime = true;
    let i = 2; 
    if(N>=2)
    {
        if(i<N)
        {
            for(i=2;i<N;i++)
            {
                if(N%i==0)
                {
                    isPrime=false;
                    break;
                }
            }
            if(isPrime)
            {
                alert(+N+" Số nguyên tố")
            }
            else
            {
                alert(+N+" Không phải là số nguyên tố")
            }
        }
        else
        {
            alert(+N+" là số nguyên tố")
        }
    }
    else
    {
        alert(+N+" Không phải số nguyên tố ");
    }
    
}
function CheckPrime(number)
{
    let isPrime = true;
    let i = 2; 
    if(number>=2)
    {
        if(i<number)
        {
            for(i=2;i<number;i++)
            {
                if(number%i==0)
                {
                    isPrime=false;
                    break;
                }
            }
        }
        else
        {
            isPrime =true;
        }
    }
    else
    {
        isPrime = false;
    }
    return isPrime;
}
function Ex3()
{
    let n =Number(prompt("Nhập số nguyên"))
    CheckPrime(n)
    if(CheckPrime(n))
    {
        alert(+n+" Là số nguyên tố.");
    }
    else
    {
        alert(+n+" Không phải là số nguyên tố.");
    }
}
function Ex4()
{
    let n =Number(prompt("Nhập số nguyên"));
    for(i=1;i<=n;i++)
    {
        if(CheckPrime(i))
        {
            alert("Là số nguyên tố."+i);
        }
    }
}


function Ex5()
{
    let string ="";
    let n = Number(prompt("Nhập vào một số nguyên"));
    for (i=0;i<=n;i++)
    {
        if(n%i==0)
        {

            // alert("Ước sô nguyên là "+i);
            string= string+i +", ";
        }
    }
    alert("  "+string)
}

function Ex6()
{
    sum=0;
    let n = Number(prompt("Nhập vào một số nguyên"));
    for (i=0;i<n;i++)
    {
        if(n%i==0)
        {
            sum = sum+i;
            console.log("i"+i +"s" +sum);
        }
    }
    if(sum-n==0)
    {
        alert("Đây là số hoàn hảo: sum = n ="+sum);
    }
    else
    alert("Đây không phải là số hoàn hảo: sum = "+sum);
}
