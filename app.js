'use strict'

let today=new Date()
let formatdate=today.toDateString()
let selectelement=document.getElementById('date')
selectelement.innerHTML = formatdate

console.log("written in js!")