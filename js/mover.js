function mover(bot)
{
	var bajo;
	switch(bot)
	{
		case 1: 
		bajo=document.getElementById("img_bajo1");
		bajo.setAttribute('style','top:80px');
		
		break;
		case 2: 
		bajo=document.getElementById("img_bajo2");
		bajo.setAttribute('style','top:-80px');
		
		break;
		case 3: 
		bajo=document.getElementById("img_bajo3");
		bajo.setAttribute('style','top:80px');
		
		break;
	}
}
function devolver(bot)
{
	var bajo;
	switch(bot)
	{
		case 1: 
		bajo=document.getElementById("img_bajo1");
		bajo.setAttribute('style','top:7px');
		
		break;
		case 2: 
		bajo=document.getElementById("img_bajo2");
		bajo.setAttribute('style','top:3px');
		
		break;
		case 3: 
		bajo=document.getElementById("img_bajo3");
		bajo.setAttribute('style','top:11px');
		
		break;
	}
}