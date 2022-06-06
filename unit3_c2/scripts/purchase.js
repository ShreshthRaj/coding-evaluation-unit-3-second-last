var out=JSON.parse(localStorage.getItem("purchase"))

display(purchase)


function display(data){
    data.forEach(function(ele){
     var container=document.createElement("div")
     var image=document.createElement("img")
     image.setAttribute("src",ele.image)
     var name=document.createElement("p");
     name.innerText=ele.name;
     var price=document.createElement("h3")
     price.innerText=ele.price;
    
   
     container.append(image,name,price)
     
     document.getElementById("purchase").append(box)
     
    })
 
 
 
 
 }
     