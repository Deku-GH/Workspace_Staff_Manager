let workers = [
    {
        fullname: "mouad sertati",
        role: "IT",
        telephone: "0939939448",
        email: "mouadsertati9gmail.com",
        photo: "1329-1760996163.png"

    }

]
// affichegedetailedempl()

function affichege(worker) {
    console.log(worker);
   
    let card = document.getElementById('card');
 
        let cardbody = `<div class="container">
          <div class="d-flex justify-content-between  border bg-light rounded-3">
            <div>
              <img src="${worker.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${worker.fullname}</h5>
              <p class="card-text">${worker.role}</p>
            </div>

            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#detailprofile">
                +</button>
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
affichegedetailedempl()
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

affichegeworker()
function affichegeworker() {
     let listcard  = document.getElementById('detailecard');
   
    
      console.log(listcard);
      
      workers.forEach(Element =>{

        let card = `<div class="container">
          <div class="d-flex justify-content-between  border bg-light rounded-3">
            <div>
              <img src="${Element.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${Element.fullname}</h5>
              <p class="card-text">${Element.role}</p>
            </div>

            <butto  class="btn btn-primary">+</butto>
          </div>`
       listcard.innerHTML += card;
      })
}



function affichegedetailedempl() {
     let email = document.getElementById('email_affi');
      let photo  = document.getElementById('photo_affi');
       let fullname  = document.getElementById('fullname_affi');
      
              let listcard=document.getElementById('listcard')
      console.log(listcard);
      workers.forEach(Element =>{
                    
        let card = `<div class="container ">
            <div class="text-center ">
              <img id="${Element.photo}" src="1329-1760996163.png" class=" img-thumbnail background-sizi rounded-circle"
                style="width: 160px; height: 160px" alt="photo de worker" />
            </div>

            <div>
              <h5 id="fullname_affi"class="card-title">full name :${Element.fullname}</h5>
               <p id="email_affi" class="card-text"> Role : ${Element.role}</p>
              <p id="role_affi" class="card-text"> Role : ${Element.role}</p>
            </div>
            <div>
              <div class="card-text">Expériences:</div>
              <div class="card-text">start:</div>
              <div class="card-text">end:</div>
            </div>
            <!--  -->
          </div>`
        listcard.innerHTML += card;

      })
      
        

}