/* MyMoney NEXT V8.1.25 - network-first pages to avoid stale interface */
const CACHE='mymoney-next-v8125-pages';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  // Retire old page caches so an offline navigation cannot reopen an outdated UI.
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('mymoney-next-v')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',e=>{
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
