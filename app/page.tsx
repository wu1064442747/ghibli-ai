'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Ghibli-Style AI Creation Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create your own magical Ghibli world with AI technology
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Image Generation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Image Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate beautiful Ghibli-style images from text descriptions
              </p>
              <Link 
                href="/generate" 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Start Creating →
              </Link>
            </div>
          </div>

          {/* Character Creation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Character Creation</h3>
              <p className="text-gray-600 mb-4">
                Design and generate unique Ghibli-style characters
              </p>
              <Link 
                href="/characters" 
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Create Character →
              </Link>
            </div>
          </div>

          {/* Resource Center */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resource Center</h3>
              <p className="text-gray-600 mb-4">
                Explore Ghibli art features and creation techniques
              </p>
              <Link 
                href="/resources" 
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                Browse Resources →
              </Link>
            </div>
          </div>

          {/* Prompt Library */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Prompt Library</h3>
              <p className="text-gray-600 mb-4">
                Collect quality prompts to enhance creation results
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                View Prompts →
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High-Quality Generation</h3>
              <p className="text-gray-600">Professional Ghibli-style model for beautiful image generation</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface design for effortless creation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Resources</h3>
              <p className="text-gray-600">Abundant quality prompts and creative reference materials</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 