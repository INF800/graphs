// load axios

class APIHandler {
    constructor() {
      this.x = 0
    }

    newNode(country){
        var props = { radius  : 10, fillKey : 'blue', desc: 'This is '+ country}
        var [lati, longi] = latLongs[countryName2Id[country]]

        console.log(latLongs[countryName2Id[country]])

        return [lati, longi, props]
    }

}

handler = new APIHandler()