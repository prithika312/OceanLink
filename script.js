// ==========================================
// OCEANLINK - JAVASCRIPT
// ==========================================


// ==========================================
// 1. RANDOM OCEAN FACTS
// ==========================================

const oceanFacts = [
    "The ocean covers more than 70% of Earth's surface.",

    "Coral reefs support about 25% of all marine species.",

    "Mangroves provide important nursery habitats for many fish and marine animals.",

    "Seagrass meadows are important habitats for turtles, fish and many other marine species.",

    "The ocean produces a large share of the oxygen we breathe through marine plants and organisms.",

    "Plastic pollution can harm marine animals when they swallow plastic or become entangled in it.",

    "Coral reefs help protect coastlines by reducing the energy of waves.",

    "Healthy oceans provide food, jobs, transportation and recreational opportunities for millions of people.",

    "Mauritius has extensive coral reefs that help protect its lagoons and coastline.",

    "Sea turtles can travel thousands of kilometres between feeding and nesting areas.",

    "Mangrove forests can help protect coastal areas from erosion and storms.",

    "Reducing single-use plastics is one way individuals can help reduce marine pollution.",

    "Overfishing can reduce fish populations and disturb the balance of marine ecosystems.",

    "Ocean warming and ocean acidification are major challenges facing coral reefs.",

    "Every person can contribute to ocean conservation through everyday choices."
];

const factText = document.getElementById("factText");
const newFactButton = document.getElementById("newFact");

function showRandomFact() {

    const randomIndex =
        Math.floor(Math.random() * oceanFacts.length);

    factText.textContent =
        oceanFacts[randomIndex];
}

if (newFactButton) {

    newFactButton.addEventListener(
        "click",
        showRandomFact
    );

}

if (factText) {

    showRandomFact();

}


// ==========================================
// 2. QUIZ QUESTIONS
// ==========================================

const quizQuestions = [

    {
        question:
            "How much of Earth's surface is covered by the ocean?",

        options: [
            "About 10%",
            "About 30%",
            "More than 70%",
            "About 50%"
        ],

        answer: 2
    },


    {
        question:
            "Which ecosystem is famous for having corals and supporting many marine species?",

        options: [
            "Desert",
            "Coral reef",
            "Mountain",
            "Grassland"
        ],

        answer: 1
    },


    {
        question:
            "Which plant ecosystem grows in shallow coastal waters and provides habitat for marine life?",

        options: [
            "Seagrass",
            "Pine forest",
            "Bamboo",
            "Cactus"
        ],

        answer: 0
    },


    {
        question:
            "Which of these is a major source of marine pollution?",

        options: [
            "Plastic waste",
            "Sunlight",
            "Sea water",
            "Natural waves"
        ],

        answer: 0
    },


    {
        question:
            "Why are mangroves important?",

        options: [
            "They only provide shade",
            "They protect coasts and provide habitats",
            "They increase plastic pollution",
            "They prevent all storms"
        ],

        answer: 1
    },


    {
        question:
            "What can overfishing cause?",

        options: [
            "More fish everywhere",
            "Healthy coral growth automatically",
            "Declining fish populations",
            "Cleaner beaches"
        ],

        answer: 2
    },


    {
        question:
            "Which animal is commonly associated with coral reef ecosystems?",

        options: [
            "Clownfish",
            "Camel",
            "Eagle",
            "Elephant"
        ],

        answer: 0
    },


    {
        question:
            "What is one way to reduce plastic pollution?",

        options: [
            "Use more single-use plastics",
            "Throw rubbish into rivers",
            "Reduce and reuse plastic items",
            "Leave rubbish on beaches"
        ],

        answer: 2
    },


    {
        question:
            "What is ocean acidification?",

        options: [
            "The ocean becoming more acidic",
            "The ocean becoming freshwater",
            "The ocean disappearing",
            "The ocean becoming colder"
        ],

        answer: 0
    },


    {
        question:
            "Which activity can help protect the ocean?",

        options: [
            "Littering",
            "Beach clean-ups",
            "Destroying coral",
            "Illegal fishing"
        ],

        answer: 1
    },


    {
        question:
            "Which marine animal can be found around Mauritius?",

        options: [
            "Green turtle",
            "Polar bear",
            "Penguin",
            "Walrus"
        ],

        answer: 0
    },


    {
        question:
            "Why are coral reefs important to coastal communities?",

        options: [
            "They can help protect coastlines",
            "They produce plastic",
            "They remove all fish",
            "They increase erosion"
        ],

        answer: 0
    },


    {
        question:
            "What does sustainable fishing aim to do?",

        options: [
            "Catch every fish possible",
            "Protect fish populations for the future",
            "Destroy marine habitats",
            "Increase ocean pollution"
        ],

        answer: 1
    },


    {
        question:
            "Which action is better for a healthy beach?",

        options: [
            "Leave rubbish behind",
            "Throw bottles into the sea",
            "Take your rubbish home",
            "Damage marine life"
        ],

        answer: 2
    },


    {
        question:
            "What is the main message of OceanLink?",

        options: [
            "The ocean belongs only to scientists",
            "People can learn about and help protect the ocean",
            "The ocean does not need protection",
            "Marine life is not important"
        ],

        answer: 1
    }

];


