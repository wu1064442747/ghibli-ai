'use client';

import React, { useState } from 'react';
import { useCharacterStore } from '@/lib/store';

export default function CharacterPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { isCreating, characters, createCharacter } = useCharacterStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCharacter({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Ghibli-Style Character</h1>
          <p className="text-gray-600">Design unique characters and bring them to life with their own stories.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Character Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the character's traits, personality, and backstory..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isCreating || !name || !description}
              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {isCreating ? 'Creating...' : 'Create Character'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Created Characters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {characters.map((character, index) => (
              <div key={character.id || index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{character.name}</h3>
                <p className="text-gray-600 line-clamp-3">{character.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 