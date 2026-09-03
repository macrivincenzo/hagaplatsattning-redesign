export type ContentFaq = {
  question: string;
  answer: string;
  answerHtml?: string;
};

export type ContentBlock = {
  title: string;
  bodyHtml: string;
  imageSrc?: string;
  imageAlt?: string;
  gray?: boolean;
  imageFirst?: boolean;
  textOnly?: boolean;
};

export type ContentSource = { label: string; url: string };

export type ContentPageData = {
  slug: string;
  breadcrumbName: string;
  route: string;
  isService: boolean;
  serviceType?: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    ogImageAlt: string;
    geoPlacename: string;
    geoPosition: string;
  };
  eyebrow: string;
  h1Html: string;
  heroLead: string;
  heroImageSrc: string;
  heroImageAlt: string;
  guideLabel: string;
  guideTitle: string;
  guideIntroHtml: string;
  guideBlocks: ContentBlock[];
  faqSubject: string;
  faqLead: string;
  faqs: ContentFaq[];
  sources?: ContentSource[];
  footerFocus: string;
  localBusinessDescription: string;
  knowsAbout: string[];
};

const BKR = '<a href="https://www.bkr.se/om-behorighet" target="_blank" rel="noopener" class="outbound-link">Byggkeramikrådet (BKR)</a>';
const BBV = '<a href="https://www.bkr.se" target="_blank" rel="noopener" class="outbound-link">BBV (Byggkeramikrådets branschregler för våtrum)</a>';
const BOVERKET = '<a href="https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum" target="_blank" rel="noopener" class="outbound-link">Boverkets byggregler</a>';
const SAKERVATTEN = '<a href="https://www.sakervatten.se/" target="_blank" rel="noopener" class="outbound-link">Säker Vatten</a>';

