# Mohamed Maazith - Portfolio

A modern portfolio website with glassmorphism design.

## Quick Deploy to Netlify (Easiest - No Git Required)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your entire `portfolio` folder onto the page
3. Wait a few seconds for deployment
4. You'll get a live URL like: `https://random-name-123.netlify.app`
5. You can customize the site name in Netlify settings

## Deploy to GitHub Pages (Requires Git)

### Prerequisites
- Install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Create a GitHub account at [https://github.com](https://github.com)

### Steps
1. Open terminal in this folder
2. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Create a new repository on GitHub (don't initialize with README)
4. Connect and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
5. Go to repository Settings → Pages
6. Select source: `main` branch, folder: `/ (root)`
7. Your site will be at: `https://YOUR_USERNAME.github.io/portfolio`

## Files Structure
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── images/
│       └── profile.jpg
└── README.md
```

