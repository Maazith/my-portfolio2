# GitHub Pages Deployment Instructions

## Step 1: Install Git
1. Download from: https://git-scm.com/download/win
2. Run installer (use default options)
3. **Restart your terminal/PowerShell** after installation

## Step 2: Verify Git Installation
Open PowerShell in this folder and run:
```powershell
git --version
```
You should see something like: `git version 2.x.x`

## Step 3: Initialize Git Repository
Run these commands in PowerShell (in the portfolio folder):

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"
```

## Step 4: Create GitHub Repository
1. Go to https://github.com and sign in (or create account)
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `portfolio` (or any name you prefer)
4. Set to **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click **Create repository**

## Step 5: Connect and Push to GitHub
After creating the repository, GitHub will show you commands. Run these in PowerShell:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token if 2FA is enabled).

## Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Access Your Live Site
Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio
```

It may take 1-2 minutes for the site to be available.

## Troubleshooting

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Create one at: https://github.com/settings/tokens
- Select scope: `repo` (full control)

### If Pages doesn't work:
- Make sure repository is **Public**
- Check that `index.html` is in the root folder
- Wait 2-3 minutes and refresh

