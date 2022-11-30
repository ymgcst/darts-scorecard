let g_isPlayer1 = true

document.addEventListener('DOMContentLoaded', function (){

  // DOM読み込み完了時に呼ばれるハンドラ

  DrawBlock()

});

function OnClick(e, isPlayer1, point) {
  if (g_isPlayer1 != isPlayer1) {
    return
  }

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
      element = document.getElementById("player1-point")
    }
    else {
      element = document.getElementById("player2-point")
    }
    let num = Number(element.innerText)
    num += point
    element.innerText = num
  }
  else {
    alert("error")
  }
}

function Next() {
  g_isPlayer1 = !g_isPlayer1

  if (g_isPlayer1) {
    NextRound()
  }

  DrawBlock()
}

function NextRound() {
  let element = document.getElementById("round")

  // "Round 1"の数字だけを抽出
  const numRound = Number(element.innerText.slice(-2)) + 1

  element.innerText = `Round ${numRound}`
}

function DrawBlock() {
  let p1Blocks = Array.from(document.querySelectorAll(".player1-block"))
  let p2Blocks = Array.from(document.querySelectorAll(".player2-block"))

  let p1Color = g_isPlayer1 ? "red" : "aliceblue"
  let p2Color = g_isPlayer1 ? "aliceblue" : "blue"

  for (const el of p1Blocks) {
    el.style.borderColor = p1Color
  }
  for (const el of p2Blocks) {
    el.style.borderColor = p2Color
  }
  document.getElementById("player1-point").style.borderColor = p1Color
  document.getElementById("player2-point").style.borderColor = p2Color
}