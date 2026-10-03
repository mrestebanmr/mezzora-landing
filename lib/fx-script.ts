// Script inline que se inyecta en <head>. Sin dependencias y sin React:
// si los chunks de JS fallan (4G mala), la página sigue visible y legible.
//  - html.js activa los reveals; html.reveal-all es el failsafe a los 3 s.
//  - --sp (0→1) mueve la aurora y la barra de progreso según el scroll.
//  - [data-reveal], [data-count], [data-process] y .spotlight se activan aquí.
export const fxScript = `(function(){
var d=document,h=d.documentElement;
h.classList.add('js');
setTimeout(function(){h.classList.add('reveal-all')},3000);
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

function onReady(fn){d.readyState!=='loading'?fn():d.addEventListener('DOMContentLoaded',fn)}

onReady(function(){
  var processes=[].slice.call(d.querySelectorAll('[data-process]'));
  var ticking=false;
  function update(){
    ticking=false;
    var y=window.scrollY,vh=window.innerHeight;
    var max=Math.max(1,h.scrollHeight-vh);
    h.style.setProperty('--sp',Math.min(1,Math.max(0,y/max)).toFixed(4));
    if(y>20)h.setAttribute('data-scrolled','');else h.removeAttribute('data-scrolled');
    processes.forEach(function(el){
      var r=el.getBoundingClientRect(),anchor=vh*0.6;
      var p=Math.min(1,Math.max(0,(anchor-r.top)/r.height));
      el.style.setProperty('--p',p.toFixed(4));
      [].forEach.call(el.querySelectorAll('[data-step]'),function(s){
        if(s.getBoundingClientRect().top<anchor)s.setAttribute('data-active','');
        else s.removeAttribute('data-active');
      });
    });
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  update();

  function countUp(el){
    var end=parseFloat(el.getAttribute('data-count'))||0;
    if(reduce){el.textContent=end;return}
    var t0=null,dur=1400;
    function frame(t){
      if(t0===null)t0=t;
      var k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);
      el.textContent=Math.round(end*e);
      if(k<1)requestAnimationFrame(frame);
    }
    el.textContent='0';
    requestAnimationFrame(frame);
  }

  var targets=d.querySelectorAll('[data-reveal],[data-count]');
  if(!('IntersectionObserver' in window)){
    [].forEach.call(targets,function(el){el.setAttribute('data-shown','')});
  }else{
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting)return;
        var el=en.target;
        el.setAttribute('data-shown','');
        if(el.hasAttribute('data-count'))countUp(el);
        io.unobserve(el);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:0.12});
    [].forEach.call(targets,function(el){io.observe(el)});
  }

  d.addEventListener('pointermove',function(e){
    var t=e.target;
    var card=t&&t.closest?t.closest('.spotlight'):null;
    if(!card)return;
    var r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  },{passive:true});
});
})();`;
