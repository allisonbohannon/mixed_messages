const celestialObjects = ['test1', 'test2', 'test3']; 
const zodiacSigns = ['test1', 'test2', 'test3']; 
const horoscopes = ['test1', 'test2', 'test3']; 

const messageGenerator = () => {
    const rand1 = Math.floor(Math.random() * celestialObjects.length); 
    const rand2 = Math.floor(Math.random() * zodiacSigns.length); 
    const rand3 = Math.floor(Math.random() * horoscopes.length); 
    console.log(rand1, rand2, rand3)
}

messageGenerator(); 

