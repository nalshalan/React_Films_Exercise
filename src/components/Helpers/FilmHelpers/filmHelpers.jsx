export { filterFilmsByDirector, getListOf }

/**
 * 
 * @param {Array} list Array of film objects
 * @param {String} director Name of the director
 */
function filterFilmsByDirector(list, director) {
    if (director == "") {
        // If there is no particular director, then just return the full list
        return list;
    }
    return list.filter((element, index, array) => {
        //True or False
        return (element.director == director);
    });
}

/**
 * 
 * @param {Array} list Array of objects
 * @param {String} prop Property on the objects
 */
function getListOf(list, prop) {
    const resultArr = [];
    // Iterate over the provided list array
        // Grab each object's property value
    for(let i = 0; i < list.length; i++) {
        if(!resultArr.includes(list[i][prop])) {
            // If the array does NOT already include the value
            // Then add that value to the array
            resultArr.push(list[i][prop]);
        }
    }

    return resultArr;
}