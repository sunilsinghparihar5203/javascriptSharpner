//this in global scop

this.table = "window table"



//this inside function

//This inside an inner function

const cleanTable =function(soap){

 let that = this;

 const innerFunction = function(_soap){

   console.log(`cleanning ${that.table} uisng ${soap} `)

 }

 innerFunction(soap)

}





this.garage ={

 table: "garage table",

  cleanTable(){

 console.log(`cleaning ${this.table}`)

 }

}



//this inside method

let johnsRoom = {

 table : 'johns table',

 cleanTable(){

 console.log(`cleaning ${this.table}`)

 }

}

johnsRoom.cleanTable();

this.garage.cleanTable()



cleanTable.call(this,'some soap')

cleanTable.call(this.garage,'some soap')

cleanTable.call(johnsRoom,'some soap')