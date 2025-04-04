'use client';

import React, { useState } from 'react';

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Scene', 'Character', 'Atmosphere', 'Style'];

  const prompts = [
    {
      id: 1,
      title: 'Miyazaki-Style Country Town',
      description: 'A peaceful town with red roofs and winding paths, distant mountains, and fluffy white clouds in the sky.',
      category: 'Scene',
      tags: ['Countryside', 'Nature', 'Architecture'],
    },
    {
      id: 2,
      title: 'Mysterious Forest Spirit',
      description: 'A cute forest spirit with big eyes and a fluffy body, emitting a soft glow.',
      category: 'Character',
      tags: ['Spirit', 'Cute', 'Magic'],
    },
    {
      id: 3,
      title: 'Magical Cafe on a Rainy Day',
      description: 'A cozy cafe with rain outside, warm lighting inside, and floating magical items.',
      category: 'Scene',
      tags: ['Interior', 'Rain', 'Magic'],
    },
  ];

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prompt Library</h1>
          <p className="text-gray-600">Explore carefully crafted prompts to create unique Ghibli-style works.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                  <p className="text-gray-600 mb-4">{prompt.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
                  onClick={() => {
                    navigator.clipboard.writeText(prompt.description);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 