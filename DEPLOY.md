# 🚀 Deployment Checklist: Financial Recovery Architect

## 1. Final Content Polish
- [ ] **FSP Number:** Set in Netlify (see **Environment variables** below). No code change needed.
- [ ] **Resume:** Ensure `Taufeeq_Essop_Resume_2026.pdf` is inside the `public/` folder.
- [ ] **Logo:** Verify `public/logo.jpg` is loading correctly.

## 1b. Environment Variables (Netlify)
In **Netlify Dashboard** → your site → **Site configuration** → **Environment variables** → **Add a variable** → **Add a single variable**. Then **Trigger deploy** so changes apply.

| Key | Value | Purpose |
|-----|--------|--------|
| `NEXT_PUBLIC_FSP_NUMBER` | Your FSCA license number | Shows in Footer, Contact, Services (Compliance Firewall) |
| `NEXT_PUBLIC_SITE_URL` | `https://taufeeqessop.co.za` (or your Netlify URL) | SEO, canonical and Open Graph URL |

**Optional (post-launch):**
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `27810487447` (for a future WhatsApp widget)
- `NEXT_PUBLIC_GA_ID` = your Google Analytics measurement ID

## 2. GitHub Push
Run these commands in your terminal:
```bash
git add .
git commit -m "Final polish: Logo and Forms"
git push origin main
```

## 3. Netlify Setup
1. Log in to [Netlify](https://netlify.com).
2. Click **Add new site** > **Import from Git**.
3. Select your **taufeeq-essop-portfolio** repo.
4. **Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next` (or leave default if using the Netlify Next.js plugin from `netlify.toml`)
5. Click **Deploy**.

## 4. Post-Launch Verification
- [ ] **Test Forms:** Go to the live site, fill out the **Contact** form, and check the **Forms** tab in your Netlify Dashboard.
- [ ] **Test Toolkit:** Submit an email in the **Rehab Funding Toolkit** section and confirm the submission appears under Forms.
- [ ] **Check PDF:** Click **Download Resume** to ensure the PDF opens.

---

### Ready to Launch?
You now have the **Logo**, the **Compliance Firewall**, the **Lead Magnet**, and **production-ready forms** (including the `public/__forms.html` ghost form so Netlify detects them on build).

Run `npm run dev` one last time to check the logo alignment. If it looks good, you are ready to run `npm run build` and push to Netlify.
