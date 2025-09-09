# Toni's Portfolio - Frontend Developer

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and experience as a frontend developer.

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full TypeScript support for better development experience

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🛠️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer component
│   └── Typewriter.tsx       # Typewriter animation
├── public/                  # Static assets (images, fonts, etc.)
│   └── cv/                  # CV and resume files
│       └── Toni_Dobrinski_CV.pdf
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Header.tsx**: Update navigation links and social media URLs
- **Hero.tsx**: Change name, title, and description
- **About.tsx**: Update personal story, experience, and contact details
- **Skills.tsx**: Modify skills, technologies, and proficiency levels
- **Projects.tsx**: Add your own projects with descriptions and links
- **Contact.tsx**: Update contact information and form handling
 - Place your CV at `public/cv/Toni-Dobrinski-CV.pdf` to enable the Download CV button

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `globals.css` and `tailwind.config.js`
- **Animations**: Adjust animation settings in component files

### Content
- **Projects**: Add your projects in the `Projects.tsx` component
- **Skills**: Update your skills and technologies in `Skills.tsx`
- **Experience**: Modify your work experience in `About.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The portfolio includes a dark/light mode toggle that:
- Persists user preference in localStorage
- Respects system preference by default
- Provides smooth transitions between themes

## ⚡ Performance

- **Optimized Images**: Use Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **Minified CSS**: Tailwind CSS is purged and minified in production

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or need help customizing this portfolio, feel free to reach out:

- Email: druidxdd@gmail.com
- LinkedIn: https://www.linkedin.com/in/toni-dobrinski-187819242/
- GitHub: https://github.com/tonidobrinski

---

Made with ❤️ using Next.js and Tailwind CSS
