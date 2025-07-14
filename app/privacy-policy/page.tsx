export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Integritetspolicy</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Inledning</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Svenska PostKodLotteriet värnar om din integritet och är engagerade i att skydda dina personuppgifter.
                Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar din information när du använder
                vår tjänst.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Vilka uppgifter samlar vi in?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Vi samlar in följande typer av personuppgifter:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Namn, adress och postnummer</li>
                <li>E-postadress och telefonnummer</li>
                <li>Födelsedatum för åldersverifiering</li>
                <li>Betalningsinformation</li>
                <li>Spelhistorik och preferenser</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hur använder vi dina uppgifter?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Dina personuppgifter används för att:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Administrera ditt deltagande i lotteriet</li>
                <li>Kontakta dig vid vinst</li>
                <li>Skicka information om dragningar och resultat</li>
                <li>Säkerställa regelefterlevnad</li>
                <li>Förbättra vår tjänst</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Dina rättigheter</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enligt GDPR har du rätt att begära tillgång till, rättelse av, radering av eller begränsning av
                behandlingen av dina personuppgifter. Du har också rätt till dataportabilitet och att invända mot
                behandlingen.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
