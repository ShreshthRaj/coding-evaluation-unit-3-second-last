

 function fun(){
    // event.preventDefault()
    var userdata=
      {
         name:document.getElementById("name").value,
         email:document.getElementById("email").value,
         address:document.getElementById("address").value,

         wallet:document.getElementById("amount").value,
 
 
      }



      console.log(userdata)
 
    var datas=  JSON.parse(localStorage.getItem("user")) || [];
    datas.push(userdata)
    console.log(datas)
 
    localStorage.setItem("user",JSON.stringify(userdata))
 
    
     
 
 
  }
 
   
 
 