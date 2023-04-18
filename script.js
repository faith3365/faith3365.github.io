function seeMore(){
	let talkP=document.getElementById("talk");
	let linkA=document.getElementById("link");
	
	if(talkP.classList.contains("talk")){
		talkP.classList.remove("talk");
		talkP.classList.add("hide");
		linkA.innerHTML = "See More...";
	}
	else{
		talkP.classList.remove("hide");
		talkP.classList.add("talk");
		linkA.innerHTML = "Show Less...";
	}
}
function showMore(){
	let talkP=document.getElementById("talks");
	let linkA=document.getElementById("links");
	
	if(talkP.classList.contains("talk")){
		talkP.classList.remove("talk");
		talkP.classList.add("hide");
		linkA.innerHTML = "See More...";
	}
	else{
		talkP.classList.remove("hide");
		talkP.classList.add("talk");
		linkA.innerHTML = "Show Less...";
	}
}
function showScore(){
	let resultsDiv=document.getElementById("results");
	let q1=document.getElementById("txt-q1").value;
	let q2=document.getElementById("txt-q2").value;
	let q3=document.getElementById("txt-q3").value;
	let q4=document.getElementById("txt-q4").value;
	let wrong=document.getElementById("wrong").value;
	let correct=document.getElementById("correct").value;
	
	resultsDiv.classList.remove("hidden");
	resultsDiv.innerHTML+="<p>"+q1+"</p>";
	resultsDiv.innerHTML+="<p>"+q2+"</p>";
	resultsDiv.innerHTML+="<p>"+q3+"</p>";
	resultsDiv.innerHTML+="<p>"+q4+"</p>";
	if(optionId==wrong){
		results.innerHTML="incorrect";
	}
	else if(optionId==correct){
		results.innerHTML="correct";
	}
}
setInterval(changeSlide,10000);

function changeSlide(){
	let miloImg=document.getElementById("milo");
	let num=miloImg.getAttribute("data-num");
	if(num ==1){
		miloImg.setAttribute("data-num",2);
		miloImg.src="images/milolick.jpeg";
	}
	else if(num ==2){
		miloImg.setAttribute("data-num",3);
		miloImg.src="images/miloscary.jpeg";
	}
	else if(num ==3){
		miloImg.setAttribute("data-num",4);
		miloImg.src="images/milotree.jpeg";
	}
	else if(num==4){
		miloImg.setAttribute("data-num",5);
		miloImg.src="images/miloyawn.jpeg";
	}
	else if(num==5){
		miloImg.setAttribute("data-num",1);
		miloImg.src="images/milocry.jpeg";
	}	
}
