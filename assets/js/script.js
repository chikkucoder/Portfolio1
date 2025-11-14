$(document).ready(function () {
    // Initialize theme from localStorage
    initializeTheme();

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        
        // Initialize EmailJS with your Public Key
        emailjs.init("-NOe-ok8tESdeDQ23");
        
        // Get form data
        const formData = {
            from_name: $("input[name='name']").val(),
            from_email: $("input[name='email']").val(),
            phone: $("input[name='phone']").val(),
            message: $("textarea[name='message']").val()
        };
        
        // Show loading message
        const submitBtn = $(this).find("button[type='submit']");
        const originalBtnText = submitBtn.html();
        submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
        
        // Send email using EmailJS
        emailjs.send('service_x4tzat2', 'template_q9mgwbs', formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                alert("✅ Thank you " + formData.from_name + "! Your message has been sent successfully. I'll get back to you soon!");
                
                // Reset form
                document.getElementById("contact-form").reset();
                
                // Reset button
                submitBtn.html(originalBtnText).prop('disabled', false);
            })
            .catch(function (error) {
                console.log('FAILED...', error);
                
                // Show error message with WhatsApp alternative
                if (confirm("❌ Email sending failed! Would you like to contact via WhatsApp instead?")) {
                    const whatsappMsg = `Hi! I'm ${formData.from_name}%0AEmail: ${formData.from_email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
                    window.open(`https://wa.me/916202888431?text=${whatsappMsg}`, '_blank');
                }
                
                // Reset button
                submitBtn.html(originalBtnText).prop('disabled', false);
            });
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Ankit Kumar Gupta";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend developer", "backend developer", "web designer", "programmer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


// ===== VISITOR WALL FUNCTIONALITY WITH SUPABASE =====
// Supabase configuration
const SUPABASE_URL = 'https://fyidrmsuylcokgibwtms.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aWRybXN1eWxjb2tnaWJ3dG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3OTczMzMsImV4cCI6MjA3ODM3MzMzM30.ARgz_-gH9nVqAK1oxaV5SxN17DAvuGtjn6OHlMtf2Yo';

// Initialize Supabase client
let supabase = null;

let selectedMood = '❤️';
let visitorMessages = [];
let isSupabaseConfigured = false;

// Test Supabase connection
async function testSupabaseConnection() {
    if (!isSupabaseConfigured || !supabase) {
        console.log('❌ Supabase not configured');
        return false;
    }
    
    try {
        console.log('🧪 Testing Supabase connection...');
        const { data, error } = await supabase
            .from('visitor_messages')
            .select('count', { count: 'exact' })
            .limit(1);
        
        if (error) {
            console.error('❌ Supabase connection test failed:', error);
            return false;
        }
        
        console.log('✅ Supabase connection test successful');
        return true;
    } catch (error) {
        console.error('❌ Supabase connection test error:', error);
        return false;
    }
}

// Function to initialize Supabase (call this after setting up your Supabase project)
function initializeSupabase(url, key) {
    try {
        supabase = window.supabase.createClient(url, key);
        isSupabaseConfigured = true;
        console.log('Supabase initialized successfully');
        return true;
    } catch (error) {
        console.error('Failed to initialize Supabase:', error);
        isSupabaseConfigured = false;
        return false;
    }
}

// Fallback sample data when Supabase is not configured
const fallbackMessages = [
    {
        id: 1,
        name: "Ankit kumar",
        mood: "😊",
        message: "nyc",
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
    },
    {
        id: 2,
        name: "rishabh dubey",
        mood: "😊",
        message: "bhai ki official hai baki saar fake hai",
        created_at: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString() // 35 days ago
    },
    {
        id: 3,
        name: "sadasdas",
        mood: "❤️",
        message: "dasdasd",
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
    }
];

function openVisitorWall() {
    document.getElementById('visitorWallModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    loadMessages();
    updateStats();
}

function closeVisitorWall() {
    document.getElementById('visitorWallModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateStats() {
    // Simulate online users (random between 5-12)
    const onlineCount = Math.floor(Math.random() * 8) + 5;
    document.getElementById('onlineCount').textContent = `${onlineCount} online`;
    
    // Update total visitors (base + messages count)
    const totalVisitors = 50 + visitorMessages.length;
    document.getElementById('totalVisitors').textContent = `${totalVisitors} total`;
    
    // Update message count
    document.getElementById('messageCount').textContent = `${visitorMessages.length} Messages`;
}

function formatTimeAgo(dateString) {
    const now = new Date();
    const messageDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - messageDate) / 1000);
    
    if (diffInSeconds < 60) {
        return 'just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes}m ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours}h ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days}d ago`;
    }
}

async function loadMessages() {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = '<div style="text-align: center; color: #fff; padding: 2rem;">Loading messages...</div>';
    
    try {
        console.log('📥 Loading messages...');
        console.log('🔧 Supabase configured:', isSupabaseConfigured);
        
        if (isSupabaseConfigured && supabase) {
            console.log('💾 Loading from Supabase...');
            
            // Load from Supabase
            const { data, error } = await supabase
                .from('visitor_messages')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);
            
            if (error) {
                console.error('❌ Supabase error while loading:', error);
                throw error;
            }
            
            console.log('✅ Messages loaded from Supabase:', data);
            visitorMessages = data || [];
        } else {
            console.log('⚠️ Using fallback data (Supabase not configured)');
            // Use fallback data when Supabase is not configured
            visitorMessages = fallbackMessages;
        }
        
        displayMessages();
    } catch (error) {
        console.error('❌ Error loading messages:', error);
        console.log('🔄 Falling back to sample data...');
        visitorMessages = fallbackMessages;
        displayMessages();
        
        // Show error message to user
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'background: rgba(220, 53, 69, 0.2); color: #fff; padding: 1rem; margin: 1rem 0; border-radius: 5px; text-align: center;';
        errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Unable to load latest messages. Showing sample data.';
        container.prepend(errorDiv);
    }
}

