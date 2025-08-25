import Container from "@/components/common/container";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// we don't use json files because it's tricky to manage large html there
const Translations = ({ locale }: { locale: Locale }) => {
  if (locale === "en") {
    return (
      <>
        <h1>Privacy Statement (v1.0 — 15 Jun 2025)</h1>
        <p>
          Voltrac S.L., C/ Villa de Madrid 26B, 46988 Paterna (Valencia), NIF
          B16388720, is the data controller. You can reach us at
          privacy@voltrac.eu.
        </p>
        <h3>What we collect</h3>
        <ul>
          <li>
            Details you enter: name, e-mail, phone, billing and shipping
            address, VAT/NIF, payment-method token (the raw card data stays with
            our processor, Square).
          </li>
          <li>Order, support and demo records.</li>
        </ul>

        <h3>Why we use it</h3>
        <p>
          To create and manage your preorder or sale, send development or
          marketing updates (you can opt-out anytime), prevent fraud, meet tax
          and regulatory duties and improve our site.
        </p>

        <h3>Who sees it</h3>
        <ul>
          <li>Payment processing: Square Europe Ltd.</li>
          <li>Website inquiries: Google Cloud, hosted in EU data centres.</li>
          <li>Email: Google Workspace.</li>
          <li>
            Couriers, accountants or public authorities if the law requires it.
          </li>
        </ul>

        <h3>How long</h3>
        <p>
          Business records are kept for the legal minimum (normally 6 years
          after the last transaction) and then deleted or anonymised. Marketing
          e-mails stop as soon as you unsubscribe.
        </p>

        <h3>Security</h3>
        <p>
          Data is encrypted in transit (TLS) and at rest; access is limited to
          staff who need it for their job and protected by MFA.
        </p>

        <h3>Your rights</h3>
        <p>
          Under GDPR you may ask to access, correct, delete, restrict or port
          your personal data, or object to its use. E-mail privacy@voltrac.eu
          and we will respond within 30 days. You can lodge a complaint with the
          Spanish Data Protection Authority (AEPD).
        </p>

        <h3>Agreement and changes</h3>
        <p>
          By using this site or placing a preorder you agree to this policy. We
          will announce any material changes by e-mail and on this page.
        </p>
      </>
    );
  }

  if (locale === "es") {
    return (
      <>
        <h1>Declaración de Privacidad (v1.0 — 15 Jun 2025)</h1>
        <p>
          Voltrac S.L., C/ Villa de Madrid 26B, 46988 Paterna (Valencia), NIF
          B16388720, es el responsable del tratamiento de los datos. Puede
          contactarnos en privacy@voltrac.eu.
        </p>
        <h3>Datos que recopilamos</h3>
        <ul>
          <li>
            Datos que introduce: nombre, correo electrónico, teléfono,
            direcciones de facturación y envío, CIF/NIF, token del método de
            pago (los datos completos de la tarjeta permanecen en nuestro
            procesador, Square).
          </li>
          <li>Registros de pedidos, asistencia y demostraciones.</li>
        </ul>

        <h3>Para qué los usamos</h3>
        <p>
          Para crear y gestionar su reserva o compra, enviarle actualizaciones
          de desarrollo o marketing (puede darse de baja en cualquier momento),
          prevenir el fraude, cumplir obligaciones fiscales y regulatorias y
          mejorar nuestro sitio.
        </p>

        <h3>Quién accede a sus datos</h3>
        <ul>
          <li>Procesamiento de pagos: Square Europe Ltd.</li>
          <li>
            Consultas del sitio web: Google Cloud, alojado en centros de datos
            de la UE.
          </li>
          <li>Correo electrónico: Google Workspace.</li>
          <li>
            Mensajerías, contables o autoridades públicas cuando la ley lo
            exija.
          </li>
        </ul>

        <h3>Plazo de conservación</h3>
        <p>
          Los registros comerciales se conservan durante el mínimo legal
          (normalmente 6 años tras la última transacción) y luego se eliminan o
          anonimizan. Los correos de marketing cesan tan pronto como se dé de
          baja.
        </p>

        <h3>Seguridad</h3>
        <p>
          Los datos se cifran en tránsito (TLS) y en reposo; el acceso está
          limitado al personal que lo necesite para su trabajo y protegido por
          MFA.
        </p>

        <h3>Sus derechos</h3>
        <p>
          Según el RGPD, puede solicitar acceso, rectificación, supresión,
          limitación o portabilidad de sus datos personales, u oponerse a su
          uso. Escriba a privacy@voltrac.eu y responderemos en un máximo de 30
          días. Puede presentar una reclamación ante la Agencia Española de
          Protección de Datos (AEPD).
        </p>

        <h3>Aceptación y cambios</h3>
        <p>
          Al utilizar este sitio o realizar una reserva acepta esta política.
          Cualquier cambio sustancial se anunciará por correo electrónico y en
          esta página.
        </p>
      </>
    );
  }

  if (locale === "de") {
    return (
      <>
        <h1>Datenschutzerklärung (v1.0 — 15. Juni 2025)</h1>
        <p>
          Voltrac S.L., C/ Villa de Madrid 26B, 46988 Paterna (Valencia), NIF
          B16388720, ist Verantwortlicher für die Datenverarbeitung. Sie
          erreichen uns unter privacy@voltrac.eu.
        </p>
        <h3>Was wir erfassen</h3>
        <ul>
          <li>
            Von Ihnen eingegebene Daten: Name, E-Mail, Telefon, Rechnungs- und
            Lieferadresse, USt-ID/NIF, Zahlungs-Token (die vollständigen
            Kartendaten verbleiben bei unserem Dienstleister Square).
          </li>
          <li>Aufzeichnungen zu Bestellungen, Support und Demos.</li>
        </ul>

        <h3>Warum wir sie nutzen</h3>
        <p>
          Um Ihre Vorbestellung oder Ihren Kauf anzulegen und zu verwalten,
          Entwicklungs- oder Marketing-Updates zu senden (Abmeldung jederzeit
          möglich), Betrug zu verhindern, steuerliche und gesetzliche Pflichten
          zu erfüllen und unsere Website zu verbessern.
        </p>

        <h3>Wer sie sieht</h3>
        <ul>
          <li>Zahlungsabwicklung: Square Europe Ltd.</li>
          <li>Website-Anfragen: Google Cloud, gehostet in EU-Rechenzentren.</li>
          <li>E-Mail: Google Workspace.</li>
          <li>
            Kuriere, Buchhalter oder Behörden, sofern gesetzlich erforderlich.
          </li>
        </ul>

        <h3>Wie lange</h3>
        <p>
          Geschäftsunterlagen werden für die gesetzliche Mindestdauer aufbewahrt
          (in der Regel 6 Jahre nach der letzten Transaktion) und anschließend
          gelöscht oder anonymisiert. Marketing-E-Mails enden sofort, sobald Sie
          sich abmelden.
        </p>

        <h3>Sicherheit</h3>
        <p>
          Daten werden während der Übertragung (TLS) und im Ruhezustand
          verschlüsselt; der Zugriff ist auf Mitarbeitende beschränkt, die ihn
          für ihre Arbeit benötigen, und durch MFA geschützt.
        </p>

        <h3>Ihre Rechte</h3>
        <p>
          Nach der DSGVO können Sie Zugang, Berichtigung, Löschung,
          Einschränkung oder Übertragbarkeit Ihrer personenbezogenen Daten
          verlangen oder deren Nutzung widersprechen. Schreiben Sie an
          privacy@voltrac.eu; wir antworten innerhalb von 30 Tagen. Sie können
          sich bei der spanischen Datenschutzbehörde (AEPD) beschweren.
        </p>

        <h3>Einwilligung und Änderungen</h3>
        <p>
          Mit der Nutzung dieser Website oder der Aufgabe einer Vorbestellung
          stimmen Sie dieser Richtlinie zu. Wesentliche Änderungen werden wir
          per E-Mail und auf dieser Seite bekanntgeben.
        </p>
      </>
    );
  }

  if (locale === "nl") {
    return (
      <>
        <h1>Privacyverklaring (v1.0 — 15 jun 2025)</h1>
        <p>
          Voltrac S.L., C/ Villa de Madrid 26B, 46988 Paterna (Valencia), NIF
          B16388720, is de gegevensverantwoordelijke. U kunt ons bereiken via
          privacy@voltrac.eu.
        </p>
        <h3>Wat wij verzamelen</h3>
        <ul>
          <li>
            Gegevens die u invoert: naam, e-mail, telefoon, factuur- en
            bezorgadres, btw-/NIF-nummer, betalingsmethode-token (de ruwe
            kaartgegevens blijven bij onze verwerker, Square).
          </li>
          <li>Bestel-, support- en demogegevens.</li>
        </ul>

        <h3>Waarom we ze gebruiken</h3>
        <p>
          Om uw pre-order of aankoop aan te maken en te beheren, ontwikkelings-
          of marketingupdates te sturen (afmelden kan op elk moment), fraude te
          voorkomen, aan fiscale en wettelijke verplichtingen te voldoen en onze
          site te verbeteren.
        </p>

        <h3>Wie ze kan inzien</h3>
        <ul>
          <li>Betalingsverwerking: Square Europe Ltd.</li>
          <li>Website-verzoeken: Google Cloud, gehost in EU-datacenters.</li>
          <li>E-mail: Google Workspace.</li>
          <li>
            Koeriers, accountants of overheidsinstanties indien wettelijk
            vereist.
          </li>
        </ul>

        <h3>Bewaartermijn</h3>
        <p>
          Zakelijke gegevens worden bewaard gedurende de wettelijke
          minimumtermijn (meestal 6 jaar na de laatste transactie) en daarna
          verwijderd of geanonimiseerd. Marketing-e-mails stoppen zodra u zich
          uitschrijft.
        </p>

        <h3>Beveiliging</h3>
        <p>
          Gegevens worden versleuteld tijdens transport (TLS) en in rust;
          toegang is beperkt tot personeel dat het voor hun werk nodig heeft en
          is beveiligd met MFA.
        </p>

        <h3>Uw rechten</h3>
        <p>
          Op grond van de AVG kunt u verzoeken om inzage, correctie,
          verwijdering, beperking of overdraagbaarheid van uw persoonsgegevens,
          of bezwaar maken tegen het gebruik ervan. Stuur een e-mail naar
          privacy@voltrac.eu; wij reageren binnen 30 dagen. U kunt een klacht
          indienen bij de Spaanse toezichthouder AEPD.
        </p>

        <h3>Instemming en wijzigingen</h3>
        <p>
          Door deze site te gebruiken of een pre-order te plaatsen gaat u
          akkoord met dit beleid. Eventuele materiële wijzigingen kondigen wij
          per e-mail en op deze pagina aan.
        </p>
      </>
    );
  }

  return null;
};

const PrivacyPolicy = async ({
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

export default PrivacyPolicy;
