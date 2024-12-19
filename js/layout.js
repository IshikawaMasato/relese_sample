const hamburger = document.getElementById('hamburger');
const navVar = document.querySelector('.nav_var');

// ハンバーガーメニューの開閉をトグル
hamburger.addEventListener('click', (e) => {
    navVar.classList.toggle('active');
    e.stopPropagation(); // メニュー開いた後、クリックイベントが他の要素に伝播しないようにする
});

// メニュー以外をクリックしたときにメニューを閉じる
document.addEventListener('click', (e) => {
    // クリックした場所がメニュー外かつハンバーガーボタン外の場合
    if (!navVar.contains(e.target) && !hamburger.contains(e.target)) {
        navVar.classList.remove('active'); // メニューを閉じる
    }
});

document.getElementById("inquiry_btn").addEventListener("click", function() {
    window.location.href = document.querySelector("#inquiry_btn a").href;
});
