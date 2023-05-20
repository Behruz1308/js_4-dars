/*
let round = Math.round(8.4)
let pow = Math.pow(4 , 6)
let sqrt = Math.sqrt(64)
let floor = Math.floor(49.1)
let ceil = Math.ceil(49.1)
let min = Math.min(274,19,101,16,209)
let max = Math.max(2,123,291,313,1)
document.write(max)*/


let byTag = document.getElementsByTagName("h1")
let byId = document.getElementById("idNomi")
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelectorAll(".classNomi")
let byAll = document.getElementsByTagName("h1") .namedItem("idNomi")
console.log(byAll)

byAll.style.color = "green"
byAll.style.width = "300px"
byAll.style.height = "50px"
byAll.style.lineHeight = "50px"
byAll.style.textAlign = "center"
byAll.style.padding = "20px 20px"