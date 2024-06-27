function resetFlexbox() {
    document.getElementById('flexContainer').style.flexDirection = 'row';
    document.getElementById('flexContainer').style.justifyContent = 'flex-start';
    document.getElementById('flexContainer').style.alignItems = 'stretch';
    document.getElementById('flexContainer').style.gap = '0px';
 
    document.getElementById('grow1').value = 0;
    document.getElementById('grow2').value = 0;
    document.getElementById('grow3').value = 0;
    document.getElementById('grow4').value = 0;
 
    updateFlexGrow(1);
    updateFlexGrow(2);
    updateFlexGrow(3);
    updateFlexGrow(4);


}
 
function setFlexDirection(direction) {
    document.getElementById('flexContainer').style.flexDirection = direction;
}
 
function setJustifyContent(justify) {
    document.getElementById('flexContainer').style.justifyContent = justify;
}
 
function setAlignItems(align) {
    document.getElementById('flexContainer').style.alignItems = align;
}
 
function updateGap() {
    const gap = document.getElementById('gap').value;
    document.getElementById('flexContainer').style.gap = `${gap}px`;
}
 
function updateFlexGrow(boxNumber) {
    const grow = document.getElementById(`grow${boxNumber}`).value;
    document.getElementById(`box${boxNumber}`).style.flexGrow = grow;
}

function growAll() {
    const growValue = prompt("Enter the flex-grow value for all boxes:", "1");
    if (growValue !== null) {
        document.getElementById('grow1').value = growValue;
        document.getElementById('grow2').value = growValue;
        document.getElementById('grow3').value = growValue;
        document.getElementById('grow4').value = growValue;

        updateFlexGrow(1);
        updateFlexGrow(2);
        updateFlexGrow(3);
        updateFlexGrow(4);
    }
}
