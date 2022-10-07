
function addTwoNumber(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = parseFloat(a) + parseInt(b);
    document.getElementById("result").innerText = "Result: " + c;
}

