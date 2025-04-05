var subNames = document.querySelectorAll(".col-1 p");
var topics_list = document.getElementById("topics-list");
 const   Subjects_and_topics = {
    currentaffairs: [
            "0 Prologue",
            "1 Brief Background Of Pakistani Current Affairs",
            "2 relations",
            "3.1 Internation Political Security",
            "3.2 Internation Political Economy",
            "4 Foreign Policy Theory",
            "5 National Power and its Elements",
            "6 Balance Of Power",
            "7 Global Energy Politics, Europe and Ukrain",
            "8 Terrorism and its Resurgence",
            "9 Nuclear Politics In South Asia",
            "to do list",
        ],
        essay:[
            "Chapter 1 Guidlines on Essay in General",
            "Chapter 2 Guidlines on Expository Essay",
            "Chapter 3 Guidlines on Abstract Essay",
            "Chapter 4 Guidlines on Argumentative Essay",

        ],
        islamiyat:[
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "~$ Quranic Guidance on Good Governance"
        ],
        mathematics: [
            "Algebra",
            "Geometry",
            "Calculus",
            "Trigonometry",
            "Statistics"
          ]
    }

function update(name){

topics_list.innerHTML = '';


 var c = name.toLowerCase();
var g = c.replace(" ","")
    if(Subjects_and_topics[g]){
        var sub = Subjects_and_topics[g];
        sub.forEach(function(a){

          var div = document.createElement("div")
          div.classList.add("items")
          var icon = document.createElement("i") 
          icon.setAttribute("class", "fa-brands fa-readme me-3") 
          div.appendChild(icon)
          var  anc = document.createElement("a")
          anc.setAttribute("href","#")
          anc.innerText = a
          div.appendChild(anc)
          topics_list.appendChild(div)
          
         
        }
          
        )
    }
    document.getElementById("bage").textContent = name;
}
subNames.forEach(function (subject) {
    subject.addEventListener('click',function(){
       subNames.forEach(function(hi){
        hi.classList.remove("active")
       })
        update(this.textContent)
        this.classList.add("active")
    })
    if (subNames.length > 0) {
        subNames[0].click();
      }
})
