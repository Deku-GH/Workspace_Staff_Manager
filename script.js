
let count = 0;
let lenzone = [

]
let zone1 = []
let zone2 = []
let zone3 = []
let zone4 = []
let zone5 = []
let zone6 = []
let listzones = [3, 4, 2, 4, 3, 5]
let Listzones = ["zone1", "zone2", "zone3", "zone4", "zone5", "zone6"]
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






//==========validation ========
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
    alert("the telephone it not corecte")
  }

  return valid;
}

// 
affichegeworker()
// afficgheg the list of worker in aside bar
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
//add the forma daynamic
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
//get the  value from the input 
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

    affichegeworker()




    affichege(worker)
  }
  else {

    validation(les_value);

  }




})





//affachege the worker in modal
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


//affiche the infermition
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




// ==========search for worker for affichage the detail======
function finindex() {

  console.log("=================================");

  const cardItem = document.querySelectorAll(".cardItem")

  cardItem.forEach(nod => {

    nod.addEventListener("click", function () {

      let indx = nod.getAttribute('data-index');

      affichegedetailedempl(indx)
    })

  }
  )

  console.log("=================================");

}


//==find the index of the worker to add to zone
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

//==find the zone they click on
let zontarged = ""
let zones = document.querySelectorAll('.zones')
console.log(zones);
zones.forEach((zone) => {
  zone.addEventListener("click", (event) => {
    zontarged = zone.getAttribute("id");
    console.log(zontarged);

    document.querySelectorAll(".btnitem").forEach(btn => {
      btn.addEventListener("click", (event) => {
        let workerId = btn.getAttribute("data-id");
        findworkerid(workerId);



      })

    });

  });
});
//==save to zone 
function savetozones(Worker) {




  console.log(zontarged);
  console.log(Worker);
  ajoutezone(Worker);



  document.querySelectorAll(".btnitemX").forEach(btn => {
    btn.addEventListener("click", (event) => {
      console.log("XXXXXX");

      let workerId = btn.getAttribute("data-id");
      ajouteasidebar(workerId)
        ;
    })
  })



}


function ajoutezone(Worker) {
  switch (zontarged) {
    case 'zone1':
      zone1.push(Worker)
      console.log(zone1);
      affiazones(zone1)

      break;
    case 'zone2':
      zone2.push(Worker)
      console.log(zone2);
      affiazones(zone2)

      break;
    case 'zone3':
      zone3.push(Worker)
      console.log(zone3);
      affiazones(zone3)

      break;
    case 'zone4':
      zone4.push(Worker)
      console.log(zone4);
      affiazones(zone4)

      break;
    case 'zone5':
      zone5.push(Worker)
      console.log(zone5);
      affiazones(zone5)


      break;
    case 'zone6':
      zone6.push(Worker)
      console.log(zone6);
      affiazones(zone6)

      break;
  }
}


//==========
function ajouteasidebar(Worker) {
  console.log(workers);
  switch (zontarged) {
    case 'zone1':
      workers.push(zone1[Worker])
      console.log(workers);


      break;
    case 'zone2':
      workers.push(zone2[Worker])
      console.log(workers);

      break;
    case 'zone3':
      workers.push(zone3[Worker])
      console.log(workers);
      break;
    case 'zone4':
      workers.push(zone4[Worker])
      console.log(workers);

      break;
    case 'zone5':
      workers.push(zone5[Worker])
      console.log(workers);

      break;
    case 'zone6':
      workers.push(zone6[Worker])
      console.log(workers);

      break;
  }
}


function affiazones(zone) {



  let listcard = document.getElementById(zontarged);


  zone.forEach(emp => {

    listcard.innerHTML = ""
    let card = `<div class="container">
          <div class="d-flex justify-content-between  border bg-light rounded-3">
            <div>
              <img src="${emp.photo}" class="img-thumbnail background-sizi rounded-circle"
                style="width: 80px; height: 80px" alt="photo de worker" />
            </div>

            <div>
              <h5 class="card-title">${emp.fullname}</h5>
              <p class="card-text">${Worker.role}</p>
            </div>

            <butto data-id="${emp.id}"  class="btnitemX btn btn-danger">x</butto>
          </div>`
    listcard.innerHTML += card;
  })

}