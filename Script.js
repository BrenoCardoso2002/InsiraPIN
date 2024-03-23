const dg01 = document.getElementById("dg01")
const dg02 = document.getElementById("dg02")
const dg03 = document.getElementById("dg03")
const dg04 = document.getElementById("dg04")
const dg05 = document.getElementById("dg05")
const dg06 = document.getElementById("dg06")

function Digito01() {
    let digito01 = dg01.value
    if (digito01 != ""){
        if (!isNaN(digito01.toString())) {
            dg02.focus()
        }else{
            dg01.value = ""
        }
    }
}

function Digito02() {
    let digito02 = dg02.value
    if (digito02 != ""){
        if (!isNaN(digito02.toString())) {
            dg03.focus()
        }else{
            dg02.value = ""
        }
    }else{
        dg01.focus()
    }
}

function Digito03() {
    let digito03 = dg03.value
    if (digito03 != ""){
        if (!isNaN(digito03.toString())) {
            dg04.focus()
        }else{
            dg03.value = ""
        }
    }else{
        dg02.focus()
    }
}

function Digito04() {
    let digito04 = dg04.value
    if (digito04 != ""){
        if (!isNaN(digito04.toString())) {
            dg05.focus()
        }else{
            dg04.value = ""
        }
    }else{
        dg03.focus()
    }
}

function Digito05() {
    let digito05 = dg05.value
    if (digito05 != ""){
        if (!isNaN(digito05.toString())) {
            dg06.focus()
        }else{
            dg05.value = ""
        }
    }else{
        dg04.focus()
    }
}

function Digito06() {
    let digito06 = dg06.value
    if (digito06 != ""){
        if (!isNaN(digito06.toString())) {
            dg06.focus()
        }else{
            dg06.value = ""
        }
    }else{
        dg05.focus()
    }
}