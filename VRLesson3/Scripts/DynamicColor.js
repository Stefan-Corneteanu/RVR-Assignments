var endedLoop = false;
AFRAME.registerComponent('dynamiccolor', {
    schema: {
        start: { type: 'color', default: 'black' },
        end: { type: 'color', default: 'white' },
        speed: { type: 'vec3', default: { x: 1, y: 1, z: 1 } },
        loop: { type: 'string', default: 'None' }
    },

    init: function () {
        const data = this.data;
        const mesh = this.el.getObject3D('mesh');
        if (!mesh) {
            console.warn('No mesh found on this element.');
            return;
        }

        this.startColor = new THREE.Color(data.start);
        this.endColor = new THREE.Color(data.end);
        this.currentColor = this.startColor.clone();
        this.speed = data.speed;
        this.loop = data.loop.toLowerCase();

        mesh.material.color.copy(this.startColor);

        // Ensure proper speed direction
        ['r', 'g', 'b'].forEach((ch, i) => {
            const startVal = this.startColor[ch];
            const endVal = this.endColor[ch];
            const speedAxis = ['x', 'y', 'z'][i];

            if (startVal !== endVal && this.speed[speedAxis] === 0) {
                console.warn(`Zero speed ${speedAxis} not acceptable; setting to -1 or 1`);
                this.speed[speedAxis] = startVal < endVal ? 1 : -1;
            }

            if ((startVal > endVal && this.speed[speedAxis] > 0) ||
                (startVal < endVal && this.speed[speedAxis] < 0)) {
                console.warn(`Inverting ${speedAxis} component of speed`);
                this.speed[speedAxis] *= -1;
            }
        });
    },

    tick: function (time, timeDelta) {
        const mesh = this.el.getObject3D('mesh');
        if (!mesh) return;

        const delta = timeDelta / 1000; // convert ms to seconds
        const current = mesh.material.color;
        const end = this.endColor;
        const speed = this.speed;

        // Update color channels
        ['r', 'g', 'b'].forEach((ch, i) => {
            const speedAxis = ['x', 'y', 'z'][i];
            const direction = speed[speedAxis] > 0 ? Math.min : Math.max;
            current[ch] = direction(current[ch] + speed[speedAxis] * delta, end[ch]);
        });

        // Apply color
        mesh.material.color.copy(current);

        // Looping logic
        if (current.equals(end)) {

            // Wait one last tick before applying looping startegy, so that end color is shown
            if (!endedLoop){
                endedLoop = true;
            }
            else{
                switch (this.loop) {
                    case 'repeat':
                        mesh.material.color.copy(this.startColor);
                        break;
                    case 'pingpong':
                        [this.startColor, this.endColor] = [this.endColor, this.startColor];
                        this.speed.x *= -1;
                        this.speed.y *= -1;
                        this.speed.z *= -1;
                        break;
                    case 'none':
                    default:
                        break;
                }
                endedLoop = false;
            }
        }
    }
});