function displayMessages() {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = '';
    
    if (visitorMessages.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #fff; padding: 2rem;">No messages yet. Be the first to leave a message!</div>';
        return;
    }
    
    visitorMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message-item';
        
        const timeAgo = message.created_at ? formatTimeAgo(message.created_at) : 'just now';
        
        messageElement.innerHTML = `
            <div class="message-header">
                <div class="message-user">
                    <span>${message.mood || '😊'}</span>
                    <span>${message.name}</span>
                </div>
                <div class="message-time">${timeAgo}</div>
            </div>
            <div class="message-text">${message.message}</div>
        `;
        container.appendChild(messageElement);
    });
}

async function sendMessage() {
    const name = document.getElementById('visitorName').value.trim();
    const message = document.getElementById('visitorMessage').value.trim();
    
    console.log('🚀 Attempting to send message:', { name, message, mood: selectedMood });
    
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    
    if (!message) {
        alert('Please enter a message!');
        return;
    }
    
    if (message.length > 500) {
        alert('Message is too long! Please keep it under 500 characters.');
        return;
    }
    
    // Show loading state
    const button = document.querySelector('.send-message-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;
    
    try {
        const newMessage = {
            name: name,
            mood: selectedMood,
            message: message,
            created_at: new Date().toISOString()
        };
        
        console.log('📝 Message data prepared:', newMessage);
        console.log('🔧 Supabase configured:', isSupabaseConfigured);
        console.log('📡 Supabase client:', supabase);
        
        if (isSupabaseConfigured && supabase) {
            console.log('💾 Attempting to save to Supabase...');
            
            // Save to Supabase
            const { data, error } = await supabase
                .from('visitor_messages')
                .insert([{
                    name: newMessage.name,
                    mood: newMessage.mood,
                    message: newMessage.message
                }])
                .select();
            
            if (error) {
                console.error('❌ Supabase error:', error);
                throw new Error(`Database error: ${error.message}`);
            }
            
            console.log('✅ Message saved to Supabase:', data);
        } else {
            console.log('⚠️ Using fallback storage (Supabase not configured)');
            // Add to local array when Supabase is not configured
            newMessage.id = Date.now();
            visitorMessages.unshift(newMessage);
        }
        
        // Clear form
        document.getElementById('visitorName').value = '';
        document.getElementById('visitorMessage').value = '';
        updateCharCount();
        
        // Reload messages and update stats
        console.log('🔄 Reloading messages...');
        await loadMessages();
        updateStats();
        
        // Show success message
        showSuccessMessage();
        
    } catch (error) {
        console.error('❌ Error sending message:', error);
        
        // Show specific error message
        let errorMessage = 'Failed to send message. ';
        if (error.message.includes('permission')) {
            errorMessage += 'Database permission error. Please check your Supabase setup.';
        } else if (error.message.includes('network')) {
            errorMessage += 'Network error. Please check your internet connection.';
        } else if (error.message.includes('Database error')) {
            errorMessage += error.message;
        } else {
            errorMessage += 'Please try again or contact support.';
        }
        
        button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error! Try Again';
        button.style.background = '#dc3545';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#ffae00';
            button.disabled = false;
        }, 3000);
        
        alert(errorMessage);
    }
}

