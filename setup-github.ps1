# GitHub Pages Setup Script
# Run this after Git is installed and terminal is restarted

Write-Host "Initializing Git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit: Portfolio website"

Write-Host "`n✅ Repository initialized successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Create a new repository on GitHub (don't initialize with README)" -ForegroundColor Cyan
Write-Host "2. Then run these commands (replace YOUR_USERNAME with your GitHub username):" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host "`n3. Enable GitHub Pages in repository Settings → Pages" -ForegroundColor Cyan

