import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Facebook, Apple, Eye, EyeOff } from 'lucide-react';

interface SignUpPageProps {
  onSignUp?: (email: string, password: string) => void;
  onFacebookSignUp?: () => void;
  onAppleSignUp?: () => void;
}

export default function SignUpPage({ onSignUp, onFacebookSignUp, onAppleSignUp }: SignUpPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSignUp?.(email, password);
    }
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook sign up clicked');
    onFacebookSignUp?.();
  };

  const handleAppleSignUp = () => {
    console.log('Apple sign up clicked');
    onAppleSignUp?.();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F4AC8E' }}>
      {/* Decorative leaves */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-8 text-orange-600 opacity-30">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
            <path d="M20 40c10-15 25-20 40-15 15 5 25 20 20 35-5 15-20 25-35 20-15-5-25-20-25-40z" fill="currentColor"/>
            <path d="M15 80c8-12 20-16 32-12 12 4 20 16 16 28-4 12-16 20-28 16-12-4-20-16-20-32z" fill="currentColor"/>
            <path d="M25 120c6-9 15-12 24-9 9 3 15 12 12 21-3 9-12 15-21 12-9-3-15-12-15-24z" fill="currentColor"/>
            <path d="M10 160c4-6 10-8 16-6 6 2 10 8 8 14-2 6-8 10-14 8-6-2-10-8-10-16z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 text-orange-600 opacity-30 transform rotate-45">
          <svg width="100" height="150" viewBox="0 0 100 150" fill="none">
            <path d="M15 30c8-12 20-16 32-12 12 4 20 16 16 28-4 12-16 20-28 16-12-4-20-16-20-32z" fill="currentColor"/>
            <path d="M20 70c6-9 15-12 24-9 9 3 15 12 12 21-3 9-12 15-21 12-9-3-15-12-15-24z" fill="currentColor"/>
            <path d="M10 110c4-6 10-8 16-6 6 2 10 8 8 14-2 6-8 10-14 8-6-2-10-8-10-16z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md p-8 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/logo.png" 
            alt="KORA" 
            className="w-40 h-40 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white mb-2">Your Community,</h1>
          <h2 className="text-2xl font-bold text-white">your place</h2>
        </div>

        {/* Social Sign Up Buttons */}
        <div className="space-y-4 mb-6">
          <Button
            onClick={handleFacebookSignUp}
            variant="outline"
            className="w-full h-12 bg-white/90 border-2 border-white text-gray-800 hover:bg-white rounded-full flex items-center justify-center gap-3 font-medium"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
            Sign up with Facebook
          </Button>

          <Button
            onClick={handleAppleSignUp}
            variant="outline"
            className="w-full h-12 bg-white/90 border-2 border-white text-gray-800 hover:bg-white rounded-full flex items-center justify-center gap-3 font-medium"
          >
            <Apple className="w-5 h-5 text-black" />
            Sign up with Apple
          </Button>
        </div>

        {/* Divider */}
        <div className="text-center mb-6">
          <p className="text-white font-medium">Or start</p>
          <p className="text-white font-medium">with your email</p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <div>
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-white/90 border-2 border-white rounded-full px-4 text-gray-800 placeholder:text-gray-500 focus:border-white focus:ring-white focus:bg-white"
              required
            />
          </div>

          <div className="relative">
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-white/90 border-2 border-white rounded-full px-4 pr-12 text-gray-800 placeholder:text-gray-500 focus:border-white focus:ring-white focus:bg-white"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-amber-900 hover:bg-amber-800 text-white rounded-full font-medium text-lg mt-6"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}