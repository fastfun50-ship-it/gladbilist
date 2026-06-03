/**
 * Single Source of Truth (SSOT) for Gladbilist / Mortens Køreskole Årslev
 * 
 * Alt tekstindhold, priser, datoer, links, metadata, navigation osv.
 * importeres herfra. Ingen hardcoding i komponenter.
 * 
 * Opdater her for at ændre hele siden.
 */

export const siteConfig = {
  // ============================================
  // BRAND & KONTAKT (SSOT)
  // ============================================
  name: "Gladbilist",
  fullName: "Mortens Køreskole",
  location: "Årslev (Midtfyn)",
  tagline: "Det skal være sjovt at tage kørekort – med personlig undervisning og fokus på sikkerhed",
  description: "Mortens Køreskole i Årslev på Midtfyn. Over 25 års erfaring. Små hold (max 6 elever), GULDHOLD-behandling, automatgear i premium elbil. Bliv en glad, sikker og hensynsfuld bilist.",
  phone: "4088 6565",
  phoneHref: "tel:+4540886565",
  email: "morten@gladbilist.dk",
  emailHref: "mailto:morten@gladbilist.dk",
  bank: "1740 – 4397 589 639",
  cvr: "40366571",
  address: {
    street: "Bøgehøjvej 2 (Årslev Hallen)",
    zip: "5792",
    city: "Årslev",
    full: "Bøgehøjvej 2 (Årslev Hallen), 5792 Årslev",
  },
  social: {
    facebook: "https://www.facebook.com/gladbilist/",
    instagram: "https://www.instagram.com/mortenskoreskole_aarslev/?hl=da",
  },

  // ============================================
  // EKSTERNE LINKS & CTAs
  // ============================================
  links: {
    primaryBooking: "https://gondrive.com/166/holdstart",
    bookingLabel: "Tilmelding",
    nextHoldstart: "#holdstart",
    doctorCert: "https://www.borger.dk/vaelg-kommune-obligatorisk?actionPageId=065ca8f9-a1f5-4946-ada7-12e163f568df&selfserviceId=3c14cbe7-1aaf-4d05-b71b-0c63b217796b",
    koreproveGuide: "/pdfs/koreprovebooking-guide.pdf",
    trailerTeknik: "/pdfs/trailer-teknik.pdf",
    bilTeknikVideo: "https://www.youtube.com/watch?v=1Oceg86MPZg",
    bilTeknikText: "https://drive4you.dk/praktisk-proeve/",
    sikkerTrafik: "https://www.sikkertrafik.dk/",
    antk: "http://antk.dk/",
    fstyrKode148: "https://www.fstyr.dk/privat/koerekort/proever/koereproeve-",
  },

  // ============================================
  // AUDIO / VELKOMST (auto-play med fallback)
  // ============================================
  // AUDIO - flere sange kan tilføjes her
  // ============================================
  audio: {
    tracks: [
      {
        id: "velkomst",
        src: "/audio/morten-velkomst.mp3",
        title: "Velkomst fra Morten",
      },
      {
        id: "modepligt",
        src: "/audio/modepligt.mp3",
        title: "Mødepligt",
      },
    ],
    defaultTrackId: "velkomst",
    playLabel: "Hør velkomstbesked",
    pauseLabel: "Pause velkomst",
    note: "Afspilles automatisk (klik sang-navnene for at skifte, eller brug knapperne til lyd)",
  },

  // ============================================
  // NAVIGATION (Sticky)
  // ============================================
  nav: [
    { label: "Hvorfor vælge mig", href: "#hvorfor" },
    { label: "Om Morten", href: "#om" },
    { label: "Skolevognen", href: "#skolevogn" },
    { label: "Priser", href: "#priser" },
    { label: "Holdstart", href: "#holdstart" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  // ============================================
  // HERO
  // ============================================
  hero: {
    eyebrow: "Årslev • Midtfyn • Fyn",
    headline: "Bliv en glad og sikker bilist\nmed personlig undervisning",
    subheadline: "Over 25 års erfaring. Små hold på max 6 elever. GULDHOLD-kvalitet uden merpris. Undervisning i moderne elbil med automatgear.",
    trustLine: "Trailerhold starter 1. lørdag i hver måned",
    ctas: [
      {
        label: "Næste holdstart",
        href: "#holdstart",
        variant: "secondary" as const,
      },
      {
        label: "Tilmeld dig nu",
        href: "https://gondrive.com/166/holdstart",
        variant: "primary" as const,
        external: true,
      },
    ],
    smallImages: [
      "/images/hero/hero-small-1.jpg",
      "/images/hero/hero-small-2.jpg",
    ],
    background: "/images/hero/hero-background-hq.png",
  },

  // ============================================
  // HVORFOR VÆLGE MIG? (4 bullets + 4 dybe sektioner)
  // ============================================
  whyChoose: {
    introBullets: [
      "Sikker og hensynsfuld kørsel har 1. prioritet.",
      "Her er der plads til den enkelte elev.",
      "Hos mig skal det være sjovt at tage kørekort.",
      "Kørelektioner starter/stopper fra Rema1000 (eller efter aftale).",
    ],
    sections: [
      {
        title: "Fokus på den enkelte elev",
        text: "Hos Gladbilist går jeg op i at sikre dig et lærerigt og spændende forløb, hvor kvalitet og professionalisme er i fokus. Jeg gør mig umage for ikke bare at være hvilken som helst kørelærer på Fyn.\n\nDer lægges stor vægt på, at du får en god oplevelse med at tage dit kørekort. Derfor behandler jeg alle mine elever som var de på et \"GULDHOLD\" og det koster ikke ekstra her.",
        icon: "Users",
      },
      {
        title: "De bedste rammer",
        text: "I min køreskole får du undervisning af høj kvalitet, hvor jeg bruger de nyeste undervisningsmaterialer. Undervisningslokalet er indrettet, så du kan følge med på skærmen. Det sikrer, at du får mest muligt ud af undervisningen.\n\nDen personlige kontakt er vigtig for mig, og derfor anvender jeg også tavleundervisning fremfor pc-undervisning, hvor du er overladt til dig selv — fordi en dialog-baseret undervisning skaber de bedste forudsætninger for, at du lærer at forstå trafik. Derfor er holdene på max. 6 elever.",
        icon: "GraduationCap",
      },
      {
        title: "Første dag på køreskolen",
        text: "Din første dag i køreskolen byder både på introduktion og undervisning. Introduktion klæder dig på til det kommende undervisningsforløb, og jeg svarer selvfølgelig på alle de spørgsmål, du måtte have til det. Derudover får du også udleveret en lektionsplan, som viser det forløb du skal igennem.",
        icon: "CalendarCheck",
      },
      {
        title: "Undervisning der er sjov",
        text: "Jeg er overbevist om, at den bedste måde at lære på er gennem humor og gensidig respekt. Du skal have det sjovt, mens du lærer, men jeg forventer til gengæld, at du er seriøs, lytter, har lyst og er motiveret til at lære. På den måde skaber vi sammen de bedste rammer for undervisningen.",
        icon: "Smile",
      },
    ],
  },

  // ============================================
  // OM MORTEN
  // ============================================
  about: {
    title: "Hvem er jeg?",
    name: "Morten Larsen",
    experience: "Mere end 25 års erfaring som bilist. Har kørt flere millioner kilometer på vejene i både Danmark og udlandet — i stort set alle typer af biler og lastbiler. Dette har givet stor kørselserfaring.",
    philosophy: "Jeg tilbyder personlig teori- og køreundervisning og lægger vægt på at skabe optimale rammer for læring, så mine elever får de bedst mulige betingelser for at bestå deres teori- og køreprøve.\n\nMit mål er ikke, at mine elever \"bare\" skal have et kørekort — mit mål er, at mine elever bliver gode og hensynsfulde billister.\n\nJeg prioriterer altid plads til dialog og spørgsmål, og har den enkelte elevs færden i trafikken som mit fokus. Derfor er du sikret at blive en dygtig og trafiksikker bilist, når du tager dit kørekort hos mig.",
    location: {
      title: "Lokation & rammer",
      items: [
        "Bosiddende i Årslev på Midtfyn",
        "Teorilokale i den lokale sportshal (Årslevhallen)",
        "Kun 5 minutters gang fra byens togstation",
        "Adresse: Bøgehøjvej 2 (Årslev Hallen), 5792 Årslev",
      ],
    },
    images: [
      { src: "/images/about/about-morten-1.jpg", alt: "Morten – din kørelærer" },
      { src: "/images/about/about-morten-2.jpg", alt: "Morten i undervisning" },
      { src: "/images/about/about-morten-3.jpg", alt: "Morten ved bilen" },
    ],
    cta: {
      label: "Gå til Tilmelding",
      href: "https://gondrive.com/166/holdstart",
    },
  },

  // ============================================
  // SKOLEVOGNEN
  // ============================================
  schoolCar: {
    title: "Skolevognen",
    subtitle: "Køreskolens biler",
    car: {
      model: "2021 Ford Mustang Mach-E",
      spec: "99 kWh, 4x4, UR (automatgear)",
      description: "Elbil og dermed med automatgear. Den har så mange funktioner at den næsten kan køre af sig selv. Perfekt til at lære moderne og sikker kørsel.",
      features: [
        "Auto-parkering",
        "Adaptiv fartpilot",
        "Adaptive LED-forlygter",
        "Advarsel ved fartoverskridelse",
        "Lane keeping assist",
        "Skiltegenkendelse",
        "og meget mere",
      ],
    },
    image: "/images/school-car/school-car-mach-e-hq.jpg",
    note: "Næsten al kørsel foregår i automatgearbil (kode 148).",
  },

  // ============================================
  // PRISER
  // ============================================
  prices: {
    intro: "Den samlede pris er 15.900 kr. hvis du betaler hele beløbet lige efter holdstart. Du kan også betale over 3 gange, i alt 16.500 kr. Kontakt køreskolen for nærmere information og betingelser, FØR du vælger afdrag.",
    paymentNote: "Alle tilgodehavender (f.eks. ekstra kørelektioner) skal være betalt 2 dage før køreprøven. Betaling af prøvegebyret til staten sker via koreprovebooking / e-boks. Alle betalinger skal foregå via bank: 1740 – 4397 589 639",
    mainPackage: {
      title: "Lovpakken – Førstegangs Erhvervelse bil",
      price: "15.900 kr.",
      priceNote: "inkl. moms",
      included: [
        "29 teorilektioner",
        "Manøvrebane: 4 lektioner á 45 minutter",
        "16 kørelektioner på vej á 45 minutter (2 af disse er mørkekørsel)",
        "Køreteknisk anlæg: 4 lektioner á 45 minutter",
        "Login til 4 mdr. onlineteori (værdi 495 kr.)",
        "Administrationsgebyr (værdi 500 kr.)",
        "Pasfoto (værdi 150 kr.)",
      ],
      extraCostsTitle: "Der skal herudover påregnes udgifter til:",
      extraCosts: [
        "Skolevogn til køreprøve: 800 kr.",
        "Prøvegebyr: 1.600 kr.",
        "Førstehjælpsbevis: ca. 300–650 kr.",
        "Lægeerklæring (pris afhænger af din læge)",
        "Kørelektioner efter kl. 17 samt weekend: +200 kr. pr. lektion (hvis elev beder om det)",
        "Evt. ekstra kørelektion (45 min): 550 kr.",
        "Evt. leje af skolevogn til ny køreprøve: 800 kr.",
      ],
      important: "\"Lovpakken\" er et sammensat produkt. Skulle du som elev ønske at afbryde forløbet af en årsag, refunderes der et beløb fratrukket alle de allerede modtagende lektioner til 400 kr. pr. lektion. LØP+KTA modregnes 2.500 kr pr. modul.",
      minLegal: "Minimum lovpligtig undervisning. Alt kørsel foregår som udgangspunkt i automatgearbil = kode 148.",
    },
    rutine: {
      title: "Rutinetimer",
      price: "450 kr.",
      priceUnit: "pr. kørelektion (45 min)",
      when: [
        "Synes du, der er mange biler på vejen?",
        "Er du usikker på at køre bil?",
        "Har du været ude for en ulykke?",
        "Bliver du beskyldt for ikke at kunne køre bil?",
        "Har du brug for lidt genopfriskning?",
      ],
    },
    trailer: {
      title: "Trailerkørekort (B/E)",
      price: "5.600 kr.",
      priceNote: "inkl. moms (ex. moms 4.480 kr.)",
      description: "Kategori B/E giver førerret til person- eller varebil tilkoblet et påhængskøretøj med en tilladt totalvægt på over 750 kg og med tilladt totalvægt for køretøj + påhæng på max. 7.000 kg.",
      included: [
        "4 lektioner a 45 min i teorilokale (1 dag)",
        "6 lektioner a 45 min på vej",
        "Leje af bil og trailer til første køreprøve",
      ],
      extra: [
        "Lægeerklæring (pris afhænger af din læge)",
        "Administrationsgebyr: 500 kr.",
        "Prøvegebyr pr. prøve: 520 kr.",
        "Skolevogn + trailer til ny køreprøve: 1.000 kr.",
        "Evt. ekstra kørelektion pr. lektion (45 min): 750 kr.",
        "Pasfoto: 150 kr.",
      ],
      practical: "Teoriundervisning foregår som udgangspunkt i weekender (undgå at holde fri fra arbejde). Køreprøven vil altid foregå på hverdage ml. 8-16. Efter endt undervisning i trailerkørekort vil der ikke skulle afvikles en ordinær teoriprøve – i stedet foregår en praktisk kontrol af vogntoget før køreprøven.",
    },
    special: {
      title: "Generhvervelse & Særlig køreundervisning",
      generhvervelse: {
        title: "Generhvervelse - bil (betinget frakendelse)",
        price: "3.000 kr.",
        included: [
          "Online teorimateriale",
          "3 kørelektioner",
          "Skolevogn til køreprøven",
        ],
        extra: ["Prøvegebyr til staten: 1.690 kr.", "Administrationsgebyr: 500 kr.", "Pasfoto: 150 kr.", "Evt. ekstra kørelektion (45 min): 550 kr."],
        note: "Er du \"Ubetinget frakendt\" – kontakt køreskolen.",
      },
      saerlig: {
        title: "Særlig køreundervisning (kørekort mindre end 3 år / mistet pga. 2 klip)",
        price: "6.800 kr.",
        included: [
          "8 lektioner i teori",
          "8 lektioner á 45 min i kørsel på vej",
          "Skolevogn til køreprøven",
          "Indlevering/afhentning af papirer på borgerservice",
          "Online teorimateriale",
        ],
        extra: ["Prøvegebyr til staten: 1.690 kr.", "Administrationsgebyr: 500 kr.", "Evt. ekstra kørelektion (45 min): 550 kr."],
        alcoholNote: "Hvis du har mistet dit kørekort på grund af alkohol, skal du have et ANT-bevis (alkohol, narko og trafik), som tages hos Region Syd.",
      },
    },
  },

  // ============================================
  // MC
  // ============================================
  mc: {
    title: "MC kørekort",
    text: "MC-kørekort vil blive afholdt efter behov/tilmeldinger. Kontakt køreskolen med netop dit behov. Ingen faste datoer – fleksibelt.",
  },

  // ============================================
  // HOLDSTART & BOOKING (vigtig konvertering)
  // ============================================
  booking: {
    title: "Holdstart og booking",
    rules: [
      "Der er mødepligt til al undervisning i køreskoler.",
      "Teoriundervisning til bil foregår kl. 17–20.",
    ],
    upcomingCar: {
      title: "Kommende holdstart bil",
      dates: ["12. august", "28. september", "4. november"], // Opdater løbende i config
      location: "Ørbækvej 832, 5853 Rolfsted",
    },
    trailer: {
      title: "Trailerkørekort",
      schedule: "Starter d. 1. lørdag i hver måned.",
      location: "Agerhatten 16B, indgang 1, 5220 Odense Sø",
    },
    mcNote: "MC-kørekort afholdes efter behov/tilmeldinger. Kontakt køreskolen.",
    note: "Ved manglende tilmeldinger udskydes start til næste hold.",
    prerequisites: {
      title: "Vigtige forudsætninger / huskeregler (før holdstart)",
      items: [
        "HUSK LÆGEERKLÆRING – Det er en god idé allerede nu at få bestilt tid hos din læge. Lægeerklæring må MAX være 3 måneder gammel ved indlevering.",
        "Man kan ikke komme til teoriprøve før ansøgning, lægeerklæring og samtykkeerklæring (under 18 år) er indleveret på borgerservice og godkendt.",
        "Køreprøve kan ikke bestilles før førstehjælpsbevis er gennemført (8 timers færdselsrelateret kursus – må ikke være mere end 12 mdr. gammelt hvis du har et i forvejen).",
        "Depositum skal være indbetalt senest 5 dage efter tilmelding, ellers slettes tilmeldingen.",
      ],
    },
    importantLinks: [
      { label: "Opret digital lægeerklæring", href: "https://www.borger.dk/vaelg-kommune-obligatorisk?actionPageId=065ca8f9-a1f5-4946-ada7-12e163f568df&selfserviceId=3c14cbe7-1aaf-4d05-b71b-0c63b217796b" },
      { label: "Hvordan elever opretter sig i koreprovebooking før holdstart (PDF)", href: "/pdfs/koreprovebooking-guide.pdf" },
      { label: "Trailer teknik (PDF)", href: "/pdfs/trailer-teknik.pdf" },
      { label: "Bilens teknik (video)", href: "https://www.youtube.com/watch?v=1Oceg86MPZg" },
      { label: "Bilens teknik (tekst)", href: "https://drive4you.dk/praktisk-proeve/" },
    ],
    form: {
      title: "Tilmelding her",
      fields: {
        name: "Navn",
        phone: "Telefon",
        email: "E-mail",
        paymentForm: {
          label: "Betalingsform",
          options: [
            { value: "fuld", label: "Betal hele beløbet efter holdstart (15.900 kr.)" },
            { value: "afdrag", label: "Betal over 3 gange (16.500 kr. i alt)" },
          ],
        },
        holdstart: {
          label: "Vælg holdstart",
          placeholder: "Vælg en dato...",
        },
        special: {
          label: "Har du særlige forhold, eller andet jeg skal tage højde for, så som angst eller lignende?",
          placeholder: "Skriv her (valgfrit) – eller ring mig på 4088 6565",
        },
      },
      submit: "Send tilmelding",
      success: "Tak for din tilmelding! Jeg kontakter dig hurtigst muligt for at bekræfte og sende yderligere information.",
    },
  },

  // ============================================
  // KONTAKT
  // ============================================
  contact: {
    title: "Kontakt",
    intro: "Har du spørgsmål eller vil du høre mere? Ring eller skriv gerne. Jeg svarer personligt.",
    form: {
      title: "Send en besked",
      name: "Navn",
      email: "E-mail",
      message: "Besked",
      submit: "Send besked",
      success: "Tak! Din besked er modtaget. Jeg vender tilbage hurtigst muligt.",
    },
  },

  // ============================================
  // FOOTER & SUBPAGES
  // ============================================
  footer: {
    links: [
      { label: "GDPR / Privatlivspolitik", href: "/gdpr" },
      { label: "Til mor og far", href: "/til-mor-og-far" },
    ],
    external: [
      { label: "sikkertrafik.dk", href: "https://www.sikkertrafik.dk/" },
      { label: "antk.dk", href: "http://antk.dk/" },
    ],
    copyright: "© Mortens Køreskole – Gladbilist. Alle rettigheder forbeholdt.",
  },

  // ============================================
  // SUBPAGE: GDPR (fuld tekst)
  // ============================================
  gdpr: {
    title: "GDPR – Privatlivsbeskyttelsespolitik",
    intro: "Mortens Køreskole v/ Morten Larsen, CVR.nr.: 40366571, er dataansvarlig for behandlingen af de personoplysninger, som jeg modtager om dig.",
    contactForData: "Har du spørgsmål, kan du kontakte mig på tlf. 4088 6565 eller e-mail: morten@gladbilist.dk",
    consent: "Når du bliver elev på køreskolen, giver du samtykke til behandling af samtlige af de oplysninger, du giver mig til brug for gennemførelsen af den undervisning, som du har indgået aftale med mig om.",
    dataUsed: [
      "Navn, adresse, telefon og e-mail, CPR-nr. og fødeland.",
      "Portrætbillede til ansøgning om kørekort.",
      "Eventuelt bedømmelsesskema, ansøgningsskema, lektionsplan, kursusbeviser.",
      "Eventuel navn og CPR-nr. på indehaver(e) af forældremyndigheden ved kørekort til 17-årige.",
      "Eventuel ansøgning om dispensation til anvendelse af bil med automatgear.",
      "Eventuelle oplysninger om overtrædelse af færdselsloven i forbindelse med kontrollerende prøver.",
      "Evt. ANT-kursusbevis.",
    ],
    recipients: [
      "Politiet og tilsynsførende.",
      "Eventuelle samarbejdende kørelærere.",
      "Manøvrebaner og køreteknisk anlæg (pligt jf. Bekendtgørelse om kørekort).",
      "Ved ”særlig køreundervisning” forevises Borgerservice og forbliver hos køreskolen.",
      "Eventuel tilmelding af elever til udbydere af online undervisningsprogrammer (f.eks. Drive4You, Køreklar, Teoriundervisning.dk).",
      "Eventuel ekstern underviser i førstehjælp.",
      "Kommunernes Landsforening (Køreprøvebooking.dk).",
      "Kommunikation med elever via sms og Messenger (Facebook).",
      "Generel kommunikation med Borgerservice, Politi og Politiets Administrationscentre.",
      "Færdselsstyrelsen.",
    ],
    noExtraDisclosure: "Jeg videregiver ikke dine persondata uden lovhjemmel eller samtykke.",
    storage: [
      "Lektionsplan opbevares i 2 år (hensyn til bekendtgørelsen om kørekort).",
      "Aftalegrundlag opbevares i 5 år + indeværende regnskabsår (Bogføringsloven).",
      "Ansøgningsskema slettes umiddelbart efter videregivelse til Politiet.",
      "Bedømmelsesskema udleveres til dig.",
      "Samtykkeerklæring, førstehjælpsbevis og ANT-kursusbevis returneres til dig efter behandling hos Borgerservice.",
      "Ansøgning om dispensation videregives til Færdselsstyrelsen.",
    ],
    rights: "Du har til enhver tid ret til at få oplyst hvilke data jeg behandler om dig, hvor de stammer fra, og hvad jeg anvender dem til. Du kan også få at vide, hvor længe jeg opbevarer dine persondata, og hvem der modtager data om dig. Du har ret til at få urigtige oplysninger rettet, at gøre indsigelse mod databehandlingen og i visse tilfælde ret til sletning af persondata.",
    complaint: "Du har ret til at indgive en klage til Datatilsynet (www.datatilsynet.dk).",
  },

  // ============================================
  // SUBPAGE: TIL MOR OG FAR
  // ============================================
  parents: {
    title: "Til mor og far",
    intro: "I er naturligvis velkomne til at kontakte mig på 4088 6565 ved evt. spørgsmål i forbindelse med tilmelding.",
    communication: "Som hovedregel er det eleven jeg kommunikerer med, da det er ham/hende jeg har kontakten med i teorilokalet og i bilen.",
    under18: {
      title: "Under 18 år",
      text: "Er din søn/datter under 18 år ved påbegyndelse af undervisning til kørekort, skal der udfyldes en samtykkeerklæring. Den oprettes online via koreprovebooking.dk hvor eleven tillige opretter/udskriver sin ansøgning og der også sendes link via e-boks til forældre/personer der har forældremyndighed. Dette skal helst gøres inden holdstart, men eleverne vil blive instrueret i det den 1. aften.",
    },
    extraLessons: {
      title: "Ekstra kørelektioner",
      text: "Alle elever er forskellige, med individuelle behov. Derfor er der ingen fast grænse for evt. ekstra kørelektioner, og behovet vurderes løbende i køreundervisningen, ud fra Lovens krav ifølge undervisningsplanen.",
      quote: "Den samlede undervisningstid på 53 lektioner á 45 min. er et absolut minimum for at kunne gennemføre en forsvarlig undervisning. Kørelæreren skal regne med, at elever vil have behov for yderligere repetitioner såvel i teoretiske emner som i praktiske manøvrer. Især ved mange praktiske manøvrer vil elever have behov for op til det dobbelte af den anførte tid.",
      quoteSource: "Citat fra lærervejledningen om køreuddannelsen",
      investment: "Et kørekort er en livs-investering, og jeg vil som kørelærer gøre mit yderste for at hjælpe din søn/datter frem til en bestået teori- og praktisk prøve, i 1. forsøg og endnu vigtigere, en god ballast til at blive sikre bilister på egen hånd.",
    },
    rules: {
      title: "Vigtige regler & betingelser (BEMÆRK!)",
      items: [
        "Der er desværre en stigende tendens til at elever udebliver eller melder fra til aftalte kørelektioner med meget kort varsel. Hvis dette sker, vil der være betaling for bookningen, såfremt det ikke lykkes at videregive køretiden til anden elev.",
        "Afbud skal senest oplyses 24 timer før aftalt kørsel.",
        "Ved udeblivelse fra aftalte kørelektioner pålægges ny betaling.",
        "Køreprøven aflyses på dagen ved manglende betaling for ekstralektioner, prøvegebyrer mm.",
        "Bliver eleven forhindret i at følge undervisningen som følge af sygdom eller lign. eller har mere end 1 gang fravær, er det vigtigt at kørelæreren kontaktes, så vi kan aftale hvad der skal ske fremadrettet (både kørelærer og elev skal følge gældende regler for pauser og ophold i undervisningen – max 3 måneder).",
        "Eleverne oplyses naturligvis om dette allerede ved Holdstart.",
      ],
    },
    practical: {
      title: "Praktisk om kørelektioner",
      items: [
        "Kørelektioner vil foregå i hele Danmark, men hovedsageligt Årslev–Odense på hverdage fra 8-17, indenfor lovens krav til køreundervisning.",
        "Der kan også af hensyntagen til planlægningen være kørsel/undervisning i weekender.",
        "Ved kørelektioner der skal startes efter kl. 15.30 (mørkekørsel undtaget) samt weekend tillægges et gebyr på 200,- kr. pr. lektion (med mindre det tilbydes af kørelæreren af planlægningsmæssige årsager).",
        "Mørkekørsel kan dog først gennemføres 1 time efter solnedgang.",
      ],
    },
  },

  // ============================================
  // SEO & METADATA
  // ============================================
  metadata: {
    title: "Gladbilist | Mortens Køreskole Årslev – Personlig køreundervisning på Fyn",
    titleTemplate: "%s | Gladbilist – Mortens Køreskole Årslev",
    description: "Erfarent køreskole i Årslev på Midtfyn. Over 25 års erfaring, små hold (max 6), GULDHOLD undervisning i moderne elbil med automatgear. Bliv en sikker, hensynsfuld og glad bilist. Tilmeld dig næste holdstart.",
    keywords: ["køreskole", "kørekort", "Årslev", "Fyn", "Midtfyn", "automatgear", "kørelærer", "trailer kørekort", "generhvervelse", "kørekort Fyn"],
    openGraph: {
      images: [
        {
          url: "/images/hero/hero-background-hq.png",
          width: 1200,
          height: 630,
          alt: "Mortens Køreskole – Gladbilist Årslev",
        },
      ],
    },
  },

  // ============================================
  // SCHEMA.ORG JSON-LD (LocalBusiness + Service)
  // ============================================
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mortens Køreskole",
    alternateName: "Gladbilist",
    description: "Personlig køreundervisning med fokus på sikkerhed, dialog og sjov læring. Små hold og GULDHOLD-kvalitet.",
    url: "https://www.gladbilist.dk",
    telephone: "+45 4088 6565",
    email: "morten@gladbilist.dk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bøgehøjvej 2 (Årslev Hallen)",
      addressLocality: "Årslev",
      postalCode: "5792",
      addressCountry: "DK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.3", // approx for Årslev
      longitude: "10.4",
    },
    priceRange: "15.900-16.500 DKK",
    openingHours: "Mo-Fr 17:00-20:00",
    image: "https://www.gladbilist.dk/images/hero/hero-background-hq.png",
    sameAs: [
      "https://www.facebook.com/gladbilist/",
      "https://www.instagram.com/mortenskoreskole_aarslev/",
    ],
  },

  // ============================================
  // ANDRE KONSTANTER
  // ============================================
  stats: [
    { number: "25+", label: "Års erfaring" },
    { number: "Max 6", label: "Elever pr. hold" },
    { number: "GULDHOLD", label: "Til alle – uden merpris" },
    { number: "100%", label: "Personlig undervisning" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

// Hjælpefunktioner (kan bruges i komponenter)
export const getUpcomingHoldstartText = () =>
  siteConfig.booking.upcomingCar.dates.join(" + ");

export const formatPhone = (p: string) => p.replace(/(\d{4})(\d{4})/, "$1 $2");
