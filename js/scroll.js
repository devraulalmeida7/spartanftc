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


//Aparecer nome dos membros
const membros =  document.querySelectorAll('.membro');

// Ação de aparecer os nomes dos membros quando o mouse passar por cima
membros.forEach(membro => {
    membro.addEventListener('click', () => {
        write(document.querySelector('.nome_membro'), membro.getAttribute('class').replace('membro', '').toUpperCase())
    })

    membro.addEventListener('mouseleave', () => {
        document.querySelector('.nome_membro').innerHTML = ''
    })
})

/* Criar texto em cima dos membros da equipe */

function write (elem, txt) {
    let status = 0
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