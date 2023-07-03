// your code here
let heading = document.getElementById("url");
const button= document.getElementById("button");

button.addEventListener("click",(event) => {
	event.preventDefault();
	heading.append("?name="+name.value+"&year="+year.value);
})
