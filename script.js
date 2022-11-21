document.addEventListener('DOMContentLoaded', function (){

  // DOM読み込み完了時に呼ばれるハンドラ

});


function OnClick(e, isPlayer1, point) {
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
    // ボタンが押されたプレイヤーと逆のマークのエレメント
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

  //console.log(e.target.innerText)
}
