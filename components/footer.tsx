import Link from "next/link"

export function Footer() {
  const organizations = [
    {
      name: "Stödlinjen",
      subtitle: "för spelare och anhöriga",
      logo: "/stodli.png",
      url: "https://www.stodlinjen.se",
    },
    {
      name: "Spelinspektionen",
      subtitle: "",
      logo: "/spel.png",
      url: "https://www.spelinspektionen.se",
    },
    {
      name: "GambleAware",
      subtitle: "",
      logo: "/gamble.webp",
      url: "https://www.gambleaware.org",
    },
    {
      name: "GamCare",
      subtitle: "Positive Change for the National Gambling Helpline",
      logo: "/gamecare.svg",
      url: "https://www.gamcare.org.uk",
    },
    {
      name: "SPER",
      subtitle: "SPELBRANSCHENS RIKSORGANISATION",
      logo: "/sper.png",
      url: "https://www.sper.se",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Brand Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">SvenskLycka</h2>
              <p className="text-sm text-gray-400">Lotterianalys & Information</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Din pålitliga källa för professionell lotterianalys och strategier för svenska lotterier
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-400 mb-6 relative">
              Tjänster
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Hem
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Logga in
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Registrera
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-400 mb-6 relative">
              Information
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-400 mb-6 relative">
              Ansvarsfullt Spelande
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-400 to-red-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:020-81-91-00"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Stödlinjen: 020-81 91 00
                </a>
              </li>
              <li>
                <a
                  href="https://www.stodlinjen.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Självtest
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Organizations Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Stödorganisationer</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {organizations.map((org, index) => (
              <a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={org.logo || "/placeholder.svg"}
                  alt={org.name}
                  className="mx-auto mb-3 max-h-14 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <h4 className="font-semibold text-sm text-white mt-1 group-hover:text-blue-300 transition-colors">
                  {org.name}
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">18+</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Spel för dig över 18 år</h4>
                <p className="text-gray-300">Spela ansvarsfullt och inom dina ekonomiska ramar</p>
              </div>
            </div>

            <div className="text-center md:text-right bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-yellow-400 font-bold text-lg mb-2">Behöver du hjälp?</p>
              <p className="text-white font-semibold text-xl mb-1">020-81 91 00</p>
              <p className="text-blue-400 text-sm">Stödlinjen - kostnadsfri hjälp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2025 Svenska PostKodLotteriet. Alla rättigheter förbehållna.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Säker webbplats</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-400 text-sm font-medium">SSL-krypterad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
