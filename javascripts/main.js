"use strict";var addclass=function(e,n){e.classList?e.classList.add(n):e.className+=" "+n};document.addEventListener("DOMContentLoaded",function(){var e=document.createTextNode(" "),n=document.createElement("a");addclass(n,"permalink"),n.innerHTML="<span>Link to this section of the page</span>";var t=document.querySelectorAll(".content h2[id], .ap");Array.prototype.forEach.call(t,function(t){var o=n.cloneNode(!0);o.setAttribute("href","#"+t.id),t.appendChild(e.cloneNode(!0)),t.appendChild(o),"fragmention"in window.location||function(){function e(n,t){for(var o,a=n.childNodes,i=0;o=a[i];++i)if(1==o.nodeType&&-1!==(o.innerText||o.textContent||"").replace(/\s+/g," ").indexOf(t))return e(o,t);return n}function n(){location.fragmention=decodeURIComponent((location.href.match(/#(#|%23)(.+)/)||[0,0,""])[2].replace(/\+/g," ")),t&&(t.removeAttribute("fragmention"),t.runtimeStyle&&(t.runtimeStyle.windows=t.runtimeStyle.windows)),location.fragmention&&(t=e(document,location.fragmention),t!==document?(t.scrollIntoView(),t.setAttribute("fragmention",""),t.setAttribute("tabindex","-1"),t.focus(),t.runtimeStyle&&(t.runtimeStyle.windows=t.runtimeStyle.windows)):t=null)}location.fragmention=location.fragmention||"";var t;"addEventListener"in window?(window.addEventListener("hashchange",n),document.addEventListener("DOMContentLoaded",n)):(window.attachEvent("onhashchange",n),document.attachEvent("onreadystatechange",function(){"c"===document.readyState[0]&&n()}))}()})});