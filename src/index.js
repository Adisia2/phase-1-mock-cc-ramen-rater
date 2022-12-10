// write your code here
document.addEventListener('DOMContentLoaded',function(){
    displayAllRamens()
    

})
function displayAllRamens(){
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(getAllRamens)

}
function getAllRamens(ramenArray){
    ramenArray.forEach(getRamen)
}
function getRamen(ramenObject){
    const ramenMenu=document.getElementById('ramen-menu')
    const ramenImage=document.createElement('img')
    ramenImage.src=ramenObject.image
    ramenMenu.append(ramenImage)
    ramenImage.addEventListener('click',()=>{
        const detailImage=document.querySelector('.detail-image')
        detailImage.src=ramenObject.image
        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramenObject.name
        const restaurantName= document.querySelector('.restaurant')
        restaurantName.innerHTML= ramenObject.restaurant

        const ratingRamen= document.querySelector('#rating-display')
        ratingRamen.innerHTML=ramenObject.rating
        const commentRamen= document.querySelector('#comment-display')
        commentRamen.innerHTML=ramenObject.comment
        
    addNewRamen()

    })
}
 function addNewRamen(){
    const newRamen = document.querySelector('#new-ramen')
    newRamen.addEventListener('submit',(e)=>{
        e.preventDefault()
        const newRamenObj = {}
        newRamenObj.name=document.querySelector('#new-name').value
        newRamenObj.restaurant=document.querySelector('#new-ramen').value
        newRamenObj.image=document.querySelector('#new-image').value
        newRamenObj.rating=document.querySelector('#new-rating').value
        newRamenObj.comment=document.querySelector('#new-comment').value
        console.log(newRamenObj)

const ramenMenu=document.querySelector('#ramen-menu')

    const newRamenItem= document.createElement('img')
    newRamenItem.src=newRamenObj.image
    ramenMenu.append(newRamenItem)
        


    })


 }


addNewRamen()
// load up the dom
// document.addEventListener('DOMContentLoaded', function () {
//     displayRamen();
//  })
 
//  //fetch ramen data
//  function displayRamen() {
//      fetch('http://localhost:3000/ramens')
//      .then(res => res.json())
//      .then(getAllRamen)
//  }
 
//  function getAllRamen(ramenArr) {
//      ramenArr.forEach(getRamen)
//  }
 
//  //display images to DOM, append images to div
//  function getRamen(ramenObj) {
//      const ramenMenu = document.querySelector('#ramen-menu')
//      const ramenImg = document.createElement('img')
//      ramenImg.src = ramenObj.image
//      ramenMenu.append(ramenImg)
 
//      // event listener on click for images
//      ramenImg.addEventListener('click', () => {
//          const img = document.querySelector('.detail-image')
//          img.src = ramenObj.image
//          img.alt = ramenObj.name
 
//          const ramenName = document.querySelector('.name')
//          ramenName.textContent = ramenObj.name
         
//          const ramenResta = document.querySelector('.restaurant')
//          ramenResta.textContent = ramenObj.restaurant
         
//          const ratingDisplay = document.querySelector('#rating-display')
//          ratingDisplay.innerText = ramenObj.rating
 
//          const commentDisplay = document.querySelector('#comment-display')
//          commentDisplay.innerText = ramenObj.comment
//      })
//  }