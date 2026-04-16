# Portfolio Website

A modern, professional portfolio with smooth animations, dark mode, and full responsiveness.

## Features

- ✨ Modern design with gradients and glassmorphism
- 🎨 Dark/Light mode toggle (persists in localStorage)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Dynamic content via config.json
- 💫 Smooth scroll animations and parallax effects
- 🎯 Ready to deploy to Netlify

## How to Use

### Edit Your Information

Edit the `config.json` file to customize:

1. **Site Details**: Update title, description, names, and links
2. **Experience**: Add/remove/edit your work experience items
3. **Projects**: Add/remove projects with descriptions, tags, and details
4. **Contact**: Update email, LinkedIn, and GitHub links

Example:
```json
{
  "siteTitle": "Your Name",
  "heroTitle": "Your Name",
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "period": "Year",
      "description": "What you did",
      "icon": "📞"
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Short description",
      "details": "Long description for modal",
      "tags": ["Tech1", "Tech2"],
      "link": "project-url"
    }
  ]
}
```

### Customize Colors & Styling

Edit `styles/variables.css` to change:
- Primary colors
- Background colors
- Border radius
- Shadows
- Transitions

### Add Project Images

Replace placeholder project emojis with actual images:
1. Add images to `assets/images/projects/`
2. Update `config.json` with the image path

## Deployment on Netlify

### Option 1: Drag & Drop
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `portfolio` folder to the drop zone
3. Done! Your site is live

### Option 2: Git Integration
1. Push this folder to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify automatically deploys on every push

### Option 3: CLI
```bash
npm install -g netlify-cli
cd portfolio
netlify deploy --prod
```

## File Structure

```
portfolio/
├── index.html         # Main HTML file
├── config.json        # Easy-to-edit configuration
├── netlify.toml       # Netlify deployment config
├── assets/
│   ├── images/
│   │   ├── profile/   # Your profile photo
│   │   └── projects/  # Project screenshots
│   └── favicon.svg    # Website icon
├── styles/
│   ├── variables.css  # Color & design variables
│   └── main.css       # Main styling
└── js/
    ├── config.js      # Config loader
    └── main.js        # JavaScript functionality
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Zero build process - pure static files
- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no dependencies)
- Optimized animations using CSS & IntersectionObserver
- Mobile-friendly with responsive design

## Tips

- Update `config.json` to keep all content in one place
- Use emojis or image URLs for project visualizations
- Keep project descriptions concise
- Test dark mode for accessibility
- Preview before deploying to Netlify

---

Made with ❤️ using modern web standards.
