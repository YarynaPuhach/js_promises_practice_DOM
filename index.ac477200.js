var e=document.querySelector("body");function n(n,t){var o=document.createElement("div");o.dataset.qa="notification",o.className=t,o.textContent=n,e.appendChild(o)}var t=new Promise(function(e,n){document.addEventListener("click",function(){e()}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),o=new Promise(function(e){document.addEventListener("click",function(){e()}),document.addEventListener("contextmenu",function(){e()})}),r=new Promise(function(e){var n=!1,t=!1;document.addEventListener("mousedown",function(o){0===o.button&&(t=!0),2===o.button&&(n=!0),t&&n&&e("Third promise was resolved")})});t.then(function(){return n("First promise was resolved","success")}).catch(function(){return n("First promise was rejected","error")}),o.then(function(){n("Second promise was resolved","success")}),r.then(function(){n("Third promise was resolved","success")});
//# sourceMappingURL=index.ac477200.js.map
