const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('[data-placeholder]').forEach(el => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      alert(el.dataset.placeholder);
    }
  });
});

document.addEventListener("DOMContentLoaded",()=>{
  const loader=document.getElementById("page-loader");
  window.addEventListener("load",()=>setTimeout(()=>loader?.classList.add("is-hidden"),250));

  const progress=document.getElementById("scroll-progress");
  const update=()=>{
    if(!progress)return;
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(max>0?scrollY/max*100:0)+"%";
  };
  addEventListener("scroll",update,{passive:true}); update();

  const items=document.querySelectorAll(".reveal-section,.project-card,.skill-card,.stat-card");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        e.target.style.transitionDelay=Math.min(i*45,220)+"ms";
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  },{threshold:.12});
  items.forEach(x=>observer.observe(x));

  if(matchMedia("(hover:hover) and (pointer:fine)").matches){
    document.querySelectorAll(".project-card,.skill-card,.card").forEach(card=>{
      card.addEventListener("pointermove",e=>{
        const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        card.style.transform=`perspective(900px) rotateX(${-y*3}deg) rotateY(${x*3}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave",()=>card.style.transform="");
    });
  }
});
