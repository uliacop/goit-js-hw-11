import{i as n,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function f(o){const r="https://pixabay.com/api/",t=new URLSearchParams({key:"43046447-8272f873c9098dbfa2cb53d4e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=`${r}?${t}`;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(o){if(o.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const r=o.map(t=>`<li class="photos-block">
            <a class="photos-link" href="${t.largeImageURL}">
            <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="photo-data">
            <li class="photo-data-detail"><p><span class="info">Likes</span></br>${t.likes}</p></li>
            <li class="photo-data-detail"><p><span class="info">Views</span></br>${t.views}</p></li>
            <li class="photo-data-detail"><p><span class="info">Comments</span></br>${t.comments}</p></li>
            <li class="photo-data-detail"><p><span class="info">Downloads</span></br>${t.downloads}</p></li>
            </ul>
            </li>`).join("");d.insertAdjacentHTML("beforeend",r),h.refresh()}}const l=document.querySelector(".search-form"),d=document.querySelector(".gallery"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader"),g=()=>{p.classList.remove("hidden")},c=()=>{p.classList.add("hidden")};l.addEventListener("submit",y);function y(o){o.preventDefault(),d.innerHTML="";const r=l.elements.search.value.trim();r!==""?(g(),f(r).then(t=>{m(t.hits),c(),l.reset()}).catch(t=>{console.error(t),c(),n.error({message:"Sorry, an error occurred while loading. Please try again!",position:"topRight"})})):n.error({message:"Please complete the field!",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
