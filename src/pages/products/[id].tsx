import { Link, useRouter } from 'solid-app-router';

export default () => {
  const { router, level } = useRouter();
  const id = () => router.current[level - 1].params.id as string;

  return (
    <div class="flex items-center flex-col space-y-4 mt-4">
      <Link href="/products" class="text-blue-600 hover:underline">
        Get back to products page
      </Link>
      <p>You are now seeing the product n°{id()}</p>
    </div>
  );
};
