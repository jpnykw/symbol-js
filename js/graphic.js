onload = () => {
    const screen = {
        width: null,
        height: null,
        numbers: null,

        update: () => {
            screen.width = innerWidth;
            screen.height = innerHeight;

            if (screen.numbers == null) {
                screen.numbers = Array(230).fill().map(() => {
                    let x = Math.random() * screen.width;
                    let y = -200 + Math.random() * screen.height;
                    let length = 4 + ((Math.random() * 24) >> 0);
                    let size = 2 + Math.random() * 12;
                    return {x, y, size, length};
                });
            }
        }
    };

    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');

    const update = () => {
        screen.update();
        canvas.width = screen.width;
        canvas.height = screen.height;
    };

    const draw = () => {
        screen.numbers.forEach(data => {
            for (let i = 0; i < data.length; i++) {
                // ctx.beginPath();
                ctx.fillStyle = '#01ca40';
                ctx.font = `${data.size}px Arial`;
                ctx.fillText((Math.random() * 10) >> 0, data.x, data.y + i * 15);
            }

            data.y += data.size * 0.42;

            if (data.y > screen.height) {
                data.x = Math.random() * screen.width;
                data.y = -200;

                data.length = 3 + ((Math.random() * 13) >> 0);
                data.size = 1 + Math.random() * 14;
            }
        });
    };

    const tick = () => {
        requestAnimationFrame(tick);

        update();
        draw();
    };

    initMain();
    tick();
};