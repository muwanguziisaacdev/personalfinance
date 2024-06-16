import Add from './sumModule.js'

const actualIncome = document.getElementById('actualIncome');
const extraIncome = document.getElementById('extraIncome');
const totalIncome = document.getElementById('totalIncome');
const housingTotalIncome = document.getElementById('housingTotalIncome');
const InsuranceTotalIncome = document.getElementById('InsuranceTotalIncome');
const foodTotalIncome = document.getElementById('foodTotalIncome');
const personalCareTotalIncome = document.getElementById('personalCareTotalIncome');
const entertainmentTotalIncome = document.getElementById('entertainmentTotalIncome');
const loansTotalIncome = document.getElementById('loansTotalIncome');
const taxesTotalIncome = document.getElementById('taxesTotalIncome');
const charityTotalIncome = document.getElementById('charityTotalIncome');

// functions to calculate the the actual income and the extra income
const total = function() {
    const x = parseInt(actualIncome.value);
    const y = parseInt(extraIncome.value);
    return x + y
}
function calculate() {
    totalIncome.textContent = `UGX ${total()}`;
}

//functions to calculate the total housing cost
//the housing function is imported from the onclick function in html
function sumItems() {
    const housing = document.querySelectorAll('.housing');
    const Insurance = document.querySelectorAll('.Insurance');
    const food = document.querySelectorAll('.food');
    const personalCare = document.querySelectorAll('.personalCare');
    const entertainment = document.querySelectorAll('.entertainment');
    const loans = document.querySelectorAll('.loans');
    const taxes = document.querySelectorAll('.taxes');
    const charity = document.querySelectorAll('.charity');
    Add(housing, housingTotalIncome);
    Add(Insurance, InsuranceTotalIncome);
    Add(food, foodTotalIncome);
    Add(personalCare, personalCareTotalIncome);
    Add(entertainment, entertainmentTotalIncome);
    Add(loans, loansTotalIncome);
    Add(taxes, taxesTotalIncome);
    Add(charity, charityTotalIncome);
    
}
sumItems();
