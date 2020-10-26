import { Route } from 'solid-app-router';

export default () => {
  return (
    <>
      <div class="rounded-xl h-52 overflow-hidden shadow relative">
        <img
          src="https://images.unsplash.com/photo-1603731896431-2b3439e9f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="banner"
          class="block w-full h-full object-cover"
        />
        <h1 class="text-white text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Products Banner
        </h1>
      </div>

      <Route />
    </>
  );
};
