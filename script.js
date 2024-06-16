var input = document.querySelector("input")
var data = [
    {name: "alina", src: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "ritika", src: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "john", src: "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "catrina", src: "https://images.unsplash.com/photo-1610642434250-392436bd9fba?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "arohi", src: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";
data.forEach(function(elem){
    pers += ` <div id="person">
    <img src ="${elem.src}"
     alt="">
    <h3>${elem.name}</h3>
    
  </div>`;
})


document.querySelector("#people").innerHTML = pers;
input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    var newuser = "";
    matching.forEach(function(elem) {
        newuser += ` <div id="person">
        <img src ="${elem.src}"
         alt="">
        <h3>${elem.name}</h3>
        
      </div>`;
    })

    document.querySelector("#people").innerHTML = newuser;

   
})


