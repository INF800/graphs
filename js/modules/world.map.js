var graphContainer = document.getElementById('container-graph')
var map;

var BUBBLES = [
    /*
    {name: 'Hot', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'blot'},
    {name: 'Chilly', latitude: -25.32, longitude: 120.32, radius: 18, fillKey: 'blot'},
    {name: 'Hot again', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'blot'},
    */
]

var ARCS = [
    /*{ 
        origin      : { latitude: 40.639722, longitude: 73.778889 },
        destination : { latitude: 37.618889,  longitude: -122.375 }
    },{
        origin      : { latitude: 30.194444, longitude: -97.67 },
        destination : { latitude: 25.793333, longitude: -0.290556 }
    },*/

    { origin: 'RUS', destination: 'IND'},
    { origin: 'RUS', destination: 'USA'},
    { origin: 'RUS', destination: 'CAN'},
    { origin: 'IND', destination: 'AUS'},
    { origin: 'ARE', destination: 'AUS'},
    { origin: 'CAN', destination: 'IND'},
]

function placeBubbles(lati, longi, props, BUBBLES){
    // props looks like { radius  : 20, fillKey : 'gt50', desc: 'xxx' }
    BUBBLES.push( {
        name: props.desc, 
        latitude: lati, 
        longitude: longi, /*centered: 'IND',*/ 
        radius: props.radius, 
        fillKey: props.fillKey
    })
    map.bubbles( BUBBLES,{
        popupTemplate: function(geo, data) {
            return "<div class='hoverinfo'>" + props.desc + "</div>";
        }
    })
}// end placeBubbles

function loadMap(){
    // clear existing
    graphContainer.innerHTML = null
    
    map = new Datamap({
        scope: 'world',
        element: graphContainer,
        projection: 'mercator',
        height: 500,

        fills: {
            defaultFill: '#31a354', gt50: '#04633f', lt50: '#a1d99b', darkgreen: '#023220', blot: 'red', blue: 'blue'
        },
        
        data: { USA: {fillKey: 'darkgreen'}, RUS: {fillKey: 'darkgreen'}, CAN: {fillKey: 'lt50'}, BRA: {fillKey: 'gt50'},
                ARG: {fillKey: 'gt50'}, COL: {fillKey: 'gt50'}, AUS: {fillKey: 'darkgreen'}, ZAF: {fillKey: 'gt50'},
                MAD: {fillKey: 'lt50'}       
        },

        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                    
                console.log('svg loc:', d3.event.pageY, d3.event.pageX )
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
                
                // mark node
                var [lati, longi, props] = handler.newNode(geography.properties.name)
                placeBubbles(lati, longi, props, BUBBLES)
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


// PlotGraph
function genGraphBubblesArcs(graph_info){

    console.log('plotting: ', graph_info)

    // clear
    BUBBLES = []
    ARCS = []

    // chache for long lats (for edges)
    var __id2coordinate = {}

    // bubbles - nodes
    // {name: 'Hot', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'blot'},
    for(let i=0; i<graph_info.vertices.length; i++){
        var node = graph_info.vertices[i]
        var [lat, long] = node.latLong

        BUBBLES.push({
            name: node.id,
            latitude: lat,
            longitude: long,
            radius: node.bubbleRad,
            fillKey: node.color
        })

        // gen cache for edges
        __id2coordinate[node.id] = node.latLong
    }

    // arcs - edges
    // {"initial": 'RUS', 'terminal': 'CAN'}
    // or
    //  { origin      : { latitude: 40.639722, longitude: 73.778889 },
    //    destination : { latitude: 37.618889,  longitude: -122.375 }}
    for(let i=0; i<graph_info.edges.length; i++){
        var edge = graph_info.edges[i]

        console.log(graph_info.edges[i], __id2coordinate)

        ARCS.push({
            origin: { latitude: __id2coordinate[edge['initial']][0], longitude: __id2coordinate[edge['initial']][1] },
            destination : { latitude: __id2coordinate[edge['terminal']][0],  longitude: __id2coordinate[edge['terminal']][1] }
        })
    }
}

