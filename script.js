
function petsBar() {
    let next = document.getElementsByClassName('header-navigation__dropdown')[1];
    if (!next.classList.value.includes('u-dropdown--hidden')) {
        next.classList.add('u-dropdown--hidden');
    };
    let current = document.getElementsByClassName('header-navigation__dropdown')[0];
    if (current.classList.value.includes('u-dropdown--hidden')) {
        current.classList.remove('u-dropdown--hidden');
    } else {
        current.classList.add('u-dropdown--hidden');
    };
};

function resoursesBar() {
    let next = document.getElementsByClassName('header-navigation__dropdown')[0];
    if (!next.classList.value.includes('u-dropdown--hidden')) {
        next.classList.add('u-dropdown--hidden');
    };
    let current = document.getElementsByClassName('header-navigation__dropdown')[1];
    if (current.classList.value.includes('u-dropdown--hidden')) {
        current.classList.remove('u-dropdown--hidden');
    } else {
        current.classList.add('u-dropdown--hidden');
    };
};

function search() {
    let current = document.getElementsByClassName('search-bar__menu')[0];
    current.classList.add('u-search--show');
    document.getElementById('selected').focus();
}

function closeSearch() {
    let current = document.getElementsByClassName('search-bar__menu')[0];
    current.classList.remove('u-search--show');
}