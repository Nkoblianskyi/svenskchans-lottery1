export function PrizesInfo() {
  const prizeCategories = [
    {
      title: "Huvudvinst",
      description: "Den största vinsten delas mellan alla deltagare i det vinnande postnumret",
      color: "bg-blue-500",
    },
    {
      title: "Månadsvinster",
      description: "Varje månad dras extra vinster för att ge fler chanser att vinna",
      color: "bg-yellow-500",
    },
    {
      title: "Specialdragningar",
      description: "Under helger och speciella tillfällen arrangeras extra dragningar",
      color: "bg-green-500",
    },
    {
      title: "Välgörenhetsbonus",
      description: "Extra vinster som går direkt till välgörande ändamål i ditt område",
      color: "bg-red-500",
    },
  ]

  const features = [
    "Alla vinster är skattefria enligt svensk lag",
    "Automatisk utbetalning till ditt bankkonto",
    "Transparent redovisning av alla vinster",
    "Oberoende revision av alla dragningar",
    "Säker hantering av alla transaktioner",
    "Direktkontakt vid vinst inom 24 timmar",
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Vinster och Utdelning</h2>
          <p className="section-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            PostKodLotteriet erbjuder olika typer av vinster och en transparent process för utdelning till alla vinnare.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {prizeCategories.map((category, index) => (
            <div key={index} className="info-card p-6 md:p-8 text-center">
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">Säker och Transparent Utdelning</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-center text-blue-800 mb-6 md:mb-8">Vinstprocess</h4>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Dragning genomförs</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Live-sändning varje lördag kl. 20:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Vinnare kontaktas</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Inom 24 timmar via telefon och e-post</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Utbetalning sker</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Automatiskt till registrerat bankkonto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
