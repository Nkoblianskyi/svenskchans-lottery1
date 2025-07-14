export function LotteryInfo() {
  const sections = [
    {
      title: "Hur fungerar PostKodLotteriet?",
      content:
        "PostKodLotteriet är unikt eftersom det baseras på ditt postnummer. Varje vecka dras vinnande postnummer slumpmässigt. Alla deltagare med det vinnande postnumret delar på priserna. Ju fler grannar som deltar, desto större blir den totala vinsten för området.",
      icon: "📍",
    },
    {
      title: "Deltagande och Regler",
      content:
        "För att delta måste du vara minst 18 år och bosatt i Sverige. Du registrerar ditt postnummer och väljer hur många lotter du vill köpa. Dragningar sker varje lördag kl. 20:00. Alla transaktioner är säkra och reglerade enligt svensk spellagstiftning.",
      icon: "📋",
    },
    {
      title: "Välgörenhet och Samhälle",
      content:
        "En stor del av intäkterna från PostKodLotteriet går till välgörande ändamål och samhällsprojekt. Vi stödjer lokala initiativ, miljöprojekt och humanitära organisationer. Genom att delta bidrar du aktivt till positiv samhällsförändring i Sverige.",
      icon: "🤝",
    },
    {
      title: "Säkerhet och Transparens",
      content:
        "Alla dragningar övervakas av oberoende revisorer och sänds live. Vi använder certifierade slumptalsgeneratorer och följer strikta säkerhetsprotokoll. Alla vinnare kontaktas direkt och prisutdelningen sker enligt fastställda rutiner.",
      icon: "🔒",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Allt du behöver veta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PostKodLotteriet kombinerar spänning med samhällsnytta. Här är viktig information om hur det fungerar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="section-card rounded-xl p-8">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
