import { Link } from 'solid-app-router';

export default () => {
  return (
    <nav>
      <ul class="flex flex-col items-center space-y-2 py-4">
        <li>
          <Link href="/products/1" class="text-blue-600 hover:underline">
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2" class="text-blue-600 hover:underline">
            Product 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};
