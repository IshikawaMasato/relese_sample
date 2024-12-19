// フォントを読み込む
function fontLoad() {
    var config = {
        kitId: 'ful7xyn',
        scriptTimeout: 3000,
        async: true
    },
    h = document.documentElement,
    t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, 
    config.scriptTimeout), 
    tk = document.createElement("script"), f = false, s = document.getElementsByTagName("script")[0], a; h.className += " wf-loading"; 
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; 
    tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; 
    f = true; clearTimeout(t); 
    try { Typekit.load(config) } catch (e) { } }; 
    s.parentNode.insertBefore(tk, s)
}

fontLoad();

// 読み込みが終了したら実行
function endLoading() {
        // 表示する要素を取得
        let header = document.getElementById('header');
        let main = document.getElementById('main');
        let loading = document.getElementById('loading');

        console.log(content)
        
        // ロード画面を隠して、メインコンテンツを表示
        loading.style.display = 'none';
        header.style.display = 'block';
        main.style.display = 'block';
}

window.onload = function() {
    endLoading();
}



// スクロールイベント
window.addEventListener('scroll', function() {
    // 全てのitemを取得
    const item = this.document.querySelectorAll('.item');

    for(let i = 0 ; i < item.length ; i++) {
        // itemのオフセットの高さを取得
        let targetTop = item[i].offsetTop;

        if(window.scrollY + 500 > targetTop) {
            // 各itemにshowクラスを追加
            item[i].classList.add('show');
        }
    }
})