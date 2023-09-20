function additionner() {
    let fruit = document.getElementById("fruit").value

    switch (fruit) {
        case "Orange":
            total += 2
            alert("Vous avez choisi une orange; le prix est: " +total +"$")
            break;
        case "Mangue":
            total += 6
            alert("Vous avez choisi une mangue; le prix est: " +total +"$")
            break;
        case "Citron":
            total += 22
            alert("Vous avez choisi un Citron; le prix est: " +total +"$")
            break;
        default:
            alert("Vous devez faire un choix; le prix est: " +total +"$")
            break;
    }
}

total = 0;

function finaliser(){
    alert("Le prix total des achats est: " +total +"$")
}