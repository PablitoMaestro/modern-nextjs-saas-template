# Modern SaaS Template

A powerful, customizable SaaS template built with Next.js, TypeScript, Tailwind CSS, and modern web technologies. This template provides a solid foundation for building Software-as-a-Service applications with a beautiful UI, authentication, payment processing, and more.

## Features

- 🚀 **Modern Stack**: Built with Next.js, TypeScript, and Tailwind CSS
- 🎨 **Beautiful UI**: Utilizes shadcn UI components for a modern, consistent design
- 🌙 **Dark Mode**: Includes light/dark mode with system preference detection
- 🔒 **Authentication**: Integrated with Supabase for secure user authentication
- 💳 **Payments**: Stripe integration for subscription management
- 📱 **Responsive**: Mobile-first design approach for all screen sizes
- 🔍 **SEO Optimized**: Built-in SEO best practices
- 🏎️ **Performance**: Optimized for speed and user experience

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (for authentication and database)
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/saas-template.git
   cd saas-template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your Supabase and Stripe credentials.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   │   ├── landing/    # Landing page components
│   │   ├── layout/     # Layout components (header, footer)
│   │   └── ui/         # UI components from shadcn
│   ├── lib/            # Utility functions and libraries
│   └── providers/      # React context providers
├── .env.local.example  # Example environment variables
└── README.md           # Project documentation
```

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.ts` file.

### Components

UI components are built with shadcn UI, which provides a set of accessible, reusable, and customizable components. You can add more components using:

```bash
npx shadcn@latest add [component-name]
```

### Authentication

Authentication is handled by Supabase. You can customize the authentication flow in the `src/lib/supabase.ts` file.

### Payments

Payment processing is handled by Stripe. You can customize the payment flow in the `src/lib/stripe.ts` file.

## Deployment

This template is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)
- [Stripe](https://stripe.com/)
- [Vercel](https://vercel.com/)
