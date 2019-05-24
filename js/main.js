const keyBuffer = new Array(110).fill(false);

const initMain = () => {
    const encodeSymbol = () => {
        const source = textarea.value;
        textarea.value = toSymbol(source);
    };

    const textarea = document.getElementsByTagName('textarea')[0];
    const button = document.getElementsByTagName('button')[0];

    textarea.addEventListener('keyup', event => {
        keyBuffer[event.keyCode] = false;
    });

    textarea.addEventListener('keydown', event => {
        keyBuffer[event.keyCode] = true;

        // tab
        if (keyBuffer[9]) {
            const text = textarea.value;
            const before = text.substr(0, textarea.selectionStart);
            const after = text.substr(textarea.selectionStart, text.length);

            textarea.value = `${before}\t${after}`;
            event.preventDefault();

            keyBuffer[9] = false;
        }

        // ctrl + enter
        if (keyBuffer[13] && keyBuffer[17]) {
            encodeSymbol();

            keyBuffer[13] = false;
            keyBuffer[17] = false;
        }
    });

    button.addEventListener('click', () => {
        encodeSymbol();
    });
};