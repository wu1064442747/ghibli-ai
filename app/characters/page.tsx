'use client';

import React, { useState } from 'react';
import { createCharacter } from '@/lib/api';
import type { Character } from '@/types';

export default function CharactersPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [personality, setPersonality] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [character, setCharacter] = useState<Character | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await createCharacter({
        name,
        description,
        age,
        role,
        personality
      });

      if (result.success && result.data) {
        setCharacter(result.data);
      } else {
        setError(result.message || '创建失败，请重试');
      }
    } catch (err) {
      setError('创建过程中发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">创建吉卜力风格角色</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              角色名称
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              角色描述
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              年龄
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              角色身份
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="personality" className="block text-sm font-medium text-gray-700">
              性格特征
            </label>
            <textarea
              id="personality"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
            >
              {loading ? '创建中...' : '创建角色'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {character && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
            {character.imageUrl && (
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-full h-auto mb-4 rounded"
              />
            )}
            <div className="space-y-2">
              <p><strong>描述：</strong>{character.description}</p>
              <p><strong>年龄：</strong>{character.age}</p>
              <p><strong>身份：</strong>{character.role}</p>
              <p><strong>性格：</strong>{character.personality}</p>
              {character.generatedDescription && (
                <p><strong>AI生成描述：</strong>{character.generatedDescription}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 