<<<<<<< HEAD
'use client';

import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎使用 Ghibli AI</h1>
        <p className="text-xl text-gray-300 mb-8">
          使用 AI 创建吉卜力风格的艺术作品
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/generate" className="card hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">生成图片</h2>
            <p className="text-gray-400">使用 AI 生成吉卜力风格的图片</p>
          </Link>
          <Link href="/characters" className="card hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">角色创建</h2>
            <p className="text-gray-400">创建独特的吉卜力风格角色</p>
          </Link>
          <Link href="/resources" className="card hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">资源中心</h2>
            <p className="text-gray-400">探索吉卜力工作室的作品和资源</p>
          </Link>
          <Link href="/prompts" className="card hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">提示词库</h2>
            <p className="text-gray-400">获取灵感，创建更好的提示词</p>
          </Link>
        </div>
      </div>
    </div>
  )
=======
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                用AI创造吉卜力的魔法
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                探索吉卜力风格的AI创作，让每个人都能创造属于自己的动画世界。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/generate"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  开始创作
                </a>
                <a href="/resources" className="text-sm font-semibold leading-6 text-gray-900">
                  了解更多 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">功能特点</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              一切你需要的创作工具
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们提供了一系列强大的工具，帮助你轻松创造吉卜力风格的艺术作品。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  图片生成
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">使用AI生成吉卜力风格的图片，让你的创意变为现实。</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  角色创建
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">创建独特的吉卜力风格角色，赋予他们生命和故事。</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  提示词库
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">海量优质提示词，帮助你更好地进行创作。</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
} 