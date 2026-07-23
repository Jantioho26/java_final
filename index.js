function openMenu() {
 navigation.menu__btn += " menu--open"
}

function closeMenu() {
  navigation.menu__btn.remove('menu--open')
}



fetch("https://6a5e953098d9f02aed79ac73.mockapi.io/JF/lenses")
