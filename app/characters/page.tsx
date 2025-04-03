'use client';

import React from 'react';
import { useCharacterStore } from '@/lib/store';
import { createCharacter } from '@/lib/api';

export default function CharactersPage() {
  const {
    name,
    description,
    age,
    role,
    personality,
    isCreating,
    createdCharacters,
    setName,
    setDescription,
    setAge,
    setRole,
    addPersonality,
    removePersonality,
    setIsCreating,
    addCreatedCharacter,
  } = useCharacterStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
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
        setRole('主角');
        personality.forEach(trait => removePersonality(trait));
      }
    } catch (error) {
      console.error('角色创建错误:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">创建吉卜力风格角色</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">角色名称</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">角色描述</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">年龄段</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="少年">少年</option>
                <option value="青年">青年</option>
                <option value="中年">中年</option>
                <option value="老年">老年</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">角色定位</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="主角">主角</option>
                <option value="配角">配角</option>
                <option value="反派">反派</option>
                <option value="导师">导师</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">性格特征</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {['勇敢', '善良', '智慧', '坚强', '活泼', '神秘', '温柔', '正义'].map((trait) => (
                <button
                  key={trait}
                  type="button"
                  onClick={() =>
                    personality.includes(trait)
                      ? removePersonality(trait)
                      : addPersonality(trait)
                  }
                  className={`px-3 py-1 rounded-full text-sm ${
                    personality.includes(trait)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isCreating ? '创建中...' : '创建角色'}
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">已创建的角色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {createdCharacters.map((character) => (
              <div
                key={character.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {character.imageUrl && (
                  <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={character.imageUrl}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold">{character.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {character.age} · {character.role}
                </p>
                <p className="text-gray-700 mt-2">{character.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {character.personality.map((trait, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 