export default function Home() {
  // console.log("firsty page rendered.");

  const renderName = (name: string) => {
    return <span>{name}</span>;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>My First Page!</div>
      {renderName('aria')}
    </div>
  );
}
