export const user = {
  name: 'Ahmed Khan',
  email: 'ahmed@restaurant.pk',
  phone: '+92 300 1234567',
  business: "Ahmed's Restaurant",
  city: 'Karachi',
  industry: 'Restaurant / Food',
  plan: 'Growth',
  avatar: 'AK',
  credits: 2000,
  referrals: 4,
}

export const campaigns = [
  {
    id: 1, title: 'Eid Special Offer', business: "Ahmed's Restaurant",
    city: 'Karachi', platform: 'meta', status: 'live',
    impressions: 22100, clicks: 340, ctr: '1.54', spent: 4200,
    budget: 3500, reach: '12,000–18,000', started: 'June 10, 2025',
    dailyBudget: 500, duration: 7,
    copy: '🌙 Eid Mubarak! 30% off your entire order at Ahmed\'s Restaurant this Eid. Limited time offer — order now!',
  },
  {
    id: 2, title: 'Clinic Walk-in Appointments', business: 'City Clinic',
    city: 'Islamabad', platform: 'google', status: 'live',
    impressions: 18900, clicks: 210, ctr: '1.11', spent: 3100,
    budget: 5000, reach: '8,000–14,000', started: 'June 7, 2025',
    dailyBudget: 400, duration: 14,
    copy: 'Walk-in appointments available now at City Clinic Islamabad. No waiting — book your slot online.',
  },
  {
    id: 3, title: 'Summer Sale — Clothing', business: 'Zara Style',
    city: 'Lahore', platform: 'tiktok', status: 'review',
    impressions: 0, clicks: 0, ctr: '—', spent: 0,
    budget: 2000, reach: '15,000–25,000', started: 'June 13, 2025',
    dailyBudget: 300, duration: 7,
    copy: 'Summer sale is here! Flat 40% off on all women\'s clothing at Zara Style Lahore. Shop now!',
  },
  {
    id: 4, title: 'Grand Opening — Bakery', business: 'Sweet Layers',
    city: 'Karachi', platform: 'meta', status: 'ended',
    impressions: 34200, clicks: 718, ctr: '2.10', spent: 6800,
    budget: 7000, reach: '—', started: 'May 20 – May 30, 2025',
    dailyBudget: 700, duration: 10,
    copy: 'Grand opening! Sweet Layers Bakery is now open in DHA Karachi. First 100 customers get a free pastry.',
  },
  {
    id: 5, title: 'Ramadan Deals — Grocery', business: 'Fresh Mart',
    city: 'Lahore', platform: 'google', status: 'ended',
    impressions: 51400, clicks: 961, ctr: '1.87', spent: 12200,
    budget: 13000, reach: '—', started: 'Mar 10 – Apr 10, 2025',
    dailyBudget: 400, duration: 31,
    copy: 'Ramadan Mubarak! Special grocery deals every day at Fresh Mart Lahore. Order online, free delivery above ₨2000.',
  },
  {
    id: 6, title: 'Property Listing — DHA Phase 6', business: 'Prime Properties',
    city: 'Lahore', platform: 'meta', status: 'paused',
    impressions: 9700, clicks: 79, ctr: '0.82', spent: 2100,
    budget: 8000, reach: '—', started: 'June 1, 2025',
    dailyBudget: 600, duration: 14,
    copy: '5 Marla house for sale in DHA Phase 6 Lahore. Beautifully designed, prime location. Contact Prime Properties.',
  },
]

export const notifications = [
  { id: 1, type: 'success', title: '✅ Ad approved by Meta', body: 'Your campaign "Eid Special Offer" has been approved and is now live on Facebook & Instagram.', time: '2 minutes ago', unread: true },
  { id: 2, type: 'info', title: '📊 27 new leads this week', body: 'Your Clinic Appointments campaign generated 27 new leads at an average cost of ₨311 per lead.', time: '1 hour ago', unread: true },
  { id: 3, type: 'warning', title: '⚠️ Budget at 75% — Eid Campaign', body: 'Your Eid Special Offer campaign has used ₨2,625 of your ₨3,500 budget. Top up or adjust.', time: '3 hours ago', unread: true },
  { id: 4, type: 'neutral', title: '📅 Campaign submitted: Summer Sale', body: 'Your TikTok campaign has been submitted for review. Expected approval: 24 hours.', time: 'Yesterday, 4:30 PM', unread: false },
  { id: 5, type: 'neutral', title: '📈 Grand Opening campaign ended', body: 'Your bakery grand opening reached 34,200 people and generated 72 leads. View full report.', time: 'June 10, 2025', unread: false },
  { id: 6, type: 'neutral', title: '🎁 Referral earned ₨1,000 credit', body: 'Ali Hassan signed up using your referral link and subscribed to the Starter plan.', time: 'June 8, 2025', unread: false },
]

