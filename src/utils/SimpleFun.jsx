export const generateUUID = () => {
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export const validateEmail = (str) => {      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(str); 
}


export const convertToInternationalCurrencySystem = (labelValue) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}

// convert Array to special object
export const convertLiToObj = (arr, key) => {
    return arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
}

// array groupby function
export const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
       const key = obj[property];
       if (!acc[key]) {
          acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
    }, {});
 }


// sort array function
function SortArray(key) {
    return function(x, y) {
        if (x[key] < y[key]) {return -1;}
        if (x[key] > y[key]) {return 1;}
        return 0;
    }
}
export const sortArrayAlphabetically = (arr, key) => {
    var result = arr.sort(SortArray(key))
    return result
}

export const sortArrayByKey = (arr, key) => {
    var result = arr.sort(SortArray(key))
    return result
}

export const sumSpecialFieldOfArray = (arr, key) => {
    return arr.reduce((a, b) => a + (b[key] || 0), 0)
}
