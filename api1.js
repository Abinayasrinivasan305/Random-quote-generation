let divele;
let curr;
let div1=document.getElementById('quote1');
let authdiv=document.getElementById('author');
let data;

const hex=["insp1.jpg","insp2.jpg","insp3.jpg","insp4.jpg","insp5.jpg","insp6.jpg","insp7.jpg","insp8.jpg","insp9.jpg","insp10.jpg",
"insp11.jpg","insp12.jpg","insp13.jpg","insp14.jpg","insp15.jpg","insp16.jpg","insp17.jpg","insp18.jpg","insp19.jpg","insp20.jpg",
"insp21.jpg","insp22.jpg","insp23.jpg","insp24.jpg","insp25.jpg","insp26.jpg","insp27.jpg","insp28.jpg","insp29.jpg","insp30.jpg",
"insp31.jpg","insp32.jpg","insp33.jpg","insp34.jpg","insp35.jpg","insp36.jpg"];

window.addEventListener('load', generatebgimage);

function generatebgimage() {
    let bgimage = randomHexValue();
    document.body.style.backgroundImage = `url('${bgimage}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function randomHexValue() {
    const randomIndex = Math.floor(Math.random() * hex.length);
    console.log(hex[randomIndex]);
    return hex[randomIndex];
}

fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(msg => {
        divele = msg[Math.floor(Math.random() * msg.length)];
        display(divele);
    });

function display(divele) {
    curr = Object.entries(divele);
    let text = curr[0][1];
    let auth = curr[1][1];
    div1.innerHTML = `Your Quote is: ${text}`;
    authdiv.innerHTML = `~Author is: ${auth}`;
}
