const endDate = "3 May 2024 11:55 PM"

document.getElementById("End_Date").innerHTML=endDate;
const input = document.querySelectorAll("input");

function clock ()

{
    const end = new Date (endDate)
    const now = new Date ()
    const diff = (end-now) /1000;

    if(diff<0) return;
   
    //convert into days
    input[0].value = Math.floor(diff / 3600 /24);
    //convert into hours 
    input[1].value=Math.floor(diff / 3600 ) %24;
    //convert int minutes
    input[2].value = Math.floor(diff / 60) % 60;
    //convert into second
    input[3].value= Math.floor(diff)%60;
    //convert into days
}
clock ()

setInterval(
    ()=>
    {
    clock()
    }
)
