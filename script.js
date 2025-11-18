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


  //add modaldaynamic

  document.getElementById('addExp').addEventListener('click',(even)=>{
  
    let formadaynamic = document.getElementById('formadaynamic');
            
              console.log(formadaynamic);          
    let card =`<div class="p-2  bg-secondary">
              <div >
                <lsbel for="Expériences professionnelles" class="form_label">Expériences professionnelles</lsbel>
                <input type="text" class="form-control" placeholder="Expériences professionnelles">
              </div>
              <div class="row ">
                <lsbel for="Expériences professionnelles" class="form_label">the time</lsbel>
                <div class="col-auto">
                  <select id="time" class="form-select" aria-label="Default select example">
                    <option selected>piriod</option>
                    <option value="it">day</option>
                    <option value="sécurité">month</option>
                    <option value="Manager ">years</option>
                  </select>
                </div>
                <div class="col-auto">
                  <input type="number" class="form-control" placeholder="the time you spend" max="50">
                </div>

              </div>

            </div>
    `
      
    
    formadaynamic.innerHTML+=card
    
  })