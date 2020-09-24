const nav = () => {
  const navbar = document.createElement('nav')

  const homeLink = document.createElement('li')
  homeLink.className = 'nav-link home active'
  homeLink.innerText = "HOME"

  const menuLink = document.createElement('li')
  menuLink.className = 'nav-link menu'
  menuLink.innerText = "MENU"

  const contactLink = document.createElement('li')
  contactLink.className = 'nav-link contact'
  contactLink.innerText = "CONTACT"

  navbar.appendChild(homeLink)
  navbar.appendChild(menuLink)
  navbar.appendChild(contactLink)

  return navbar
}

export default nav