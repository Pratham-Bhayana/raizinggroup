# Raizing Group Website

A modern, professional website for Raizing Group showcasing global business solutions including visas, immigration, insurance, company formation, and manpower recruitment services.

## 🚀 Ready for Netlify Deployment

This website is fully configured and production-ready for Netlify deployment.

### Deployment Instructions

#### Method 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in to your account
3. Drag and drop the entire project folder to the Netlify dashboard
4. Your site will be live in seconds!

#### Method 2: Git/GitHub Deployment (Recommended for ongoing updates)
1. Push this code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select your repository
6. Click "Deploy site"

#### Method 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

## 📁 Project Structure

```
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact page
├── visas.html              # Raizing Visas service
├── immigration.html        # Immigration service (Raizing Sovereign)
├── insurance.html          # Raizing Insurance service
├── company-formation.html  # Company Formation service
├── manpower-recruitment.html # Manpower Recruitment (Cavec Global)
├── verify.html             # Raizing Verify service
├── sim.html                # Raizing Sim service
├── edu.html                # Raizing Edu service
├── news-media.html         # News & Media page
├── preloader.css           # Preloader styles
├── preloader.js            # Preloader functionality
├── responsive.css          # Responsive design styles
├── responsive.js           # Responsive menu functionality
├── netlify.toml            # Netlify configuration
├── _redirects              # URL redirects and routing
├── _headers                # Security and caching headers
├── robots.txt              # SEO crawler instructions
└── .gitignore              # Git ignore patterns
```

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Complete meta tags for search engines and social media
- **Fast Loading**: Preloader with optimal timing, external asset optimization
- **Secure**: Security headers configured (X-Frame-Options, CSP, etc.)
- **Performance**: Static asset caching configured for optimal speed
- **Pretty URLs**: Support for URLs with and without .html extension

## 🔧 Configuration Files

### netlify.toml
- Build settings
- Redirect rules for pretty URLs
- Security headers
- Cache control for static assets

### _redirects
- URL rewriting for clean URLs (with or without .html)
- 404 fallback handling

### _headers
- Security headers (XSS protection, frame options, etc.)
- Cache-Control for optimal performance
- Referrer and permissions policies

### robots.txt
- SEO configuration for search engine crawlers
- Allows all pages to be indexed

## 🎨 Customization

### Updating Content
- Edit the respective HTML files to update page content
- All pages use inline CSS for easy customization
- Color scheme is defined in CSS variables in each file

### Branding
- Logo: Currently using Cloudinary hosted image
- Colors: Brand red (#b40000, #e00000) with dark theme
- Font: Plus Jakarta Sans (Google Fonts)

## 📱 Pages Included

1. **Home** (`index.html`) - Main landing page with services overview
2. **About Us** (`about.html`) - Company information
3. **Services**:
   - Raizing Visas
   - Immigration (Raizing Sovereign)
   - Raizing Insurance
   - Company Formation
   - Manpower Recruitment (Cavec Global)
   - Raizing Verify
   - Raizing Sim
   - Raizing Edu
4. **News & Media** - Company updates and news
5. **Contact** - Contact form and information

## 🔒 Security

The site includes production-ready security headers:
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` for camera, microphone, and geolocation

## ⚡ Performance

- Static asset caching (1 year for CSS/JS)
- Fresh content delivery for HTML pages
- Optimized font loading with preconnect
- Efficient preloader with min/max timing

## 📈 SEO

- Complete meta tags (description, keywords, author)
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Robots.txt for crawler control

## 🌐 Post-Deployment

After deploying to Netlify:

1. **Update robots.txt**: Replace the sitemap URL with your actual Netlify URL
2. **Custom Domain** (optional): Add your custom domain in Netlify settings
3. **SSL Certificate**: Netlify provides free SSL automatically
4. **Analytics**: Consider adding Netlify Analytics or Google Analytics
5. **Forms**: If using contact forms, configure Netlify Forms

## 🆘 Support

For issues or questions about deployment, visit:
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

## 📝 Notes

- No build process required - this is a static HTML site
- All external assets (images, fonts) are already hosted on CDNs
- The site works perfectly with or without a custom domain
- All pages are mobile-responsive and tested

---

**Ready to deploy!** 🚀 Just follow any of the deployment methods above.
