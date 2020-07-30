const popupOpen         = document.getElementById('open-popup')
const popupClose        = document.getElementById('close-popup')
const popup             = document.getElementById('popup')
const submitNewInfo     = document.getElementById('submit-new-info')

popupOpen.addEventListener('click', ()=>{
    setPre(graph_info)
    popup.style.display = 'block'
})

popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none'
})

submitNewInfo.addEventListener('click', ()=> {
    // act on new data
    payload = getJSONFromPre()
    
    // reload
    //__init__(payload)
    // or update
    genGraphBubblesArcs(payload)
    
    // arcs
    map.arc( ARCS, { strokeWidth: 2 });

    //bubbles, custom popup on hover template
    map.bubbles(BUBBLES, {
        popupTemplate: function(geo, data) {
            return "<div class='hoverinfo'>It is " + data.name + "</div>";
        }
    });
    
    // remove popup
    popup.style.display = 'none'
})