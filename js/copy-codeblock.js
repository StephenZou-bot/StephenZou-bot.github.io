window.addEventListener("load",(()=>{const e=document.querySelectorAll("figure.highlight");if(!e.length)return;e.forEach((e=>{const t=document.createElement("div");t.setAttribute("class","codeblock-copy-wrapper");let c=null;t.addEventListener("click",(e=>{const o=e.target.parentElement.querySelector("code");let l="";!function e(t){t.childNodes.forEach((t=>{switch(t.nodeName){case"#text":// 文本节点
l+=t.nodeValue;break;case"BR":// <br />
l+="\n";break;default:e(t)}}))}(o),navigator.clipboard.writeText(
/* 去掉最后的换行 */
l.slice(0,-1)).then((()=>{c&&clearTimeout(c),t.classList.add("codeblock-copy-wrapper-copied"),c=setTimeout((()=>{t.classList.remove("codeblock-copy-wrapper-copied"),c=null}),1500)}))})),e.appendChild(t)}))}));