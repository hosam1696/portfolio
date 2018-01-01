// service-worker.js file


const cacheName = 'v2'
const cacheFiles = [
    '/',
    './index.html',
    './dist/main.css',
    './proj-img.jpg',
    './hosam.png',
    './logo.png',
    './lib/bootstrap.min.css'
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

self.addEventListener('fetch', event => {
        // Prevent the default, and handle the request ourselves.
        event.respondWith(async function () {
            // Try to get the response from a cache.
            const cachedResponse = await caches.match(event.request);
            // Return it if we found one.
            if (cachedResponse) return cachedResponse;
            // If we didn't find a match in the cache, use the network.
            return fetch(event.request);
        }());
    });
    /*
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    console.log('> service worker found in cache', res)
                    return res
                } 
                
                    
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
                        

                return fetch(e.request)
            }
                
            )
    )
})*/

