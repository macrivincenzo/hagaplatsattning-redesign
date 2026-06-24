export type PsFaqItem = {
  question: string;
  answer: string;
};

export type PsGuideBlock = {
  title: string;
  bodyHtml: string;
  imageSrc?: string;
  imageAlt?: string;
  gray?: boolean;
  imageFirst?: boolean;
  textOnly?: boolean;
};

export type PlattsattareLocationContent = {
  slug: string;
  city: string;
  /** Genitiv/prepositionsform, t.ex. "i Sollentuna" eller "på Lidingö" */
  inCity: string;
  route: string;
  /** Extra synonym/term som sidan även ska fånga, t.ex. "kakelsättare Nacka" */
  secondaryTerm?: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    ogImageAlt: string;
    geoPlacename: string;
    geoPosition: string;
  };
  heroLead: string;
  heroImageSrc: string;
  heroImageAlt: string;
  guideIntroHtml: string;
  guideBlocks: PsGuideBlock[];
  faqs: PsFaqItem[];
  footerFocus: string;
  localBusinessDescription: string;
};

const BKR_LINK =
  '<a href="https://www.bkr.se/om-behorighet" target="_blank" rel="noopener" class="outbound-link">Byggkeramikrådet (BKR)</a>';
const ROT_LINK =
  '<a href="https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete" target="_blank" rel="noopener" class="outbound-link">ROT-avdraget via Skatteverket</a>';

