

let carList = [];
var car = {};
var carName = document.getElementById("carName");
var color = document.getElementById("color");
var position = document.getElementById("position");
var madeBy = document.getElementById("made");
var btn = document.getElementById("btn");
var status = true;
var index;

localStorage.setItem("status","true");

document.getElementById("add-car").addEventListener("click",function () {
    btn.innerText ="Add Car";
});

function drawCarList() {
    let carRender = document.getElementById("carList");
    if (carList.length > 0){
        let getAllCar = "";
        carRender.innerHTML = "";
        for (let i = 0; i<carList.length; i++){
            getAllCar += ("<tr>" +
                "<td>"+(i+1)+"</td>"+
                "<td>"+(carList[i].name)+"</td>"+
                "<td>"+(carList[i].color)+"</td>"+
                "<td>"+(carList[i].position)+"</td>"+
                "<td>"+(carList[i].made)+"</td>"+
                "<td><button class='btn btn-warning mr-2' data-toggle='modal' data-target='#openModal' onclick='setValueCar("+i+")'><i class='fa fa-edit mr-2'></i>Edit</button><button class='btn btn-danger' onclick='deleteCar("+i+")'><i class='fa fa-trash mr-2'></i>Delete</button></td>"+
                "</tr>");
        }
        console.log(getAllCar);
        carRender.innerHTML = getAllCar;
    }
}


function deleteCar(i) {
    carList.splice(i,1);
    drawCarList();
}

function clear() {
    carName.value = "";
    color.value = "";
    position.value = "";
    madeBy.value = "";
}

function addCar() {
    if (localStorage.getItem("status") === "true"){
        var car = {
            name: carName.value,
            color: color.value,
            position:position.value,
            made:madeBy.value
        };
        carList.unshift(car);
        drawCarList();
        $("#openModal").modal("hide");
        clear();
    }else {
        editCar();
    }
}

function setValueCar(i) {
    clear();
    carName.value = carList[i].name;
    color.value = carList[i].color;
    position.value = carList[i].position;
    madeBy.value = carList[i].made;
    btn.innerText = "Edit Car";
    localStorage.setItem('status',"false")
    index = i;
    console.log(status);
}

function editCar() {
    carList[index].name = carName.value;
    carList[index].color = color.value;
    carList[index].position = position.value;
    carList[index].made = madeBy.value;
    localStorage.setItem("status","true");
    drawCarList();
    $("#openModal").modal("hide");
     clear();
}

