const productsEtl = document.querySelector('#product_list');
  const productBElm = document.querySelector('.cart-items');
  const card_p_n = document.querySelector('.card_p_n');
  const total_sp =document.querySelector('.total_sp');
  console.log(total_sp)
  
 
  console.log(total_sp)
  function render_products(){
products.forEach((product) =>{
  productsEtl.innerHTML += `
        <div id="product_item "  class=" col-sm-6 col-md-4 col-lg-3">   
        <div class="img">
             <img class="anh" src="${product.imgSrc}" alt="${product.name}">
     </div>
     <div class="text">
     <h2>${product.name}</h2>
     <h2>${product.price}<sup>đ</sup> </h2>
     <p>${product.discription}</p>
    </div>
     <div class="icon_action">
      
        <i class="fas fa-heart" id="icon"></i>
        </div>
   <div class="card">
    <button onclick="Add_Card(${product.id} )">Add to card </button>
  </div>
  
    </div>`
})

  }
  render_products()
  

let card =JSON.parse(localStorage.getItem("Card")) || []
updateCade()
function Add_Card(id){
  if(
  card.some((Item) =>  Item.id === id)){
  alert('san pham nay da co trong gio hang r')
  changenumber("plus", id)
  }
else{
  const Item = products.find((product) => product.id === id
  
  )
  alert('san pham da duoc them vao gio hang')
  card.push({
    ...Item,
    numberproduct : 1})
}

  // card.some((Item) =>{
  //   Item.id === id
  // })

// console.log(card )
updateCade()

}
function updateCade(){
  renderCard()
  renderTotalcard()
  localStorage.setItem("Card", JSON.stringify(card));
 
}
 function renderCard(){
  productBElm.innerHTML = "";
  card.forEach((Item) =>{
    productBElm.innerHTML += 
    `  <div class="cart-item">
    <div class="Card-infor" onclick="removeCart(${Item.id})">
        <img  src="${Item.imgSrc}" alt="">
        <h4>${Item.name}</h4>
    </div>
<div class="price">
    <small>$</small>${Item.price}
</div>
<div class="number">
    <div class="btn munus" onclick="changenumber('minus', ${Item.id})"> - </div>
    <div class="number_so">${Item.numberproduct} </div>
    <div class=" btn plus" onclick="changenumber('plus', ${Item.id})"> +</div>
</div>
</div> 
    `
  } )
}  
function renderTotalcard(){
  let total_price = 0,
  total_product = 0
  card.forEach((Item) => {
    total_price +=  Item.price * Item.numberproduct;
    total_product += Item.numberproduct
  })
  card_p_n.innerHTML =`Subtotal(${total_product }product) : $${total_price}`
  total_sp.innerHTML = `${total_product }`

}
function removeCart(id){
  card = card.filter((Item)=>
    Item.id !== id
  )
updateCade()
}
function changenumber(action,id){

  card = card.map((Item) =>{

    let numberproduct = Item.numberproduct;
 
    if(Item.id === id){
      
  if(action === 'minus' && numberproduct >= 1){
          numberproduct --;
          console.log(numberproduct)

    }else if(action === "plus"){
    numberproduct ++;
    console.log(numberproduct)
    }
  }
  
  return{
    ...Item,
numberproduct,

  }


})
  
  updateCade()
}
const nut_hien = document.querySelector('.shopping_card');
const cardbuy= document.querySelector('.cardbuy');
nut_hien.onclick = function(){
  cardbuy.classList.toggle('active')
  this.style.back

}
const imgactive = document.querySelectorAll('.anh');
for(i = 0; i < imgactive.length; i ++){
  imgactive[i].onclick = function(){
    var text = this.parentElement.parentElement.querySelector('.text')
    console.log(text)
    console.log(this)
    this.classList.toggle('active')
    text.classList.toggle('active')
  }
}
let hearts =  document.querySelectorAll('#icon');
for( i = 0; i < hearts.length; i++){
  hearts[i].onclick = function(){
    this.classList.toggle('icon_change')
}

}
document.querySelector('.fa-search').onclick = () =>{
    document.querySelector('#form-search').classList.add('active')

}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#form-search').classList.remove('active')

}

let menu_bar_sanpham = document.querySelector('.fa-bars')
let nav_sanpham  = document.querySelector('.nav')
menu_bar_sanpham.onclick= () =>{
    menu_bar_sanpham.classList.toggle("fa-times")
    nav_sanpham.classList.toggle('active')
}  































