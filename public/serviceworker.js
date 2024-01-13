self.addEventListener("install",e =>{
   
    e.waitUntil(
        caches.open("static").then(Cache => {
            return Cache.addAll(['./','./images1/letter-m.png','./images/letter-m (1).png'])

        })
    )
})

self.addEventListener("fetch",e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    )
})