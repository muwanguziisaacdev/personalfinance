const Add = (category, totalcost) => {
    const calculateSum = () => {
        let sum = 0;
        category.forEach(item => {
            const value = parseFloat(item.value);
            if(!isNaN(value)) {
                sum += value;
            }
        });
        totalcost.textContent = `Ugx ${sum}`;
    }
    calculateSum();
    category.forEach(item => {
        item.addEventListener('change', calculateSum);
    });
}

export default Add;