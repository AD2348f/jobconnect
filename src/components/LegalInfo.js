import React from 'react';
import Card from 'react-bootstrap/Card';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';

const LegalInfo = () => {
    return (
        <div>
            <Card style={{ width: '90rem' }}>
  <Card.Body>
    <Card.Title>Legal Info</Card.Title>    
    <Card.Text>
    Impressum

Daten gemäß Abschnitt 5 TMG

(Junior Coding Jobsearch)

Musterstr. 7
10002

Repräsentiert von:

Junior Coding Jobsearch

Kontaktdaten

Telefon: +43123456789

E-Mail: example@example.com (mailto: example@example.com)

Webseite: www.junior-coding-jobsearch.de

Registriert im regionalen Genossenschaftsregister

Registrierungsnummer: 12345678987456321

Gerichtsstelle: Berlin

Haftungsausschluss

Verantwortlichkeit für Inhalte

Die Inhalte unserer Webseiten wurden unter größter Sorgfalt erstellt. Trotzdem können wir nicht garantieren, dass der Inhalt aktuell, zuverlässig oder komplett ist. Gemäß den gesetzlichen Vorschriften sind wir für die selbst erstellten Inhalte fc union berlin news verantwortlich. In diesem Zusammenhang möchten wir klarstellen, das wir nicht verantwortlich sind für Informationen, die von dritten Parteien zur Verfügung gestellt oder von diesen gesammelt werden. Wir kontrollieren weder die Informationen, die versand werden, noch verfolgen wir in mögliche illegale Aktivitäten diesen. Werden illegale Aktivitäten festgestellt folgen wir unserer Verpflichtung die entsprechenden Inhalte zu blockieren oder zu löschen, entsprechend den Paragraphen 8 bis 10 des Telemedia Acts (TMG).

Verantwortlichkeit für Links

Die Verantwortung für Inhalte von Links Dritter (externe Inhalte) liegt in der Verantwortung der jeweiligen Webseitenbetreiber. Zum Zeitpunkt der Einfügung der verwendeten Links auf unseren Seiten wurden keine illegalen Aktivitäten in diesen festgestellt. Sobald uns illegale Aktivitäten oder Verstöße bekannt werden, werden wir den entsprechenden Link entfernen.

Copyright

Unsere Webseiten und deren Inhalt (Texte, Fotos, Grafiken, Design) unterliegen dem deutschen Urheberrecht. Soweit nicht anderweitig gesetzlich vereinbart unterliegt der Nutzen, die Widergabe, Kopie oder die Veränderung der Inhalte dem Urheberrecht. Ausnahmen müssen schriftlich von den Webseitenbetreibern oder Rechteinhabern genehmigt werden. Individuelle Kopien sind nur für den privaten Gebrauch gestattet, sie dürfen weder direkt noch indirekt für wirtschaftliche Zwecke genutzt werden. Der nicht genehmigte Nutzen von unter Urheberrecht geschütztem Material ist nach Paragraph 106 strafbar.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default LegalInfo
