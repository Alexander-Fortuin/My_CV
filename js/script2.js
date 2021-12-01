

let boo = document.getElementById('boo');

document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    const ben = boo.classList.contains('activeOne')
    // console.log(isDropdownButton);
    // console.log(ben);

    if (!isDropdownButton && !ben) return

    console.log('null test');
    boo.classList.toggle('activeOne')
    document.getElementById('dropdown-button').classList.toggle('activeTwo')

  })