let workers = [
    {
        fullname: "mouad sertati",
        role: "IT",
        telephone: "0939939448",
        email: "mouadsertati9gmail.com",
        photo: "1329-1760996163.png"

    }

]


function affichege(worker) {
    console.log(worker);
   
    let card = document.getElementById('card');
 
        let cardbody = `<div class=" card-body">
          <div class="d-flex   border bg-light rounded-3">
            <div>
              <img src="${worker.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${worker.fullname}</h5>
              <p class="card-text">${worker.role}</p>
            </div>

            <button class="btn btn-primary">+</button>
          </div>`
        card.innerHTML += cardbody;

}


document.forms["addworker"].addEventListener('submit', (e) => {

    e.preventDefault();
    let from = e.target;

    let worker = {
        fullname: from.fullname.value,
        role: from.role.value,
        telephone: from.telephone.value,
        email: from.email.value,
        photo: from.photo.value

    }


    console.log("worke");
    workers.push(worker)

    affichege(worker)
})
