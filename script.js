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