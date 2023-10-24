const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
//const API_URL = "/fhu-faculty.json"


addAllCards();

async function addAllCards(){
    //load data

    let response = await fetch(API_URL, {
        
    });

    let people = await response.json();

    people.forEach(person => {
        console.log(person);
    });
    //for each item in data set (each person)
        //add that person's card to the DOM

    people.forEach(person =>{

            let div = document.createElement('div');
            let cardHTML =
            `<div class="m-6 p-2 h-cardHeight w-80 mx-auto rounded-lg border-black border-2 bg-gradient-to-r from-[#8E354D] via-[#357ABD] to-[#000080]">
            <div class="bg-gradient-to-r from-[#D9A3A6] via-[#EFD4D4] to-[#B57D80] px-2 flex flex-row justify-between  h-8 rounded-lg border-black border-2 ">
            <div class="flex flex-row items-center">
                <p class=" font-bold name">${person.NickName}</p>
            </div>

            <div class="flex flex-row gap-1 items-center " >
                    <p class="font-medium italic name ">${person.FirstName}</p>
                    <p class="font-medium italic name">${person.LastName}</p>
                    <p>${person.EducationLevel}</p>
            </div>
            </div>
            
            <div class="mt-2 h-56 flex flex-row rounded-lg border-black border-2 relative bg-black w-full justify-center">
                <img class="h-full w-full z-0 rounded-lg" src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
                <p class="rounded-full border border-black w-9 p-1 text-center absolute top-0 right-0 m-2 font-bold text-lg bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300">${person.Cost}</p>
                <p class="m-1 text-xs italic self-start w-50 flex-row border absolute  border-black rounded-lg px-3 bg-gradient-to-br from-[#F8D7D7]  via-[#FFFFFF] to-[#F8D7D7] top-0 left-0">${person.Rank}</p>
                <div class="font-medium bg-gradient-to-r from-[#F8D7D7] via-[#F8D7D7] to-[#E3ABAB] self-end items-center flex p-1 w-full  flex-row border absolute  border-black rounded-lg gap-2 justify-between mx-3 px-3 bg-white">
                    <div class="justify-between flex flex-row gap-1 text-sm ">
                        <p class="italic ">${person.FieldofStudy}</p>
                        <p>-</p>
                        <p class="italic ">${person.Type}</p>
                    </div>

                    <p class="font-medium">HP ${person.HitPoints}</p>
                </div>
            </div>

            <div class=" bg-gradient-to-r from-[#ADD8E6]  via-[#FFFFFF] to-[#ADD8E6] rounded-lg m-1 p-1 border-black border-2">

            <div class=" h-44 flex flex-col p-1 justify-center text-notSmall">
            
                <div class="flex flex-row justify-between items-center text-center">
                    <p class=""><strong>${person.Attack1}</strong></p>
                    <p class=" border rounded-full border-black w-8 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300 text-center m-2 font-medium p-1">${person.Attack1Damage}</p>
                </div>

                <p class="text-sm italic">This is an attack and it does something really cool.</p>
                
                <div class="flex flex-row justify-between items-center text-center">
                    <p class=""><strong>${person.Attack2}</strong></p>
                    <p class=" border rounded-full border-black w-8 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300 text-center m-2 font-medium p-1">${person.Attack2Damage}</p>
                </div>
            
                <p class="text-sm italic">This attack does something so and this is alot of text and this is something just to fill.</p>
                
            </div>
            
            <div class="flex flex-row gap-2 m-2 justify-around w-92 h-12 rounded-lg p-1">
                <div class="flex flex-col ">
                    <p class="text-xs italic font-medium ">Weakness:</p>
                    <p class="text-xs italic w-40">${person.Weaknesses}</p>
                </div>
            
                <div class="flex flex-col">
                    <p class="text-xs italic font-medium ">Resistance:</p>
                    <p class="text-xs italic">${person.Resistances}</p>
                </div>
            </div>
            </div>

            <p class="text-sm text-center font-semibold "> - Damage - ${person.DamageType} - </p>

            </div>
            `

            div.innerHTML = cardHTML;

            document.body.appendChild(div);

            if (person.NickName.length >= 15 || (person.FirstName.length + person.LastName.length + person.EducationLevel.length) >= 20) {
                const nameElements = div.querySelectorAll('.name'); // Select all elements with the "name" class in the current card
                nameElements.forEach(nameElement => {
                  nameElement.classList.add('text-sm');
                });
            }

        });

}
function addCard(person){

}
