const {getArrayFromFile} = require('./dataset')

const searchShowByName = async (name)=>{

  try{
    const shows_array = await getArrayFromFile()
 
    const name_to_lowercase = name.toLowerCase()

    const filtered_array_by_name = shows_array.filter(show=>show.title && 
                          show.title.toLowerCase().includes(name_to_lowercase))
 
   return {list:filtered_array_by_name}
  
  }catch(err){
    console.log(err)
  }
}

const searchAll = async ()=>{

  try{
    const shows_array = await getArrayFromFile()
 
    return {list:shows_array}
  
  }catch(err){
    console.log(err)
  }
}

module.exports = {searchShowByName,searchAll }