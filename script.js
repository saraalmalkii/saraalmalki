(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  function isDark(){
    var t=root.getAttribute('data-theme');
    if(t) return t==='dark';
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function label(){ btn.textContent = isDark() ? 'الوضع الفاتح ☀️' : 'الوضع الداكن 🌙'; }
  try{ var saved=localStorage.getItem('theme'); if(saved) root.setAttribute('data-theme',saved); }catch(e){}
  label();
  btn.addEventListener('click',function(){
    var next=isDark()?'light':'dark';
    root.setAttribute('data-theme',next);
    try{ localStorage.setItem('theme',next); }catch(e){}
    label();
  });
})();
