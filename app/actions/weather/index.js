// functions here

function getCurrentWind() {
    var data = [];

    data.push({
        name: "LOCAL",
        status: "running",
        location: "GORING STATION",
        distance: "0.0",
        speed: "34",
        direction: "WSW",
        bearing: "225",
        long: -0.440456,
        lat: 50.802951,
        key: 0
    })

    data.push({
        name: "WORTHING",
        status: "down",
        location: "Worthing",
        distance: "0.8",
        speed: "39",
        direction: "WSW",
        bearing: "225",
        long: -0.405974,
        lat: 50.805921,
        key: 1
    })

    data.push({
        name: "LANCING",
        status: "down",
        location: "Lancing",
        distance: "6.6",
        speed: "38",
        direction: "ESE",
        bearing: "115",
        long: -0.324343,
        lat: 50.819954,
        key: 2
    })

    return(data)
}

function getTide() {
    const data = [
        {name: 'Low', uv: 1.0},
        {name: 'High', uv: 5.4},
        {name: 'Low', uv: 1.3},
        {name: 'High', uv: 5.5},
        {name: 'Low', uv: 1.0}
  ];

  return data;
}


module.exports = {
    getCurrentWind,
    getTide
}