function showSuccessMessage() {
    const button = document.querySelector('.send-message-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    button.style.background = '#28a745';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#ffae00';
        button.disabled = false;
    }, 2000);
}

function updateCharCount() {
    const textarea = document.getElementById('visitorMessage');
    const charCount = document.getElementById('charCount');
    const count = textarea.value.length;
    charCount.textContent = `${count}/500 characters`;
    
    if (count > 450) {
        charCount.style.color = '#ff6b35';
    } else {
        charCount.style.color = 'rgba(255, 255, 255, 0.8)';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Supabase
    try {
        if (typeof window.supabase !== 'undefined') {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            isSupabaseConfigured = true;
            console.log('✅ Supabase initialized successfully');
            
            // Test connection
            testSupabaseConnection().then(success => {
                if (success) {
                    console.log('🎉 Supabase is ready to use!');
                } else {
                    console.log('⚠️ Supabase connection issues detected');
                }
            });
        } else {
            console.error('❌ Supabase library not loaded');
            isSupabaseConfigured = false;
        }
    } catch (error) {
        console.error('❌ Failed to initialize Supabase:', error);
        isSupabaseConfigured = false;
    }
    
    // Mood selector
    document.querySelectorAll('.mood-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedMood = this.getAttribute('data-mood');
        });
    });
    
    // Character counter
    const messageTextarea = document.getElementById('visitorMessage');
    if (messageTextarea) {
        messageTextarea.addEventListener('input', updateCharCount);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('visitorWallModal');
        if (event.target === modal) {
            closeVisitorWall();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeVisitorWall();
        }
    });
    
    // Enter to send message (Ctrl+Enter)
    document.getElementById('visitorMessage').addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            sendMessage();
        }
    });
});

