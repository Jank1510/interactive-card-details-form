var numCard = document.getElementById("card-number")
var namUser = document.getElementById("user-name")
var expCard = document.getElementById("date-expedition")
var cvc = document.getElementById("cvc")

var formulario = document.getElementById("formulario")
var completado = document.getElementById("completado")

numCard.innerHTML = "00000000000000"
namUser.innerHTML = "JANE APPLASEED"
expCard.innerHTML = " 00/00"
cvc.innerHTML = " 000"

formulario.style.display = 'flex'
completado.style.display = 'none'

var bordeErrorInactivo = ' 2px solid hsl(270, 3%, 87%)'
var bordeErrorActivo = ' 2px solid hsl(0, 100%, 66%)'

function confirm() {
    //datos de la tarjeta
    var name = document.getElementById("name-user")
    var numberCard = document.getElementById("number-card")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var cvc2 = document.getElementById("cvc2")
        //datos de los inputs
    var errorName = document.getElementById("error-name")
    var errorNumber = document.getElementById("error-number")
    var errorMm = document.getElementById("error-mm")
    var errorCvc = document.getElementById("error-cvc")


    if (name.value != '') {
        errorName.innerHTML = ""
        name.style.border = bordeErrorInactivo
        if (numberCard.value != '') {
            errorNumber.innerHTML = ""
            numberCard.style.border = bordeErrorInactivo
            if (isNaN(numberCard.value) == false) {
                errorNumber.innerHTML = ""
                numberCard.style.border = bordeErrorInactivo
                if (month.value != '' && year.value != '') {
                    errorMm.innerHTML = ""
                    month.style.border = bordeErrorInactivo
                    year.style.border = bordeErrorInactivo
                    if (cvc2.value != '') {
                        errorCvc.innerHTML = ""
                        cvc2.style.border = bordeErrorInactivo


                        numCard.innerHTML = numberCard.value
                        namUser.innerHTML = name.value
                        expCard.innerHTML = month.value + "/" + year.value
                        cvc.innerHTML = cvc2.value


                        formulario.style.display = 'none'
                        completado.style.display = 'flex'
                    } else {
                        errorCvc.innerHTML = "Can't be blank"
                        cvc2.style.border = bordeErrorActivo
                    }
                } else {
                    errorMm.innerHTML = "Can't be blank"
                    month.style.border = bordeErrorActivo
                    year.style.border = bordeErrorActivo
                }
            } else {
                errorNumber.innerHTML = "Wrong format, numbers only"
                numberCard.style.border = bordeErrorActivo
            }
        } else {
            errorNumber.innerHTML = "Can't be blank"
            numberCard.style.border = bordeErrorActivo
        }
    } else {
        errorName.innerHTML = "Can't be blank"
        name.style.border = bordeErrorActivo
    }


}