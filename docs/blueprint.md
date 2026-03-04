# **App Name**: DigitalNexus Portfolio

## Core Features:

- Dynamic Portfolio Renderer: Display portfolio sections (skills, projects, experience, contact) by fetching content from the database dynamically, ensuring the site is always up-to-date.
- Interactive Hero Terminal: Maintain the dynamic, flickering terminal aesthetic of the hero section, where key information like name and title can be dynamically updated via the CMS.
- Metrics Bar Data Visualization: Animate and update numerical statistics (years experience, projects shipped, etc.) on the stats bar with values sourced and managed through the CMS.
- Admin Content Hub: Provide a secure administrative interface for updating all portfolio content such as skills, projects, experiences, contact details, and site statistics via a Neon PostgreSQL database. This tool streamlines content management without requiring direct code changes.
- AI About Me Generator: Utilize an AI tool to dynamically generate or refine personalized versions of the 'About Me' description for the hero section based on specified keywords or target roles, making the content adaptable.
- Secure Contact Message Service: Implement a Next.js API endpoint to securely receive and process contact form submissions, replacing the client-side 'mailto' function with a robust backend service (e.g., forwarding messages to the user's email).
- Ticker Text Customizer: Enable seamless administration of the scrolling header ticker text via the CMS, allowing for fresh and relevant messaging updates.

## Style Guidelines:

- Color scheme: Predominantly dark to reinforce the digital, tech-noir theme, offering high contrast for readability and a modern aesthetic.
- Primary color: A vibrant neon green (#00FF41) (HSL: 135, 100%, 50%) to evoke digital displays and code, providing a high-energy focal point.
- Background color: A very dark, almost black hue (#070908) (HSL: 135, 15%, 5%), infused with a subtle hint of the primary green to maintain atmospheric depth.
- Accent color: A sharp, bright cyan (#00E5FF) (HSL: 184, 100%, 50%) used for highlighting interactive elements and key information, ensuring strong visual contrast against the primary green and dark background, aligning with a tech-savvy vibe.
- Headline font: 'Orbitron', a monospace sans-serif, chosen for its strong, futuristic, and bold aesthetic, ideal for impactful titles and section headers.
- Body font: 'Share Tech Mono', a monospace sans-serif, applied to all textual content to maintain a consistent digital, code-like appearance and enhance legibility within the theme.
- Minimalist, code-inspired iconography, utilizing symbolic characters like '◈', '◆', '>' and simple geometric shapes (e.g., status lights) to perfectly align with the overarching terminal aesthetic.
- A responsive grid-based layout designed for seamless adaptation across various devices, ensuring content is structured within a clear, central flow with distinct section breaks, reminiscent of command-line output.
- Subtle, deliberate animations, including an ethereal matrix rain background, programmatic flickering effects on text and elements, pulsating indicators for status, and smooth hover transitions. These elements enhance the cyberpunk and interactive feel without causing distraction.