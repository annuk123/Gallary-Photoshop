searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick = () => {
    loginform.classList.remove('active');
}

window.onscroll = () => {

    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

fadeOut();

function loader(){
    document.querySelector(".loader-container").classList.add("active");
}

function fadeOut(){
   setTimeout(loader, 5000);
}

window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}


