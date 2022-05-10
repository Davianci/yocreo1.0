function crear(){
	prev=document.createElement('div');
	prev.id="shadow";
	prev.setAttribute('style','background-color:#000; filter:Alpha(opacity=80);opacity:0.8; width:100%; height:1300px; top:0px; bottom:0px; position:absolute; z-index:10;');
	prev.setAttribute('onclick','eliminar()');
	document.body.appendChild(prev);
	ver=document.createElement('iframe');
	ver.id="ver";
	ver.name="carga";
	ver.setAttribute('onclick','eliminar()');
	ver.setAttribute('style','width:800px; height:600px; position:absolute; z-index:11; top: 250px; left:200px');
	document.body.appendChild(ver);
}
function eliminar(){
	document.body.removeChild(prev);
	document.body.removeChild(ver);
}