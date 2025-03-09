// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
  
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })
  
    document.addEventListener("mousedown", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.7)"
      cursorFollower.style.transform = "translate(-50%, -50%) scale(0.7)"
    })
  
    document.addEventListener("mouseup", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursorFollower.style.transform = "translate(-50%, -50%) scale(1)"
    })
  
    // Links and buttons hover effect
    const links = document.querySelectorAll("a, button, .filter-btn")
  
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursor.style.opacity = "0.5"
        cursorFollower.style.width = "40px"
        cursorFollower.style.height = "40px"
      })
  
      link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursor.style.opacity = "0.7"
        cursorFollower.style.width = "30px"
        cursorFollower.style.height = "30px"
      })
    })
  
    // Sticky header
    const header = document.querySelector("header")
    const backToTop = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("sticky")
        backToTop.classList.add("active")
      } else {
        header.classList.remove("sticky")
        backToTop.classList.remove("active")
      }
    })
  
    // Back to top button
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active")
        menuToggle.classList.remove("active")
      })
    })
  
    // Typewriter effect
    const typewriterText = document.getElementById("typewriter-text")
    const phrases = ["Data Science Enthusiast", "Machine Learning Developer", "Problem Solver", "Continuous Learner"]
    let i = 0
    let j = 0
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false
  
    function typeWriter() {
      isEnd = false
      typewriterText.innerHTML = currentPhrase.join("")
  
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
          typewriterText.innerHTML = currentPhrase.join("")
        }
  
        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j])
          j--
          typewriterText.innerHTML = currentPhrase.join("")
        }
  
        if (j == phrases[i].length) {
          isEnd = true
          isDeleting = true
        }
  
        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i++
  
          if (i === phrases.length) {
            i = 0
          }
        }
      }
  
      const spedUp = 30
      const normalSpeed = 100
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(typeWriter, time)
    }
  
    typeWriter()
  
    // Projects filter
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => {
          btn.classList.remove("active")
        })
  
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else if (card.getAttribute("data-category") === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".progress-bar")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const percentage = bar.parentElement.parentElement.getAttribute("data-percentage")
        bar.style.width = percentage + "%"
      })
    }
  
    // Intersection Observer for animations
    const sections = document.querySelectorAll("section")
    const skillsSection = document.getElementById("skills")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
  
            // Animate skill bars when skills section is in view
            if (entry.target.id === "skills") {
              animateSkillBars()
            }
          }
        })
      },
      { threshold: 0.2 },
    )
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  
    // Form submission
    const contactForm = document.getElementById("contact-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
  
      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been sent successfully.`)
  
      // Reset form
      contactForm.reset()
    })
  })
  
  