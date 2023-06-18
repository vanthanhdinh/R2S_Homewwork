// let callbacks = [] 
// for (let i = 0; i < 10; i++) { 
//   callbacks.push(function() { console.log(i) }); 
//   if (i==2) setTimeout(callbacks[2],5000); 
//  } 
// callbacks[2](); 

  

// const inventory = [ 
//   {type:   "machine", value: 5000}, 
//   {type:   "machine", value:  650}, 
//   {type:      "duck", value:   10}, 
//   {type: "furniture", value: 1200}, 
//   {type:   "machine", value:   77} 

// ];

//  const countMachineValue = () => {
//     let count = 0;
//     for (const item of inventory) {
//        if (item.type == "machine")
//             count = count + item.value;
//         }
//     console.log('countMachineValue', count);
//     }
// const sortInventoryAsc = () => {
//     let sortInventory = inventory;
//    sortInventory.sort((a, b) => a.value - b.value);
//    console.log( sortInventory )
// };
// const sortInventoryDes = () => {
//     let sortInventory = inventory;
//    sortInventory.sort((a, b) => b.value - a.value);
//    console.log( sortInventory )
// };
// sortInventoryAsc();
// sortInventoryDes();
// countMachineValue();



//??
// function go(options) { 
//   let {speed = 4, 
//        enable: {hyperdrive = false, 
//                 frobnifier = true}} = options 
//   console.log("speed=", speed, 
//               "hyperdrive:", hyperdrive, 
//               "frobnifier:", frobnifier) 
// } 
// const optionsParam = { }; 
// go(optionsParam) 


// const users = [ 
//   { id: 1, admin: false }, 
//   { id: 2, admin: false }, 
//   { id: 3, admin: true } 
// ]; 

// const displayAdmin = () => { 
//   for(let user of users){
//     if (user.admin == true)
//         console.log(user.id);
//   };  
// };
// displayAdmin();


// const sum = (a,b) => {
//     if (a === undefined) { 
//     a = 0;  
//   } 
//      if (b === undefined) { 
//     b = 0; 
//   }  
//     console.log(a + b);
// }
// sum(5,6)