// ===== CERTIFICATIONS MODAL FUNCTIONALITY =====
let currentCertIndex = 0;
let certificates = [
    { id: 1, image: "./assets/images/certificates/cert1.jpg" },
    { id: 2, image: "./assets/images/certificates/cert2.jpg" },
    { id: 3, image: "./assets/images/certificates/cert3.jpg" },
    { id: 4, image: "./assets/images/certificates/cert4.jpg" },
    { id: 5, image: "./assets/images/certificates/cert5.jpg" },
    { id: 6, image: "./assets/images/certificates/cert6.png" },
    { id: 7, image: "./assets/images/certificates/cert7.png" },
    { id: 8, image: "./assets/images/certificates/cert8.jpg" },
    { id: 9, image: "./assets/images/certificates/cert9.jpg" },
    { id: 10, image: "./assets/images/certificates/cert10.jpg" },
    { id: 11, image: "./assets/images/certificates/cert11.jpg" },
    { id: 12, image: "./assets/images/certificates/cert12.jpg" },
    { id: 13, image: "./assets/images/certificates/cert13.jpg" },
    { id: 14, image: "./assets/images/certificates/cert14.jpg" },
    { id: 15, image: "./assets/images/certificates/cert15.jpg" },
    { id: 16, image: "./assets/images/certificates/cert16.jpg" },
    { id: 17, image: "./assets/images/certificates/cert17.png" },
    { id: 18, image: "./assets/images/certificates/cert18.jpg" },
    { id: 19, image: "./assets/images/certificates/cert19.jpg" },
    { id: 20, image: "./assets/images/certificates/cert20.jpg" },
    { id: 21, image: "./assets/images/certificates/cert21.jpg" },
    { id: 22, image: "./assets/images/certificates/cert22.png" },
    { id: 23, image: "./assets/images/certificates/cert23.jpg" },
    { id: 24, image: "./assets/images/certificates/cert24.jpg" },
    { id: 25, image: "./assets/images/certificates/cert25.jpg" },
    { id: 26, image: "./assets/images/certificates/cert26.jpg" },
    { id: 27, image: "./assets/images/certificates/cert27.jpg" },
    { id: 28, image: "./assets/images/certificates/cert28.jpg" },
    { id: 29, image: "./assets/images/certificates/cert29.png" },
    { id: 30, image: "./assets/images/certificates/cert30.jpg" },
    { id: 31, image: "./assets/images/certificates/cert31.jpg" },
    { id: 32, image: "./assets/images/certificates/cert32.jpg" },
    { id: 33, image: "./assets/images/certificates/cert33.png" }
];

