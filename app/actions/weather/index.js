// functions here

function getCurrentWind() {
    var data = [];

    data.push({
        name: "LOCAL",
        location: "Goring",
        distance: "0.0",
        speed: "40",
        direction: "WSW"  
    })

    data.push({
        name: "WORTHING",
        location: "Worthing",
        distance: "0.8",
        speed: "39",
        direction: "WSW"  
    })

    data.push({
        name: "LANCING",
        location: "Lancing",
        distance: "6.6",
        speed: "38",
        direction: "WSW"  
    })

    return(data)
}


module.exports = {
    getCurrentWind
}