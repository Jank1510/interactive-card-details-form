var numCard = document.getElementById("card-number")
var namUser = document.getElementById("user-name")
var expCard = document.getElementById("date-expedition")
var cvc = document.getElementById("cvc")

numCard.innerHTML = "0000 0000 0000 0000"
namUser.innerHTML = "JANE APPLASEED"
expCard.innerHTML = " 00/00"
cvc.innerHTML = " 000"

var bordeError = ' 2px solid hsl(270, 3%, 87%)'

function confirm() {
    //datos de la tarjeta
    var name = document.getElementById("name-user")
    var numberCard = document.getElementById("number-card")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var cvc2 = document.getElementById("cvc")
        //datos de los inputs
    var errorName = document.getElementById("error-name")
    var errorNumber = document.getElementById("error-number")
    var errorMm = document.getElementById("error-mm")
    var errorYy = document.getElementById("error-yy")
    var errorCvc = document.getElementById("error-cvc")


    if (name.value != '') {
        if (numberCard.value != '') {
            if (month.value = !'' && year.value != '') {
                if (cvc2 != '') {
                    numCard.innerHTML = numberCard.value
                    namUser.innerHTML = name.value
                    expCard.innerHTML = month.value + "/" + year.value
                    cvc.innerHTML = cvc2.value
                }
            }

        } else {
            errorNumber.innerHTML = "Can't be blank"
            numberCard
        }
        errorName.innerHTML = ""
        name.style.border = bordeError
    } else {
        errorName.innerHTML = "Can't be blank"
        name.style.border = ' 2px solid hsl(0, 100%, 66%)'
    }


}