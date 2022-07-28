enter();
function enter(){
  document.getElementById("id").value ="";
  document.getElementById("image").value ="";
   document.getElementById("usr").value ="";
   document.getElementById('age').value ="";
 document.getElementById('shl').value  ="";
}

    var ADD = document.getElementById('nhap');
    ADD.onclick = function(){
    let form_element = document.querySelectorAll('.form-group');
    let input_element = document.querySelectorAll('.form-control');
  for(i= 0 ; i < input_element.length; i++){
    if(input_element[i].value=== ""){
        input_element[i].parentElement.querySelector('.error-message').innerText = 'please enter your enought infomation ';
    }
    else{
        input_element[i].parentElement.querySelector('.error-message').innerText="";
    }
  }
  let errorElement = document.querySelectorAll('.error-message');
  let arrERL = []
  for (let i = 0; i < errorElement.length; i++) {
    arrERL.push(errorElement[i].innerHTML)
    
  }
  let checkERR = arrERL.every(value => value=== "")
  if(checkERR){
    var id = document.getElementById("id").value;
    var image = document.getElementById("image").value;
    var ten = document.getElementById("usr").value;
var tuoi = document.getElementById('age').value;
    var school = document.getElementById('shl').value;
    let arrlistinformation =localStorage.getItem("arrlistinformation")? JSON.parse(localStorage.getItem("arrlistinformation")) : [];
    arrlistinformation.push(
        {
            id : id,
            image : image,
            name : ten,
            age : tuoi,
            school : school,
        }
)
    localStorage.setItem("arrlistinformation", JSON.stringify(arrlistinformation))
    renderStudent();
    enter();

  }
  }
function renderStudent(){
  let arrlistinformation =localStorage.getItem("arrlistinformation")? JSON.parse(localStorage.getItem("arrlistinformation")) : [];
  let student = ` <tr>
  <th>Id</th>
  <th>Image</th>
  <th>Name</th>
  <th>Age</th>
  <th>School</th>
  <th>Action</th>
</tr>`
arrlistinformation.map((value, index) =>{
  student += `<tr>
  <td>${index +1}</td>
  <td> <img src="${value.image}"/></td>
  <td>${value.name}</td>
  <td>${value.age}</td>
  <td>${value.school}</td>
  <td>
  <button  onclick = "  edit(${index})">  EDIT </button>
  <button   onclick = "  detele(${index})"> DETELE</button>
  </td>
</tr>`
})
document.getElementById('tab').innerHTML = student;

}
function detele(index){
  let arrlistinformation =localStorage.getItem("arrlistinformation")? JSON.parse(localStorage.getItem("arrlistinformation")) : [];
arrlistinformation.splice(index, 1)
localStorage.setItem("arrlistinformation", JSON.stringify(arrlistinformation))
renderStudent();

  }
function edit(index){

 document.getElementById('index').value = index;
 
 
  let arrlistinformation =localStorage.getItem("arrlistinformation")? JSON.parse(localStorage.getItem("arrlistinformation")) : [];
      document.getElementById("id").value = arrlistinformation[index].id;
      document.getElementById("image").value = arrlistinformation[index].image;
      document.getElementById("usr").value =  arrlistinformation[index].name;
 document.getElementById('age').value =  arrlistinformation[index].age;
   document.getElementById('shl').value = arrlistinformation[index].school;
   document.getElementById("nhap").style.display = "none";
   document.getElementById("update").style.display ="block";

  }
function changedata(){
   
    let arrlistinformation =localStorage.getItem("arrlistinformation")? JSON.parse(localStorage.getItem("arrlistinformation")) : [];
let index = document.getElementById("index").value;
console.log(index)
arrlistinformation[index]  =  {
  id : document.getElementById("id").value ,
  image : document.getElementById("image").value ,
  name :  document.getElementById("usr").value, 
  age :  document.getElementById('age').value,
 school: document.getElementById('shl').value,
}
localStorage.setItem("arrlistinformation", JSON.stringify(arrlistinformation))
renderStudent();
enter();
document.getElementById("nhap").style.display = "block";
   document.getElementById("update").style.display ="none";
  }