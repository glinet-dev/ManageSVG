const changeColorButton = document.getElementById('changeColorButton');
const svgObject = document.querySelector('.test object');

changeColorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    svgObject.onload = () => {
        const svgDoc = svgObject.contentDocument;
        const svgPaths = svgDoc.querySelectorAll('path');
        console.log(svgPaths[0].style,"svgPaths");
        svgPaths[0].style.fill= randomColor;
    };
    
    svgObject.data = './about-header-about.svg';
});
