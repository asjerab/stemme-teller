
//  Dette er en js code som gjør slik at  tallene mine lagres is localstorage på brukerns maskin
let ap_votes = localStorage.getItem("ap_vote");
document.getElementById("count-el").innerHTML = localStorage.getItem("ap_vote");

function ap_vote() {
    ap_votes++;
    console.log(ap_votes)
    document.getElementById("count-el").innerHTML = ap_votes;
    alert("stemme lagret")
    window.location.reload();
    localStorage.setItem("ap_vote", ap_votes);
    document.getElementById("count-el").innerHTML = localStorage.getItem("ap_vote");
    // this resets the nummbers.
}


// dette er en function som jør slik at jeg kan resete localstorage via console log.
function resets() {
    localStorage.setItem("ap_vote", 0)
    localStorage.setItem("mdg_votes", 0)
    localStorage.setItem("h_votes", 0)
    window.location.reload()

    ap_votes = 0;
    mdg_votes = 0;
    h_votes = 0;
    document.getElementById("count-el").innerHTML = localStorage.getItem("ap_vote");
    document.getElementById("count-el2").innerHTML = localStorage.getItem("mdg_votes");
    document.getElementById("count-el3").innerHTML = localStorage.getItem("h_votes");
}




//  Dette er en js code som gjør slik at  tallene mine lagres is localstorage på brukerns maskin
let mdg_votes = localStorage.getItem("mdg_votes");
document.getElementById("count-el2").innerHTML = localStorage.getItem("mdg_votes");
function mdg_vote() {
    mdg_votes++;
    console.log(mdg_votes)
    document.getElementById("count-el2").innerHTML = mdg_votes;
    alert("stemme lagret")
    window.location.reload();
    localStorage.setItem("mdg_votes", mdg_votes);
    document.getElementById("count-el2").innerHTML = localStorage.getItem("mdg_votes");
}




//  Dette er en js code som gjør slik at  tallene mine lagres is localstorage på brukerns maskin
let h_votes = localStorage.getItem("h_votes");
document.getElementById("count-el3").innerHTML = localStorage.getItem("h_votes");
function h_vote() {
    h_votes++;
    console.log(h_votes)
    document.getElementById("count-el3").innerHTML = h_votes;
    alert("stemme lagret")
    window.location.reload();
    localStorage.setItem("h_votes", h_votes);

}





let date = String(new Date())
date = date.slice(0, 25)

var htmldate = document.getElementById('date')

htmldate.innerHTML = date

console.log(date)

