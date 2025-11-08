# GitHub Pages Deployment Setup Complete

Your Altralink website is now configured for automatic deployment to GitHub Pages! Here's what has been set up:

## What's Been Configured:

### 1. Vite Configuration
- Updated `vite.config.ts` with `base: "/altralink2/"` for GitHub Pages
- This ensures all assets load correctly from the subdirectory

### 2. Package.json Updates
- Added `gh-pages` as a dev dependency
- Added `deploy` script for manual deployment if needed

### 3. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml` for automatic deployment
- Triggers on every push to the `main` branch
- Uses official GitHub Pages actions for security and reliability

## Next Steps to Complete Setup:

### 1. Push Your Changes to GitHub
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages (One-time setup)
1. Go to your repository: https://github.com/altralink/altralink2
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. First Deployment
After pushing and enabling Pages, the GitHub Action will automatically:
- Build your React/Vite application
- Deploy it to GitHub Pages
- Your site will be available at: `https://altralink.github.io/altralink2/`

## Manual Deployment (Optional)
If you ever need to deploy manually:
```bash
npm run build
npm run deploy
```

## Important Notes:

- **Automatic Updates**: Every push to `main` branch will trigger a new deployment
- **Build Time**: First deployment may take 2-3 minutes
- **Custom Domain**: You can add a custom domain later in GitHub Pages settings
- **HTTPS**: GitHub Pages provides free SSL certificates

## Monitoring Deployments:
- Go to **Actions** tab in your GitHub repo to see deployment status
- Green checkmark = successful deployment
- Red X = deployment failed (check logs for details)

Your website is now ready for automatic deployment! 🚀