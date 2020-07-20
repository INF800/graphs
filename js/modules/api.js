// load axios

class APIHandler {
    constructor() {
      this.contryToLatLong = {
          "India"           : [ 77, 28],
          "Afghanistan"     : [ 67, 33],
};
    }

    newNode(country){
        var props = { radius  : 10, fillKey : 'blot', desc: 'This is '+ country}
        var [longi, lati] = this.contryToLatLong[country]

        return [longi, lati, props]
    }

}

handler = new APIHandler()