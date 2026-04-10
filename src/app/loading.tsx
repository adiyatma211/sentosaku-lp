export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(161,185,134,0.4),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(94,140,82,0.25),transparent_50%),#f4f7f0]">
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#5e8c52] to-[#a1b986] rounded-3xl animate-pulse shadow-lg shadow-[rgba(94,140,82,0.3)]" />
        
        <div className="space-y-3 text-center">
          <div className="h-8 w-64 bg-white/80 rounded-xl animate-pulse shadow-sm" />
          <div className="h-5 w-48 bg-white/60 rounded-lg animate-pulse" />
        </div>
        
        <div className="w-10 h-10 border-4 border-[#a1b986] border-t-[#5e8c52] rounded-full animate-spin" />
        
        <div className="mt-4 flex gap-3">
          <div className="w-24 h-3 bg-white/50 rounded-lg animate-pulse" />
          <div className="w-20 h-3 bg-white/40 rounded-lg animate-pulse" />
          <div className="w-28 h-3 bg-white/50 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
