const form = document.getElementById("internshipForm");
const list = document.getElementById("applicationsList");

let applications = JSON.parse(localStorage.getItem("apps")) || [];

function addApplication() {
const company=document.getElementById("company").value;
const role=document.getElementById("role").value;
const status=document.getElementById("status").value;

 if(company === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    const application = {
        company: company,
        role: role,
        status: status,
        date: new Date().toLocaleDateString()
    };

 applications.push(application);

localStorage.setItem("apps",JSON.stringify(applications));

displayApps();

form.reset();

}

function loadApplications() {
    displayApps();
}

function displayApps(){

list.innerHTML="";

applications.forEach((app,index)=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML = `
            <h3>${app.company}</h3>
            <p><strong>Role:</strong> ${app.role}</p>
            <p><strong>Status:</strong> ${app.status}</p>
            <p><strong>Date:</strong> ${app.date}</p>
            <button onclick="deleteApplication(${index})">Delete</button>
        `;


list.appendChild(card);

});

}

function deleteApplication(index){

applications.splice(index,1);

localStorage.setItem("apps",JSON.stringify(applications));

displayApps();

}

loadApplications();
