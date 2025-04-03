<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { createCharacter } from '../lib/api';

interface CharacterForm {
  name: string;
  description: string;
  age: string;
  role: string;
  personality: string;
}

const initialForm: CharacterForm = {
  name: '',
  description: '',
  age: '',
  role: '',
  personality: '',
};

export default function CharactersPage() {
  const [form, setForm] = useState<CharacterForm>(initialForm);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.description) {
      setError('请填写角色名称和描述');
      return;
    }

    try {
      setIsCreating(true);
      setError('');
      setSuccess(false);
      
      const result = await createCharacter(form);
      if (result.success && result.data) {
        setSuccess(true);
        setGeneratedImage(result.data.imageUrl || '');
        setForm(initialForm);
      } else {
        setError(result.message || '创建失败，请重试');
      }
    } catch (err) {
      setError('创建过程中发生错误，请重试');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">创建吉卜力风格角色</h1>

      <div className="max-w-2xl mx-auto">
        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
            角色创建成功！
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              角色名称
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={form.name}
              onChange={handleChange}
              placeholder="例如：小梅"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              角色描述
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="input-field"
              value={form.description}
              onChange={handleChange}
              placeholder="描述角色的外貌、服装等特征..."
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              年龄
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className="input-field"
              value={form.age}
              onChange={handleChange}
              placeholder="例如：10岁"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              角色身份
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="input-field"
              value={form.role}
              onChange={handleChange}
              placeholder="例如：学生、魔法师等"
            />
          </div>

          <div>
            <label htmlFor="personality" className="block text-sm font-medium mb-2">
              性格特点
            </label>
            <input
              type="text"
              id="personality"
              name="personality"
              className="input-field"
              value={form.personality}
              onChange={handleChange}
              placeholder="例如：开朗、勇敢、富有同情心"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isCreating}
          >
            {isCreating ? '创建中...' : '创建角色'}
          </button>
        </form>

        {generatedImage && (
          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src={generatedImage}
              alt="生成的角色图片"
              className="w-full h-auto"
            />
          </div>
        )}
=======
import React from 'react';

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">吉卜力风格角色创建</h1>
          <p className="mt-2 text-lg text-gray-600">
            描述你想要创建的角色特征，AI将为你生成独特的吉卜力风格角色。
          </p>

          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  角色名称
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="给你的角色起个名字"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  角色描述
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="描述角色的外貌、性格、背景故事等..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    年龄
                  </label>
                  <select
                    id="age"
                    name="age"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>儿童</option>
                    <option>少年</option>
                    <option>青年</option>
                    <option>成年</option>
                    <option>老年</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    角色类型
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>主角</option>
                    <option>配角</option>
                    <option>反派</option>
                    <option>神秘人物</option>
                    <option>其他</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="personality" className="block text-sm font-medium text-gray-700">
                  性格特点
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['开朗', '内向', '勇敢', '温柔', '固执', '聪明', '天真', '神秘'].map((trait) => (
                    <button
                      key={trait}
                      type="button"
                      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  创建角色
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">角色预览</h2>
            <div className="mt-4 rounded-lg bg-white p-6 shadow">
              {/* 这里将显示生成的角色图片和信息 */}
            </div>
          </div>
        </div>
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
      </div>
    </div>
  );
} 