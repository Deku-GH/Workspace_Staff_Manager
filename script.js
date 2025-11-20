
let count = 0;
let comference = []
let reception = []
let seveurs = []
let securirit = []
let personnel = []
let archives = []
let workers = [
 

]




// 

function validation(les_value) {
  let valemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
  let valname = /^[a-zA-Z ]+$/
  let valnumbre = /^\d{10}$/
  let valid = 0;
  if (valname.test(les_value.fullname.value)) {
    alert("true name")
    valid++;
  }
  if (valemail.test(les_value.email.value)) {
    alert("true email")
    valid++;
  }
  if (valnumbre.test(les_value.telephone.value)) {
    alert("true numbre")
    valid++;
  }

  return valid;
}

// 
affichegeworker()

function affichege(worker) {
  // 

  let card = document.getElementById('card');

  let cardbody = `<div class="container" >
          <div    class="d-flex justify-content-between  border bg-light rounded-3">
          
              <img src="${worker.photo}" data-index="${worker.id}" class="cardItem   img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker"data-bs-toggle="modal" data-bs-target="#detailprofile" />
        

            <div>
              <h5 class="card-title">${worker.fullname}</h5>
              <p class="card-text">${worker.role}</p>
            </div>

            <button type="button"  class="btn_card btn btn-primary " >
                voir</button>
          </div>
          </div>
          `
  card.innerHTML += cardbody;

  let btn =document.querySelectorAll(".cardItem")
btn.addEventListener("click",finindex())

}


document.forms["addworker"].addEventListener('submit', (e) => {

  e.preventDefault();
  let les_value = e.target;

  // let valid = validation(les_value);



  let worker = {
    id: count++,
    fullname: les_value.fullname.value,
    role: les_value.role.value,
    telephone: les_value.telephone.value,
    email: les_value.email.value,
    photo: les_value.photo.value,
    Experiences: []
  }

         


  for (let i = 0; i < les_value.exp.length; i++) {
    worker.Experiences.push({
      experiences: les_value.exp[i].value,
      start: les_value.start[i].value,
      end: les_value.endDate[i].value
    })
  }

  workers.push(worker)

    
  affichegeworker()
  addtoplace(worker);

  affichege(worker)

})

// add tout la zone
function addtoplace(worker) {
  if (worker.role == "Manager") {
    comference = worker
    reception = worker
    seveurs = worker
    securirit = worker
    personnel = worker
    archives = worker
  }
  if (worker.role == "Nettoyage") {
    comference = worker
    reception = worker
    seveurs = worker
    securirit = worker

  }
  if (worker.role == "it") {
    comference = worker
    reception = worker
    seveurs = worker
    personnel = worker
  }
  if (worker.role == "securite") {
    comference = worker
    securirit = worker
    reception = worker
    personnel = worker
  }
  if (worker.role == "Autres roles") {
    comference = worker
    reception = worker
    personnel = worker
  }

}
// =
//add modaldaynamic

document.getElementById('addExp').addEventListener('click', (even) => {

  let formadaynamic = document.getElementById('formadaynamic');


  let card = `   <div class="p-2  bg-secondary">
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


  formadaynamic.innerHTML += card

})

affichegeworker()
function affichegeworker() {
  let listcard = document.getElementById('detailecard');


  listcard.innerHTML = ""
  workers.forEach(Element => {

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



function affichegedetailedempl(indx) {
  let email = document.getElementById('email_affi');
  let photo = document.getElementById('photo_affi');
  let Fullname = document.getElementById('fullname_affi');
  let role = document.getElementById('role_affi');
  

  let listcard = document.getElementById('listcard')

             console.log(workers[indx].fullname);
             
                photo.setAttribute('src',"workers[indx].photo"),
                Fullname.innerHTML= workers[indx].fullname,
                email.innerHTML=workers[indx].email,
                role.innerHTML=workers[indx].role
         let list=workers.Experiences
         console.log(list)
         
 list.forEach(Element => {

    let card = `
         <div class="card-text">Expériences:${Element.experiences} </div>
              <div class="card-text">start: ${Element.start}</div>
              <div class="card-text">end:${Element.end}</div>
    `
    listcard.innerHTML += card;
  })
}




// ==================
function finindex() {

  console.log("=================================");

  const cardItem = document.querySelectorAll(".cardItem")
  console.log(cardItem)
  cardItem.forEach(nod => {
    console.log("done")
    
    nod.addEventListener("click", function () {
      console.log("done1")
      let indx = nod.getAttribute('data-index');
      console.log(indx)
      affichegedetailedempl(indx)
    })

  }
  )

  console.log("=================================");

}


