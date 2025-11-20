
   function validation(les_value){
let valemail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
let valname = /^[a-zA-Z ]+$/
let valnumbre =/^\d{10}$/

if(valname.test(les_value.fullname.value))
{
    alert("true")

}
if(valemail.test(les_value.email.value))
{
    alert("true")

}
if(valnumbre.test(les_value.telephone.value))
{
    alert("true")

}


}
   email: ,