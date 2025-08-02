# Primo Prod - Professional Video Production Website

A modern, responsive website for Primo Prod, a video production company based in Messina, Sicily.

## Features

### 🎬 Complete Video Production Website
- **Hero Section** with background video and call-to-action buttons
- **About Section** with company information, statistics, and team video
- **Portfolio Section** with filterable grid gallery (Commercial, Events, Social Media)
- **Testimonials Section** with slider functionality
- **Contact Section** with form submission and Google Maps integration

### 📱 Fully Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Smooth animations and transitions
- Cross-browser compatibility

### ⚡ Modern Technologies
- **HTML5** semantic markup
- **CSS3** with Flexbox and Grid
- **Vanilla JavaScript** (no heavy frameworks)
- **Animate.css** for smooth animations
- **Font Awesome** icons
- **Google Fonts** (Poppins)

### 🚀 Performance Optimized
- Lazy loading images
- Optimized scroll handlers
- Compressed and minified assets
- Fast loading times

## File Structure

```
primoprod/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── assets/                # Images and videos
│   ├── primo-prod-logo.png
│   ├── primo-prod-logo-white.png
│   ├── hero-video.mp4
│   ├── about-team.jpg
│   ├── about-video.mp4
│   ├── portfolio-1.jpg
│   ├── portfolio-2.jpg
│   ├── portfolio-3.jpg
│   ├── portfolio-4.jpg
│   ├── portfolio-5.jpg
│   ├── portfolio-6.jpg
│   ├── commercial-1.mp4
│   ├── commercial-2.mp4
│   ├── wedding-1.mp4
│   ├── corporate-event.mp4
│   ├── social-1.mp4
│   ├── social-2.mp4
│   ├── client-1.jpg
│   ├── client-2.jpg
│   ├── client-3.jpg
│   └── client-4.jpg
└── README.md              # This file
```

## Setup Instructions

### 1. Add Your Assets
Replace the placeholder assets in the `/assets` folder with your actual content:

- **Logo**: `primo-prod-logo.png` and `primo-prod-logo-white.png`
- **Hero Video**: `hero-video.mp4` (recommended: 1920x1080, MP4 format)
- **About Section**: `about-team.jpg` and `about-video.mp4`
- **Portfolio Images**: `portfolio-1.jpg` through `portfolio-6.jpg`
- **Portfolio Videos**: Various MP4 files for lightbox viewing
- **Client Photos**: `client-1.jpg` through `client-4.jpg`

### 2. Configure Contact Form
1. Sign up for a free account at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `your-form-id` in the contact form action URL:
   ```html
   <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
   ```

### 3. Update Contact Information
Edit the contact details in `index.html`:
- Address: Currently set to "Via del Porto 123, Messina, Sicily 98100"
- Phone: Currently set to "+39 090 123 4567"
- Email: Currently set to "info@primoprod.com"
- Social media links

### 4. Customize Content
- Update company information in the About section
- Replace testimonials with real client feedback
- Update portfolio items with your actual projects
- Modify SEO meta tags with your information

## Deployment

### Option 1: Static Hosting (Recommended)
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Upload the project folder
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting enabled

### Option 2: Traditional Web Hosting
1. Upload all files to your web server's public directory
2. Ensure the file structure is maintained
3. Point your domain to the hosting location

## Customization

### Colors
The main brand color is `#0066cc` (blue). To change it:
1. Search for `#0066cc` in `css/styles.css`
2. Replace with your brand color
3. Also update hover states (`#004499`)

### Fonts
Currently using Google Fonts (Poppins). To change:
1. Update the Google Fonts link in `index.html`
2. Change `font-family: 'Poppins', sans-serif;` in `css/styles.css`

### Animations
- Animations use Animate.css classes
- Custom animations are defined in the CSS
- JavaScript handles scroll-triggered animations

## SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta descriptions and Open Graph tags
- Structured data ready
- Fast loading times
- Mobile-friendly design
- Clean URLs

### Additional SEO Steps:
1. Add Google Analytics tracking ID in `js/script.js`
2. Create and submit a sitemap.xml
3. Add Google Search Console verification
4. Optimize images with alt tags and descriptions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress all images to web-optimized formats
2. **Video Optimization**: Use compressed MP4 files for faster loading
3. **CDN Usage**: Consider using a CDN for assets
4. **Caching**: Implement proper cache headers on your server

## Troubleshooting

### Common Issues:

1. **Videos not playing**: Ensure MP4 files are web-optimized and not too large
2. **Contact form not working**: Verify Formspree form ID is correct
3. **Images not loading**: Check file paths and ensure assets exist
4. **Mobile navigation issues**: Clear browser cache and test

### Debug Mode:
Open browser developer tools (F12) to see console messages and errors.

## Support

For technical support or customization requests, please contact the development team.

## License

This website template is created for Primo Prod. All rights reserved.

---

**Note**: Remember to replace all placeholder content with your actual business information before going live.
