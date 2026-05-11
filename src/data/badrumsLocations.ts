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

export type ReviewItem = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export type BadrumsLocationContent = {
  slug: 'stockholm' | 'sollentuna' | 'solna';
  city: string;
  route: string;
  bkrImageSrc?: string;
  bkrImageAlt?: string;
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
  reviews?: ReviewItem[];
  footerFocus: string;
  localBusinessDescription: string;
};

export const BADRUMS_LOCATIONS: Record<string, BadrumsLocationContent> = {
  stockholm: {
    slug: 'stockholm',
    city: 'Stockholm',
    route: '/badrumsrenovering-stockholm/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'Behörig kakelsättare i Stockholm med dokumenterad BKR-process',
    seo: {
      title: 'Badrumsrenovering Stockholm – BKR-behörig Plattsättare med Våtrumsintyg | Haga Plattsättning AB',
      description:
        'Badrumsrenovering i Stockholm utförd av BKR-behörig plattsättare. Komplett process från offertförfrågan till kvalitetsdokument enligt BBV — för BRF, villa och radhus i hela Stockholm.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-stockholm/',
      ogTitle: 'Badrumsrenovering Stockholm – BKR-behörighet och Våtrumsintyg',
      ogDescription:
        'Badrumsrenovering i Stockholm med BKR-behörighet, BBV-dokumentation och våtrumsintyg. Tydlig process för BRF, villa och radhus.',
      ogImage: 'https://www.hagaplattsattning.se/haga%20platts%C3%A4ttning%20bild%203.avif',
      ogImageAlt: 'Badrumsrenovering i Stockholm med certifierad plattsättning',
      twitterTitle: 'Badrumsrenovering Stockholm – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering i Stockholm med BKR-behörighet, våtrumsintyg och kvalitetsdokument enligt BBV.',
      twitterImage: 'https://www.hagaplattsattning.se/haga%20platts%C3%A4ttning%20bild%203.avif',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
      latitude: 59.3293,
      longitude: 18.0686,
    },
    hero: {
      lead:
        'Ska du renovera badrum i Stockholm? Här får du en lokalt anpassad guide för BRF, innerstad och villaområden - med tydliga krav och tidslinje innan du väljer entreprenör.',
      imageSrc: '/hagaplatt_15.avif',
      imageAlt:
        'Nyrenoverat badrum i Stockholm med storformatkakel och professionell plattsättning',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Stockholm - så planerar du rätt från start',
      introHtml:
        'Stockholm har många äldre fastigheter och höga BRF-krav. Det betyder att badrumsrenovering kräver mer än bara snyggt kakel - du behöver rätt dokumentation, logistikplan och en entreprenör som kan jobba i trånga stadsmiljöer. Jämför även med våra sidor för <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a> och <a href="/badrumsrenovering-solna/" style="color:#0a0a1a;font-weight:600;">Solna</a>.',
    },
    guideBlocks: [
      {
        title: 'Bostadsrätt i innerstan vs villa i ytterområden - vad skiljer?',
        bodyHtml:
          '<p>I innerstadens bostadsrätter ansvarar du för ytskikt och tätskikt, medan föreningen ofta ställer detaljerade krav på bullertider, rivningsanmälan och intyg efter avslutat arbete.</p><p>I villaområden som Bromma och Hässelby har du större frihet, men också fullt ansvar om något blir fel. Därför är BKR-dokumentation lika viktig i villa som i BRF.</p><p>Vi anpassar arbetsmetod, tidplan och avfallshantering utifrån fastighetstyp och adress.</p>',
        imageSrc: '/hagaplattsattningbild1.avif',
        imageAlt:
          'Badrumsrenovering i bostadsrätt i Stockholm med noggrann kakelsättning',
      },
      {
        title: 'Varför tar badrumsrenovering ofta lite längre tid i centrala Stockholm?',
        bodyHtml:
          '<p>Det är sällan själva kakelsättningen som förlängs – det är logistiken runtomkring som styr tempo.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Materialbärning via trapphus utan hiss</li><li>Begränsade arbetstider i BRF (ofta 07–17 vardagar)</li><li>Bokning av hissskydd, garageplats eller containerplats</li><li>Härdningstid för tätskikt mellan arbetsmoment</li></ul><p>Vi bygger alltid in dessa risker i tidsplanen innan start, så att du får realistiska deadlines.</p><div style="padding-top:1rem;"><iframe src="https://widget.reco.se/v2/venues/4532782/horizontal/xlarge?inverted=false&border=true&lang=sv" title="Haga Plattsättning AB - Omdömen på Reco" height="225" style="width:100%;border:0;display:block;overflow:hidden;" data-reactroot loading="lazy"></iframe></div>',
        imageSrc: '/hagaplattsattningbild2.avif',
        imageAlt:
          'Planering av badrumsrenovering i centrala Stockholm med logistik och material',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Planering av badrumsrenovering i Stockholm 2026',
        bodyHtml:
          '<p>Projektets omfattning beror på format, underarbete och detaljnivå. Vi går igenom förutsättningar, dokumentation och arbetsordning innan start så att projektet blir tydligt och genomförbart.</p><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">Kontakta oss för offertförfrågan och projektgenomgång.</p>',
        imageSrc: '/haga%20platts%C3%A4ttning%20bild%204.avif',
        imageAlt:
          'Planering av badrumsrenovering i Stockholm med tydlig offertförfrågan',
      },
      {
        title: 'Materialtrender i Stockholm 2026',
        bodyHtml:
          '<p>Kunder i Stockholm väljer ofta en kombination av funktion, ljusinsläpp och lång livslängd.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Storformat i neutrala toner</strong> – lugnt uttryck och få fogar</li><li><strong>Kontrastnisch i dusch</strong> – markerad zon utan att överbelasta rummet</li><li><strong>Matt klinker på golv</strong> – bättre halkgrepp i vardagsbruk</li><li><strong>Väggnära kommod</strong> – ger luftigare känsla i mindre badrum</li><li><strong>Dolda förvaringar</strong> – minskar visuellt brus i stadslägenheter</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre misstag som ofta gör Stockholmsprojekt dyrare',
        bodyHtml:
          '<p><strong>1. Otydlig offert:</strong> saknas tydlig avgränsning mellan plattsättning, VVS och el blir projektet svårare att styra.</p><p><strong>2. Fel entreprenör för BRF:</strong> om firman inte kan leverera korrekt dokumentation kan projektet stoppas av föreningen.</p><p><strong>3. För sena materialval:</strong> sena beslut om kakel och inredning skapar leveransluckor och stillestånd.</p><p style="margin-top:1rem;"><a href="/offertforfragan/" style="color:#0a0a1a;font-weight:700;">Begär en kostnadsfri offertförfrågan →</a></p>',
        textOnly: true,
      },
      {
        title: 'Steg-för-steg i BRF i Stockholm',
        bodyHtml:
          '<p>En typisk process i Stockholms bostadsrätter ser ut så här:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Hämta BRF:ens renoveringsregler</li><li><strong>Steg 2:</strong> Skicka in anmälan med entreprenörens behörigheter</li><li><strong>Steg 3:</strong> Informera grannar om bullerperiod och tillträde</li><li><strong>Steg 4:</strong> Genomför arbete enligt BBV och dokumentera egenkontroller</li><li><strong>Steg 5:</strong> Leverera kvalitetsdokument efter slutkontroll</li></ul><p>Vill du jämföra med norrort? Se <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a> och <a href="/badrumsrenovering-solna/" style="color:#0a0a1a;font-weight:600;">Solna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Stockholm',
    faqLead:
      'Kortfattade svar om innerstad, BRF-process, tidplan och samordning av hantverkare.',
    faqs: [
      {
        question: 'Arbetar ni i hela Stockholm eller bara innerstan?',
        answer:
          'Vi arbetar i hela Stockholmsregionen, inklusive innerstan, närförorter och norrort. Projektet planeras efter din fastighetstyp och lokala förutsättningar.',
        answerHtml:
          'Vi arbetar i hela Stockholmsregionen, inklusive innerstan, närförorter och norrort. Projektet planeras efter din fastighetstyp och lokala förutsättningar.',
      },
      {
        question: 'Hur långt i förväg bör jag boka badrumsrenovering i Stockholm?',
        answer:
          'I Stockholm är det vanligt med 4–8 veckors planering innan start, särskilt i BRF där anmälan och granninformation måste hinnas med.',
        answerHtml:
          'I Stockholm är det vanligt med 4–8 veckors planering innan start, särskilt i BRF där anmälan och granninformation måste hinnas med.',
      },
      {
        question: 'Kan ni ta totalansvar inklusive VVS och el?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners för VVS och el, så att du har en kontaktväg genom hela projektet.',
        answerHtml:
          'Ja, vi samordnar certifierade samarbetspartners för VVS och el, så att du har en kontaktväg genom hela projektet.',
      },
      {
        question: 'Behöver jag BRF-godkännande innan ni startar?',
        answer:
          'I de flesta bostadsrättsföreningar ja. Vi hjälper dig med underlag, behörighetsintyg och tidplan till styrelsen.',
        answerHtml:
          'I de flesta bostadsrättsföreningar ja. Vi hjälper dig med underlag, behörighetsintyg och tidplan till styrelsen.',
      },
      {
        question: 'Hur planerar man omfattningen för ett badrum i Stockholm?',
        answer:
          'Projektets omfattning beror på storlek, material och om stammar eller underlag behöver åtgärdas.',
        answerHtml:
          'Projektets omfattning beror på storlek, material och om stammar eller underlag behöver åtgärdas.',
      },
      {
        question: 'Hur fungerar ROT-avdraget hos er?',
        answer:
          'Vi drar av ROT direkt på fakturan och hanterar administrationen mot Skatteverket. Enligt gällande regler är avdraget 30 % av arbetskostnaden, förutsatt att du uppfyller villkoren.',
        answerHtml:
          'Vi drar av ROT direkt på fakturan och hanterar administrationen mot Skatteverket. Enligt gällande regler är avdraget 30 % av arbetskostnaden, förutsatt att du uppfyller villkoren.',
      },
      {
        question: 'Kan jag bo kvar hemma under renoveringen?',
        answer:
          'Ja, i de flesta fall. Vi planerar arbetsmomenten så smidigt som möjligt och skapar en tillfällig lösning när toalett eller dusch är ur drift.',
        answerHtml:
          'Ja, i de flesta fall. Vi planerar arbetsmomenten så smidigt som möjligt och skapar en tillfällig lösning när toalett eller dusch är ur drift.',
      },
      {
        question: 'Vad händer om ni hittar fuktskada vid rivning?',
        answer:
          'Vi dokumenterar fyndet direkt, går igenom åtgärdsförslag med dig och uppdaterar offert innan extraarbete påbörjas.',
        answerHtml:
          'Vi dokumenterar fyndet direkt, går igenom åtgärdsförslag med dig och uppdaterar offert innan extraarbete påbörjas.',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering i Stockholm med BKR-behörighet, tydlig projektering och dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering i Stockholm med BKR-behöriga plattsättare och kvalitetsdokument.',
  },
  sollentuna: {
    slug: 'sollentuna',
    city: 'Sollentuna',
    route: '/badrumsrenovering-sollentuna/',
    seo: {
      title: 'Badrumsrenovering Sollentuna | Lokal firma med kontor i kommunen',
      description:
        'Badrumsrenovering i Sollentuna med lokal närvaro på Skyttevägen. BKR-behörighet och tydlig process för BRF, radhus och villa.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-sollentuna/',
      ogTitle: 'Badrumsrenovering Sollentuna – Lokal guide och kvalitet',
      ogDescription:
        'Läs vad badrumsrenovering kostar i Sollentuna och hur vi jobbar lokalt i Tureberg, Edsberg, Häggvik och Norrviken.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_15.avif',
      ogImageAlt: 'Badrumsrenovering i Sollentuna med lokalt team och BKR-behörighet',
      twitterTitle: 'Badrumsrenovering Sollentuna | Haga Plattsättning AB',
      twitterDescription:
        'Lokal badrumsrenovering i Sollentuna med kvalitetsdokument och trygg projektsamordning.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_15.avif',
      geoPlacename: 'Sollentuna',
      geoPosition: '59.4285;17.9493',
      latitude: 59.4285,
      longitude: 17.9493,
    },
    hero: {
      lead:
        'Bor du i Sollentuna och planerar nytt badrum? Vi arbetar dagligen i kommunen och ger dig en tydlig plan för BRF, radhus och villa – med lokala tidsramar och tydlig process.',
      imageSrc: '/hagaplatt_15.avif',
      imageAlt: 'Ljust badrum i Sollentuna med kakel och klinker lagda av certifierad plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Sollentuna – lokalt perspektiv från norrort',
      introHtml:
        'Med kontor på Skyttevägen har vi kort inställelsetid i hela Sollentuna. Det gör planering, platsbesök och uppföljning smidig för dig som bor i till exempel Tureberg, Edsberg, Häggvik eller Norrviken. Se även vårt upplägg för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-solna/" style="color:#0a0a1a;font-weight:600;">Solna</a>.',
    },
    guideBlocks: [
      {
        title: 'Bostadsrätt, radhus eller villa i Sollentuna – olika behov i samma kommun',
        bodyHtml:
          '<p>I Sollentuna är spannet stort mellan föreningar i centrum och villakvarter i ytterdelarna. Bostadstypen styr hur renoveringen bör läggas upp.</p><p>I BRF är process och dokumentation centralt. I radhus och villa blir underlag, ventilation och golvkonstruktion ofta mer avgörande.</p><p>Vi gör alltid en platsanpassad genomgång innan vi ger slutlig projektbild.</p>',
        imageSrc: '/hagaplatt_8.avif',
        imageAlt:
          'Badrumsrenovering i Sollentuna med fokus på bostadsrätt och radhus i norrort',
      },
      {
        title: 'Tidplan i Sollentuna – varför projekt ofta blir mer förutsägbara',
        bodyHtml:
          '<p>Jämfört med innerstan är logistiken ofta enklare i Sollentuna, vilket minskar risken för onödiga stopp.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Enklare angöring för leveranser och avfall</li><li>Kortare transporttid för hantverkare och material</li><li>Mindre risk för parkeringsrelaterade förseningar</li><li>Samma kvalitetskrav på tätskikt och dokumentation som i hela länet</li></ul><p>Vi sätter en realistisk tidplan redan i offertskedet och uppdaterar den löpande under projektet.</p>',
        imageSrc: '/hagaplatt_29.avif',
        imageAlt:
          'Tidsplan för badrumsrenovering i Sollentuna med effektiv logistik och materialflöde',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Planering av badrumsrenovering i Sollentuna 2026',
        bodyHtml:
          '<p>Projektets omfattning i Sollentuna påverkas av bostadstyp, underlag och materialval. Vi går igenom förutsättningar och arbetsordning innan start så att projektet blir tydligt och genomförbart.</p><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">Läs mer om process och genomförande i dialog med oss.</p>',
        imageSrc: '/hagaplatt_18.avif',
        imageAlt:
          'Planering av badrumsrenovering i Sollentuna med tydlig process',
      },
      {
        title: 'Materialval som fungerar bra i Sollentunas bostäder',
        bodyHtml:
          '<p>Vi ser ofta att kunder i Sollentuna prioriterar slitstyrka och enkel skötsel.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Storformat i ljusa nyanser</strong> – visuellt rymligt i mindre badrum</li><li><strong>Klinker med bra R-värde</strong> – tryggare golv i familjebadrum</li><li><strong>Nischlösningar i dusch</strong> – smart förvaring utan extra möbler</li><li><strong>Naturnära toner</strong> – fungerar i både modern och klassisk stil</li><li><strong>Blandning av matta och halvblanka ytor</strong> – balans mellan uttryck och underhåll</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre vanliga fallgropar i Sollentunaprojekt',
        bodyHtml:
          '<p><strong>1. För snabb start utan projektering:</strong> leder ofta till sena ändringar och onödiga kostnader.</p><p><strong>2. Underskattad underlagsrisk i äldre badrum:</strong> fukt och skadad stomme måste hanteras innan nytt tätskikt.</p><p><strong>3. Otydlig samordning mellan yrkesgrupper:</strong> tydlig ordning mellan rivning, VVS, el och plattsättning är avgörande.</p><p style="margin-top:1rem;"><a href="/offertforfragan/" style="color:#0a0a1a;font-weight:700;">Boka kostnadsfri offert för Sollentuna →</a></p>',
        textOnly: true,
      },
      {
        title: 'BRF-process i Sollentuna – så förbereder du dig',
        bodyHtml:
          '<p>För de flesta föreningar i kommunen fungerar detta upplägg bäst:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Begär gällande renoveringspolicy</li><li><strong>Steg 2:</strong> Lämna in komplett anmälan med tidplan</li><li><strong>Steg 3:</strong> Samordna tillträde, skydd och granninformation</li><li><strong>Steg 4:</strong> Genomför renovering enligt BBV</li><li><strong>Steg 5:</strong> Leverera kvalitetsdokument och slutdokumentation</li></ul><p>Behöver du jämföra med andra orter? Se <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-solna/" style="color:#0a0a1a;font-weight:600;">Solna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Sollentuna',
    faqLead:
      'Frågor vi får lokalt i Sollentuna om tidsplan, BRF-krav och hur projektet genomförs steg för steg.',
    faqs: [
      {
        question: 'Utgår ni verkligen från Sollentuna?',
        answer:
          'Ja, vi har kontor på Skyttevägen i Sollentuna och arbetar löpande i hela kommunen.',
        answerHtml:
          'Ja, vi har kontor på Skyttevägen i Sollentuna och arbetar löpande i hela kommunen.',
      },
      {
        question: 'Vilka delar av Sollentuna arbetar ni mest i?',
        answer:
          'Vi har uppdrag i bland annat Tureberg, Edsberg, Häggvik, Norrviken, Rotebro och Helenelund.',
        answerHtml:
          'Vi har uppdrag i bland annat Tureberg, Edsberg, Häggvik, Norrviken, Rotebro och Helenelund.',
      },
      {
        question: 'Hur snabbt kan ni starta ett projekt i Sollentuna?',
        answer:
          'Vanligtvis inom 3–6 veckor beroende på omfattning, materialval och BRF-process om du bor i bostadsrätt.',
        answerHtml:
          'Vanligtvis inom 3–6 veckor beroende på omfattning, materialval och BRF-process om du bor i bostadsrätt.',
      },
      {
        question: 'Behöver jag anmäla renoveringen till min BRF i Sollentuna?',
        answer:
          'Ja, i de flesta föreningar krävs skriftlig anmälan. Vi hjälper dig med bilagor och certifikat.',
        answerHtml:
          'Ja, i de flesta föreningar krävs skriftlig anmälan. Vi hjälper dig med bilagor och certifikat.',
      },
      {
        question: 'Vad kostar ett normalt badrum i Sollentuna?',
        answer:
          'Projektets omfattning beror på yta, material och tekniska åtgärder.',
        answerHtml:
          'Projektets omfattning beror på yta, material och tekniska åtgärder.',
      },
      {
        question: 'Kan ni samordna VVS och el även i Sollentuna?',
        answer:
          'Ja, vi samordnar certifierade underentreprenörer och driver projektet med en tydlig tidslinje.',
        answerHtml:
          'Ja, vi samordnar certifierade underentreprenörer och driver projektet med en tydlig tidslinje.',
      },
      {
        question: 'Kan familjen bo kvar under renoveringen?',
        answer:
          'I de flesta fall ja. Vi planerar arbetsordningen så att vardagen påverkas så lite som möjligt.',
        answerHtml:
          'I de flesta fall ja. Vi planerar arbetsordningen så att vardagen påverkas så lite som möjligt.',
      },
      {
        question: 'Vad händer om dolda fel upptäcks i ett äldre badrum?',
        answer:
          'Vi stoppar arbetet, dokumenterar fynden och går igenom åtgärd med dig innan fortsättning.',
        answerHtml:
          'Vi stoppar arbetet, dokumenterar fynden och går igenom åtgärd med dig innan fortsättning.',
      },
    ],
    footerFocus:
      'Denna sida är anpassad för badrumsrenovering i Sollentuna med lokal närvaro, BKR-behörighet och tydlig process för BRF, radhus och villa.',
    localBusinessDescription:
      'Lokal badrumsrenovering i Sollentuna med BKR-behöriga plattsättare, kvalitetsdokument och tydlig projektledning.',
  },
  solna: {
    slug: 'solna',
    city: 'Solna',
    route: '/badrumsrenovering-solna/',
    seo: {
      title: 'Badrumsrenovering Solna | BRF-specialister',
      description:
        'Badrumsrenovering i Solna för bostadsrätter och villor. BKR-behörig entreprenör, tydlig BRF-process och kvalitetsdokument.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-solna/',
      ogTitle: 'Badrumsrenovering Solna – Trygg BRF-process',
      ogDescription:
        'Lokalt anpassad sida för Solna: tidsplan, BRF-krav och materialval för 2026.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_4.avif',
      ogImageAlt: 'Badrumsrenovering i Solna med modern kakelsättning och dokumenterad kvalitet',
      twitterTitle: 'Badrumsrenovering Solna | Haga Plattsättning AB',
      twitterDescription:
        'Planera badrumsrenovering i Solna med BKR-behörighet och tydliga svar på BRF-frågor.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_4.avif',
      geoPlacename: 'Solna',
      geoPosition: '59.3600;18.0009',
      latitude: 59.36,
      longitude: 18.0009,
    },
    hero: {
      lead:
        'Planerar du badrumsrenovering i Solna? Vi hjälper dig hela vägen med BRF-anmälan, projektering och plattsättning så att slutresultatet blir både snyggt och försäkringsbart.',
      imageSrc: '/hagaplatt_4.avif',
      imageAlt: 'Nytt badrum i Solna med stilrent kakel och precisionslagd klinker',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Solna – guide för BRF, stadsnära villor och nyproduktion',
      introHtml:
        'Solna har en hög andel bostadsrätter och ett brett spann mellan äldre hus och moderna fastigheter. Det gör att badrumsprojekt ofta kräver en noggrann förstudie innan start. Läs även motsvarande sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.',
    },
    guideBlocks: [
      {
        title: 'Solnas bostadsmix påverkar hur badrummet bör renoveras',
        bodyHtml:
          '<p>I Solna är det vanligt med bostadsrätter i Frösunda, Huvudsta och runt Arenastaden, samtidigt som det finns villabebyggelse i delar av kommunen.</p><p>I BRF är korrekt underlag till styrelsen avgörande. I villa är teknisk status på underlag, golvfall och befintliga installationer ofta den stora frågan.</p><p>Vi lägger stor vikt vid förbesiktning så att du får en realistisk plan från dag ett.</p>',
        imageSrc: '/hagaplatt_12.avif',
        imageAlt: 'Badrumsrenovering i Solna bostadsrätt med dokumenterad arbetsprocess',
      },
      {
        title: 'Tidplan i Solna – vanliga orsaker till försening och hur de undviks',
        bodyHtml:
          '<p>I Solna ligger många projekt nära city med hög belastning på logistik och leveranser. Med rätt förberedelser blir projektet stabilt.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Samordna tillträde med BRF och förvaltare i god tid</li><li>Säkerställ leveransfönster för material i trånga områden</li><li>Planera rivning och uttorkning utan att stressa tätskiktsmoment</li><li>Ha beslut om kakel, kommod och blandare klara före start</li></ul><p>Vi arbetar med tydliga milstolpar så att du vet exakt var i processen projektet är.</p>',
        imageSrc: '/hagaplatt_39.avif',
        imageAlt: 'Tidsplanering av badrumsrenovering i Solna med fokus på BRF och leveranser',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Planering av badrumsrenovering i Solna 2026',
        bodyHtml:
          '<p>I Solna påverkas projektets omfattning av bostadstyp, underlag och materialval. Vi planerar arbetsordning och dokumentation innan start för en trygg och tydlig process.</p><p style="font-size:0.82rem;color:#777;margin-top:0.6rem;line-height:1.6;">Kontakta oss för offertförfrågan och projektgenomgång.</p>',
        imageSrc: '/hagaplatt_47.avif',
        imageAlt:
          'Planering av badrumsrenovering i Solna med tydlig offertförfrågan',
      },
      {
        title: 'Material och designval som fungerar i Solna',
        bodyHtml:
          '<p>Många Solnakunder vill kombinera modern design med robust vardagsfunktion.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Greige och varma gråtoner</strong> – trend som skapar lugn och tidlöshet</li><li><strong>Kombination av storformat och accentvägg</strong> – ger karaktär utan visuell oro</li><li><strong>Integrerade nischer</strong> – praktisk förvaring i duschzonen</li><li><strong>Lättstädade ytor</strong> – minskar underhållsbehov i familjebruk</li><li><strong>Balanserad belysning</strong> – viktigt i badrum utan stora fönster</li></ul>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Tre vanliga misstag i badrumsprojekt i Solna',
        bodyHtml:
          '<p><strong>1. För svag BRF-dialog:</strong> sena besked från styrelsen kan flytta hela startdatumet.</p><p><strong>2. Fel ordning på tillval:</strong> om inredning väljs efter rivning uppstår onödigt stillestånd.</p><p><strong>3. Otydlig helhetsplan:</strong> många missar ventilation, VVS eller underlagsåtgärder i planeringen.</p><p style="margin-top:1rem;"><a href="/offertforfragan/" style="color:#0a0a1a;font-weight:700;">Få en tydlig offertförfrågan för badrumsrenovering i Solna →</a></p>',
        textOnly: true,
      },
      {
        title: 'BRF-renovering i Solna – rekommenderad arbetsordning',
        bodyHtml:
          '<p>Så här ser en välfungerande process ut för de flesta föreningar i Solna:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Steg 1:</strong> Kontrollera BRF:ens krav på entreprenör och dokument</li><li><strong>Steg 2:</strong> Skicka in komplett anmälan med tidplan</li><li><strong>Steg 3:</strong> Fastställ arbetsfönster och praktisk tillgång</li><li><strong>Steg 4:</strong> Genomför renoveringen med löpande egenkontroller</li><li><strong>Steg 5:</strong> Lämna kvalitetsdokument till dig och föreningen</li></ul><p>Om du även överväger projekt i närliggande orter, se <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Solna',
    faqLead:
      'Svar på frågor från boende i Solna om BRF-krav, tidplan och vad som krävs för ett försäkringsgodkänt badrum.',
    faqs: [
      {
        question: 'Renoverar ni badrum i hela Solna kommun?',
        answer:
          'Ja, vi tar uppdrag i hela Solna inklusive Huvudsta, Frösunda, Råsunda, Bergshamra och Arenastaden.',
        answerHtml:
          'Ja, vi tar uppdrag i hela Solna inklusive Huvudsta, Frösunda, Råsunda, Bergshamra och Arenastaden.',
      },
      {
        question: 'Hur fungerar badrumsrenovering i BRF i Solna?',
        answer:
          'Projektet börjar med BRF-anmälan, sedan tidplan, genomförande och slutlig dokumentation. Vi stöttar dig i varje steg.',
        answerHtml:
          'Projektet börjar med BRF-anmälan, sedan tidplan, genomförande och slutlig dokumentation. Vi stöttar dig i varje steg.',
      },
      {
        question: 'Vad är en vanlig tidsram för badrum i Solna?',
        answer:
          'De flesta projekt ligger mellan 2 och 4 veckor beroende på omfattning, logistik och eventuella tillkommande åtgärder.',
        answerHtml:
          'De flesta projekt ligger mellan 2 och 4 veckor beroende på omfattning, logistik och eventuella tillkommande åtgärder.',
      },
      {
        question: 'Vad kostar badrumsrenovering i Solna totalt?',
        answer:
          'Projektets omfattning varierar beroende på storlek och valda produkter.',
        answerHtml:
          'Projektets omfattning varierar beroende på storlek och valda produkter.',
      },
      {
        question: 'Kan ni hjälpa till om min förening kräver extra dokumentation?',
        answer:
          'Ja, vi levererar de handlingar som normalt efterfrågas, inklusive behörighetsuppgifter och kvalitetsdokument.',
        answerHtml:
          'Ja, vi levererar de handlingar som normalt efterfrågas, inklusive behörighetsuppgifter och kvalitetsdokument.',
      },
      {
        question: 'Gör ni en fastprisoffert innan start?',
        answer:
          'Ja, du får en tydlig offert med omfattning, avgränsningar och preliminär tidsplan innan arbetet startar.',
        answerHtml:
          'Ja, du får en tydlig offert med omfattning, avgränsningar och preliminär tidsplan innan arbetet startar.',
      },
      {
        question: 'Kan ni samordna allting inklusive VVS och el i Solna?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners så att du slipper hantera flera parallella entreprenörer.',
        answerHtml:
          'Ja, vi samordnar certifierade samarbetspartners så att du slipper hantera flera parallella entreprenörer.',
      },
      {
        question: 'Vad händer vid fuktskada eller annat dolt fel?',
        answer:
          'Vi dokumenterar direkt, visar vad som behövs och inväntar ditt godkännande innan tilläggsarbete startar.',
        answerHtml:
          'Vi dokumenterar direkt, visar vad som behövs och inväntar ditt godkännande innan tilläggsarbete startar.',
      },
    ],
    footerFocus:
      'Denna sida är framtagen för badrumsrenovering i Solna med tydlig BRF-process och dokumenterad kvalitet genom hela projektet.',
    localBusinessDescription:
      'Badrumsrenovering i Solna med BKR-behöriga plattsättare, tydliga offerter och kvalitetssäkrad leverans.',
  },
  lidingo: {
    slug: 'lidingo',
    city: 'Lidingö',
    route: '/badrumsrenovering-lidingo/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'BKR-behörig kakelsättare på Lidingö med dokumenterad våtrumsprocess',
    seo: {
      title: 'Badrumsrenovering Lidingö – BKR-behörig Plattsättare med Våtrumsintyg | Haga Plattsättning AB',
      description:
        'Badrumsrenovering på Lidingö med BKR-behörig plattsättare. Komplett process från offertförfrågan till kvalitetsdokument enligt BBV — för villa, radhus och bostadsrätt på hela Lidingö.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-lidingo/',
      ogTitle: 'Badrumsrenovering Lidingö – BKR-behörighet och Våtrumsintyg',
      ogDescription:
        'Badrumsrenovering på Lidingö med BKR-behörighet, BBV-dokumentation och våtrumsintyg. Tydlig process för villa, radhus och bostadsrätt.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_22.avif',
      ogImageAlt: 'Modernt badrum på Lidingö med kakel av certifierad plattsättare',
      twitterTitle: 'Badrumsrenovering Lidingö – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering på Lidingö med BKR-behörighet, våtrumsintyg och kvalitetsdokument enligt BBV.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_22.avif',
      geoPlacename: 'Lidingö',
      geoPosition: '59.3624;18.1380',
      latitude: 59.3624,
      longitude: 18.1380,
    },
    hero: {
      lead:
        'Bor du på Lidingö och planerar nytt badrum? Vi arbetar regelbundet i kommunen och anpassar processen efter villor i Bodal, Skärsätra, Käppala, Brevik och centrala Lidingö — med tydlig logistik från fastlandet och kvalitetsdokument enligt BBV.',
      imageSrc: '/hagaplatt_22.avif',
      imageAlt: 'Modernt badrum renoverat på Lidingö med kakel och klinker av BKR-behörig plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering på Lidingö – från villa till bostadsrätt',
      introHtml:
        'Lidingö är en av Stockholms mest villatäta kommuner. Många hus från 60- och 70-talet har originaltätskikt som närmar sig slutet av sin livslängd. Vi arbetar regelbundet i Bodal, Skärsätra, Käppala och Brevik och anpassar processen efter villa, radhus och bostadsrätt. Jämför även med våra sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.',
    },
    guideBlocks: [
      {
        title: 'Villor, BRF och radhus på Lidingö – vad skiljer sig åt?',
        bodyHtml:
          '<p>Lidingö är till stor del villabebyggelse. Det betyder att vi oftare möter äldre tätskikt, originalrör i gjutjärn och äldre golvbrunnar än i innerstaden. Bostadsrätter finns främst i centrala Lidingö och kräver styrelseanmälan och tydlig dokumentation precis som i andra kommuner.</p><p>Radhus och kedjehus i exempelvis Bodal och Skärsätra har gemensamma väggar, vilket gör ljud- och bullerplanering viktigt under rivningsfasen. Vi går igenom byggåret, originallösningar och eventuella tidigare renoveringar innan vi sätter slutgiltig tidplan.</p>',
        imageSrc: '/hagaplatt_10.avif',
        imageAlt: 'Renoverat badrum i villa på Lidingö med ljust kakel och fokus på tätskikt enligt BBV',
      },
      {
        title: 'Logistik från fastlandet – så påverkar Lidingöbron tidsplanen',
        bodyHtml:
          '<p>Lidingöbron är enda fordonsförbindelsen från fastlandet och påverkar både materialleveranser och hantverkartillgång. Vi planerar leveranser utanför rusningstid och samordnar avfallshämtning på fasta dagar för att undvika väntetider på bron.</p><p>Vintertid bör projekt med utomhusarbete tidigareläggas eller flyttas till vår och sommar — vi gör en realistisk vinterbedömning redan vid offert. För dig som bor i Brevik eller Käppala lägger vi ofta arbetet i längre sammanhängande pass för att minimera transporter över bron.</p>',
        imageSrc: '/hagaplatt_27.avif',
        imageAlt: 'Materialleverans till badrumsrenovering på Lidingö med logistik via Lidingöbron',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'När är det dags att renovera badrummet på Lidingö?',
        bodyHtml:
          '<p>Branschriktlinjerna säger att tätskikt bör hålla minst 25 år, men på Lidingö ser vi ofta originalbadrum från 60- och 70-talet som närmar sig 50 år. Det finns ingen lag som tvingar dig att renovera vid en viss ålder, men efter 30 år ökar risken för läckage och fuktskada markant.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Synliga sprickor i fog eller kakel</li><li>Lukter eller missfärgningar nära golvbrunn</li><li>Originaltätskikt utan dokumentation</li><li>Avlopp som rinner trögt eller bubblar</li><li>Bostadsrätt äldre än 30 år utan renoveringshistorik</li></ul><p>Vid försäljning ger ett dokumenterat och nyrenoverat badrum både värdehöjning och en tryggare affär — något som betonas av många mäklare på Lidingö.</p>',
        textOnly: true,
      },
      {
        title: 'Är det värt att renovera badrumet inför försäljning på Lidingö?',
        bodyHtml:
          '<p>Ja, om badrummet är slitet eller äldre. Lidingö är en attraktiv bostadsmarknad där köpare ofta är beredda att betala mer för en bostad som inte kräver omedelbar renovering. Ett dokumenterat och BKR-utfört badrum signalerar trygghet och minskar risken för prisförhandling vid besiktning.</p><p>Det viktiga är inte att välja det dyraste materialet, utan att slutresultatet matchar bostadens nivå och har korrekt dokumentation enligt BBV. Vi tar fram en plan tillsammans med dig som tar hänsyn till bostadstyp och målgrupp för försäljningen.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Våtrumsmatta eller kakel – vad fungerar bäst på Lidingö?',
        bodyHtml:
          '<p>Båda lösningarna är godkända enligt BBV, men de har olika styrkor.</p><p><strong>Kakel och klinker</strong> är slitstarkt, tål fukt utomordentligt och har lång livslängd — typiskt 25–40 år vid korrekt utförande. Kakel ger också mer designfrihet och är ofta att föredra i villor och bostadsrätter där renoveringen ska hålla över tid.</p><p><strong>Våtrumsmatta</strong> är snabbare att lägga och fungerar bra som lösning i hyresrätter eller mindre toalettutrymmen. Den är dock känsligare för slitage och behöver oftast bytas tidigare.</p><p>För boende på Lidingö som planerar att bo kvar länge eller sälja inom några år rekommenderar vi nästan alltid kakel — både för värdebeständighet och för det visuella uttrycket.</p>',
        imageSrc: '/hagaplatt_29.avif',
        imageAlt: 'Detaljbild på kakel och klinker i badrumsrenovering på Lidingö',
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering på Lidingö',
    faqLead:
      'Frågor vi ofta får från boende på Lidingö om livslängd, försäljning och materialval — med svar baserade på BBV och vår erfarenhet i kommunen.',
    faqs: [
      {
        question: 'Måste man renovera badrum efter 20 år?',
        answer:
          'Det finns ingen lag som kräver renovering efter 20 år, men efter den tiden börjar tätskiktet närma sig sin förväntade livslängd. Vid 20 år rekommenderar vi en oberoende fuktbesiktning innan beslut tas — om tätskiktet är dokumenterat och i gott skick kan badrummet fortsätta användas, men risken för läckage ökar med åren.',
        answerHtml:
          '<p>Det finns ingen lag som kräver renovering efter 20 år, men efter den tiden börjar tätskiktet närma sig sin förväntade livslängd. Vid 20 år rekommenderar vi en oberoende fuktbesiktning innan beslut tas — om tätskiktet är dokumenterat och i gott skick kan badrummet fortsätta användas, men risken för läckage ökar med åren.</p>',
      },
      {
        question: 'Måste man renovera badrum efter 30 år?',
        answer:
          'Efter 30 år är tätskiktet i de flesta originalbadrum förbi sin förväntade livslängd, även med god underhåll. Försäkringsbolag kan minska eller neka ersättning vid fuktskada om badrummet är äldre än 30 år utan dokumenterat tätskiktsbyte. Vi rekommenderar att du tar in en BKR-behörig firma för bedömning innan eventuella problem uppstår.',
        answerHtml:
          '<p>Efter 30 år är tätskiktet i de flesta originalbadrum förbi sin förväntade livslängd, även med god underhåll. Försäkringsbolag kan minska eller neka ersättning vid fuktskada om badrummet är äldre än 30 år utan dokumenterat tätskiktsbyte. Vi rekommenderar att du tar in en BKR-behörig firma för bedömning innan eventuella problem uppstår.</p>',
      },
      {
        question: 'När räknas ett badrum som gammalt?',
        answer:
          'I praktiken räknas ett badrum som "gammalt" när tätskiktet har uppnått sin förväntade livslängd — för moderna lösningar är det 25 år, för äldre badrum från 60- och 70-talet ofta tidigare. Synliga tecken är spruckna fogar, missfärgningar nära golvbrunn, lukt eller bubblande avlopp. Saknas dokumentation av tätskiktet bedöms badrummet som äldre oavsett synligt skick.',
        answerHtml:
          '<p>I praktiken räknas ett badrum som "gammalt" när tätskiktet har uppnått sin förväntade livslängd — för moderna lösningar är det 25 år, för äldre badrum från 60- och 70-talet ofta tidigare. Synliga tecken är spruckna fogar, missfärgningar nära golvbrunn, lukt eller bubblande avlopp. Saknas dokumentation av tätskiktet bedöms badrummet som äldre oavsett synligt skick.</p>',
      },
      {
        question: 'Är det värt att renovera badrum inför försäljning på Lidingö?',
        answer:
          'Ja, i de flesta fall. Lidingö är en attraktiv marknad där ett dokumenterat och nyrenoverat badrum både höjer slutpriset och minskar risken för prisförhandling vid besiktning. Det viktigaste är att utförandet är BKR-dokumenterat enligt BBV — det är vad besiktningsmän och försäkringsbolag faktiskt frågar efter.',
        answerHtml:
          '<p>Ja, i de flesta fall. Lidingö är en attraktiv marknad där ett dokumenterat och nyrenoverat badrum både höjer slutpriset och minskar risken för prisförhandling vid besiktning. Det viktigaste är att utförandet är BKR-dokumenterat enligt BBV — det är vad besiktningsmän och försäkringsbolag faktiskt frågar efter.</p>',
      },
      {
        question: 'Vad är skillnaden mellan våtrumsmatta och kakel?',
        answer:
          'Båda är godkända enligt BBV men har olika styrkor. Kakel och klinker är slitstarkt, har lång livslängd (25–40 år) och ger designfrihet — det vanliga valet i villor och bostadsrätter. Våtrumsmatta är snabbare att lägga och fungerar bra i hyresrätter eller mindre toalettutrymmen, men är känsligare för slitage och behöver oftast bytas tidigare.',
        answerHtml:
          '<p>Båda är godkända enligt BBV men har olika styrkor. Kakel och klinker är slitstarkt, har lång livslängd (25–40 år) och ger designfrihet — det vanliga valet i villor och bostadsrätter. Våtrumsmatta är snabbare att lägga och fungerar bra i hyresrätter eller mindre toalettutrymmen, men är känsligare för slitage och behöver oftast bytas tidigare.</p>',
      },
    ],
    reviews: [
      {
        author: 'Edit W',
        date: '2026-04-08',
        rating: 5,
        text: 'Otroligt bra upplevelse, de visade stort engagemang i vårt projekt redan från start. Var både följsamma och flexibla med våra önskemål, men också drivande och initiativtagande med egna förbättringar och lösningar.',
      },
      {
        author: 'Fredrik E',
        date: '2025-12-12',
        rating: 5,
        text: 'Väl utfört arbete i tid och på budget.',
      },
      {
        author: 'Eloise K',
        date: '2025-11-09',
        rating: 5,
        text: 'Vi är så nöjda med vår badrumsrenovering. Snabba, effektiva och professionella!',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering på Lidingö med BKR-behörighet, lokal logistikkännedom och dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering på Lidingö med BKR-behöriga plattsättare och kvalitetsdokument enligt BBV.',
  },
  nacka: {
    slug: 'nacka',
    city: 'Nacka',
    route: '/badrumsrenovering-nacka/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'BKR-behörig kakelsättare i Nacka med dokumenterad våtrumsprocess',
    seo: {
      title: 'Badrumsrenovering Nacka – BKR-behörig Plattsättare med Våtrumsintyg | Haga Plattsättning AB',
      description:
        'Badrumsrenovering i Nacka med BKR-behörig plattsättare. Komplett process från offertförfrågan till kvalitetsdokument enligt BBV — för villa, radhus och bostadsrätt i Saltsjö-Boo, Sicklaön och centrala Nacka.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-nacka/',
      ogTitle: 'Badrumsrenovering Nacka – BKR-behörighet och Våtrumsintyg',
      ogDescription:
        'Badrumsrenovering i Nacka med BKR-behörighet, BBV-dokumentation och våtrumsintyg. Tydlig process för villa, radhus och bostadsrätt.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_3.avif',
      ogImageAlt: 'Badrumsrenovering i Nacka med certifierad plattsättning och kakel',
      twitterTitle: 'Badrumsrenovering Nacka – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering i Nacka med BKR-behörighet, våtrumsintyg och kvalitetsdokument enligt BBV.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_3.avif',
      geoPlacename: 'Nacka',
      geoPosition: '59.3105;18.1640',
      latitude: 59.3105,
      longitude: 18.1640,
    },
    hero: {
      lead:
        'Bor du i Nacka och planerar nytt badrum? Vi arbetar regelbundet i kommunen och anpassar processen efter villor i Saltsjö-Boo, modern bebyggelse i Sicklaön och bostadsrätter i centrala Nacka — med tydlig logistik och kvalitetsdokument enligt BBV.',
      imageSrc: '/hagaplatt_3.avif',
      imageAlt: 'Modernt badrum renoverat i Nacka med kakel och klinker av BKR-behörig plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Nacka – från äldre villor till ny bebyggelse',
      introHtml:
        'Nacka är en kommun med stort spann mellan äldre villabebyggelse i Saltsjö-Boo och modern nyproduktion i Sicklaön. Det betyder att badrumsrenovering kräver lokal kunskap om olika fastighetstyper, konstruktioner och inte minst logistiken på Värmdöleden. Vi arbetar regelbundet på Nacka Strand, Sickla, Finntorp, Boo och Älta och anpassar processen efter villa, radhus och bostadsrätt. Jämför även med våra sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-lidingo/" style="color:#0a0a1a;font-weight:600;">Lidingö</a>.',
    },
    guideBlocks: [
      {
        title: 'Äldre villor i Saltsjö-Boo vs nybyggnation i Sicklaön – vad skiljer sig?',
        bodyHtml:
          '<p>Saltsjö-Boo har många villor från 60- och 70-talet med originaltätskikt som börjar närma sig slutet av sin livslängd. I dessa hus möter vi ofta äldre golvbrunnar, original gjutjärnsrör och behov av grundlig underlagsanalys innan nytt tätskikt läggs.</p><p>Sicklaön, särskilt områden som Nacka Strand, har nyare bebyggelse från 1990-tal och framåt — ofta moderna bostadsrätter med strängare krav från föreningen på dokumentation och arbetsmiljö.</p><p>Vi gör alltid en platsanpassad genomgång och tar hänsyn till både fastighetstyp, ålder och lokala förutsättningar innan vi sätter slutgiltig tidplan och arbetsordning.</p>',
        imageSrc: '/hagaplatt_5.avif',
        imageAlt: 'Renoverat badrum i villa Saltsjö-Boo med fokus på tätskikt enligt BBV',
      },
      {
        title: 'Logistik på Värmdöleden – så planerar vi leveranser och tillträde',
        bodyHtml:
          '<p>Värmdöleden är huvudvägen in i Nacka och påverkar både materialleveranser och hantverkartillgång, särskilt under rusning. För projekt i Sicklaön och på Nacka Strand samordnar vi leveranser på fasta tider och bokar nödvändiga parkeringsplatser tidigt tillsammans med föreningen eller husägaren.</p><p>I nyare BRF är det ofta höga krav på skydd av gemensamma ytor, bokning av hissar och begränsade arbetstider — vi bygger detta in i planeringen från dag ett. För villor i Boo och Älta har vi mer flexibilitet, men vi planerar ändå transporter effektivt för att minimera påverkan.</p><p>Det låter enkelt, men många projekt försenas för att logistiken inte planerades ordentligt. Vi gör det motsatta.</p>',
        imageSrc: '/hagaplatt_6.avif',
        imageAlt: 'Materialleverans och logistik till badrumsrenovering i Nacka',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'När är det dags att renovera badrummet i Nacka?',
        bodyHtml:
          '<p>Branschriktlinjerna säger att tätskikt bör hålla minst 25 år, men på Nacka ser vi två olika mönster. I äldre villor i Saltsjö-Boo är det ofta originalbadrum från 60- och 70-talet som närmar sig 50 år — där är risken för läckage och fuktskada betydligt högre. I nyare områden som Nacka Strand är det snarare fråga om att planera renovering inför försäljning eller en uppdatering av stilen.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Synliga sprickor i fog eller kakel</li><li>Lukter eller missfärgningar nära golvbrunn</li><li>Originaltätskikt utan dokumentation</li><li>Avlopp som rinner trögt eller bubblar</li><li>Badrum äldre än 25 år utan renoveringshistorik</li><li>Planerad försäljning inom ett till två år</li></ul><p>Vid försäljning ger ett dokumenterat och nyrenoverat badrum både värdehöjning och en tryggare affär — något som ofta betonas av mäklare i attraktiva områden som Nacka.</p>',
        textOnly: true,
      },
      {
        title: 'Är det värt att renovera badrumet inför försäljning i Nacka?',
        bodyHtml:
          '<p>Ja, i de flesta fall. Nacka är en attraktiv bostadsmarknad med höga värderingar, och ett dokumenterat, nyrenoverat badrum signalerar trygghet till köpare — både för villor i Saltsjö-Boo och bostadsrätter på Nacka Strand. En besiktning som hittar dolda fuktskador kan bli mycket dyr; ett nyrenoverat badrum med BBV-dokumentation eliminerar den risken.</p><p>Det viktigaste är inte att välja det dyraste materialet, utan att slutresultatet matchar bostadens nivå och är korrekt dokumenterat enligt BBV. Vi tar fram en plan tillsammans med dig som beaktar bostadstyp, område och målgrupp för köparna.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Kakel eller våtrumsmatta – vilket fungerar bäst i Nacka?',
        bodyHtml:
          '<p>Båda lösningarna är godkända enligt BBV, men de passar olika situationer.</p><p><strong>Kakel och klinker</strong> är slitstarkt, tål fukt utomordentligt och har lång livslängd — typiskt 25–40 år vid korrekt utförande. Kakel ger också fri designvariering och är det naturliga valet i villor och bostadsrätter på Nacka där renoveringen ska hålla långt framöver eller inför försäljning. I områden nära havet — som Sicklaön och Nacka Strand — är kakel extra lämpligt för sin långsiktiga hållbarhet.</p><p><strong>Våtrumsmatta</strong> är snabbare att lägga och fungerar bra som lösning i mindre toalettutrymmen eller hyresrätter. Den är dock känsligare för slitage och behöver oftast bytas tidigare än kakel.</p><p>För invånare i Nacka som planerar att bo kvar länge eller sälja inom några år rekommenderar vi nästan alltid kakel — för värdebeständighet, hållbarhet och det visuella uttrycket.</p>',
        imageSrc: '/hagaplatt_12.avif',
        imageAlt: 'Detalj på kakel och klinker i badrumsrenovering i Nacka',
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Nacka',
    faqLead:
      'Frågor vi ofta får från boende i Nacka om livslängd, försäljning, materialval och logistik — med svar baserade på BBV och vår erfarenhet i kommunen.',
    faqs: [
      {
        question: 'Arbetar ni i hela Nacka eller bara vissa områden?',
        answer:
          'Vi arbetar i hela Nacka kommun, inklusive Saltsjö-Boo, Sicklaön (Nacka Strand, Sickla, Finntorp), Boo, Älta och centrala Nacka. Vi har lokal kunskap om både äldre villor och ny bebyggelse.',
        answerHtml:
          '<p>Vi arbetar i hela Nacka kommun, inklusive Saltsjö-Boo, Sicklaön (Nacka Strand, Sickla, Finntorp), Boo, Älta och centrala Nacka. Vi har lokal kunskap om både äldre villor och ny bebyggelse.</p>',
      },
      {
        question: 'Hur påverkar Värmdöleden tidsplanen för badrumsrenovering?',
        answer:
          'Värmdöleden påverkar leveranstider och hantverkartillgång, särskilt under rusning. Vi planerar materialleveranser på fasta tider och bokar parkeringsplatser tidigt. Detta är redan medräknat i vår offert, så du får en realistisk tidplan från start.',
        answerHtml:
          '<p>Värmdöleden påverkar leveranstider och hantverkartillgång, särskilt under rusning. Vi planerar materialleveranser på fasta tider och bokar parkeringsplatser tidigt. Detta är redan medräknat i vår offert, så du får en realistisk tidplan från start.</p>',
      },
      {
        question: 'Är det stor skillnad mellan renovering i villa och BRF i Nacka?',
        answer:
          'Ja. I villor i Saltsjö-Boo har du större frihet och fullt ansvar. I BRF på Nacka Strand och Sicklaön är det ofta strängare krav på dokumentation, arbetstider och avgränsning av gemensamma ytor. Vi anpassar processen efter fastighetstyp.',
        answerHtml:
          '<p>Ja. I villor i Saltsjö-Boo har du större frihet och fullt ansvar. I BRF på Nacka Strand och Sicklaön är det ofta strängare krav på dokumentation, arbetstider och avgränsning av gemensamma ytor. Vi anpassar processen efter fastighetstyp.</p>',
      },
      {
        question: 'Måste man renovera badrum efter 20 eller 25 år i Nacka?',
        answer:
          'Det finns ingen lag som kräver renovering efter exakt 20 år. Men efter cirka 25 år börjar ett modernt tätskikt närma sig slutet av sin förväntade livslängd. För originalbadrum från 60- och 70-talet i Saltsjö-Boo kan risken för läckage öka redan tidigare. Vi rekommenderar en besiktning innan problemet uppstår.',
        answerHtml:
          '<p>Det finns ingen lag som kräver renovering efter exakt 20 år. Men efter cirka 25 år börjar ett modernt tätskikt närma sig slutet av sin förväntade livslängd. För originalbadrum från 60- och 70-talet i Saltsjö-Boo kan risken för läckage öka redan tidigare. Vi rekommenderar en besiktning innan problemet uppstår.</p>',
      },
      {
        question: 'Är kakel eller våtrumsmatta bäst inför försäljning i Nacka?',
        answer:
          'Kakel är starkt rekommenderat inför försäljning. Det signalerar kvalitet och långvarighet, vilket köpare värderar högt i områden som Nacka. Kakel håller 25–40 år medan våtrumsmatta oftast byts tidigare. För försäljning är kakel nästan alltid valet.',
        answerHtml:
          '<p>Kakel är starkt rekommenderat inför försäljning. Det signalerar kvalitet och långvarighet, vilket köpare värderar högt i områden som Nacka. Kakel håller 25–40 år medan våtrumsmatta oftast byts tidigare. För försäljning är kakel nästan alltid valet.</p>',
      },
    ],
    reviews: [
      {
        author: 'Amaton A',
        date: '2026-04-07',
        rating: 5,
        text: 'Vi är nöjda med Hagaplattsättning. Allt ifrån kundservice, hantverket och bemötande.',
      },
      {
        author: 'Carin R',
        date: '2025-10-15',
        rating: 5,
        text: 'Ett badrum i världsklass – snyggt, funktionellt och med fina detaljer.',
      },
      {
        author: 'Mia C',
        date: '2025-05-11',
        rating: 5,
        text: 'Supertrevliga att ha att göra med och väldigt pålitliga och professionella!',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering i Nacka med BKR-behörighet, lokal kunskap om Saltsjö-Boo och Sicklaön, och dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering i Nacka med BKR-behöriga plattsättare och kvalitetsdokument enligt BBV.',
  },
  taby: {
    slug: 'taby',
    city: 'Täby',
    route: '/badrumsrenovering-taby/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'BKR-behörig kakelsättare i Täby med dokumenterad våtrumsprocess',
    seo: {
      title: 'Badrumsrenovering Täby – BKR-behörig Plattsättare med Våtrumsintyg | Haga Plattsättning AB',
      description:
        'Badrumsrenovering i Täby med BKR-behörig plattsättare. Komplett process från offertförfrågan till kvalitetsdokument enligt BBV — för villa, radhus och bostadsrätt i hela Täby.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-taby/',
      ogTitle: 'Badrumsrenovering Täby – BKR-behörighet och Våtrumsintyg',
      ogDescription:
        'Badrumsrenovering i Täby med BKR-behörighet, BBV-dokumentation och våtrumsintyg. Tydlig process för villa, radhus och bostadsrätt.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_13.avif',
      ogImageAlt: 'Badrumsrenovering i Täby med kakel av certifierad plattsättare',
      twitterTitle: 'Badrumsrenovering Täby – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering i Täby med BKR-behörighet, våtrumsintyg och kvalitetsdokument enligt BBV.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_13.avif',
      geoPlacename: 'Täby',
      geoPosition: '59.4439;18.0686',
      latitude: 59.4439,
      longitude: 18.0686,
    },
    hero: {
      lead:
        'Bor du i Täby och planerar badrumsrenovering? Vi arbetar regelbundet i kommunen och anpassar processen efter stora villor i Näsby Park, radhus i Roslags-Näsby och moderna BRF — med tydlig logistik och kvalitetsdokument enligt BBV.',
      imageSrc: '/hagaplatt_13.avif',
      imageAlt: 'Modernt badrum renoverat i Täby med kakel och klinker av BKR-behörig plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Täby – från villan i Näsby Park till centrum',
      introHtml:
        'Täby är en stor familjekommun nordöst om Stockholm med allt från stora 60–80-talsvillor till moderna BRF runt Täby Centrum. Många hus närmar sig sitt första större badrumsbyte. Vi arbetar regelbundet i Näsby Park, Roslags-Näsby, Skarpäng och centrala Täby, och anpassar processen efter fastighetstyp och lokal logistik. Jämför även med våra sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.',
    },
    guideBlocks: [
      {
        title: 'Villor, radhus och nybyggnation i Täby – vad skiljer sig åt?',
        bodyHtml:
          '<p>Täby har ett brett spektrum av bostadstyper. Stora villor i Näsby Park och Näsby Strand från 1960–80-talet är ofta mycket slitna i originalbadrum och utgör en stor del av våra uppdrag. Radhus och kedjehus i exempelvis Roslags-Näsby har gemensamma väggar, vilket gör ljud- och bullerplanering viktigt under rivningsfasen.</p><p>Modern nyproduktion i Täby Centrum-området (BRF och hyresrätter från 2000-tal framåt) kräver styrelseanmälan och tydlig dokumentation precis som i andra delar av Stockholm. Vi går igenom byggåret, originallösningar och tidigare renoveringshistorik innan vi sätter slutgiltig tidplan.</p>',
        imageSrc: '/hagaplatt_20.avif',
        imageAlt: 'Renoverat badrum i villa i Täby med modern kakelsättning och fokus på tätskikt enligt BBV',
      },
      {
        title: 'Roslagsbanan och logistik – så påverkar infrastrukturen tidsplanen i Täby',
        bodyHtml:
          '<p>Täby har god kommunikation med både Roslagsbanan (pendling från flera stationer) och bussar mot Stockholm. Det innebär ofta god tillgänglighet för hantverkare och leveranser jämfört med mer perifera områden — vi kan vanligtvis schemalägga projekt med förutsägbar mobilitet.</p><p>Parkeringsutrymme och tillträde varierar mycket mellan villan i Näsby Park (ofta egen uppfart, större arbetsutrymme) och moderna bostadsrätter nära centrum (trångt, bokning av hissskydd och gemensamma utrymmen). Vi gör en realistisk logistikbedömning redan vid offert så du vet exakt vilka begränsningar som gäller för just din adress.</p>',
        imageSrc: '/hagaplatt_25.avif',
        imageAlt: 'Tidsplanering av badrumsrenovering i Täby med fokus på infrastruktur och materialflöde',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'När är det dags att renovera badrummet i Täby?',
        bodyHtml:
          '<p>Branschriktlinjerna säger att tätskikt bör hålla minst 25 år, men många originalbadrum i Täby från 1960–70-talet närmar sig eller har passerat 50 år. Det finns ingen lag som tvingar dig att renovera vid en viss ålder, men efter 30 år ökar risken för läckage och fuktskada markant.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Synliga sprickor i fog eller kakel</li><li>Lukter eller missfärgningar nära golvbrunn</li><li>Originaltätskikt utan dokumentation</li><li>Avlopp som rinner trögt eller bubblar under dusch</li><li>Slamningsliknande ljud från väggarna</li><li>Försäljning inom några år (värdeökning och tryggare affär)</li></ul><p>Många hus i Näsby Park och Näsby Strand är redan i sin andra eller tredje renoveringscykel — ett tecken på att gott underhåll och säker tätning lönar sig långsiktigt.</p>',
        textOnly: true,
      },
      {
        title: 'Värt att renovera badrumet inför försäljning i Täby Centrum-området?',
        bodyHtml:
          '<p>Ja, om badrummet är slitet eller äldre. Täby är en attraktiv bostadsmarknad där köpare ofta är beredda att betala mer för en bostad som inte kräver omedelbar renovering. Ett dokumenterat och BKR-utfört badrum signalerar trygghet och minskar risken för prisförhandling vid besiktning.</p><p>Det viktiga är inte att välja det dyraste materialet, utan att slutresultatet matchar bostadens nivå och har korrekt dokumentation enligt BBV. Vi tar fram en plan tillsammans med dig som tar hänsyn till bostadstyp — stort villabadrum kräver andra lösningar än trånga 1990-talsbadrum i mindre radhus.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Materialval för familjebadrum i Täby – hållbarhet och design',
        bodyHtml:
          '<p>Täby är en familjekommun, och många kunder här prioriterar slitstyrka och enkel skötsel framför trendiga lösningar.</p><p><strong>Kakel och klinker</strong> är ofta förstahandsvalet: slitstarkt, tål fukt utomordentligt, lång livslängd (25–40 år vid korrekt utförande). Kakel ger också designfrihet och är vanligt i allt från äldre villabadrum till moderna BRF-renoveringar — ofta med storformat i neutrala toner för lugnt uttryck.</p><p><strong>Material som fungerar bra i Täby:</strong></p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Matt klinker på golv</strong> — bättre halkgrepp i familjebruk med barn och äldre</li><li><strong>Kontrastnisch i dusch</strong> — markerad zon utan att överbelasta mindre badrum</li><li><strong>Vägghängd kommod eller väggfasta lösningar</strong> — ger luftigare känsla i många äldre villabadrum</li><li><strong>Dolda förvaringar</strong> — minskar visuellt brus i mindre utrymmen</li><li><strong>Blandning av matta och halvblanka ytor</strong> — balans mellan uttryck och underhåll</li></ul><p>Vi hjälper dig välja material som både passar hemmet och håller under många år av familjebruk.</p>',
        imageSrc: '/hagaplatt_39.avif',
        imageAlt: 'Detaljbild på materialval i badrumsrenovering i Täby — kakel, klinker och design',
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Täby',
    faqLead:
      'Frågor vi ofta får från boende i Täby om tätskikt, materialval, försäljning och när det är dags att renovera.',
    faqs: [
      {
        question: 'Måste man renovera badrum efter 20 år?',
        answer:
          'Det finns ingen lag som kräver renovering efter 20 år, men efter den tiden börjar tätskiktet närma sig sin förväntade livslängd. Vi rekommenderar en oberoende fuktbesiktning — om tätskiktet är dokumenterat och i gott skick kan badrummet fortsätta användas, men risken för läckage ökar. Efter 30 år är många originalbadrum förbi sin förväntade livslängd.',
        answerHtml:
          '<p>Det finns ingen lag som kräver renovering efter 20 år, men efter den tiden börjar tätskiktet närma sig sin förväntade livslängd. Vi rekommenderar en oberoende fuktbesiktning — om tätskiktet är dokumenterat och i gott skick kan badrummet fortsätta användas, men risken för läckage ökar. Efter 30 år är många originalbadrum förbi sin förväntade livslängd.</p>',
      },
      {
        question: 'Är det värt att renovera badrum inför försäljning i Täby?',
        answer:
          'Ja, i de flesta fall. Täby är en attraktiv marknad där ett dokumenterat och nyrenoverat badrum både höjer slutpriset och minskar risken för prisförhandling vid besiktning. Det viktigaste är att utförandet är BKR-dokumenterat enligt BBV — det är vad besiktningsmän och försäkringsbolag faktiskt frågar efter.',
        answerHtml:
          '<p>Ja, i de flesta fall. Täby är en attraktiv marknad där ett dokumenterat och nyrenoverat badrum både höjer slutpriset och minskar risken för prisförhandling vid besiktning. Det viktigaste är att utförandet är BKR-dokumenterat enligt BBV — det är vad besiktningsmän och försäkringsbolag faktiskt frågar efter.</p>',
      },
      {
        question: 'Vad påverkar omfattningen av en badrumsrenovering i Täby?',
        answer:
          'Projektets omfattning beror på flera faktorer: storlek på badrummet, byggårets standarder för ursprungligt tätskikt, vilken skada eller slitage som finns, materialval och om underlag eller rör behöver åtgärdas. En villa från 1960 kan behöva helt omarbetade golvkonstruktioner, medan senare radhus ofta har färre dolda problem.',
        answerHtml:
          '<p>Projektets omfattning beror på flera faktorer: storlek på badrummet, byggårets standarder för ursprungligt tätskikt, vilken skada eller slitage som finns, materialval och om underlag eller rör behöver åtgärdas. En villa från 1960 kan behöva helt omarbetade golvkonstruktioner, medan senare radhus ofta har färre dolda problem.</p>',
      },
      {
        question: 'Vad är skillnaden mellan våtrumsmatta och kakel för mitt badrum i Täby?',
        answer:
          'Båda är godkända enligt BBV men har olika styrkor. Kakel och klinker är slitstarkt, har lång livslängd (25–40 år) och ger designfrihet — det vanliga valet i villor och bostadsrätter. Våtrumsmatta är snabbare att lägga men är känsligare för slitage och behöver oftast bytas tidigare. I familjebadrum rekommenderas vanligtvis kakel.',
        answerHtml:
          '<p>Båda är godkända enligt BBV men har olika styrkor. Kakel och klinker är slitstarkt, har lång livslängd (25–40 år) och ger designfrihet — det vanliga valet i villor och bostadsrätter. Våtrumsmatta är snabbare att lägga men är känsligare för slitage och behöver oftast bytas tidigare. I familjebadrum rekommenderas vanligtvis kakel.</p>',
      },
      {
        question: 'Arbetar ni i hela Täby eller bara vissa områden?',
        answer:
          'Vi arbetar i hela Täby, inklusive Näsby Park, Näsby Strand, Roslags-Näsby, Skarpäng, Visinge och centrum. Projektet planeras efter din fastighetstyp — villa, radhus eller BRF — och lokala förutsättningar.',
        answerHtml:
          '<p>Vi arbetar i hela Täby, inklusive Näsby Park, Näsby Strand, Roslags-Näsby, Skarpäng, Visinge och centrum. Projektet planeras efter din fastighetstyp — villa, radhus eller BRF — och lokala förutsättningar.</p>',
      },
      {
        question: 'Kan ni samordna VVS och el om det behövs?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners för VVS och el, så att du har en kontaktväg genom hela projektet. Vi sätter tidplan som tar hänsyn till rivning, tätskikt, rörbyte och elektriska installationer i rätt ordning.',
        answerHtml:
          '<p>Ja, vi samordnar certifierade samarbetspartners för VVS och el, så att du har en kontaktväg genom hela projektet. Vi sätter tidplan som tar hänsyn till rivning, tätskikt, rörbyte och elektriska installationer i rätt ordning.</p>',
      },
    ],
    reviews: [
      {
        author: 'David B',
        date: '2026-03-27',
        rating: 5,
        text: 'Riktigt duktiga, bland de bästa. Efter 30 års erfarenhet i branschen så vet jag.',
      },
      {
        author: 'Salim H',
        date: '2025-10-29',
        rating: 5,
        text: 'Adam är mycket kunnig och duktig i sitt arbete, vilket har gjort samarbetet både smidigt och professionellt.',
      },
      {
        author: 'Pär Gustaf W',
        date: '2024-06-05',
        rating: 5,
        text: 'Snabb och tydlig kommunikation. Lösningsorienterade. Oerhört nöjda med resultatet!',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering i Täby med BKR-behörighet, lokal kunskap om villor och BRF, och dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering i Täby med BKR-behöriga plattsättare och kvalitetsdokument enligt BBV.',
  },
  danderyd: {
    slug: 'danderyd',
    city: 'Danderyd',
    route: '/badrumsrenovering-danderyd/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'BKR-behörig kakelsättare på Danderyd med dokumenterad våtrumsprocess',
    seo: {
      title: 'Badrumsrenovering Danderyd – BKR-behörig Plattsättare för Premiumvillor | Haga Plattsättning AB',
      description:
        'Badrumsrenovering på Danderyd med BKR-behörig plattsättare för villor och bostadsrätt. Tydlig process från offert till kvalitetsdokument enligt BBV — särskild kompetens i Djursholm och Stocksund.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-danderyd/',
      ogTitle: 'Badrumsrenovering Danderyd – BKR-behörighet för Premiumvillor',
      ogDescription:
        'Badrumsrenovering på Danderyd med BKR-behörighet, våtrumsintyg och BBV-dokumentation. Specialiserad på periodvillor i Djursholm, Stocksund och Mörby.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_40.avif',
      ogImageAlt: 'Badrumsrenovering på Danderyd — premiumvillor med professionell plattsättning',
      twitterTitle: 'Badrumsrenovering Danderyd – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering på Danderyd med BKR-behörighet, våtrumsintyg och kvalitetsdokument enligt BBV.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_40.avif',
      geoPlacename: 'Danderyd',
      geoPosition: '59.4040;18.0339',
      latitude: 59.4040,
      longitude: 18.0339,
    },
    hero: {
      lead:
        'Bor du på Danderyd och planerar badrumsrenovering? Vi arbetar specialiserat med premiumvillor i Djursholm, Stocksund och Mörby — där periodkorrekt renovering och BKR-dokumentation avgör värde och försäljningsbarhet.',
      imageSrc: '/hagaplatt_40.avif',
      imageAlt: 'Modernt badrum på Danderyd i premiumvilla med kakel och klinker av BKR-behörig plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering på Danderyd – från periodvilla till moderna lösningar',
      introHtml:
        'Danderyd är en av Stockholms mest välsituerade kommuner med stor andel villor från 1900–1940-talet. Många hus i Djursholm, Stocksund och Mörby har äldre tätskikt som kräver särskild uppmärksamhet och periodanpassad renovering. Vi arbetar regelbundet på Danderyd och förstår de höga kvalitets- och dokumentationskrav som marknaden ställer. Jämför även med våra sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">Sollentuna</a>.',
    },
    guideBlocks: [
      {
        title: 'Villor i Djursholm, Stocksund och Mörby – vad gör renoveringen speciell?',
        bodyHtml:
          '<p>Danderyd är känd för sina stora villor från 1900–1940-talet, ofta på generösa tomter med arkitektonisk betydelse. Många är registrerade i kulturarvsdatabasen, vilket kan påverka renoveringsmöjligheterna.</p><p>I Djursholm och Stocksund är det vanligt med originalöppningsbara fönster, panelkonstruktioner och äldre ledningsvägar. För dessa hus är det inte bara viktigt att uppdatera badrummet — det är avgörande att respektera husets karaktär och originaldetaljer i angränsande rum.</p><p>Vi går igenom bygghistoria, ursprungliga material och eventuella tidigare renoveringar innan vi sätter slutgiltig plan. Det säkerställer att ditt badrum blir både modernt och värdehöjande för fastigheten.</p>',
        imageSrc: '/hagaplatt_46.avif',
        imageAlt: 'Badrumsrenovering i Djursholm-villa på Danderyd med fokus på periodanpassad renovering',
      },
      {
        title: 'Tidplan och hantverk i premiumprojekt på Danderyd',
        bodyHtml:
          '<p>Badrumsrenovering på Danderyd skiljer sig från innerstan främst genom mindre trångt utrymme och bättre möjligheter att lagra material och avfall på egen tomt.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Material och avfall kan ofta lagras direkt på fastigheten</li><li>Arbetstider är vanligtvis flexibla utan böter från förening</li><li>Leveranser går ofta direkt till villan utan trapphuslogistik</li><li>Större möjlighet att stänga av vatten under längre perioder</li><li>Samma kvalitetskrav på tätskikt och dokumentation som i hela landet</li></ul><p>Det gör att projekten ofta blir tidseffektiva och med högre förutsägbarhet. Vi arbetar med tydliga milstolpar så att du alltid vet var i processen vi är.</p>',
        imageSrc: '/hagaplatt_47.avif',
        imageAlt: 'Tidplanering av badrumsrenovering på premiumvilla i Danderyd',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'När är det dags att renovera ett 100-årigt badrum på Danderyd?',
        bodyHtml:
          '<p>Många villor på Danderyd från 1920–1950-talet har originaltätskikt som idag är långt förbi sin förväntade livslängd. Det finns ingen lag som tvingar dig att renovera vid en viss ålder, men efter 30 år ökar risken för läckage och fuktskada kraftigt.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Synliga sprickor i fog eller originalkakel</li><li>Missfärgningar eller lukt nära golvbrunn</li><li>Avlopp som rinner trögt eller bubblar</li><li>Originalledningsvägar i gjutjärn utan dokumentation</li><li>Saknade eller felaktig dokumentation av tidigare tätskikt</li></ul><p>Vid försäljning av Danderyd-villa är ett dokumenterat och nyrenoverat badrum ofta den enskilt viktigaste faktorn för köpares förtroende — mycket större än på många andra platser i Stockholm.</p>',
        textOnly: true,
      },
      {
        title: 'Värt inför försäljning på Danderyd-marknaden?',
        bodyHtml:
          '<p>Ja, nästan alltid. Danderyd är en av Stockholms mest konkurrensutsatta bostadsmarknader för högt värderade fastigheter. Köpare är ofta beredda att betala väsentligt mer för en villa som inte kräver omedelbar badrumsrenovering — eller som redan har ett dokumenterat och modernt badrum.</p><p>Det viktiga är inte att välja det dyraste materialet, utan att renovering visas genom korrekt BKR-dokumentation enligt BBV. Det är vad besiktningsmän, hypotekslångivare och försäkringsbolag faktiskt kontrollerar. En välexekverad renovering är ofta värd en betydande värdestegring på Danderyd — ofta högre än på andra platser i regionen.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Materialval för premiumbadrummet — natursten, storformat, klassiskt?',
        bodyHtml:
          '<p>Boende på Danderyd väljer ofta efter en kombination av tidlöshet, lyxkänsla och långvarighet.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Natursten i grå eller beige nyanser</strong> — klassisk elegans som höjer värdekänslan</li><li><strong>Storformat kakel (120×60 eller större)</strong> — få fogar, moderna linjer utan att bryta periodkänslan</li><li><strong>Matt eller satinerad finish</strong> — sofistikerad känsla, bättre grepp på golv</li><li><strong>Klassiska arkitektdetaljer</strong> — halvpanel, nischer, profilerade listkanter</li><li><strong>Diskret färgsättning</strong> — vita, gråa eller varma neutrala toner dominerar marknaden</li><li><strong>Golvvärmesystem</strong> — högt prioriterat i premiumvillor</li></ul><p>Det viktiga är att materialen håller långt (25–40 år för kakel) och att slutresultatet matchar villans nivå och epok. Vi diskuterar det tillsammans innan start.</p>',
        imageSrc: '/hagaplatt_2.avif',
        imageAlt: 'Materialval för premiumrenovering på Danderyd — natursten och storformat kakel',
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering på Danderyd',
    faqLead:
      'Frågor vi ofta får från boende på Danderyd om periodvillor, värdeökning, försäljning och materialval — baserat på BBV och vår erfarenhet i premiumkommunen.',
    faqs: [
      {
        question: 'Måste man renovera badrum före försäljning på Danderyd?',
        answer:
          'Det är inte lagkrav, men på Danderyd kan ett gammalt eller dokumenterat felaktigt badrum minska försäljningspriset märkbart. Många köpare på denna marknad förväntar sig att ett badrum över 30 år är renoverat — eller de rabatterar priset kraftigt.',
        answerHtml:
          '<p>Det är inte lagkrav, men på Danderyd kan ett gammalt eller dokumenterat felaktigt badrum minska försäljningspriset märkbart. Många köpare på denna marknad förväntar sig att ett badrum över 30 år är renoverat — eller de rabatterar priset kraftigt.</p>',
      },
      {
        question: 'Vad är skillnaden mellan BKR-behörig och vanlig kakelsättare på Danderyd?',
        answer:
          'BKR-behörig betyder att firman är registrerad för våtrumskompetens och kan leverera kvalitetsdokument enligt BBV. På en försäljningsmarknad som Danderyd är denna dokumentation ofta avgörande för köpares förtroende och för försäkringsbolagets ersättning vid framtida fuktskada.',
        answerHtml:
          '<p>BKR-behörig betyder att firman är registrerad för våtrumskompetens och kan leverera kvalitetsdokument enligt BBV. På en försäljningsmarknad som Danderyd är denna dokumentation ofta avgörande för köpares förtroende och för försäkringsbolagets ersättning vid framtida fuktskada.</p>',
      },
      {
        question: 'Hur påverkar periodvillans ålder renoveringen?',
        answer:
          'Villor från 1900–1940-talet kan ha originalledningsvägar i gjutjärn, felaktig sluttning eller okänd tidigare tätskiktsstatus. Vi gör alltid en grundlig besiktning för att kartlägga dessa utmaningar innan offert. Det kräver ofta lite mer tid än i nyare hus, men resultatet blir mycket bättre.',
        answerHtml:
          '<p>Villor från 1900–1940-talet kan ha originalledningsvägar i gjutjärn, felaktig sluttning eller okänd tidigare tätskiktsstatus. Vi gör alltid en grundlig besiktning för att kartlägga dessa utmaningar innan offert. Det kräver ofta lite mer tid än i nyare hus, men resultatet blir mycket bättre.</p>',
      },
      {
        question: 'Vilken tidslinje är realistisk för badrumsrenovering på en Danderyd-villa?',
        answer:
          'De flesta projekt ligger mellan 2 och 4 veckor beroende på omfattning, underlag och vad som upptäcks under rivningen. Eftersom villor ofta har bättre förutsättningar för materiallagring och arbetsmiljö än stadslägenheter kan tiderna ofta hållas realistiska.',
        answerHtml:
          '<p>De flesta projekt ligger mellan 2 och 4 veckor beroende på omfattning, underlag och vad som upptäcks under rivningen. Eftersom villor ofta har bättre förutsättningar för materiallagring och arbetsmiljö än stadslägenheter kan tiderna ofta hållas realistiska.</p>',
      },
      {
        question: 'Kan ni samordna VVS och el även på Danderyd?',
        answer:
          'Ja, vi samordnar certifierade underentreprenörer och driver projektet med en tydlig tidslinje och en kontaktväg för dig. Det blir ofta smidigare i villa än i BRF när det finns plats att lagra material och arbeta flexibelt.',
        answerHtml:
          '<p>Ja, vi samordnar certifierade underentreprenörer och driver projektet med en tydlig tidslinje och en kontaktväg för dig. Det blir ofta smidigare i villa än i BRF när det finns plats att lagra material och arbeta flexibelt.</p>',
      },
      {
        question: 'Vad händer om dolda fel upptäcks under renoveringen?',
        answer:
          'Vi dokumenterar fyndet direkt, visar vad som behövs och inväntar ditt godkännande innan tillägg börjar. I äldre villor är detta vanligare än i nyare hus, men vi budgeterar ofta för det under planeringen.',
        answerHtml:
          '<p>Vi dokumenterar fyndet direkt, visar vad som behövs och inväntar ditt godkännande innan tillägg börjar. I äldre villor är detta vanligare än i nyare hus, men vi budgeterar ofta för det under planeringen.</p>',
      },
    ],
    reviews: [
      {
        author: 'Kristina H',
        date: '2025-05-18',
        rating: 4,
        text: 'Sett till kvaliteten av arbetet är betyget i topp och rekommenderar firman varmt.',
      },
      {
        author: 'Stig Henrik N',
        date: '2025-02-27',
        rating: 5,
        text: 'Adam höll mig konstant uppdaterad och var väldigt professionell.',
      },
      {
        author: 'Amanda A',
        date: '2024-11-20',
        rating: 5,
        text: 'Adam har varit behjälplig i alla steg och hantverkarna mycket duktiga.',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering på Danderyd med BKR-behörighet, specialisering på periodvillor i Djursholm och Stocksund, samt dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering på Danderyd med BKR-behöriga plattsättare, specialiserad på premiumvillor och kvalitetsdokument enligt BBV.',
  },
  sundbyberg: {
    slug: 'sundbyberg',
    city: 'Sundbyberg',
    route: '/badrumsrenovering-sundbyberg/',
    bkrImageSrc: '/behorig-vatrum.avif',
    bkrImageAlt: 'BKR-behörig kakelsättare i Sundbyberg med dokumenterad våtrumsprocess',
    seo: {
      title: 'Badrumsrenovering Sundbyberg – BRF-specialist i tät bebyggelse | Haga Plattsättning AB',
      description:
        'Badrumsrenovering i Sundbyberg för lägenheter och villor. BKR-behörig plattsättare, logistik i tät bebyggelse och kvalitetsdokument enligt BBV.',
      canonical: 'https://www.hagaplattsattning.se/badrumsrenovering-sundbyberg/',
      ogTitle: 'Badrumsrenovering Sundbyberg – BKR-behörighet och tät bebyggelse',
      ogDescription:
        'Badrumsrenovering i Sundbyberg med BKR-behörighet, logistiklösningar för tät bebyggelse och våtrumsintyg enligt BBV.',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_4.avif',
      ogImageAlt: 'Badrumsrenovering i Sundbyberg med kakelsättning i tät bebyggelse',
      twitterTitle: 'Badrumsrenovering Sundbyberg – BKR-behörig Plattsättare',
      twitterDescription:
        'Badrumsrenovering i Sundbyberg med BKR-behörighet och lösningar för lägenheter och små badrum.',
      twitterImage: 'https://www.hagaplattsattning.se/hagaplatt_4.avif',
      geoPlacename: 'Sundbyberg',
      geoPosition: '59.3608;17.9706',
      latitude: 59.3608,
      longitude: 17.9706,
    },
    hero: {
      lead:
        'Planerar du badrumsrenovering i Sundbyberg? Vi är vana vid BRF-renovering i lägenhetshus och små badrum — och vi löser logistiken i tät bebyggelse utan att stressa grannarna eller göra projektet mer komplicerat än nödvändigt.',
      imageSrc: '/hagaplatt_4.avif',
      imageAlt: 'Nytt badrum i Sundbyberg med kakelsättning i lägenhet med BKR-behörig plattsättare',
    },
    guideHeader: {
      title: 'Badrumsrenovering i Sundbyberg – guide för tät bebyggelse och BRF',
      introHtml:
        'Sundbyberg är Sveriges minsta kommun till ytan men en av de tätast bebyggda. Det betyder att de flesta badrumsrenoveringar här är i lägenhetshus eller mindre villor — och logistiken är inte som i villakvarter. Vi arbetar regelbundet i alla delar av kommunen och anpassar processen efter BRF-krav, små utrymmen och leveranser genom trånga trapphus. Jämför även med våra sidor för <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">Stockholm</a> och <a href="/badrumsrenovering-solna/" style="color:#0a0a1a;font-weight:600;">Solna</a>.',
    },
    guideBlocks: [
      {
        title: 'BRF-renovering i Sundbyberg — vad styrelserna oftast kräver',
        bodyHtml:
          '<p>De flesta bostadsrätter i Sundbyberg kräver styrelseanmälan innan start, precis som i innerstaden. Skillnaden är ofta föreningarnas fokus: mindre föreningar är noga med granninformation och bullertider, större föreningar vill se dokumenterad behörighet och tydlig tidsplan.</p><p>Vi hanterar själva anmälan med dina handlingar och håller kontakt med förvaltare under projektet. En vanlig process tar 2–3 veckor från anmälan till start — kortare än många tror om kommunikationen är tydlig från dag ett.</p>',
        imageSrc: '/hagaplatt_5.avif',
        imageAlt: 'BRF-badrum i Sundbyberg under renovering med fokus på grannskydd och process',
      },
      {
        title: 'Logistik i tät bebyggelse — material utan att blockera trapphus',
        bodyHtml:
          '<p>I Sundbyberg är leveranser ofta utmaningen — många hus saknar hiss, garageplats är begränsad och det finns få containerparkeringar. Vi planerar materialflödet dag för dag så att grannar inte blockeras i trapphuset längre än nödvändigt.</p><ul class="bkr-checklist" style="margin-top:0.5rem;margin-bottom:1rem;"><li>Leverans under bestämd tid — ofta tidig morgon för att minimera störning</li><li>Omedelbar lagring i lägenheten eller temporär användning av hall</li><li>Avfallshämtning på fasta dagar för att undvika högar i trapphus</li><li>Bullerplanering — rivning ofta vardagar 07–17, enligt föreningens regler</li></ul><p>Det extra arbetet att planera logistik sparar ofta tid senare och gör projektet fredligare för alla.</p>',
        imageSrc: '/hagaplatt_20.avif',
        imageAlt: 'Materialhantering och logistik för badrumsrenovering i lägenhetshus i Sundbyberg',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'När är det dags att renovera badrummet i Sundbyberg?',
        bodyHtml:
          '<p>En lägenhet i Sundbyberg från 1960–80-talet har ofta originaltätskikt som närmar sig 50 år — långt längre än de 25 år som branschstandarden föreslår. Tecken på att det är dags: synliga sprickor i fog, lukt från avlopp, eller missfärgningar nära golvbrunnen.</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Sprickor i fogar eller kakel</li><li>Lukt eller bubblande från avlopp</li><li>Fuktfläckar på vägg eller tak under badrummet</li><li>Lägenhet köpt utan dokumenterad renovering senare än 1995</li><li>Försäljning inom 1–2 år — då öppnar det dörrarna för bättre bud</li></ul>',
        textOnly: true,
      },
      {
        title: 'Värt att renovera badrummet innan försäljning i Sundbyberg?',
        bodyHtml:
          '<p>Ja, ofta. Sundbyberg är nära centrum och attraktiv för unga familjer — ett dokumenterat och nyrenoverat badrum signalerar trygghet och minskar risken för prisförhandling vid besiktning. Det viktigaste är inte lyxiga material, utan BKR-dokumentation enligt BBV och ett rent, välfungerande resultat.</p><p>En köpare av en lägenhet från 70-talet förväntar sig ofta att badrummet redan är renoverat. Saknas det blir det oftast avtalsdiskussionerna som sänker priset mest.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Materialval för mindre badrum i lägenhet — smått eller storformat?',
        bodyHtml:
          '<p>Många Sundbybergslägenheter har badrum mellan 3–5 kvadratmeter — ganska små. Vi ser ofta två framgångsrika vägar:</p><p><strong>Storformat (120×60 eller större)</strong> ger luftigt intryck och färre fogar att städa — passar bra när badrummet redan är litet. Neutrala toner (ljusgrå, beige) förstärker känslan av att rummet är större.</p><p><strong>Mindre format (30×30 eller 20×20)</strong> fungerar när du vill skapa kontrast eller mönster — men kräver mer arbete vid kakling och fogar. Vit eller ljusgrå plus kontrastfärg i duschvägg är ett populärt val i Sundbyberg.</p><p><strong>Våtrumsmatta</strong> är snabbare att lägga och fungerar bra i mindre toalettutrymmen. Kakel håller längre och ger mer värde vid försäljning.</p>',
        imageSrc: '/hagaplatt_46.avif',
        imageAlt: 'Materialval och kakelmönster för badrum i mindre lägenhet i Sundbyberg',
      },
    ],
    faqTitle: 'Vanliga frågor om badrumsrenovering i Sundbyberg',
    faqLead:
      'Svar på frågor från boende i Sundbyberg om BRF-process, små badrum, logistik och materialval.',
    faqs: [
      {
        question: 'Hur snabbt kan ni starta ett projekt i Sundbyberg?',
        answer:
          'Vanligtvis inom 3–4 veckor för lägenhetshus, beroende på BRF-process och materialval. Vi bokar ofta in projekt redan kommande vecka för enklare uppdrag.',
        answerHtml:
          '<p>Vanligtvis inom 3–4 veckor för lägenhetshus, beroende på BRF-process och materialval. Vi bokar ofta in projekt redan kommande vecka för enklare uppdrag.</p>',
      },
      {
        question: 'Behöver jag BRF-godkännande innan ni startar?',
        answer:
          'Ja, nästan alltid i Sundbyberg. Vi hjälper dig med behörighetsintyg, tidplan och alla handlingar till styrelsen.',
        answerHtml:
          '<p>Ja, nästan alltid i Sundbyberg. Vi hjälper dig med behörighetsintyg, tidplan och alla handlingar till styrelsen.</p>',
      },
      {
        question: 'Hur löser ni material och avfall i hus utan hiss?',
        answer:
          'Vi planerar leveranser dag för dag och lagrar material direkt i lägenheten. Avfall hämtas på bestämd dag så att trapphuset inte blockeras. Det tar lite mer tid att planera men sparar ofta tid senare.',
        answerHtml:
          '<p>Vi planerar leveranser dag för dag och lagrar material direkt i lägenheten. Avfall hämtas på bestämd dag så att trapphuset inte blockeras. Det tar lite mer tid att planera men sparar ofta tid senare.</p>',
      },
      {
        question: 'Måste man renovera badrummet efter 20 år?',
        answer:
          'Inte enligt lag, men efter 20 år bör du kontrollera tätskiktet. Om badrummet är från 60–80-talet och aldrig renoverats är risken för läckage eller dolda fuktskador betydande efter 30 år — försäkringsbolag kan neka ersättning då.',
        answerHtml:
          '<p>Inte enligt lag, men efter 20 år bör du kontrollera tätskiktet. Om badrummet är från 60–80-talet och aldrig renoverats är risken för läckage eller dolda fuktskador betydande efter 30 år — försäkringsbolag kan neka ersättning då.</p>',
      },
      {
        question: 'Vad är viktigare — storformat eller små plattor?',
        answer:
          'I små badrum är storformat ofta bättre för känslan av rymd och enklare att städa. Men det beror på din stil — vi går igenom alternativ vid platsbesök så du ser vad som passar.',
        answerHtml:
          '<p>I små badrum är storformat ofta bättre för känslan av rymd och enklare att städa. Men det beror på din stil — vi går igenom alternativ vid platsbesök så du ser vad som passar.</p>',
      },
      {
        question: 'Kan ni samordna VVS och el även i små lägenhetshus?',
        answer:
          'Ja, vi samordnar certifierade samarbetspartners. I små lägenheter kan detta vara ännu viktigare — vi säkerställer att rörledningarna inte blir ett pusselproblem.',
        answerHtml:
          '<p>Ja, vi samordnar certifierade samarbetspartners. I små lägenheter kan detta vara ännu viktigare — vi säkerställer att rörledningarna inte blir ett pusselproblem.</p>',
      },
      {
        question: 'Kan familjen bo kvar under renoveringen?',
        answer:
          'I de flesta fall ja. Vi planerar arbetsmomenten så att toalett och dusch är ur drift så kort tid som möjligt, och skapar tillfällig lösning om nödvändigt.',
        answerHtml:
          '<p>I de flesta fall ja. Vi planerar arbetsmomenten så att toalett och dusch är ur drift så kort tid som möjligt, och skapar tillfällig lösning om nödvändigt.</p>',
      },
      {
        question: 'Vad händer om vi hittar fuktskada vid rivning?',
        answer:
          'Vi dokumenterar direkt, visar resultatet tillsammans med dig och ger ett klart åtgärdsförslag innan extraarbete börjar. Oftast är detta redan budgeterat.',
        answerHtml:
          '<p>Vi dokumenterar direkt, visar resultatet tillsammans med dig och ger ett klart åtgärdsförslag innan extraarbete börjar. Oftast är detta redan budgeterat.</p>',
      },
    ],
    reviews: [
      {
        author: 'Hans G',
        date: '2025-02-26',
        rating: 5,
        text: 'Noggranna och professionella. Höll sig till överenskomna priser. Helt nöjd med slutresultatet.',
      },
      {
        author: 'Lisa N',
        date: '2024-12-27',
        rating: 5,
        text: 'Överträffade mina förväntningar på allt. Jag rekommenderar dem starkt.',
      },
      {
        author: 'Henrik S',
        date: '2024-05-14',
        rating: 5,
        text: 'Mycket duktiga hantverkare och trevligt bemötande. Har ett fint badrum nu.',
      },
    ],
    footerFocus:
      'Denna sida fokuserar på badrumsrenovering i Sundbyberg med BKR-behörighet, logistiklösningar för tät bebyggelse och dokumenterad kvalitet från offert till färdigt badrum.',
    localBusinessDescription:
      'Professionell badrumsrenovering i Sundbyberg för lägenhetshus och villor — BKR-behörig plattsättare med erfarenhet av tät bebyggelse och små badrum.',
  },
};
