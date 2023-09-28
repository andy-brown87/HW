class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }

  getJourneyStartLocations = function() {
    const foundStartLocation = this.journeys.map((journey) => journey.startLocation)
    return foundStartLocation

  }
  // Traveller.prototype.getJourneyStartLocations = function() {
  //   return this.journeys.map((journey) => {
  //     return journey.startLocation;

  getJourneyEndLocations = function() {
    const foundEndLocation = this.journeys.map((journey) => journey.endLocation)
    return foundEndLocation

  }

  getJourneysByTransport = function (transport) {
    const foundJourneyTransport = this.journeys.filter((journey) => journey.transport === transport)
    return foundJourneyTransport

  }

  getJourneysByMinDistance(minDistance) {
    const journeyWithMinDistance = this.journeys.filter((journey) => journey.distance > minDistance)
    return journeyWithMinDistance

  }

  calculateTotalDistanceTravelled() {
    return this.journeys.reduce((total, journeys) => (total += journeys.distance), 0)
  }
  

  
  getUniqueModesOfTransport() {

  }
}


module.exports = Traveller;