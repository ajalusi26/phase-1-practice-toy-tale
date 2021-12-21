
function allToyData (){
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      data.forEach(displayToys)
    })
  }

  let addToy = false;
function displayToys(toy){
   let name = document.createElement('p')
   name.textContent = toy.name
   
   let img = document.createElement('img')
   img.src = toy.image
   img.className = "toy-avatar"
   
   let likes = toy.likes
   let likeButton = document.createElement('button')
   likeButton.id = "like"
   likeButton.textContent = `${likes} likes`
   
   let div = document.createElement('div')
   div.className = "card"
   div.append(name)
   div.appendChild(img)
   div.appendChild(likeButton)
   document.querySelector("#toy-collection").appendChild(div)
  //  addLikes(likes, likeButton)
  }
  
allToyData()



document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
      newToyForm()
    } else {
      toyFormContainer.style.display = "none";
    }
  });
})


// function addLikes(likes, likeButton){
//   document.querySelector('#like').addEventListener("click", e => {
//     e.preventDefault()
//     e.target.likes = likes + 1
//     e.target.textContent = `${likes} likes`
//   })
// }

