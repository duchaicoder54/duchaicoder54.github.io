let menu_bar = document.querySelector('.fa-bars')
let nav = document.querySelector('.nav')
menu_bar.onclick= () =>{
    menu_bar.classList.toggle("fa-times")
    nav.classList.toggle('active')
}

var closebtns = document.querySelectorAll('.btn-close-view')


var quickview = document.querySelectorAll('.quickview')
var popup = function(popupClick){
   
    quickview[popupClick].classList.add('active');}
var xemngay = document.querySelectorAll('.xem-ngay')

    var xemngay = document.querySelectorAll('.xem-ngay')
   xemngay.forEach((open ,i) =>{
           open.addEventListener("click", ()=>{
            
           
popup(i)
        });
    });
    closebtns.forEach((closeBtn) =>{
        closeBtn.addEventListener("click", ()=>{
            
            quickview.forEach((qyuickv) => {
                
                qyuickv.classList.remove('active')
                
            });
        });
    });
   

    var addgiohang = document.querySelectorAll('.addtocard') 
    let card =JSON.parse(localStorage.getItem("Card")) || []
    console.log(card)
    var giohang = Array();
    // var id =23;
for(var i= 0; i < addgiohang.length; i++){
 
    addgiohang[i].onclick = function(){
  
  var sanpham = this.parentElement.parentElement.parentElement.parentElement;
  var id = sanpham.getElementsByClassName('nhapid')[0].innerHTML;
  var name = sanpham.querySelector('h3').innerHTML;
  console.log(name)
  var imgSrc = sanpham.querySelector('img').src;
  
  var price = sanpham.querySelector('h6').innerHTML;
  var discription = sanpham.querySelector('p').innerHTML;
  console.log(price)


const sp = {
  id: id++,
    name : name,
    price : price ,
    imgSrc : imgSrc, 
    discription : discription,
    numberproduct :1,
    
}
if(card.some((Item) =>Item.name == sp.name)){
    alert('san pham da thuc su co trong gio hang')
}
else{




card.push(sp)
alert('san pham da duoc them vao gio hang')
localStorage.setItem("Card", JSON.stringify(card));
JSON.parse(localStorage.getItem("Card")) 
console.log(card)

}
 
    }
}