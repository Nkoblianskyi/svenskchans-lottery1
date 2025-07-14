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
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Så fungerar?</h2>
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

      </div>
    </section>
  )
}
