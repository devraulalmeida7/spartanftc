const app = document.querySelector('#app');

app.addEventListener('scroll', () => {
    if( app.scrollTop >= 100)
    {
        document.querySelector('header').classList.add("active")
        document.querySelector('.trio').classList.remove("active")
        return   
    }

    document.querySelector('header').classList.remove("active")
    document.querySelector('.trio').classList.add("active")
})

const membros =  document.querySelectorAll('.membro');
membros.forEach(membro => {
    membro.addEventListener('mouseover', () => {
        write(document.querySelector('.nome_membro'), membro.getAttribute('class').replace('membro', '').toUpperCase())
    })

    membro.addEventListener('mouseleave', () => {
        document.querySelector('.nome_membro').innerHTML = ''
    })
})


let status = 0
function write (elem, txt) {
    setTimeout( () => {

        const len = txt.length;
        let pos = 0
        if(!status){
            const intervalo = setInterval( () => {
                status = 1; 
                elem.innerHTML += txt[pos]
                pos++;
    
                if(pos == len){
                    clearInterval(intervalo)
                    status = 0;
                }
            }, 50);
        }

    }, 300);
   
}