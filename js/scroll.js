const app = document.querySelector('#app');

app.addEventListener('scroll', () => {
  if (app.scrollTop >= 100) {
    document.querySelector('header').classList.add('active');
    document.querySelector('.trio').classList.remove('active');
    return;
  }

  document.querySelector('header').classList.remove('active');
  document.querySelector('.trio').classList.add('active');
});

//Aparecer nome dos membros
const membros = document.querySelectorAll('.membro');
const nomeMembro = document.querySelector('.nome_membro');

// Cria a variavel intervalo fora do settimeout para uso
let intervalo;

// Ação de aparecer os nomes dos membros quando o mouse passar por cima
membros.forEach((membro) => {
  membro.addEventListener('mouseover', () => {
    write(
      nomeMembro,
      membro.getAttribute('class').replace('membro', '').toUpperCase().trim()
    );
  });

  membro.addEventListener('mouseleave', () => {
    // Limpa o intervalor a cada saida do mouse
    clearInterval(intervalo);
    nomeMembro.innerHTML = '';
  });
});

/* Criar texto em cima dos membros da equipe */

// retirada do set interval
function write(elem, txt) {
  // limpa o intervalor a cada inicio de função, para garantir que não tenha o problema de erro na digitação do nome
  clearInterval(intervalo);
  let status = 0;
  const len = txt.length;
  let pos = 0;
  if (!status) {
    intervalo = setInterval(() => {
      status = 1;
      elem.innerHTML += txt[pos];
      pos++;

      if (pos == len) {
        clearInterval(intervalo);
        status = 0;
      }
    }, 80);
  }
}
