const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
//const API_URL="/fhu-faculty-api.json"


addAllCards();
async function  addAllCards() {

    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log( person );
    });
    
    // for each item in data set (each person)
        // add that person's card to the DOM
    
    people.forEach( person => {
        let div = document.createElement('div');
        
        let cardInnerHTML = 
        `
        <div class="flex flex-col justify-center items-center text-center bg-blue-300 m-3 rounded-xl">
            <div class="head flex flex-row flex-wrap justify-evenly bg-blue-900 mb-5 p-2 gap-8 w-full rounded-xl">
                <div class="flex flex-col">
                    <h1>${person.Rank}</h1>
                    <h1>${person.FirstName} ${person.LastName}</h1>
                </div>
                <h1 class="mt-3">${person.Type}</h1>
                <div class="flex flex-col">
                    <h1>HP ${person.HitPoints}</h1>
                    <h1>${person.EducationLevel} ${person.FieldofStudy}</h1>
                </div>
            </div>
            
            <div class="photo flex justify-center align-middle">
                <img class="w-72" src="images/headshots/casey_Kenan.jpg" alt="">
            </div>
            <div class="stats flex flex-row flex-wrap justify-evenly w-72 bg-blue-900 ml-5 mr-5 rounded-b-lg p-3">
                <h1>#${person.id}</h1>
                <h1>${person.NickName}</h1>
                <h1>${person.Height}</h1>
            </div>
            
            <div class="cost-stamina flex flex-row flex-wrap justify-evenly w-72 m-3 bg-blue-900 p-3 ml-5 mr-5 rounded-lg">
                <div class="flex flex-col">
                    <h1>Cost</h1>
                    <h1>Stamina</h1>
                </div>
                <div class="flex flex-col">
                    <h1>${person.Cost}</h1>
                    <h1>${person.Stamina}</h1>
                </div>
            </div>
            <div class="attacks flex flex-row flex-wrap justify-evenly bg-blue-900 p-3 w-72 rounded-lg">
                <div class="flex flex-col">
                    <h1>${person.Attack1}</h1>
                    <h1>${person.Attack2}</h1>
                </div>
                <div class="flex flex-col">
                    <h1>${person.Attack1Damage}</h1>
                    <h1>${person.Attack2Damage}</h1>
                </div>
            </div>
            <div class="resistances-weaknesses flex flex-row flex-wrap justify-evenly bg-blue-900 p-3 w-72 m-3 rounded-lg">
                <div class="flex flex-col">
                    <h1>Resistances</h1>
                    <h1>${person.Resistances}</h1>
                </div>
                <div class="flex flex-col">
                    <h1>Weaknesses</h1>
                    <h1>${person.Weaknesses}</h1>
                </div>
            </div>
            <div class="footer flex flex-row flex-wrap justify-evenly w-full bg-black  rounded-xl p-3 ">
                <h1>&copy;2023</h1>
                <h1>${person.HashTag}</h1>
                <h1>${person.Creator}</h1>
            </div>
        </div>
        `
        ;
        
        div.innerHTML = cardInnerHTML;
        
        div.className = 'flex flex-row justify-center';
        document.body.appendChild(div) ;
        console.log(div);

    });
    
}

function addCard(person) {

};