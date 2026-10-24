// MyMoney V7.5.1 — safe network-first update; preserve existing repository assets.
const CACHE='mymoney-local-v751-cpp-late-v1';
const ESSENTIAL=['./','./index.html'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(async cache=>{
    await Promise.allSettled(ESSENTIAL.map(path=>cache.add(path)));
    await self.skipWaiting();
  }));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('mymoney-local-')&&key!==CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});}
    return response;
  }).catch(async()=>{
    const existing=await caches.match(event.request);
    if(existing)return existing;
    if(event.request.mode==='navigate')return (await caches.match('./index.html'))||Response.error();
    return Response.error();
  }));
});
