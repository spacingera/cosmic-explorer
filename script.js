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