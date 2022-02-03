const fs = require('fs') 


const getArrayFromFile = ()=> {
    return new Promise(function (resolve, reject) {
        fs.readFile('tv_shows.csv', 'utf8', function (err, data) {

            if (err)
                reject(err);
            else

            var data_splited_by_break_line = data.split(/\n/gm);

            var data_parsed = data_splited_by_break_line.map(item=>{
                const array = item.split(',')
                return { id:array[1],
                        title:array[2],
                        year: array[3],
                        age:array[4],
                        imdb:array[5],
                        netflix:array[7],
                        hulu:array[8],
                        primevideo:array[9],
                        disney:array[10]
                     }
            }) 

            var data_filtered_and_sorted = data_parsed.filter(item=>item && item.title && item.title!='').sort((a,b)=>a.title.localeCompare(b.title))

            resolve(data_filtered_and_sorted);
        });
    });
}

module.exports = {getArrayFromFile}
  