let zontarged = " "
let count = 0;
let comference = []
let reception = []
let seveurs = []
let securirit = []
let personnel = []
let archives = []

let workers = [
  // {
  //    id: 0,
  //       fullname: "mouad",
  //       role: "it",
  //       telephone: "09493839",
  //       email:" les_value.e",
  //       photo: "les_value.photo.value",
  //       Experiences: []
  // }  
]

affichegeworker()






//========================
function validation(les_value) {
  let valemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let valname = /^[a-zA-Z ]+$/
  let valnumbre = /^\d{10}$/
  let valid = 0;

  if (valemail.test(les_value.email.value)) {
    console.log("its here");

    valid++;
  }
  else {
    alert("the emial it not corecte")
  }
  if (valname.test(les_value.fullname.value)) {
    console.log("its here");
    valid++;
  }
  else {
    alert("the name it not corecte")
  }

  if (valnumbre.test(les_value.telephone.value)) {
    console.log("its here");
    valid++;
  }
  else {
    alert("the tele it not corecte")
  }

  return valid;
}

// 
affichegeworker()

function affichege() {
  let card = document.getElementById('card');
  card.innerHTML = ''
  workers.forEach(Element => {


    let cardbody = `<div class="" >
          <div    class=" d-flex border bg-light rounded-3 p-2 align-items-center gap-2">
          
              <img src="${Element.photo}" data-index="${Element.id}" class="cardItem   img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker"data-bs-toggle="modal" data-bs-target="#detailprofile" />
        

            <div>
              <h5 class="card-title">${Element.fullname}</h5>
              <p class="card-text">${Element.role}</p>
            </div>

            <button type="button"   class=" btn_card btn btn-primary " >
                voir</button>
          </div>
          </div>
          `
    card.innerHTML += cardbody;
  })


  document.querySelectorAll(".cardItem").forEach(item => {
    item.addEventListener("click", () => {
      let indx = item.getAttribute("data-index");
      affichegedetailedempl(indx);
    });
  });

}
document.getElementById('addExp').addEventListener('click', (even) => {

  let formadaynamic = document.getElementById('formadaynamic');
       

  let card = `   <div class="p-2  bg-secondary">
                <div>
                  <lsbel for="Expériences professionnelles" class="form_label">Expériences professionnelles</lsbel>
                  <input type="text" class="form-control" name="exp" id="exp" placeholder="Expériences professionnelles">
                </div>
                <div class="row ">
                  <div class="col-auto">
                    <lsbel for="Expériences professionnelles" class="form_label"> time start</lsbel>
                    <input type="date" class="form-control"name="start" id="start" placeholder="Expériences professionnelles">
                  </div>
                  <div class="col-auto">
                    <lsbel for="Expériences professionnelles" class="form_label"> time end</lsbel>
                    <input type="date" class="form-control" name="endDate" id="endDate" placeholder="Expériences professionnelles">
                  </div>
                </div>
              </div>
    `


  formadaynamic.innerHTML += card

})

document.forms["addworker"].addEventListener('submit', (e) => {

  e.preventDefault();
  let les_value = e.target;

  let valid = validation(les_value);


  if (valid == 3) {
    let worker = {
      id: count++,
      fullname: les_value.fullname.value,
      role: les_value.role.value,
      telephone: les_value.telephone.value,
      email: les_value.email.value,
      photo: les_value.photo.value,
      Experiences: []
    }


    console.log(les_value.start.length);



    for (let i = 0; i < les_value.start.length; i++) {

      worker.Experiences.push({

        exp: exp[i].value,
        start: start[i].value,
        endDate: endDate[i].value
      })
      console.log(worker.Experiences)
    }
    console.log(worker)
    workers.push(worker)
    addtoplace(worker);
    affichegeworker()




    affichege(worker)
  }
  else {

    validation(les_value);

  }




})

// add tout la zone
function addtoplace(worker) {
  if (worker.role == "Manager") {
    comference.push(worker)
    reception.push(worker)
    seveurs.push(worker)
    securirit.push(worker)
    personnel.push(worker)
    archives.push(worker)
  }
  if (worker.role == "Nettoyage") {
    comference.push(worker)
    reception.push(worker)
    seveurs.push(worker)
    securirit.push(worker)

  }
  if (worker.role == "it") {
    comference.push(worker)
    reception.push(worker)
    seveurs.push(worker)
    personnel.push(worker)
  }
  if (worker.role == "securite") {
    comference.push(worker)
    securirit.push(worker)
    reception.push(worker)
    personnel.push(worker)
  }
  if (worker.role == "Autres roles") {
    comference.push(worker)
    reception.push(worker)
    personnel.push(worker)
  }
  console.log(comference)
  console.log(reception)
  console.log(seveurs)
  console.log(securirit)
  console.log(personnel)
  console.log(archives)

}
// =
//add modaldaynamic




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

            <butto data-id="${Element.id}"  class="btnitem btn btn-primary">+</butto>
          </div>`
    listcard.innerHTML += card;
  })
}



function affichegedetailedempl(indx) {
  let email = document.getElementById('email_affi');
  let photo = document.getElementById('photo_affi');
  let Fullname = document.getElementById('fullname_affi');
  let role = document.getElementById('role_affi');
  let telephone = document.getElementById('telephone_affi');


  let lstcard = document.getElementById("listcard");



  photo.setAttribute('src', workers[indx].photo),
    Fullname.innerHTML = workers[indx].fullname,
    email.innerHTML = workers[indx].email,
    role.innerHTML = workers[indx].role
  telephone.innerHTML = workers[indx].telephone

  console.log(workers.Experiences);






  workers.forEach(Element => {
    Element.Experiences.forEach(exp => {
      lstcard.innerHTML = "";
      let card = `
                 
         <div class="card-text">Expériences:${exp.exp} </div>
              <div class="card-text">start: ${exp.start}</div>
              <div class="card-text">end:${exp.endDate}</div>
    `
      lstcard.innerHTML += card;

    })

  })
}




// ==================
function finindex() {

  console.log("=================================");

  const cardItem = document.querySelectorAll(".cardItem")

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



function findworkerid(workerId) {


  workers.forEach((worke, i) => {


    if (worke.id == workerId) {
      workers.splice(i, 1)
      affichege()
       affichegeworker()
      let emp = worke
      console.log("worker", emp);
      savetozones(emp)


    }
  })

}


let zones = document.querySelectorAll('.zones')
console.log(zones);
zones.forEach((zone) => {
  zone.addEventListener("click", (event) => {
    zontarged = event.target.getAttribute("id");

    document.querySelectorAll(".btnitem").forEach(btn => {
      btn.addEventListener("click", (event) => {
        let workerId = btn.getAttribute("data-id");
        let obect = findworkerid(workerId);

        console.log("worker ->", workerId);
        console.log("worker ->", obect);
      })

    });

  });
});
function savetozones(Worker) {
  console.log("hi im her so  what you do");
          
  let listcard = document.getElementById(zontarged);

  console.log(zontarged);

  listcard.innerHTML = ""


  let card = `<div class="container">
          <div class="d-flex justify-content-between  border bg-light rounded-3">
            <div>
              <img src="${Worker.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${Worker.fullname}</h5>
              <p class="card-text">${Worker.role}</p>
            </div>

            <butto data-id="${Worker.id}"  class="btnitem btn btn-danger">x</butto>
          </div>`
  listcard.innerHTML += card;

}

