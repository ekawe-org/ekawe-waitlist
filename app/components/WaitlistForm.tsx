'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { db, analytics } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Add to Firestore
      const docRef = await addDoc(collection(db, 'waitlist'), {
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Track analytics event
      if (analytics) {
        logEvent(analytics, 'waitlist_signup', {
          name: formData.name,
          email: formData.email
        });
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in text-center space-y-4">
        <CheckCircle className="w-16 h-16 text-primary mx-auto" />
        <h3 className="text-2xl font-semibold text-gray-900">
          Thank you for joining the waitlist!
        </h3>
        <p className="text-lg text-gray-600">
          Stay tuned for updates. We'll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-3 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-3 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-6 py-3 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your phone number"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 px-8 text-white bg-primary rounded-full font-semibold transition-colors hover:shadow-lg ${
          isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-600'
        }`}
      >
        {isLoading ? 'Submitting...' : 'Join the Waitlist'}
      </button>
    </form>
  );
} 