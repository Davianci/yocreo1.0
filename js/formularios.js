function letras(evt)
{


	var charCode =evt.keyCode;
        if (charCode > 31 && charCode < 48 || charCode > 57)
	{
	      
	return true;
 	}

	return false;
       
	
}

function numeros(evt)
{


	var charCode =evt.keyCode;
        if (charCode > 46 && charCode < 65)
	{
	      
	return true;
 	}

	return false;
       
	
}

function check(v){
if (v != document.getElementById("email").value) {
	document.getElementById("rep-email").setCustomValidity('El email debe coincidir');
}else {
// input is valid -- reset the error message
document.getElementById("rep-email").setCustomValidity('');
}
}