
function openTab(i){
document.querySelectorAll('.tab').forEach((t,idx)=>{
t.classList.toggle('active',idx===i)
})
}

const form=document.getElementById('form')
if(form){
form.onsubmit=e=>{
e.preventDefault()
localStorage.setItem('name',name.value)
toast.style.display='block'
setTimeout(()=>toast.style.display='none',2000)
}
}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
