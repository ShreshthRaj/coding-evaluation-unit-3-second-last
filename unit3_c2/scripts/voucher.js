
const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"


async function game(){

    
    var res= await fetch(url)
    var out = await res.json()
    console.log(out[0].vouchers)
    display(out[0].vouchers)
    
    // console.log(out[0].vouchers)
    // var fin=out[0].vouchers;
    // console.log(fin)
// display(out[0].voucher)



    
}
  

game()




// var display=document.getElementById("voucher_list")

function display(data){
   data.forEach(function(ele){
    var box=document.createElement("div")
    var image=document.createElement("img")
    image.setAttribute("src",ele.image)
    var name=document.createElement("p");
    name.innerText=ele.name;
    var price=document.createElement("h3")
    price.innerText=ele.price;
    var btn=document.createElement("button")
    btn.innerText="BUY"
    btn.addEventListener("click",function(){
     g(ele)
    })

    box.append(image,name,price,btn)
    
    document.getElementById("voucher_list").append(box)
    
   })




}
    

function g(ele){
    var res=[]
    document.getElementById("wallet").innerText=ele.price;
    res.push(ele)
    localStorage.setItem("purchase",JSON.stringify(res))

 


    //  var container=JSON.parse(localStorage.getItem("purchase"))


  

}
