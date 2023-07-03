// your code here
let heading = document.getElementById("url");
const form = document.querySelector("form");
const name = document.getElementById("name");

form.addEventListener("submit",(event) => {
	event.preventDefault();
	heading.append("?name="+name.value+"&year="+year.value);
})
