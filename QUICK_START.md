# Quick Start Guide

## Getting Started

1. **Edit config.json** - Update your information, projects, and links
2. **Open index.html** - Double-click to preview in your browser
3. **Deploy to Netlify** - Drag the `portfolio` folder to netlify.com/drop

## Key Files to Edit

### config.json
- Change title, subtitle, descriptions
- Add/remove experience items
- Update projects with tags and details
- Update contact links

### styles/variables.css
- Change color scheme
- Adjust spacing and sizes
- Customize animations

## Customization

### Change Colors
Edit these in `variables.css`:
```css
--primary: #7C3AED;           /* Main accent color */
--secondary: #06B6D4;         /* Secondary accent */
--accent: #EC4899;            /* Additional accent */
```

### Add Project Images
1. Put images in `assets/images/projects/`
2. Update `config.json` image paths
3. Replace emoji placeholders with image URLs

### Modify Fonts
Update font-family in `main.css` body selector:
```css
font-family: 'Your Font', system-ui, sans-serif;
```

## Dark Mode

- Automatically saves preference to browser
- Edit dark mode colors in `variables.css` body.dark section
- Toggle with the 🌙/☀️ button in header

## Performance Tips

- Keep project descriptions under 150 characters
- Use optimized images (compress before adding)
- Minimize config.json file size by removing unused fields

## Support

- All modern browsers supported (Chrome, Firefox, Safari, Edge)
- Mobile responsive by default
- No JavaScript dependencies needed

Enjoy your new portfolio! 🚀
