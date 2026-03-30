export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
      <p className="text-lg text-slate-600 max-w-2xl text-center">
        This page is currently under construction as part of the initial site build.
      </p>
    </div>
  );
}
