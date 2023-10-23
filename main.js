const API_URL = '/FHU-faculty-api.json';
const container = document.querySelector(".container");

let backgroundColors = {
  "Science" : "to-emerald-900",
  "Mathematics" : "to-blue-950",
  "Computer Science" : "to-green-800",
  "Engineering" : "to-sky-900",
  "Bible" : "to-purple-950",
  "Political Science" : "to-gray-800",
  "Business" : "to-cyan-400",
  "Buisness" : "to-cyan-400",
  "Marketing" : "to-cyan-400",
  "Theatre" : "to-yellow-300",
  "Sociology" : "to-pink-900",
  "Photography" : "to-red-400",
  "History" : "to-stone-500",
  "Cybersecurity" : "to-red-950",
  "Nursing" : "to-indigo-950",
  "Education" : "to-yellow-200",
  "Law" : "to-fuchsia-950",
  "Spanish" : "to-orange-700",
  "English" : "to-amber-600",
  "Spanish Education" : "to-orange-700",
  "Graphic Design" : "to-emerald-300",
  "Choral Music" : "to-lime-800",
  "Communications" : "to-cyan-400",
  "Psychology" : "to-fuchsia-800",
  "Academics" : "to-yellow-200",
  "Kinesiology" : "to-red-800",
  "Biochemistry" : "to-emerald-900",
  "Music" : "to-lime-800",
  "undefined" : "to-zinc-500"
}



async function addAllCards(){

    // load the data


    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {

      console.log(backgroundColors[person.FieldofStudy])



        let div = document.createElement('div');

        let cardInnterHTML =
    `      

    <div
      class="card border-2 relative shadow-2xl bg-gradient-to-br from-neutral-900 ${backgroundColors[person.FieldofStudy]} mt-5"
    >
      <div class="square w-5 h-5 absolute top-0 left-0"></div>
      <div class="square w-5 h-5 absolute top-0 right-0"></div>
      <div class="square w-5 h-5 absolute bottom-0 left-0"></div>
      <div class="square w-5 h-5 absolute bottom-0 right-0"></div>
      <div class="line w-full h-1 absolute top-4 left-0"></div>
      <div class="line w-full h-1 absolute bottom-4 left-0"></div>
      <div class="line h-full w-1 absolute left-4 top-0"></div>
      <div class="line h-full w-1 absolute right-4 top-0"></div>

      <div
        class="triangle-container relative p-6 m-5 bg-gradient-to-br from-neutral-900 ${backgroundColors[person.FieldofStudy]}"
      >
        <div class="triangle-right-top"></div>
        <div class="triangle-right-bottom"></div>
        <div class="triangle-left-top"></div>
        <div class="triangle-left-bottom"></div>
        <div class="image flex flex-col items-center mt-2">
          <div class="line w-full h-1 absolute top-7 left-0"></div>
          <div class="line w-full h-1 absolute bottom-7 left-0"></div>
          <img
            class="w-2/3"
            src="/images/headshots/butterfield_brian.jpg"
            alt="A photo of Brian Butterfield"
          />
        </div>
        <div class="name-container flex flex-col items-center">
          <h2 class="font-main text-md text-gray-300">
          ${person.NickName} | ${person.Type} | ${person.Rank} | ${person.EducationLevel}
          </h2>
          <h1 class="font-main text-2xl font-bold text-gray-200 mt-2">
            ${person.FirstName} ${person.LastName}
          </h1>
        </div>

        <div class="attack-container mt-2 relative">
          <div class="flex items-center justify-between">
            <h1 class="font-main text-lg text-gray-200 font-bold">
            ${person.Attack1}
            </h1>
            <h1 class="font-main text-gray-200 text-md">
            ${person.Attack1Damage}
            </h1>
          </div>
          <div class="flex items-center justify-between mt-4">
            <h1 class="font-main text-lg text-gray-200 font-bold">
            ${person.Attack2}
            </h1>
            <h1 class="font-main text-gray-200 text-md">
            ${person.Attack2Damage}
            </h1>
          </div>
        </div>


        <div class="weakness-container grid grid-cols-2 mt-2 relative">
          <div class="col-start-1">
            <h1 class="font-main text-lg text-gray-200 font-bold">
              Resistances
            </h1>
            <h2 class="font-main text-gray-300 text-md">${person.Resistances}</h2>
          </div>
          <div class="col-start-2 border-l-4 border-white px-3"">

            <h1 class="font-main text-lg text-gray-200 font-bold">
              Weaknesses
            </h1>
            <h2 class="font-main text-gray-300 text-md">${person.Weaknesses}</h2>
          </div>
        </div>



        <h1 class="font-main text-gray-400 mb-1 text-right text-sm mt-2">
        ${person.HashTag}
        </h1>
      </div>`

        // document.querySelector(".container").innerHTML = cardInnterHTML;
        div.innerHTML = cardInnterHTML;
        document.body.appendChild(div);

        container.append(div);


    });

    // foreach item in data set (each person) 
        //add that person's card to the DOM


}

addAllCards();

function addCard(person){

}

