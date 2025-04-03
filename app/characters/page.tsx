'use client';

import React, { useState } from 'react';
import { useCharacterStore } from '@/lib/store';
import { createCharacter } from '@/lib/api';

export default function CharacterPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('少年');
  const [role, setRole] = useState('');
  const [personality, setPersonality] = useState<string[]>([]);
  const { isCreating, characters, createCharacter } = useCharacterStore();

  const personalityOptions = ['勇敢', '善良', '智慧', '坚强', '活泼', '神秘', '温柔', '正义'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createCharacter({
      name,
      description,
      age,
      role,
      personality,
    });

    if (result.success && result.data) {
      setName('');
      setDescription('');
      setAge('少年');
      setRole('');
      setPersonality([]);
    }
  };

  const togglePersonality = (trait: string) => {
    setPersonality(prev =>
      prev.includes(trait)
        ? prev.filter(p => p !== trait)
        : [...prev, trait]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">创建吉卜力风格角色</h1>
          <p className="text-gray-600">设计独特的角色，赋予他们生命和故事。</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="角色名称"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="描述角色的特点、性格和背景故事..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="少年">少年</option>
                <option value="青年">青年</option>
                <option value="中年">中年</option>
                <option value="老年">老年</option>
              </select>

              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="角色身份"
                className="px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">性格特征</label>
              <div className="flex flex-wrap gap-2">
                {personalityOptions.map((trait) => (
                  <button
                    key={trait}
                    type="button"
                    onClick={() => togglePersonality(trait)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      personality.includes(trait)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    {trait}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isCreating || !name || !description}
              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {isCreating ? '创建中...' : '创建角色'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">已创建的角色</h2>
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