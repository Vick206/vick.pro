# VICK.PRO - Retro Amber CRT Console Portfolio

A retro-themed portfolio website featuring magic, card tricks, IT security services, and social media offerings. Built entirely with HTML, CSS, and vanilla JavaScript with a nostalgic amber CRT console aesthetic.

## Features

### 🎨 Design Elements
- **Retro CRT Monitor Theme**: Authentic amber/orange text-on-black aesthetic
- **Scanline Effects**: Realistic CRT screen scanline animation
- **Glitch Effects**: Dynamic title glitch animation with color separation
- **Glow & Text Shadows**: Authentic retro glow effects throughout
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### 📱 Sections
1. **HOME** - Welcome and system status
2. **MAGIC** - Stage magic, card tricks, mentalism, and close-up performances
3. **SECURITY** - IT security services, penetration testing, compliance, and incident response
4. **SOCIAL** - Links to social media platforms (GitHub, LinkedIn, Twitter, YouTube, Instagram, Twitch)
5. **CONTACT** - Contact form and direct contact information

### ⌨️ Interactive Features
- **Navigation Buttons**: Click any button to navigate sections
- **Keyboard Shortcuts**: 
  - Press `H` for Home
  - Press `M` for Magic
  - Press `S` for Security
  - Press `O` for Social
  - Press `C` for Contact
- **Uptime Counter**: Real-time system uptime display in footer
- **Terminal Typing Effect**: Text animates on page load
- **Contact Form**: Prepare messages to send via email
- **Hover Effects**: Interactive elements respond to mouse input

## Files

- **index.html** - Main HTML structure and content
- **style.css** - Complete styling with CRT effects
- **script.js** - Navigation, forms, and interactive features
- **README.md** - This file

## How to Use

1. Open `index.html` in any modern web browser
2. Use the navigation buttons to explore different sections
3. Click on social media links to visit platforms (update URLs in HTML as needed)
4. Use the contact form to send inquiries
5. Try keyboard shortcuts for quick navigation

## Customization

### Update Social Media Links
Edit the SOCIAL section in `index.html` and update the href attributes:
```html
<a href="https://github.com/yourusername" target="_blank">
```

### Change Colors
All color values are defined in `style.css`. Main colors:
- Primary amber: `#ffaa00`
- Secondary orange: `#ff6600`
- Accent green: `#00ff00`
- Bright yellow: `#ffff00`

To change the theme, find and replace these color values.

### Add More Services
Add new service blocks to the MAGIC or SECURITY sections:
```html
<div class="service-block">
    <p class="service-label">> YOUR_SERVICE_NAME</p>
    <p class="indent">Your service description here</p>
</div>
```

### Modify Contact Information
Update these values in the CONTACT section:
- Email: `contact@vick.pro`
- Phone: `+1 (555) MAGIC-01`
- Status message

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed
- **Lightweight**: Minimal file sizes for fast loading
- **Accessible**: Semantic HTML with proper form labels
- **Font**: Google Fonts "Roboto Mono" for authentic monospace look

## Tips

1. **Phone Number**: The phone number uses "MAGIC-01" which converts to 1-800-624-2401 (MAGIC)
2. **Email Integration**: The contact form uses `mailto:` links. For production, consider using a backend service
3. **Social Links**: Replace placeholder URLs with your actual social media profiles
4. **Animations**: All animations use CSS - no JavaScript performance impact
5. **CRT Realism**: The scanlines and flicker effects are intentional for authenticity

## Future Enhancements

- Add dark/light theme toggle
- Implement actual backend form submission
- Add portfolio image gallery
- Add testimonials/reviews section
- Add animated project showcase
- Add music or sound effects toggle

---

**Version**: 1.0 | **Last Updated**: 2024 | **Theme**: Retro CRT Console