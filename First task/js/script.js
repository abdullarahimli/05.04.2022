var date = new Date().getHours();
console.log(date);
var div = document.getElementById('first');
if(date > 0 && date < 12)
{
    div.style.backgroundColor === "black";
    div.style.backgroundColor = "blue";
}
else if(date >= 12 && date < 18)
{
    
    div.style.backgroundColor = "red";
}
else
{
    
    div.style.backgroundColor = "green";
}
