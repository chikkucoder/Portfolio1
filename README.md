# 🚀 Ankit Kumar Gupta - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://YOUR-SITE-NAME.netlify.app/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chikkucoder/Portfolio1)](https://github.com/chikkucoder/Portfolio1/stargazers)

> **Personal Portfolio Website** - MERN Stack Developer with AI Chatbot & WhatsApp Integration

## 🌟 Live Demo

**🔗 Website:** [YOUR-SITE-NAME.netlify.app](https://YOUR-SITE-NAME.netlify.app)

## 🚀 Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chikkucoder/Portfolio1)

### **One-Click Deployment Steps:**
1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Choose repository name
4. Deploy automatically!

## 🛠️ Manual Netlify Deployment

### **Method 1: Git Integration (Recommended)**
1. **Fork this repository**
2. **Login to [Netlify](https://app.netlify.com)**
3. **Click "New site from Git"**
4. **Choose GitHub** and select your forked repository
5. **Deploy settings:**
   - Build command: `echo "Static site - no build required"`
   - Publish directory: `.` (root)
6. **Click "Deploy site"**

### **Method 2: Drag & Drop**
1. **Download repository** as ZIP
2. **Extract files**
3. **Drag the entire folder** to Netlify deployment area
4. **Site deploys automatically**

## 🔧 Netlify Configuration

### **Automatic Configuration:**
- ✅ `netlify.toml` - Build settings and headers
- ✅ `_redirects` - URL routing and SPA support
- ✅ `404.html` - Custom error page

### **Environment Variables (Optional):**
For Supabase integration:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🌟 Features

### 🎯 **Core Features**
- **Responsive Design** - Perfect on all devices (Mobile, Tablet, Desktop)
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Interactive Animations** - Smooth scrolling, particle effects, typing animations
- **Modern UI/UX** - Clean, professional design with hover effects

### 🤖 **AI Integration**
- **Grok AI Chatbot** - Interactive AI assistant with knowledge base
- **Smart Responses** - Contextual answers about skills, projects, and experience
- **Suggestion System** - Quick-access buttons for common queries

### 📱 **Communication Features**
- **WhatsApp Integration** - Direct contact via WhatsApp with pre-filled messages
- **Floating Chat Button** - Easy access WhatsApp contact
- **Contact Form** - Professional email contact system
- **Social Media Links** - LinkedIn, GitHub, Instagram integration

### 🏆 **Showcase Features**
- **Visitor Wall** - Interactive message board with mood selections
- **Certifications Viewer** - 33+ certificates with navigation and thumbnails
- **Project Gallery** - Responsive project showcase with live demos
- **Skills Display** - Modern tech stack with updated icons

### 🛠️ **Technical Features**
- **Supabase Integration** - Real-time database for visitor messages
- **Progressive Web App** - Fast loading and offline capabilities
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Cross-browser Compatible** - Works on all modern browsers

## 🚀 Tech Stack

### **Frontend**
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts
- Vanilla Tilt.js for 3D effects
- Typed.js for typing animations
- Particles.js for background effects

### **Backend & Database**
- Supabase (Backend as a Service)
- Real-time Database
- Row Level Security (RLS)

### **Deployment & Hosting**
- **Netlify** (Primary hosting)
- GitHub Pages (Alternative)
- Vercel (Alternative)
- Git for version control

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 480px)  { /* Small phones */ }
@media (max-width: 600px)  { /* Large phones */ }
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 900px)  { /* Small laptops */ }
@media (min-width: 1200px) { /* Large screens */ }
```

## 🛠️ Local Development

### **1. Clone Repository**
```bash
git clone https://github.com/chikkucoder/Portfolio1.git
cd Portfolio1
```

### **2. Local Development Server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000

# Using Live Server (VS Code Extension)
# Just open index.html and click "Go Live"
```

### **3. Setup Supabase (Optional)**
1. Create account at [Supabase](https://supabase.com)
2. Create new project
3. Run the SQL from `CREATE_TABLE_NOW.sql`
4. Update `supabase-config-example.js` with your credentials
5. Rename to `supabase-config.js`

## 📁 Project Structure

```
Portfolio1/
├── index.html              # Main portfolio page
├── 404.html               # Custom error page
├── netlify.toml           # Netlify configuration
├── _redirects             # URL routing rules
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   ├── script.js      # Main JavaScript
│   │   ├── app.js         # Particles config
│   │   └── particles.min.js
│   └── images/
│       ├── certificates/   # Certificate images
│       ├── projects/       # Project screenshots
│       └── skills/         # Skill icons
├── projects/
│   ├── index.html         # Projects showcase
│   └── projects.json      # Project data
├── experience/
│   └── index.html         # Experience timeline
├── skills.json            # Skills data
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🎨 Customization

### **Colors (CSS Variables)**
```css
:root {
  --primary-bg: #f7f7f7;
  --accent-color: #2b3dda;
  --text-primary: #32323e;
}
```

### **Typing Animation**
```javascript
var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Backend Developer", "MERN Stack Developer"],
    // ... other options
});
```

### **Skills & Projects**
- Update `skills.json` for skills
- Update `projects/projects.json` for projects
- Add images to respective folders

## 📊 Performance

- **Lighthouse Score:** 95+
- **Mobile-Friendly:** ✅
- **SEO Optimized:** ✅
- **Fast Loading:** < 2 seconds
- **Cross-browser:** Chrome, Firefox, Safari, Edge
- **Netlify CDN:** Global edge locations

## 🔍 SEO Features

- **Meta tags** for social sharing
- **Open Graph** tags for Facebook/LinkedIn
- **Twitter Cards** for Twitter sharing
- **Structured data** for search engines
- **Sitemap** generation
- **Robot.txt** for crawlers

## 📞 Contact & Support

### **📧 Get in Touch**
- **Email:** [ankitroy1542@gmail.com](mailto:ankitroy1542@gmail.com)
- **LinkedIn:** [Ankit Kumar Gupta](https://www.linkedin.com/in/ankit-kumar-gupta-0584b8250)
- **GitHub:** [chikkucoder](https://github.com/chikkucoder)
- **Instagram:** [@ankit_roy2005](https://www.instagram.com/ankit_roy2005)
- **WhatsApp:** [Direct Chat](https://wa.me/916202888431)

### **💼 Services**
- Full-Stack Web Development
- MERN Stack Applications
- Responsive Web Design
- Database Design & Integration
- API Development & Integration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📝 License

This project is **MIT** licensed. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **Netlify** for amazing hosting service
- **Font Awesome** for icons
- **Google Fonts** for typography
- **Particles.js** for background effects
- **Typed.js** for typing animations
- **Supabase** for backend services

---

### 🌟 **Show your support**

Give a ⭐️ if this project helped you!

**Made with ❤️ by [Ankit Kumar Gupta](https://github.com/chikkucoder)**

---

## 🚀 **Ready to Deploy?**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chikkucoder/Portfolio1)