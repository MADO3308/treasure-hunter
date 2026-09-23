import Link from 'next/link';
export default function LandingPage(){
  return(
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90"/>
      <div className="relative z-10 text-center space-y-8 max-w-xl p-10 bg-slate-950/80 border border-amber-500/30 rounded-2xl backdrop-blur-xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-300 tracking-widest drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">Treasure Hunter</h1>
        <p className="text-lg text-amber-200/80 italic font-serif">"The treasure was never buried."</p>
        <div className="flex flex-col gap-4 w-64 mx-auto pt-6">
          <Link href="/expedition" className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg text-center">New Expedition</Link>
          <Link href="/auth" className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-300 font-bold uppercase tracking-wider text-xs rounded-lg transition-all text-center"> Sign In/ Sync Progress</Link>
        </div>
      </div>
    </main>
  );
}