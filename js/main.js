

function changeBold(){
	
	if (document.getElementsByTagName("Textarea")[0].style.fontWeight=='normal') 
		document.getElementsByTagName("Textarea")[0].style.fontWeight='bold';
	else
	{
		document.getElementsByTagName("Textarea")[0].style.fontWeight='normal';
	}		
}

document.getElementsByClassName("button2")[0].addEventListener("click",function(){
	if (document.getElementsByTagName("Textarea")[0].style.fontStyle=='normal')
 
	document.getElementsByTagName("Textarea")[0].style.fontStyle='italic'

 else
{
	document.getElementsByTagName("Textarea")[0].style.fontStyle='normal';
}
});
function changeUnderline(){
		if (document.getElementsByTagName("Textarea")[0].style.textDecoration=='none') 
		document.getElementsByTagName("Textarea")[0].style.textDecoration='underline';
	else
	{
		document.getElementsByTagName("Textarea")[0].style.textDecoration='none';
	}	
	
}
function changeSize(){
	document.getElementsByTagName("Textarea")[0].style.fontSize=document.getElementById("font").value;

}
function changeFont(font){
	if (font=='Arial') {
		document.getElementsByTagName("Textarea")[0].style.fontFamily='Arial';
	}
	else if (font=='Times'){
		document.getElementsByTagName("Textarea")[0].style.fontFamily='Times';
	}	
}
  $(".bloc1 button").click(function(){
	 $("#ex1").show();
 })

