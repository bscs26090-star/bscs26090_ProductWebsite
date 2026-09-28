window.onload=function(){
    alert("WELCOME!");
}

document.getElementById("date").innerHTML=new Date().getFullYear();

function AVAILIBILITY() {
    document.getElementById("product-availability").innerHTML = "Product is available!";
}