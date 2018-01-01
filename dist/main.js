if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then((reg) => {
            console.log('service worker is ready!')
        }).catch(err => {
            console.warn('service worker is failed to register!', erdr)
        })
}
/* web worker
if (window && window.Worker) {
    let webWorker = new Worker('./ww.js')

    webWorker.postMessage('loop 500 times')
    webWorker.onmessage = ({ data }) => {
        console.log(data)

        document.getElementsByTagName('h1')[0].innerHTML = data 
        if (data >= 5000000)
            webWorker.terminate()
            
    }
    
}*/