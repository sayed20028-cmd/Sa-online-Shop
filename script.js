const products=[
{id:1,name:"Premium Panjabi",price:1590,cat:"পুরুষ",emoji:"👕"},
{id:2,name:"Men's T-Shirt",price:690,cat:"পুরুষ",emoji:"👚"},
{id:3,name:"Ladies Three Piece",price:1890,cat:"নারী",emoji:"🥻"},
{id:4,name:"Ladies Saree",price:2290,cat:"নারী",emoji:"🥻"},
{id:5,name:"Fashion Bag",price:990,cat:"ফ্যাশন",emoji:"👜"},
{id:6,name:"Premium Sunglasses",price:790,cat:"ফ্যাশন",emoji:"🕶️"},
{id:7,name:"Smart Watch",price:1490,cat:"অন্যান্য",emoji:"⌚"},
{id:8,name:"Wallet",price:590,cat:"ফ্যাশন",emoji:"👛"}];
let cart=[];

function render(list=products){
 document.getElementById("grid").innerHTML=list.map(p=>`
 <div class="card"><div class="pic">${p.emoji}</div><div class="info">
 <b>${p.name}</b><div class="price">৳${p.price}</div>
 <button class="add" onclick="add(${p.id})">কার্টে যোগ করুন</button></div></div>`).join("");
}
function add(id){cart.push(products.find(p=>p.id===id));update();alert("পণ্যটি কার্টে যোগ হয়েছে");}
function update(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cartLine"><span>${p.name}</span><b>৳${p.price}</b></div>`).join(""):"কার্ট খালি";
 document.getElementById("total").textContent=cart.reduce((s,p)=>s+p.price,0);
}
function openCart(){document.getElementById("cartModal").style.display="block";update()}
function closeCart(){document.getElementById("cartModal").style.display="none"}
function checkout(){if(!cart.length)return alert("আগে একটি পণ্য কার্টে যোগ করুন");closeCart();document.getElementById("orderModal").style.display="block"}
function closeOrder(){document.getElementById("orderModal").style.display="none"}
function placeOrder(e){e.preventDefault();alert("অর্ডার রিসিভ হয়েছে। ডেমো ভার্সনে SMS/WhatsApp/API সংযোগ করা হয়নি।");cart=[];update();closeOrder()}
function filterCat(cat){render(cat==="সব"?products:products.filter(p=>p.cat===cat))}
function searchProducts(){let q=document.getElementById("search").value.toLowerCase();render(products.filter(p=>p.name.toLowerCase().includes(q)))}
render();update();