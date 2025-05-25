var counter = 0;
function onClickColorChange(color){
    let colorableBox = document.getElementById("ColorableBox");
    let text = document.getElementById("ColorText");
    if (counter >= 3){
        text.setAttribute("text","value","Can no longer change color of the box");
        return;
    }
    switch (color){
        case "Red":
            colorableBox.setAttribute("color","#FF0000");
            break;
        case "Green":
            colorableBox.setAttribute("color","#00FF00");
            break;
        case "Blue":
            colorableBox.setAttribute("color","#0000FF");
            break;
        default:
            console.warn("Error, invalid color")
            return;
    }
    text.setAttribute("text","value",color)
    counter++;
}