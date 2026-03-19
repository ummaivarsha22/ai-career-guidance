function findCareer(){

let text=document.getElementById("skills").value.toLowerCase();

let career="";

if(text.includes("coding") || text.includes("java") || text.includes("python"))
career="Software Engineer";

else if(text.includes("design") || text.includes("creativity"))
career="UI/UX Designer";

else if(text.includes("math") || text.includes("data") || text.includes("statistics"))
career="Data Scientist";

else if(text.includes("communication") || text.includes("marketing"))
career="Digital Marketer";

else
career="Try adding more skills to analyze.";

document.getElementById("result").innerHTML=
"Recommended Career: "+career;

}
