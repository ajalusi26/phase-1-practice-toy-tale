
function stuff (){
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      data.forEach(displayToys)
    })
  }

  let addToy = false;
stuff()
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
  
function displayToys(toy){
  let div = document.createElement('div')
  div.className = "card"
  div.innerHTML = `<h1> ${toy.name}</h1>
                    <img src = "${toy.image}>"
                    <p>${toy.likes} likes</p>`
  document.querySelector("#toy-collection").appendChild(div)
}

