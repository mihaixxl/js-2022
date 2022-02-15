var dr = document.querySelector('#dreptunghi')
var cerc =document.querySelector('#cerc')

dr.addEventListener('click', minimize)
cerc.addEventListener('click',move )
cerc.addEventListener('click',moveUp)


async function minimize() {
    for(let i = 10; i > 0; i-- ) {
        await new Promise(r => setTimeout(r,60))
        dr.style.height = i + 'em'
    }
    
}
async function move() {
    for(let i = 10; i <= 700; i++ ) {
        await new Promise(r => setTimeout(r,5))
        cerc.style.top = cerc.style.left = i + 'px'
    }
}

    async  function  moveUp() {
    for(let i = 700; i => 10; i++ ) {
      await new Promise ( r => setTimeout(r,5))
        cerc.style.top = cerc.style.left = i - 'px'
    }
}