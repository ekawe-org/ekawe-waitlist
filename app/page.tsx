import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-12">
          {/* Logo */}
          <div className="animate-fade-in space-y-1">
            <span className="text-4xl font-bold text-primary block">
              ekawe
            </span>
            <span className="text-gray-500 text-sm">
              some logo subtext 
            </span>
          </div>

          {/* Hero Content */}
          <div className="space-y-4 animate-slide-up">
            <div className="space-y-1">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Join the
              </h1>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">Waitlist</span>
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