var graphContainer = document.getElementById('container-graph')
var map;

var BUBBLES = [
    {name: 'Hot', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'blot'},
    {name: 'Chilly', latitude: -25.32, longitude: 120.32, radius: 18, fillKey: 'blot'},
    {name: 'Hot again', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'blot'},
]

var ARCS = [
    { 
        origin      : { latitude: 40.639722, longitude: 73.778889 },
        destination : { latitude: 37.618889,  longitude: -122.375 }
    },{
        origin      : { latitude: 30.194444, longitude: -97.67 },
        destination : { latitude: 25.793333, longitude: -0.290556 }
    },
    { origin: 'RUS', destination: 'IN'}
]

function placeBubbles(longit, latid, props, BUBBLES){
    // props looks like { radius  : 20, fillKey : 'gt50', desc: 'xxx' }
    BUBBLES.push( {name: props.desc, centered: 'IND', radius: props.radius, fillKey: props.fillKey} )
    map.bubbles( BUBBLES,{
        popupTemplate: function(geo, data) {
            return "<div class='hoverinfo'>" + props.desc + "</div>";
        }
    })
}// end placeBubbles

function loadMap(){

    map = new Datamap({
        scope: 'world',
        element: graphContainer,
        projection: 'mercator',
        height: 500,

        fills: {
            defaultFill: '#31a354', gt50: '#04633f', lt50: '#a1d99b', darkgreen: '#023220', blot: 'red'
        },
        
        data: { USA: {fillKey: 'darkgreen'}, RUS: {fillKey: 'darkgreen'}, CAN: {fillKey: 'lt50'}, BRA: {fillKey: 'gt50'},
                ARG: {fillKey: 'gt50'}, COL: {fillKey: 'gt50'}, AUS: {fillKey: 'darkgreen'}, ZAF: {fillKey: 'gt50'},
                MAD: {fillKey: 'lt50'}       
        },

        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                    
                console.log(d3.event.pageY, d3.event.pageX )
                console.log(geography.properties.name);
                /*
                //place #map-bubble class div at locn. 
                var bubbly = document.getElementById("map-bubble");
                console.log(bubbly)
                bubbly.style.position   = "absolute"
                bubbly.style.top        = d3.event.pageY 
                bubbly.style.left       = d3.event.pageX
        
                console.log(bubbly)
                //bubbly.fadeIn("slow");
                */

                // Dynamically place bubble
                // var props = { radius  : 10, fillKey : 'gt50', desc: 'xxx' }
                // var longi = Math.random() * 100 //77.32
                // var lati  = Math.random() * 100 //28.644800
                var [longi, lati, props] = handler.newNode(geography.properties.name)
                placeBubbles(longi, lati, props, BUBBLES)
            });
        } 

    }) 

    // arcs
    map.arc( ARCS, { strokeWidth: 2 });

    //bubbles, custom popup on hover template
    map.bubbles(BUBBLES, {
        popupTemplate: function(geo, data) {
            return "<div class='hoverinfo'>It is " + data.name + "</div>";
        }
    });

} // end loadMap
