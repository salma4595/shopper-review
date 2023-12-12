console.log('hello')      
const radioButtons = document.querySelectorAll('input[name="rating"]');
let selectedStars;
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', () => {
        selectedStars = radioButton.value;
        if(selectedStars == 1) {
            document.querySelector('#selectedStar').innerText = `${selectedStars} star`;
        }
        else {
            document.querySelector('#selectedStar').innerText = `${selectedStars} stars`;
        }
    })
}