let ratings = document.querySelectorAll(".rating")
let submitBtn = document.querySelector(".submit")
let sections = document.querySelectorAll("section")
let ratingNumber = document.querySelector("span")
let ratingValue = "0";

const toggleRating = e => {
    let ratingSelected = e.target
    if (ratingSelected.classList.contains("selected")) {
        ratingSelected.classList.remove("selected")
        submitBtn.classList.add("noHover")
        ratingValue=0
        return
    }

ratings.forEach ((rating) => {
if (rating.classList.contains ("selected")) {
    rating.classList.remove("selected")
}
})

ratingSelected.classList.add("selected")
 submitBtn.classList.add("noHover")
 ratingValue = selectedRating.innerText
 return
}

const toggleState = () => {
    sections[0].classList.replace("main", "hidden")
    sections[1].classList.replace("hidden", "main")
    ratingNumber.innerText=ratingValue
}

ratings.forEach((rating) => {
    rating.addEventListener("click", toggleRating);    
})

submitBtn.addEventListener("click", toggleState)




