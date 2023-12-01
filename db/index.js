const  booksDatabase  = require('../controller/bookRegistration');

const {add,update,remove} = booksDatabase;

var newbooksdatabase ={
    id: 6, 
    title: 'love is blind', 
    author: 'Joshua', 
    year: 1998 
    };

add (newbooksdatabase);
update (1,'year',2222);
remove(4);
