// NASA API KEY

const apiKey = "pYo8CZDY2J3DpKURm20gm2qZD0VjJWve8kMgF5FR";

// ISS TRACKER

async function getISSLocation(){

    try{

        const response =
        await fetch("https://api.wheretheiss.at/v1/satellites/25544");

        const data =
        await response.json();

        const latitude =
        data.latitude.toFixed(2);

        const longitude =
        data.longitude.toFixed(2);

        // DISPLAY DATA

        document.getElementById("iss-lat").innerText =
        `Latitude: ${latitude}`;

        document.getElementById("iss-long").innerText =
        `Longitude: ${longitude}`;

        // UPDATE MAP

        document.getElementById("iss-map").src =
        `https://maps.google.com/maps?q=${latitude},${longitude}&z=3&output=embed`;

    }

    catch(error){

        console.log(error);
    }
}

// RUN FUNCTION

getISSLocation();

// UPDATE EVERY 5 SECONDS

setInterval(getISSLocation, 5000);

// API URL

const apiUrl =
`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// FETCH DATA

fetch(apiUrl)

.then(response => response.json())

.then(data => {

    document.getElementById("space-image").src =
    data.url;

    document.getElementById("space-title").innerText =
    data.title;

    document.getElementById("space-description").innerText =
    data.explanation;

})

.catch(error => {
    console.log(error);
});
// SPACE QUIZ GAME

const quizData = [

{
    question:
    "Which planet is known as the Red Planet?",

    answers:
    ["Earth", "Mars", "Jupiter", "Venus"],

    correct:
    "Mars"
},

{
    question:
    "Which planet has the largest rings?",

    answers:
    ["Saturn", "Mercury", "Neptune", "Earth"],

    correct:
    "Saturn"
},

{
    question:
    "What is the hottest planet?",

    answers:
    ["Mars", "Venus", "Earth", "Uranus"],

    correct:
    "Venus"
},

{
    question:
    "Which galaxy contains our solar system?",

    answers:
    ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],

    correct:
    "Milky Way"
}

];

let currentQuestion = 0;

const questionEl =
document.getElementById("question");

const answerButtons =
document.querySelectorAll(".answer-btn");

const resultEl =
document.getElementById("quiz-result");

const nextBtn =
document.getElementById("next-btn");

// LOAD QUESTION

function loadQuestion(){

    resultEl.innerText = "";

    const currentQuiz =
    quizData[currentQuestion];

    questionEl.innerText =
    currentQuiz.question;

    answerButtons.forEach((button, index)=>{

        button.innerText =
        currentQuiz.answers[index];

        button.onclick = ()=>{

            if(button.innerText === currentQuiz.correct){

                resultEl.innerText =
                "✅ Correct Answer!";
            }

            else{

                resultEl.innerText =
                "❌ Wrong Answer!";
            }
        };
    });
}

// NEXT QUESTION

nextBtn.addEventListener("click", ()=>{

    currentQuestion++;

    if(currentQuestion >= quizData.length){

        currentQuestion = 0;
    }

    loadQuestion();
});

// START QUIZ

loadQuestion();
// PLANET MODAL

const planetData = {

    Mercury:
    "Closest planet to the Sun. Diameter: 4,879 km. Moons: 0. A year lasts only 88 Earth days.",
    
    Venus:
    "Hottest planet in the Solar System. Diameter: 12,104 km. Moons: 0. Surface temperature can exceed 460°C.",
    
    Earth:
    "Our home planet. Diameter: 12,742 km. Moons: 1. The only known world supporting life.",
    
    Mars:
    "The Red Planet. Diameter: 6,779 km. Moons: 2. Home to Olympus Mons, the largest volcano.",
    
    Jupiter:
    "Largest planet. Diameter: 139,820 km. Moons: 95+. Famous for the Great Red Spot storm.",
    
    Saturn:
    "Known for its rings. Diameter: 116,460 km. Moons: 140+. Mostly hydrogen and helium.",
    
    Uranus:
    "Rotates on its side. Diameter: 50,724 km. Moons: 27. An icy giant planet.",
    
    Neptune:
    "Farthest planet from the Sun. Diameter: 49,244 km. Moons: 14. Has extremely strong winds."
    
    };
    
    const modal =
    document.getElementById("planetModal");
    
    const modalTitle =
    document.getElementById("modalPlanetName");
    
    const modalInfo =
    document.getElementById("modalPlanetInfo");
    
    const closeBtn =
    document.querySelector(".close-btn");
    
    document.querySelectorAll(".solar-card")
    .forEach(card => {
    
    card.addEventListener("click", () => {
    
    const planet =
    card.dataset.planet;
    
    modalTitle.innerText =
    planet;
    
    modalInfo.innerText =
    planetData[planet];
    
    modal.style.display =
    "flex";
    
    });
    
    });
    
    closeBtn.addEventListener("click", () => {
    
    modal.style.display =
    "none";
    
    });
    
    window.addEventListener("click", (e) => {
    
    if(e.target === modal){
    
    modal.style.display =
    "none";
    
    }
    
    });
    // MISSION MODAL

const missionData = {

    Sputnik1:
    `Launch: 1957
    
    The first artificial satellite launched by the Soviet Union.
    
    Achievements:
    • Started the Space Age
    • Orbited Earth successfully
    • Triggered the space race`,
    
    Apollo11:
    `Launch: 1969
    
    Crew:
    Neil Armstrong
    Buzz Aldrin
    Michael Collins
    
    Achievements:
    • First Moon landing
    • First human steps on the Moon
    • Returned safely to Earth`,
    
    Voyager1:
    `Launch: 1977
    
    Achievements:
    • Explored Jupiter and Saturn
    • First spacecraft in interstellar space
    • Still transmitting data today`,
    
    ISS:
    `Started: 1998
    
    Achievements:
    • Largest human-made object in orbit
    • International collaboration
    • Continuous human presence in space`,
    
    Chandrayaan3:
    `Launch: 2023
    
    Achievements:
    • Successful Moon south pole landing
    • Made India the 4th nation to soft-land on the Moon
    • Historic ISRO achievement`,
    
    Artemis:
    `Current NASA Moon Program
    
    Goals:
    • Return humans to the Moon
    • First woman on the Moon
    • Prepare future Mars missions`
    };
    
    const missionModal =
    document.getElementById("missionModal");
    
    const missionTitle =
    document.getElementById("missionTitle");
    
    const missionInfo =
    document.getElementById("missionInfo");
    
    const missionClose =
    document.querySelector(".mission-close-btn");
    
    document.querySelectorAll(".timeline-content")
    .forEach(card => {
    
    card.addEventListener("click", () => {
    
    const mission =
    card.dataset.mission;
    
    missionTitle.innerText =
    mission;
    
    missionInfo.innerText =
    missionData[mission];
    
    missionModal.style.display =
    "flex";
    
    });
    
    });
    
    missionClose.addEventListener("click", () => {
    
    missionModal.style.display =
    "none";
    
    });
    
    window.addEventListener("click", (e) => {
    
    if(e.target === missionModal){
    
    missionModal.style.display =
    "none";
    
    }
    
    });
    // SPACE NEWS

const newsApiKey = "1626a2393c6748e8910fe54810ccce36";

async function loadSpaceNews(){

    try{

        const response =
        await fetch(
        `https://newsapi.org/v2/everything?q=NASA&language=en&sortBy=publishedAt&pageSize=6&apiKey=${newsApiKey}`
);
        

        const data =
        await response.json();

        const container =
        document.getElementById("news-container");

        container.innerHTML = "";

        data.articles.forEach(article => {

            container.innerHTML += `

            <div class="news-card">

                <h3>${article.title}</h3>

                <p>
                    ${article.description || "No description available."}
                </p>

                <a href="${article.url}" target="_blank">
                    Read More →
                </a>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);
    }
}

loadSpaceNews();