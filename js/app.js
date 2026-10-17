
function openModal(id){ document.getElementById(id).style.display='flex'; }
function closeModal(id){ document.getElementById(id).style.display='none'; }
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt=e; });
function installPWA(platform){ if(deferredPrompt){ deferredPrompt.prompt(); } else { alert('On '+platform+': Use browser menu -> Install / Add to Home Screen. One PWA works on all.'); } }
if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js'); }
// GDPR cookie consent - essential only, UK law
document.addEventListener('DOMContentLoaded', ()=>{ if(!localStorage.getItem('cookie-consent')){ document.getElementById('cookie-banner').style.display='block'; } });
