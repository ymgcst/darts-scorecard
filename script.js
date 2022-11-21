document.addEventListener('DOMContentLoaded', function (){

  // DOM読み込み完了時に呼ばれるハンドラ

});

function OnClick(e, isPlayer1, point) {
  // 現在のマークの次のマークに更新
  const text = e.target.innerText
  if (text == "") {
    e.target.innerText = "／"
  }
  else if(text == "／") {
    e.target.innerText = "×"
  }
  else if(text == "×") {
    e.target.innerText = "◯"
  }
  else if(text == "◯") {
    // 3マーク付いていたら加点していく
    // ボタンが押されたプレイヤーと逆のマークのエレメントを取得
    let elementRival
    if (isPlayer1) {
      elementRival = e.target.nextElementSibling.nextElementSibling
    }
    else {
      elementRival = e.target.previousElementSibling.previousElementSibling
    }
    // 相手がオープンしてたら加点しない
    if (elementRival.innerText == "◯") {
      return
    }

    // 加点処理
    let element
    if(isPlayer1) {
      element = document.getElementById("player1")
    }
    else {
      element = document.getElementById("player2")
    }
    let num = Number(element.innerText)
    num += point
    element.innerText = num
  }
  else {
    alert("error")
  }
}

function NextRound() {
  let element = document.getElementById("round")

  // "Round 1"の数字だけを抽出
  let numRound = Number(element.innerText.slice(-2))
  numRound++

  element.innerText = "Round " + numRound
}