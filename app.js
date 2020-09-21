const svg1 = document.querySelector('#svg1')
const $textContent = document.getElementById('textContent')
const $textImage = document.getElementById('textImage')

document.addEventListener('click', (event) => {

    if(event.target.dataset.description){
        let {description, imgOption = "0% 0%/100%"} = event.target.dataset
        imgOption = imgOption.split('/')

        $textContent.textContent = description
        $textImage.style.backgroundSize = imgOption[1]
        $textImage.style.backgroundPosition = imgOption[0]
    }

    if(event.target.dataset.menuToggler){
        document.getElementById(event.target.dataset.menuToggler).classList.toggle('open')
    }

}, {
    passive: true
})





































