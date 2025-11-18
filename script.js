let worker = [
    {
        fullname: "mouad sertati",
        role: "IT",
        telephone: "0939939448",
        email: "mouadsertati9gmail.com",
        photo: "1329-1760996163.png"

    }

]


function affichege() {
    let card = document.getElementById('card');



    worker.forEach(Element => {
        
                  let cardbody = `<div class=" card-body">
          <div class="d-flex   border bg-light rounded-3">
            <div>
              <img src="${Element.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${Element.fullname}</h5>
              <p class="card-text">${Element.role}</p>
            </div>

            <button class="btn btn-primary">+</button>
          </div>`
        card.innerHTML += cardbody;
    })
}


document.forms["addworker"].addEventListener('submit', (e) => {
  
    e.preventDefault();
    let from = e.target;
           
    let worke = {
        fullname: from.fullname.value,
        role: from.role.value,
        telephone: from.telephone.value,
        email: from.email.value,
        photo: from.photo.value
          
    }

    
    console.log("worke");
    worker.push(worke)

    console.log(php)
    affichege()
})
