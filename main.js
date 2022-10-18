// Step 1 - Create onload handler
window.onload = () => {
    myHexaBgColor()
}

function myHexaBgColor() {
    // Step 3 - Collect all necessary reference
    const content = document.getElementById('content');
    const btn = document.getElementById('change_btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function () {
        const hexaBgColor = generateHexaColor();
        content.style.background = hexaBgColor;
        output.value = hexaBgColor;
    })
}


// Step 2 - Random color generator function
function generateHexaColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


// Step 4 - Handle the click event