const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event){
  const MESES_EN_UN_AñO = 12;
  const $salarioUsuario = Number(
    document.querySelector("#salario-usuario").value
  );
  const $salarioMensual = document.querySelector('#salario-mensual'); 
  $salarioMensual.value = $salarioUsuario / MESES_EN_UN_AñO;

  event.preventDefault();
};
