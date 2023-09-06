const inputhero=document.getElementById('inputhero')
const search=document.getElementById('search')
const randomhero=document.getElementById('randomhero')
 // FIRST METHOD TO SHOW HERO IMAGE THROUGH ID 
const hero =(id)=>{
    fetch(`https://superheroapi.com/api.php/1663305264141662/${id}`)
    .then(response =>response.json())
    .then(json=>
        {
            console.log(json)
            document.getElementById('heroimage').innerHTML=`<img src="${json.image.url}" height=500px,width=400px/>`
            document.getElementById('name').innerHTML=`(the name of hero is: "${json.name}")`

 })}
 const id=()=>{
    return  (Math.floor((Math.random()*731)+1))
 } 
 randomhero.onclick=()=>{
    hero(id())
    
 }
 // Second Method To show hero image through name
 const superhero=(heroname)=>{
    console.log(inputhero.value)
    fetch(`https://superheroapi.com/api.php/1663305264141662/search/${heroname}`)
    .then(response=>response.json())
    .then(json=>
        {const heroa=(json.results[0])
            console.log(heroa)
           
   document.getElementById('heroimage').innerHTML=`<img src="${heroa.image.url}" height=300px width=300px/>`
   prompt(`name of hero is : "${heroa.name}"`)
    })

 }
 search.onclick =()=>{
    (superhero(inputhero.value))}