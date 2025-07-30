import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, RotateCcw } from 'lucide-react';

interface EmailVerificationPageProps {
  email?: string;
  onVerified?: () => void;
  onBack?: () => void;
}

export default function EmailVerificationPage({ 
  email = "user@example.com", 
  onVerified,
  onBack 
}: EmailVerificationPageProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendEmail = () => {
    setCountdown(60);
    setCanResend(false);
    // Here you would typically call your resend email API
    console.log('Resending verification email...');
  };

  const handleVerifyEmail = () => {
    setIsVerified(true);
    // Here you would typically verify the email with your backend
    setTimeout(() => {
      onVerified?.();
    }, 2000);
  };

  if (isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F4AC8E' }}>
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="KORA Logo" 
              className="w-40 h-40 mx-auto object-contain"
            />
          </div>
          
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Email Verified!</h1>
            <p className="text-white/90 text-lg">
              Your email has been successfully verified.
            </p>
          </div>

          <div className="animate-pulse">
            <p className="text-white/80">Redirecting you to the app...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F4AC8E' }}>
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="KORA Logo" 
            className="w-40 h-40 mx-auto object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <div className="mb-6">
            <Mail className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Check your email</h1>
            <p className="text-white/90 text-lg mb-4">
              We've sent a verification link to
            </p>
            <p className="text-white font-semibold text-lg bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              {email}
            </p>
          </div>

          <p className="text-white/80 mb-8">
            Click the link in your email to verify your account. 
            If you don't see it, check your spam folder.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          {/* Demo Verify Button - Remove in production */}
          <button
            onClick={handleVerifyEmail}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ✓ Simulate Email Verified (Demo)
          </button>

          {/* Resend Email Button */}
          <button
            onClick={handleResendEmail}
            disabled={!canResend}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              canResend 
                ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm' 
                : 'bg-white/10 text-white/50 cursor-not-allowed backdrop-blur-sm'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            {canResend ? 'Resend email' : `Resend in ${countdown}s`}
          </button>
        </div>

        {/* Back to Sign Up */}
        <button
          onClick={onBack}
          className="text-white/80 hover:text-white underline transition-colors duration-200"
        >
          ← Back to sign up
        </button>
      </div>
    </div>
  );
}