const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json";
let cardHTML = 
    `<div id="card" class="bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-2xl w-96 relative border-8 border-slate-200 text-slate-200">
        <p id="rank" class="absolute bg-slate-200 p-1 px-3 text-sm text-red-600 rounded-br-2xl">Assitant Professor</p>
        <div id="top" class="flex justify-between items-end pt-3 px-5 gap-2">
            <div id="name_logo" class="flex gap-3">
                <img src="images/design-ideas/dumbbell.png" id="type" class="w-6">
                <h1 id="name" class="text-xl font-bold">Maurice Williams</h1>
            </div>
            <div class="flex flex-col text-right">
                <h1 class="text-xl font-bold"> HP: <span id="hp">95</span></h1>
                <h2 id="field_of_study" class="text-sm">Kinesiology</h2>
            </div>
        </div>
        <div id="image_section" class="relative m-5 border-4 border-slate-300 rounded">
            <h2 id="educ_level" class="absolute right-0 text-red-600 bg-slate-300 p-2 rounded-bl-2xl font-bold">PhD</h2>
            <img src="images/headshots/maurice_w.jpg_2023-10-18T18_03_20.997Z_output_3.jpeg" id="headshot" class="">
            <div id="information" class="flex justify-between text px-2 border-t-4 border-slate-300 text-red-600 bg-slate-300">
                <p id="nickname">Liftosaur</p>
                <p>Height: <span id="height">5'8"</span></p>
            </div>
        </div>
        <div id="cost_stamina">
            <div class="flex justify-center pb-4 font-medium">
                <p class="border-r-2 pr-2">Cost: <span id="cost">7</span></p>
                <p class="pl-2">Stamina: <span id="stamina">High</span></p>
            </div>
        </div>
        <div id="attacks" class="flex flex-col justify-center">
            <div class="flex justify-between border-t-2 border-slate-300 py-2 mx-4 px-4">
                <h1 id="attack1" class="font-medium">Barbell Bomb</h1>
                <h1 id="damage1">71</h1>
            </div>
            <div class="flex justify-between border-b-2 border-slate-300 py-2 mx-4 px-4">
                <h1 id="attack2" class="font-medium">Toe Tickle</h1>
                <h1 id="damage2">85</h1>
            </div>
        </div>
        <div id="weakness_resistance" class="text-sm flex justify-between mx-4 p-4">
            <div>
                <h1 class="font-medium">Weakness</h1>
                <p id="weakness" class="pt-2">Bad Grading</p>
            </div>
            <div>
                <h1 class="font-medium">Resistances</h1>
                <p id="resistances" class="pt-2">100's</p>
            </div>
        </div>

        <div id="footer" class="text-xs flex p-2">
            <p class="w-1/3 text-left">&copy; 2023</p>
            <p id="hashtag" class="w-1/3 text-center">#thetoeshoes</p>
            <p id="creator" class="w-1/3 text-right">Classic.Man.Christian</p>
        </div>
    </div>`;


async function addAllCards(){
    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log(person)
    });

    people.forEach(person => {
        let card = document.createElement('div');
        card.setAttribute('class', 'flex flex-col m-10 w-fit')
        let cardInnerHTML = 
        `<div id="card" class="flex flex-col bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-2xl w-96 relative border-8 border-slate-200 text-slate-200">
            <p id="rank" class="absolute bg-slate-200 p-1 px-3 text-sm text-red-600 rounded-br-2xl">${person.Rank}</p>
            <div id="top" class="flex justify-between items-end pt-3 px-5 gap-2">
                <div id="name_logo" class="flex gap-3">
                    <img src="images/design-ideas/dumbbell.png" id="type" class="w-6">
                    <h1 id="name" class="text-xl font-bold">${person.FirstName} ${person.LastName}</h1>
                </div>
                <div class="flex flex-col text-right">
                    <h1 class="text-xl font-bold"> HP: <span id="hp">${person.HitPoints}</span></h1>
                    <h2 id="field_of_study" class="text-sm">${person.FieldofStudy}</h2>
                </div>
            </div>
            <div id="image_section" class="relative flex flex-col m-5 mx-10 border-4 border-slate-300 rounded">
                <h2 id="educ_level" class="absolute right-0 text-red-600 bg-slate-300 p-2 rounded-bl-2xl font-bold">${person.EducationLevel}</h2>
                <img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
                <div id="information" class="flex justify-between text px-2 border-t-4 border-slate-300 text-red-600 bg-slate-300">
                    <p id="nickname">${person.NickName}</p>
                    <p>Height: <span id="height">${person.Height}</span></p>
                </div>
            </div>
            <div id="cost_stamina">
                <div class="flex justify-center pb-4 font-medium">
                    <p class="border-r-2 pr-2">Cost: <span id="cost">${person.Cost}</span></p>
                    <p class="pl-2">Stamina: <span id="stamina">${person.Stamina}</span></p>
                </div>
            </div>
            <div id="attacks" class="flex flex-col justify-center">
                <div class="flex justify-between border-t-2 border-slate-300 py-2 mx-4 px-4">
                    <h1 id="attack1" class="font-medium">${person.Attack1}</h1>
                    <h1 id="damage1">${person.Attack1Damage}</h1>
                </div>
                <div class="flex justify-between border-b-2 border-slate-300 py-2 mx-4 px-4">
                    <h1 id="attack2" class="font-medium">${person.Attack2}</h1>
                    <h1 id="damage2">${person.Attack2Damage}</h1>
                </div>
            </div>
            <div id="weakness_resistance" class="text-sm flex justify-between mx-4 p-4">
                <div>
                    <h1 class="font-medium">Weakness</h1>
                    <p id="weakness" class="pt-2">${person.Weaknesses}</p>
                </div>
                <div>
                    <h1 class="font-medium">Resistances</h1>
                    <p id="resistances" class="pt-2">${person.Resistances}</p>
                </div>
            </div>

            <div id="footer" class="text-xs flex p-2">
                <p class="w-1/3 text-left">&copy; 2023</p>
                <p id="hashtag" class="w-1/3 text-center">${person.HashTag}</p>
                <p id="creator" class="w-1/3 text-right">${person.Creator}</p>
            </div>
        </div>`;

        card.innerHTML = cardInnerHTML;
        document.getElementById('card_Container').appendChild(card);
    })
}

function addCard(person){

}

addAllCards();