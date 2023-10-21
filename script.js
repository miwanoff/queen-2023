"use strict";
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function play(cards) {
  let card = "";
  console.log(shuffle(cards));

  while (cards.length > 0) {
    alert("Your turn!");
    alert((card = cards.pop()));
    if (card === "Q") {
      alert("Your win!");
      return;
    }
  }
}

play(cards);
