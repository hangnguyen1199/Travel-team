

const logoItem = document.querySelectorAll('.logo-item img')
const logoItemBox = document.querySelectorAll('.logo-item')

function addActive(photo){
    logoItem.forEach(element => {
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    });
    photo.classList.add('active');

    logoItemBox.forEach(element => {
        if(element.classList.contains('active1')){
            element.classList.remove('active1')
        }
        if(element.firstElementChild == photo){
            element.classList.add('active1')
        }
    });
}




