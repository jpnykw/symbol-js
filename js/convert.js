let table = null;

const toSymbol = (source, type) => {
    if (table === null) {
        return '';
    }

    const symbolSource = source.split('').map(char => `(${table[char]})`).join('+');
    const symbolResult = `[][(({})+[])[-~-~-~-~-~[]]+(({})+[])[-~[]]+($+[])[-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+(({})+[])[-~-~-~-~-~[]]+(!![]+[])[+[]]+(({})+[])[-~[]]+(!![]+[])[-~[]]][(({})+[])[-~-~-~-~-~[]]+(({})+[])[-~[]]+($+[])[-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+(({})+[])[-~-~-~-~-~[]]+(!![]+[])[+[]]+(({})+[])[-~[]]+(!![]+[])[-~[]]](${symbolSource})()`;

    if (type === 0) {
        return symbolSource;
    } else {
        return symbolResult;
    }
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        table = JSON.parse(xhr.responseText);
    }
};

xhr.open('GET', './data/table.json');
xhr.send();