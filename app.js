'use strict'
console.log("written in js!")
let today=new Date()
let formatdate=today.toDateString()
let selectelement=document.getElementById('date')
selectelement.innerHTML = formatdate
