import { useState } from "react";
import { X } from "lucide-react";

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <>
      <footer className="relative py-12 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Campmeleon. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowImpressum(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => setShowDatenschutz(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <>
          <div className="modal-overlay" onClick={() => setShowImpressum(false)} />
          <div className="modal-content">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Impressum</h3>
              <button
                onClick={() => setShowImpressum(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h4>
                <p>Christian Lahr</p>
                <p>Kybfelsenstr. 53</p>
                <p>79100 Freiburg im Breisgau</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                <p>Telefon: 0151 65181806</p>
                <p>E-Mail: lahrchristian@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Umsatzsteuer-ID</h4>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                <p>DE458786450</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Berufsgenossenschaft</h4>
                <p>BG ETEM</p>
                <p>Unternehmensnummer: 373140873613001</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
                <p>Christian Lahr</p>
                <p>Kybfelsenstr. 53</p>
                <p>79100 Freiburg im Breisgau</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Datenschutz Modal */}
      {showDatenschutz && (
        <>
          <div className="modal-overlay" onClick={() => setShowDatenschutz(false)} />
          <div className="modal-content">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Datenschutzerklärung</h3>
              <button
                onClick={() => setShowDatenschutz(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h4>
                <p>
                  Diese Website dient ausschließlich zu Informationszwecken. Wir erheben, speichern oder verarbeiten 
                  keine personenbezogenen Daten automatisiert. Es werden keine Cookies gesetzt und keine 
                  Tracking-Tools verwendet.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Verantwortlicher</h4>
                <p>Christian Lahr</p>
                <p>Kybfelsenstr. 53</p>
                <p>79100 Freiburg im Breisgau</p>
                <p>E-Mail: lahrchristian@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Hosting</h4>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst 
                  werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                  und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Kontaktaufnahme</h4>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
                  bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">5. Ihre Rechte</h4>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz 
                  können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">6. SSL-Verschlüsselung</h4>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                  eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                  des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
