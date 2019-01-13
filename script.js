// Адаптивность меню
menu.onclick = function myFunction(){
	// x - блок с идентификатором topnav
	var x = document.getElementById("myTopnav");

	if(x.className === "topnav")
	{
		x.className += " responsive";
	}
	else
	{
		x.className = "topnav";
	}
}


// Вывод выбранного значения источника в консоль:

/*var radio = document.getElementsByName('enc_cam');

for (var i = 0; i < radio.length; i++) {
	radio[i].onchange = testRadio;
}

function testRadio(){
	console.log (this.value);
}*/


// Работа с кнопкой Start:

function record_now_505(){
	var campus, auditorium, ssource, data;
	ssource = "";
	var r = document.getElementsByName('enc_cam');
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked){
			ssource = r[i].value;
			break;
		}
	}
	if (ssource == "enc"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "P505",
		  	ssource: "enc"
		};
	}
	else if (ssource == "cam"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "P505",
		  	ssource: "cam"
		};
	}
	
	var str = JSON.stringify(data);
	alert(str);
}

function record_now_500(){
	var campus, auditorium, ssource, data;
	ssource = "";
	var r = document.getElementsByName('enc_cam');
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked){
			ssource = r[i].value;
			break;
		}
	}
	if (ssource == "enc"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "P500",
		  	ssource: "enc"
		};
	}
	else if (ssource == "cam"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "P500",
		  	ssource: "cam"
		};
	}
	
	var str = JSON.stringify(data);
	alert(str);
}

function record_now_401(){
	var campus, auditorium, ssource, data;
	ssource = "";
	var r = document.getElementsByName('enc_cam');
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked){
			ssource = r[i].value;
			break;
		}
	}
	if (ssource == "enc"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "C401",
		  	ssource: "enc"
		};
	}
	else if (ssource == "cam"){
		data = {
		  	campus: "FKMD",
		  	auditorium: "C401",
		  	ssource: "cam"
		};
	}
	
	var str = JSON.stringify(data);
	alert(str);
}

function record_now_513(){
	var campus, auditorium, ssource, data;
	ssource = "";
	var r = document.getElementsByName('enc_cam');
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked){
			ssource = r[i].value;
			break;
		}
	}
	if (ssource == "enc"){
		data = {
		  	campus: "MIEM",
		  	auditorium: "513",
		  	ssource: "enc"
		};
	}
	else if (ssource == "cam"){
		data = {
		  	campus: "MIEM",
		  	auditorium: "513",
		  	ssource: "cam"
		};
	}
	
	var str = JSON.stringify(data);
	alert(str);
}
