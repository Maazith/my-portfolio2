# GitHub Pages Setup for Maazith

## Step 1: Verify Git (after restarting terminal)
```powershell
git --version
```

## Step 2: Initialize Repository
Run these commands in PowerShell (in the portfolio folder):

```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 3: Create GitHub Repository
1. Go to https://github.com and sign in
2. Click **+** → **New repository**
3. Repository name: `portfolio`
4. Set to **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click **Create repository**

## Step 4: Connect and Push (Run these after creating repository)
```powershell
git remote add origin https://github.com/Maazith/portfolio.git
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username (`Maazith`) and password. 
**Note:** If you have 2FA enabled, use a Personal Access Token instead of password.

## Step 5: Enable GitHub Pages
1. Go to https://github.com/Maazith/portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 6: Your Live Portfolio URL
After a few minutes, your portfolio will be live at:
```
https://Maazith.github.io/portfolio
```

## Troubleshooting

### If authentication fails:
Create a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Select scope: `repo` (full control)
4. Copy the token and use it as your password when pushing

### If Pages doesn't work:
- Make sure repository is **Public**
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root folder

