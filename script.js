
/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalCard = document.querySelectorAll('.modal__card')

let activeModal = (modalClick) =>{
   modal[modalClick].classList.add('active-modal')
}
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
/* Show modal */
cardBtn.forEach((cardBtn, i) =>{
   cardBtn.addEventListener('click', () =>{
      activeModal(i)
   })
})

/* Hide modal */
modalClose.forEach((modalClose) =>{
   modalClose.addEventListener('click', () => {
       modal.forEach((modalRemove) => {
           modalRemove.classList.remove('active-modal')
       })
   })
})

/* Hide modal on background click */
modal.forEach((modal) =>{
   modal.addEventListener('click', () =>{
      modal.classList.remove('active-modal')
   })
})

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) =>{
   modalCard.addEventListener('click', (e) =>{
      e.stopPropagation()
   })
})
