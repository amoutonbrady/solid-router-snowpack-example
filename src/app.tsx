import type { Component } from 'solid-js';
import { Link, Route } from 'solid-app-router';

export const App: Component = () => {
  return (
    <>
      <header class="flex justify-center py-4">
        <Link href="/" class="text-blue-600 hover:underline">
          Home
        </Link>
        <span class="mx-2">|</span>
        <Link href="/products" class="text-blue-600 hover:underline">
          Products
        </Link>
        <span class="mx-2">|</span>
        <Link href="/about" class="text-blue-600 hover:underline">
          About
        </Link>
      </header>

      <main class="container mx-auto p-8">
        <Route />
      </main>
    </>
  );
};
