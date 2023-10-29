//問題文をモデルから取得
let questions = sentences

//表示欄・入力済み文字・入力欄の定義
const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');
const game = document.getElementById('game');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');

//文字の分割
let remainedTextWords = remained.textContent.split('')
let enteredTextWords = [];
let currentKey;
let currentText;

//新しい文をセットする関数
const setQuestion = () => {

  //配列questionの中から、ランダムで文を一つ選ぶ
  currentKey = Math.floor( Math.random() * questions.length );
  currentText = questions[ currentKey ];

  //一度選ばれた文は配列から削除
  questions.splice(currentKey, 1);

  //現在の文をリセットして、新しい問題文を表示
  //画面に新しい問題文をセット
  entered.textContent = '';
  remained.textContent = currentText;

  //これまでに入力されたフォームの値をリセット
  inputText.value = '';

  //入力済み・未入力の配列の中身をリセット
  enteredTextWords = [];
  remainedTextWords = currentText.split('');
};
setQuestion();

//入力された時の処理
document.addEventListener('input', (e) => {
  if(remainedTextWords[0] === e.data){

    //入力済み文字の配列の最後に一文字追加
    enteredTextWords.push( remainedTextWords[0] );

    //未入力文字の配列の先頭から一文字削除
    remainedTextWords.shift();

    //入力済みテキストと未入力テキストを連結して画面表示
    entered.textContent = enteredTextWords.join('');
    remained.textContent = remainedTextWords.join('');

    //全ての文字が正しく入力されたら新しい文をセット
  if(remainedTextWords.length <= 0){
    if(questions.length <= 0){
        game.classList.add('hidden'); //ゲーム画面を非表示
        message.classList.remove('hidden'); //メッセージを表示
    }else{
      setQuestion();
    }
  }

  }
});

//もう一度プレイボタン
  replayBtn.addEventListener('click', () => {
      window.location.reload();
  });