export const CONTENT_PAGES: Record<string, ContentPageData> = {
  mikrocement: {
    slug: 'mikrocement-badrum',
    breadcrumbName: 'Mikrocement i badrum',
    route: '/mikrocement-badrum/',
    isService: true,
    serviceType: 'Mikrocement',
    seo: {
      title: 'Mikrocement i badrum – sömlös yta utan fogar',
      description:
        'Mikrocement i badrum ger en sömlös, fogfri yta på golv och vägg. Läs om för- och nackdelar, hållbarhet och varför tätskiktet under är avgörande enligt BBV.',
      canonical: 'https://www.hagaplattsattning.se/mikrocement-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_2.avif',
      ogImageAlt: 'Badrum med slät, fogfri yta i mjuk kulör – mikrocement-känsla',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Mikrocement i Stockholm',
    h1Html: 'Mikrocement<br /><em>i badrum</em>',
    heroLead:
      'Mikrocement ger badrummet en sömlös, fogfri yta med ett modernt, sammanhållet uttryck. Vi på Haga Plattsättning AB lägger och samordnar mikrocement i Stockholm – alltid med korrekt tätskikt under ytan enligt branschreglerna, så att resultatet både blir snyggt och fuktsäkert.',
    heroImageSrc: '/hagaplatt_2.avif',
    heroImageAlt: 'Badrum med slät, fogfri yta i mjuk kulör – sömlöst mikrocement-uttryck',
    guideLabel: 'Guide: Mikrocement i badrum',
    guideTitle: 'Mikrocement i badrum – sömlös yta utan fogar',
    guideIntroHtml:
      'Mikrocement har blivit ett av de mest efterfrågade ytmaterialen i moderna badrum. Det ger ett fogfritt, sammanhållet uttryck som är svårt att uppnå med traditionellt kakel. Men mikrocement i våtrum ställer höga krav på underarbete och tätskikt – det är därför arbetet bör utföras eller samordnas av en behörig fackman. Här går vi igenom vad mikrocement är, för- och nackdelar, och hur vi säkerställer att ytan håller över tid.',
    guideBlocks: [
      {
        title: 'Vad är mikrocement?',
        bodyHtml:
          '<p>Mikrocement är en tunn, cementbaserad ytbeläggning som appliceras i flera skikt på golv och vägg. Resultatet blir en sömlös yta utan fogar – till skillnad från kakel och klinker, där fogarna alltid är en del av uttrycket (och ofta den svaga punkten).</p><p>Materialet är bara ett par millimeter tjockt, vilket gör att det kan läggas på befintliga underlag utan att bygga på höjden nämnvärt. Det går att färga i många kulörer och avslutas alltid med en skyddande försegling som gör ytan tålig mot vatten och slitage.</p>',
        imageSrc: '/hagaplatt_18.avif',
        imageAlt: 'Slät, fogfri badrumsvägg utan synliga plattor – mikrocement-uttryck',
      },
      {
        title: 'Mikrocement i våtrum – tätskikt och BBV är avgörande',
        bodyHtml:
          `<p>Den vanligaste missuppfattningen är att mikrocement i sig är vattentätt. Det är det inte. Precis som under kakel måste det finnas ett <strong>godkänt tätskikt</strong> under mikrocementen i ett våtrum – det är tätskiktet som skyddar konstruktionen mot fukt, inte ytan du ser.</p><p>Därför ska mikrocement i badrum utföras enligt ${BBV} och ${BOVERKET}. En behörig fackman säkerställer att tätskiktet är korrekt utfört och dokumenterat innan mikrocementen läggs på – annars riskerar du både fuktskada och att försäkringsbolaget nekar ersättning vid skada.</p><p>Vi samordnar hela kedjan: underarbete, tätskikt enligt branschregler och själva mikrocementen – med kvalitetsdokument efter avslutat arbete.</p>`,
        imageSrc: '/hagaplatt_13.avif',
        imageAlt: 'Tätskikt appliceras under mikrocement i badrum enligt BBV',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Mikrocement – för- och nackdelar',
        bodyHtml:
          '<p>Mikrocement är ett vackert val, men det passar inte alla projekt. Så här ser vi på det:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Fördel – sömlöst uttryck:</strong> inga fogar ger ett lugnt, modernt helhetsintryck</li><li><strong>Fördel – tunt skikt:</strong> kan ofta läggas utan att riva ner till stommen</li><li><strong>Fördel – lättstädat:</strong> färre fogar betyder mindre mögelkänsliga ytor</li><li><strong>Nackdel – kräver fackman:</strong> appliceringen är ett hantverk där erfarenhet syns direkt i resultatet</li><li><strong>Nackdel – sprickrisk vid fel underlag:</strong> rörelser i ett dåligt förberett underlag kan ge sprickor</li><li><strong>Nackdel – försegling behövs:</strong> ytan måste underhållas med rätt försegling för att förbli vattenavvisande</li></ul><p>Är du osäker på om mikrocement passar ditt badrum jämför vi gärna med kakel och klinker i samband med offerten.</p>',
        textOnly: true,
      },
      {
        title: 'Så lägger vi mikrocement – och så sköter du ytan',
        bodyHtml:
          '<p>Processen bygger på noggrant underarbete. Vi kontrollerar och förbereder underlaget, säkerställer tätskiktet i våtzoner, applicerar mikrocementen i flera skikt och avslutar med försegling. Varje skikt behöver torka innan nästa läggs – det är ett moment som inte går att stressa fram.</p><p>Underhållet är enkelt: rengör med milda medel och förnya förseglingen enligt rekommendation. Med rätt skötsel håller en fackmannamässigt lagd mikrocementyta i många år. Vi utför även <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">komplett badrumsrenovering i Stockholm</a> där mikrocement kan ingå som ytval.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'mikrocement i badrum',
    faqLead: 'Vanliga frågor vi får om mikrocement i våtrum – hållbarhet, tätskikt och underhåll.',
    faqs: [
      {
        question: 'Vad är mikrocement?',
        answer:
          'Mikrocement är en tunn, cementbaserad ytbeläggning som läggs i flera skikt på golv och vägg och ger en sömlös, fogfri yta. Den är bara ett par millimeter tjock och avslutas med en skyddande försegling.',
      },
      {
        question: 'Håller mikrocement i våtrum och dusch?',
        answer:
          'Ja, om det finns ett korrekt utfört tätskikt under ytan. Mikrocement i sig är inte vattentätt – det är tätskiktet under som skyddar konstruktionen. I våtrum ska arbetet utföras enligt BBV och Boverkets byggregler av en behörig fackman.',
      },
      {
        question: 'Kan man lägga mikrocement på befintligt kakel?',
        answer:
          'Ofta ja, eftersom mikrocement är tunt och kan läggas på flera underlag. Men det förutsätter att underlaget är stabilt, rent och rätt förbehandlat, och att tätskiktskravet i våtrum är uppfyllt. Vi bedömer alltid underlaget på plats innan vi rekommenderar lösning.',
      },
      {
        question: 'Spricker mikrocement?',
        answer:
          'Risken för sprickor finns främst om underlaget är dåligt förberett eller rör sig. Med rätt underarbete, armering där det behövs och korrekt applicering är risken liten. Det är just därför mikrocement bör läggas av en erfaren fackman.',
      },
      {
        question: 'Hur underhåller man mikrocement?',
        answer:
          'Rengör med milda rengöringsmedel och undvik starkt sura eller slipande produkter. Förseglingen behöver förnyas med jämna mellanrum enligt leverantörens rekommendation för att ytan ska förbli vattenavvisande.',
      },
      {
        question: 'Vad kostar mikrocement i badrum?',
        answer:
          'Kostnaden beror på ytans storlek, underlagets skick, om tätskikt behöver utföras och vilken finish du vill ha. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden enligt Skatteverkets regler.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Boverkets byggregler – fuktsäkerhet i badrum och våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Vi lägger och samordnar mikrocement i badrum i Stockholm – med korrekt tätskikt enligt BBV, dokumenterad kvalitet och ett sömlöst, hållbart resultat.',
    localBusinessDescription:
      'Mikrocement i badrum i Stockholm – sömlös, fogfri yta lagd med korrekt tätskikt enligt BBV av BKR-behörig plattsättare.',
    knowsAbout: ['Mikrocement', 'Mikrocement badrum', 'Fogfri yta', 'Tätskikt', 'Våtrum', 'Plattsättning', 'BKR-behörighet'],
  },

  golvvarme: {
    slug: 'golvvarme-badrum',
    breadcrumbName: 'Golvvärme i badrum',
    route: '/golvvarme-badrum/',
    isService: true,
    serviceType: 'Golvvärme i badrum',
    seo: {
      title: 'Golvvärme i badrum – el eller vattenburen under klinker',
      description:
        'Golvvärme i badrum under klinker – el eller vattenburen? Skillnaden, uppbyggnaden och vilken behörighet som krävs. Guide från BKR-behörig plattsättare.',
      canonical: 'https://www.hagaplattsattning.se/golvvarme-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_39.avif',
      ogImageAlt: 'Klinkergolv i badrum med golvvärme under – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Golvvärme i Stockholm',
    h1Html: 'Golvvärme<br /><em>i badrum</em>',
    heroLead:
      'Golvvärme är nästan standard i ett nyrenoverat badrum – och klinker är det perfekta ytmaterialet ovanpå, eftersom det leder värme bra. Vi på Haga Plattsättning AB samordnar golvvärme och lägger klinkern ovanpå med korrekt tätskikt, så att uppbyggnaden blir rätt från grunden.',
    heroImageSrc: '/hagaplatt_39.avif',
    heroImageAlt: 'Nylagt klinkergolv i badrum med golvvärme under – Haga Plattsättning AB',
    guideLabel: 'Guide: Golvvärme i badrum',
    guideTitle: 'Golvvärme i badrum – el eller vattenburen under klinker',
    guideIntroHtml:
      'Golvvärme höjer komforten i badrummet och hjälper golvet att torka snabbare, vilket minskar fuktbelastningen. Men valet mellan el och vattenburen golvvärme, och hur värmen byggs upp under tätskikt och klinker, påverkar både resultat och kostnad. Här går vi igenom skillnaderna och hur vi säkerställer rätt uppbyggnad.',
    guideBlocks: [
      {
        title: 'El eller vattenburen golvvärme i badrum?',
        bodyHtml:
          '<p>Det finns två huvudtyper, och de passar olika situationer:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Elgolvvärme:</strong> värmekabel eller -matta som läggs in i golvkonstruktionen. Enkel att installera vid en badrumsrenovering, snabb att reglera och vanligast i bostadsrätter och enskilda rum.</li><li><strong>Vattenburen golvvärme:</strong> slingor med varmvatten, ofta kopplade till husets värmesystem. Vanligare i villor och vid nybyggnation, mer lönsam i större ytor men kräver mer omfattande installation.</li></ul><p>I ett enskilt badrum, särskilt i bostadsrätt, är elgolvvärme ofta den praktiska lösningen. I villa kan vattenburet vara mer aktuellt om det redan finns ett system att ansluta till.</p>',
        imageSrc: '/hagaplatt_4.avif',
        imageAlt: 'Klinker lagd över golvvärme i badrum med jämn värmefördelning',
      },
      {
        title: 'Golvvärme under klinker – så byggs golvet upp',
        bodyHtml:
          `<p>Ordningen i golvet är avgörande för ett hållbart resultat. Förenklat byggs golvet upp så här: stomme, värme (el eller vattenburet) i avjämningen, därefter ${'tätskikt'} och överst klinker. Klinker är ett utmärkt ytmaterial över golvvärme eftersom det leder värmen effektivt och tål temperaturväxlingar bra.</p><p>Tätskiktet måste alltid ligga korrekt enligt ${BBV} – golvvärmen får aldrig äventyra fuktsäkerheten. Vi samordnar momenten i rätt ordning och lägger klinkern med rätt fall mot golvbrunn.</p>`,
        imageSrc: '/hagaplatt_46.avif',
        imageAlt: 'Klinkergolv med golvvärme i badrum – tätskikt under ytan enligt BBV',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Fördelar med golvvärme – och vad du bör tänka på',
        bodyHtml:
          '<p>Golvvärme handlar om mer än komfort:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Torrare golv:</strong> värmen hjälper golvet att torka, vilket minskar fukt och mögelrisk</li><li><strong>Jämn värme:</strong> behaglig värme underifrån istället för element på väggen</li><li><strong>Frigör väggyta:</strong> inga radiatorer som tar plats i ett litet badrum</li><li><strong>Att tänka på – uppbyggnadshöjd:</strong> golvet byggs på något, vilket kan påverka trösklar och dörrar</li><li><strong>Att tänka på – energi:</strong> en termostat med golvgivare håller förbrukningen i schack</li></ul>',
        textOnly: true,
      },
      {
        title: 'Behörighet – elektriker och VVS',
        bodyHtml:
          `<p>Som plattsättare ansvarar vi för avjämning, tätskikt och klinker. Själva elinstallationen av elgolvvärme ska utföras av en behörig elektriker, och vattenburen golvvärme som berör rörsystemet kräver en ${SAKERVATTEN}-auktoriserad VVS-installatör.</p><p>Vi samordnar dessa yrkesgrupper åt dig så att momenten sker i rätt ordning och allt blir korrekt dokumenterat. Du får en kontaktväg genom hela projektet. Läs mer om hur vi arbetar med <a href="/saker-vatten-badrum/" style="color:#0a0a1a;font-weight:600;">Säker Vatten i badrum</a> och <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a>.</p>`,
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'golvvärme i badrum',
    faqLead: 'Vanliga frågor om golvvärme under klinker – el kontra vattenburet, uppbyggnad och behörighet.',
    faqs: [
      {
        question: 'El eller vattenburen golvvärme i badrum – vad ska jag välja?',
        answer:
          'I ett enskilt badrum, särskilt i bostadsrätt, är elgolvvärme oftast den praktiska lösningen – enkel att installera vid renovering och snabb att reglera. Vattenburen golvvärme passar bättre i villa eller vid större ytor där det finns ett värmesystem att ansluta till.',
      },
      {
        question: 'Kan man ha golvvärme under klinker?',
        answer:
          'Ja, klinker är ett av de bästa ytmaterialen över golvvärme eftersom det leder värme effektivt och tål temperaturväxlingar. Golvet byggs upp med värme i avjämningen, tätskikt enligt BBV och klinker överst med rätt fall mot golvbrunn.',
      },
      {
        question: 'Krävs behörig elektriker för golvvärme?',
        answer:
          'Ja. Elinstallationen av elgolvvärme ska utföras av behörig elektriker. Vi som plattsättare ansvarar för avjämning, tätskikt och klinker, och samordnar elektriker respektive Säker Vatten-auktoriserad VVS vid vattenburen golvvärme.',
      },
      {
        question: 'Fungerar golvvärme med våtrumsmatta?',
        answer:
          'Elgolvvärme kan kombineras med våtrumsmatta, men förutsättningarna skiljer sig från klinker och det finns temperaturbegränsningar för mattan. Vi går igenom vad som gäller för just ditt golv innan vi rekommenderar lösning.',
      },
      {
        question: 'Hur mycket bygger golvvärme på höjden?',
        answer:
          'Elgolvvärme bygger normalt bara några millimeter och påverkar uppbyggnadshöjden marginellt. Vattenburen golvvärme kräver mer utrymme i konstruktionen. Vi kontrollerar trösklar, dörrar och avlopp så att uppbyggnaden fungerar i ditt badrum.',
      },
      {
        question: 'Vad kostar golvvärme i badrum?',
        answer:
          'Kostnaden beror på typ av golvvärme, ytans storlek och hur golvet behöver byggas upp. Vi lämnar en offert efter att vi sett förutsättningarna. ROT-avdrag kan dras med 30 % av arbetskostnaden enligt Skatteverkets regler.',
      },
    ],
    sources: [
      { label: 'Säker Vatten – branschregler för VVS-installationer', url: 'https://www.sakervatten.se/' },
      { label: 'Boverkets byggregler – fuktsäkerhet i badrum och våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Vi samordnar golvvärme i badrum och lägger klinkern ovanpå med korrekt tätskikt enligt BBV – el eller vattenburen, alltid med rätt uppbyggnad och dokumenterad kvalitet.',
    localBusinessDescription:
      'Golvvärme i badrum i Stockholm – vi samordnar el eller vattenburen golvvärme och lägger klinker med korrekt tätskikt enligt BBV.',
    knowsAbout: ['Golvvärme badrum', 'Elgolvvärme', 'Vattenburen golvvärme', 'Klinker', 'Tätskikt', 'Plattsättning', 'Badrumsrenovering'],
  },

  mogel: {
    slug: 'mogel-i-badrum',
    breadcrumbName: 'Mögel i badrum',
    route: '/mogel-i-badrum/',
    isService: false,
    seo: {
      title: 'Mögel i badrum – orsaker, åtgärder och när du bör agera',
      description:
        'Mögel i badrum: varför det uppstår, hur du tar bort det i fogar och silikon – och när det är ett tecken på att tätskiktet är förbrukat och måste göras om.',
      canonical: 'https://www.hagaplattsattning.se/mogel-i-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_12.avif',
      ogImageAlt: 'Badrum som bedöms för fukt och mögel – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Guide · BKR-behörig',
    h1Html: 'Mögel<br /><em>i badrum</em>',
    heroLead:
      'Mögel i badrummet är vanligt – men allt mögel är inte lika allvarligt. Ytligt mögel i silikonfogar är ofta enkelt att åtgärda, medan mögel som beror på en fuktskada bakom kaklet kan vara ett tecken på att tätskiktet är förbrukat. Här hjälper vi dig att förstå skillnaden, åtgärda rätt och veta när det är dags att renovera.',
    heroImageSrc: '/hagaplatt_12.avif',
    heroImageAlt: 'Badrum där fukt och mögel bedöms av behörig plattsättare',
    guideLabel: 'Guide: Mögel i badrum',
    guideTitle: 'Mögel i badrum – orsaker, åtgärd och när du bör renovera',
    guideIntroHtml:
      'Mögel trivs där det är fuktigt, varmt och dåligt ventilerat – precis som i många badrum. Den goda nyheten är att det oftast går att åtgärda. Den viktiga frågan är <em>varför</em> möglet uppstått: är det ytligt och kosmetiskt, eller en signal om fukt i konstruktionen? Nedan reder vi ut det, med utgångspunkt i vad myndigheter och branschorgan säger.',
    guideBlocks: [
      {
        title: 'Varför uppstår mögel i badrum?',
        bodyHtml:
          '<p>Mögel behöver fukt för att växa. I badrum kommer fukten från dusch och bad, och om den inte ventileras bort blir miljön perfekt för mögel. De vanligaste orsakerna är:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Dålig ventilation:</strong> fukten blir kvar i rummet efter dusch</li><li><strong>Bristande städning:</strong> tvål- och hudrester i fogar blir näring åt mögel</li><li><strong>Gamla eller skadade silikonfogar:</strong> släpper in fukt bakom ytan</li><li><strong>Fuktskada i konstruktionen:</strong> ett förbrukat tätskikt som läcker</li></ul><p>De tre första är ofta hanterbara. Den sista är allvarlig och hänger ihop med tätskiktets skick.</p>',
        imageSrc: '/hagaplatt_10.avif',
        imageAlt: 'Badrum med vask och fogar där fukt och mögel ofta uppstår',
      },
      {
        title: 'Ytligt mögel kontra allvarligt mögel',
        bodyHtml:
          `<p><strong>Ytligt mögel</strong> sitter på silikonfogar, i hörn eller på ytan av kakelfogar. Det är vanligt, oftast kosmetiskt och går att rengöra eller åtgärda genom att byta silikonfogen. Läs mer i vår guide om <a href="/silikonfog-badrum/" style="color:#0a0a1a;font-weight:600;">silikonfog i badrum</a>.</p><p><strong>Allvarligt mögel</strong> är när fukt trängt in i konstruktionen – bakom kakel, i golv eller väggar. Tecken är mögellukt även när rummet är torrt, missfärgningar som återkommer, eller bomma plattor. Då räcker det inte att rengöra ytan; orsaken sitter bakom tätskiktet. Detta hänger ofta ihop med ett tätskikt som passerat sin tekniska livslängd – läs mer om <a href="/hur-lange-haller-ett-badrum/" style="color:#0a0a1a;font-weight:600;">hur länge ett badrum håller</a> och <a href="/fuktskada-vattenskada-badrum/" style="color:#0a0a1a;font-weight:600;">fuktskada och vattenskada</a>.</p>`,
        imageSrc: '/hagaplatt_29.avif',
        imageAlt: 'Närbild på kakelfogar och hörn i badrum där mögel kan börja',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Är mögel i badrum farligt?',
        bodyHtml:
          '<p><a href="https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/miljohalsa-och-halsoskydd/inomhusmiljo-allmanna-lokaler-och-bostader/fukt-och-mogel/" target="_blank" rel="noopener" class="outbound-link">Folkhälsomyndigheten</a> anger att fukt och mögel inomhus kan ge hälsobesvär som irritation i luftvägarna, hosta och förvärrade allergi- och astmabesvär. Riskerna ökar ju längre exponeringen pågår och ju större mögelförekomsten är.</p><p>Det innebär att mögel inte bara är en estetisk fråga. Återkommande eller utbrett mögel, särskilt i kombination med lukt, bör tas på allvar och utredas – inte bara målas eller torkas över.</p>',
        textOnly: true,
      },
      {
        title: 'När mögel betyder att badrummet behöver renoveras',
        bodyHtml:
          '<p>Om möglet är ytligt och du åtgärdar orsaken – bättre ventilation, ny silikonfog, regelbunden städning – kan badrummet fortsätta användas. Men om något av följande stämmer bör du låta en behörig fackman bedöma tätskiktets skick:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li>Mögellukt finns kvar även när badrummet är torrt</li><li>Missfärgningar återkommer trots rengöring</li><li>Plattor låter ihåliga (bomma) vid knackning</li><li>Badrummet är äldre än tätskiktets förväntade livslängd</li></ul><p>I de fallen är mögel ofta ett symtom, inte problemet i sig. Vi gör en bedömning och hjälper dig vidare med <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a> om det behövs.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'mögel i badrum',
    faqLead: 'Vanliga frågor om mögel i badrum – hälsorisker, åtgärd och när det är dags att renovera.',
    faqs: [
      {
        question: 'Är mögel i badrum farligt?',
        answer:
          'Fukt och mögel inomhus kan enligt Folkhälsomyndigheten ge besvär som irritation i luftvägarna, hosta och förvärrad allergi eller astma. Riskerna ökar med tiden och med mängden mögel. Återkommande eller utbrett mögel bör därför utredas, inte bara torkas över.',
      },
      {
        question: 'Hur tar man bort mögel i fogar och silikon?',
        answer:
          'Ytligt mögel på silikonfogar åtgärdas oftast bäst genom att byta själva silikonfogen, eftersom mögel växer in i materialet och är svårt att få bort helt. Kakelfogar kan rengöras. Förbättrad ventilation och regelbunden städning förhindrar att det kommer tillbaka.',
      },
      {
        question: 'Betyder mögel att jag måste renovera badrummet?',
        answer:
          'Inte alltid. Ytligt mögel som beror på ventilation eller gamla fogar går att åtgärda utan renovering. Men om det luktar mögel även när rummet är torrt, missfärgningar återkommer eller plattor låter ihåliga kan det vara ett tecken på fukt i konstruktionen – då bör tätskiktet bedömas.',
      },
      {
        question: 'Varför kommer möglet tillbaka hela tiden?',
        answer:
          'Återkommande mögel beror nästan alltid på att grundorsaken finns kvar – oftast fukt som inte ventileras bort, eller en fuktskada bakom ytan. Att bara rengöra ytan tar bort symtomet, inte orsaken.',
      },
      {
        question: 'Kan det finnas mögel bakom kaklet?',
        answer:
          'Ja. Om tätskiktet är skadat eller förbrukat kan fukt tränga in och ge mögel i konstruktionen bakom kakel och i golv. Det syns inte alltid på ytan, men mögellukt och bomma plattor är varningstecken. Då krävs en bedömning av en behörig fackman.',
      },
      {
        question: 'Hjälper det att måla över möglet?',
        answer:
          'Nej. Att måla eller torka över mögel döljer bara symtomet tillfälligt – möglet och fukten finns kvar bakom färgen och växer ofta igenom. Åtgärda alltid orsaken istället.',
      },
    ],
    sources: [
      { label: 'Folkhälsomyndigheten – fukt och mögel inomhus', url: 'https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/miljohalsa-och-halsoskydd/inomhusmiljo-allmanna-lokaler-och-bostader/fukt-och-mogel/' },
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum', url: 'https://www.bkr.se' },
      { label: 'Boverkets byggregler – fuktsäkerhet i badrum och våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Den här guiden förklarar mögel i badrum – orsaker, hälsorisker och när mögel är ett tecken på att tätskiktet är förbrukat och badrummet bör renoveras.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som bedömer mögel och fukt i badrum och utför dokumenterad badrumsrenovering vid behov.',
    knowsAbout: ['Mögel badrum', 'Fukt i badrum', 'Ventilation', 'Tätskikt', 'Inomhusmiljö', 'Badrumsrenovering'],
  },

  silikonfog: {
    slug: 'silikonfog-badrum',
    breadcrumbName: 'Silikonfog i badrum',
    route: '/silikonfog-badrum/',
    isService: false,
    seo: {
      title: 'Silikonfog i badrum – när och hur du byter den',
      description:
        'Silikonfog i badrum: vad fogen gör, när den ska bytas och varför den inte är samma sak som tätskikt. Kan du byta själv eller bör du anlita fackman?',
      canonical: 'https://www.hagaplattsattning.se/silikonfog-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_8.avif',
      ogImageAlt: 'Kakelfogar och hörn i badrum där silikonfog tätar – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Guide · BKR-behörig',
    h1Html: 'Silikonfog<br /><em>i badrum</em>',
    heroLead:
      'Silikonfogen är badrummets mest underskattade detalj. Den tätar rörliga skarvar – vid golv, hörn och genomföringar – och är en av de första sakerna som börjar mögla eller släppa. Här förklarar vi vad silikonfogen gör, när den ska bytas, och den vanligaste missuppfattningen: att silikonfog är samma sak som tätskikt.',
    heroImageSrc: '/hagaplatt_8.avif',
    heroImageAlt: 'Kaklad duschvägg med nisch och fogar där silikonfog tätar skarvarna',
    guideLabel: 'Guide: Silikonfog i badrum',
    guideTitle: 'Silikonfog i badrum – när och hur du byter',
    guideIntroHtml:
      'En silikonfog håller inte för evigt. Den utsätts dagligen för fukt, värme och rörelser i konstruktionen, och behöver bytas med jämna mellanrum. Att hålla silikonfogarna i skick är ett enkelt underhåll som skyddar både utseende och funktion – men det är viktigt att förstå vad fogen faktiskt gör, och vad den inte gör.',
    guideBlocks: [
      {
        title: 'Vad gör silikonfogen – och vad gör den inte?',
        bodyHtml:
          '<p>Silikonfogen är en <strong>elastisk fog</strong> som tätar där två ytor möts och rör sig olika mycket – till exempel mellan golv och vägg, i innerhörn och runt genomföringar som blandare och golvbrunn. Eftersom dessa skarvar rör sig kan man inte använda hård kakelfog där; då skulle den spricka.</p><p>Det är viktigt att förstå att silikonfogen är ett <strong>komplement</strong>, inte byggnadens vattenskydd. Det verkliga skyddet mot fukt är tätskiktet bakom kaklet. Silikonfogen hindrar vatten från att rinna ner i skarvarna på ytan, men den ersätter aldrig tätskiktet.</p>',
        imageSrc: '/hagaplatt_15.avif',
        imageAlt: 'Silikonfog tätar skarven mellan golv och vägg i kaklat badrum',
      },
      {
        title: 'När ska silikonfogen bytas?',
        bodyHtml:
          '<p>Silikonfogen är en förbrukningsdetalj. Byt den när du ser något av detta:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Mögel i fogen:</strong> svarta prickar som inte går bort vid rengöring – möglet har växt in i materialet</li><li><strong>Fogen släpper:</strong> den lossnar från kakel eller golv och bildar en glipa</li><li><strong>Sprickor eller hårdnad fog:</strong> elasticiteten är borta och fogen tätar inte längre</li><li><strong>Missfärgning och gulnande:</strong> kosmetiskt, men ofta ett tecken på ålder</li></ul><p>Att byta silikonfog i tid är billig försäkring: en trasig fog släpper in vatten i skarvar och kan på sikt belasta konstruktionen.</p>',
        imageSrc: '/hagaplatt_27.avif',
        imageAlt: 'Kaklad badrumsvägg med fogar och silikonfog i hörn och skarvar',
        gray: true,
        imageFirst: true,
      },
      {
        title: 'Silikonfog är inte tätskikt – en vanlig och dyr missuppfattning',
        bodyHtml:
          `<p>Många tror att en hel och fin silikonfog betyder att badrummet är tätt. Så är det inte. Tätskiktet – den vattentäta barriären bakom kakel och klinker – är det som skyddar konstruktionen, och det utförs enligt ${BBV} av en ${BKR}-behörig plattsättare.</p><p>Silikonfogen sitter <em>ovanpå</em> ytan och tätar synliga skarvar. Att byta silikonfog förlänger alltså inte tätskiktets livslängd. Om tätskiktet är förbrukat hjälper ingen mängd ny silikon. Läs mer om <a href="/tatskikt-vatrumsintyg-bbv/" style="color:#0a0a1a;font-weight:600;">tätskikt, våtrumsintyg och BBV</a>.</p>`,
        textOnly: true,
      },
      {
        title: 'Byta silikonfog själv eller anlita fackman?',
        bodyHtml:
          '<p>Att byta en enkel silikonfog är ett av få våtrumsmoment som en händig privatperson kan göra själv – det kräver noggrannhet men inte behörighet. Det viktiga är att få bort all gammal fog och allt mögel, rengöra och torka ytan ordentligt, och lägga en jämn ny fog med våtrumsgodkänd silikon.</p><p>Men om fogen släpper för att det finns fukt bakom, eller om du är osäker på tätskiktets skick, ska du inte nöja dig med en ny fog. Då bör en behörig fackman bedöma orsaken. Är du osäker hjälper vi dig – och vid behov med <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'silikonfog i badrum',
    faqLead: 'Vanliga frågor om silikonfog – livslängd, skillnaden mot tätskikt och om du kan byta själv.',
    faqs: [
      {
        question: 'Hur ofta ska man byta silikonfog i badrum?',
        answer:
          'Det finns inget fast intervall – byt när fogen visar tecken på slitage: mögel som inte går bort, sprickor, hårdnad fog eller att den släpper från ytan. Med god ventilation och regelbunden städning håller fogen längre.',
      },
      {
        question: 'Är silikonfog samma sak som tätskikt?',
        answer:
          'Nej. Tätskiktet är den vattentäta barriären bakom kakel och klinker som skyddar konstruktionen, utfört enligt BBV. Silikonfogen sitter ovanpå ytan och tätar synliga, rörliga skarvar. Silikonfogen ersätter aldrig tätskiktet.',
      },
      {
        question: 'Kan jag byta silikonfogen själv?',
        answer:
          'Ja, ett enkelt fogbyte är ett av få våtrumsmoment som inte kräver behörighet. Det viktiga är att få bort all gammal fog och allt mögel, rengöra och torka ytan, och lägga en jämn ny fog med våtrumsgodkänd silikon.',
      },
      {
        question: 'Varför möglar silikonfogen?',
        answer:
          'Mögel växer i silikonfogen där det finns fukt och näring i form av tvål- och hudrester. Dålig ventilation och bristande städning snabbar på processen. När mögel väl växt in i materialet är det oftast lättast att byta fogen.',
      },
      {
        question: 'Vad gör jag om silikonfogen släpper från kaklet?',
        answer:
          'Byt fogen – men ta först reda på varför den släppte. Om det beror på rörelser eller ålder räcker en ny fog. Släpper den för att det finns fukt bakom, bör du låta en behörig fackman bedöma tätskiktets skick innan du tätar igen.',
      },
      {
        question: 'Räcker det att byta fog, eller måste jag renovera?',
        answer:
          'Om problemet är ytligt räcker ett fogbyte. Men om det luktar mögel, plattor låter ihåliga eller tätskiktet är gammalt är en ny fog bara kosmetik. Då bör tätskiktet bedömas och badrummet eventuellt renoveras.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Säker Vatten – branschregler för VVS-installationer', url: 'https://www.sakervatten.se/' },
    ],
    footerFocus:
      'Den här guiden förklarar silikonfog i badrum – vad den gör, när den ska bytas och varför den inte ersätter tätskiktet enligt BBV.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som utför tätskikt, fogning och badrumsrenovering enligt BBV.',
    knowsAbout: ['Silikonfog badrum', 'Fog', 'Tätskikt', 'Mögel', 'Våtrum', 'Underhåll', 'Plattsättning'],
  },

  vatrumstapet: {
    slug: 'vatrumstapet',
    breadcrumbName: 'Våtrumstapet eller kakel',
    route: '/vatrumstapet/',
    isService: false,
    seo: {
      title: 'Våtrumstapet – regler, livslängd och jämförelse med kakel',
      description:
        'Vad är våtrumstapet och när är det ett bra val? BKR-behörig plattsättare förklarar reglerna, livslängden och när kakel är ett bättre val i stället.',
      canonical: 'https://www.hagaplattsattning.se/vatrumstapet/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_22.avif',
      ogImageAlt: 'Badrumsvägg – våtrumstapet jämförs med kakel och klinker',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Materialguide',
    h1Html: 'Våtrumstapet<br /><em>eller kakel?</em>',
    heroLead:
      'Våtrumstapet är ett godkänt ytskikt för badrum – billigare och snabbare än kakel, men med kortare livslängd och ett annat uttryck. Som BKR-behörig plattsättare möter vi frågan ofta. Här är en ärlig genomgång av regler, hållbarhet och när respektive material är rätt val.',
    heroImageSrc: '/hagaplatt_22.avif',
    heroImageAlt: 'Badrumsvägg där våtrumstapet jämförs med kakel som ytskikt',
    guideLabel: 'Guide: Våtrumstapet',
    guideTitle: 'Våtrumstapet – vad det är, vad reglerna säger och när kakel är bättre',
    guideIntroHtml:
      'Våtrumstapet (även kallad våtrumsvägg eller våtrumsmatta för vägg) är ett plastbaserat ytskikt som svetsas i skarvarna och fungerar som både yta och tätskikt på väggar. Det är ett godkänt material enligt branschreglerna – men det är inte samma sak som att det alltid är rätt val. Här går vi igenom det viktigaste innan du bestämmer dig.',
    guideBlocks: [
      {
        title: 'Vad är våtrumstapet – och vad säger reglerna?',
        bodyHtml:
          `<p>Våtrumstapet är en tjock, plastbaserad väggbeklädnad som limmas mot underlaget och svetsas eller fogförseglas i skarvarna. Till skillnad från kakel – där tätskiktet ligger dolt bakom plattorna – fungerar våtrumstapeten ofta som <strong>både ytskikt och tätskikt</strong> i ett.</p><p>Arbetet ska utföras enligt gällande branschregler: GVK:s säkra våtrum eller ${BBV} beroende på system, och alltid enligt ${BOVERKET}. Skarvar, genomföringar och anslutningar mot golv är de kritiska punkterna – blir de fel har du ingen andra barriär mot fukt.</p><p>I praktiken innebär det att även våtrumstapet bör monteras av behörig fackman om du vill att försäkringen ska gälla fullt ut vid en skada.</p>`,
        imageSrc: '/hagaplatt_27.avif',
        imageAlt: 'Montering av ytskikt i våtrum enligt branschregler',
      },
      {
        title: 'Våtrumstapet eller kakel – ärlig jämförelse',
        bodyHtml:
          '<p>Båda är godkända ytskikt. Skillnaderna handlar om livslängd, uttryck och totalekonomi:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Livslängd:</strong> våtrumstapet håller normalt kortare än ett korrekt utfört kakelbadrum med separat tätskikt</li><li><strong>Uttryck och boendevärde:</strong> kakel upplevs i regel som mer påkostat och lyfter värderingen vid försäljning</li><li><strong>Kostnad:</strong> våtrumstapet är billigare i inköp och snabbare att montera</li><li><strong>Reparation:</strong> en skadad kakelplatta kan bytas – en skadad våtrumstapet behöver ofta göras om i större sektion</li><li><strong>Underlag:</strong> våtrumstapet kräver ett mycket slätt underlag, ofta våtrumsskiva, för ett bra resultat</li></ul><p>Vår erfarenhet: i gästtoaletter, tvättstugor och hyresfastigheter är våtrumstapet ofta ett klokt val. I familjebadrummet du ska leva med i 20 år är kakel med separat tätskikt nästan alltid den bättre investeringen. Jämför gärna med vår guide om <a href="/plastmatta-eller-kakel-badrum/" style="color:#0a0a1a;font-weight:600;">plastmatta eller kakel</a>.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Våtrumsskiva – underlaget som ofta avgör resultatet',
        bodyHtml:
          '<p>Våtrumsskivor är fuktbeständiga byggskivor som ersätter vanlig gips i våtzoner. De används som underlag för både våtrumstapet och kakel, och i renoveringar av äldre badrum är de ofta det som gör konstruktionen trygg.</p><p>För våtrumstapet är skivans släthet extra viktig – varje ojämnhet syns genom det tunna materialet. För kakel handlar det om stabilitet: skivan får inte svikta, då spricker fogarna. Vi bedömer alltid befintligt underlag innan vi rekommenderar lösning – ibland räcker spackling, ibland behöver väggen byggas om med våtrumsskiva.</p>',
        textOnly: true,
      },
      {
        title: 'Kan man kakla på våtrumstapet – och byta från tapet till kakel?',
        bodyHtml:
          '<p>Att kakla direkt ovanpå befintlig våtrumstapet avråder vi från, även om det ibland marknadsförs som en genväg. Tapetens vidhäftning mot underlaget är inte dimensionerad för kakelvikt, och du bygger in en okänd konstruktion som ingen kan lämna intyg på.</p><p>Rätt väg vid byte från våtrumstapet till kakel: riv ytskiktet, besikta underlaget, bygg upp med godkänt tätskikt enligt BBV och kakla sedan. Då får du ett <a href="/tatskikt-vatrumsintyg-bbv/" style="color:#0a0a1a;font-weight:600;">våtrumsintyg</a> som gäller hos försäkringsbolaget – och ett badrum som håller. Vi utför hela kedjan som en del av vår <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'våtrumstapet',
    faqLead: 'Korta svar på de vanligaste frågorna om våtrumstapet, regler och jämförelsen med kakel.',
    faqs: [
      {
        question: 'Får man ha våtrumstapet i badrum?',
        answer:
          'Ja, våtrumstapet är ett godkänt ytskikt för våtrum när den monteras enligt gällande branschregler med täta skarvar, genomföringar och anslutningar. Den fungerar då som både ytskikt och tätskikt på väggen.',
      },
      {
        question: 'Får man sätta upp våtrumstapet själv?',
        answer:
          'Det är inte förbjudet, men skarvsvetsning och genomföringar är svåra moment, och vid en vattenskada kan försäkringsbolaget neka eller sänka ersättningen om arbetet inte är fackmässigt utfört. Vår rekommendation är behörig fackman i alla våtzoner.',
      },
      {
        question: 'Är våtrumstapet billigare än kakel?',
        answer:
          'Ja, både material och arbete är billigare än kakel med separat tätskikt. Men kakel håller i regel längre och värderas högre vid försäljning, så totalekonomin över badrummets livslängd är ofta jämnare än prislappen antyder.',
      },
      {
        question: 'Kan man sätta ny våtrumstapet på gammal våtrumstapet?',
        answer:
          'Nej, det är inte en fackmässig lösning. Gammalt ytskikt rivs, underlaget besiktas och byggs vid behov upp med våtrumsskiva innan nytt ytskikt monteras. Att bygga lager på lager döljer fukt och gör framtida skador värre.',
      },
      {
        question: 'Kan man kakla direkt på våtrumstapet?',
        answer:
          'Vi avråder från det. Tapetens vidhäftning är inte gjord för kakelvikt och konstruktionen kan inte intygas. Riv ytskiktet, gör nytt tätskikt enligt BBV och kakla sedan – då gäller både garantier och försäkring.',
      },
      {
        question: 'Hur länge håller våtrumstapet?',
        answer:
          'Livslängden beror på kvalitet, montering och slitage, men den är i regel kortare än för ett korrekt kaklat badrum med separat tätskikt. Skarvarna är den svaga punkten och bör kontrolleras regelbundet.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Boverkets byggregler – fuktsäkerhet i våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
      { label: 'GVK – Golvbranschens Våtrumskontroll', url: 'https://www.gvk.se' },
    ],
    footerFocus:
      'Denna guide jämför våtrumstapet med kakel och klinker som ytskikt i våtrum – regler, livslängd och när respektive material är rätt val, skrivet av BKR-behörig plattsättare i Stockholm.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som hjälper dig välja rätt ytskikt – våtrumstapet, kakel eller klinker – och utför arbetet enligt BBV.',
    knowsAbout: ['Våtrumstapet', 'Våtrumsskiva', 'Kakel', 'Tätskikt', 'Våtrum', 'BBV', 'Badrumsrenovering'],
  },

  halvkaklat: {
    slug: 'halvkaklat-eller-helkaklat-badrum',
    breadcrumbName: 'Halvkaklat eller helkaklat',
    route: '/halvkaklat-eller-helkaklat-badrum/',
    isService: false,
    seo: {
      title: 'Halvkaklat eller helkaklat badrum? Regler och stil',
      description:
        'Halvkaklat eller helkaklat badrum? Vad reglerna faktiskt kräver, var du får sluta kakla och hur valet påverkar stil, städning och boendevärde.',
      canonical: 'https://www.hagaplattsattning.se/halvkaklat-eller-helkaklat-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_10.avif',
      ogImageAlt: 'Badrum med kaklade väggar – halvkaklat jämförs med helkaklat',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Designguide',
    h1Html: 'Halvkaklat eller<br /><em>helkaklat badrum?</em>',
    heroLead:
      'Måste man kakla hela badrummet – eller räcker det halvvägs? Svaret styrs av våtzonerna, inte av tycke och smak. Som BKR-behörig plattsättare förklarar vi vad reglerna kräver, var du faktiskt får sluta kakla och hur valet påverkar stil, städning och ekonomi.',
    heroImageSrc: '/hagaplatt_10.avif',
    heroImageAlt: 'Kaklat badrum i Stockholm – val mellan halvkaklat och helkaklat',
    guideLabel: 'Guide: Halvkaklat vs helkaklat',
    guideTitle: 'Halvkaklat eller helkaklat – vad reglerna kräver och vad som är smak',
    guideIntroHtml:
      'Halvkaklat badrum – kakel en bit upp på väggen och målad eller tapetserad yta ovanför – har gjort comeback, inte minst i sekelskifteslägenheter och lantligt inredda hem. Men i ett våtrum bestämmer branschreglerna var gränsen får gå. Här reder vi ut vad som gäller.',
    guideBlocks: [
      {
        title: 'Vad innebär halvkaklat respektive helkaklat?',
        bodyHtml:
          '<p><strong>Helkaklat</strong> betyder kakel eller klinker från golv till tak på alla väggar – standard i de flesta moderna badrumsrenoveringar.</p><p><strong>Halvkaklat</strong> betyder att kaklet slutar en bit upp på väggen, ofta runt 120–180 cm eller i bröstningshöjd, och att ytan ovanför målas med våtrumsfärg. Stilen är klassisk och förknippas med äldre badrum, pensionat och sekelskifteskaraktär.</p><p>Valet är dock inte fritt i hela rummet – det som avgör är var våtzonerna ligger.</p>',
        imageSrc: '/hagaplatt_12.avif',
        imageAlt: 'Helkaklat badrum med kakel från golv till tak',
      },
      {
        title: 'Vad säger reglerna? Våtzonerna styr',
        bodyHtml:
          `<p>Enligt ${BBV} delas badrummet in i våtzoner. <strong>Våtzon 1</strong> är duschplatsen och området närmast den (inklusive väggarna en meter ut från duschen) samt hela golvet – här krävs tätskikt på hela ytan, golv till tak, och ytskiktet ska vara vattentätt eller vattenavvisande.</p><p><strong>Våtzon 2</strong> är övriga väggar. Där är kraven lägre: ytskiktet ska vara vattenavvisande, vilket en godkänd våtrumsfärg klarar.</p><p>Översatt till praktiken: <strong>i och kring duschen ska det vara kaklat (eller annat tätt ytskikt) hela vägen upp</strong> – men på väggar utanför våtzon 1 kan du välja halvkaklat med våtrumsfärg ovanför. Ett badkar med dusch räknas som duschplats. Exakt zonindelning beror på rummets utformning, och det går vi igenom vid platsbesöket.</p>`,
        textOnly: true,
        gray: true,
      },
      {
        title: 'Stil, städning och boendevärde – så skiljer sig valen',
        bodyHtml:
          '<p>När reglerna är uppfyllda blir resten en fråga om smak och praktik:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Helkaklat:</strong> tåligast, enklast att torka av, tidlöst i värdering – men fler kvadratmeter kakel i budgeten</li><li><strong>Halvkaklat:</strong> karaktär och färgmöjligheter, billigare i material – men målade ytor behöver underhållas oftare i fuktig miljö</li><li><strong>Kondens:</strong> i badrum med dålig ventilation mår målade ytor sämre – ventilationen bör ses över oavsett val</li><li><strong>Vid försäljning:</strong> helkaklat uppfattas oftast som mer påkostat, men i rätt lägenhet kan ett välgjort halvkaklat badrum vara ett stilval som lyfter helheten</li></ul><p>Osäker på plattval? Läs vår guide om <a href="/kakel-eller-klinker-stockholm/" style="color:#0a0a1a;font-weight:600;">kakel eller klinker</a>.</p>',
        textOnly: true,
      },
      {
        title: 'Så gör vi det rätt – oavsett vilket du väljer',
        bodyHtml:
          '<p>Tätskiktet under ytan är detsamma oavsett om du väljer halv- eller helkaklat i våtzon 1 – det utförs enligt BBV och dokumenteras med egenkontroller och <a href="/tatskikt-vatrumsintyg-bbv/" style="color:#0a0a1a;font-weight:600;">kvalitetsdokument</a>. Väljer du halvkaklat avslutar vi kakelkanten med profil eller fasad kant och målning sker med godkänd våtrumsfärg ovanför.</p><p>Vi hjälper dig gärna att rita upp zonerna i just ditt badrum – som en del av en <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">komplett badrumsrenovering i Stockholm</a> eller ett rent <a href="/plattsattare-stockholm/" style="color:#0a0a1a;font-weight:600;">plattsättningsuppdrag</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'halvkaklat och helkaklat badrum',
    faqLead: 'Snabba svar om regler, våtzoner och vad som är smak respektive krav.',
    faqs: [
      {
        question: 'Måste man kakla hela badrummet?',
        answer:
          'Nej. Kravet på vattentätt ytskikt gäller våtzon 1 – duschplatsen med omgivande väggar upp till tak samt hela golvet. På väggar utanför våtzon 1 räcker vattenavvisande ytskikt, till exempel godkänd våtrumsfärg.',
      },
      {
        question: 'Vad innebär helkaklat badrum?',
        answer:
          'Kakel eller klinker på samtliga väggar från golv till tak. Det är standard i moderna renoveringar och det tåligaste alternativet i fuktig miljö.',
      },
      {
        question: 'Hur högt ska man kakla i ett halvkaklat badrum?',
        answer:
          'Vanligast är 120–180 cm eller bröstningshöjd – men i våtzon 1 (dusch/badkar med omgivning) måste det täta ytskiktet gå hela vägen till tak oavsett stilval. Zonerna avgör, inte måttbandet.',
      },
      {
        question: 'Kan man ha målad vägg i badrum?',
        answer:
          'Ja, utanför våtzon 1, med våtrumsgodkänd färg på rätt underlag. God ventilation är viktig för att målade ytor ska hålla fint över tid.',
      },
      {
        question: 'Är halvkaklat billigare än helkaklat?',
        answer:
          'Materialkostnaden blir lägre eftersom det går åt färre kvadratmeter kakel. Tätskikt, underarbete och våtzon 1 kostar dock detsamma, så skillnaden är mindre än många tror. Vi specificerar båda alternativen i offerten om du vill jämföra.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Boverkets byggregler – fuktsäkerhet i våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Denna guide förklarar skillnaden mellan halvkaklat och helkaklat badrum – vad branschreglerna kräver i respektive våtzon och vad som är stilval, skrivet av BKR-behörig plattsättare i Stockholm.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som utför både halvkaklade och helkaklade badrum med tätskikt enligt BBV och kvalitetsdokument.',
    knowsAbout: ['Halvkaklat badrum', 'Helkaklat badrum', 'Våtzoner', 'Kakel', 'Tätskikt', 'BBV', 'Badrumsrenovering'],
  },

  golvbrunn: {
    slug: 'byta-golvbrunn',
    breadcrumbName: 'Byta golvbrunn',
    route: '/byta-golvbrunn/',
    isService: true,
    serviceType: 'Golvbrunnsbyte',
    seo: {
      title: 'Byta golvbrunn – när krävs det och hur går det till?',
      description:
        'När måste golvbrunnen bytas och varför kräver det oftast att tätskiktet görs om? Reglerna för brunnar äldre än 1990 och hur bytet går till i praktiken.',
      canonical: 'https://www.hagaplattsattning.se/byta-golvbrunn/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_29.avif',
      ogImageAlt: 'Golvbrunn i nyrenoverat badrumsgolv med klinker och korrekt fall',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Teknisk guide',
    h1Html: 'Byta<br /><em>golvbrunn</em>',
    heroLead:
      'Golvbrunnen är badrummets mest kritiska punkt – de flesta vattenskador uppstår i eller kring den. Brunnar från före 1990 ska enligt branschreglerna bytas när badrummet renoveras. Här förklarar vi varför, hur bytet går till och varför det aldrig ska göras som ett isolerat ingrepp i ett tätt golv.',
    heroImageSrc: '/hagaplatt_29.avif',
    heroImageAlt: 'Nyrenoverat badrumsgolv med klinker, korrekt fall och modern golvbrunn',
    guideLabel: 'Guide: Byta golvbrunn',
    guideTitle: 'Byta golvbrunn – när det krävs, hur det går till och vad som ofta missas',
    guideIntroHtml:
      'Golvbrunnen samlar allt vatten i badrummet, och anslutningen mellan brunn och tätskikt är konstruktionens känsligaste detalj. Därför finns tydliga branschkrav på när brunnen ska bytas och hur anslutningen ska utföras. Som BKR-behörigt företag hanterar vi golvbrunnsbyten som en integrerad del av tätskiktsarbetet – med Säker Vatten-certifierad VVS för själva installationen.',
    guideBlocks: [
      {
        title: 'När måste golvbrunnen bytas?',
        bodyHtml:
          `<p>Branschreglerna är tydliga: <strong>golvbrunnar installerade före 1990 ska bytas</strong> i samband med att badrummet renoveras och nytt tätskikt utförs. Äldre brunnar – ofta i gjutjärn eller tidiga plastmodeller – uppfyller inte dagens standard (SS-EN 1253) och går inte att ansluta tätt mot moderna tätskiktssystem.</p><p>Brunnen bör också bytas om den är skadad, sitter snett, saknar klämring eller om förhöjningsringar monterats felaktigt. Vid vår förbesiktning kontrollerar vi alltid brunnens typ, skick och anslutning – det är en av de första sakerna vi tittar på i ett äldre badrum. Kraven framgår av ${BBV} och ${SAKERVATTEN}.</p>`,
        imageSrc: '/hagaplatt_39.avif',
        imageAlt: 'Kontroll av golvbrunn och fall vid badrumsrenovering',
      },
      {
        title: 'Därför byts brunnen bara i samband med tätskiktsarbete',
        bodyHtml:
          '<p>En golvbrunn kan tekniskt sett bytas utan att hela badrummet renoveras – men då bryts golvets tätskikt upp, och ett tätskikt som lagas punktvis kan aldrig intygas som helhet. Resultatet blir ett badrum utan giltigt våtrumsintyg, vilket försäkringsbolaget kan använda mot dig vid en framtida skada.</p><p>Därför är den fackmässiga ordningen: byt brunn när golvets tätskikt ändå görs om. Brunnsbytet blir då en naturlig del av renoveringen – VVS:aren sätter brunnen, vi bygger fall och tätskikt kring den och dokumenterar anslutningen i egenkontrollen. Läs mer om helheten i vår guide om <a href="/tatskikt-vatrumsintyg-bbv/" style="color:#0a0a1a;font-weight:600;">tätskikt och våtrumsintyg</a>.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Så går ett golvbrunnsbyte till hos oss',
        bodyHtml:
          '<p>Bytet är ett samspel mellan två yrkesgrupper – och dokumentationen är lika viktig som själva arbetet:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Förbesiktning</strong> – brunnens typ, ålder och anslutningar bedöms innan offert</li><li><strong>Rivning och friläggning</strong> – golvet bilas upp kring brunnen och avloppets skick kontrolleras</li><li><strong>Ny brunn av Säker Vatten-certifierad VVS</strong> – monterad i våg, i rätt höjd och fixerad enligt monteringsanvisning</li><li><strong>Fallbygge och tätskikt</strong> – vi bygger korrekt fall mot brunnen och ansluter tätskiktet med klämring enligt BBV</li><li><strong>Egenkontroll och kvalitetsdokument</strong> – anslutningen fotodokumenteras innan plattsättning</li></ul><p>Felaktigt fall och slarviga brunnsanslutningar är bland de vanligaste orsakerna till <a href="/fuktskada-vattenskada-badrum/" style="color:#0a0a1a;font-weight:600;">fuktskador i badrum</a> – det är här erfarenheten gör skillnad.</p>',
        textOnly: true,
      },
      {
        title: 'Vanliga frågor vi möter i Stockholms bestånd',
        bodyHtml:
          '<p>I hus från 40–70-talen är gjutjärnsbrunnar fortfarande vanliga, och i många BRF:er aktualiseras brunnsfrågan vid stambyte – då byts ofta brunnarna samtidigt som stammarna. Renoverar du badrummet efter ett stambyte är brunnen i regel redan modern, och då handlar vårt jobb om fall, tätskikt och anslutning.</p><p>Planerar du helrenovering? Se vår sida om <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a> – golvbrunnsbedömningen ingår alltid i platsbesöket.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'golvbrunnsbyte',
    faqLead: 'Korta svar om golvbrunnar, regler och hur bytet hänger ihop med tätskiktet.',
    faqs: [
      {
        question: 'Kan man byta golvbrunn själv?',
        answer:
          'Nej, det avråder vi bestämt från. Bytet kräver VVS-kompetens för avloppsanslutningen och bryter golvets tätskikt, som sedan måste återställas fackmässigt för att försäkringen ska gälla. Anlita Säker Vatten-certifierad VVS och behörig plattsättare.',
      },
      {
        question: 'Måste golvbrunnen bytas vid badrumsrenovering?',
        answer:
          'Om brunnen är installerad före 1990 – ja, enligt branschreglerna. Nyare brunnar bedöms utifrån skick, typ och om de går att ansluta tätt mot det nya tätskiktet.',
      },
      {
        question: 'Kan man byta golvbrunn utan att renovera badrummet?',
        answer:
          'Tekniskt ja, men golvets tätskikt bryts och kan inte intygas som helhet efteråt. Därför rekommenderas bytet i samband med att golvets tätskikt ändå görs om – allt annat är en nödlösning.',
      },
      {
        question: 'Hur vet jag om min golvbrunn är från före 1990?',
        answer:
          'Gjutjärnsbrunnar och äldre plastbrunnar utan modern klämringsanslutning är typiska tecken. Vi identifierar brunnstyp och ålder vid förbesiktningen – ofta syns det på galler, material och anslutning.',
      },
      {
        question: 'Vad kostar det att byta golvbrunn?',
        answer:
          'Kostnaden beror på bjälklagets typ, avloppets skick och om bytet görs som del av en större renovering. Vi lämnar en specificerad offert efter platsbesök. ROT-avdrag kan dras med 30 % av arbetskostnaden enligt Skatteverkets regler.',
      },
      {
        question: 'Vem byter golvbrunnen – plattsättaren eller rörmokaren?',
        answer:
          'Båda. Säker Vatten-certifierad VVS monterar brunnen och ansluter avloppet, sedan bygger plattsättaren fall och tätskikt kring brunnen och ansluter med klämring enligt BBV. Samordningen mellan yrkesgrupperna är avgörande – och den sköter vi.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Säker Vatten – branschregler för VVS-installationer', url: 'https://www.sakervatten.se/' },
      { label: 'Boverkets byggregler – fuktsäkerhet i våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Denna guide förklarar när golvbrunnen måste bytas, varför bytet hör ihop med tätskiktsarbetet och hur vi utför det med Säker Vatten-certifierad VVS och BKR-dokumentation.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som samordnar golvbrunnsbyte, fallbygge och tätskikt enligt BBV vid badrumsrenovering.',
    knowsAbout: ['Golvbrunn', 'Byta golvbrunn', 'Tätskikt', 'Fall till brunn', 'Säker Vatten', 'BBV', 'Badrumsrenovering'],
  },

  toalett: {
    slug: 'toalett-renovering',
    breadcrumbName: 'Toalettrenovering',
    route: '/toalett-renovering/',
    isService: true,
    serviceType: 'Toalettrenovering',
    seo: {
      title: 'Toalettrenovering – renovera gästtoalett och WC',
      description:
        'Renovera toalett eller gästtoalett i Stockholm? När ett WC räknas som våtrum, vilka regler som styr och hur renoveringen går till steg för steg.',
      canonical: 'https://www.hagaplattsattning.se/toalett-renovering/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_40.avif',
      ogImageAlt: 'Nyrenoverad gästtoalett med kakel och klinker – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Toalettrenovering i Stockholm',
    h1Html: 'Renovera<br /><em>toalett &amp; gäst-WC</em>',
    heroLead:
      'En gästtoalett är ofta hemmets mest använda och minst omtänkta rum. Renoveringen är mindre än ett helt badrum – men reglerna är inte alltid enklare. Här förklarar vi när ett WC räknas som våtrum, vad det betyder för material och tätskikt, och hur vi genomför projektet.',
    heroImageSrc: '/hagaplatt_40.avif',
    heroImageAlt: 'Nyrenoverad gästtoalett i Stockholm med kakel och klinker',
    guideLabel: 'Guide: Toalettrenovering',
    guideTitle: 'Renovera toalett – mindre rum, samma krav på hantverket',
    guideIntroHtml:
      'En toalettrenovering går snabbare och kostar mindre än en badrumsrenovering – men det lilla formatet ställer egna krav: varje centimeter syns, plattformat och ljus avgör rumskänslan, och frågan om tätskikt beror på om rummet räknas som våtrum eller inte. Så här tänker vi.',
    guideBlocks: [
      {
        title: 'Räknas en toalett som våtrum?',
        bodyHtml:
          `<p>Det beror på utrustningen. Ett WC <strong>utan dusch eller badkar</strong> med enbart toalettstol och handfat räknas normalt inte som våtrum i branschreglernas mening – då krävs inget heltäckande tätskikt, och du har större frihet i materialval.</p><p>Finns det – eller planeras – en dusch blir rummet ett våtrum fullt ut, med krav på tätskikt enligt ${BBV} och golvbrunn. Även utan dusch rekommenderar vi vattentåliga ytskikt och omsorg kring golvets anslutningar: ett läckande handfat eller en toalettstol som står och droppar ska inte kunna skada konstruktionen.</p>`,
        imageSrc: '/hagaplatt_46.avif',
        imageAlt: 'Kaklad gästtoalett med handfat – toalettrenovering i Stockholm',
      },
      {
        title: 'Litet rum – därför blir detaljerna viktigare',
        bodyHtml:
          '<p>På 1,5–3 kvadratmeter syns varje val:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Plattformat:</strong> storformat ger lugn yta med få fogar – men kräver perfekt underlag; småformat och mosaik kan tvärtom ge karaktär</li><li><strong>Ljusa toner och genomtänkt belysning</strong> – gör det kompakta rummet visuellt större</li><li><strong>Vägghängd toalettstol och kommod</strong> – frigör golvyta och gör städningen enklare</li><li><strong>Halvkaklat med våtrumsfärg</strong> – klassiskt val i gäst-WC, läs vår guide om <a href="/halvkaklat-eller-helkaklat-badrum/" style="color:#0a0a1a;font-weight:600;">halvkaklat eller helkaklat</a></li></ul><p>Vi hjälper dig med materialvalen utifrån rummets ljus, mått och stil – det ingår i offertarbetet.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Så går en toalettrenovering till hos oss',
        bodyHtml:
          '<p>Samma dokumenterade arbetsgång som i våra badrumsprojekt, anpassad till det mindre formatet:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Platsbesök och skriftlig offert</strong> – vi bedömer golv, väggar och installationernas skick</li><li><strong>Rivning och underlagskontroll</strong> – ojämna underlag spacklas eller byggs upp</li><li><strong>VVS och el via certifierade partners</strong> – flytt av handfat eller ny belysning görs i rätt ordning</li><li><strong>Plattsättning och fogning</strong> – med samma precision som i våtrum</li><li><strong>Slutkontroll</strong> – och kvalitetsdokument när arbetet omfattar tätskikt</li></ul><p>Renoverar du i bostadsrätt kan anmälan till föreningen krävas även för ett gäst-WC om VVS berörs – vi hjälper dig med underlaget.</p>',
        textOnly: true,
      },
      {
        title: 'Toalett i dag – badrum i morgon?',
        bodyHtml:
          '<p>En vanlig fråga i Stockholms lägenheter och villor: går gäst-WC:t att bygga om till duschrum längre fram? Ofta ja – men då ska rummet redan nu förberedas som våtrum med tätskikt och golvbrunn, annars görs jobbet om två gånger.</p><p>Berätta om dina långsiktiga planer vid platsbesöket, så dimensionerar vi lösningen rätt från början. Se även vår <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a> och guiden om <a href="/byta-golvbrunn/" style="color:#0a0a1a;font-weight:600;">golvbrunnsbyte</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'toalettrenovering',
    faqLead: 'Snabba svar om regler, material och process för toalett och gäst-WC.',
    faqs: [
      {
        question: 'Får man renovera toaletten själv?',
        answer:
          'I ett WC utan dusch är kraven lägre och du får göra mer själv, till exempel måla och byta inredning. VVS-arbeten ska dock alltid utföras fackmässigt, och i bostadsrätt kan föreningens regler kräva behörig entreprenör även här.',
      },
      {
        question: 'Krävs tätskikt i en gästtoalett?',
        answer:
          'Inte enligt branschreglerna om rummet saknar dusch och badkar. Men vattentåliga ytskikt och täta anslutningar kring golvet är alltid en klok försäkring mot läckage från handfat och toalettstol.',
      },
      {
        question: 'Kan man göra om gästtoaletten till duschrum?',
        answer:
          'Ofta ja, om avlopp och ventilation går att lösa. Rummet blir då ett våtrum med krav på tätskikt enligt BBV och golvbrunn. Planera för det redan vid toalettrenoveringen om tanken finns – det sparar dubbelarbete.',
      },
      {
        question: 'Hur lång tid tar en toalettrenovering?',
        answer:
          'Kortare än ett badrum eftersom rummet är mindre och tätskiktsmomenten ofta färre. Exakt tid beror på omfattning och materialval – du får en tydlig tidplan i offerten.',
      },
      {
        question: 'Vad kostar det att renovera en toalett?',
        answer:
          'Det beror på storlek, materialval och om VVS ska flyttas. Ett gäst-WC är väsentligt billigare än ett komplett badrum. Vi lämnar en specificerad offert efter platsbesök, och ROT-avdrag kan dras med 30 % av arbetskostnaden.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'Säker Vatten – branschregler för VVS-installationer', url: 'https://www.sakervatten.se/' },
    ],
    footerFocus:
      'Denna sida beskriver toalettrenovering i Stockholm – gäst-WC och separata toaletter – med rätt materialval, fackmässig VVS och plattsättning av BKR-behörigt företag.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som renoverar toaletter och gäst-WC med kakel, klinker och fackmässig VVS-samordning.',
    knowsAbout: ['Toalettrenovering', 'Gästtoalett', 'WC', 'Kakel', 'Plattsättning', 'Våtrum', 'Badrumsrenovering'],
  },

  vatrumsskiva: {
    slug: 'vatrumsskiva',
    breadcrumbName: 'Våtrumsskiva',
    route: '/vatrumsskiva/',
    isService: false,
    seo: {
      title: 'Våtrumsskiva – rätt underlag för kakel i badrum',
      description:
        'Vad är en våtrumsskiva och när ska den användas? Skillnaden mellan skivor som underlag för kakel och skivor med färdig yta – plus vanliga misstag.',
      canonical: 'https://www.hagaplattsattning.se/vatrumsskiva/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_47.avif',
      ogImageAlt: 'Väggunderlag förbereds i badrum inför tätskikt och kakel',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Teknisk guide',
    h1Html: 'Våtrumsskiva<br /><em>– rätt underlag i badrum</em>',
    heroLead:
      'Våtrumsskivan är det man inte ser i ett färdigt badrum – men den avgör om kaklet sitter still och tätskiktet håller. Här förklarar vi vad en våtrumsskiva är, skillnaden mot skivor med färdig yta som Fibo, och varför underlaget är fel ställe att spara pengar på.',
    heroImageSrc: '/hagaplatt_47.avif',
    heroImageAlt: 'Underlag och tätskikt förbereds på badrumsvägg inför plattsättning',
    guideLabel: 'Guide: Våtrumsskiva',
    guideTitle: 'Våtrumsskiva – vad det är, när den krävs och vanliga misstag',
    guideIntroHtml:
      'Ordet våtrumsskiva används om två helt olika saker: byggskivor som ersätter gips som underlag för tätskikt och kakel – och väggpaneler med färdig yta (som Fibo och liknande) som monteras i stället för kakel. Båda har sin plats, men de löser olika problem. Här reder vi ut begreppen.',
    guideBlocks: [
      {
        title: 'Våtrumsskiva som underlag för kakel – när och varför?',
        bodyHtml:
          `<p>I våtzoner rekommenderar branschreglerna fukttåliga skivmaterial i stället för vanlig kartonggips. Våtrumsskivor av cement- eller polymerbaserat material sväller inte vid fukt, ger stabil grund för tätskiktet och bär tyngre plattformat utan att svikta.</p><p>Vid renovering av äldre badrum är väggarna ofta det stora frågetecknet: skruttig gips, ojämn puts eller organiskt material som inte får byggas in i en våtzon. Då byggs väggen om med våtrumsskiva innan tätskikt enligt ${BBV} appliceras. Det är ett moment som syns i offerten men som betalar sig i decennier av stabilitet.</p>`,
        imageSrc: '/hagaplatt_13.avif',
        imageAlt: 'Tätskikt appliceras på förberett skivunderlag i badrum',
      },
      {
        title: 'Skivor med färdig yta (Fibo m.fl.) – alternativ till kakel?',
        bodyHtml:
          '<p>Den andra sortens "våtrumsskiva" är väggpaneler med färdig, vattentät yta – ofta laminat på trästomme – som monteras direkt och ersätter både tätskikt och kakel på väggen. De är snabba att montera och billigare än kakel, vilket gör dem populära i fritidshus, tvättstugor och hyresbestånd.</p><p>Begränsningarna liknar våtrumstapetens: skarvarna är den svaga punkten, livslängden är i regel kortare än för kakel med separat tätskikt, och uttrycket värderas sällan lika högt vid försäljning. Vår ärliga rekommendation: bra val i rätt utrymme – men i det permanenta familjebadrummet är kakel på korrekt tätskikt fortfarande standarden. Jämför gärna med vår guide om <a href="/vatrumstapet/" style="color:#0a0a1a;font-weight:600;">våtrumstapet</a>.</p>',
        textOnly: true,
        gray: true,
      },
      {
        title: 'Vanliga misstag med våtrumsskivor',
        bodyHtml:
          '<p>Det här är felen vi oftast möter när vi river i badrum:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Vanlig gips i våtzon</strong> – kartonggips bakom kakel i dusch är en tickande fuktskada</li><li><strong>Skiva direkt på gammalt ytskikt</strong> – panel monterad ovanpå befintlig våtrumstapet eller kakel döljer fukt i stället för att lösa problemet</li><li><strong>Fel infästning</strong> – skivor som sviktar ger sprickor i fog och tätskikt</li><li><strong>Otäta skarvar och genomföringar</strong> – på panelsystem med färdig yta är varje skarv en potentiell läcka</li></ul><p>Misstänker du fukt bakom befintliga ytskikt? Läs vår guide om <a href="/fuktskada-vattenskada-badrum/" style="color:#0a0a1a;font-weight:600;">fuktskada i badrum</a>.</p>',
        textOnly: true,
      },
      {
        title: 'Så bedömer vi underlaget i ditt badrum',
        bodyHtml:
          '<p>Vid platsbesöket knackar, mäter och bedömer vi befintliga väggar: är underlaget stabilt och torrt kan det ofta behållas och förberedas; är det tveksamt bygger vi om med våtrumsskiva. Beslutet dokumenteras i offerten så att du vet exakt vad som ingår.</p><p>Underlagsarbetet är grunden i varje <a href="/badrumsrenovering-stockholm/" style="color:#0a0a1a;font-weight:600;">badrumsrenovering i Stockholm</a> – och skälet till att ett kvalitetsbadrum håller i 25 år i stället för 15. Mer om tätskiktet ovanpå hittar du i guiden om <a href="/tatskikt-vatrumsintyg-bbv/" style="color:#0a0a1a;font-weight:600;">tätskikt och våtrumsintyg</a>.</p>',
        textOnly: true,
        gray: true,
      },
    ],
    faqSubject: 'våtrumsskivor',
    faqLead: 'Snabba svar om våtrumsskivor som underlag och som färdiga väggsystem.',
    faqs: [
      {
        question: 'Kan man ha våtrumsskiva i duschen?',
        answer:
          'Ja. Som underlag för tätskikt och kakel är våtrumsskivan tvärtom det rekommenderade valet i våtzon 1. Panelsystem med färdig yta får också användas i dusch om systemet är godkänt och skarvarna monteras exakt enligt tillverkarens anvisning.',
      },
      {
        question: 'Får man sätta våtrumsskiva själv?',
        answer:
          'Skivmontering i sig är inte förbjuden att göra själv, men i våtzoner hänger den ihop med tätskiktsarbetet – och där kräver försäkringsbolag och BRF:er i praktiken behörig entreprenör med dokumentation. Felmonterade skarvar är en av de vanligaste skadeorsakerna.',
      },
      {
        question: 'Är våtrumsskivor billigare än kakel?',
        answer:
          'Panelsystem med färdig yta är billigare i både material och arbetstid. Men livslängden är i regel kortare och andrahandsvärdet lägre, så räknat per år är skillnaden mindre än prislappen antyder.',
      },
      {
        question: 'Kan man kakla på en våtrumsskiva?',
        answer:
          'Ja – det är precis vad underlagsskivorna är gjorda för, med tätskikt enligt BBV mellan skiva och kakel. Däremot ska man inte kakla på panelsystem med färdig laminatyta.',
      },
      {
        question: 'Måste gipsskivor bytas ut i badrum?',
        answer:
          'Vanlig kartonggips ska inte sitta i våtzon 1. Vid renovering bedömer vi väggarnas skick – ofta byts gipsen i duschzonen mot våtrumsskiva medan övriga väggar kan behållas och förberedas.',
      },
    ],
    sources: [
      { label: 'Byggkeramikrådet (BKR) – branschregler för våtrum (BBV)', url: 'https://www.bkr.se' },
      { label: 'GVK – Golvbranschens Våtrumskontroll', url: 'https://www.gvk.se' },
      { label: 'Boverkets byggregler – fuktsäkerhet i våtrum', url: 'https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/badrum-och-andra-vatrum' },
    ],
    footerFocus:
      'Denna guide förklarar våtrumsskivans roll i badrummet – som underlag för tätskikt och kakel respektive som väggsystem med färdig yta – skrivet av BKR-behörig plattsättare i Stockholm.',
    localBusinessDescription:
      'BKR-behörig plattsättare i Stockholm som bygger korrekta underlag med våtrumsskiva och utför tätskikt och plattsättning enligt BBV.',
    knowsAbout: ['Våtrumsskiva', 'Underlag kakel', 'Tätskikt', 'Fibo', 'Våtzoner', 'BBV', 'Badrumsrenovering'],
  },
};
