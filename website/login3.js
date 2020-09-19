function validate()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
		if(username == "batlela" && password == "khokho")
			{
				window.open("FIRST.html",'newwindow');
			}
		else
		{
			alert("Error");
		}
}