function openCertifications() {
    document.getElementById('certificationsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    currentCertIndex = 0;
    initializeCertifications();
    displayCurrentCertificate();
}

function closeCertifications() {
    document.getElementById('certificationsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initializeCertifications() {
    // Update total count
    document.getElementById('totalCerts').textContent = certificates.length;
    
    // Generate thumbnails
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    thumbnailsContainer.innerHTML = '';
    
    certificates.forEach((cert, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.setAttribute('data-cert-num', index + 1);
        thumbnail.onclick = () => goToCertificate(index);
        
        const img = document.createElement('img');
        img.src = cert.image;
        img.alt = `Certificate ${index + 1}`;
        img.onerror = () => {
            // Fallback image if certificate image doesn't exist
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMmE1Mjk4Ii8+CjxwYXRoIGQ9Ik00MCAzMEM0Mi4yMDkxIDMwIDQ0IDI4LjIwOTEgNDQgMjZDNDQgMjMuNzkwOSA0Mi4yMDkxIDIyIDQwIDIyQzM3Ljc5MDkgMjIgMzYgMjMuNzkwOSAzNiAyNkMzNiAyOC4yMDkxIDM3Ljc5MDkgMzAgNDAgMzBaIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI0MCIgeT0iNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+Q2VydDwvdGV4dD4KPC9zdmc+Cg==';
        };
        
        thumbnail.appendChild(img);
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function displayCurrentCertificate() {
    const cert = certificates[currentCertIndex];
    const certImage = document.getElementById('certificateImage');
    const loading = document.querySelector('.cert-loading');
    
    // Show loading
    loading.style.display = 'block';
    certImage.style.opacity = '0';
    
    // Update counter
    document.getElementById('currentCert').textContent = currentCertIndex + 1;
    
    // Load image
    certImage.onload = () => {
        loading.style.display = 'none';
        certImage.style.opacity = '1';
    };
    
    certImage.onerror = () => {
        loading.style.display = 'none';
        certImage.style.opacity = '1';
        // Fallback image
        certImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMmE1Mjk4Ii8+CjxwYXRoIGQ9Ik0yNTAgMjAwQzI2Ni41NjkgMjAwIDI4MCAyMTMuNDMxIDI4MCAyMzBDMjgwIDI0Ni41NjkgMjY2LjU2OSAyNjAgMjUwIDI2MEMyMzMuNDMxIDI2MCAyMjAgMjQ2LjU2OSAyMjAgMjMwQzIyMCAyMTMuNDMxIDIzMy40MzEgMjAwIDI1MCAyMDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEwIDI5MEgzMDBWMjcwQzMwMCAyNTMuNDMxIDI4Ni41NjkgMjQwIDI3MCAyNDBIMjMwQzIxMy40MzEgMjQwIDIwMCAyNTMuNDMxIDIwMCAyNzBWMjkwSDMxMFpNMjIwIDI4MFYyNzBDMjIwIDI2NC40NzcgMjI0LjQ3NyAyNjAgMjMwIDI2MEgyNzBDMjc1LjUyMyAyNjAgMjgwIDI2NC40NzcgMjgwIDI3MFYyODBIMjIwWiIgZmlsbD0id2hpdGUiLz4KPHR5dGUgeD0iMjUwIiB5PSIzNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiPkNlcnRpZmljYXRlPC90ZXh0Pgo8L3N2Zz4K';
    };
    
    certImage.src = cert.image;
    
    // Update navigation buttons
    document.querySelector('.prev-btn').disabled = currentCertIndex === 0;
    document.querySelector('.next-btn').disabled = currentCertIndex === certificates.length - 1;
    
    // Update thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentCertIndex);
    });
    
    // Auto-scroll to active thumbnail
    const activeThumb = document.querySelector('.thumbnail.active');
    if (activeThumb) {
        activeThumb.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center' 
        });
    }
    
    // Add click handler for fullscreen view
    certImage.onclick = () => openFullscreenImage(cert.image);
}

function nextCertificate() {
    if (currentCertIndex < certificates.length - 1) {
        currentCertIndex++;
        displayCurrentCertificate();
    }
}

function previousCertificate() {
    if (currentCertIndex > 0) {
        currentCertIndex--;
        displayCurrentCertificate();
    }
}

function goToCertificate(index) {
    currentCertIndex = index;
    displayCurrentCertificate();
}

function openFullscreenImage(imageSrc) {
    const fullscreenViewer = document.createElement('div');
    fullscreenViewer.className = 'fullscreen-viewer';
    fullscreenViewer.innerHTML = `
        <span class="fullscreen-close">&times;</span>
        <img class="fullscreen-image" src="${imageSrc}" alt="Certificate Fullscreen">
    `;
    
    document.body.appendChild(fullscreenViewer);
    fullscreenViewer.style.display = 'block';
    
    // Close handlers
    fullscreenViewer.onclick = () => {
        document.body.removeChild(fullscreenViewer);
    };
    
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(fullscreenViewer)) {
                document.body.removeChild(fullscreenViewer);
            }
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Keyboard navigation for certificates
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('certificationsModal');
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowRight') {
            nextCertificate();
        } else if (event.key === 'ArrowLeft') {
            previousCertificate();
        } else if (event.key === 'Escape') {
            closeCertifications();
        }
    }
});

// ===== THEME TOGGLE FUNCTIONALITY =====
function initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply theme with smooth transition
    document.documentElement.style.transition = 'all 0.3s ease';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme);
    
    // Remove transition after animation completes
    setTimeout(() => {
        document.documentElement.style.transition = '';
    }, 300);
    
    // Add a nice animation effect
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            themeButton.style.transform = 'scale(1)';
        }, 150);
    }, 150);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Keyboard shortcut for theme toggle (Ctrl + Shift + T)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleTheme();
    }
});

// ===== GROK AI CHATBOT FUNCTIONALITY =====
let grokIsOpen = false;
let grokIsMinimized = false;
let messageHistory = [];

