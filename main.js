const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"


async function addAllCards(){
    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log( person )
    });

    // for each item in the data set (each person)
    //      add that person's card to the DOM
    people.forEach( person  => {
        
        let div = document.createElement('div');

        let cardInnerHTML = `
            <div class="grid grid-flow-cols-3 justify-center font-mono items-center bg-gray-700">
                    <div class="h-full border-4 border-red-900 m-4 p-4 bg-gradient-to-b from-gray-600 to-black rounded-2xl shadow-lg">
                        <div class="text-center mb-4 flex justify-between">
                            <div>
                                <h2 class="text-xl font-bold text-white">${person.NickName}</h2>
                                <P class="text-gray-300">${person.FirstName} ${person.LastName}</p>
                                <p class="text-gray-300">${person.Type}</p>
                            </div>
                            <div>
                                <p class="bg-gray-500 flex text-white items-center p-2 rounded-full w-auto h-12">HP: ${person.HitPoints}</p>
                            </div>
                        </div>
                        <div class="characteristics flex flex-row gap-2 justify-center bg-red-900 rounded-t-2xl border-2 border-red-900 text-white">
                            <p>${person.Rank}</p>
                            <p> | </p>
                            <p>${person.Gender}</p>
                            <p> | </p>
                            <p>${person.EducationLevel}</p>
                        </div>
                        <div class="flex justify-center">
                            <img src="images/headshots/${person.Image}" class="h-80 w-[26rem] border-2 flex justify-center border-red-900">
                        </div>
                        <div class="bg-red-900 rounded-b-2xl border-2 border-red-900">
                            
                            <div class="flex justify-between text-white mb-4">
                                <div>
                                    <p class="Attacks underline text-xl">Attacks</p>
                                    <p class="Attack1">1. ${person.Attack1} | ${person.Attack1Damage}</p>
                                    <p class="Attack2">2. ${person.Attack2} | ${person.Attack2Damage}</p>
                                </div>
                            </div>
                            <div class="flex text-white justify-between mb-4">
                                <div>
                                    <div class="pb-2">
                                        <p class="weakness underline text-xl">Weakness</p>
                                        <p class="weakness1">${person.Weakness}</p>
                                    </div>
                                    <div class="">
                                        <p class="damage underline text-xl">DamageType</p>
                                        <p class="damgeType">${person.DamageType}</p>
                                    </div>
                                        
                                </div>
                                <div>
                                    <div class="pb-2">
                                        <p class="resistance underline text-xl">Resistance</p>
                                        <p class="resistanceType">${person.Resistances}</p>
                                    </div>
                                    <div class="">
                                        <p class="stamina underline text-xl">Stamina</p>
                                        <p class="staminaType">${person.Stamina}</p>
                                    </div>    
                                        
                                </div>
                            </div>
                            <div class="text-center text-white flex flex-row gap-2 justify-center">
                                <p class="creator">Creator |</p>
                                <p class="creatorName">${person.Creator}</p>
                            </div>
                        </div>
                    </div>
            </div>`;

        div.innerHTML = cardInnerHTML;
        document.body.appendChild( div );
        
    })

    

}

addAllCards();
function addCard(person) {

}