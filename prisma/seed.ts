import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'TAPIOKA BEZGLUTENOWA BIO 400 g',
      price: 7,
      img: 'tapioka-skrobia-z-manioku-bezglutenowa-bio-400-g-bio-planet.jpg',
      description: 'Ekologiczna tapioka pozyskiwana jest z bulw korzeniowych manioku. Nie posiada charakterystycznego smaku i zapachu.',
      category: 'maka',
      promotion: true
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'MĄKA OWSIANA WYSOKOBŁONNIKOWA BIO 1 kg',
      price: 8,
      img: 'maka-owsiana-wysokoblonnikowa-bio-1-kg-bio-planet.jpg',
      description: 'Ekologiczna mąka owsiana uzyskana w wyniku zmielenia ziaren owsa, pozbawionych zewnętrznej, twardej okrywy. Charakteryzuje się wysoką zawartością błonnika pokarmowego.',
      category: 'maka',
      promotion: true
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'MĄKA Z KONOPI BIO 400 g',
      price: 7,
      img: 'maka-z-konopi-bio-400-g-bio-planet.jpg',
      description: 'Ekologiczną mąkę z konopi uzyskuje się poprzez zmielenie i odtłuszczenie nasion konopi. ',
      category: 'maka',
      promotion: false
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'MĄKA Z LNU BIO 400 g',
      price: 5,
      img: 'maka-z-lnu-bio-400-g-bio-planet.jpg',
      description: 'Ekologiczną mąkę lnianą uzyskuje się przez zmielenie i odtłuszczenie nasion lnu. Mąka może być stosowana samodzielnie lub jako dodatek do innych mąk.',
      category: 'maka',
      promotion: false
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'SKROBIA KUKURYDZIANA BIO 400 g',
      price: 10,
      img: 'skrobia-kukurydziana-bio-400-g-bio-planet.jpg',
      description: 'Ekologiczna skrobia kukurydziana doskonała do zagęszczania zup i sosów. Polecamy również do zrobienia domowego kisielu czy budyniu.',
      category: 'maka',
      promotion: false
    },
    {
      id: 'fd105635-0f0d-4a9f-bc41-c559c8a17262',
      name: 'MĄKA PSZENNA TORTOWA TYP 480 1kg',
      price: 10,
      img: 'maka-pszenna-tortowa-typ-480-bio-1-kg-bio-planet.jpg',
      description: 'Ekologiczna mąka pszenna otrzymywana jest przez rozdrobnienie oczyszczonych ziaren pszenicy zwyczajnej. Mąka o przemiale 480 doskonale sprawdzi się do wypieków, szczególnie lekkich ciast biszkoptowych, do ciasta naleśnikowego, a także do dań mącznych.',
      category: 'maka',
      promotion: false
    },
    {
      id: 'a2c7c163-de19-44a5-a736-ad1fae876756',
      name: 'HERBATKA ŚWIĄTECZNA BIO (17 x 2,1 g) 35,7 g',
      price: 5,
      img: 'herbatka-swiateczna-bio-17-x-21-g-357-g-yogi-tea-produkt-sezonowy.jpg',
      description: 'Ajurwedyjska herbatka z ziół i przypraw korzennych. Edycja limitowana! Dostępna X-XII.',
      category: 'herbata',
      promotion: true
    },
    {
      id: '3b49a3c1-1ba0-4098-8bdd-a23c900e86aa',
      name: 'HERBATKA ROOIBOS Z CYNAMONEM I GOŹDZIKAMI BIO',
      price: 7,
      img: 'herbatka-rooibos-z-cynamonem-i-gozdzikami-bio-17-x-18-g-306-g-yogi-tea.jpg',
      description: 'Torebkę zalać świeżo przegotowaną wodą i zaparzać przez 7 minut lub dłużej w celu uzyskania mocniejszego smaku.',
      category: 'herbata',
      promotion: false
    },
    {
      id: 'e3e54b0b-260d-4579-8238-305ec922b7db',
      name: 'HERBATKA LIŚĆ MORINGI BIO 80 g',
      price: 7,
      img: 'herbatka-lisc-moringi-bio-80-g-dary-natury.jpg',
      description: '1 łyżeczkę ciętych liści zalać szklanką gorącej wody i pozostawić pod przykryciem na ok. 10/15 minut do zaparzenia.',
      category: 'herbata',
      promotion: true
    },
    {
      id: 'cfbbcf25-d421-403e-854c-187f78e1d3d7',
      name: 'HERBATA ZIELONA CHIŃSKA EKSPRESOWA BIO (20 x 1,5 g) 30 g',
      price: 6,
      img: 'herbata-zielona-chinska-ekspresowa-bio-20-x-15-g-30-g-apotheke.jpg',
      description: 'Zielona herbata wspomaga naturalną odporność.',
      category: 'herbata',
      promotion: false
    },
    {
      id: '4cadd4ca-122b-40d8-8149-7166ef08a93b',
      name: 'HERBATA CZARNA Z IMBIREM I CYNAMONEM (BLACK CHAI) BIO',
      price: 10,
      img: 'herbata-czarna-z-imbirem-i-cynamonem-black-chai-bio-17-x-22-g-374-g-yogi-tea.jpg',
      description: 'Torebkę zalać świeżo przegotowaną wodą i zaparzać przez 7 minut lub dłużej w celu uzyskania mocniejszego smaku.',
      category: 'herbata',
      promotion: false
    },
    {
      id: '9aa66263-db55-4408-8ddc-00cd07bdd4db',
      name: 'HERBATA CZARNA DARJEELING EKSPRESOWA BIO (20 x 1,5 g) 30 g',
      price: 8,
      img: 'herbata-czarna-darjeeling-ekspresowa-bio-20-x-15-g-30-g-lebensbaum.jpg',
      description: 'Smak herbaty czarnej Darjeeling można określić jako kwiatowy i mocny.',
      category: 'herbata',
      promotion: false
    },
    {
      id: 'f429240e-4f6b-4a8f-94af-ac99eae22c31',
      name: 'NAPÓJ RYŻOWO - KOKOSOWY BEZ DODATKU CUKRÓW BEZGLUTENOWY BIO 1 L',
      price: 7,
      img: 'napoj-ryzowo-kokosowy-bez-dodatku-cukrow-bezglutenowy-bio-1-l-natumi.jpg',
      description: 'Napój ryżowo-kokosowy Natumi może być serwowany z lodami lub jako dodatek do owocowego shake. Dodatkowo nadaje się również do pieczenia oraz jako dodatek do deserów i musli. Wstrząsnąć przed użyciem. Bez dodatku cukrów. Zawiera naturalnie występujace cukry. Produkt UHT.',
      category: 'mleko-roslinne',
      promotion: true
    },
    {
      id: 'ebd7b21a-5c67-48ea-a64e-e7bfba849292',
      name: 'ZAGĘSZCZONY PRODUKT SOJOWY BEZGLUTENOWY BIO 200 ml',
      price: 12,
      img: 'zageszczony-produkt-sojowy-bezglutenowy-bio-200-ml-sojade.jpg',
      description: 'Idealny do gotowania.',
      category: 'mleko-roslinne',
      promotion: false
    },
    {
      id: '138b8613-0497-434b-b81c-cb735bfe4708',
      name: 'NAPÓJ SOJOWY BEZ DODATKU CUKRÓW BEZGLUTENOWY BIO 1 L',
      price: 15,
      img: 'napoj-sojowy-bez-dodatku-cukrow-bezglutenowy-bio-1-l-natumi.jpg',
      description: 'Produkt w 100% roślinny. Wstrząsnąć przed użyciem. Produkt UHT. Bez dodatku cukrów. Zawiera naturalnie występujące cukry.',
      category: 'mleko-roslinne',
      promotion: true
    },
    {
      id: 'a43d6638-f4c6-4cc6-9165-c8c17d538146',
      name: 'NAPÓJ RYŻOWY BEZ DODATKU CUKRÓW BEZGLUTENOWY BIO 1 L',
      price: 5,
      img: 'napoj-ryzowo-kokosowy-bez-dodatku-cukrow-bezglutenowy-bio-1-l-natumi.jpg',
      description: 'Ekologiczny napój z ryżu. Jest to produkt w 100% roślinny, nie zawiera laktozy, glutenu. Wstrząsnąć przed użyciem. Produkt UHT. Bez dodatku cukrów. Zawiera naturalnie występujące cukry.',
      category: 'mleko-roslinne',
      promotion: false
    },
    {
      id: 'bb64dd73-f46f-45d7-90ec-cae50bd3fe46',
      name: 'NAPÓJ OWSIANY BEZ DODATKU CUKRÓW BIO 1 L',
      price: 11,
      img: 'napoj-owsiany-bez-dodatku-cukrow-bio-1-l-natumi.jpg',
      description: 'Ekologiczny napój z pełnoziarnistego owsa. Jest to produkt w 100% roślinny, nie zawiera laktozy. Wstrząsnąć przed użyciem. Produkt UHT. Bez dodatku cukrów. Zawiera naturalnie występujące cukry.',
      category: 'mleko-roslinne',
      promotion: false
    },
    {
      id: 'b78b9493-06e5-4fc1-9ed4-abd774bfcc30',
      name: 'ZAGĘSZCZONY PRODUKT SOJOWY DO GOTOWANIA I PIECZENIA BEZGLUTENOWY BIO 200 ml',
      price: 8,
      img: 'zageszczony-produkt-sojowy-do-gotowania-i-pieczenia-bezglutenowy-bio-200-ml-natumi.jpg',
      description: 'Produkt w 100% roślinny. Odpowiedni dla wegan. Doskonale nadaje się do gotowania, pieczenia oraz ubijania. Produkt UHT.',
      category: 'mleko-roslinne',
      promotion: false
    },
    {
      id: '10857d8d-3482-4083-a3cf-7fb692314a56',
      name: 'SYROP KLONOWY A BEZGLUTENOWY BIO 250 ml (330 g) ',
      price: 18,
      img: 'syrop-klonowy-a-bezglutenowy-bio-250-ml-330-g-bio-planet.jpg',
      description: 'Syrop powstaje w wyniku długotrwałego procesu odparowywania soku, uzyskiwanego z pnia klonów. Jest niezwykle pożywny i doskonale zastępuje inne produkty słodzące. Syrop klonowy polecany jest jako dodatek do naleśników, wafli oraz ciast.',
      category: 'cukry',
      promotion: false
    },
    {
      id: 'e17e45dc-bb10-4d15-bbb0-5f98a12a5988',
      name: 'DAKTYLE SPROSZKOWANE BIO 300 g',
      price: 15,
      img: 'daktyle-sproszkowane-bio-300-g-bio-planet.jpg',
      description: 'Ekologiczne daktyle w formie sproszkowanej charakteryzują się lekko słodkim smakiem z nutką toffi.',
      category: 'cukry',
      promotion: false
    },
    {
      id: '8d3dec46-0820-47d8-b0dc-d55d931c1bf3',
      name: 'CUKIER TRZCINOWY JASNY BIO 500 g',
      price: 20,
      img: 'cukier-trzcinowy-jasny-bio-500-g-bio-planet.jpg',
      description: 'Ekologiczny cukier trzcinowy jasny charakteryzuje się wysoką rozpuszczalnością. Doskonały jako dodatek do wypieków, deserów oraz słodzenia ciepłych napojów.',
      category: 'cukry',
      promotion: false
    },
    {
      id: '408fd5c8-cf12-4110-aa8c-af4245e1e837',
      name: 'CUKIER KOKOSOWY (PALMOWY) BIO 1 kg',
      price: 21,
      img: 'cukier-kokosowy-palmowy-bio-1-kg-bio-planet.jpg',
      description: 'Ekologiczny cukier kokosowy, nierafinowany, uzyskiwany z pąków kwiatowych palmy kokosowej. Pozbawiony aromatu kokosa.',
      category: 'cukry',
      promotion: false
    },
    {
      id: 'f2efbf47-8049-41b3-b72f-ae0430a8e079',
      name: 'DAKTYLE SPROSZKOWANE BIO 800 g',
      price: 28,
      img: 'daktyle-sproszkowane-bio-800-g-bio-planet.jpg',
      description: 'Ekologiczne daktyle w formie sproszkowanej charakteryzują się lekko słodkim smakiem z nutką toffi.',
      category: 'cukry',
      promotion: false
    },
    {
      id: '6808fd2f-ef54-4cbc-a595-176f570aedbb',
      name: 'SYROP ZE SŁODU JĘCZMIENNEGO BIO 450 g',
      price: 25,
      img: 'syrop-ze-slodu-jeczmiennego-bio-450-g-horizon.jpg',
      description: 'Idealny jako środek słodzący do ciast, deserów, napojów gorących, owsianki.',
      category: 'cukry',
      promotion: false
    },
    {
      id: '6808fd2f-ef54-4cbc-a595-176f570aedbb',
      name: 'SYROP ZE SŁODU JĘCZMIENNEGO BIO 450 g',
      price: 25,
      img: 'syrop-ze-slodu-jeczmiennego-bio-450-g-horizon.jpg',
      description: 'Idealny jako środek słodzący do ciast, deserów, napojów gorących, owsianki.',
      category: 'cukry',
      promotion: false
    },
  ];
}

function getReviews() {
  return [
    {
      id: 'f3d0a460-db61-4a4a-8915-ba31933540a5',
      name: 'John Doe',
      review: 'Najlepsza mąka, jaką miałem okazję używać! Doskonała do każdego rodzaju wypieków.',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259'
    },
    {
      id: 'd6058967-1f0c-48cd-bec5-2fdde4e35ecb',
      name: 'Jane Doe',
      review: 'Mąka o niezwykłej jakości, z której wypieki zawsze wychodzą perfekcyjne. Bezkonkurencyjna na rynku!',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258'
    },
    {
      id: 'd58a71a1-5187-4dc3-bef2-c0f49f41dd38',
      name: 'Janet Dose',
      review: 'Rewelacyjna mąka, która pozwala na przygotowanie wyjątkowo puszystych i aromatycznych wypieków. Bez wahania polecam!',
      productId: 'fd105635-0f0d-4a9f-bc41-c559c8a17262'
    },
  ]
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getReviews().map((review) => {
      return db.review.create({ data: review });
    }),
  );
}

seed();