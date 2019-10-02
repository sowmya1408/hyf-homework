const input = document.createElement('input');
const btn = document.createElement('button');
btn.textContent = 'click';
const body = document.querySelector('body');
body.appendChild(input);
body.appendChild(btn);
            // spirit list
const spiritList = ['Intelligence wolf', 'wisdom owl', 'Focus Hawk','Smart fox','Personality Butterfly','Peace dolphin','Strength Bear','Gentleness deer','Unconditional dog','driving force horse'];
const randomSpiritAnimalNames = spiritList[Math.floor(Math.random(spiritList) * 10)];             
const para = document.createElement('p');
body.appendChild(para);

        // click button
const selection = document.getElementById("select");

        btn.addEventListener('click', function () {
            const inputText = input.value;
            if(inputText){
                return para.textContent = `Name:${inputText.charAt(0).toUpperCase() + inputText.slice(1)}: ${inputText.charAt(0).toUpperCase() + inputText.slice(1)} - ${randomSpiritAnimalNames}`;      
        
            } else {
                return para.textContent = `Please input your name`;
        
        
        }

});



// hovers on the input field 

input.addEventListener('mouseover', function () {
    const hoverInputText = input.value;
    if(selection.value === "hover" && hoverInputText) {
    return para.textContent = `Name:${hoverInputText.charAt(0).toUpperCase() + hoverInputText.slice(1)}: ${hoverInputText.charAt(0).toUpperCase() + hoverInputText.slice(1)} - ${randomSpiritAnimalNames}`;
}
})

// text-written on the input field

input.addEventListener('input', function() {
    const writtenInputText = input.value;
    if(selection.value === "text-written" && writtenInputText) {
    return para.textContent = `Name:${writtenInputText.charAt(0).toUpperCase() + writtenInputText.slice(1)}: ${writtenInputText.charAt(0).toUpperCase() + writtenInputText.slice(1)} - ${randomSpiritAnimalNames}`;
}  
})

    
   
// Generate New spirit animal

const generateButton = document.createElement('button');
body.appendChild(generateButton);
generateButton.textContent = "Generate new spirit animal";
generateButton.addEventListener('click', function(){
    const randomSpiritAnimalNames = spiritList[Math.floor(Math.random(spiritList) * 10)]; 
    const generateInputText = input.value;
    if(generateInputText){
        return para.textContent = `Name:${generateInputText.charAt(0).toUpperCase() + generateInputText.slice(1)}: ${generateInputText.charAt(0).toUpperCase() + generateInputText.slice(1)} - ${randomSpiritAnimalNames}`;

    } else {
        return para.textContent = `Please input your name`;


}

})





