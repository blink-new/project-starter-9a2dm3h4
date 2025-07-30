import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import SignUpPage from './components/SignUpPage'
import EmailVerificationPage from './components/EmailVerificationPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentScreen, setCurrentScreen] = useState<'signup' | 'verification' | 'main'>('signup')
  const [userEmail, setUserEmail] = useState('')

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const handleSignUp = (email: string, password: string) => {
    console.log('Email sign up:', { email, password })
    setUserEmail(email)
    setCurrentScreen('verification')
  }

  const handleFacebookSignUp = () => {
    console.log('Facebook sign up clicked')
    // Add Facebook OAuth logic here
    alert('Facebook sign up clicked!')
  }

  const handleAppleSignUp = () => {
    console.log('Apple sign up clicked')
    // Add Apple OAuth logic here
    alert('Apple sign up clicked!')
  }

  const handleEmailVerified = () => {
    setCurrentScreen('main')
  }

  const handleBackToSignUp = () => {
    setCurrentScreen('signup')
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  if (currentScreen === 'verification') {
    return (
      <EmailVerificationPage 
        email={userEmail}
        onVerified={handleEmailVerified}
        onBack={handleBackToSignUp}
      />
    )
  }

  if (currentScreen === 'main') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F4AC8E' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to KORA!</h1>
          <p className="text-white/90 text-lg">Your account has been verified successfully.</p>
        </div>
      </div>
    )
  }

  return (
    <SignUpPage 
      onSignUp={handleSignUp}
      onFacebookSignUp={handleFacebookSignUp}
      onAppleSignUp={handleAppleSignUp}
    />
  )
}

export default App