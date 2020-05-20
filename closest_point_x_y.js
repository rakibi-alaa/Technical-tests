const closestChildToShelter = (shelterCount,shelters,kidsCount,kids) =>{
    if((shelterCount != shelters.length) || (kidsCount != kids.length)){
        return 'Please enter valid data !'
    }
    const finalData = [];
    for (let index = 0; index < kids.length; index++) {
        const kid = kids[index];
        let distances = [];
        shelters.forEach(shelter => {
            let distance = Math.hypot(shelter.x- kid.x, shelter.y-kid.y);
          distances.push(parseInt(distance));
        });
        finalData.push({
            kid :kid.name,
            closestShelter : shelters[distances.indexOf(Math.min(...distances))].name
        })
    }

    return finalData;

}

console.log(closestChildToShelter(
    3,
    [
        {name : 'box1',x: 8,y:-6},{name : 'box2',x: 6,y:10},{name : 'box3',x: 4,y:5}
    ],
    4,
    [
        {name : 'kid1',x: 8,y:8},{name : 'kid2',x: 2,y:7},{name : 'kid3',x: -2,y:1},{name : 'kid4',x: -5,y:-7}
    ]
))