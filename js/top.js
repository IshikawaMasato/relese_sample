/* ======縦型スライドショー======*/
/* ==============================
    要素の取得
============================== */
//写真を囲っている要素
let itemContainer = document.querySelector('#itemContainer')

//操作ボタン（次へボタンと前へボタンは削除）
let navBtnContainer = document.querySelector('#navBtnContainer')

/* ==============================
    各値の設定
============================== */
//写真の設定
let imgList = ['img/top/top_slid1.jpeg', 'img/top/top_slid2.jpeg', 'img/top/top_slid3.jpeg']
//現在表示している写真の番号
let currentItemNum = 0

//現在の写真の表示位置（itemContainerのtopの値）
let topPosition = 0

//写真の下端に到達する際のtopの最小値（写真の高さ23.8vw * (写真枚数-1) * -1）

let minTopPosition = 30 * (imgList.length - 1) * -1


//ダミー画像（・）のsrcを設定
let dummySrc = 'img/top/top_sample.jpg'

/* ==============================
    写真の枚数に応じてimgとliの生成
============================== */
    /*############
       imgの生成
    ############ */
//imgListを使ってimg要素をitemContainerの中に生成する
imgList.forEach((value, key) => {
    //img要素を生成
    let img = document.createElement('img')
    //生成したimgのsrc属性に対して写真のファイル名を設定
    img.setAttribute('src', value)
    //生成したimg要素に対してclassを付与する
    img.classList.add('slideItems')
    //itemContainerに子要素としてimgを追加する
    itemContainer.appendChild(img)
})

/*############
   liの生成
############ */
//imgListを使ってli要素をnavBtnContainerの中に生成する
imgList.forEach((value, key) => {
    let li = document.createElement('li')
    //最初にのみクラスを与える


    //liにカスタムデータ属性を付与する
    li.dataset.num = key

    //ulの中にliを入れる
    navBtnContainer.appendChild(li)
})

/* ==============================
    操作時の処理
============================== */
//navボタンの動作
//navボタンをすべて取得
let navBtns = document.querySelectorAll('#navBtnContainer li')
//取得したすべてのnavボタンに対してイベントを設定する
navBtns.forEach((elm, key) => {
    elm.addEventListener('click', (event) => {
        //クリックされた要素が画像の場合は、親のli要素を取得する
        let li = event.target.tagName === 'IMG' ? event.target.parentElement : event.target
        //押されたLIのカスタムデータ属性を取得する（data-num）
        let num = li.dataset.num
        //押されたナビゲーションに対応する画像を表示する
        showImage(num)
        //タイマーをリセットして再スタート
        resetTimer()
        startTimer()
    })
})

function showImage(num) {
    // すべてのliをリセットして「・」にする
    
    // 表示位置を変更

    topPosition = -29.6 * num

    itemContainer.style.top = topPosition + 'vw'
    currentItemNum = num
    changeNavclass(currentItemNum)
}

/*===============================
自動スライドやnavボタンが押されたときに切り替わり
===============================*/

function changeNavclass(currentItemNum) {
    //末に付与されているcurrentItemを除去
    document.querySelector('.currentItem').classList.remove('currentItem')
    //表示されている写真に対応したnavの色を変える
    navBtns[currentItemNum].classList.add('currentItem')
}

/* ==============================
    自動スライド
============================== */
//タイマーを格納する変数
let timerobj

function resetTimer() {
    //タイマーを停止する
    clearInterval(timerobj)
}

//timerをスタートする関数
function startTimer() {
    //setIntervalで設定した時間おきに動作させる
    timerobj = setInterval(() => {
        let nextItemNum = (parseInt(currentItemNum) + 1) % imgList.length
        showImage(nextItemNum)
    }, 3000)
}

//タイマーの初期
startTimer()
