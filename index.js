const celestialObjects = ['THe moon', 'Pluto', 'Mercury', 'Venus', 'Neputune']; 
const zodiacSigns = ['Aries', 'Aquarius', 'Virgo', 'Capricorn', 'Cancer', 'Leo', 'Libra', 'Saggittarius', 'Scorpio', 'Gemini', 'Pisces']; 
const horoscopes = ['You will meet someone intereesting today', 'Avoid seafood', 'Buy a lotto ticket']; 

const messageGenerator = () => {
    const rand1 = Math.floor(Math.random() * celestialObjects.length); 
    const rand2 = Math.floor(Math.random() * zodiacSigns.length); 
    const rand3 = Math.floor(Math.random() * horoscopes.length); 
    console.log(`rand1, rand2, rand3`)
}

messageGenerator(); 

