export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vad är cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De hjälper webbplatsen att
                komma ihåg information om ditt besök, vilket kan göra det enklare att besöka webbplatsen igen och göra
                den mer användbar för dig.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hur använder vi cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Vi använder cookies för att:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Komma ihåg dina inställningar och preferenser</li>
                <li>Förstå hur du använder vår webbplats</li>
                <li>Förbättra webbplatsens prestanda</li>
                <li>Tillhandahålla säkra tjänster</li>
                <li>Visa relevant innehåll</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Typer av cookies</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nödvändiga cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av. De ställs
                  vanligtvis bara in som svar på åtgärder som du gör.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prestanda cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dessa cookies låter oss räkna besök och trafikkällor så att vi kan mäta och förbättra prestandan på
                  vår webbplats.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Funktionella cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dessa cookies gör det möjligt för webbplatsen att tillhandahålla förbättrad funktionalitet och
                  personalisering.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hantera cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Du kan kontrollera och/eller ta bort cookies som du vill. Du kan ta bort alla cookies som redan finns på
                din dator och du kan ställa in de flesta webbläsare för att förhindra att de placeras.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Om du väljer att inaktivera cookies kan vissa funktioner på vår webbplats inte fungera korrekt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-600 leading-relaxed">
                Om du har frågor om vår användning av cookies, kontakta oss på cookies@postkodlotteriet.se
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
