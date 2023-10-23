const card_grid = document.getElementById('card_grid')

async function FetchData() {;
  let res = await fetch('https://greenegunnar14.pythonanywhere.com/api/')
  let people = await res.json();

  GenerateCards(people);
};

const card_html = `<div class="card-header">
    <div class="title">
        <h3 class="rank">Assistant Professor</h3>
        <h2 class="name">Greg Maples</h2>
    </div>
    <div class="header-stats ">
        <h2 class="hp">✚ <span class="health">42</span></h2>
        <h3 class="type">Rogue</h3>
    </div>
</div>
<div class="img-block">
    <img class="card-img" src="images/headshots/maples_greg.jpg" alt="">
    <div class="img-stats">
        <div class="img-stat">
            <div class="material-symbols-outlined material-symbols-adjusted" fill="black">school</div>
            <p class="img-stat-level">-M-</p>
        </div>
        <div class="img-stat">
            <div class="material-symbols-outlined" fill="black">bolt</div>
            <p class="img-stat-level">-✦-</p>
        </div>
        <div class="img-stat">
            <div class="material-symbols-outlined" fill="black">shield_lock</div>
            <p class="img-stat-level">-🆇-</p>
        </div>
    </div>
</div>
<div class="atk-stats">
    <div class="atk atk1">
        <h3 class="atk-title">Phishing Scam</h3>
        <p class="atk-desc">"Microsoft wants to give you a free computer, click link to see!"</p>
    </div>
    <div class="atk atk2">
        <h3 class="atk-title">Trojan Horse</h3>
        <p class="atk-desc">A gift has arrived for you! Lets bring it inside!</p>
    </div>
</div>`


function GenerateCards(people) {
  people.array.forEach(person => {
    let card = document.createElement('div')
    card.innerHTML = card_html

    card_grid.appendChild(card)
  });
}

FetchData()