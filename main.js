(function(){
  var root=document.documentElement;
  try{if(localStorage.getItem('theme')==='light')root.dataset.theme='light'}catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    var tg=document.getElementById('theme');
    if(tg)tg.onclick=function(){
      var light=root.dataset.theme==='light';
      if(light)root.removeAttribute('data-theme');else root.dataset.theme='light';
      try{localStorage.setItem('theme',light?'dark':'light')}catch(e){}
    };
    setTimeout(function(){document.body.classList.add('loaded')},100);
  });
})();
