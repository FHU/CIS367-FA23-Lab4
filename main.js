// const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
const API_URL = "/faculty_data.json"

addAllCards();

async function addAllCards() {
    // load the data
    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        let div = document.createElement('div');
        
        let cardHTML =
        `<section class="card-border w-[31.25rem] m-auto mt-2 p-2 bg-gradient-to-b from-gray-400 to-gray-700 font-spacegrotesk text-white rounded-2xl">
        <section class="full-container flex flex-col bg-gradient-to-b from-indigo-950 to-slate-950 rounded-2xl">
            <section class="upper-field-section pb-4 pr-4 font-pixelify">
                <h2 id="teaching-level" class="w-48 p-1 mb-2 bg-gradient-to-b from-gray-400 to-slate-600 rounded-br-lg text-lg">
                    Associate Professor
                </h2>
                <div class="info-subsection flex justify-between items-end mx-4">
                    <div class="flex items-end">
                        <h1 id="name" class="w-40 text-5xl">Kenan Casey</h1>
                        <h1 id="fantasy-class" class="text-2xl text-emerald-200">Wizard</h1>
                    </div>
        
                    <div class="text-end">
                        <h1 id="health-points" class="text-5xl"><span class="text-lg">HP</span> 60</h1>
                        <h2 id="field" class="text-lg">Computer Science</h2>
                    </div>
                </div>
            </section>
        
            <section class="image-section flex justify-center">
                <div class="character-image relative h-80 w-[26.4rem] flex justify-center bg-gradient-to-b border-2">
                    <img src="images/headshots/pixelized_Casey.png" class="object-cover w-full">
                    <p class="absolute flex left-0 bg-gradient-to-b from-gray-400 to-slate-600 w-32 h-10 justify-center items-center font-pixelify text-3xl">Ph. D.</p>
                    <img>
                </div>
            </section>
            
            <section class="under-image-detail-section flex justify-around mx-8 px-3 mb-5 bg-gradient-to-b from-gray-400 to-slate-600">
                <p id="character-id">#03</p>
                <p id="nickname">DadJoke</p>
                <p id="height">HT: 5'10"</p>
            </section>
            <section class="bottom-portion-of-card-section mb-5 mx-8 bg-gradient-to-b from-indigo-900 to-indigo-950 rounded-lg">
                <section class="cost-stamina-section flex p-2 justify-between bg-gradient-to-b from-gray-400 to-slate-600 text-xl">
                    <h2 id="cost">Cost: 70</h2>
                    <h2 id="stamina">Stamina: Low</h2>
                </section>
        
        
                <section class="attacks-section p-5">
                    <div id="attack-one" class="flex flex-row justify-between mb-5">
                        <h1 id="attack-one-label" class="text-lg font-bold">Indiscriminate Dad Joke</h1>
                        <h1 id="attack-one-points" class="font-bold text-emerald-200 text-3xl">62</h1>  
                    </div>
                    <div id="attack-two" class="flex justify-between">
                        <h1 id="attack-two-label" class="text-lg font-bold">Ignorant Slang</h1>
                        <h1 id="attack-two-points" class="font-bold text-emerald-200 text-3xl">74</h1>
                    </div>
                </section>
        
                <section class="resistances-weaknesses-section divide-x flex px-5 py-5">
                    <div class="w-1/2">
                        <h3 class="font-bold text-emerald-200">Resistances</h3>
                        <p>Children</p>
                    </div>
                    <div class="w-1/2 px-5 self-center">
                        <h3 class="font-bold text-emerald-200">Weaknesses</h3>
                        <p>Grading Work, Comic Sans</p>
                    </div>
                </section>
            </section>
        
            <section class="attributes-section flex mb-2 mx-8">
                <p class="w-1/3 text-left">@2023</p>
                <p class="w-1/3 text-center">#codehard</p>
                <p class="w-1/3 text-right">Kenan Casey</p>
            </section>
        </section>
        </section>`

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);
    });

    // for each item in data set (each person)
        // add that person's card to the DOM
}

function addCard(person) {

}
