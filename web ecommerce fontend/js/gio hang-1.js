const gio_hang = document.getElementById('12')
const tong_hang= document.getElementById('tong-hang')
const tong_tien = document.getElementById('tong-tien')
const phai_tra = document.getElementById('phai-tra')
console.log(gio_hang)
function reproduct(){
var danhsachsanphamdachon = JSON.parse(localStorage.getItem("Card")) || []
console.log(danhsachsanphamdachon)
gio_hang.innerHTML ="";
danhsachsanphamdachon.forEach((Item) => {
    gio_hang.innerHTML += ` <tr>
    <td class="cart_product">
    <i class="fas fa-times-circle" onclick="removeCart(${Item.id})"></i>
        <a href="#"><img src="${Item.imgSrc}" alt="Product">
        </a>
    </td>
    <td class="cart_description">
        <p class="product-name"><a href="#">${Item.name}</a>
        </p>
        <small class="cart_ref">SKU : #123654999</small>
        <br>
        <small><a href="#">Color : Beige</a></small>
        <br>
        <small><a href="#">Size : Frees size 40kg -> 65kg  </a></small>
    </td>
    <td class="cart_avail"><span class="label label-success">In stock</span>
    </td>
    <td class="price"><span>${Item.price} đ</span>
    </td>
    <td class="qty">
    <div class="btn munus" onclick="changenumber('minus', ${Item.id})"> - </div>
    <div class="number_so">${Item.numberproduct} </div>
    <div class=" btn plus" onclick="changenumber('plus', ${Item.id})"> +</div>
        
    </td>
   
   
</tr>`
   
});
renderMoney()
}

{/* <input class="form-control input-sm" type="text" value="${Item.numberproduct}"></input> */}
reproduct()
function changenumber(action,id){
    var danhsachsanphamdachon = JSON.parse(localStorage.getItem("Card")) || []
    danhsachsanphamdachon= danhsachsanphamdachon.map((Item) =>{
  
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
  localStorage.setItem("Card", JSON.stringify(danhsachsanphamdachon));
  reproduct()
}
function removeCart(id){
    var danhsachsanphamdachon = JSON.parse(localStorage.getItem("Card")) || []
    danhsachsanphamdachon = danhsachsanphamdachon.filter((Item)=>
    
      Item.id !== id
     
    )
    localStorage.setItem("Card", JSON.stringify(danhsachsanphamdachon));
    reproduct()
  }
function renderMoney(){
    var danhsachsanphamdachon = JSON.parse(localStorage.getItem("Card")) || []
    let total_price = 0,
    total_product = 0
   danhsachsanphamdachon.forEach((Item) => {
      total_price +=  Item.price * Item.numberproduct;
      total_product += Item.numberproduct
    })
    console.log(total_price);
  tong_tien.innerHTML = `${total_price}`
 tong_hang.innerHTML = `${total_product }`
 phai_tra.innerHTML = `${total_price}`
 
 
  
}

var tongK = document.getElementsByClassName('tong')
console.log(tongK)
      let menu_bar_giohang = document.querySelector('.fa-bars')
        let nav_giohang  = document.querySelector('.nav')
        menu_bar_giohang.onclick= () =>{
            menu_bar_giohang.classList.toggle("fa-times")
            nav_giohang.classList.toggle('active')
        }  
        
 

       