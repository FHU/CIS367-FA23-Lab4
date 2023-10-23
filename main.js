const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
//const API_URL="/fhu-faculty-api.json"

addAllCards();

async function  addAllCards() {

    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log( person );
    });
    
    // for each item in data set (each person)
        // add that person's card to the DOM

    people.forEach( person => {

        let div = document.createElement('div');
        let cardInnerHTML = 
        `
                  <!-- BEGIN Casey -->
                  <div class="header-basic-title">Associate Professor</div>
                  <div class="header-profile-name">${person.FirstName} ${person.LastName}</div>
                  <div class="header-hp">${person.HP} HP</div>
                  <div class="header-icon">☻</div>
                  <div class="profile-image"><img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}"></div>
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

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);

    });
        
    

}

function addCard(person) {

}