import Container from "@/components/common/container";
import { Link } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// we don't use json files because it's tricky to manage large html there
const Translations = ({ locale }: { locale: Locale }) => {
  if (locale === "en") {
    return (
      <>
        <h1>Terms of Service - Voltrac Tractor Preorder</h1>
        <ul>
          <li>
            The deposit is not a binding purchase; it is a pre-order which
            guarantees your place to receive an offer to purchase a Voltrac
            tractor, once available. In the event of a purchase, the deposit
            shall be discounted from the total purchase price.
          </li>
          <li>
            The deposit is fully refundable. Both within 14 days, as well as any
            time up to the final contract, by sending an email to
            purchases@voltrac.eu. Template available at{" "}
            <Link href="/withdrawal">voltrac.eu/withdrawal</Link>.
          </li>
          <li>
            The final conditions of the sale will be stipulated in the final
            offer, which the Purchaser is free to accept or reject.
          </li>
          <li>
            The tractor is still a prototype in R&D; changes to the
            specifications, certifications, and/or delivery timeline, are to be
            expected and shall not result in any claims against the Company.
          </li>
          <li>
            Apart from fraud or gross neglicence, our maximum liability under
            this preorder is limited to the downpayment paid.
          </li>
          <li>
            Spanish law applies; The exclusive place of jurisdiction for all
            disputes arising from or in connection with this Agreement shall be
            the courts of Valencia.
          </li>
        </ul>
      </>
    );
  }

  if (locale === "es") {
    return (
      <>
        <h1>Condiciones de Servicio – Prerreserva de Tractor Voltrac</h1>
        <ul>
          <li>
            El depósito no constituye una compra vinculante; es una prerreserva
            que garantiza su lugar para recibir una oferta de compra de un
            tractor Voltrac cuando esté disponible. En caso de compra, el
            depósito se descontará del precio total.
          </li>
          <li>
            El depósito es totalmente reembolsable, tanto dentro de los 14 días
            como en cualquier momento hasta la firma del contrato definitivo,
            enviando un correo a purchases@voltrac.eu. Modelo disponible en{" "}
            <Link href="/withdrawal">voltrac.es/withdrawal</Link>.
          </li>
          <li>
            Las condiciones finales de la venta se establecerán en la oferta
            definitiva, que el Comprador podrá aceptar o rechazar libremente.
          </li>
          <li>
            El tractor sigue siendo un prototipo en I+D; se prevén cambios en
            las especificaciones, certificaciones y/o plazos de entrega, los
            cuales no darán lugar a reclamaciones contra la Compañía.
          </li>
          <li>
            Salvo en casos de fraude o negligencia grave, nuestra
            responsabilidad máxima en esta prerreserva se limita al importe del
            depósito abonado.
          </li>
          <li>
            Se aplica la legislación española; el fuero exclusivo para todas las
            controversias derivadas de o relacionadas con este Acuerdo será el
            de los tribunales de Valencia.
          </li>
        </ul>
      </>
    );
  }

  if (locale === "de") {
    return (
      <>
        <h1>Nutzungsbedingungen – Voltrac-Traktor-Vorbestellung</h1>
        <ul>
          <li>
            Die Anzahlung stellt keinen verbindlichen Kauf dar; sie ist eine
            Vorbestellung, die Ihren Platz sichert, um ein Angebot zum Kauf
            eines Voltrac-Traktors zu erhalten, sobald dieser verfügbar ist. Im
            Falle eines Kaufs wird die Anzahlung auf den Gesamtpreis
            angerechnet.
          </li>
          <li>
            Die Anzahlung ist vollständig erstattungsfähig – sowohl innerhalb
            von 14 Tagen als auch jederzeit bis zum endgültigen Vertrag – per
            E-Mail an purchases@voltrac.eu. Muster unter{" "}
            <Link href="/withdrawal">voltrac.de/withdrawal</Link>.
          </li>
          <li>
            Die endgültigen Verkaufsbedingungen werden im abschließenden Angebot
            festgelegt, das der Käufer frei annehmen oder ablehnen kann.
          </li>
          <li>
            Der Traktor befindet sich noch als Prototyp in Forschung &
            Entwicklung; Änderungen an Spezifikationen, Zertifizierungen
            und/oder Lieferterminen sind zu erwarten und begründen keine
            Ansprüche gegen das Unternehmen.
          </li>
          <li>
            Außer bei Betrug oder grober Fahrlässigkeit ist unsere maximale
            Haftung aus dieser Vorbestellung auf die geleistete Anzahlung
            beschränkt.
          </li>
          <li>
            Es gilt spanisches Recht; ausschließlicher Gerichtsstand für alle
            Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag sind die
            Gerichte von Valencia.
          </li>
        </ul>
      </>
    );
  }

  if (locale === "nl") {
    return (
      <>
        <h1>Algemene Voorwaarden – Voltrac-tractor Pre-order</h1>
        <ul>
          <li>
            De aanbetaling is geen bindende aankoop; het is een pre-order die uw
            plaats garandeert om een aanbod te ontvangen voor de aankoop van een
            Voltrac-tractor zodra deze beschikbaar is. Bij aankoop wordt de
            aanbetaling in mindering gebracht op de totale aankoopprijs.
          </li>
          <li>
            De aanbetaling is volledig restitueerbaar – zowel binnen 14 dagen
            als op elk moment tot het definitieve contract – door een e-mail te
            sturen naar purchases@voltrac.eu. Voorbeeld beschikbaar op{" "}
            <Link href="/withdrawal">voltrac.nl/withdrawal</Link>.
          </li>
          <li>
            De uiteindelijke verkoopvoorwaarden worden vastgelegd in het
            definitieve aanbod, dat de Koper vrij staat te accepteren of te
            weigeren.
          </li>
          <li>
            De tractor is nog een prototype in R&D; wijzigingen in
            specificaties, certificeringen en/of levertijd worden verwacht en
            geven geen aanleiding tot claims tegen het Bedrijf.
          </li>
          <li>
            Behoudens fraude of grove nalatigheid is onze maximale
            aansprakelijkheid onder deze pre-order beperkt tot het betaalde
            voorschot.
          </li>
          <li>
            Spaans recht is van toepassing; voor alle geschillen die
            voortvloeien uit of verband houden met deze Overeenkomst zijn
            uitsluitend de rechtbanken van Valencia bevoegd.
          </li>
        </ul>
      </>
    );
  }

  return null;
};

const TermsOfService = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Container>
      <div className="px-[var(--cxp)] py-20 prose w-full max-w-full prose-invert">
        <Translations locale={locale} />
      </div>
    </Container>
  );
};

export default TermsOfService;
