'use client';

import React, { useState } from 'react';
import { useCharacterStore } from '@/lib/store';
import { createCharacter } from '@/lib/api';

export default function CharactersPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('少年');
  const [role, setRole] = useState('');
  const [personality, setPersonality] = useState<string[]>([]);
  const { createdCharacters, addCreatedCharacter } = useCharacterStore();

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
      addCreatedCharacter({
        ...result.data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      });
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
    <div className="min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">创建吉卜力风格角色</h1>
          <p className="text-slate-300">设计你的专属角色，赋予其独特的个性和故事。</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="角色名称"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="角色描述"
                className="w-full h-32 px-4 py-3 rounded-lg bg-slate-700/50 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-700/50 text-white border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
                className="px-4 py-3 rounded-lg bg-slate-700/50 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">性格特征</label>
              <div className="flex flex-wrap gap-2">
                {personalityOptions.map((trait) => (
                  <button
                    key={trait}
                    type="button"
                    onClick={() => togglePersonality(trait)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      personality.includes(trait)
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {trait}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              创建角色
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">已创建的角色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {createdCharacters.map((character) => (
              <div key={character.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                  <p className="text-slate-300 mb-3">{character.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                      {character.age}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                      {character.role}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {character.personality.map((trait, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 