import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Payment from './pages/Payment'
import Terms from './pages/Terms'
import Dashboard from './pages/Dashboard'
import Campaigns from './pages/Campaigns'
import CreateCampaign from './pages/CreateCampaign'
import Account from './pages/Account'
import BillingPlans from './pages/BillingPlans'
import AITargeting from './pages/AITargeting'
import Settings from './pages/Settings'
import GrowthRevenue from './pages/GrowthRevenue'
import Onboarding from './pages/Onboarding'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* 🌐 Public Routes (No Layout) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* 🧠 Dashboard Routes (With Layout) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/create" element={<CreateCampaign />} />

            {/* 🔥 New Pages */}
            <Route path="/account" element={<Account />} />
            <Route path="/billing" element={<BillingPlans />} />
            <Route path="/ai-targeting" element={<AITargeting />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/growth" element={<GrowthRevenue />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
