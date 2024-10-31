import HomeModel from './model';

const HomeView = ({
  hello,
}: ReturnType<typeof HomeModel>) => {
  return (
    <main className="min-h-dvh w-full relative p-4 bg-white overflow-hidden">
      {hello}
    </main>
  );
};

export default HomeView;
