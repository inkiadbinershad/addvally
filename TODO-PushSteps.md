# Git Push New Files Steps

## Overview
Copy new pages/components from src/ to Addvally/src/, update routes, push to https://github.com/inkiadbinershad/Addvally.git main branch.
No fixes, just add new files as per user new creations.

## Steps:
- [ ] 1. Copy new pages: Account, AITargeting, BillingPlans, GrowthRevenue, Notifications, Onboarding, Settings from src/pages/ to Addvally/src/pages/
- [ ] 2. Copy updated components: Layout.jsx, Sidebar.jsx from src/components/ to Addvally/src/components/
- [ ] 3. Copy App.jsx, index.css from src/ to Addvally/src/
- [ ] 4. cd Addvally && git add .
- [ ] 5. git reset HEAD ../../src.zip (exclude zip)
- [ ] 6. git commit -m \"feat: add new dashboard pages (BillingPlans, AITargeting, Notifications, Settings, Onboarding, GrowthRevenue, Account) and UI updates\"
- [ ] 7. git push origin main
- [ ] 8. Verify git log and GitHub repo
