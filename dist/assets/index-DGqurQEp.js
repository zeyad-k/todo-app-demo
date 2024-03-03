(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(c){if(c.ep)return;c.ep=!0;const n=s(c);fetch(c.href,n)}})();const f=document.querySelector(".DarkThemeToggle"),l=document.querySelector(".App"),m=document.querySelector("#search-input"),L=document.querySelector(".TaskSearchBar__button"),r=document.querySelector(".TaskList__list"),o=document.querySelector(".TaskList__link"),T=()=>document.querySelectorAll(".TaskList__deleteIcon"),_=()=>document.querySelectorAll(".TaskList__checkbox"),d=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},p=()=>{l.classList.toggle("App--isDark"),d("darkThemeFlag",l==null?void 0:l.classList.contains("App--isDark"))},i=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):!1},h=(e,t)=>{if(!confirm("هل أنت متأكد من حذف هذه المهمة؟"))return;const a=i("tasks");a.splice(t,1),d("tasks",a),k(a)},g=(e,t)=>{const s=i("tasks");e.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive"),s[t].isCompleted=!s[t].isCompleted,d("tasks",s)},v=()=>{T().forEach((e,t)=>{e.addEventListener("click",s=>h(s,t))}),_().forEach((e,t)=>{e.addEventListener("click",s=>g(s,t)),e.addEventListener("keydown",s=>s.key==="Enter"&&g(s,t))})},y=()=>{r.innerHTML=`<li class='EmptyList'>
<img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
<p>قائمة المهام فارغة</p>  </li>`},E=()=>{const e=i("tasks")||[];r.innerHTML="",e.forEach(t=>{r.innerHTML+=`<li class="TaskList__taskContent${t.isCompleted?" TaskList__taskContent--isActive":""}">
    <div class='TaskList__checkbox' tabindex="0" role="button">
      <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
    </div>
    <div class='TaskList__valueContent'>
      <p class='TaskList__value'>
        ${t.value}
      </p>
      <img src="./assets/icon-basket.svg"
           class='TaskList__deleteIcon'
           alt="basket-icon"
      />
    </div>
  </li>`})},k=e=>{e!=null&&e.length?(E(),v()):y()},S=()=>{const e=m.value;if(!e||e.trim()==="")return;const t={value:e,isCompleted:!1},s=i("tasks")||[];s.push(t),d("tasks",s),m.value="",k(s)},b=()=>{i("darkThemeFlag")&&p(),k(i("tasks"))};b();f.addEventListener("click",p);L.addEventListener("click",e=>{e.preventDefault(),S()});o==null||o.addEventListener("click",()=>{r==null||r.classList.toggle("TaskList__list--hideCompleted"),o==null||o.classList.toggle("TaskList__link--isActive")});
