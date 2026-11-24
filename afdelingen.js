// "Database" met technische handelingen per afdeling.
// Bron: "U Specifieke lijst van de technische handelingen.docx" en "Z specifieke lijst van de technische handelingen.docx"
// (aangeleverd 24-11-2026). Alleen spelling en opmaak zijn gelijkgetrokken; de inhoud is niet veranderd.
// Een afdeling toevoegen? Kopieer een blok { id, naam, groepen } en vul het aan. De pagina pakt het vanzelf op.
//
// freq: 'vaak' | 'regelmatig' | 'soms' | 'wisselend' | null   (zoals de afdeling het zelf aangaf)
window.AFDELINGEN = [
  {
    id: 'U',
    naam: 'Afdeling U',
    groepen: [
      { naam: 'Sondes en sondezorg', freq: 'vaak', items: [
        'Toedienen van sondevoeding via een sonde (continu of in porties)',
        'Verzorgen van de sonde (neusmaagsonde/duodenumsonde, PEG-sonde en jejunostomie)',
        'Toedienen van medicatie via de sonde',
        { t: 'Verwijderen van een neusmaagsonde of duodenumsonde', freq: 'soms' },
      ] },
      { naam: 'Maaghevel', freq: 'soms', items: [
        'Verzorgen van de maaghevel',
        'Verwijderen van de maaghevel',
      ] },
      { naam: 'Drains', freq: 'wisselend', items: [
        { t: 'Verzorgen van drains', note: 'Meest voorkomend: pigtaildrain, buikdrain, redondrain. Weinig: penrosedrain. Zelden op afdeling U: thoraxdrainage.' },
        { t: 'Drains spoelen (pigtaildrain, buikdrain)', freq: 'vaak' },
        { t: 'Verwijderen van drains', freq: 'soms', note: 'Zeldzaam; gebeurt vaak door de huisarts of het ziekenhuis.' },
      ] },
      { naam: 'PICC-lijn', freq: 'soms', items: [
        'Verzorgen van de PICC-lijn',
        'Toedienen van medicatie via de PICC-lijn',
        'Toedienen van voeding (TPV)',
      ] },
      { naam: 'Wondzorg', freq: 'vaak', items: [
        'Wondzorg',
        'VAC-therapie',
        'Wond spoelen met behulp van katheters',
      ] },
      { naam: 'Stomazorg', freq: 'vaak', items: [
        'Ileostoma',
        'Colostoma',
      ] },
      { naam: 'Palliatieve zorg', freq: 'soms', items: [
        'Plaatsen van een butterfly',
        'Toedienen van medicatie via de butterfly',
      ] },
      { naam: 'Subcutaan injecteren', freq: 'regelmatig', items: [
        { t: 'Insuline', freq: 'vaak' },
        { t: 'Octreotide', freq: 'soms' },
        { t: 'Fraxiparine', freq: 'soms', note: 'Het gaat om therapeutische, niet profylactische toediening.' },
      ] },
    ],
  },
  {
    id: 'Z',
    naam: 'Afdeling Z',
    groepen: [
      { naam: 'Sondevoeding (neusmaagsonde/duodenumsonde)', freq: 'vaak', items: [
        { t: 'Inbrengen van een neusmaagsonde', note: 'Een duodenumsonde wordt door de MDL-arts ingebracht via een gastroscopie.' },
        'Verwisselen van de neuspleister',
        'Aan- en afkoppelen van sondevoeding (continue toediening)',
        'Toedienen van porties sondevoeding',
        'Aanleren aan de patiënt: doorspuiten van de sonde',
        'Toedienen van medicatie via de sonde',
        'Verwijderen van een neusmaagsonde/duodenumsonde',
      ] },
      { naam: 'Maaghevel', freq: 'regelmatig', items: [
        'Inbrengen van een maaghevel',
        'Observeren van de positie van de hevel',
        'Verwijderen van de maaghevel',
      ] },
      { naam: 'Katheteriseren', freq: 'vaak', items: [
        'Eenmalig katheteriseren (man/vrouw)',
        'Verblijfskatheter inbrengen (man/vrouw)',
        'Blaasspoelen bij een niet goed lopende katheter',
      ] },
      { naam: 'PICC-lijn', freq: 'vaak', items: [
        'Verzorgen van de PICC-lijn (1× per week)',
        'Dagelijkse observatie',
        'Toedienen van medicatie via de PICC-lijn',
        'Toedienen van TPV',
        'Bloedafname uit de PICC-lijn',
        'Verwijderen van de PICC-lijn',
      ] },
      { naam: 'Venflon', freq: 'vaak', items: [
        'Inbrengen van een venflon',
        'Verwijderen van een venflon',
        'Toedienen van medicatie via de venflon',
        'Dagelijks de insteek beoordelen en elke dienst flushen met NaCl',
      ] },
      { naam: 'Butterfly', freq: 'vaak', items: [
        'Inbrengen van een butterfly',
        'Verwijderen van een butterfly',
        'Toedienen van medicatie via de butterfly',
        'Dagelijkse observatie van de insteek',
      ] },
      { naam: 'Klysmeren', freq: 'vaak', items: [
        'Toedienen van een klysma rectaal (gewoon of hoogopgaand)',
        'Toedienen van Microlax',
      ] },
      { naam: 'Drainzorg', freq: 'vaak', items: [
        { t: 'Thoraxdrain', note: 'Dagelijks de insteekopening verzorgen, de Thopaz-pot aflezen en de opvangpot verwisselen.' },
        { t: 'Ascitesdrain', note: 'Verwijderen van de ascitesdrain.' },
        { t: 'Nefrodrain', freq: 'soms', note: 'Verzorgen van de insteek.' },
      ] },
      { naam: 'Subcutaan injecteren', freq: 'vaak', items: [
        'Fraxiparine',
        'Insuline',
      ] },
      { naam: 'Venapunctie', freq: 'vaak', items: [
        'Bloedkweken afnemen',
      ] },
      { naam: 'Oncologie-gerelateerd', freq: null, items: [
        { t: 'Toedienen van chemotherapie en immunotherapie (subcutane injectie)', freq: 'vaak' },
        { t: 'Toedienen van groeifactoren (subcutane injectie)', freq: 'regelmatig' },
      ] },
      { naam: 'Infuus en terminale zorg', freq: null, items: [
        'Toedienen van intraveneuze immunoglobulines',
        'Opstarten van een pomp bij terminale zorg',
        'Toedienen van een bolus',
        { t: 'Epidurale of spinale toediening van medicatie', note: 'Op afdeling Z vaak in combinatie met andere behandelingen (cytostatica). Daarom voorlopig niet geschikt voor thuis.', niet: true },
      ] },
    ],
  },
];