// ==========================================
// 3. QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;


// ==========================================
// 4. QUIZ ELEMENTS
// ==========================================

const quizContainer =
    document.getElementById("quizContainer");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const quizNext =
    document.getElementById("quizNext");

const quizProgress =
    document.getElementById("quizProgress");

const quizScore =
    document.getElementById("quizScore");

const quizProgressFill =
    document.getElementById("quizProgressFill");

const quizResult =
    document.getElementById("quizResult");


// ==========================================
// 5. LOAD QUESTION
// ==========================================

function loadQuestion() {

    const question =
        quizQuestions[currentQuestion];


    // Question text

    quizQuestion.textContent =
        question.question;


    // Question number

    quizProgress.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;


    // Score

    quizScore.textContent =
        `Score: ${score}`;


    // Progress bar

    const progress =
        ((currentQuestion) /
            quizQuestions.length) * 100;

    quizProgressFill.style.width =
        `${progress}%`;


    // Clear old answers

    quizOptions.innerHTML = "";


    // Hide next button

    quizNext.style.display = "none";


    // Create answer buttons

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.textContent =
                option;

            button.classList.add(
                "quiz-option"
            );


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(index);

                }
            );


            quizOptions.appendChild(
                button
            );

        }
    );

}


// ==========================================
// 6. SELECT ANSWER
// ==========================================

function selectAnswer(selectedIndex) {

    const question =
        quizQuestions[currentQuestion];


    const optionButtons =
        document.querySelectorAll(
            ".quiz-option"
        );


    // Prevent multiple answers

    optionButtons.forEach(
        button => {

            button.disabled = true;

        }
    );


    // Correct answer

    if (
        selectedIndex ===
        question.answer
    ) {

        score++;

        optionButtons[
            selectedIndex
        ].classList.add(
            "correct"
        );

    }


    // Wrong answer

    else {

        optionButtons[
            selectedIndex
        ].classList.add(
            "wrong"
        );


        optionButtons[
            question.answer
        ].classList.add(
            "correct"
        );

    }


    // Update score

    quizScore.textContent =
        `Score: ${score}`;


    // Show next button

    quizNext.style.display =
        "inline-block";


    // Change button text on final question

    if (
        currentQuestion ===
        quizQuestions.length - 1
    ) {

        quizNext.textContent =
            "See My Result →";

    }

}


// ==========================================
// 7. NEXT QUESTION
// ==========================================

quizNext.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion <
            quizQuestions.length
        ) {

            loadQuestion();

        }

        else {

            showQuizResult();

        }

    }
);


// ==========================================
// 8. QUIZ RESULT
// ==========================================

function showQuizResult() {

    quizContainer.style.display =
        "none";


    quizResult.style.display =
        "block";


    const percentage =
        Math.round(
            (score /
                quizQuestions.length) *
            100
        );


    let level;
    let icon;
    let message;


    // Ocean Explorer

    if (score <= 5) {

        level =
            "Ocean Explorer";

        icon =
            "🌊";

        message =
            "Every Ocean Guardian starts with curiosity. Keep exploring, learning and discovering!";

    }


    // Ocean Guardian

    else if (score <= 10) {

        level =
            "Ocean Guardian";

        icon =
            "🐢";

        message =
            "Great work! You understand many of the challenges facing our oceans. Now turn your knowledge into action.";

    }


    // Ocean Champion

    else {

        level =
            "Ocean Champion";

        icon =
            "🪸";

        message =
            "Amazing! Your ocean knowledge is impressive. Keep inspiring others and becoming a voice for our blue planet.";

    }


    quizResult.innerHTML = `

        <div class="result-icon">
            ${icon}
        </div>

        <p class="eyebrow">
            YOUR OCEANLINK RESULT
        </p>

        <h3>
            ${level}
        </h3>

        <div class="result-score">
            ${score} / ${quizQuestions.length}
        </div>

        <p class="result-percentage">
            ${percentage}% correct
        </p>

        <p class="result-message">
            ${message}
        </p>

        <div class="result-actions">

            <button
                id="restartQuiz"
                class="btn btn-primary"
            >
                Try Again →
            </button>

            <a
                href="#action"
                class="btn btn-secondary"
            >
                Take Action →
            </a>

        </div>

    `;


    document
        .getElementById("restartQuiz")
        .addEventListener(
            "click",
            restartQuiz
        );

}


