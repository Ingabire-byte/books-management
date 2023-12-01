const {booksDatabase}=require('../db/books');
const add = (newbooksdatabase) =>{
  newbooksdatabase.id = booksDatabase.length + 1;
  booksDatabase.push(newbooksdatabase);
  console.log('\nNew books added \n');
  console.log('\nbooks in the system after registering');
  console.log(booksDatabase);
}

const update = (id,key,value)=>{
    var exists = booksDatabase.find(element=> element.id===id);
    if (!exists){
        console.log("books not found\n");
    }else{
        exists[key]=value;
        console.log("registering books succefully\n");
        console.log(exists);
    }
  }
 const remove=(id)=>{
    var exists = booksDatabase.find(element=>element.id===id);
    if (!exists){
      console.log("books not available\n");
    }else{
      var remaining =[];
      remaining = booksDatabase.filter(element=>element.id!==id);
      console.log(remaining);
    }
      
 }


module.exports = {
add,
update,
remove,
}