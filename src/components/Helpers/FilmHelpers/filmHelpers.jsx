export { filterFilmsByDirector, getListOf, getFilmStats }

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

/**
 * 
 * @param {Array} list Array of objects
 * @returns An object with average score, total score, total number of movies, and the latest movie
 */
function getFilmStats(list) {
    const acc_score = list.reduce((stat, film) => {
        return stat + Number(film.rt_score);
    }, 0);

    const total = list.length;

    const avg_score = acc_score / total;

    const latest = Math.max(...list.map((movie) => movie.release_date));
    
    return {
        acc_score,
        avg_score,
        total,
        latest
    }
}