var UndergroundSystem = function() {
    this.customersObj = {} // for saving checkins
    this.trips = {} // for saving arrays of times for every way
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customersObj[id] = [stationName, t] // save check in data of current customer
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const dt = t - this.customersObj[id][1] //time between stations of current customer
    const way = this.customersObj[id][0] + "#" + stationName // save way in string
    // add time of current way to "trip" object
    if (this.trips[way] === undefined) this.trips[way] = [dt]
    else  this.trips[way].push(dt)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const way = startStation + "#" + endStation // create way string ti find it in "trip" object
    const tArr = this.trips[way] // get all times 
    return tArr.reduce((acc, val) => acc + val, 0)/ tArr.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */