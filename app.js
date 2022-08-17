var numCard = document.getElementById("card-number")
var namUser = document.getElementById("user-name")
var expCard = document.getElementById("date-expedition")
var cvc = document.getElementById("cvc")

numCard.innerHTML = "0000 0000 0000 0000"
namUser.innerHTML = "JANE APPLASEED"
expCard.innerHTML = " 00/00"
cvc.innerHTML = " 000"

function confirm() {
    var name = document.getElementById("name-user").value
    var numberCard = document.getElementById("number-card").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value
    var cvc = document.getElementById("cvc").value

    numCard.innerHTML = numberCard
    namUser.innerHTML = name
    expCard.innerHTML = month + "/" + year
    cvc.innerHTML = cvc
}