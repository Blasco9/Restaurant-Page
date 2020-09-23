const footer = () => {
  const footerElement = document.createElement('footer')

  const contentContainer = document.createElement('div')
  contentContainer.className = 'footer-content-container'

  const text = document.createElement('p')
  text.innerText = "Created by Julian Blasco"

  const footerLinks = document.createElement('div')
  footerLinks.className = 'footer-links-container'
  footerLinks.innerHTML = `
    <a href="https://github.com/Blasco9">Github</a>
    <a href="https://www.linkedin.com/in/julian-blasco/">LinkedIn</a>
  `

  contentContainer.appendChild(text)
  contentContainer.appendChild(footerLinks)

  footerElement.appendChild(contentContainer)

  return footerElement
}

export default footer