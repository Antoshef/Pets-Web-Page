
// Button Call Pets Dropdown
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

// Button Call Resourses Dropdown
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

// Button Call Search Bar
function search() {
    let current = document.getElementsByClassName('search-bar__menu')[1];
    current.classList.add('u-search--show');
    document.getElementById('selected').focus();
}

// Button Close Search Bar
function closeSearch() {
    let current = document.getElementsByClassName('search-bar__menu')[1];
    current.classList.remove('u-search--show');
};

// Button Call Burger Menu Dropdown
function showBurger() {
    let dropdownMenu = document.getElementsByClassName('header-navigation__dropdown');
    for (let i = 0; i < dropdownMenu.length; i++) {
        let menu = dropdownMenu[i];
        if (menu.classList.value.includes('u-flex')) {
            menu.classList.remove('u-flex');
            let btnChange = document.getElementsByClassName('fa fa-times')[0];
            btnChange.className = 'fa fa-bars';
        } else {
            menu.classList.add('u-flex');
            let btnChange = document.getElementsByClassName('fa fa-bars')[0];
            btnChange.className = 'fa fa-times';
        };
    };
};