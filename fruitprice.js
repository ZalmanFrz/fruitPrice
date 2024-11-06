const prompt = require(`prompt-sync`)({sigint:true});

const fruitName = prompt(`Enter a fruits name = `);


switch(fruitName){
    case `apple`:
        console.log(`150/kg`);
        break;
        
        case `mango`:
        console.log(`200/ kg`);
        break;

        case `grapes`:
        
        console.log(`250/ kg`);
        break;

        case `banana`:
        
        console.log(`85/ kg`);
        break;

        default:
            console.log(`Invalid Input`);
}