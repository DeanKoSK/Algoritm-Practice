//Destructuring Assingnment with Nested Objects

const LOCAL_FORECAST = {
    today: {min: 72, max :83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxofTmrw(forecast) {
    "use strict"

    const { tommorow : { max : maxOfTomorrow}} = forecast; 
//tomorrow 맥스로 해주는 코드
    return maxOfTomorrow
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));