
var elHeader = document.querySelector(`.heading`);
var elMain = document.querySelector(`.description`);

var usdToUzs = 9433.34;
var euroToUzs = 10354.03;

var planedUsd = 500; 
var hotelUsd = 250;  
var museumEuro = 120; 

alert(`Assalomu alaykum Alisher Travel xizmatimizga xush kelibsiz.`)
alert(`Borish-kelish samolyot bileti: 500$.`);
alert(`Mehmonxona to’lovi: 250$.`);
alert(`Muzey va ko’ngilochar joylar uchun: 120 E.`);
alert(`Minimal mablag': 8.317.500`)

var totalExpance = usdToUzs * (planedUsd + hotelUsd) + museumEuro * euroToUzs

var userBudget = Number(prompt(`Alisher mablag'ingizni kiriting:`, 0));

if(totalExpance < userBudget && userBudget < 10000000) {
    elHeader.textContent = `Alisher mablag'ingiz yetarli Oq yo'l!`;
}else if(userBudget > 10000000) {
    elHeader.textContent = `Bu mablag' bilan yillab sayohat qilishiz mumkin.`;
}
else {
    elHeader.textContent = `Alisher yana ozgina ishlash kerak ekan.`;
}

elMain.textContent = `Alisher ximatimizdan foydalanganingiz uchun xursandmiz sog' bo'lin.`


//Minimum cost: 8.317.500

console.log(userBudget);