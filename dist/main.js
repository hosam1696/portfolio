if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then((reg) => {
            console.log('service worker is ready!')
        }).catch(err => {
            console.warn('service worker is failed to register!', erdr)
        })
}