// ==========================================
// 9. RESTART QUIZ
// ==========================================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;


    quizContainer.style.display =
        "block";


    quizResult.style.display =
        "none";


    quizNext.textContent =
        "Next Question →";


    loadQuestion();

}


// ==========================================
// 10. START QUIZ
// ==========================================

if (
    quizContainer &&
    quizQuestion &&
    quizOptions &&
    quizNext &&
    quizProgress &&
    quizScore &&
    quizProgressFill &&
    quizResult
) {

    loadQuestion();

}
// ==========================================
// 11. DISCOVER SECTIONS
// ==========================================

function showDiscover(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (!section) {
        return;
    }

    // Close all detail sections

    const allDetails =
        document.querySelectorAll(
            ".discover-detail"
        );

    allDetails.forEach(
        detail => {
            detail.classList.remove("active");
        }
    );


    // Open selected section

    section.classList.add("active");


    // Smoothly scroll to the information

    section.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
/* ========================================
   MAURITIUS LOCATION EXPLORER
======================================== */



    // Hide all location details
    const locations = document.querySelectorAll(".location-detail");

    locations.forEach(function(location) {
        location.classList.remove("active");
    });


    // Remove active state from all buttons
    const buttons = document.querySelectorAll(".location-button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });


   // ========================================
// SHOW SELECTED OCEANLINK LOCATION
// ========================================

function showLocation(locationId) {

    // Hide all location details
    const locations = document.querySelectorAll(".location-detail");

    locations.forEach(function(location) {
        location.classList.remove("active");
    });

    // Remove active state from all buttons
    const buttons = document.querySelectorAll(".location-button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Show selected location
    const selectedLocation = document.getElementById(locationId);

    if (selectedLocation) {
        selectedLocation.classList.add("active");
    }

    // Activate selected button
    buttons.forEach(function(button) {

        const buttonText = button.textContent
            .trim()
            .toLowerCase();

        if (
            (locationId === "bluebay" && buttonText.includes("blue bay")) ||
            (locationId === "balaclava" && buttonText.includes("balaclava")) ||
            (locationId === "pointedesny" && buttonText.includes("pointe d'esny")) ||
            (locationId === "lemorne" && buttonText.includes("le morne"))
        ) {
            button.classList.add("active");
        }

    });

}
/* ========================================
 INTERACTIVE MAURITIUS MAP
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Make sure Leaflet is available
    if (typeof L === "undefined") {
        console.log("Leaflet has not loaded yet.");
        return;
    }
   // Create the map
const map = L.map("mauritiusMap").setView(
    [-20.25, 57.55],
    9
);

    // Add OpenStreetMap tiles
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);


    // ========================================
    // OCEANLINK LOCATIONS
    // ========================================

   // ========================================
// EIGHT MARINE PROTECTED AREAS OF MAURITIUS
// Marker positions are approximate
// ========================================

const marineLocations = [

    {
        name: "Blue Bay Marine Park",
        type: "Marine Park",
        coordinates: [-20.4426, 57.7176],
        description:
            "Located in southeast Mauritius, Blue Bay Marine Park is known for its coral reefs and rich marine biodiversity."
    },

    {
        name: "Balaclava Marine Park",
        type: "Marine Park",
        coordinates: [-20.0835, 57.5085],
        description:
            "A protected marine environment on the northwest coast, containing important coastal and marine habitats."
    },

    {
        name: "Port Louis Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.1600, 57.4900],
        description:
            "A designated fishing reserve in the Port Louis coastal area."
    },

    {
        name: "Black River Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.3600, 57.3700],
        description:
            "A designated fishing reserve along the southwest coast of Mauritius."
    },

    {
        name: "Trou d'Eau Douce Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.2400, 57.7900],
        description:
            "A designated fishing reserve on the eastern coast of Mauritius."
    },

    {
        name: "Poste Lafayette Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.1300, 57.7500],
        description:
            "A designated fishing reserve along the northeast coast."
    },

    {
        name: "Poudre d'Or Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.0750, 57.6900],
        description:
            "A designated fishing reserve on the northern coast of Mauritius."
    },

    {
        name: "Grand Port Fishing Reserve",
        type: "Fishing Reserve",
        coordinates: [-20.3900, 57.7200],
        description:
            "A designated fishing reserve in the southeast of Mauritius. The reserve includes Zone A and Zone B."
    }

];

// ========================================
// ADD MARINE PROTECTED AREA MARKERS
// ========================================

marineLocations.forEach(function (location) {

    const popupContent = `
        <div class="map-popup">

            <h3>${location.name}</h3>

            <p><strong>${location.type}</strong></p>

            <p>${location.description}</p>

            <br>

            <strong>🌊 Protect our ocean.</strong>

        </div>
    `;

    L.marker(location.coordinates)
        .addTo(map)
        .bindPopup(popupContent);

});;

});
/* ========================================
   OCEANLINK 7 DAY CHALLENGE
======================================== */

const challengeItems = document.querySelectorAll(
    ".challenge-item input"
);

const challengeCount = document.getElementById(
    "challengeCount"
);

const challengeComplete = document.getElementById(
    "challengeComplete"
);


function updateChallenge() {

    const completed = document.querySelectorAll(
        ".challenge-item input:checked"
    ).length;

    challengeCount.textContent = `${completed} / 7`;

    if (completed === 7) {
        challengeComplete.classList.add("show");
    } else {
        challengeComplete.classList.remove("show");
    }
}


challengeItems.forEach(function (item) {

    item.addEventListener("change", updateChallenge);

});


/* ========================================
   OCEANLINK PLEDGE
======================================== */

const pledgeButton = document.getElementById(
    "pledgeButton"
);

const pledgeMessage = document.getElementById(
    "pledgeMessage"
);


if (pledgeButton) {

    pledgeButton.addEventListener("click", function () {

        pledgeMessage.textContent =
            "🌊 Thank you for making the OceanLink Pledge!";

        pledgeButton.textContent =
            "Pledge Made ✓";

        pledgeButton.disabled = true;

    });

}/* ========================================
   CLEAN THE BEACH GAME
======================================== */

const litterItems = document.querySelectorAll(".litter");

const beachScore = document.getElementById("beachScore");

const beachMessage = document.getElementById(
    "beachMessage"
);

const resetBeach = document.getElementById(
    "resetBeach"
);


function updateBeachGame() {

    const cleaned = document.querySelectorAll(
        ".litter.cleaned"
    ).length;

    const total = litterItems.length;

    const percentage = Math.round(
        (cleaned / total) * 100
    );

    beachScore.textContent = `${percentage}%`;

    if (percentage === 100) {

        beachMessage.textContent =
            "🎉 Amazing! The beach is clean! 🌊🐢";

    } else {

        beachMessage.textContent =
            `Great job! ${total - cleaned} pieces of litter left.`;

    }

}


litterItems.forEach(function (item) {

    item.addEventListener("click", function () {

        item.classList.add("cleaned");

        updateBeachGame();

    });

});


if (resetBeach) {

    resetBeach.addEventListener("click", function () {

        litterItems.forEach(function (item) {

            item.classList.remove("cleaned");

        });

        beachScore.textContent = "0%";

        beachMessage.textContent =
            "Click the litter to clean the beach! 🌊";

    });

}/* ========================================
   OCEAN KNOWLEDGE HUB
======================================== */

const knowledgeTopics = {

    corals: {
        icon: "🪸",
        label: "CORAL REEFS",
        title: "Living Cities Beneath the Waves",
        text:
            "Coral reefs are complex marine ecosystems built around colonies of tiny coral animals called polyps. They provide shelter and feeding areas for many marine organisms and are closely connected to the health of tropical coastal environments."
    },

    mangroves: {
        icon: "🌿",
        label: "MANGROVES",
        title: "Nature's Coastal Guardians",
        text:
            "Mangroves grow where land meets the sea. Their roots create habitats for marine life and can help protect coastlines from waves and erosion. Healthy mangrove forests are valuable parts of coastal ecosystems."
    },

    seagrasses: {
        icon: "🌱",
        label: "SEAGRASSES",
        title: "Underwater Meadows",
        text:
            "Seagrass meadows are flowering plants that live underwater. They provide food and shelter for marine organisms and form an important part of many shallow coastal ecosystems."
    },

    "marine-life": {
        icon: "🐢",
        label: "MARINE LIFE",
        title: "A World Full of Life",
        text:
            "Our oceans support an extraordinary variety of life, from tiny plankton to large marine animals. Healthy habitats such as coral reefs, mangroves and seagrass meadows help many of these species survive."
    },

    pollution: {
        icon: "🗑️",
        label: "MARINE POLLUTION",
        title: "Keeping Waste Out of the Ocean",
        text:
            "Plastic, litter and other forms of pollution can enter rivers, beaches and coastal waters. Reducing waste, using resources responsibly and keeping our surroundings clean can help reduce pressure on marine ecosystems."
    },

    climate: {
        icon: "🌡️",
        label: "CLIMATE CHANGE",
        title: "A Changing Ocean",
        text:
            "Climate change affects ocean temperatures, sea levels and marine ecosystems. Coral reefs and coastal communities can be particularly vulnerable to environmental changes, making climate awareness and responsible action increasingly important."
    },

    fishing: {
        icon: "🎣",
        label: "SUSTAINABLE FISHING",
        title: "Fishing for the Future",
        text:
            "Sustainable fishing aims to provide food and livelihoods while allowing fish populations and marine ecosystems to remain healthy. Responsible practices can help ensure that ocean resources remain available for future generations."
    },

    "blue-economy": {
        icon: "💙",
        label: "BLUE ECONOMY",
        title: "People and Ocean — Together",
        text:
            "The blue economy explores ways of generating social and economic benefits from ocean resources while protecting marine ecosystems. Sustainable tourism, fisheries, renewable energy and other ocean-related activities can all play a role."
    }

};


function showKnowledge(topicId) {

    const topic = knowledgeTopics[topicId];

    if (!topic) {
        return;
    }


    const detailIcon =
        document.getElementById("knowledgeDetailIcon");

    const detailLabel =
        document.getElementById("knowledgeDetailLabel");

    const detailTitle =
        document.getElementById("knowledgeDetailTitle");

    const detailText =
        document.getElementById("knowledgeDetailText");


    detailIcon.textContent = topic.icon;

    detailLabel.textContent = topic.label;

    detailTitle.textContent = topic.title;

    detailText.textContent = topic.text;


    const details =
        document.getElementById("knowledgeDetails");

    details.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// =========================
// BACK TO TOP BUTTON
// =========================

window.addEventListener("load", function () {

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
    });
// =========================================
// STEP 20.10 - ROTATING OCEAN FACTS
// =========================================

window.addEventListener("load", function () {

    const oceanFact = document.getElementById("rotatingOceanFact");
    const nextFactButton = document.getElementById("nextOceanFact");

    const oceanFacts = [
        "The ocean covers more than 70% of our planet.",
        "Coral reefs provide important habitats for marine life.",
        "Mangroves help protect coastlines from waves and erosion.",
        "Seagrass meadows provide food and shelter for many marine species.",
        "The ocean plays an important role in regulating Earth's climate.",
        "Healthy oceans support people, communities and livelihoods.",
        "Reducing plastic pollution can help protect marine ecosystems.",
        "Small actions by many people can contribute to healthier oceans."
    ];

    let currentFact = 0;

    function showNextFact() {

        currentFact++;

        if (currentFact >= oceanFacts.length) {
            currentFact = 0;
        }

        oceanFact.textContent = oceanFacts[currentFact];
    }

    nextFactButton.addEventListener("click", showNextFact);

    setInterval(showNextFact, 7000);

});// =========================================
// STEP 20.12 - QUICK NAVIGATION
// =========================================

window.addEventListener("load", function () {

    const quickNavToggle =
        document.getElementById("quickNavToggle");

    const quickNavMenu =
        document.getElementById("quickNavMenu");

    quickNavToggle.addEventListener("click", function () {

        const isOpen =
            quickNavMenu.classList.toggle("open");

        quickNavToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after selecting a link

    const quickNavLinks =
        quickNavMenu.querySelectorAll("a");

    quickNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            quickNavMenu.classList.remove("open");

            quickNavToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});/* =========================================
   SHARE OCEANLINK
   ========================================= */

window.addEventListener("load", function () {

    const shareButton = document.getElementById("shareOceanLink");
    const copyButton = document.getElementById("copyOceanLink");
    const copyMessage = document.getElementById("copyMessage");

    shareButton.addEventListener("click", async function () {

        const shareData = {
            title: "OceanLink",
            text: "Discover OceanLink — connecting people and protecting our oceans.",
            url: window.location.href
        };

        if (navigator.share) {

            try {
                await navigator.share(shareData);
            } catch (error) {
                // User cancelled the share window
            }

        } else {

            try {
                await navigator.clipboard.writeText(window.location.href);

                copyMessage.textContent = "Link copied!";

                setTimeout(function () {
                    copyMessage.textContent = "";
                }, 2500);

            } catch (error) {

                copyMessage.textContent =
                    "Please copy the address from your browser.";
            }
        }

    });


    copyButton.addEventListener("click", async function () {

        try {

            await navigator.clipboard.writeText(window.location.href);

            copyMessage.textContent =
                "Link copied successfully ✓";

            setTimeout(function () {
                copyMessage.textContent = "";
            }, 2500);

        } catch (error) {

            copyMessage.textContent =
                "Please copy the address from your browser.";
        }

    });

});/* =========================================
   OCEANLINK PLEDGE WALL
   ========================================= */

window.addEventListener("load", function () {

    const pledgeChoices =
        document.querySelectorAll(".pledge-choice");

    const promiseButton =
        document.getElementById("makeOceanPromise");

    const promiseMessage =
        document.getElementById("promiseMessage");

    const promiseResult =
        document.getElementById("promiseResult");

    const selectedPromises =
        document.getElementById("selectedPromises");
const commitmentList =
    document.getElementById("commitmentList");

const printCommitment =
    document.getElementById("printCommitment");

    promiseButton.addEventListener("click", function () {

        const selected = [];

        pledgeChoices.forEach(function (choice) {

            if (choice.checked) {
                selected.push(choice.value);
            }

        });


        if (selected.length === 0) {

            promiseMessage.textContent =
                "Please choose at least one promise.";

            promiseResult.classList.remove("show");

            return;
        }


        selectedPromises.innerHTML = "";
commitmentList.innerHTML = "";

        selected.forEach(function (promise) {

            const item = document.createElement("span");

            item.className = "selected-promise";

            item.textContent = "✓ " + promise;

            selectedPromises.appendChild(item);
const commitmentItem =
    document.createElement("span");

commitmentItem.className =
    "commitment-item";

commitmentItem.textContent =
    "✓ " + promise;

commitmentList.appendChild(commitmentItem);
        });


        promiseMessage.textContent =
            "Your OceanLink promise has been created!";

        promiseResult.classList.add("show");

        promiseResult.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
   
printCommitment.addEventListener("click", function () {

    const commitmentCard =
        document.querySelector(".commitment-card");

    if (!commitmentCard) {
        return;
    }

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>OceanLink Commitment</title>

            <style>

                @page {
                    size: A4;
                    margin: 15mm;
                }

                body {
                    margin: 0;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    background: white;
                    color: #063B5C;
                }

                .commitment-card {
                    max-width: 700px;
                    margin: 20px auto;
                    border: 2px solid #063B5C;
                    border-radius: 24px;
                    overflow: hidden;
                    background: white;
                }

                .commitment-card-top {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 22px 28px;
                    background: #087EA4;
                    color: white;
                }

                .commitment-wave {
                    font-size: 38px;
                }

                .commitment-card-top .eyebrow {
                    margin: 0 0 4px;
                    color: #B8F2E6;
                    font-weight: bold;
                }

                .commitment-card-top h4 {
                    margin: 0;
                    color: white;
                    letter-spacing: 1px;
                }

                .commitment-card-body {
                    padding: 35px 30px;
                    text-align: center;
                }

                .commitment-symbol {
                    font-size: 42px;
                }

                .commitment-card-body h3 {
                    color: #063B5C;
                }

                .commitment-card-body p {
                    line-height: 1.7;
                }

                .commitment-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 20px;
                }

                .commitment-item {
                    padding: 8px 14px;
                    border-radius: 20px;
                    background: #B8F2E6;
                    color: #063B5C;
                    font-size: 0.85rem;
                    font-weight: bold;
                }

                .commitment-card-bottom {
                    display: flex;
                    justify-content: center;
                    gap: 25px;
                    padding: 16px;
                    background: #F4E9D8;
                    color: #087EA4;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

            </style>

        </head>

        <body>

            ${commitmentCard.outerHTML}

        </body>

        </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

});
});