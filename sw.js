// service-worker.js file


const cacheName = 'cachedassets';
const cacheFiles = [
    '/',
    './index.html',
    './css/style.css',
    './css/bootstrap.min.css',
    './images/proj-img.jpg',
    './images/h-profile.png',
    './images/logo.png',
    './dist/mainapp.js'
];
self.addEventListener('install', async e => {
    //console.log('> service worker Installed..'); event.waitUntil
    const cache = await caches.open(cacheName);
    cache.addAll(cacheFiles);
})


self.addEventListener('activate', e => {
    console.log('> service worker Activated..');
    e.waitUntil(
        caches.keys().then(() => Promise.all(cacheFiles.map(c => {
            if (c !== cacheName) {
                console.warn('removing cache files');
                return caches.delete(c)
            }
        })))
    )
})

self.addEventListener("fetch", event => {
    const req = event.request;
    // Prevent the default, and handle the request ourselves.
    event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(req);
    // Return it if we found one.
    return cachedResponse || fetch(req);
} 
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

