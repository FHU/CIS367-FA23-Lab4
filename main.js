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
            `<div class="bg-gradient-to-b from-gray-500 to-gray-700 rounded-lg align-middle justify-center border-8 border-solid border-yellow-500 max-w-sm h-full mx-auto overflow-hidden shadow-lg m-4">
            
                <div class="flex flex-col justify-around text-white border-b-2 border-solid p-2">
                    <div class="flex flex-row justify-between">
                        <p class="text-sm border-2 border-solid rounded-lg text-center px-2">${person.Rank}</p>
                        <p class="px-2 font-bold align-bottom">HP${person.HitPoints}</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-bold">${person.FirstName} '${person.NickName}' ${person.LastName}</p>
                        <p class="">${person.FieldofStudy}</p>
                    </div>
                </div>
                
                <div class="flex flex-col items-center m-2">
                    <img class="w-full rounded-t-lg" src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image}" alt="${person.FirstName} ${person.LastName}"/>
                    <p class="text-center text-white w-full text-sm border-b-2 border-r-2 border-l-2 
                        border-solid rounded-b-lg p-1 pb-2">NO.439 ${person.FirstName} ${person.LastName} HT:${person.Height}</p>
                </div>
                        
                <div class="text m-2">
                    <div class="flex flex-row justify-start text-white">
                        <span class="material-symbols-outlined text-xl pt-1 pl-3">stars</span>
                        <p class="font-bold text-center text-lg pl-10">${person.Attack1}</p>
                    </div>
                    <p class="py-3 px-2 text-white text-sm">Prevent all damage done to this Pokemon by attacks from Basic Pokemon during 
                        your apponenets next turn. This pokemon can't use Quick Guard during your next turn.</p>
                                
                    <div class="flex flex-row justify-between text-white">
                        <div class="pt-1 pl-2">
                            <span class="material-symbols-outlined text-lg">stars</span>
                            <span class="material-symbols-outlined text-lg">stars</span>
                        </div>
                        <p class="font-bold text-center text-lg">${person.Attack2}</p>
                        <p class="font-bold text-lg">${person.Attack2Damage}+</p>
                    </div>
                    
                    <p class="py-2 px-2 text-white text-sm">This attack does 30 more damage for each Prize Card 
                        your opponent has taken.
                    </p>
                </div>
                                    
                <div class="flex flex-col m-2 justify-around pt-4 border-t-2 border-solid">
                    <div class="flex flex-row text-xs pb-2 ">
                        <span class="material-symbols-outlined text-red-400">local_fire_department</span>
                        <p class="text-red-400 pt-1 font-semibold">Weakness: ${person.Weaknesses}</p>
                    </div>
                                    
                    <div class="flex flex-row text-xs">
                        <span class="pb-2 material-symbols-outlined text-purple-400">mystery</span>
                        <p class="text-purple-400 pt-1 font-semibold">Resistance: ${person.Resistances}</p>
                    </div>
                                    
                </div>
                                    
                <div class="flex flex-row justify-evenly text-white p-2">
                    <p class="w-1/3">@2023</p>
                    <p class="w-1/3">#CodeHard</p>
                    <p class="w-1/3">Kaylee Odom</p>
                </div>
                            
            </div>`;

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);


    });
}
                            
addAllCards();                         
function addCard(person){

}