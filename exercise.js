var exercise = {};

exercise.countRecords = function(data){
    var num = 0;
    var add =  function(item,index,array){
        num = num + 1;
    }
    data.forEach(add)
    return num
    return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    var NumCrimeDistrict = 0;
    var add2 = function(item,index,array){
        // console.log(item[19])
        if (item[19] == district){
            NumCrimeDistrict = NumCrimeDistrict + 1;
        }
    }
    data.forEach(add2)
    return NumCrimeDistrict
    return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    var NumPrimaryType = 0;
    var add3 = function(item,index,array){
        // console.log(item[13])
        if (item[13] == primaryType){
            NumPrimaryType = NumPrimaryType + 1;
        }
    }
    data.forEach(add3)
    return  NumPrimaryType
    return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    var NumLocation = 0;
    var add3 = function(item,index,array){
        // console.log(item[15])
        if (item[15] == location){
            NumLocation = NumLocation + 1;
        }
    }
    data.forEach(add3)
    return  NumLocation
    return 'Error: countLocation not implemented';
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    // console.log(point)
    return point;    
    //-------------------------------------------    
    return 'Error: buildLatLngPoint not implemented';
};




