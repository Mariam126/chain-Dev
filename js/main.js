
const navbar = document.getElementById('navbar-fixed');
const items = document.querySelectorAll(' .nav-item a');
const rate= document.querySelectorAll('.about .rates');
const namId =document.querySelectorAll('.about .rates .name h3')
const feedBack =document.querySelector('.feedbacks .person .text');
const btnnId = document.getElementById('modal');
const loginForm =document.getElementById('form-container');
const navbarHeightPx = 90;
window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > navbarHeightPx ||
    document.documentElement.scrollTop > navbarHeightPx
  ) {
    navbar.style.backgroundColor='white'
  } else {
    navbar.style.backgroundColor='transparent'

  }
});
items.forEach((item, idx) => {  
  item.addEventListener('click', () => {   
    ToggleActive(item,idx);
  });
});

function ToggleActive(el,index) {
  el.classList.toggle('active');
  items.forEach((item,idx) => {
    if(idx !== index){
      item.classList.remove("active");
    }
  });
}
rate.forEach((item, idx) => {  
  item.addEventListener('click', () => {   
  ToggleColor(item,idx);
//  const aa=document.createElement('h3');
//  let aaText =document.createTextNode(`${namId}`.texContent);
//  aa.appendChild(aaText);
// feedBack.appendChild(aa)
 


  });

});

function ToggleColor(el,index) {
  el.style.color='#4b8ef1'
  rate.forEach((item,idx) => {
    if(idx !== index){
      item.style.color='black'
    }
  });
}
// btnnId.addEventListener('click',() =>{
//  document.body.remove();
//   console.log('clk');
// loginForm.style.display='block';



// }
// )
