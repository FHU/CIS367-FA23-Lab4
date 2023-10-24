const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
async function addCards(){
    //Load Data
    
    let response = await fetch(API_URL)
    let data = await response.json();
    //Foreach add card.
    data.forEach(person =>{
        let div = document.createElement('div');
        let cardHTML = 
`<div class="card-container">
    <div class="card-background">
        <div class="card-frame">
            
            <div class="card-head">
                <h1 id="Nickname">${person.NickName}</h1>
                <h1>HP <div id="HP">${person.HitPoints}</div></h3>
            </div>

            <div class="image_container">
            <img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image} " alt="${person.FirstName} ${person.LastName}">
            </div>

            <div class="text-container">
                <div class="coststamina">
                    <h1>Cost: <b id="cost">${person.Cost}</b></h1>
                    <h1>Stamina: <b id="stamina">${person.Stamina}</b></h1>
                </div>

                <hr/>

                <div class="attack">
                    <h1 id="attack1_title">${person.Attack1}</h1>
                    <h1 id="attack1_damage">${person.Attack1Damage}</h1>
                </div>

                <div class="attack">
                    <h1 id="attack2_title">${person.Attack2}</h1>
                    <h1 id="attack2_title">${person.Attack2Damage}</h1>
                </div>

                <hr/>

                <div class="details">
                    <div>
                        <h1>Resistances</h1>
                        <p id="resitances">${person.Resistances}</p>
                    </div>
                    <div>
                        <h1>Weakness</h1>
                        <p id="weakness">${person.Weaknesses}</p>
                    </div>
                </div>
            </div>

            <div class="card-footer">
                <h1>&#169;2023</h4>
                <h1 id="HashTag">${person.HashTag}</h4>
                <h1><b id="firstname">${person.FirstName}</b> <b id="lastname">${person.LastName}</b></h4>
            </div>

        </div>

    </div>
</div>`  
    div.innerHTML = cardHTML;
    document.body.appendChild(div);
    })
}

function addCardPerson(){

}
addCards()