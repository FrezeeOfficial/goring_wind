// functions here

function getCurrentWind() {
    var data = [];

    data.push({
        name: "LOCAL",
        location: "Goring",
        distance: "0.0",
        speed: "40",
        direction: "WSW",
        long: -0.440456,
        lat: 50.802951,
        key: 0
    })

    data.push({
        name: "WORTHING",
        location: "Worthing",
        distance: "0.8",
        speed: "39",
        direction: "WSW",
        long: -0.405974,
        lat: 50.805921,
        key: 1
    })

    data.push({
        name: "LANCING",
        location: "Lancing",
        distance: "6.6",
        speed: "38",
        direction: "WSW",
        long: -0.324343,
        lat: 50.819954,
        key: 2
    })

    return(data)
}


module.exports = {
    getCurrentWind
}