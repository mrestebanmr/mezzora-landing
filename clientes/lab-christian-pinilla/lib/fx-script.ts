// Script inline en <head>, sin dependencias: si los chunks de JS fallan (4G mala),
// la página sigue visible. html.js activa los reveals; html.reveal-all es el failsafe a los 3 s.
export const fxScript = `(function(){
var d=document,h=d.documentElement;
h.classList.add('js');
setTimeout(function(){h.classList.add('reveal-all')},3000);
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function onReady(fn){d.readyState!=='loading'?fn():d.addEventListener('DOMContentLoaded',fn)}
onReady(function(){
  function onScroll(){if(window.scrollY>20)h.setAttribute('data-scrolled','');else h.removeAttribute('data-scrolled')}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function countUp(el){
    var end=parseFloat(el.getAttribute('data-count'))||0;
    if(reduce){el.textContent=end;return}
    var t0=null,dur=1400;
    function frame(t){if(t0===null)t0=t;var k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=Math.round(end*e);if(k<1)requestAnimationFrame(frame)}
    el.textContent='0';requestAnimationFrame(frame);
  }
  var targets=d.querySelectorAll('[data-reveal],[data-count]');
  if(!('IntersectionObserver' in window)){[].forEach.call(targets,function(el){el.setAttribute('data-shown','')});return}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      var el=en.target;el.setAttribute('data-shown','');
      if(el.hasAttribute('data-count'))countUp(el);
      io.unobserve(el);
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.12});
  [].forEach.call(targets,function(el){io.observe(el)});
});
})();`;