export const PLATTSATTARE_LOCATIONS: Record<string, PlattsattareLocationContent> = {
  sollentuna: {
    slug: 'sollentuna',
    city: 'Sollentuna',
    inCity: 'i Sollentuna',
    route: '/plattsattare-sollentuna/',
    seo: {
      title: 'Plattsättare Sollentuna – Lokalt BKR-behörigt Plattsättarföretag | Haga Plattsättning AB',
      description:
        'Plattsättare i Sollentuna med kontor på Skyttevägen. BKR-behörig plattsättning av golv och vägg i badrum, kök och våtrum – med våtrumsintyg och 4.9/5 på Reco. Begär kostnadsfri offert.',
      canonical: 'https://www.hagaplattsattning.se/plattsattare-sollentuna/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_15.avif',
      ogImageAlt: 'Plattsättare i Sollentuna lägger kakel och klinker – Haga Plattsättning AB',
      geoPlacename: 'Sollentuna',
      geoPosition: '59.4285;17.9493',
    },
    heroLead:
      'Söker du en plattsättare i Sollentuna? Vi har kontor på Skyttevägen och kort inställelsetid i hela kommunen. Som BKR-behörigt plattsättarföretag utför vi plattsättning av golv och vägg i badrum, kök och våtrum – med dokumenterad kvalitet och våtrumsintyg.',
    heroImageSrc: '/hagaplatt_15.avif',
    heroImageAlt:
      'Plattsättare i Sollentuna monterar storformatklinker i badrum – Haga Plattsättning AB',
    guideIntroHtml:
      'Med kontor på Skyttevägen är vi en genuint lokal plattsättare i Sollentuna. Det gör platsbesök, planering och uppföljning smidiga för dig som bor i exempelvis Tureberg, Edsberg, Häggvik, Norrviken eller Rotebro. Plattsättare och kakelsättare är samma yrke – det avgörande är behörigheten och dokumentationen, inte ordvalet.',
    guideBlocks: [
      {
        title: 'Vad gör en plattsättare i Sollentuna?',
        bodyHtml:
          `<p>En plattsättare gör mer än att fästa plattor – yrket bygger på underlagsberedning, tätskikt enligt BBV, materialkunskap och exakt geometri. I Sollentuna möter vi allt från bostadsrätter i centrum till radhus och villor i ytterområdena, vilket ställer olika krav på underarbete och dokumentation.</p><p>I våtrum är tätskiktet den kritiska barriären mot fukt och måste utföras av en behörig plattsättare enligt ${BKR_LINK}. Vi dokumenterar varje steg och lämnar kvalitetsdokument efter avslutat arbete.</p>`,
        imageSrc: '/hagaplatt_8.avif',
        imageAlt: 'Plattsättare i Sollentuna förbereder underlag och tätskikt i badrum',
      },
      {
        title: 'Så väljer du rätt plattsättare i Sollentuna',
        bodyHtml:
          `<p>Innan du skriver avtal: kontrollera BKR-behörighetsnummer på bkr.se, be om F-skattsedel och ansvarsförsäkring, och begär referensprojekt i närområdet. En seriös plattsättare lämnar alltid en skriftlig, specificerad offert.</p><div class="rot-box"><strong>ROT-avdraget för godkända arbeten är 30 % av arbetskostnaden.</strong> Vi hanterar ${ROT_LINK} åt dig enligt gällande regler.</div>`,
        imageSrc: '/hagaplatt_29.avif',
        imageAlt: 'Plattsättare i Sollentuna går igenom offert och materialval med kund',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Plattsättning, badrum och kök – hela Sollentuna',
        bodyHtml:
          '<p>Vi lägger kakel och klinker på både golv och vägg i badrum, kök och övriga utrymmen. Planerar du ett helt rum kan du läsa om vår <a href="/badrumsrenovering-sollentuna/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Sollentuna</a>. Vill du jämföra material hjälper vår guide <a href="/kakel-eller-klinker-stockholm/" style="color:#0a0a1a;font-weight:600;">kakel eller klinker</a>. Se även vår översikt som <a href="/plattsattare-stockholm/" style="color:#0a0a1a;font-weight:600;">plattsättare i Stockholm</a>.</p>',
        textOnly: true,
      },
    ],
    faqs: [
      {
        question: 'Utgår ni verkligen från Sollentuna?',
        answer:
          'Ja, vi har kontor på Skyttevägen i Sollentuna och arbetar dagligen som plattsättare i hela kommunen – Tureberg, Edsberg, Häggvik, Norrviken, Rotebro och Helenelund.',
      },
      {
        question: 'Är plattsättare och kakelsättare samma sak?',
        answer:
          'Ja, det är samma yrke. Plattsättare är den formella yrkestiteln och kakelsättare är vanligare i dagligt tal. Båda monterar kakel, klinker, mosaik och natursten på golv och vägg.',
      },
      {
        question: 'Hur vet jag att plattsättaren är behörig?',
        answer:
          'Be om BKR-behörighetsnummer och kontrollera det på bkr.se. Vi är BKR-behöriga och visar gärna vår certifiering. Behörigheten krävs i praktiken av försäkringsbolag och bostadsrättsföreningar.',
      },
      {
        question: 'Vad kostar en plattsättare i Sollentuna?',
        answer:
          'Kostnaden styrs av underlagets skick, plattformat, ytan och eventuella dolda fel. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden enligt Skatteverkets regler.',
      },
      {
        question: 'Lägger ni plattor i både badrum och kök?',
        answer:
          'Ja, vi utför plattsättning på golv och vägg i både badrum (våtrum med tätskikt enligt BBV) och kök (stänkskydd och golv). Samma krav på precision gäller överallt.',
      },
    ],
    footerFocus:
      'Som plattsättare i Sollentuna med kontor på Skyttevägen utför vi plattsättning av golv och vägg i badrum, kök och våtrum – med BKR-behörighet, våtrumsintyg och tydlig lokal projektledning.',
    localBusinessDescription:
      'Lokal plattsättare i Sollentuna med BKR-behörighet, våtrumsintyg och kvalitetsdokument. Plattsättning i badrum, kök och våtrum.',
  },

  taby: {
    slug: 'taby',
    city: 'Täby',
    inCity: 'i Täby',
    route: '/plattsattare-taby/',
    seo: {
      title: 'Plattsättare Täby – BKR-behörig Plattsättning i Täby | Haga Plattsättning AB',
      description:
        'Plattsättare i Täby för villa, radhus och bostadsrätt. BKR-behörig plattsättning av golv och vägg i badrum, kök och våtrum – med våtrumsintyg och 4.9/5 på Reco. Begär kostnadsfri offert.',
      canonical: 'https://www.hagaplattsattning.se/plattsattare-taby/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_22.avif',
      ogImageAlt: 'Plattsättare i Täby lägger kakel och klinker – Haga Plattsättning AB',
      geoPlacename: 'Täby',
      geoPosition: '59.4439;18.0687',
    },
    heroLead:
      'Söker du en plattsättare i Täby? Vi arbetar regelbundet i kommunen och anpassar processen efter villor, radhus och bostadsrätter. Som BKR-behörigt plattsättarföretag utför vi plattsättning av golv och vägg i badrum, kök och våtrum – med dokumenterad kvalitet och våtrumsintyg.',
    heroImageSrc: '/hagaplatt_22.avif',
    heroImageAlt:
      'Plattsättare i Täby monterar storformatkakel i badrum – Haga Plattsättning AB',
    guideIntroHtml:
      'Täby är en av norrorts mest villatäta kommuner, med ett brett bestånd från äldre villor i Näsbypark och Roslags-Näsby till nyare radhus. Det innebär ofta äldre tätskikt och originallösningar som kräver en erfaren plattsättare. Plattsättare och kakelsättare är samma yrke – det avgörande är behörigheten och dokumentationen.',
    guideBlocks: [
      {
        title: 'Vad gör en plattsättare i Täby?',
        bodyHtml:
          `<p>En plattsättare ansvarar för underlagsberedning, tätskikt enligt BBV, montering av kakel och klinker samt fogning – på både golv och vägg. I Täbys villor och radhus möter vi ofta äldre golvbrunnar och originaltätskikt som närmar sig slutet av sin livslängd.</p><p>I våtrum måste tätskiktet utföras av en behörig plattsättare enligt ${BKR_LINK}. Vi dokumenterar varje steg och lämnar kvalitetsdokument – det försäkringsbolagen efterfrågar vid en eventuell skada.</p>`,
        imageSrc: '/hagaplatt_10.avif',
        imageAlt: 'Plattsättare i Täby förbereder tätskikt och underlag i badrum',
      },
      {
        title: 'Så väljer du rätt plattsättare i Täby',
        bodyHtml:
          `<p>Kontrollera BKR-behörighetsnummer på bkr.se, be om F-skattsedel och ansvarsförsäkring, och begär referensprojekt i Täbyområdet. En seriös plattsättare lämnar alltid en skriftlig, specificerad offert med tydligt arbetsomfång.</p><div class="rot-box"><strong>ROT-avdraget för godkända arbeten är 30 % av arbetskostnaden.</strong> Vi hanterar ${ROT_LINK} åt dig enligt gällande regler.</div>`,
        imageSrc: '/hagaplatt_27.avif',
        imageAlt: 'Plattsättare i Täby går igenom offert och materialval med kund',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Plattsättning för villa, radhus och BRF i Täby',
        bodyHtml:
          '<p>Vi lägger kakel och klinker på golv och vägg i badrum, kök och övriga utrymmen. Planerar du ett helt rum kan du läsa om vår <a href="/badrumsrenovering-taby/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Täby</a>. Vi erbjuder även <a href="/koksrenovering-taby/" style="color:#0a0a1a;font-weight:600;">köksrenovering i Täby</a>. Se vår översikt som <a href="/plattsattare-stockholm/" style="color:#0a0a1a;font-weight:600;">plattsättare i Stockholm</a>.</p>',
        textOnly: true,
      },
    ],
    faqs: [
      {
        question: 'Arbetar ni som plattsättare i hela Täby?',
        answer:
          'Ja, vi tar uppdrag i hela Täby kommun – inklusive Näsbypark, Roslags-Näsby, Gribbylund, Viggbyholm och Täby kyrkby. Vi har kort inställelsetid från vårt kontor i Sollentuna.',
      },
      {
        question: 'Är plattsättare och kakelsättare samma sak?',
        answer:
          'Ja, det är samma yrke. Plattsättare är den formella yrkestiteln och kakelsättare är vanligare i dagligt tal. Båda monterar kakel, klinker, mosaik och natursten på golv och vägg.',
      },
      {
        question: 'Hur vet jag att plattsättaren är behörig?',
        answer:
          'Be om BKR-behörighetsnummer och kontrollera det på bkr.se. Vi är BKR-behöriga och visar gärna vår certifiering. Behörigheten krävs i praktiken av försäkringsbolag och bostadsrättsföreningar.',
      },
      {
        question: 'Vad kostar en plattsättare i Täby?',
        answer:
          'Kostnaden styrs av underlagets skick, plattformat, ytan och eventuella dolda fel som kan visa sig vid rivning. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden.',
      },
      {
        question: 'Vi har en äldre villa – är det extra viktigt med dokumentation?',
        answer:
          'Ja. I äldre villor är originaltätskikt ofta nära slutet av sin livslängd. Ett dokumenterat, BKR-utfört arbete minskar risken vid framtida vattenskada och är värdefullt vid en eventuell försäljning.',
      },
    ],
    footerFocus:
      'Som plattsättare i Täby utför vi plattsättning av golv och vägg i badrum, kök och våtrum för villa, radhus och bostadsrätt – med BKR-behörighet, våtrumsintyg och dokumenterad kvalitet.',
    localBusinessDescription:
      'Plattsättare i Täby med BKR-behörighet och våtrumsintyg. Plattsättning av golv och vägg i badrum, kök och våtrum för villa, radhus och BRF.',
  },

  nacka: {
    slug: 'nacka',
    city: 'Nacka',
    inCity: 'i Nacka',
    route: '/plattsattare-nacka/',
    secondaryTerm: 'kakelsättare Nacka',
    seo: {
      title: 'Plattsättare Nacka – BKR-behörig Plattsättare & Kakelsättare | Haga Plattsättning AB',
      description:
        'Plattsättare och kakelsättare i Nacka för villa, radhus och bostadsrätt. BKR-behörig plattsättning av golv och vägg i badrum, kök och våtrum – med våtrumsintyg och 4.9/5 på Reco. Begär offert.',
      canonical: 'https://www.hagaplattsattning.se/plattsattare-nacka/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_4.avif',
      ogImageAlt: 'Plattsättare i Nacka lägger kakel och klinker – Haga Plattsättning AB',
      geoPlacename: 'Nacka',
      geoPosition: '59.3107;18.1637',
    },
    heroLead:
      'Söker du en plattsättare eller kakelsättare i Nacka? Vi arbetar i hela kommunen – från Sicklaön och Saltsjöbaden till Boo och Älta. Som BKR-behörigt plattsättarföretag utför vi plattsättning av golv och vägg i badrum, kök och våtrum med dokumenterad kvalitet och våtrumsintyg.',
    heroImageSrc: '/hagaplatt_4.avif',
    heroImageAlt:
      'Plattsättare i Nacka monterar klinker i badrum – Haga Plattsättning AB',
    guideIntroHtml:
      'Nacka är en kommun med stark tillväxt och stor blandning – från nyproduktion i Sickla och centrala Nacka till villor i Saltsjöbaden och Boo. Det ställer varierande krav på en plattsättare. Plattsättare och kakelsättare är samma yrke; det viktiga är behörigheten och dokumentationen, inte ordvalet.',
    guideBlocks: [
      {
        title: 'Vad gör en plattsättare i Nacka?',
        bodyHtml:
          `<p>En plattsättare (eller kakelsättare) ansvarar för underlagsberedning, tätskikt enligt BBV, montering av kakel och klinker samt fogning – på golv och vägg. I Nacka möter vi både modern nyproduktion och äldre villabestånd med originaltätskikt.</p><p>I våtrum måste tätskiktet utföras av en behörig plattsättare enligt ${BKR_LINK}. Vi dokumenterar arbetet och lämnar kvalitetsdokument efter slutkontroll.</p>`,
        imageSrc: '/hagaplatt_12.avif',
        imageAlt: 'Plattsättare i Nacka förbereder tätskikt och underlag i badrum',
      },
      {
        title: 'Så väljer du rätt plattsättare eller kakelsättare i Nacka',
        bodyHtml:
          `<p>Kontrollera BKR-behörighetsnummer på bkr.se, be om F-skattsedel och ansvarsförsäkring, och begär referensprojekt i Nackaområdet. En seriös plattsättare lämnar alltid en skriftlig, specificerad offert.</p><div class="rot-box"><strong>ROT-avdraget för godkända arbeten är 30 % av arbetskostnaden.</strong> Vi hanterar ${ROT_LINK} åt dig enligt gällande regler.</div>`,
        imageSrc: '/hagaplatt_39.avif',
        imageAlt: 'Plattsättare i Nacka går igenom offert och materialval med kund',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Plattsättning i badrum och kök – hela Nacka',
        bodyHtml:
          '<p>Vi lägger kakel och klinker på golv och vägg i badrum, kök och övriga utrymmen. Planerar du ett helt rum kan du läsa om vår <a href="/badrumsrenovering-nacka/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Nacka</a> och vår <a href="/koksrenovering-nacka/" style="color:#0a0a1a;font-weight:600;">köksrenovering i Nacka</a>. Se även vår översikt som <a href="/plattsattare-stockholm/" style="color:#0a0a1a;font-weight:600;">plattsättare i Stockholm</a>.</p>',
        textOnly: true,
      },
    ],
    faqs: [
      {
        question: 'Arbetar ni som plattsättare i hela Nacka?',
        answer:
          'Ja, vi tar uppdrag i hela Nacka kommun – Sicklaön, Sickla, centrala Nacka, Saltsjöbaden, Boo, Fisksätra och Älta.',
      },
      {
        question: 'Är plattsättare och kakelsättare samma sak i Nacka?',
        answer:
          'Ja, det är samma yrke. Plattsättare är den formella yrkestiteln och kakelsättare är vanligare i dagligt tal. Båda monterar kakel, klinker, mosaik och natursten på golv och vägg.',
      },
      {
        question: 'Hur vet jag att plattsättaren är behörig?',
        answer:
          'Be om BKR-behörighetsnummer och kontrollera det på bkr.se. Vi är BKR-behöriga och visar gärna vår certifiering. Behörigheten krävs i praktiken av försäkringsbolag och bostadsrättsföreningar.',
      },
      {
        question: 'Vad kostar en plattsättare i Nacka?',
        answer:
          'Kostnaden styrs av underlagets skick, plattformat, ytan och eventuella dolda fel. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden enligt Skatteverkets regler.',
      },
      {
        question: 'Lägger ni plattor i både badrum och kök?',
        answer:
          'Ja, vi utför plattsättning på golv och vägg i både badrum (våtrum med tätskikt enligt BBV) och kök (stänkskydd och golv). Samma krav på precision gäller överallt.',
      },
    ],
    footerFocus:
      'Som plattsättare och kakelsättare i Nacka utför vi plattsättning av golv och vägg i badrum, kök och våtrum – med BKR-behörighet, våtrumsintyg och dokumenterad kvalitet.',
    localBusinessDescription:
      'Plattsättare och kakelsättare i Nacka med BKR-behörighet och våtrumsintyg. Plattsättning av golv och vägg i badrum, kök och våtrum.',
  },

  bromma: {
    slug: 'bromma',
    city: 'Bromma',
    inCity: 'i Bromma',
    route: '/plattsattare-bromma/',
    seo: {
      title: 'Plattsättare Bromma – BKR-behörig Plattsättning i Västerort | Haga Plattsättning AB',
      description:
        'Plattsättare i Bromma för villa, radhus och bostadsrätt. BKR-behörig plattsättning av golv och vägg i badrum, kök och våtrum – med våtrumsintyg och 4.9/5 på Reco. Begär kostnadsfri offert.',
      canonical: 'https://www.hagaplattsattning.se/plattsattare-bromma/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_18.avif',
      ogImageAlt: 'Plattsättare i Bromma lägger kakel och klinker – Haga Plattsättning AB',
      geoPlacename: 'Bromma',
      geoPosition: '59.3378;17.9394',
    },
    heroLead:
      'Söker du en plattsättare i Bromma? Vi arbetar i hela västerort – från Ålsten och Äppelviken till Abrahamsberg och Bromma kyrka. Som BKR-behörigt plattsättarföretag utför vi plattsättning av golv och vägg i badrum, kök och våtrum med dokumenterad kvalitet och våtrumsintyg.',
    heroImageSrc: '/hagaplatt_18.avif',
    heroImageAlt:
      'Plattsättare i Bromma monterar kakel i badrum – Haga Plattsättning AB',
    guideIntroHtml:
      'Bromma är en av Stockholms mest villatäta stadsdelar, med klassiska 1920–40-talsvillor i Ålsten, Äppelviken och Nockeby sida vid sida med bostadsrätter. Det äldre beståndet betyder ofta originaltätskikt som kräver en erfaren plattsättare. Plattsättare och kakelsättare är samma yrke – det avgörande är behörigheten.',
    guideBlocks: [
      {
        title: 'Vad gör en plattsättare i Bromma?',
        bodyHtml:
          `<p>En plattsättare ansvarar för underlagsberedning, tätskikt enligt BBV, montering av kakel och klinker samt fogning – på golv och vägg. I Brommas äldre villor möter vi ofta originaltätskikt och äldre golvbrunnar som behöver bytas innan ny plattsättning.</p><p>I våtrum måste tätskiktet utföras av en behörig plattsättare enligt ${BKR_LINK}. Vi dokumenterar arbetet och lämnar kvalitetsdokument – det försäkringsbolagen efterfrågar vid en eventuell skada.</p>`,
        imageSrc: '/hagaplatt_20.avif',
        imageAlt: 'Plattsättare i Bromma förbereder tätskikt och underlag i badrum',
      },
      {
        title: 'Så väljer du rätt plattsättare i Bromma',
        bodyHtml:
          `<p>Kontrollera BKR-behörighetsnummer på bkr.se, be om F-skattsedel och ansvarsförsäkring, och begär referensprojekt i västerort. En seriös plattsättare lämnar alltid en skriftlig, specificerad offert med tydligt arbetsomfång.</p><div class="rot-box"><strong>ROT-avdraget för godkända arbeten är 30 % av arbetskostnaden.</strong> Vi hanterar ${ROT_LINK} åt dig enligt gällande regler.</div>`,
        imageSrc: '/hagaplatt_25.avif',
        imageAlt: 'Plattsättare i Bromma går igenom offert och materialval med kund',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Plattsättning för villa och BRF i Bromma',
        bodyHtml:
          '<p>Vi lägger kakel och klinker på golv och vägg i badrum, kök och övriga utrymmen. Planerar du ett helt rum kan du läsa om vår <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a>. Bor du i bostadsrätt hjälper vi dig med hela <a href="/badrumsrenovering-bostadsratt-brf-stockholm/" style="color:#0a0a1a;font-weight:600;">BRF-processen</a>. Se vår översikt som <a href="/plattsattare-stockholm/" style="color:#0a0a1a;font-weight:600;">plattsättare i Stockholm</a>.</p>',
        textOnly: true,
      },
    ],
    faqs: [
      {
        question: 'Arbetar ni som plattsättare i hela Bromma?',
        answer:
          'Ja, vi tar uppdrag i hela Bromma – Ålsten, Äppelviken, Nockeby, Abrahamsberg, Bromma kyrka, Mariehäll och Riksby.',
      },
      {
        question: 'Är plattsättare och kakelsättare samma sak?',
        answer:
          'Ja, det är samma yrke. Plattsättare är den formella yrkestiteln och kakelsättare är vanligare i dagligt tal. Båda monterar kakel, klinker, mosaik och natursten på golv och vägg.',
      },
      {
        question: 'Hur vet jag att plattsättaren är behörig?',
        answer:
          'Be om BKR-behörighetsnummer och kontrollera det på bkr.se. Vi är BKR-behöriga och visar gärna vår certifiering. Behörigheten krävs i praktiken av försäkringsbolag och bostadsrättsföreningar.',
      },
      {
        question: 'Vad kostar en plattsättare i Bromma?',
        answer:
          'Kostnaden styrs av underlagets skick, plattformat, ytan och eventuella dolda fel som kan visa sig vid rivning. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden.',
      },
      {
        question: 'Vi har en äldre Brommavilla – behöver tätskiktet bytas?',
        answer:
          'Ofta ja. I villor från 1920–40-talet är originaltätskikt och golvbrunnar i regel förbi sin förväntade livslängd. Vi bedömer skicket på plats och dokumenterar allt arbete enligt BBV.',
      },
    ],
    footerFocus:
      'Som plattsättare i Bromma och västerort utför vi plattsättning av golv och vägg i badrum, kök och våtrum för villa, radhus och bostadsrätt – med BKR-behörighet och våtrumsintyg.',
    localBusinessDescription:
      'Plattsättare i Bromma med BKR-behörighet och våtrumsintyg. Plattsättning av golv och vägg i badrum, kök och våtrum i västerort.',
  },
};
