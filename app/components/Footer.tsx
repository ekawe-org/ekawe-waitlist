export default function Footer() {
  return (
    <footer className="py-6 px-6 lg:px-12 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ekawe. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="/terms"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
} 