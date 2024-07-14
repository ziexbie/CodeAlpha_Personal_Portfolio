const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}     

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*EMAIL*/

const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_74aaro6','template_osa0krj','#contact-form','tJz0ncxT4Mg48nA2U')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully'

        setTimeout(() =>{
            contactMe.textContent = ''
        }, 5000)

        contactForm.reset()

        
    }, () =>{
        contactMessage.textContent = 'Message not sent(service error)'
    })

     
}

contactForm.addEventListener('submit', sendEmail)


/*SHOW SCROLL UP */

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              
              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }else{
                sectionsClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)