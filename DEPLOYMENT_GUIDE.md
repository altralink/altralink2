# GitHub Pages Deployment - Altralink

Your website is configured to automatically deploy to **https://altralink.com/** via GitHub Pages whenever you push to the main branch.

## Configuration Complete ✓

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Automatic on push to main branch
- **Build Tool**: Bun (fast JavaScript runtime)
- **Deployment**: GitHub Pages with official actions

### 2. Custom Domain Setup
- **Domain**: altralink.com
- **CNAME File**: `public/CNAME` (automatically deployed)
- **Base Path**: `/` (root domain)

### 3. Build Configuration
- **Framework**: React + Vite
- **Output**: `dist/` directory
- **Package Manager**: Bun

## How to Deploy

### Automatic Deployment (Recommended)
Simply push your changes to the main branch:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

The GitHub Action will automatically:
1. Install dependencies with Bun
2. Build your React application
3. Deploy to GitHub Pages
4. Update https://altralink.com/ within 1-2 minutes

### Manual Deployment
Trigger deployment manually from GitHub:

1. Go to https://github.com/altralink/maincode
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages**
4. Click **Run workflow** → Select **main** branch → **Run workflow**

## DNS Configuration

Ensure your domain registrar has these DNS records:

**A Records (for altralink.com):**
```
Type: A, Host: @, Value: 185.199.108.153
Type: A, Host: @, Value: 185.199.109.153
Type: A, Host: @, Value: 185.199.110.153
Type: A, Host: @, Value: 185.199.111.153
```

**CNAME Record (for www subdomain - optional):**
```
Type: CNAME, Host: www, Value: altralink.github.io
```

## Monitoring Deployments

### View Deployment Status
1. Repository: https://github.com/altralink/maincode
2. Click **Actions** tab
3. Latest workflow shows build/deploy status
   - ✓ Green = Successful
   - ✗ Red = Failed (click for logs)

### Deployment Time
- Build time: ~1-2 minutes
- DNS propagation: Up to 24 hours (first time)
- Subsequent updates: 1-2 minutes

## Local Development

### Development Server
```bash
bun install    # Install dependencies
bun run dev    # Start dev server at localhost:8080
```

### Test Production Build
```bash
bun run build    # Build for production
bun run preview  # Preview production build
```

## Troubleshooting

### Build Fails
- Check **Actions** tab for error logs
- Test build locally: `bun run build`
- Ensure all dependencies are in `package.json`

### Domain Not Working
- Verify `public/CNAME` contains: `altralink.com`
- Check DNS records with your domain provider
- Allow 24 hours for DNS propagation (first time)
- Clear browser cache

### Old Content Showing
- Verify deployment succeeded in Actions tab
- Hard refresh browser: Ctrl + Shift + R (Windows)
- Check if latest commit is deployed

## GitHub Pages Settings

Your repository is configured with:
- **Source**: GitHub Actions
- **Custom Domain**: altralink.com
- **HTTPS**: Enforced (automatic SSL certificate)

To verify settings:
1. Go to repository Settings
2. Click **Pages** (left sidebar)
3. Confirm **Source** is set to **GitHub Actions**

---

**Your website is ready!** Push to main branch to deploy automatically. 🚀