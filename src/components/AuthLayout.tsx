import { Shield } from 'lucide-react';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-card/95 backdrop-blur-sm border-0 rounded-lg shadow-card overflow-hidden grid md:grid-cols-2">
          {/* Image Section (visible on medium screens and up) */}
          <div className="hidden md:flex items-center justify-center p-8 bg-gradient-primary">
            <div className="text-center text-white">
              <Shield className="w-24 h-24 mx-auto mb-4" />
              <h1 className="text-3xl font-bold">CraftMyPass</h1>
              <p className="mt-2 text-lg opacity-90">Your Shield Against Digital Threats</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}