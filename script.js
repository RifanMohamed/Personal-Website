


function increaseNum() {
    var element =  document.getElementById('counterNum')
    var value = element.innerHTML

    ++value

    document.getElementById('counterNum').innerHTML = value;

    switch (value) {
        case 100 :
            myAlert();
            break;
    
        default:
            break;
    }

}

function resetNum() {
    var value = document.getElementById('counterNum').innerHTML

    value = 0;

    document.getElementById('counterNum').innerHTML = value;
}

function decreaseNum() {
    var element = document.getElementById('counterNum')
    var value = element.innerHTML

    --value;

    document.getElementById('counterNum').innerHTML = value;

    if (value < 0) {
        document.getElementById('counterNum').innerHTML = 0
    }
    
}

function myAlert() {
    Swal.fire({
        title: 'You have just hit 100 ',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
window.alert = myAlert;

function testAlert(){
    window.alert('Hello')
}