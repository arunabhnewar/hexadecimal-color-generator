// Step 1 - Create onload handler
window.onload = () => {
    myHexaBgColor();
}

function myHexaBgColor() {

    // Step 3 - Collect all necessary reference
    const content = document.getElementById('content');
    const btn = document.getElementById('change_btn');
    const output = document.getElementById('output')

    // Step 4 - Handle the click event
    btn.addEventListener('click', function () {
        const myBgColor = hexaColorGenerate();
        content.style.background = myBgColor;
        output.value = myBgColor;
    })

    // Step 2 - Random color generator function
    function hexaColorGenerate() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
}










