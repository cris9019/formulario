//(function(){
	var formulario = document.getElementById('formulario'),
	 nombre = formulario.nombre,
	correo = formulario.correo,
	 sexo = formulario.sexo,
	 termino = formulario.termino;
	 error = document.getElementById('error');

function valorNombre(e){
if(nombre.value == '' || nombre.value == null){

	error.style.display = 'block';
	error.innerHTML += '<li> Por favor ingresa tu nombre</li>';
		console.log('Por favor ingrese un nombre');

		e.preventDefault();
}else{
	error.style.display = 'none';
} 
}

	function valorCorreo(e){
		if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';
			console.log('Por favor completa el correo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
function valorSexo(e){
	if(sexo.value == '' || sexo.value == null){
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor ingresa el sexo</li>';
		console.log ('Por favor coloca el sexo');

		e.preventDefault();

	}else{
		error.style.display = 'none';
	}
}
function valorTermino(e){
	if(termino.checked == false){
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor acepta los terminos </li>';
		console.log('Por favor acepta los terminos');

		e.preventDefault();
	}else{
		error.style.display = 'none';
	}
}
function valorFormulario(e){
	error.innerHTML = '';
	valorNombre(e);
	 valorCorreo(e);
	valorSexo(e);
	valorTermino(e);
}
formulario.addEventListener('submit',valorFormulario);

























//}())