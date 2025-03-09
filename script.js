// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Page Transition
    const pageTransition = document.querySelector(".page-transition")
  
    setTimeout(() => {
      pageTransition.style.transform = "translateY(-100%)"
    }, 2000)
  
    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100,
      })
    }
  
    // Initialize Particles.js
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#4361ee",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#4361ee",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    }
  
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    document.addEventListener("mousemove", (e) => {
      if (typeof gsap !== "undefined") {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        })
  
        gsap.to(cursorFollower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
        })
      }
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
        cursor.style.borderColor = "white"
        cursorFollower.style.width = "40px"
        cursorFollower.style.height = "40px"
      })
  
      link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursor.style.opacity = "0.7"
        cursor.style.borderColor = "var(--primary-color)"
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
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
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
  
        // GSAP animation for filtering
        if (typeof gsap !== "undefined") {
          gsap.to(projectCards, {
            duration: 0.4,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            onComplete: () => {
              projectCards.forEach((card) => {
                if (filter === "all") {
                  card.style.display = "block"
                } else if (card.getAttribute("data-category") === filter) {
                  card.style.display = "block"
                } else {
                  card.style.display = "none"
                }
              })
  
              gsap.to(projectCards, {
                duration: 0.4,
                opacity: 1,
                y: 0,
                stagger: 0.1,
                delay: 0.1,
              })
            },
          })
        }
      })
    })
  
    // Animate skill bars on scroll
    function animateSkillBars() {
      const skillBars = document.querySelectorAll(".progress-bar")
  
      skillBars.forEach((bar) => {
        const percentage = bar.parentElement.parentElement.getAttribute("data-percentage")
        if (typeof gsap !== "undefined") {
          gsap.to(bar, {
            width: percentage + "%",
            duration: 1.5,
            ease: "power2.out",
          })
        }
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
  
    // GSAP ScrollTrigger for animations
    if (typeof ScrollTrigger !== "undefined" && typeof gsap !== "undefined") {
      // Hero section animations
      gsap.from(".hero h1", {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 2.2,
      })
  
      // Animate skill bars when skills section is in view
      ScrollTrigger.create({
        trigger: "#skills",
        start: "top 70%",
        onEnter: animateSkillBars,
      })
  
      // Reveal text animation
      const revealText = document.querySelectorAll(".reveal-text")
  
      revealText.forEach((text) => {
        text.setAttribute("data-text", text.textContent)
  
        ScrollTrigger.create({
          trigger: text,
          start: "top 80%",
          onEnter: () => {
            text.classList.add("animate")
          },
        })
      })
    }
  
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
  
      // Animation for form submission
      const btn = contactForm.querySelector("button")
      const originalText = btn.innerHTML
  
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      btn.disabled = true
  
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!'
  
        setTimeout(() => {
          btn.innerHTML = originalText
          btn.disabled = false
  
          alert(`Thank you, ${name}! Your message has been sent successfully.`)
  
          // Reset form
          contactForm.reset()
        }, 2000)
      }, 2000)
    })
  
    // Add dark mode toggle
    const body = document.body
    const darkModeToggle = document.createElement("div")
    darkModeToggle.className = "dark-mode-toggle"
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    document.body.appendChild(darkModeToggle)
  
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark")
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    }
  
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark")
  
      if (body.classList.contains("dark")) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
        localStorage.setItem("darkMode", "enabled")
      } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
        localStorage.setItem("darkMode", null)
      }
    })
  })
  
  