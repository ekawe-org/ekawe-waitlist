import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import Image from 'next/image';
import ekaweLogo from './assests/ekawe.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background-light via-white to-background-light">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-4">
              <div className="relative w-24 h-24">
                <Image
                  src={ekaweLogo}
                  alt="Ekawe Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-gray-600 text-sm">
                Grow with Guidance. Thrive with Purpose.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          {/* Hero Content */}
          <div className="space-y-2 animate-slide-up">
            <div className="space-y-0.5">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Join the
              </h1>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Waitlist</span>
              </h1>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Join our waitlist and be part of the next big thing.
            </p>
          </div>
          
          {/* Waitlist Form */}
          <div className="animate-fade-in p-3 sm:p-4 border border-gray-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-sm">
            <WaitlistForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 