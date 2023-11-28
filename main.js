
const aniversario = new Date('2024-07-23T00:00:00');


function updateCountdown() {
  const agora = new Date().getTime();
  const diferenca = aniversario - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}


setInterval(updateCountdown, 1000);


updateCountdown();

  