export const billingHistory = [
  { id: 1, item: 'Growth Plan — June 2025', date: 'Jun 17 · EasyPaisa', amount: '₨12,999', status: 'paid' },
  { id: 2, item: 'Growth Plan — May 2025', date: 'May 17 · EasyPaisa', amount: '₨12,999', status: 'paid' },
  { id: 3, item: 'Extra campaign slot', date: 'Apr 28 · Visa', amount: '₨2,500', status: 'paid' },
  { id: 4, item: 'Growth Plan — April 2025', date: 'Apr 17 · EasyPaisa', amount: '₨12,999', status: 'paid' },
]

export const referrals = [
  { id: 1, name: 'Ali Hassan', plan: 'Starter', joined: 'Jun 8', credit: '₨1,000' },
  { id: 2, name: 'Sana Malik', plan: 'Growth', joined: 'May 22', credit: '₨1,000' },
  { id: 3, name: 'Bilal Ahmed', plan: 'Starter', joined: 'May 10', credit: '₨1,000' },
  { id: 4, name: 'Dr. Nida Shah', plan: 'Business', joined: 'Apr 30', credit: '₨1,000' },
]

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₨ 700',
    oldPrice: '₨ 1,000',
    yearlyPrice: '₨ 4,800',
    trial: ' 3 day trial',
    desc: 'A simple starting plan for small businesses testing digital ads.',
    features: [
      { text: '1 active campaign', included: true },
      { text: 'Meta (Facebook + Instagram)', included: true },
      { text: 'Basic ad copy support', included: true },
      { text: 'Basic performance report', included: true },
      { text: 'Google Ads', included: false },
      { text: 'TikTok Ads', included: false },
      { text: 'WhatsApp support', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₨ 2,499',
    oldPrice: '₨ 3,000',
    yearlyPrice: '₨ 29,988',
    desc: 'For growing brands that want stronger reach across multiple channels.',
    featured: true,
    features: [
      { text: '3 active campaigns', included: true },
      { text: 'Meta + Google Ads', included: true },
      { text: 'TikTok Ads', included: true },
      { text: 'Weekly performance report', included: true },
      { text: 'WhatsApp support', included: true },
      { text: 'Campaign optimisation support', included: true },
      { text: 'Dedicated account manager', included: false },
    ],
  },
  {
    id: 'business',
    name: 'Business Agency',
    price: '₨ 7,999',
    oldPrice: '₨ 10,000',
    yearlyPrice: '₨ 95,988',
    desc: 'Built for agencies and serious advertisers managing multiple client campaigns.',
    features: [
      { text: '10 campaigns', included: true },
      { text: 'Meta + Google + TikTok', included: true },
      { text: 'Priority campaign handling', included: true },
      { text: 'Daily performance reports', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom ad creatives', included: true },
      { text: 'Priority WhatsApp support', included: true },
    ],
  },
  {
    id: 'highbudget',
    name: 'High Budget Campaign',
    price: 'Custom',
    yearlyPrice: 'Custom',
    desc: 'For brands spending a minimum of 10 lac PKR and needing a tailored campaign setup.',
    badge: 'Contact Us',
    badgeColor: '#c4b5fd',
    features: [
      { text: 'Minimum budget: 10 lac PKR', included: true },
      { text: 'Custom media planning', included: true },
      { text: 'Dedicated strategy support', included: true },
      { text: 'Multi-platform execution', included: true },
      { text: 'Performance reporting', included: true },
    ],
  },
]

export const weeklyData = [
  { day: 'Mon', impressions: 5500, clicks: 68 },
  { day: 'Tue', impressions: 6800, clicks: 82 },
  { day: 'Wed', impressions: 4400, clicks: 55 },
  { day: 'Thu', impressions: 9000, clicks: 120 },
  { day: 'Fri', impressions: 7800, clicks: 95 },
  { day: 'Sat', impressions: 11200, clicks: 148 },
  { day: 'Sun', impressions: 8200, clicks: 104 },
]

export const aiCopyOptions = [
  { label: 'Option A — Festive', text: '🌙 Eid Mubarak! 30% off your entire order at Ahmed\'s Restaurant this Eid. Limited time offer — order now!' },
  { label: 'Option B — Urdu', text: 'عید کی خوشیاں دوبالا کریں! احمد ریسٹورنٹ میں عید پر 30% چھوٹ — آج ہی آرڈر کریں' },
  { label: 'Option C — Urgent', text: "Don't miss it — Ahmed's Eid special ends Sunday. 30% off all meals. Karachi's favourite." },
]

export const templates = [
  { id: 1, name: 'Eid Sale', icon: '🌙', desc: 'Festive discount campaign' },
  { id: 2, name: 'Grand Opening', icon: '🎉', desc: 'New business launch' },
  { id: 3, name: 'Appointments', icon: '📅', desc: 'Booking & walk-ins' },
  { id: 4, name: 'New Product', icon: '🛍️', desc: 'Product launch' },
  { id: 5, name: 'Ramadan Offer', icon: '🌙', desc: 'Ramadan special deals' },
  { id: 6, name: 'Flash Sale', icon: '⚡', desc: 'Limited time offer' },
]