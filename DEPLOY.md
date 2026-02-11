# 🚀 Deployment Checklist: Financial Recovery Architect

## 1. Final Content Polish
- [ ] **FSP Number:** Check `src/components/Footer.tsx`. Replace `[Insert Number]` with your actual license.
- [ ] **Resume:** Ensure `Taufeeq_Essop_Resume_2026.pdf` is inside the `public/` folder.
- [ ] **Logo:** Verify `public/logo.jpg` is loading correctly.

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
