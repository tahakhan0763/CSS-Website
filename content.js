
// Your existing variables
var subNames = document.querySelectorAll(".col-1 p");
var topics_list = document.getElementById("topics-list");

// Enhanced data structure with links
const Subjects_and_topics = {
    currentaffairs: [
        { name: "1 Brief Background Of Pakistani Current Affairs", link: "https://docs.google.com/document/d/1AvTMOf0uUhHK1pupGBUCWp1A5DrGUQzp/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "2 relations", link: "https://docs.google.com/document/d/1bVUNYG_BgopgV5y74xGdG-7O7gH5isML/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "3.1 Internation Political Security", link: "https://docs.google.com/document/d/1MdobWsu2hwDo2GGop79t1aiCOxnHluO8/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "3.2 Internation Political Economy", link: "https://docs.google.com/document/d/1ZyyPHdN5VkKAwDEtl2Xg0MPreAyjJSeo/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "4 Foreign Policy Theory", link: "https://docs.google.com/document/d/1ZyyPHdN5VkKAwDEtl2Xg0MPreAyjJSeo/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "5 National Power and its Elements", link: "https://docs.google.com/document/d/1joWvqw1jBz5qWdF1CV8eHQrQavWZBrdu/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "6 Balance of Power", link: "https://docs.google.com/document/d/1aHWkXFqESZePtUGNkDBSjruqG99OY4Lf/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "7 Global Energy Politics, Europe and Ukrain", link: "https://docs.google.com/document/d/1d9p_o_sqU-MgU9vtg7cG4uFWNNntyB8a/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "8 Terrorism and its Resurgence", link: "https://docs.google.com/document/d/1TsHbWyJMQ7wMPd1sPJOw8ICpKBQx3Aij/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "9 Nuclear Politics in South Asia", link: "https://docs.google.com/document/d/1h9XWLcpC5OCc8XeJqB5kJOWCeqSMpEeB/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "to do", link: "https://docs.google.com/document/d/1h9XWLcpC5OCc8XeJqB5kJOWCeqSMpEeB/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" }
    ],
    essay: [
        { name: "Chapter 1 Guidlines on Essay in General", link: "https://docs.google.com/document/d/1FEerrLAwFd6o5B3cMDz_E4aIwIRDmoE2/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "Chapter 2 Guidlines on Expository Essay", link: "https://docs.google.com/document/d/17Nq2QgW4PjD1T9X211hOU-mMmojWRfDH/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "Chapter 3 Guidlines on Abstract Essay", link: "https://docs.google.com/document/d/1usPm6HV3zCgRTElhglVhMdYLHbCyelI0/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" },
        { name: "Chapter 4 Guidlines on Argumentative Essay", link: "https://docs.google.com/document/d/13DmcR1Jc6M2MA_Pb4V1qbo2An6WAIV5w/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" }
    ],
    islamiyat: [
        { name: "I", link: "https://drive.google.com/drive/folders/1zZp-x7sh-JMopMMi7TBIHNwMluTsV5Hc?usp=sharing" },
        { name: "II", link: "https://drive.google.com/drive/folders/1GnyN2azHmWxtxJXIpaOO49QUtM5xjTLS?usp=sharing" },
        { name: "III", link: "https://drive.google.com/drive/folders/11ngF05HdZM4vahlxKYKetjz2OPBjeWTR?usp=sharing" },
        { name: "IV", link: "https://drive.google.com/drive/folders/11ngF05HdZM4vahlxKYKetjz2OPBjeWTR?usp=sharing" },
        { name: "V", link: "https://drive.google.com/drive/folders/1KY63fNje1onavNTmVlDv3Hr-tZjcQSL-?usp=sharing" },
        { name: "VI", link: "https://drive.google.com/drive/folders/1Z3qoF6nIoH1T2EsMjl6iohnVir0mtuob?usp=sharing" },
        { name: "VII", link: "https://drive.google.com/drive/folders/1pUnPsdrJ9J0eKJKyYjgzosS9E77x5yPf?usp=sharing" },
        { name: "~$2 QURANIC GUIDANCE ON GOOD GOVERNANCE.docx", link: "https://docs.google.com/document/d/1BdkEFi9hnj6RjeXAzJPESF894FOQsaxN/edit?usp=sharing&ouid=105215736069432840294&rtpof=true&sd=true" }
    ],
    mathematics: [
        { name: "Algebra", link: "/mathematics/algebra" },
        { name: "Geometry", link: "/mathematics/geometry" },
        { name: "Calculus", link: "/mathematics/calculus" },
        { name: "Trigonometry", link: "/mathematics/trigonometry" }
    ]
};

// Modified update function to handle links
function update(name) {
    topics_list.innerHTML = '';
    var c = name.toLowerCase();
    var g = c.replace(" ", "");
    
    if(Subjects_and_topics[g]) {
        var sub = Subjects_and_topics[g];
        sub.forEach(function(topic) {
            var div = document.createElement("div");
            div.classList.add("items");
            
            var icon = document.createElement("i");
            icon.setAttribute("class", "fa-brands fa-readme me-3");
            div.appendChild(icon);
            
            var anc = document.createElement("a");
            anc.setAttribute("href", topic.link);
            anc.innerText = topic.name;
            div.appendChild(anc);
            
            topics_list.appendChild(div);
        });
    }
    document.getElementById("bage").textContent = name;
}

// Your existing event listeners
subNames.forEach(function(subject) {
    subject.addEventListener('click', function() {
        subNames.forEach(function(hi) {
            hi.classList.remove("active");
        });
        update(this.textContent);
        this.classList.add("active");
    });
    
    if (subNames.length > 0) {
        subNames[0].click();
    }
});
