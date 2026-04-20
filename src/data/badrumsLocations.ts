export type FaqItem = {
  question: string;
  answer: string;
  answerHtml: string;
};

export type GuideBlock = {
  title: string;
  bodyHtml: string;
  imageSrc?: string;
  imageAlt?: string;
  gray?: boolean;
  imageFirst?: boolean;
  textOnly?: boolean;
};

export type BadrumsLocationContent = {
  slug: 'stockholm' | 'sollentuna' | 'solna';
  city: string;
  route: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    geoPlacename: string;
    geoPosition: string;
    latitude: number;
    longitude: number;
  };
  hero: {
    lead: string;
    imageSrc: string;
    imageAlt: string;
  };
  guideHeader: {
    title: string;
    introHtml: string;
  };
  guideBlocks: GuideBlock[];
  faqTitle: string;
  faqLead: string;
  faqs: FaqItem[];
  footerFocus: string;
  localBusinessDescription: string;
};

export const BADRUMS_LOCATIONS: Record<string, BadrumsLocationContent> = {
  stockholm: {
    slug: 'stockholm',
    city: 'Stockholm',
    route: '/badrumsrenovering-stockholm',
    seo: {
      title: 'Badrumsrenovering Stockholm 2026 | BKR-behörig firma med fast pris',
      description:
        'Badrumsrenovering i Stockholm med BKR-behöriga plattsättare. Få tydlig tidsplan, kvalitetsdokument och fast pris för BRF, villa eller radhus.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-stockholm',
      ogTitle: 'Badrumsrenovering Stockholm - Fast pris och BKR-behörighet',
      ogDescription:
        'Komplett guide till badrumsrenovering i Stockholm: kostnad, BRF-krav, tidsplan och materialval.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplattsattningbildhemsida.avif',
      ogImageAlt: 'Badrumsrenovering i Stockholm med certifierad plattsättning',
      twitterTitle: 'Badrumsrenovering Stockholm | Haga Plattsättning AB',
      twitterDescription:
        'Planera badrumsrenovering i Stockholm med rätt dokumentation, kvalitet och fast pris.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplattsattningbildhemsida.avif',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
      latitude: 59.3293,
      longitude: 18.0686,
    },
    hero: {
      lead:
        'Ska du renovera badrum i Stockholm? Här får du en lokalt anpassad guide för BRF, innerstad och villaområden - med tydliga kostnader, krav och tidslinje innan du väljer entreprenör.',
      imageSrc: '/hagaplattsattningbildhemsida.avif',
      imageAlt:
        'Nyrenoverat badrum i Stockholm med storformatkakel och professionell plattsättning',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Stockholm - så planerar du rätt från start',
      introHtml:
        'Stockholm har många äldre fastigheter och höga BRF-krav. Det betyder att badrumsrenovering kräver mer än bara snyggt kakel - du behöver rätt dokumentation, logistikplan och en entreprenör som kan jobba i trånga stadsmiljöer. Jämför även med våra sidor för <a href="/badrumsrenovering-sollentuna" style="color:#0a0a1a;font-weight:600;">Sollentuna</a> och <a href="/badrumsrenovering-solna" style="color:#0a0a1a;font-weight:600;">Solna</a>.',
    },
    guideBlocks: [
      {
        title: 'Bostadsrätt i innerstan vs villa i ytterområden - vad skiljer?',
        bodyHtml:
          '<p>I innerstadens bostadsrätter ansvarar du för ytskikt och tätskikt, medan föreningen ofta ställer detaljerade krav på bullertider, rivningsanmälan och intyg efter avslutat arbete.</p><p>I villaområden som Bromma och Hässelby har du större frihet, men också fullt ansvar om något blir fel. Därför är BKR-dokumentation lika viktig i villa som i BRF.</p><p>Vi anpassar arbetsmetod, tidplan och avfallshantering utifrån fastighetstyp och adress.</p>',
        imageSrc: '/hagaplattsattningbildhemsida1.avif',
        imageAlt:
          'Badrumsrenovering i bostadsratt i Stockholm med noggrann kakelsattning',
      },
      {
        title: 'Varfor tar badrumsrenovering ofta lite langre tid i centrala Stockholm?',
        bodyHtml:
          '<p>Det ar sallan sjalva kakelsattningen som forlangs - det ar logistiken runtomkring som styr tempo.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Materialbarning via trapphus utan hiss</li><li>Begransade arbetstider i BRF (ofta 07-17 vardagar)</li><li>Bokning av hissskydd, garageplats eller containerplats</li><li>Hardningstid for tatschikt mellan arbetsmoment</li></ul><p>Vi bygger alltid in dessa risker i tidsplanen innan start, sa att du far realistiska deadlines.</p>',
        imageSrc: '/hagaplattsattningbildhemsida2.avif',
        imageAlt:
          'Planering av badrumsrenovering i centrala Stockholm med logistik och material',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Vad kostar badrumsrenovering i Stockholm 2026?',
        bodyHtml:
          '<p>Arbetskostnaden beror pa format, underarbete och detaljniva. Nedan ar riktpriser for plattsattning:</p><table class="price-table" aria-label="Priser badrumsrenovering Stockholm 2026"><thead><tr><th>Typ av arbete</th><th>Pris (arbete)</th><th>Efter ROT</th></tr></thead><tbody><tr><td>Standard kakel och klinker</td><td>500-1 000 kr/m2</td><td>250-500 kr/m2</td></tr><tr><td>Storformat 60x60 cm+</td><td>700-1 200 kr/m2</td><td>350-600 kr/m2</td></tr><tr><td>Mosaik och nischer</td><td>800-1 300 kr/m2</td><td>400-650 kr/m2</td></tr><tr><td>Timpris <a href="/kakelsattare-stockholm" style="color:#333;text-decoration:underline;">kakelsattare Stockholm</a></td><td>650-900 kr/timme</td><td>325-450 kr/timme</td></tr></tbody></table><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">Se aven <a href="/badrumsrenovering-pris" style="color:#777;">var prisguide</a> for totalbudget inklusive VVS och el.</p>',
        imageSrc: '/hagaplattsattningbildhemsida3.avif',
        imageAlt:
          'Prisbild for badrumsrenovering i Stockholm med fast offert och ROT-avdrag',
      },
      {
        title: 'Materialtrender i Stockholm 2026',
        bodyHtml:
          '<p>Kunder i Stockholm valjer ofta en kombination av funktion, ljusinslapp och lang livslangd.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Storformat i neutrala toner</strong> - lugnt uttryck och fa fogar</li><li><strong>Kontrastnisch i dusch</strong> - markerad zon utan att overbelasta rummet</li><li><strong>Matt klinker pa golv</strong> - battre halkgrepp i vardagsbruk</li><li><strong>Vaggnara kommod</strong> - ger luftigare kansla i mindre badrum</li><li><strong>Dolda forvaringar</strong> - minskar visuellt brus i stadslagenheter</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre misstag som ofta gor Stockholmprojekt dyrare',
        bodyHtml:
          '<p><strong>1. Otydlig offert:</strong> saknas tydlig avgransning mellan plattsattning, VVS och el blir slutkostnaden osaker.</p><p><strong>2. Fel entreprenor for BRF:</strong> om firman inte kan leverera korrekt dokumentation kan projektet stoppas av foreningen.</p><p><strong>3. For sena materialval:</strong> sena beslut om kakel och inredning skapar leveransluckor och stillestandskostnader.</p><p style="margin-top:1rem;"><a href="/offertforfragan" style="color:#0a0a1a;font-weight:700;">Begär en kostnadsfri offert med fast pris -></a></p>',
        textOnly: true,
      },
      {
        title: 'Steg-for-steg i BRF i Stockholm',
        bodyHtml:
          '<p>En typisk process i Stockholms bostadsratter ser ut sa har:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Hamta BRF:ens renoveringsregler</li><li><strong>Steg 2:</strong> Skicka in anmalan med entreprenorens behorigheter</li><li><strong>Steg 3:</strong> Informera grannar om bullerperiod och tilltrade</li><li><strong>Steg 4:</strong> Genomfor arbete enligt BBV och dokumentera egenkontroller</li><li><strong>Steg 5:</strong> Leverera kvalitetsdokument efter slutkontroll</li></ul><p>Vill du jamfora med norrort? Se <a href="/badrumsrenovering-sollentuna" style="color:#0a0a1a;font-weight:600;">Sollentuna</a> och <a href="/badrumsrenovering-solna" style="color:#0a0a1a;font-weight:600;">Solna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga fragor om badrumsrenovering i Stockholm',
    faqLead:
      'Kortfattade svar om innerstad, BRF-process, kostnad, tidplan och samordning av hantverkare.',
    faqs: [
      {
        question: 'Arbetar ni i hela Stockholm eller bara innerstan?',
        answer:
          'Vi arbetar i hela Stockholmsregionen, inklusive innerstan, narfororter och norrort. Projektet planeras efter din fastighetstyp och lokala forutsattningar.',
        answerHtml:
          'Vi arbetar i hela Stockholmsregionen, inklusive innerstan, narfororter och norrort. Projektet planeras efter din fastighetstyp och lokala forutsattningar.',
      },
      {
        question: 'Hur langt i forvag bor jag boka badrumsrenovering i Stockholm?',
        answer:
          'I Stockholm ar det vanligt med 4-8 veckors planering innan start, sarskilt i BRF dar anmalan och granninformation maste hinnas med.',
        answerHtml:
          'I Stockholm ar det vanligt med 4-8 veckors planering innan start, sarskilt i BRF dar anmalan och granninformation maste hinnas med.',
      },
      {
        question: 'Kan ni ta totalansvar inklusive VVS och el?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners for VVS och el, sa att du har en kontaktvag genom hela projektet.',
        answerHtml:
          'Ja, vi samordnar certifierade samarbetspartners for VVS och el, sa att du har en kontaktvag genom hela projektet.',
      },
      {
        question: 'Behover jag BRF-godkannande innan ni startar?',
        answer:
          'I de flesta bostadsrattsforeningar ja. Vi hjalper dig med underlag, behorighetsintyg och tidplan till styrelsen.',
        answerHtml:
          'I de flesta bostadsrattsforeningar ja. Vi hjalper dig med underlag, behorighetsintyg och tidplan till styrelsen.',
      },
      {
        question: 'Vad ar normal totalbudget for ett badrum i Stockholm?',
        answer:
          'Manga projekt ligger mellan 140 000 och 300 000 kr beroende pa storlek, material och om stammar eller underlag behover atgardas.',
        answerHtml:
          'Manga projekt ligger mellan 140 000 och 300 000 kr beroende pa storlek, material och om stammar eller underlag behover atgardas.',
      },
      {
        question: 'Hur fungerar ROT-avdraget hos er?',
        answer:
          'Vi drar av ROT direkt pa fakturan och hanterar administrationen mot Skatteverket, forutsatt att du uppfyller villkoren.',
        answerHtml:
          'Vi drar av ROT direkt pa fakturan och hanterar administrationen mot Skatteverket, forutsatt att du uppfyller villkoren.',
      },
      {
        question: 'Kan jag bo kvar hemma under renoveringen?',
        answer:
          'Ja, i de flesta fall. Vi planerar arbetsmomenten sa smidigt som mojligt och skapar en tillfallig losning nar toalett eller dusch ar ur drift.',
        answerHtml:
          'Ja, i de flesta fall. Vi planerar arbetsmomenten sa smidigt som mojligt och skapar en tillfallig losning nar toalett eller dusch ar ur drift.',
      },
      {
        question: 'Vad hander om ni hittar fuktskada vid rivning?',
        answer:
          'Vi dokumenterar fyndet direkt, gar igenom atgardsforslag med dig och uppdaterar offert innan extraarbete paborjas.',
        answerHtml:
          'Vi dokumenterar fyndet direkt, gar igenom atgardsforslag med dig och uppdaterar offert innan extraarbete paborjas.',
      },
    ],
    footerFocus:
      'Denna sida fokuserar pa badrumsrenovering i Stockholm med BKR-behorighet, tydlig projektering och fast pris fran offert till fardigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering i Stockholm med BKR-behoriga plattsattare, kvalitetsdokument och fast pris.',
  },
  sollentuna: {
    slug: 'sollentuna',
    city: 'Sollentuna',
    route: '/badrumsrenovering-sollentuna',
    seo: {
      title: 'Badrumsrenovering Sollentuna 2026 | Lokal firma med kontor i kommunen',
      description:
        'Badrumsrenovering i Sollentuna med lokal narvaro pa Skyttevagen. BKR-behorighet, fast pris och tydlig process for BRF, radhus och villa.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-sollentuna',
      ogTitle: 'Badrumsrenovering Sollentuna - Lokal guide och fast pris',
      ogDescription:
        'Las vad badrumsrenovering kostar i Sollentuna och hur vi jobbar lokalt i Tureberg, Edsberg, Haggvik och Norrviken.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_15.avif',
      ogImageAlt: 'Badrumsrenovering i Sollentuna med lokalt team och BKR-behorighet',
      twitterTitle: 'Badrumsrenovering Sollentuna | Haga Plattsättning AB',
      twitterDescription:
        'Lokal badrumsrenovering i Sollentuna med fast pris, kvalitetsdokument och trygg projektsamordning.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_15.avif',
      geoPlacename: 'Sollentuna',
      geoPosition: '59.4285;17.9493',
      latitude: 59.4285,
      longitude: 17.9493,
    },
    hero: {
      lead:
        'Bor du i Sollentuna och planerar nytt badrum? Vi arbetar dagligen i kommunen och ger dig en tydlig plan for BRF, radhus och villa - med lokala tidsramar och fast pris.',
      imageSrc: '/hagaplatt_15.avif',
      imageAlt: 'Ljust badrum i Sollentuna med kakel och klinker lagda av certifierad plattsattare',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Sollentuna - lokalt perspektiv fran norrort',
      introHtml:
        'Med kontor pa Skyttevagen har vi kort installelsetid i hela Sollentuna. Det gor planering, platsbesok och uppfoljning smidig for dig som bor i till exempel Tureberg, Edsberg, Haggvik eller Norrviken. Se aven vart upplagg for <a href="/badrumsrenovering-stockholm" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-solna" style="color:#0a0a1a;font-weight:600;">Solna</a>.',
    },
    guideBlocks: [
      {
        title: 'Bostadsratt, radhus eller villa i Sollentuna - olika behov i samma kommun',
        bodyHtml:
          '<p>I Sollentuna ar spannet stort mellan foreningar i centrum och villakvarter i ytterdelarna. Bostadstypen styr hur renoveringen bor laggas upp.</p><p>I BRF ar process och dokumentation centralt. I radhus och villa blir underlag, ventilation och golvkonstruktion ofta mer avgorande.</p><p>Vi gor alltid en platsanpassad genomgang innan vi ger slutlig tids- och kostnadsbild.</p>',
        imageSrc: '/hagaplatt_16.avif',
        imageAlt:
          'Badrumsrenovering i Sollentuna med fokus pa bostadsratt och radhus i norrort',
      },
      {
        title: 'Tidplan i Sollentuna - varfor projekt ofta blir mer forutsagbara',
        bodyHtml:
          '<p>Jämfört med innerstan ar logistiken ofta enklare i Sollentuna, vilket minskar risken for onodiga stopp.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Enklare angoring for leveranser och avfall</li><li>Kortare transporttid for hantverkare och material</li><li>Mindre risk for parkeringsrelaterade forseningar</li><li>Samma kvalitetskrav pa tatschikt och dokumentation som i hela lanet</li></ul><p>Vi sattar en realistisk tidplan redan i offertskedet och uppdaterar den lopande under projektet.</p>',
        imageSrc: '/hagaplatt_17.avif',
        imageAlt:
          'Tidsplan for badrumsrenovering i Sollentuna med effektiv logistik och materialflode',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Vad kostar badrumsrenovering i Sollentuna 2026?',
        bodyHtml:
          '<p>Arbetspriserna liknar ovriga Stockholm, men slutkostnaden paverkas av omfattning och materialval.</p><table class="price-table" aria-label="Priser badrumsrenovering Sollentuna 2026"><thead><tr><th>Typ av arbete</th><th>Pris (arbete)</th><th>Efter ROT</th></tr></thead><tbody><tr><td>Standard kakel och klinker</td><td>500-1 000 kr/m2</td><td>250-500 kr/m2</td></tr><tr><td>Storformat 60x60 cm+</td><td>700-1 200 kr/m2</td><td>350-600 kr/m2</td></tr><tr><td>Mosaik och nischer</td><td>800-1 300 kr/m2</td><td>400-650 kr/m2</td></tr><tr><td>Timpris <a href="/kakelsattare-stockholm" style="color:#333;text-decoration:underline;">kakelsattare Stockholm</a></td><td>650-900 kr/timme</td><td>325-450 kr/timme</td></tr></tbody></table><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">Las mer i <a href="/badrumsrenovering-pris" style="color:#777;">prisguiden</a> for totalentreprenad och tillval.</p>',
        imageSrc: '/hagaplatt_18.avif',
        imageAlt:
          'Kostnadsniva for badrumsrenovering i Sollentuna med fast pris och ROT-avdrag',
      },
      {
        title: 'Materialval som fungerar bra i Sollentunas bostader',
        bodyHtml:
          '<p>Vi ser ofta att kunder i Sollentuna prioriterar slitstyrka och enkel skotsel.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Storformat i ljusa nyanser</strong> - visuellt rymligt i mindre badrum</li><li><strong>Klinker med bra R-varde</strong> - tryggare golv i familjebadrum</li><li><strong>Nischlosningar i dusch</strong> - smart forvaring utan extra mober</li><li><strong>Naturnara toner</strong> - fungerar i bade modern och klassisk stil</li><li><strong>Blandning av matta och halvblanka ytor</strong> - balans mellan uttryck och underhall</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre vanliga fallgropar i Sollentunaprojekt',
        bodyHtml:
          '<p><strong>1. For snabb start utan projektering:</strong> leder ofta till sena andringar och onodiga kostnader.</p><p><strong>2. Underskattad underlagsrisk i aldre badrum:</strong> fukt och skadad stomme maste hanteras innan nytt tatschikt.</p><p><strong>3. Otydlig samordning mellan yrkesgrupper:</strong> tydlig ordning mellan rivning, VVS, el och plattsattning ar avgorande.</p><p style="margin-top:1rem;"><a href="/offertforfragan" style="color:#0a0a1a;font-weight:700;">Boka kostnadsfri offert for Sollentuna -></a></p>',
        textOnly: true,
      },
      {
        title: 'BRF-process i Sollentuna - sa forbereder du dig',
        bodyHtml:
          '<p>For de flesta foreningar i kommunen fungerar detta upplagg bast:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Begar gällande renoveringspolicy</li><li><strong>Steg 2:</strong> Lamna in komplett anmalan med tidplan</li><li><strong>Steg 3:</strong> Samordna tilltrade, skydd och granninformation</li><li><strong>Steg 4:</strong> Genomfor renovering enligt BBV</li><li><strong>Steg 5:</strong> Leverera kvalitetsdokument och slutdokumentation</li></ul><p>Behöver du jamfora med andra orter? Se <a href="/badrumsrenovering-stockholm" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-solna" style="color:#0a0a1a;font-weight:600;">Solna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga fragor om badrumsrenovering i Sollentuna',
    faqLead:
      'Fragor vi far lokalt i Sollentuna om pris, tidsplan, BRF-krav och hur projektet genomfors steg for steg.',
    faqs: [
      {
        question: 'Utgar ni verkligen fran Sollentuna?',
        answer:
          'Ja, vi har kontor pa Skyttevagen i Sollentuna och arbetar lopande i hela kommunen.',
        answerHtml:
          'Ja, vi har kontor pa Skyttevagen i Sollentuna och arbetar lopande i hela kommunen.',
      },
      {
        question: 'Vilka delar av Sollentuna arbetar ni mest i?',
        answer:
          'Vi har uppdrag i bland annat Tureberg, Edsberg, Haggvik, Norrviken, Rotebro och Helenelund.',
        answerHtml:
          'Vi har uppdrag i bland annat Tureberg, Edsberg, Haggvik, Norrviken, Rotebro och Helenelund.',
      },
      {
        question: 'Hur snabbt kan ni starta ett projekt i Sollentuna?',
        answer:
          'Vanligtvis inom 3-6 veckor beroende pa omfattning, materialval och BRF-process om du bor i bostadsratt.',
        answerHtml:
          'Vanligtvis inom 3-6 veckor beroende pa omfattning, materialval och BRF-process om du bor i bostadsratt.',
      },
      {
        question: 'Behover jag anmala renoveringen till min BRF i Sollentuna?',
        answer:
          'Ja, i de flesta foreningar kravs skriftlig anmalan. Vi hjalper dig med bilagor och certifikat.',
        answerHtml:
          'Ja, i de flesta foreningar kravs skriftlig anmalan. Vi hjalper dig med bilagor och certifikat.',
      },
      {
        question: 'Vad kostar ett normalt badrum i Sollentuna?',
        answer:
          'Manga projekt hamnar mellan 140 000 och 250 000 kr beroende pa yta, material och tekniska atgarder.',
        answerHtml:
          'Manga projekt hamnar mellan 140 000 och 250 000 kr beroende pa yta, material och tekniska atgarder.',
      },
      {
        question: 'Kan ni samordna VVS och el aven i Sollentuna?',
        answer:
          'Ja, vi samordnar certifierade underentreprenorer och driver projektet med en tydlig tidslinje.',
        answerHtml:
          'Ja, vi samordnar certifierade underentreprenorer och driver projektet med en tydlig tidslinje.',
      },
      {
        question: 'Kan familjen bo kvar under renoveringen?',
        answer:
          'I de flesta fall ja. Vi planerar arbetsordningen sa att vardagen paverkas sa lite som mojligt.',
        answerHtml:
          'I de flesta fall ja. Vi planerar arbetsordningen sa att vardagen paverkas sa lite som mojligt.',
      },
      {
        question: 'Vad hander om dolda fel upptacks i ett aldre badrum?',
        answer:
          'Vi stoppar arbetet, dokumenterar fynden och gar igenom kostnad och atgard med dig innan fortsattning.',
        answerHtml:
          'Vi stoppar arbetet, dokumenterar fynden och gar igenom kostnad och atgard med dig innan fortsattning.',
      },
    ],
    footerFocus:
      'Denna sida ar anpassad for badrumsrenovering i Sollentuna med lokal narvaro, BKR-behorighet och fast pris for BRF, radhus och villa.',
    localBusinessDescription:
      'Lokal badrumsrenovering i Sollentuna med BKR-behoriga plattsattare, kvalitetsdokument och tydlig projektledning.',
  },
  solna: {
    slug: 'solna',
    city: 'Solna',
    route: '/badrumsrenovering-solna',
    seo: {
      title: 'Badrumsrenovering Solna 2026 | BRF-specialister med fast pris',
      description:
        'Badrumsrenovering i Solna for bostadsratter och villor. BKR-behorig entreprenor, tydlig BRF-process och fast pris med kvalitetsdokument.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-solna',
      ogTitle: 'Badrumsrenovering Solna - Fast pris och trygg BRF-process',
      ogDescription:
        'Lokalt anpassad sida for Solna: priser, tidsplan, BRF-krav och materialval for 2026.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_31.avif',
      ogImageAlt: 'Badrumsrenovering i Solna med modern kakelsattning och dokumenterad kvalitet',
      twitterTitle: 'Badrumsrenovering Solna | Haga Plattsättning AB',
      twitterDescription:
        'Planera badrumsrenovering i Solna med BKR-behorighet, fast pris och tydliga svar pa BRF-fragor.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_31.avif',
      geoPlacename: 'Solna',
      geoPosition: '59.3600;18.0009',
      latitude: 59.36,
      longitude: 18.0009,
    },
    hero: {
      lead:
        'Planerar du badrumsrenovering i Solna? Vi hjalper dig hela vagen med BRF-anmalan, projektering och plattsattning sa att slutresultatet blir bade snyggt och forsakringsbart.',
      imageSrc: '/hagaplatt_31.avif',
      imageAlt: 'Nytt badrum i Solna med stilrent kakel och precisionslagd klinker',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Solna - guide for BRF, stadsnara villor och nyproduktion',
      introHtml:
        'Solna har en hog andel bostadsratter och ett brett spann mellan aldre hus och moderna fastigheter. Det gor att badrumsprojekt ofta krav er en noggrann forstudie innan start. Las aven motsvarande sidor for <a href="/badrumsrenovering-stockholm" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.',
    },
    guideBlocks: [
      {
        title: 'Solnas bostadsmix paverkar hur badrummet bor renoveras',
        bodyHtml:
          '<p>I Solna ar det vanligt med bostadsratter i Frosunda, Huvudsta och runt Arenastaden, samtidigt som det finns villabebyggelse i delar av kommunen.</p><p>I BRF ar korrekt underlag till styrelsen avgorande. I villa ar teknisk status pa underlag, golvfall och befintliga installationer ofta den stora fragan.</p><p>Vi lagger stor vikt vid forbesiktning sa att du far en realistisk plan fran dag ett.</p>',
        imageSrc: '/hagaplatt_32.avif',
        imageAlt: 'Badrumsrenovering i Solna bostadsratt med dokumenterad arbetsprocess',
      },
      {
        title: 'Tidplan i Solna - vanliga orsaker till forsening och hur de undviks',
        bodyHtml:
          '<p>I Solna ligger manga projekt nara city med hog belastning pa logistik och leveranser. Med ratt forberedelser blir projektet stabilt.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Samordna tilltrade med BRF och forvaltare i god tid</li><li>Sakerstall leveransfons ter for material i tranga omraden</li><li>Planera rivning och uttorkning utan att stressa tatschiktsmoment</li><li>Ha beslut om kakel, kommod och blandare klara fore start</li></ul><p>Vi arbetar med tydliga milstolpar sa att du vet exakt var i processen projektet ar.</p>',
        imageSrc: '/hagaplatt_33.avif',
        imageAlt: 'Tidsplanering av badrumsrenovering i Solna med fokus pa BRF och leveranser',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Vad kostar badrumsrenovering i Solna 2026?',
        bodyHtml:
          '<p>Prisnivan i Solna ligger i linje med ovriga innernara kommuner. Arbetspriser for plattsattning:</p><table class="price-table" aria-label="Priser badrumsrenovering Solna 2026"><thead><tr><th>Typ av arbete</th><th>Pris (arbete)</th><th>Efter ROT</th></tr></thead><tbody><tr><td>Standard kakel och klinker</td><td>500-1 000 kr/m2</td><td>250-500 kr/m2</td></tr><tr><td>Storformat 60x60 cm+</td><td>700-1 200 kr/m2</td><td>350-600 kr/m2</td></tr><tr><td>Mosaik och detaljytor</td><td>800-1 300 kr/m2</td><td>400-650 kr/m2</td></tr><tr><td>Timpris <a href="/kakelsattare-stockholm" style="color:#333;text-decoration:underline;">kakelsattare Stockholm</a></td><td>650-900 kr/timme</td><td>325-450 kr/timme</td></tr></tbody></table><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">For jamforelse mellan olika upplagg, besok <a href="/badrumsrenovering-pris" style="color:#777;">badrumsrenovering pris</a>.</p>',
        imageSrc: '/hagaplatt_34.avif',
        imageAlt:
          'Kostnadsexempel for badrumsrenovering i Solna med rotavdrag och fastprisoffert',
      },
      {
        title: 'Material och designval som fungerar i Solna',
        bodyHtml:
          '<p>Manga Solnakunder vill kombinera modern design med robust vardagsfunktion.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Greige och varma gratoner</strong> - trend som skapar lugn och tidloshet</li><li><strong>Kombination av storformat och accentvagg</strong> - ger karaktar utan visuell oro</li><li><strong>Integrerade nischer</strong> - praktisk forvaring i duschzonen</li><li><strong>Lattstade ytor</strong> - minskar underhallsbehov i familjebruk</li><li><strong>Balanserad belysning</strong> - viktigt i badrum utan stora fonster</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre vanliga misstag i badrumsprojekt i Solna',
        bodyHtml:
          '<p><strong>1. For svag BRF-dialog:</strong> sena besked fran styrelsen kan flytta hela startdatumet.</p><p><strong>2. Fel ordning pa tillval:</strong> om inredning valjs efter rivning uppstar onodig stillestandskostnad.</p><p><strong>3. Underbudgeterad helhet:</strong> manga raknar endast kakel och missar ventilation, VVS eller underlagsatgarder.</p><p style="margin-top:1rem;"><a href="/offertforfragan" style="color:#0a0a1a;font-weight:700;">Få en tydlig offert for badrumsrenovering i Solna -></a></p>',
        textOnly: true,
      },
      {
        title: 'BRF-renovering i Solna - rekommenderad arbetsordning',
        bodyHtml:
          '<p>Sa har ser en valfungerande process ut for de flesta foreningar i Solna:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Kontrollera BRF:ens krav pa entreprenor och dokument</li><li><strong>Steg 2:</strong> Skicka in komplett anmalan med tidplan</li><li><strong>Steg 3:</strong> Faststall arbetsfons ter och praktisk tillgang</li><li><strong>Steg 4:</strong> Genomfor renoveringen med lopande egenkontroller</li><li><strong>Steg 5:</strong> Lamna kvalitetsdokument till dig och foreningen</li></ul><p>Om du aven overvager projekt i narliggande orter, se <a href="/badrumsrenovering-stockholm" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga fragor om badrumsrenovering i Solna',
    faqLead:
      'Svar pa fragor fran boende i Solna om BRF-krav, kostnad, tidplan och vad som kravs for ett forsakringsgodkant badrum.',
    faqs: [
      {
        question: 'Renoverar ni badrum i hela Solna kommun?',
        answer:
          'Ja, vi tar uppdrag i hela Solna inklusive Huvudsta, Frösunda, Råsunda, Bergshamra och Arenastaden.',
        answerHtml:
          'Ja, vi tar uppdrag i hela Solna inklusive Huvudsta, Frosunda, Rasunda, Bergshamra och Arenastaden.',
      },
      {
        question: 'Hur fungerar badrumsrenovering i BRF i Solna?',
        answer:
          'Projektet borjar med BRF-anmalan, sedan tidplan, genomforande och slutlig dokumentation. Vi stottar dig i varje steg.',
        answerHtml:
          'Projektet borjar med BRF-anmalan, sedan tidplan, genomforande och slutlig dokumentation. Vi stottar dig i varje steg.',
      },
      {
        question: 'Vad ar en vanlig tidsram for badrum i Solna?',
        answer:
          'De flesta projekt ligger mellan 2 och 4 veckor beroende pa omfattning, logistik och eventuella tillkommande atgarder.',
        answerHtml:
          'De flesta projekt ligger mellan 2 och 4 veckor beroende pa omfattning, logistik och eventuella tillkommande atgarder.',
      },
      {
        question: 'Vad kostar badrumsrenovering i Solna totalt?',
        answer:
          'Manga badrum landar mellan 140 000 och 300 000 kr inklusive arbete och material, beroende pa storlek och valda produkter.',
        answerHtml:
          'Manga badrum landar mellan 140 000 och 300 000 kr inklusive arbete och material, beroende pa storlek och valda produkter.',
      },
      {
        question: 'Kan ni hjalpa till om min forening kraver extra dokumentation?',
        answer:
          'Ja, vi levererar de handlingar som normalt efterfragas, inklusive behorighetsuppgifter och kvalitetsdokument.',
        answerHtml:
          'Ja, vi levererar de handlingar som normalt efterfragas, inklusive behorighetsuppgifter och kvalitetsdokument.',
      },
      {
        question: 'Gor ni en fastprisoffert innan start?',
        answer:
          'Ja, du far en tydlig offert med omfattning, avgransningar och preliminar tidsplan innan arbetet startar.',
        answerHtml:
          'Ja, du far en tydlig offert med omfattning, avgransningar och preliminar tidsplan innan arbetet startar.',
      },
      {
        question: 'Kan ni samordna allting inklusive VVS och el i Solna?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners sa att du slipper hantera flera parallella entreprenorer.',
        answerHtml:
          'Ja, vi samordnar certifierade samarbetspartners sa att du slipper hantera flera parallella entreprenorer.',
      },
      {
        question: 'Vad hander vid fuktskada eller annat dolt fel?',
        answer:
          'Vi dokumenterar direkt, visar vad som behovs och invantar ditt godkannande innan tillaggsarbete startar.',
        answerHtml:
          'Vi dokumenterar direkt, visar vad som behovs och invantar ditt godkannande innan tillaggsarbete startar.',
      },
    ],
    footerFocus:
      'Denna sida ar framtagen for badrumsrenovering i Solna med tydlig BRF-process, fast pris och dokumenterad kvalitet genom hela projektet.',
    localBusinessDescription:
      'Badrumsrenovering i Solna med BKR-behoriga plattsattare, fasta offerter och kvalitetssakrad leverans.',
  },
};
