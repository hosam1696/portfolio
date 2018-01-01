// service-worker.js file


const cacheName = 'v2'
const cacheFiles = [
    './index.html',
    './dist/main.css',
    './proj-img.jpg',
    './hosam.png',
    './logo.png'
]
self.addEventListener('install', (e) => {
    console.log('>service worker Installed..')
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('> Service worker cache', cache)
                return cache.addAll(cacheFiles)
            })
    )
})


self.addEventListener('activate', (e) => {
    console.log('> service worker Activated..')
    e.waitUntil(
        caches.keys().then(() => Promise.all(cacheFiles.map(c => {
            if (c !== cacheName) {
                console.warn('removing cache files')
                return caches.delete(c)
            }
        })))
    )
})
/*
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    console.log('> service worker found in cache', res)
                    return res
                } else {
                    let reqClone = e.request.clone()
                    fetch(reqClone)
                        .then(res => {
                            if (!res) {
                                console.warn('> Service worker no respone')
                                return res   
                            }
                            let resClone = res.clone()
                            caches.open(cacheName)
                                .then(cache => {
                                    cache.put(e.request, resClone)
                                    return res
                                })
                        })
                }
            })
    )
})

*/