// Knowledge base about Anshuman
const knowledgeBase = {
    personal: {
        name: "Ankit Kumar Gupta",
        title: "MERN Stack Developer",
        location: "Bhilai, India",
        email: "ankitroy1542@gmail.com",
        description: "I'm working in web development and Design. I enjoy creating beautiful and intuitive web designs using Html css and make them interactive with Javascript."
    },
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        languages: ["C++", "JavaScript", "Python"],
        tools: ["Git", "VS Code", "Figma"],
        databases: ["MongoDB", "MySQL"],
        other: ["Web Design", "Responsive Design", "UI/UX"]
    },
    experience: [
        {
            company: "Tempsens Company",
            role: "Web Developer | Internship",
            period: "June 2025 - July 2025",
            description: "Worked as a web developer intern"
        },
        {
            company: "Techfest IIT BOMBAY",
            role: "Campus Ambassador | Internship",
            period: "March 2025 - July 2025",
            description: "Represented IIT Bombay's Techfest as campus ambassador"
        },
        {
            company: "Coderarmy",
            role: "Web Developer | Internship",
            period: "Dec 2024 - Feb 2025",
            description: "Web development internship"
        }
    ],
    education: [
        {
            degree: "B.Tech - Information Technology",
            institution: "Rungta College Of Engineering And Technology",
            period: "2023-2027"
        },
        {
            degree: "Higher Secondary School",
            institution: "MSY COLLEGE GAYA",
            period: "2020-2022"
        }
    ],
    certifications: [
        "AWS Solutions Architect - Associate (2024)",
        "Cisco CCNA (1-3) (2024)",
        "CPA C++ (2023)",
        "DSA in C++ - Excellence (2023)"
    ],
    projects: [
        "Portfolio Website - Personal portfolio showcasing skills and projects",
        "Web Development Projects - Various projects using MERN stack",
        "Responsive Web Designs - Mobile-first design implementations"
    ]
};

