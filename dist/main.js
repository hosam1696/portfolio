document.addEventListener('DOMContentLoaded', () => {
    const showSide = document.getElementById('l-side')
    const leftSide = document.getElementById('side-info')
    showSide.addEventListener('click', event => {
        let checked = event.target.checked
        if (checked)
            leftSide.style.left = 0
        else
            leftSide.style.left = '-100%'
    })
});


// service worker

if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('sw.js', { scope: './' }).catch(err => {
            console.warn('service worker is failed to register!', err)
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