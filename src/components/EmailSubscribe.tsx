"use client";
import { useState } from 'react';

export const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    if (!email || isLoading || !isValidEmail(email)) return;
    
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mt-6">
      <input 
        type="email" 
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-white/20"
      />
      <button 
        onClick={handleSubmit}
        disabled={isLoading || isSubmitted || !isValidEmail(email)}
        className={`px-6 py-2 rounded-lg transition-colors ${
          error 
            ? 'bg-red-500 hover:bg-red-600'
            : isSubmitted 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-white text-black hover:bg-neutral-200 disabled:opacity-50 disabled:hover:bg-white'
        }`}
      >
        {error 
          ? 'Error!' 
          : isSubmitted 
            ? 'Sent!' 
            : isLoading 
              ? 'Sending...' 
              : <>Join <span className="hidden md:inline">waitlist</span></>
        }
      </button>
    </div>
  );
}; 