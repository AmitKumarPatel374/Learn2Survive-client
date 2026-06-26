
import {
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  LockKeyhole,
  ShieldAlert,
} from "lucide-react";

const UnAuthorized = () => {
  return (
    <main className="min-h-screen bg-[#0b1326] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl shadow-2xl">
          <div className="relative h-[260px] md:h-[420px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0zI3LlF3Vp2_aZV9YBvSpAxmp4pNDOjWLal2xJb2nSovyLxJiLhJLyS5rw525EJKep-A2bkVs1p8B91luT3bgzh3nZZShy4FEnyf59doX777Rdrpy4w6CztPhUa5sAIqii2sA6e0jsCfHNA9TToZ0evoTrn62T-f2YVcCAk75QZaUamuxW42Mp1ry_6GI3a8unUrMq1H15WYe7AoT6Iz097P9MnIQpaltyRe8y5OCQag5OARaxTXWMfqbidJxARThfdIfklXvBM0"
              alt="403"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent" />
          </div>

          <div className="px-6 py-10 text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
              <ShieldAlert className="text-red-400" size={40}/>
            </div>

            <h1 className="text-6xl font-extrabold text-[#b8c4ff]">403</h1>
            <h2 className="mt-3 text-4xl font-bold tracking-[0.25em] text-[#4edea3]">
              ACCESS DENIED
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
              Sorry, you don't have permission to access this page.
              Please sign in with the appropriate account or return to a page
              you have access to.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-[#b8c4ff] px-7 py-3 font-semibold text-[#001453] shadow-lg transition hover:scale-105">
                Go to Home
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3 transition hover:bg-white/5">
                <ArrowLeft size={18}/>
                Go Back
              </button>
            </div>

            <button className="mt-6 inline-flex items-center gap-2 text-[#ffb95f] hover:underline">
              <LockKeyhole size={18}/>
              Sign In with Another Account
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#171f33]/70 p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#b8c4ff]/10 p-3">
                <HelpCircle className="text-[#b8c4ff]" />
              </div>
              <h3 className="text-2xl font-bold">Why am I seeing this?</h3>
            </div>

            <div className="space-y-5">
              {[
                "You are not logged in.",
                "Your account does not have permission to access this page.",
                "This feature is available only for administrators or authorized users."
              ].map((item)=>(
                <div key={item} className="flex gap-3">
                  <CheckCircle className="mt-1 text-[#4edea3]" size={20}/>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#171f33]/70 p-8 backdrop-blur-xl">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#ffb95f]/10 p-3">
                  <ShieldAlert className="text-[#ffb95f]" />
                </div>
                <h3 className="text-2xl font-bold">Need Access?</h3>
              </div>

              <p className="leading-8 text-slate-300">
                If you believe you should have access to this page, please
                contact your administrator or system administrator.
                Access requests are usually processed within 24 hours.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-[#222a3d] p-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Support Tier
                </p>
                <h4 className="mt-1 text-lg font-bold">
                  Guardian Enterprise
                </h4>
              </div>

              <button className="rounded-xl bg-[#b8c4ff] px-4 py-2 font-semibold text-[#001453]">
                Contact
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UnAuthorized;
