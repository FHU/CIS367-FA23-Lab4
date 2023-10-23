const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
const API_URL2 = "/FHU-faculty-api.json"

const container = document.querySelector(".container")

addAllCards();

async function addAllCards() {
    // load the data (from netlify)
    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        let div = document.createElement('div');

        
        let cardInnerHTML =
        `<section class="card-border w-[31.25rem] h-full m-auto mt-2 p-2 bg-gradient-to-b from-gray-400 to-gray-700 font-spacegrotesk text-white rounded-2xl">
        <section class="full-container h-full flex flex-col bg-gradient-to-b from-indigo-950 to-slate-900 rounded-2xl">
            <section class="upper-field-section pb-4 pr-4 font-pixelify">
                <h2 id="teaching-level" class="w-48 p-1 mb-2 bg-gradient-to-b from-gray-400 to-slate-600 rounded-br-lg text-lg">
                    ${person.Rank}
                </h2>
                <div class="info-subsection flex justify-between items-end mx-4">
                    <div class="flex items-end">
                        <h1 id="name" class="w-40 text-4xl">${person.FirstName} ${person.LastName}</h1>
                        <h1 id="fantasy-class" class="text-2xl text-emerald-200">${person.Type}</h1>
                    </div>
        
                    <div class="text-end">
                        <h1 id="health-points" class="text-5xl"><span class="text-lg">HP</span> ${person.HitPoints}</h1>
                        <h2 id="field" class="text-lg">${person.FieldofStudy}</h2>
                    </div>
                </div>
            </section>
        
            <section class="image-section flex justify-center">
                <div class="character-image relative h-80 w-[26.4rem] flex justify-center bg-gradient-to-b border-2">
                    <img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image}" alt="${person.FirstName} ${person.LastName}" class="object-cover w-full">
                    <p class="absolute flex left-0 bg-gradient-to-b from-gray-400 to-slate-600 w-32 h-10 justify-center items-center font-pixelify text-2xl">${person.EducationLevel}</p>
                    <img>
                </div>
            </section>
            
            <section class="under-image-detail-section flex justify-around mx-8 px-3 mb-5 bg-gradient-to-b from-gray-400 to-slate-600">
                <p id="character-id">#${person.id}</p>
                <p id="nickname">${person.NickName}</p>
                <p id="height">HT: ${person.Height}</p>
            </section>
            <section class="bottom-portion-of-card-section mb-5 mx-8 bg-gradient-to-b from-indigo-900 to-indigo-950 rounded-lg">
                <section class="cost-stamina-section flex p-2 justify-between bg-gradient-to-b from-gray-400 to-slate-600 text-xl">
                    <h2 id="cost">Cost: ${person.Cost}</h2>
                    <h2 id="stamina">Stamina: ${person.Stamina}</h2>
                </section>
        
        
                <section class="attacks-section p-5">
                    <div id="attack-one" class="flex flex-row justify-between mb-5">
                        <h1 id="attack-one-label" class="text-lg font-bold">${person.Attack1}</h1>
                        <h1 id="attack-one-points" class="font-bold text-emerald-200 text-3xl">${person.Attack1Damage}</h1>  
                    </div>
                    <div id="attack-two" class="flex justify-between">
                        <h1 id="attack-two-label" class="text-lg font-bold">${person.Attack2}</h1>
                        <h1 id="attack-two-points" class="font-bold text-emerald-200 text-3xl">${person.Attack2Damage}</h1>
                    </div>
                </section>
        
                <section class="resistances-weaknesses-section divide-x flex px-5 py-5">
                    <div class="w-1/2">
                        <h3 class="font-bold text-emerald-200">Resistances</h3>
                        <p>${person.Resistances}</p>
                    </div>
                    <div class="w-1/2 px-5 self-center">
                        <h3 class="font-bold text-emerald-200">Weaknesses</h3>
                        <p>${person.Weaknesses}</p>
                    </div>
                </section>
            </section>
        
            <section class="attributes-section flex mb-2 mx-8">
                <p class="w-1/3 text-left">@2023</p>
                <p class="w-1/3 text-center">${person.HashTag}</p>
                <p class="w-1/3 text-right">${person.Creator}</p>
            </section>
        </section>
        </section>`

        div.innerHTML = cardInnerHTML;
        

        document.body.appendChild(div);
        container.append(div);
    });

}

function addCard(person) {

}
