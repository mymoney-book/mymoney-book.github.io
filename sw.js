/* MyMoney NEXT V8.1.80 - network-first pages to avoid stale interface */
const CACHE='mymoney-next-v8180-four-budget-views-20261128';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  // Retire old page caches so an offline navigation cannot reopen an outdated UI.
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('mymoney-next-v')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('/theme-images/')) { e.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(e.request);if(hit)return hit;const res=await fetch(e.request);if(res.ok)await cache.put(e.request,res.clone());return res;})());return; }
  if(e.request.mode!=='navigate')return;
  e.respondWith((async()=>{
    try {
      const response=await fetch(e.request,{cache:'no-store'});
      if(response && response.ok) {
        const c=await caches.open(CACHE);
        await c.put(e.request,response.clone());
      }
      return response;
    } catch(err) {
      return (await caches.match(e.request)) ||
             (await caches.match(new URL('./index.html',self.registration.scope).href)) ||
             Response.error();
    }
  })());
});
