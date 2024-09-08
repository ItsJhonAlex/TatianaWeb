import Documentation from './Documentation';

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Documentation />
      </main>
    </div>
  );
}