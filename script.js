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
    let les_value =e.target;

    let worker = {
        fullname: les_value.fullname.value,
        role:les_value.role.value,
        telephone: les_value.telephone.value,
        email:les_value.email.value,
        photo:les_value.photo.value,
        Experiences : []

    }
    const data = new FormData(e.target)
    console.log(data.getAll("start"));
    


          for(let i = 0 ; i <les_value.exp.length;i++ ){
       worker.Experiences.push({
               experiences:les_value.exp[i].value,
               period : les_value.start[i].value,
                 time :les_value.endDate[i].value
                })
       }

    console.log("worke");
    workers.push(worker)

    affichege(worker)
})


  //add modaldaynamic

  document.getElementById('addExp').addEventListener('click',(even)=>{
  
    let formadaynamic = document.getElementById('formadaynamic');
            
              console.log(formadaynamic);          
    let card =`   <div class="p-2  bg-secondary">
                <div>
                  <lsbel for="Expériences professionnelles" class="form_label">Expériences professionnelles</lsbel>
                  <input type="text" class="form-control" id="exp" placeholder="Expériences professionnelles">
                </div>
                <div class="row ">
                  <div class="col-auto">
                    <lsbel for="Expériences professionnelles" class="form_label"> time start</lsbel>
                    <input type="date" class="form-control" id="start" placeholder="Expériences professionnelles">
                  </div>
                  <div class="col-auto">
                    <lsbel for="Expériences professionnelles" class="form_label"> time end</lsbel>
                    <input type="date" class="form-control"name="endDate" id="end" placeholder="Expériences professionnelles">
                  </div>
                </div>
              </div>
    `
      
    
    formadaynamic.innerHTML+=card
    
  })
  