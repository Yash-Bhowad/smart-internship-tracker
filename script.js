const form = document.getElementById("internshipForm");
const list = document.getElementById("applicationList");

let applications = JSON.parse(localStorage.getItem("apps")) || [];

function displayApps(){

list.innerHTML="";

applications.forEach(app=>{

const div=document.createElement("div");

div.className="card";

div.innerHTML=`
<h3>${app.company}</h3>
<p>${app.role}</p>
<p>Status: ${app.status}</p>
`;

list.appendChild(div);

});

}

form.addEventListener("submit",function(e){

e.preventDefault();

const company=document.getElementById("company").value;
const role=document.getElementById("role").value;
const status=document.getElementById("status").value;

applications.push({company,role,status});

localStorage.setItem("apps",JSON.stringify(applications));

displayApps();

form.reset();

});

displayApps();