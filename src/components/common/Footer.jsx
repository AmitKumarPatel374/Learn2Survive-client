import {
  ShieldPlus,
  Mail,
  Phone,
  Share2,
  Terminal,
  Megaphone,
  Video,
  ChevronRight,
  Accessibility,
  ShieldCheck,
  Shield,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#060e20]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        {/* Top Grid */}

        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}

          <div className="space-y-5 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e40af]">
                <Shield
                  size={22}
                  fill="currentColor"
                  className="text-[#b8c4ff]"
                />
              </div>

              <h2 className="text-3xl font-bold text-[#dae2fd]">Learn2Survive</h2>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4edea3]">
              Learn Today. Stay Safe Tomorrow.
            </p>

            <p className="max-w-sm leading-7 text-[#c4c5d5]">
              Our mission is to empower global communities through AI-driven preparedness tools,
              ensuring decisive action and safety during every disaster scenario.
            </p>
          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Learning Center
              </a>

              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Quizzes
              </a>

              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Emergency Contacts
              </a>

              <a
                href="/about"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Support */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Support</h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Help & Support
              </a>

              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                Terms & Conditions
              </a>

              <div className="flex items-center gap-2 text-[#c4c5d5]">
                <span>System Status</span>

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#4edea3]" />
              </div>
            </div>
          </div>

          {/* Connect */}

          <div className="space-y-5 lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h3>

            {/* Contact */}

            <div className="space-y-4">
              <a
                href="mailto:support@disasterprep.com"
                className="flex items-center gap-3 text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                <Mail size={18} />
                learn2survive@gmail.com
              </a>

              <a
                href="tel:+15550123456"
                className="flex items-center gap-3 text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                <Phone size={18} />
                +91  9753005051
              </a>
            </div>

            {/* Social */}

            <div className="flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#171f33] text-[#dae2fd] transition hover:bg-[#1e40af] hover:text-[#b8c4ff]">
                <Share2 size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#171f33] text-[#dae2fd] transition hover:bg-[#1e40af] hover:text-[#b8c4ff]">
                <Terminal size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#171f33] text-[#dae2fd] transition hover:bg-[#1e40af] hover:text-[#b8c4ff]">
                <Megaphone size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#171f33] text-[#dae2fd] transition hover:bg-[#1e40af] hover:text-[#b8c4ff]">
                <Video size={18} />
              </button>
            </div>

            {/* App Card */}

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#222a3d]/50 p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8ihzKIE0TywXP4nrntSxLEeUTf_B8zHZzBDizMgNHU_ih-IH6mf4LsjK_iny59FsS_rtowHtf5ScfUx_AznITIVYaVBuX9ysp2WPCLm7Lnax_K0Ofe-AncC68hx9uH2pJUUCbsghJ41hyCePsIwV7ZcUDDXtpBlNgKkvDpCaDIriveV67HB1izsiHXaZGpz4Unmrvub8yBMkXRjKpjreLvMaswHkh8ZZj1TiGcaXx8Z0BjUp1Tg1U0dZPGvoufUGNCxL7ilODuE"
                alt="App"
                className="h-12 w-12 rounded-lg object-cover"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#ffb95f]">
                  New Release
                </p>

                <p className="font-semibold text-[#dae2fd]">Download V2.4</p>
              </div>

              <ChevronRight
                size={18}
                className="ml-auto text-[#8e909f]"
              />
            </div>
          </div>
        </div>
        {/* Bottom Bar */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-[#8e909f] md:text-left">
            © 2026 Disaster Preparedness App.
            <span className="hidden md:inline"> All Rights Reserved.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8e909f] transition hover:text-[#b8c4ff]"
            >
              <Accessibility size={16} />
              Accessibility
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8e909f] transition hover:text-[#b8c4ff]"
            >
              <ShieldCheck size={16} />
              Security Whitepapers
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b8c4ff]/30 to-transparent" />
    </footer>
  )
}

export default Footer
