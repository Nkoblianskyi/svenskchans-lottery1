export function CommunityImpact() {
  const impactAreas = [
    {
      title: "Lokala Projekt",
      description: "Stöd till skolor, idrottsföreningar och kulturella aktiviteter i ditt område",
      stats: "2,500+ projekt stödda",
    },
    {
      title: "Miljöinitiativ",
      description: "Finansiering av miljövänliga projekt och hållbara utvecklingsinitiativ",
      stats: "150+ miljöprojekt",
    },
    {
      title: "Äldrevård",
      description: "Förbättring av äldreomsorg och aktiviteter för seniorer i lokalsamhället",
      stats: "500+ äldrecentra hjälpta",
    },
    {
      title: "Ungdomsverksamhet",
      description: "Program och aktiviteter som ger unga människor meningsfulla fritidsaktiviteter",
      stats: "10,000+ ungdomar nådda",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Samhällsengagemang</h2>
          <p className="section-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            En stor del av intäkterna från PostKodLotteriet går tillbaka till samhället genom stöd till lokala projekt
            och välgörande ändamål.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {impactAreas.map((area, index) => (
            <div key={index} className="info-card p-6 md:p-8 text-center">
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{area.description}</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-blue-800 font-semibold text-xs sm:text-sm">{area.stats}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Din Delaktighet Gör Skillnad</h3>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 opacity-90">
                Varje gång du deltar i PostKodLotteriet bidrar du inte bara till din egen chans att vinna, utan också
                till positiv förändring i ditt lokalsamhälle.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">%</span>
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">40% av intäkterna går till välgörenhet</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">Lokala projekt prioriteras i ditt område</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/30 rounded-2xl p-6 md:p-8">
                <div className="stats-number mb-4 text-3xl sm:text-4xl md:text-5xl text-black">250M</div>
                <p className="text-base sm:text-lg md:text-xl opacity-90">
                  kronor donerade till välgörenhet sedan start
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="stats-number text-green-600 mb-2 text-3xl sm:text-4xl md:text-5xl">95%</div>
            <p className="text-gray-600 text-sm sm:text-base">av deltagarna är nöjda med samhällsengagemanget</p>
          </div>
          <div className="text-center">
            <div className="stats-number text-blue-600 mb-2 text-3xl sm:text-4xl md:text-5xl">3,200</div>
            <p className="text-gray-600 text-sm sm:text-base">lokala organisationer har fått stöd</p>
          </div>
          <div className="text-center">
            <div className="stats-number text-yellow-600 mb-2 text-3xl sm:text-4xl md:text-5xl">15</div>
            <p className="text-gray-600 text-sm sm:text-base">år av kontinuerligt samhällsengagemang</p>
          </div>
        </div>
      </div>
    </section>
  )
}
