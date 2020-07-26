const popupOpen         = document.getElementById('open-popup')
const popupClose        = document.getElementById('close-popup')
const popup             = document.getElementById('popup')

popupOpen.addEventListener('click', ()=>{
    popup.style.display = 'block'
})

popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none'
})
