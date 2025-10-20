import { Outlet } from 'react-router-dom'
import { NavbarDemo } from '../components/Navbar'
import { Footer } from '@/components/Footer'

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo />

      {/* Main content area */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