function openGrokChat() {
    document.getElementById('grokChatModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    grokIsOpen = true;
    
    // Add welcome animation
    setTimeout(() => {
        const chatContainer = document.querySelector('.grok-chat-container');
        chatContainer.style.animation = 'slideInRight 0.3s ease-out';
    }, 100);
}

function closeGrokChat() {
    document.getElementById('grokChatModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    grokIsOpen = false;
    grokIsMinimized = false;
    document.querySelector('.grok-chat-container').classList.remove('minimized');
}

function minimizeGrok() {
    const container = document.querySelector('.grok-chat-container');
    const minimizeBtn = document.querySelector('.grok-action-btn');
    
    if (grokIsMinimized) {
        container.classList.remove('minimized');
        minimizeBtn.innerHTML = '<i class="fas fa-window-minimize"></i>';
        grokIsMinimized = false;
    } else {
        container.classList.add('minimized');
        minimizeBtn.innerHTML = '<i class="fas fa-window-maximize"></i>';
        grokIsMinimized = true;
    }
}

function sendSuggestion(message) {
    document.getElementById('grokInput').value = message;
    sendGrokMessage();
}

function sendGrokMessage() {
    const input = document.getElementById('grokInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    updateMessageCount();
    
    // Hide suggestions after first message
    document.getElementById('grokSuggestions').style.display = 'none';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate AI response
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateGrokResponse(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

function addMessage(text, sender) {
    const chatArea = document.getElementById('grokChatArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `grok-message ${sender}-message`;
    
    const avatarIcon = sender === 'bot' ? 'fas fa-robot' : 'fas fa-user';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="${avatarIcon}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
    
    // Store in history
    messageHistory.push({ text, sender, timestamp: new Date() });
}

function showTypingIndicator() {
    const chatArea = document.getElementById('grokChatArea');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'grok-message bot-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-indicator">
                <span>Grok is thinking</span>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    chatArea.appendChild(typingDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateGrokResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Skills related responses
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
        const skills = knowledgeBase.skills;
        return `🚀 Ankit has expertise in multiple technologies! 

**Frontend:** ${skills.frontend.join(', ')}
**Backend:** ${skills.backend.join(', ')}
**Languages:** ${skills.languages.join(', ')}
**Databases:** ${skills.databases.join(', ')}

He's particularly strong in MERN stack development and creating responsive web designs!`;
    }
    
    // Projects related responses
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
        return `💼 Ankit has worked on several interesting projects:

• **Portfolio Website** - This beautiful responsive portfolio you're viewing right now!
• **MERN Stack Applications** - Full-stack web applications using MongoDB, Express, React, and Node.js
• **Responsive Web Designs** - Mobile-first approach ensuring great user experience across devices

Each project demonstrates his skills in modern web development and attention to detail!`;
    }
    
    // Experience related responses
    if (message.includes('experience') || message.includes('internship') || message.includes('job')) {
        const exp = knowledgeBase.experience;
        return `💼 Here's Ankit's professional experience:

**${exp[0].company}**
${exp[0].role}
📅 ${exp[0].period}

**${exp[1].company}**
${exp[1].role}
📅 ${exp[1].period}

**${exp[2].company}**
${exp[2].role}
📅 ${exp[2].period}

He's gained valuable experience in web development and has been actively involved in tech communities!`;
    }
    
    // Certifications related responses
    if (message.includes('certification') || message.includes('certificate') || message.includes('achievement')) {
        return `🏆 Ankit has earned several professional certifications:

• **AWS Solutions Architect - Associate** (2024)
• **Cisco CCNA (1-3)** (2024)
• **CPA C++ Programming** (2023)
• **DSA in C++ - Excellence** (2023)

With 33 certificates in total! Click the 'Certifications' button in his portfolio to view them all. These certifications validate his skills in cloud computing, networking, programming, and data structures!`;
    }
    
    // Education related responses
    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('study')) {
        const edu = knowledgeBase.education;
        return `🎓 Ankit's educational background:

**${edu[0].degree}**
📍 ${edu[0].institution}
📅 ${edu[0].period}

**${edu[1].degree}**
📍 ${edu[1].institution}
📅 ${edu[1].period}

He's currently pursuing his B.Tech in Information Technology, building a strong foundation in computer science and technology!`;
    }
    
    // Contact related responses
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('hire')) {
        const personal = knowledgeBase.personal;
        return `📞 Want to get in touch with Ankit?

📧 **Email:** ${personal.email}
📍 **Location:** ${personal.location}
💼 **Role:** ${personal.title}

You can also connect with him on LinkedIn or check out his GitHub projects. He's always open to discussing new opportunities and collaborations!`;
    }
    
    // Resume related responses
    if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
        return `📄 You can download Ankit's latest resume by clicking the "Resume" button in the About section of his portfolio!

His resume includes:
• Complete work experience
• Technical skills & certifications
• Project details
• Educational background
• Contact information

It's regularly updated to reflect his latest achievements and experiences!`;
    }
    
    // About/general responses
    if (message.includes('who') || message.includes('about') || message.includes('tell me') || message.includes('introduce')) {
        const personal = knowledgeBase.personal;
        return `👋 Meet ${personal.name}!

He's a passionate **${personal.title}** from ${personal.location}. ${personal.description}

🎯 **What makes him special:**
• Strong expertise in MERN stack development
• Creative approach to web design and user experience
• Multiple professional certifications
• Active in tech communities and continuous learning

Feel free to ask me about his skills, projects, experience, or anything else!`;
    }
    
    // Default responses
    const defaultResponses = [
        "🤖 That's an interesting question! I can help you learn about Ankit's skills, projects, experience, certifications, or education. What would you like to know?",
        "💭 I'm here to share information about Ankit's professional background. Try asking about his programming skills, work experience, or projects!",
        "🚀 I'd love to help! You can ask me about Ankit's technical expertise, career journey, achievements, or how to get in touch with him.",
        "✨ Great question! I can tell you about Ankit's web development skills, his portfolio projects, professional certifications, or educational background. What interests you most?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function updateMessageCount() {
    const input = document.getElementById('grokInput');
    const count = document.getElementById('messageCount');
    count.textContent = `${input.value.length}/500`;
}

// Event listeners for Grok chat
document.addEventListener('DOMContentLoaded', function() {
    // Input character counter
    document.getElementById('grokInput').addEventListener('input', updateMessageCount);
    
    // Enter key to send message
    document.getElementById('grokInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendGrokMessage();
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('grokChatModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGrokChat();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && grokIsOpen) {
            closeGrokChat();
        }
    });
});