# Welcome to your Lovable project

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form email sending

We use client-side EmailJS. Configure an .env file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then create a template in EmailJS that accepts: from_name, from_email, phone, message, to_email.

If these values are not set, the contact form will fall back to opening the default mail client to send to jumaboyevabarno80@gmail.com.

## Telegramga yuborish (bir nechta foydalanuvchiga)

Kontakt formasi xabarni Telegram bot orqali bir nechta chat IDlarga ham yuboradi. Buning uchun `.env` faylida quyidagilarni to‘ldiring:

```
VITE_TELEGRAM_BOT_TOKEN=123456789:ABC...your-bot-token
VITE_TELEGRAM_CHAT_IDS=11111111,22222222,33333333
```

- Bot tokenni @BotFather’dan oling.
- Chat IDlarni @userinfobot yoki logging orqali toping. Bir nechta ID bo‘lsa, vergul bilan ajrating.
- Agar Telegram sozlanmagan bo‘lsa, EmailJS’ga o‘tadi; u ham bo‘lmasa, mailto fallback ishga tushadi.

## SEO

- Global tags are in `index.html`.
- Per-page tags can be set with the `SEO` helper from `src/lib/seo.tsx`.
- Static `robots.txt` and `sitemap.xml` live in `public/`. Update the domain in `public/sitemap.xml` after deployment.

## Routes

- New Privacy Policy page is at `/privacy` and linked from the footer.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [cincinnatiexpressllc.com]

## Update by JasurShermatov
