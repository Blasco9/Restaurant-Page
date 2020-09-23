const nav = () => {
  const navbar = document.createElement('nav')

  const homeLink = document.createElement('li')
  homeLink.innerHTML = "HOME"

  const menuLink = document.createElement('li')
  menuLink.innerHTML = "MENU"

  const contactLink = document.createElement('li')
  contactLink.innerHTML = "CONTACT"

  navbar.appendChild(homeLink)
  navbar.appendChild(menuLink)
  navbar.appendChild(contactLink)

  return navbar
}

export default nav