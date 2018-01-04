self.addEventListener('message', (e) => {
    const loopNum = Number(e.data.match(/[0-9]*/g).filter(x => x)[0])
    if (e.data === `loop ${loopNum} times`)
        console.warn(loopNum)    
    for (let x = 0; x < loopNum; x++) {
        //console.info('%c%s', 'color: hotpink', e.data);
        self.postMessage(x)
    }

})

