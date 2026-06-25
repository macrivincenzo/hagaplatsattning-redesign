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
      title: 'Mikrocement i Badrum – Sömlös Yta utan Fogar | Haga Plattsättning AB',
      description:
        'Mikrocement i badrum ger en sömlös, fogfri yta på golv och vägg. Vi lägger och samordnar mikrocement i Stockholm med korrekt tätskikt enligt BBV. Läs om för- och nackdelar, hållbarhet och process – begär kostnadsfri offert.',
      canonical: 'https://www.hagaplattsattning.se/mikrocement-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_40.avif',
      ogImageAlt: 'Badrum med sömlös mikrocement på golv och vägg – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Mikrocement i Stockholm',
    h1Html: 'Mikrocement<br /><em>i badrum</em>',
    heroLead:
      'Mikrocement ger badrummet en sömlös, fogfri yta med ett modernt, sammanhållet uttryck. Vi på Haga Plattsättning AB lägger och samordnar mikrocement i Stockholm – alltid med korrekt tätskikt under ytan enligt branschreglerna, så att resultatet både blir snyggt och fuktsäkert.',
    heroImageSrc: '/hagaplatt_40.avif',
    heroImageAlt: 'Badrum med sömlös mikrocement på golv och vägg lagd av Haga Plattsättning AB',
    guideLabel: 'Guide: Mikrocement i badrum',
    guideTitle: 'Mikrocement i badrum – sömlös yta utan fogar',
    guideIntroHtml:
      'Mikrocement har blivit ett av de mest efterfrågade ytmaterialen i moderna badrum. Det ger ett fogfritt, sammanhållet uttryck som är svårt att uppnå med traditionellt kakel. Men mikrocement i våtrum ställer höga krav på underarbete och tätskikt – det är därför arbetet bör utföras eller samordnas av en behörig fackman. Här går vi igenom vad mikrocement är, för- och nackdelar, och hur vi säkerställer att ytan håller över tid.',
    guideBlocks: [
      {
        title: 'Vad är mikrocement?',
        bodyHtml:
          '<p>Mikrocement är en tunn, cementbaserad ytbeläggning som appliceras i flera skikt på golv och vägg. Resultatet blir en sömlös yta utan fogar – till skillnad från kakel och klinker, där fogarna alltid är en del av uttrycket (och ofta den svaga punkten).</p><p>Materialet är bara ett par millimeter tjockt, vilket gör att det kan läggas på befintliga underlag utan att bygga på höjden nämnvärt. Det går att färga i många kulörer och avslutas alltid med en skyddande försegling som gör ytan tålig mot vatten och slitage.</p>',
        imageSrc: '/hagaplatt_46.avif',
        imageAlt: 'Närbild på sömlös mikrocementyta i badrum utan fogar',
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
      title: 'Golvvärme i Badrum – El eller Vattenburen under Klinker | Haga Plattsättning AB',
      description:
        'Golvvärme i badrum under klinker – el eller vattenburen? Vi samordnar golvvärme och lägger klinkern ovanpå med korrekt tätskikt i Stockholm. Läs om skillnaden, uppbyggnad och behörighet – begär kostnadsfri offert.',
      canonical: 'https://www.hagaplattsattning.se/golvvarme-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_5.avif',
      ogImageAlt: 'Badrum med klinkergolv och golvvärme installerad av Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Golvvärme i Stockholm',
    h1Html: 'Golvvärme<br /><em>i badrum</em>',
    heroLead:
      'Golvvärme är nästan standard i ett nyrenoverat badrum – och klinker är det perfekta ytmaterialet ovanpå, eftersom det leder värme bra. Vi på Haga Plattsättning AB samordnar golvvärme och lägger klinkern ovanpå med korrekt tätskikt, så att uppbyggnaden blir rätt från grunden.',
    heroImageSrc: '/hagaplatt_5.avif',
    heroImageAlt: 'Nyrenoverat badrum i Stockholm med klinkergolv och golvvärme',
    guideLabel: 'Guide: Golvvärme i badrum',
    guideTitle: 'Golvvärme i badrum – el eller vattenburen under klinker',
    guideIntroHtml:
      'Golvvärme höjer komforten i badrummet och hjälper golvet att torka snabbare, vilket minskar fuktbelastningen. Men valet mellan el och vattenburen golvvärme, och hur värmen byggs upp under tätskikt och klinker, påverkar både resultat och kostnad. Här går vi igenom skillnaderna och hur vi säkerställer rätt uppbyggnad.',
    guideBlocks: [
      {
        title: 'El eller vattenburen golvvärme i badrum?',
        bodyHtml:
          '<p>Det finns två huvudtyper, och de passar olika situationer:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Elgolvvärme:</strong> värmekabel eller -matta som läggs in i golvkonstruktionen. Enkel att installera vid en badrumsrenovering, snabb att reglera och vanligast i bostadsrätter och enskilda rum.</li><li><strong>Vattenburen golvvärme:</strong> slingor med varmvatten, ofta kopplade till husets värmesystem. Vanligare i villor och vid nybyggnation, mer lönsam i större ytor men kräver mer omfattande installation.</li></ul><p>I ett enskilt badrum, särskilt i bostadsrätt, är elgolvvärme ofta den praktiska lösningen. I villa kan vattenburet vara mer aktuellt om det redan finns ett system att ansluta till.</p>',
        imageSrc: '/hagaplatt_6.avif',
        imageAlt: 'Elgolvvärme installeras i badrumsgolv innan klinker läggs',
      },
      {
        title: 'Golvvärme under klinker – så byggs golvet upp',
        bodyHtml:
          `<p>Ordningen i golvet är avgörande för ett hållbart resultat. Förenklat byggs golvet upp så här: stomme, värme (el eller vattenburet) i avjämningen, därefter ${'tätskikt'} och överst klinker. Klinker är ett utmärkt ytmaterial över golvvärme eftersom det leder värmen effektivt och tål temperaturväxlingar bra.</p><p>Tätskiktet måste alltid ligga korrekt enligt ${BBV} – golvvärmen får aldrig äventyra fuktsäkerheten. Vi samordnar momenten i rätt ordning och lägger klinkern med rätt fall mot golvbrunn.</p>`,
        imageSrc: '/hagaplatt_3.avif',
        imageAlt: 'Uppbyggnad av badrumsgolv med golvvärme, tätskikt och klinker',
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
      title: 'Mögel i Badrum – Orsaker, Åtgärd & När du Bör Renovera | Haga Plattsättning AB',
      description:
        'Mögel i badrum: varför det uppstår, hur du tar bort det i fogar och silikon, hälsoriskerna – och när mögel är ett tecken på att tätskiktet är förbrukat och badrummet behöver renoveras. Guide från BKR-behörig plattsättare med källor.',
      canonical: 'https://www.hagaplattsattning.se/mogel-i-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_47.avif',
      ogImageAlt: 'Inspektion av mögel i badrumsfogar – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Guide · BKR-behörig',
    h1Html: 'Mögel<br /><em>i badrum</em>',
    heroLead:
      'Mögel i badrummet är vanligt – men allt mögel är inte lika allvarligt. Ytligt mögel i silikonfogar är ofta enkelt att åtgärda, medan mögel som beror på en fuktskada bakom kaklet kan vara ett tecken på att tätskiktet är förbrukat. Här hjälper vi dig att förstå skillnaden, åtgärda rätt och veta när det är dags att renovera.',
    heroImageSrc: '/hagaplatt_47.avif',
    heroImageAlt: 'Inspektion av mögel i badrumsfogar och silikon',
    guideLabel: 'Guide: Mögel i badrum',
    guideTitle: 'Mögel i badrum – orsaker, åtgärd och när du bör renovera',
    guideIntroHtml:
      'Mögel trivs där det är fuktigt, varmt och dåligt ventilerat – precis som i många badrum. Den goda nyheten är att det oftast går att åtgärda. Den viktiga frågan är <em>varför</em> möglet uppstått: är det ytligt och kosmetiskt, eller en signal om fukt i konstruktionen? Nedan reder vi ut det, med utgångspunkt i vad myndigheter och branschorgan säger.',
    guideBlocks: [
      {
        title: 'Varför uppstår mögel i badrum?',
        bodyHtml:
          '<p>Mögel behöver fukt för att växa. I badrum kommer fukten från dusch och bad, och om den inte ventileras bort blir miljön perfekt för mögel. De vanligaste orsakerna är:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Dålig ventilation:</strong> fukten blir kvar i rummet efter dusch</li><li><strong>Bristande städning:</strong> tvål- och hudrester i fogar blir näring åt mögel</li><li><strong>Gamla eller skadade silikonfogar:</strong> släpper in fukt bakom ytan</li><li><strong>Fuktskada i konstruktionen:</strong> ett förbrukat tätskikt som läcker</li></ul><p>De tre första är ofta hanterbara. Den sista är allvarlig och hänger ihop med tätskiktets skick.</p>',
        imageSrc: '/hagaplatt_12.avif',
        imageAlt: 'Mögel i badrum orsakat av fukt och dålig ventilation',
      },
      {
        title: 'Ytligt mögel kontra allvarligt mögel',
        bodyHtml:
          `<p><strong>Ytligt mögel</strong> sitter på silikonfogar, i hörn eller på ytan av kakelfogar. Det är vanligt, oftast kosmetiskt och går att rengöra eller åtgärda genom att byta silikonfogen. Läs mer i vår guide om <a href="/silikonfog-badrum/" style="color:#0a0a1a;font-weight:600;">silikonfog i badrum</a>.</p><p><strong>Allvarligt mögel</strong> är när fukt trängt in i konstruktionen – bakom kakel, i golv eller väggar. Tecken är mögellukt även när rummet är torrt, missfärgningar som återkommer, eller bomma plattor. Då räcker det inte att rengöra ytan; orsaken sitter bakom tätskiktet. Detta hänger ofta ihop med ett tätskikt som passerat sin tekniska livslängd – läs mer om <a href="/hur-lange-haller-ett-badrum/" style="color:#0a0a1a;font-weight:600;">hur länge ett badrum håller</a> och <a href="/fuktskada-vattenskada-badrum/" style="color:#0a0a1a;font-weight:600;">fuktskada och vattenskada</a>.</p>`,
        imageSrc: '/behorig-vatrum.avif',
        imageAlt: 'Bedömning av mögel och tätskikt i badrum av behörig plattsättare',
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
      title: 'Silikonfog i Badrum – När & Hur du Byter | Haga Plattsättning AB',
      description:
        'Silikonfog i badrum: vad fogen gör, när den ska bytas, varför den inte är samma sak som tätskikt, och om du kan byta själv eller bör anlita fackman. Guide från BKR-behörig plattsättare med källor.',
      canonical: 'https://www.hagaplattsattning.se/silikonfog-badrum/',
      ogImage: 'https://www.hagaplattsattning.se/hagaplatt_13.avif',
      ogImageAlt: 'Byte av silikonfog i badrum – Haga Plattsättning AB',
      geoPlacename: 'Stockholm',
      geoPosition: '59.3293;18.0686',
    },
    eyebrow: 'Guide · BKR-behörig',
    h1Html: 'Silikonfog<br /><em>i badrum</em>',
    heroLead:
      'Silikonfogen är badrummets mest underskattade detalj. Den tätar rörliga skarvar – vid golv, hörn och genomföringar – och är en av de första sakerna som börjar mögla eller släppa. Här förklarar vi vad silikonfogen gör, när den ska bytas, och den vanligaste missuppfattningen: att silikonfog är samma sak som tätskikt.',
    heroImageSrc: '/hagaplatt_13.avif',
    heroImageAlt: 'Byte av silikonfog i badrum av plattsättare',
    guideLabel: 'Guide: Silikonfog i badrum',
    guideTitle: 'Silikonfog i badrum – när och hur du byter',
    guideIntroHtml:
      'En silikonfog håller inte för evigt. Den utsätts dagligen för fukt, värme och rörelser i konstruktionen, och behöver bytas med jämna mellanrum. Att hålla silikonfogarna i skick är ett enkelt underhåll som skyddar både utseende och funktion – men det är viktigt att förstå vad fogen faktiskt gör, och vad den inte gör.',
    guideBlocks: [
      {
        title: 'Vad gör silikonfogen – och vad gör den inte?',
        bodyHtml:
          '<p>Silikonfogen är en <strong>elastisk fog</strong> som tätar där två ytor möts och rör sig olika mycket – till exempel mellan golv och vägg, i innerhörn och runt genomföringar som blandare och golvbrunn. Eftersom dessa skarvar rör sig kan man inte använda hård kakelfog där; då skulle den spricka.</p><p>Det är viktigt att förstå att silikonfogen är ett <strong>komplement</strong>, inte byggnadens vattenskydd. Det verkliga skyddet mot fukt är tätskiktet bakom kaklet. Silikonfogen hindrar vatten från att rinna ner i skarvarna på ytan, men den ersätter aldrig tätskiktet.</p>',
        imageSrc: '/hagaplatt_29.avif',
        imageAlt: 'Silikonfog tätar skarven mellan golv och vägg i badrum',
      },
      {
        title: 'När ska silikonfogen bytas?',
        bodyHtml:
          '<p>Silikonfogen är en förbrukningsdetalj. Byt den när du ser något av detta:</p><ul class="bkr-checklist" style="margin-top:0.75rem;"><li><strong>Mögel i fogen:</strong> svarta prickar som inte går bort vid rengöring – möglet har växt in i materialet</li><li><strong>Fogen släpper:</strong> den lossnar från kakel eller golv och bildar en glipa</li><li><strong>Sprickor eller hårdnad fog:</strong> elasticiteten är borta och fogen tätar inte längre</li><li><strong>Missfärgning och gulnande:</strong> kosmetiskt, men ofta ett tecken på ålder</li></ul><p>Att byta silikonfog i tid är billig försäkring: en trasig fog släpper in vatten i skarvar och kan på sikt belasta konstruktionen.</p>',
        imageSrc: '/hagaplatt_40.avif',
        imageAlt: 'Gammal möglig silikonfog som behöver bytas i badrum',
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
};
