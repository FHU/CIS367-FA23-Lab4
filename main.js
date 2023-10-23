const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json";
let cardInnerHTML = 
`
<div class="grid-individual-card card-background-yellow">
<!-- BEGIN Casey -->
<div class="header-basic-title">Associate Professor</div>
<div class="header-profile-name">Kenan Casey</div>
<div class="header-hp">83 HP</div>
<div class="header-icon">☻</div>
<div class="profile-image"><img src="images/headshots/Caseyfam.jpg " alt="Kenan Casey"></div>
<div class="description-below-image-empty"><!-- empty cell to position description correctly --></div>
<div class="description-below-image"><span class="description-below-image-background">Math, Engineering, and Computer Science. Height: 5'8", Ph.D. in Computer Science.</span></div>
<div class="description-below-image-empty"><!-- empty cell to position description correctly --></div>
<div class="skill-cost">☻ ☻</div>
<div class="skill-description skill-center"><span class="skill-name">Indiscriminate Dad Joke</span></div>
<div class="skill-damage">62</div>
<div class="skill-cost">☻ ☻ ☻</div>
<div class="skill-description"><span class="skill-name">Ignorant Slang</span> Flip a coin. If tails, Kenan does 10 damage to himself.</div>
<div class="skill-damage">74</div>
<div class="weakness wrr-header">weakness</div>
<div class="resistance wrr-header">resistance</div>
<div class="retreat wrr-header">retreat cost</div>
<div class="weakness wrr-value">☻</div>
<div class="resistance wrr-value"></div>
<div class="retreat wrr-value">☻ ☻</div>
<div class="description-above-footer">
  <ul>
    <li class="description-above-footer-border">Kenan Casey, known for the hashtag #codehard. Loves children but dislikes grading homework, Comic Sans, and Chapel. LV. 6 &nbsp; #25</li>
  </ul>
</div>
<div class="copyright"><strong>Tucker Brown</strong> ©2023, CIS367. <strong>01/61 ●</strong></div>
`


async function addAllCard(){
    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log(person);
    });

    // for each item in data set(each person)
    // add that persons card to the DOM
    people.forEach(person => {
      let div = document.createElement('div');
      let cardInnerHTML = 
`
<div class="grid-individual-card card-background-yellow">
<!-- BEGIN Casey -->
<div class="header-basic-title">${person.Rank}</div>
<div class="header-profile-name">${person.FirstName} ${person.LastName}</div>
<div class="header-hp">${person.HitPoints}HP</div>
<div class="header-icon">☻</div>
<img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
<div class="description-below-image-empty"><!-- empty cell to position description correctly --></div>
<div class="description-below-image"><span class="description-below-image-background">${person.Department} Type-${person.Type}, ${person.EducationLevel} in ${person.FieldofStudy}</span></div>
<div class="description-below-image-empty"><!-- empty cell to position description correctly --></div>
<div class="skill-cost">☻ ☻</div>
<div class="skill-description skill-center"><span class="skill-name">${person.Attack1}</span></div>
<div class="skill-damage">${person.Attack1Damage}</div>
<div class="skill-cost">☻ ☻ ☻</div>
<div class="skill-description"><span class="skill-name">${person.Attack2}</span> Flip a coin. If tails, ${person.FirstName} does 10 damage to themself.</div>
<div class="skill-damage">${person.Attack2Damage}</div>
<div class="weakness wrr-header">weakness</div>
<div class="resistance wrr-header">resistance</div>
<div class="retreat wrr-header">retreat cost</div>
<div class="weakness wrr-value">☻</div>
<div class="resistance wrr-value"></div>
<div class="retreat wrr-value">☻ ☻</div>
<div class="description-above-footer">
  <ul>
    <li class="description-above-footer-border">${person.FirstName} ${person.LastName}, known for the hashtag ${person.HashTag}. He has a resistance of ${person.Resistances}, but weak to ${person.Weaknesses} LV. ${person.Cost} &nbsp; ${person.Gender}</li>
  </ul>
</div>
<div class="copyright"><strong>● Tucker Brown</strong> ©2023, CIS367. <strong>${person.id}/59 ●</strong></div>
`

      div.innerHTML = cardInnerHTML;
      document.body.appendChild(div);
    });
    
}
addAllCard();

function addCard(person){

}