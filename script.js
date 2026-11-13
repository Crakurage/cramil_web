
function showPage(page) {
    const content = document.getElementById("content");

    const pages = {
        home: `
            <h2>WELCOME</h2>
            <p>カジノへようこそ。</p>
        `,
        puzzle: `
            <h2>PUZZLE</h2>
            <p>ここに問題が表示されます。</p>
            <input type="text" placeholder="回答を入力">
            <button>回答する</button>
        `,
        game: `
            <h2>CASINO GAME</h2>
            <p>ここでゲームに参加できます。</p>
        `,
        shop: `
            <h2>SHOP</h2>
            <p>ここで商品を購入できます。</p>
        `
    };

    content.innerHTML = pages[page];
}
