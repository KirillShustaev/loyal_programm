import './styles/index.css';

let progChoiceBtn = document.querySelectorAll(".prog__choiceBtn")
let progCompList = document.querySelectorAll('.prog__item')

function progChoice() {
    progChoiceBtn.forEach(e => {
    let targetBlock = e.getAttribute('data-target')

    e.addEventListener("click", ()=> {
        progCompList.forEach(block => {
            if (block.classList.contains(targetBlock)){
                block.classList.add("visible");
                block.classList.remove("none");
            } else {
                block.classList.remove("visible");
                block.classList.add("none");
            }
            if(targetBlock === "all") {
                block.classList.add("visible");
                block.classList.remove("none");
            }
        })



        for(let elem of progChoiceBtn) {
            elem.classList.remove("active")
        }
        e.classList.add("active")
    })

})
}

progChoice()