window.addEventListener('load', (event) => {
    //alert('page is fully loaded');
    __init__()
  });

function __init__(){
    // gen data to plot graph
    //graph_info = document.getElementById('pre')
    plotGraph(graph_info)

    // map to globals
    loadMap()

}


const graph_info = {
  "props": {
      "plot_dims"    : (100,100),
      "directed"     : false,
      "weighted"     : true
  },
  "vertices": [
      {
          "id"        : 'RUS',
          "latLong"   : latLongs.RUS,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'CAN',
          "latLong"   : latLongs.CAN,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'USA',
          "latLong"   : latLongs.USA,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'CHN',
          "latLong"   : latLongs.CHN,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'BRA',
          "latLong"   : latLongs.BRA,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'AUS',
          "latLong"   : latLongs.AUS,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'IND',
          "latLong"   : latLongs.IND,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'ARG',
          "latLong"   : latLongs.ARG,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'KAZ',
          "latLong"   : latLongs.KAZ,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'DZA',
          "latLong"   : latLongs.DZA,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'COD',
          "latLong"   : latLongs.COD,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'GRL',
          "latLong"   : latLongs.GRL,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'SAU',
          "latLong"   : latLongs.SAU,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'MEX',
          "latLong"   : latLongs.MEX,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'IDN',
          "latLong"   : latLongs.IDN,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'SDN',
          "latLong"   : latLongs.SDN,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'LBY',
          "latLong"   : latLongs.LBY,
          "color"     : 'blot',
          'bubbleRad' : 10 
      },{
          "id"        : 'IRN',
          "latLong"   : latLongs.IRN,
          "color"     : 'blot',
          'bubbleRad' : 10 
      }
  ],

  "edges" : [
      {"initial": 'RUS', 'terminal': 'CAN'},
      {"initial": 'RUS', 'terminal': 'USA'},
      {"initial": 'RUS', 'terminal': 'CHN'},
      {"initial": 'RUS', 'terminal': 'BRA'},
      {"initial": 'RUS', 'terminal': 'AUS'},
      {"initial": 'RUS', 'terminal': 'IND'},
      {"initial": 'RUS', 'terminal': 'ARG'},
      {"initial": 'RUS', 'terminal': 'KAZ'},
      {"initial": 'RUS', 'terminal': 'DZA'},
      {"initial": 'RUS', 'terminal': 'COD'},
      {"initial": 'RUS', 'terminal': 'GRL'},
      {"initial": 'RUS', 'terminal': 'SAU'},
      {"initial": 'RUS', 'terminal': 'MEX'},
      {"initial": 'RUS', 'terminal': 'IDN'},
      {"initial": 'RUS', 'terminal': 'SDN'},
      {"initial": 'RUS', 'terminal': 'LBY'},
      {"initial": 'RUS', 'terminal': 'IRN'}
  ]
}
