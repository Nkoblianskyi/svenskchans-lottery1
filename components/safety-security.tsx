import Link from "next/link"

export function SafetySecurity() {
  const securityFeatures = [
    {
      title: "Licensierad Verksamhet",
      description: "Fullständigt licensierad av Spelinspektionen enligt svensk spellagstiftning",
      icon: "L",
    },
    {
      title: "Säkra Transaktioner",
      description: "All betalning sker via säkra, krypterade kanaler med bankstandard säkerhet",
      icon: "S",
    },
    {
      title: "Oberoende Revision",
      description: "Alla dragningar övervakas av oberoende revisorer och auktoriserade kontrollanter",
      icon: "R",
    },
    {
      title: "Transparent Redovisning",
      description: "Öppen redovisning av alla vinster, kostnader och välgörenhetsdonationer",
      icon: "T",
    },
  ]

  const responsibleGaming = [
    {
      title: "Åldersgräns 18 år",
      description: "Strikt kontroll av ålder vid registrering",
    },
    {
      title: "Spelgränser",
      description: "Möjlighet att sätta egna gränser för spelande",
    },
    {
      title: "Självuteslutning",
      description: "Enkelt att tillfälligt eller permanent stänga av sitt konto",
    },
    {
      title: "Stöd och Hjälp",
      description: "Direktkontakt till Stödlinjen och andra hjälporganisationer",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Säkerhet och Ansvarsfullt Spelande
          </h2>
          <p className="section-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Vi prioriterar säkerhet, transparens och ansvarsfullt spelande i alla aspekter av vår verksamhet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 md:mb-8">Säkerhet och Tillförlitlighet</h3>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="info-card p-4 sm:p-6 flex items-start gap-4">

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 md:mb-8">Ansvarsfullt Spelande</h3>
            <div className="space-y-6">
              {responsibleGaming.map((item, index) => (
                <div key={index} className="info-card p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 md:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg sm:text-2xl font-bold">18+</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-red-800 mb-4">Viktigt att Komma Ihåg</h3>
            <p className="text-red-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Spel ska vara roligt och aldrig påverka din ekonomi negativt. Om du känner att ditt spelande blir
              problematiskt, tveka inte att söka hjälp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Få Hjälp</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Ring Stödlinjen för kostnadsfri och anonym rådgivning
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">020-81 91 00</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Självtest</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Testa dina spelvanor med ett enkelt självtest online
              </p>
              <Link href="https://stodlinjen.se/">
                <p className="text-blue-600 font-semibold text-sm sm:text-base">www.stodlinjen.se</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
