var t = 0
var triggered = false;
AFRAME.registerComponent('wave',{

    init: function(){
        // trigger on mouse enter
        this.el.addEventListener("mouseenter", () => triggered = true);
    },

    tick: function(time,timeDelta){
        t += timeDelta;

        // trigger after 5 seconds (5000 ms)
        if (t >= 5000){
            triggered = true;
        }

        // rotate
        if (triggered){
            let rotation = this.el.getAttribute("rotation");
            rotation.x += 5;
            this.el.setAttribute("rotation", rotation);
        }
    }
});