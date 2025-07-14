export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Registrera ditt postnummer",
      description:
        "Ange ditt postnummer och skapa ett konto. Ditt postnummer är din biljett till att vinna tillsammans med dina grannar.",
    },
    {
      number: "2",
      title: "Välj antal lotter",
      description:
        "Bestäm hur många lotter du vill köpa. Ju fler lotter, desto större andel av vinsten får du om ditt område vinner.",
    },
    {
      number: "3",
      title: "Vänta på dragningen",
      description:
        "Varje lördag kl. 20:00 dras vinnande postnummer. Dragningen sänds live och övervakas av oberoende revisorer.",
    },
    {
      number: "4",
      title: "Dela vinsten med grannar",
      description:
        "Om ditt postnummer vinner delar alla deltagare i området på priserna. Ju fler grannar som deltar, desto större blir den totala vinsten.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Så fungerar PostKodLotteriet</h2>
          <p className="section-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Ett unikt lotteri där hela grannskapet kan vinna tillsammans. Här är hur det fungerar steg för steg.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="info-card p-6 md:p-8 text-center">
              <div className="step-number mx-auto">{step.number}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-blue-50 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Varför är PostKodLotteriet unikt?</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Till skillnad från traditionella lotterier där du spelar ensam, bygger PostKodLotteriet gemenskap. När
                ditt område vinner, vinner alla tillsammans. Detta skapar en känsla av samhörighet och glädje som delas
                med hela grannskapet.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">✓</span>
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">
                  Vinn tillsammans med dina grannar
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl sm:text-5xl md:text-6xl mb-2">85%</div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                av vinnarna säger att det bästa är att dela glädjen med grannar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
