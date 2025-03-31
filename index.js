const celestialObjects = ['The moon', 'Pluto', 'Mercury', 'Venus', 'Neputune']; 
const zodiacSigns = ['Aries', 'Aquarius', 'Virgo', 'Capricorn', 'Cancer', 'Leo', 'Libra', 'Saggittarius', 'Scorpio', 'Gemini', 'Pisces']; 
const horoscopes = ['You will meet someone interesting today', 'Avoid seafood', 'Buy a lotto ticket']; 

const messageGenerator = () => {
    const rand1 = Math.floor(Math.random() * celestialObjects.length); 
    const rand2 = Math.floor(Math.random() * zodiacSigns.length); 
    const rand3 = Math.floor(Math.random() * horoscopes.length); 
    console.log(`${celestialObjects[rand1]} is in ${zodiacSigns[rand2]}. ${horoscopes[rand3]}`)
}

messageGenerator(); 

