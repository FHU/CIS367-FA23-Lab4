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
        `<section class="w-[26.25rem] h-100 m-auto mt-2 text-white rounded-2xl margin border-amber-500 border-2
        border-8">
        <section class="full-container border-amber-500 h-full flex flex-col bg-red-950 rounded-lg">
            <section class="upper-field-section pb-1 pr-4 h-42 bg-amber-500 rounder-3xl">
            <div class="flex items-end">
            <h1 class="w-50 relative top-5 left-5 text-2xl">${person.FirstName} ${person.LastName},</h1>
            <h1 class="relative top-5 left-6 text-2xl">${person.NickName}</h1>
            </div>
            
            <div class="text-end">
            <h1 class="relative bottom-9 text-xl">${person.EducationLevel}</h1>
            </div>
            </div>
            </section>
            
            <section class="flex fit-content justify-center">
            <div class="relative w-[17.4rem] flex justify-center border-1 border-amber-500">
            <img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image}" alt="${person.FirstName} ${person.LastName}" class="object-cover w-full">
            <img class="absolute h-15 flex right-0 align-center " src="images/design-ideas/lion.svg" alt="HP Icon">
            <p class="absolute flex right-0 w-24 top-3 h-10 justify-center text-xl">${person.HitPoints}HP</p>
            <img>
            </div>
            </section>

            <section class= bg-amber-500 p-1 rounded-br-lg >
            <h2  class= text-center text-3xl">
            ${person.Rank}, ${person.FieldofStudy}</h2>
            <div class=" flex justify-between items-end mx-4">
            </section>
            <section>
            <h2 id="teaching-level" class="p-1 mb-2 bg-gray-600 text-lg">
            Height: ${person.Height}, Stamina: ${person.Stamina}. Type: ${person.Type}.</h2>
            <div class="flex justify-between items-end mx-4">
            </section>
            
            <section class=" absolute bottom-40 flex justify-around mx-8 px-3 mb-5">
            </section>
            <section class=" bg-amber-400 bg-opacity-20 mx-4 rounded-lg">
                <section class="flex p-2 justify-betweentext-xl">
                    <h2 id="cost">Cost: ${person.Cost}</h2>
                </section>
        
        
                <section class=" p-2">
                    <div class="flex flex-row justify-between px-2">
                        <h1 id="attack-one-label" class="text-lg font-bold">Damage Type: ${person.DamageType}</h1>
                    </div>
                    <div class="flex p-2 justify-between h-18">
                        <h1 class=" text-lg font-bold">${person.Attack1} ${person.Attack1Damage}.</h1>
                        <h1 class="text-lg font-bold">${person.Attack2} ${person.Attack2Damage}.</h1>
                    </div>
                </section>
        
                <section class="h-30 flex p-2">
                    <div class="w-1/2">
                    <h3 class="font-bold ">Weaknesses</h3>
                    <p>${person.Weaknesses}</p>
                    </div>
                    <div class="w-1/2 px-5 self-center">
                    <h3 class="font-bold ">Resistances</h3>
                    <p>${person.Resistances}</p>
                    </div>
                </section>
            </section>
        
            <section class=" flex mb-2 mx-8">
                <p class="right">${person.HashTag}</p>
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
