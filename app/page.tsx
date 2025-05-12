import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import Image from 'next/image';
import ekaweLogo from './assests/ekawe.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background-light via-white to-background-light">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-12">
          {/* Logo */}
          <div className="animate-fade-in space-y-1">
            <div className="relative w-48 h-24 mx-auto rounded-lg">
              <Image
                src={ekaweLogo}
                alt="Ekawe Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            <span className="text-gray-600 text-sm block text-center">
              Grow with Guidance. Thrive with Purpose.
            </span>
          </div>

          {/* Hero Content */}
          <div className="space-y-4 animate-slide-up">
            <div className="space-y-1">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Join the
              </h1>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Waitlist</span>
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Join our waitlist and be part of the next big thing.
            </p>
          </div>
          
          {/* Waitlist Form */}
          <div className="animate-fade-in p-8 border border-gray-100 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-sm">
            <WaitlistForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 