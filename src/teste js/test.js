

let objet = [
    {name:"a1",type:"A1"},
    {name:"a2",type:"A2"} 
       ]

       const data = objet.filter(element=> element.name == 'a1')


       if(data.length>10){
        console.log(data)
       }
       else{objet}
       let originalArray = [{a: 1, b: 2}, {c: 3, d: 4}];
       let deepCopyArray = JSON.parse(JSON.stringify(originalArray));

       console.log(deepCopyArray); // [{a: 1, b: 2}, {c: 3, d: 4}]

originalArray[0].a = 99;
console.log(originalArray); // [{a: 99, b: 2}, {c: 3, d: 4}]
console.log(deepCopyArray); 