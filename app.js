const dots = Array.from(document.getElementsByClassName('dot'));
const slide = document.querySelector('.testimonial-slide');
const emailInput = document.querySelector('.email-input');
const emailBtn = document.querySelector('.email-btn');
const errorMessage = document.querySelector('.error-message');

let currentTestimonial = 0;
//testimonial slider
dots.forEach((dot, index)=>{
    
    dot.addEventListener('click', ()=>{
        
        const slideFunc = ()=>{
            dots[currentTestimonial].classList.remove('active');
        
            slide.style.left = `-${100 * index}%`;
            dot.classList.add('active');
            currentTestimonial = index;
        }
        slideFunc();
    })
})
//email validator
const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
emailBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(email.test(emailInput.value)){
        errorMessage.classList.add('hidden')
    }else{
        errorMessage.classList.remove('hidden')
    }
})
//hamburger
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overLay = document.querySelector('.overlay');

hamburger.addEventListener('click', ()=>{

    if(mobileMenu.classList.contains('invisible')){
        hamburger.classList.add('open');
        mobileMenu.classList.remove('invisible');
        mobileMenu.classList.add('visible');
        mobileMenu.style.opacity= '1';
        overLay.style.visibility= 'visible';
        overLay.style.opacity= '1'
    } else if(mobileMenu.classList.contains('visible')){
        hamburger.classList.remove('open')
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('invisible');
        mobileMenu.style.opacity= '0'
        overLay.style.visibility= 'hidden';
        overLay.style.opacity= '0'

    }
})