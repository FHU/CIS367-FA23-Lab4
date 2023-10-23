const card_grid = document.getElementById('card_grid')

async function FetchData() {;
  let res = await fetch('https://fhu-faculty-api.netlify.app/fhu-faculty.json')
  let people = await res.json();

  GenerateCards(people);
};


const tenure_conversion = {'Yes': '✓', 'No': '🆇'}
const stam_conversion = {'Low': '◔', '': '◔', 'Medium': '<span class="img-stat-level-sm">◑</span>', 'High': '◕', 'Very High': '<span class="img-stat-level-sm">●</span>', 'Extra High': '<span class="img-stat-level-sm">●</span>'}


function GenerateCards(people) {
  people.forEach(person => {
    let card = document.createElement('div')
    card.classList.add('card')

    let tenure_symbol = tenure_conversion[person.Tenure]
    let stam_symbol = stam_conversion[person.Stamina]

    let edu_symbol

    if (person.EducationLevel != '') {
        edu_symbol = person.EducationLevel[0]
    } else {
        edu_symbol = 'U';
    };

    const card_html = `<div class="card-header">
    <div class="title">
        <h3 class="rank">${person.Rank}</h3>
        <h2 class="name">${person.FirstName} ${person.LastName}</h2>
    </div>
    <div class="header-stats">
        <h2 class="hp">✚ <span class="health">${person.HitPoints}</span></h2>
        <h3 class="type">${person.Type}</h3>
    </div>
</div>
<div class="img-block">
    <img class="card-img" src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
    <div class="img-stats">
        <div class="img-stat">
            <div class="material-symbols-outlined material-symbols-adjusted" fill="black">school</div>
            <p class="img-stat-level">-${edu_symbol}-</p>
        </div>
        <div class="img-stat">
            <div class="material-symbols-outlined" fill="black">bolt</div>
            <p class="img-stat-level">-${stam_symbol}-</p>
        </div>
        <div class="img-stat">
            <div class="material-symbols-outlined" fill="black">shield_lock</div>
            <p class="img-stat-level">-${tenure_symbol}-</p>
        </div>
    </div>
</div>
<div class="atk-stats">
    <div class="atk atk1">
        <h3 class="atk-title">${person.Attack1}</h3>
        <p class="atk-desc">"Microsoft wants to give you a free computer, click link to see!"</p>
    </div>
    <div class="atk atk2">
        <h3 class="atk-title">${person.Attack2}</h3>
        <p class="atk-desc">A gift has arrived for you! Lets bring it inside!</p>
    </div>
</div>`

    if (person.EducationLevel == '') {
        console.log('Edu lvl = none')
    }

    card.innerHTML = card_html


    card_grid.appendChild(card)
  });
}

FetchData()