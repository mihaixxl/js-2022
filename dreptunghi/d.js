var dr = document.querySelector('#dreptunghi')
var cerc =document.querySelector('#cerc')

dr.addEventListener('click', minimize)
cerc.addEventListener('click',move )


async function minimize() {
    for(let i = 10; i > 0; i-- ) {
        await new Promise(r => setTimeout(r,40))
        dr.style.height = i + 'em'
    }
    
}
async function move() {
    for(let i = 10; i <= 700; i++ ) {
        await new Promise(r => setTimeout(r,20))
        cerc.style.top = cerc.style.left = i + 'px'
    }
}