# Ranthambore International Academy (RIA) — Official School Website Demo

A premium, production-ready school website crafted for **Ranthambore International Academy (Sawai Madhopur, Rajasthan, India)**.

## How to Deploy Live on GitHub Pages (Step-by-Step)

### Option 1: Automatic GitHub Pages Deployment (Recommended)

1. **Create a New Repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Enter repository name (e.g., `ranthambore-academy`).
   - Choose **Public** and click **Create repository**.

2. **Push your code to GitHub**:
   Run these commands in your project terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Ranthambore Academy website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - That's it! The included `.github/workflows/deploy.yml` workflow will automatically build the site and provide you with a live URL (e.g. `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`).

---

### Option 2: 1-Click Free Hosting on Vercel or Netlify (Fastest)

1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Sign in with GitHub.
3. Select your repository `ranthambore-academy` and click **Deploy**.
4. Your site will be instantly live with free SSL/HTTPS in under 60 seconds!
