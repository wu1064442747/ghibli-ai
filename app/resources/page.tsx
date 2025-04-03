'use client';

import React from 'react';
import Image from 'next/image';

export default function ResourcesPage() {
  const classicWorks = [
    {
      id: 1,
      title: 'Spirited Away',
      description: 'A story of a young girl finding herself in a mysterious world.',
      imageUrl: '/images/spirited-away.jpg',
      year: '2001',
    },
    {
      id: 2,
      title: 'My Neighbor Totoro',
      description: 'A magical adventure of two sisters with forest spirits.',
      imageUrl: '/images/totoro.jpg',
      year: '1988',
    },
    {
      id: 3,
      title: "Howl's Moving Castle",
      description: 'A romantic tale of love, magic, and war.',
      imageUrl: '/images/howls-moving-castle.jpg',
      year: '2004',
    },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Ghibli-Style Drawing Basics',
      description: 'Learn basic drawing techniques from Miyazaki animations.',
      difficulty: 'Beginner',
      duration: '2 hours',
    },
    {
      id: 2,
      title: 'Advanced Character Design',
      description: 'Deep dive into Ghibli character design principles.',
      difficulty: 'Intermediate',
      duration: '3 hours',
    },
    {
      id: 3,
      title: 'Scene Building Masterclass',
      description: 'Master the art of creating Ghibli-style scenes.',
      difficulty: 'Advanced',
      duration: '4 hours',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Center</h1>
          <p className="text-gray-600">Explore Ghibli's classic works and learning resources.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classic Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classicWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-sm rounded">
                    {work.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tutorial Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    tutorial.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-800'
                      : tutorial.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 