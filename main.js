const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"

//const API_URL = "fhu-faculty-api.json"

async function addAllCards() {
    
    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log(person);
    });

    // for each item in data set (each person)
        // add that person's card to the DOM
    people.forEach(person =>
    {
        let div = document.createElement('div');
        
        let cardInnerHTML = 
        `<div class="card">
            
            <div class="top">
                <div class="basic">
                    <p class="Rank">${person.Rank}</p>
                    <p class="Hp">HP${person.HitPoints}</p>
                </div>
                <div class="description">
                    <p class="title">${person.FirstName} "${person.NickName}" ${person.LastName}</p>
                    <p class="field">${person.FieldofStudy}</p>
                </div>
            </div>
            
            <div class="picture-holder">
            <img class="profile" src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
                <p class="summary">NO.439 ${person.FirstName} ${person.LastName} HT:${person.Height}"</p>
            </div>
                    
            <div class="holder">
                <div class="skills">
                    <span class="material-symbols-outlined">stars</span>
                    <p class="attack">${person.Attack1}</p>
                    <p class="points">${person.Attack1Damage}+</p>
                </div>
                <p class="sentence">Prevent all damage done to this Pokemon by attacks from Basic Pokemon during 
                    your apponenets next turn. This pokemon can't use Quick Guard during your next turn.</p>
                            
                <div class="skills">
                    <div class="stars">
                        <span class="material-symbols-outlined">stars</span>
                        <span class="material-symbols-outlined">stars</span>
                    </div>
                    <p class="attack">${person.Attack2}</p>
                    <p class="points">${person.Attack2Damage}+</p>
                </div>
                
                <p class="sentence">This attack does 30 more damage for each Prize Card 
                    your opponent has taken.
                </p>
            </div>
                                
            <div class="section">
                <div class="weakness-section ">
                    <span class="material-symbols-outlined">local_fire_department</span>
                    <p class="weakness">Weakness: ${person.Weaknesses}</p>
                </div>
                                
                <div class="resistance-section">
                    <span class="pb-2 material-symbols-outlined">mystery</span>
                    <p class="resistance">Resistance: ${person.Resistances}</p>
                </div>
                                
            </div>
                                
            <div class="bottom">
                <p class="year">@2023</p>
                <p class="hash">#CodeHard</p>
                <p class="designer">Kaylee Odom</p>
            </div>
                        
        </div>
        
        <div class="buttons">
            <button class="like-btn" id="like">
                <i class="material-symbols-outlined">favorite</i>
            </button>
            <button class="download-btn" id="download">
                <i class="material-symbols-outlined">download</i>
            </button>
            <button class="share-btn" id="share">
                <i class="material-symbols-outlined">share</i>
            </button>
        </div>`;

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);


    });
}
                            
addAllCards();                         
function addCard(person){

}

const likebtn = document.getElementById('like');
const downloadbtn = document.getElementById('download');
const sharebtn = document.getElementById('share');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isLiked = false;

// Like a card
function likeCard(){
    if(!isLiked){
        likebtn.textContent = "Liked";
        likebtn.style.backgroundColor = "red";

        isLiked = true;
    }
    else{
        likebtn.textContent = "Like";
        likebtn.style.backgroundColor = "gray";

        isLiked = false;
    }
}

// Download a card as PNG
function downloadCard(){
    const dataURL = canvas.toDataURL("image/png");
    // Need to add with what content I want drawn on the canvas

    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "downloaded_image.png";

    downloadLink.click();
}

// Share a card through email
function shareCard(){
    const subject = "Check out this amazing card";
    const body = "I think you would quite enjoy this card";

    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}


likebtn.addEventListener("click", likeCard);
downloadbtn.addEventListener("click", downloadCard);
sharebtn.addEventListener("click", shareCard);