//Propiedades que deben tener los productos:
//**título, categoría, subcategoría, precio, slug (id), stock, imagen, descripción */

export const productos = [
    // Guitarras Criollas
    {
    id: 1,
    titulo: "Yamaha CGX102 Electro-Criolla",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Criollas",
    precio: 875507,
    stock: 3,
    imagen: "https://tiendafeedback.com.ar/15812-large_default/guitarra-electro-criolla-yamaha-cgx102.jpg",
    descripcion: "Electro-criolla con cuerdas de nylon y pre-amp. SKU CGX102. Origen Indonesia, linea C-Series. Precio listado $875.507, stock bajo."
    },
    {
    id: 2,
    titulo: "Midiplus Clasica con funda (Natural)",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Criollas",
    precio: 69085,
    stock: 15,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_700114-MLA81113523223_122024-O.webp",
    descripcion: "Guitarra criolla tamaño adulto, cuerdas de nylon, funda incluida. Muy vendida, calificacion 4.3 estrellas, $69.085."
    },
    {
    id: 3,
    titulo: "Midiplus Clasica con funda (Azul)",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Criollas",
    precio: 69085,
    stock: 12,
    imagen: "https://http2.mlstatic.com/D_Q_NP_892449-MLU74244283521_012024-O.webp",
    descripcion: "Version azul de la Midiplus clasica, ideal para principiantes. Incluye funda, muy bien valorada por su relacion precio-calidad."
    },
    {
    id: 4,
    titulo: "GP900 Electro-Criolla con EQ Fishman",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Criollas",
    precio: 150000,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_697247-MLA76391113211_052024-O.webp",
    descripcion: "Guitarra electroacustica criolla de media caja, sistema Fishman, incluye funda. Gran eleccion intermedia."
    },
    {
    id: 5,
    titulo: "La Alpujarra Alpumidi Electro-Criolla",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Criollas",
    precio: 220000,
    stock: 1,
    imagen: "https://solomusica.com.ar/sm2020/9009-large_default/guitarra-electroacustica-alpujarra-alpumidi-.jpg",
    descripcion: "Instrumento de lutheria profesional con sistema midi-RMC, tapa maciza, terminacion artesanal. Ultima unidad disponible."
    },
  // Guitarras eléctricas
    {
    id: 6,
    titulo: "Femmto Electrica con amplificador",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Electricas",
    precio: 256320,
    stock: 10,
    imagen: "https://http2.mlstatic.com/D_Q_NP_650745-MLU74181387915_012024-O.webp",
    descripcion: "Guitarra electrica ideal para principiantes, incluye amplificador y accesorios. Muy buena relacion precio-calidad."
  },
  {
    id: 7,
    titulo: "Parquer Stratocaster con funda",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Electricas",
    precio: 235706,
    stock: 8,
    imagen: "https://musicshaker.com.ar/wp-content/uploads/2022/06/ST100BK-1.png",
    descripcion: "Guitarra Parquer estilo Stratocaster, incluye funda. Excelente opcion para quienes inician en el mundo electrico."
  },
  {
    id: 8,
    titulo: "Yamaha Pacifica PAC012",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Electricas",
    precio: 535013,
    stock: 5,
    imagen: "https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/YAMAHA/10674_xlarge.jpg",
    descripcion: "Guitarra electrica Yamaha Pacifica PAC012. Sonido versatil, construccion solida. Muy recomendada para nivel inicial e intermedio."
  },
  {
    id: 9,
    titulo: "Jackson JS22 Dinky",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Electricas",
    precio: 741602,
    stock: 4,
    imagen: "https://www.mundomusicalcr.com/wp-content/uploads/0901120-768x768.jpg",
    descripcion: "Jackson Dinky JS22. Cuerpo agresivo, ideal para estilos pesados. Excelente calidad en su rango de precio."
  },
  {
    id: 10,
    titulo: "Leonard LE362 Stratocaster",
    categoria: "Cordofonos",
    subcategoria: "Guitarras Electricas",
    precio: 259580,
    stock: 7,
    imagen: "https://ecomusicweb.com/wp-content/uploads/2020/10/leonardsbs.jpg",
    descripcion: "Guitarra electrica Leonard LE362 tipo Stratocaster. Buena opcion para aprender con estilo clasico."
  },
  // Violines
  {
    id: 11,
    titulo: "Stradella MV1411 4/4",
    categoria: "Cordofonos",
    subcategoria: "Violines",
    precio: 156699,
    stock: 7,
    imagen: "https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/STRADELLA/11489_xlarge.jpg",
    descripcion: "Violin Stradella MV1411 4/4 con estuche, arco y resina."
  },
  {
    id: 12,
    titulo: "Stradella MV1410L 4/4",
    categoria: "Cordofonos",
    subcategoria: "Violines",
    precio: 100575,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_940770-MLA75133524113_032024-O.webp",
    descripcion: "Violin Stradella MV1410L tamaño 4/4 completo con estuche, arco y resina."
  },
  {
    id: 13,
    titulo: "Cervini HV-100 4/4",
    categoria: "Cordofonos",
    subcategoria: "Violines",
    precio: 173779,
    stock: 4,
    imagen: "https://acdn-us.mitiendanube.com/stores/004/667/527/products/tm-hv-100-4c3c8a3c01dce2e5a817302923018035-1024-1024.jpg",
    descripcion: "Violin Cervini HV-100 4/4 con estuche, arco y resina."
  },
  {
    id: 14,
    titulo: "Yamaha V3SKA 4/4",
    categoria: "Cordofonos",
    subcategoria: "Violines",
    precio: 743120,
    stock: 2,
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/v3ska-650x650.jpg",
    descripcion: "Violin Yamaha V3SKA tamaño completo 4/4, tapa de abeto y fondo/arce."
  },
  {
    id: 15,
    titulo: "Cremona SV-75 4/4",
    categoria: "Cordofonos",
    subcategoria: "Violines",
    precio: 354840,
    stock: 3,
    imagen: "https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/CREMONA/7649_large.jpg",
    descripcion: "Violin Cremona SV-75 4/4 de estudio, tapa de pino solido."
  },
  // Arpas
  {
    id: 16,
    titulo: "Walter Profesional 19 Cuerdas Electroacustica",
    categoria: "Cordofonos",
    subcategoria: "Arpas",
    precio: 509300,
    stock: 2,
    imagen: "https://musicshaker.com.ar/wp-content/uploads/2022/06/n4757u2vvze1ll2twr4s.jpg",
    descripcion: "Arpa celta profesional de 19 cuerdas, madera caoba/arce, incluye sistema electroacustico."
  },
  {
    id: 17,
    titulo: "Walter Profesional 15 Cuerdas Nylon Nogal",
    categoria: "Cordofonos",
    subcategoria: "Arpas",
    precio: 485000,
    stock: 3,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_613377-MLU76303515327_052024-O.webp",
    descripcion: "Arpa celta profesional de 15 cuerdas, madera nogal, cuerdas nylon, acabado laqueado."
  },
  {
    id: 18,
    titulo: "Walter Lira 7 Cuerdas Metal Caoba",
    categoria: "Cordofonos",
    subcategoria: "Arpas",
    precio: 350900,
    stock: 5,
    imagen: "https://www.heavenimagenes.com/heavencommerce/36552d98-557c-43dd-ad26-2c9343813a85/images/v2/WALTER/22215_xlarge.jpg",
    descripcion: "Arpa lira de 7 cuerdas metálicas, cuerpo madera caoba. Ideal para iniciarse en instrumentos de arpa."
  },
  {
    id: 19,
    titulo: "Arpa Paraguaya 36 Cuerdas Madera",
    categoria: "Cordofonos",
    subcategoria: "Arpas",
    precio: 18000,
    stock: 4,
    imagen: "https://m.media-amazon.com/images/I/71J71FA+nBL._AC_SL1500_.jpg",
    descripcion: "Arpa paraguaya original, 36 cuerdas, madera guatambu, incluye funda y tacos para semitonos."
  },
  {
    id: 20,
    titulo: "Electroacustica Walter 19 Cuerdas WH19MHEQ",
    categoria: "Cordofonos",
    subcategoria: "Arpas",
    precio: 509300,
    stock: 2,
    imagen: "https://www.miche.com.co/cdn/shop/products/ARP001_384x384.png?v=1587661031",
    descripcion: "Arpa electroacustica de 19 cuerdas, madera caoba, sistema EQ, incluye funda."
  },
  // Bajos
  {
    id: 21,
    titulo: "Fender Player Precision Bass",
    categoria: "Cordofonos",
    subcategoria: "Bajos",
    precio: 320000,
    stock: 6,
    imagen: "https://media2.101db.com.ar/12705-Productos/bajo-fender-player-precision-bass-black-pau-ferro.jpg",
    descripcion: "Bajo electrico Fender Player Precision, cuerpo de aliso, mastil de arce, sonido clasico."
  },
  {
    id: 22,
    titulo: "Ibanez GSR200",
    categoria: "Cordofonos",
    subcategoria: "Bajos",
    precio: 145000,
    stock: 10,
    imagen: "https://http2.mlstatic.com/D_Q_NP_948572-MLU73304723790_122023-O.webp",
    descripcion: "Bajo electrico Ibanez GSR200, ligero y versatil, ideal para principiantes."
  },
  {
    id: 23,
    titulo: "Squier Affinity Jazz Bass",
    categoria: "Cordofonos",
    subcategoria: "Bajos",
    precio: 220000,
    stock: 7,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_868118-MLU73614660749_122023-O.webp",
    descripcion: "Bajo Squier Affinity Jazz Bass, diseño clásico, buen equilibrio tonal."
  },
  {
    id: 24,
    titulo: "Cort Action PJ",
    categoria: "Cordofonos",
    subcategoria: "Bajos",
    precio: 170000,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_668205-MLA49952538030_052022-O.webp",
    descripcion: "Bajo Cort Action PJ con pastillas P y J, sonido versatil y cómodo."
  },
  {
    id: 25,
    titulo: "Yamaha TRBX304",
    categoria: "Cordofonos",
    subcategoria: "Bajos",
    precio: 280000,
    stock: 8,
    imagen: "https://http2.mlstatic.com/D_841650-MLA75072260336_032024-C.jpg",
    descripcion: "Bajo Yamaha TRBX304, diseño moderno, amplio rango tonal."
  },
  // Aerófonos
  // Saxofones
  {
    id: 26,
    titulo: "Yamaha YAS-280",
    categoria: "Aerofonos",
    subcategoria: "Saxofones",
    precio: 320000,
    stock: 4,
    imagen: "https://http2.mlstatic.com/D_Q_NP_826854-MLU72863228890_112023-O.webp",
    descripcion: "Saxofon alto Yamaha YAS-280, excelente para estudiantes y profesionales."
  },
  {
    id: 27,
    titulo: "Selmer Paris Series III",
    categoria: "Aerofonos",
    subcategoria: "Saxofones",
    precio: 980000,
    stock: 2,
    imagen: "https://boutiquedevientos.com.ar/wp-content/uploads/2023/04/2313052016-saxo-alto-supreme-mib-selmer-paris-towsa.jpg",
    descripcion: "Saxofon alto Selmer Paris Series III, sonido profesional y excelente calidad."
  },
  {
    id: 28,
    titulo: "Jupiter JAS710GN",
    categoria: "Aerofonos",
    subcategoria: "Saxofones",
    precio: 260000,
    stock: 5,
    imagen: "https://www.hoggtownemusic.com/images/product/large/ae00-1265.jpg",
    descripcion: "Saxofon alto Jupiter JAS710GN, diseño robusto y afinacion precisa."
  },
  {
    id: 29,
    titulo: "Conn-Selmer 54",
    categoria: "Aerofonos",
    subcategoria: "Saxofones",
    precio: 760000,
    stock: 3,
    imagen: "https://http2.mlstatic.com/D_720173-MLA47131875263_082021-C.jpg",
    descripcion: "Saxofon tenor Conn-Selmer 54, ideal para musicos avanzados."
  },
  {
    id: 30,
    titulo: "Yanagisawa AWO10",
    categoria: "Aerofonos",
    subcategoria: "Saxofones",
    precio: 1150000,
    stock: 1,
    imagen: "https://r2.gear4music.com/media/27/276905/600/preview.jpg",
    descripcion: "Saxofon alto Yanagisawa AWO10, acabado premium y excelente proyección sonora."
  },
  // Flautas
  {
    id: 31,
    titulo: "Yamaha YFL-222",
    categoria: "Aerofonos",
    subcategoria: "Flautas",
    precio: 210000,
    stock: 6,
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/yfl222-650x650.jpg",
    descripcion: "Flauta travesera Yamaha YFL-222, ideal para estudiantes, con sistema C y cuerpo de plata."
  },
  {
    id: 32,
    titulo: "Gemeinhardt 2SP",
    categoria: "Aerofonos",
    subcategoria: "Flautas",
    precio: 180000,
    stock: 7,
    imagen: "https://gemeinhardt.com/wp-content/uploads/2022/07/Nina-Perlove-Artist-Series-Handmade-Flute.jpg",
    descripcion: "Flauta travesera Gemeinhardt 2SP, diseño duradero y buena calidad sonora."
  },
  {
    id: 33,
    titulo: "Pearl 505",
    categoria: "Aerofonos",
    subcategoria: "Flautas",
    precio: 260000,
    stock: 4,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_700880-MLA70723328583_072023-O.webp",
    descripcion: "Flauta travesera Pearl 505, cuerpo de plata y mecánica profesional."
  },
  {
    id: 34,
    titulo: "Yamaha YFL-412",
    categoria: "Aerofonos",
    subcategoria: "Flautas",
    precio: 415000,
    stock: 3,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_886177-MLA31614910049_072019-O.webp",
    descripcion: "Flauta travesera Yamaha YFL-412 con cuerpo de plata, afinación precisa y sonido brillante."
  },
  {
    id: 35,
    titulo: "Trevor James 10X",
    categoria: "Aerofonos",
    subcategoria: "Flautas",
    precio: 350000,
    stock: 5,
    imagen: "https://zenithmusic.com.au/cdn/shop/files/image_79f63fe2-eed1-48d5-bd8c-cf951e06c395_1024x.jpg?v=1715614046",
    descripcion: "Flauta travesera Trevor James 10X, recomendada para nivel intermedio y avanzado."
  },
  // Clarinetes
  {
    id: 36,
    titulo: "Yamaha YCL-255",
    categoria: "Aerofonos",
    subcategoria: "Clarinetes",
    precio: 220000,
    stock: 6,
    imagen: "https://mla-s1-p.mlstatic.com/622687-MLA40150077419_122019-F.jpg",
    descripcion: "Clarinete Yamaha YCL-255, ideal para estudiantes, sonido claro y duradero."
  },
  {
    id: 37,
    titulo: "Buffet Crampon E11",
    categoria: "Aerofonos",
    subcategoria: "Clarinetes",
    precio: 700000,
    stock: 3,
    imagen: "https://boutiquedevientos.com.ar/wp-content/uploads/2021/11/BC2301-2-0W-clarinete-e11-mib-buffet-crampon-towsa.jpg",
    descripcion: "Clarinete profesional Buffet Crampon E11, madera de gran calidad y excelente afinacion."
  },
  {
    id: 38,
    titulo: "Selmer CL211",
    categoria: "Aerofonos",
    subcategoria: "Clarinetes",
    precio: 320000,
    stock: 5,
    imagen: "https://atlasmusic.net/wp-content/uploads/CL211.jpg",
    descripcion: "Clarinete Selmer CL211, diseño robusto y sonido calido."
  },
  {
    id: 39,
    titulo: "Yamaha YCL-450",
    categoria: "Aerofonos",
    subcategoria: "Clarinetes",
    precio: 520000,
    stock: 4,
    imagen: "https://sax-on.com/2949-large_default/clarinete-yamaha-ycl-450.jpg",
    descripcion: "Clarinete Yamaha YCL-450, madera selecta, para niveles intermedios y avanzados."
  },
  {
    id: 40,
    titulo: "Jupiter JCL700N",
    categoria: "Aerofonos",
    subcategoria: "Clarinetes",
    precio: 280000,
    stock: 7,
    imagen: "https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2022/03/418g6IJJFuL.AC_SL600_.jpg?fit=494%2C485&ssl=1",
    descripcion: "Clarinete Jupiter JCL700N, adecuado para estudiantes, resistente y facil de tocar."
  },
  // Trompetas
  {
    id: 41,
    titulo: "Yamaha YTR-2330",
    categoria: "Aerofonos",
    subcategoria: "Trompetas",
    precio: 230000,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_828395-MLC26900828297_022018-O-trompeta-yamaha-ytr-2330-bb-acabado-lacado-dorado.webp",
    descripcion: "Trompeta Yamaha YTR-2330, ideal para estudiantes, diseño ligero y sonido claro."
  },
  {
    id: 42,
    titulo: "Bach TR300H2",
    categoria: "Aerofonos",
    subcategoria: "Trompetas",
    precio: 500000,
    stock: 3,
    imagen: "https://chinookmusic.com/wp-content/uploads/2021/08/BachTrumpet1.jpg",
    descripcion: "Trompeta Bach TR300H2, calidad profesional, sonido potente y preciso."
  },
  {
    id: 43,
    titulo: "Conn 1B",
    categoria: "Aerofonos",
    subcategoria: "Trompetas",
    precio: 650000,
    stock: 2,
    imagen: "https://store.weinermusic.com/cdn/shop/products/CONN1B_c1740927-4674-4cd8-a3b1-d77d6798968f.jpg?v=1574196268",
    descripcion: "Trompeta Conn 1B, reconocida por su tonalidad cálida y versatilidad."
  },
  {
    id: 44,
    titulo: "Getzen 590S",
    categoria: "Aerofonos",
    subcategoria: "Trompetas",
    precio: 450000,
    stock: 4,
    imagen: "https://www.getzen.com/wp-content/uploads/590-s.jpg",
    descripcion: "Trompeta Getzen 590S, perfecta para musicos intermedios, con sonido brillante."
  },
  {
    id: 45,
    titulo: "Yamaha YTR-6335S",
    categoria: "Aerofonos",
    subcategoria: "Trompetas",
    precio: 780000,
    stock: 1,
    imagen: "https://tiendafeedback.com.ar/66282-large_default/trompeta-yamaha-ytr6335s.jpg",
    descripcion: "Trompeta Yamaha YTR-6335S, modelo profesional con campana de plata."
  },
  {
    id: 46,
    titulo: "Hohner Special 20",
    categoria: "Aerofonos",
    subcategoria: "Armonicas",
    precio: 25000,
    stock: 15,
    imagen: "https://www.heavenimagenes.com/heavencommerce/b23e72e1-40ba-4adb-9dc3-7ee3d3a63b35/images/v2/HOHNER/31412_xlarge.jpg",
    descripcion: "Armonica diatonica Hohner Special 20, ideal para blues y rock."
  },
  {
    id: 47,
    titulo: "Suzuki Manji M-20",
    categoria: "Aerofonos",
    subcategoria: "Armonicas",
    precio: 27000,
    stock: 10,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_681494-MLA79354414487_092024-O.webp",
    descripcion: "Armonica Suzuki Manji M-20, calidad japonesa, sonido claro y duradero."
  },
  {
    id: 48,
    titulo: "Lee Oskar Major Diatonic",
    categoria: "Aerofonos",
    subcategoria: "Armonicas",
    precio: 30000,
    stock: 8,
    imagen: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_15/153766/9421128_800.jpg",
    descripcion: "Armonica Lee Oskar Major Diatonic, muy resistente y afinacion estable."
  },
  {
    id: 49,
    titulo: "Hohner Marine Band Crossover",
    categoria: "Aerofonos",
    subcategoria: "Armonicas",
    precio: 35000,
    stock: 6,
    imagen: "https://http2.mlstatic.com/D_Q_NP_798819-MLU72965551418_112023-O.webp",
    descripcion: "Armonica Hohner Marine Band Crossover, combinacion de madera y metal para mejor tono."
  },
  {
    id: 50,
    titulo: "Seydel Blues Session Steel",
    categoria: "Aerofonos",
    subcategoria: "Armonicas",
    precio: 32000,
    stock: 7,
    imagen: "https://http2.mlstatic.com/D_Q_NP_971717-CBT53760466390_022023-O.webp",
    descripcion: "Armonica Seydel Blues Session Steel, acero inoxidable, ideal para profesionales."
  },
  // Percusión
  // Baterías
  {
    id: 51,
    titulo: "Pearl Export EXX725S",
    categoria: "Percusion",
    subcategoria: "Baterias",
    precio: 340000,
    stock: 3,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_841496-MLA31605864835_072019-O.webp",
    descripcion: "Bateria Pearl Export EXX725S, kit completo para principiantes y avanzados."
  },
  {
    id: 52,
    titulo: "Tama Imperialstar IP52KH6",
    categoria: "Percusion",
    subcategoria: "Baterias",
    precio: 370000,
    stock: 4,
    imagen: "https://m.media-amazon.com/images/I/81r6PXSEo3L.jpg",
    descripcion: "Bateria Tama Imperialstar IP52KH6, sonido profesional, ideal para todo nivel."
  },
  {
    id: 53,
    titulo: "Mapex Mars MA528SF",
    categoria: "Percusion",
    subcategoria: "Baterias",
    precio: 320000,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_604989-MLU73627527529_122023-O.webp",
    descripcion: "Bateria Mapex Mars MA528SF, kit compacto y potente, para uso profesional y amateur."
  },
  {
    id: 54,
    titulo: "Ludwig Breakbeats by Questlove",
    categoria: "Percusion",
    subcategoria: "Baterias",
    precio: 290000,
    stock: 2,
    imagen: "https://media.guitarcenter.com/is/image/MMGS7/L95201000003000-00-2000x2000.jpg",
    descripcion: "Bateria Ludwig Breakbeats, kit compacto y portable, diseño moderno."
  },
  {
    id: 55,
    titulo: "Gretsch Catalina Club",
    categoria: "Percusion",
    subcategoria: "Baterias",
    precio: 410000,
    stock: 3,
    imagen: "https://acropolis.ua/include/images/detail/6672de24143e6-full.jpg",
    descripcion: "Bateria Gretsch Catalina Club, sonido vintage y calidad premium."
  },
  // Tambores
  {
    id: 56,
    titulo: "Meinl Headliner Serie",
    categoria: "Percusion",
    subcategoria: "Tambores",
    precio: 75000,
    stock: 8,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_828555-MLA42100462740_062020-O.webp",
    descripcion: "Tambor Meinl Headliner Serie, ideal para estudiantes y principiantes."
  },
  {
    id: 57,
    titulo: "LP Latin Percussion Timbal",
    categoria: "Percusion",
    subcategoria: "Tambores",
    precio: 120000,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_854484-MLA43701115185_102020-C.jpg",
    descripcion: "Timbal LP Latin Percussion, sonido fuerte y claro para percusionistas avanzados."
  },
  {
    id: 58,
    titulo: "Pearl Marching Snare",
    categoria: "Percusion",
    subcategoria: "Tambores",
    precio: 95000,
    stock: 7,
    imagen: "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1147423_59974_popup.jpg",
    descripcion: "Tambor snare Pearl Marching, diseño resistente para marching bands."
  },
  {
    id: 59,
    titulo: "Tama SLP G-Maple",
    categoria: "Percusion",
    subcategoria: "Tambores",
    precio: 110000,
    stock: 6,
    imagen: "https://listaimsa.com.ar/wp-content/uploads/2022/10/slp-g-maple.jpg",
    descripcion: "Tambor Tama SLP G-Maple, construcción premium con sonido cálido."
  },
  {
    id: 60,
    titulo: "Remo Fiberskyn Snare",
    categoria: "Percusion",
    subcategoria: "Tambores",
    precio: 90000,
    stock: 4,
    imagen: "https://www.heavenimagenes.com/heavencommerce/cb3a084a-dbe2-44e6-8edf-6f2ad59d8de3/images/v2/REMO/1509301241581324_01_medium.jpg",
    descripcion: "Tambor Remo Fiberskyn, parche sintético con excelente proyección sonora."
  },
  //Cajones
  {
    id: 61,
    titulo: "Schlagwerk CP404",
    categoria: "Percusion",
    subcategoria: "Cajones",
    precio: 55000,
    stock: 9,
    imagen: "https://www.schlagwerk.com/fileadmin/Bilder/Produkte/Cajon/Cajon-2inOne/CP404BLK-Cajon-2inOne-Black-Edition-Large-Schlagwerk.jpg",
    descripcion: "Cajon Schlagwerk CP404, madera maciza, sonido profundo y nítido."
  },
  {
    id: 62,
    titulo: "Meinl Percussion Cajon",
    categoria: "Percusion",
    subcategoria: "Cajones",
    precio: 48000,
    stock: 12,
    imagen: "https://http2.mlstatic.com/D_Q_NP_877240-CBT80190630906_112024-O.webp",
    descripcion: "Cajon Meinl Percussion, ideal para principiantes y profesionales."
  },
  {
    id: 63,
    titulo: "Tycoon Cajon Classic",
    categoria: "Percusion",
    subcategoria: "Cajones",
    precio: 42000,
    stock: 10,
    imagen: "https://mozartchahine.com/wp-content/uploads/2024/07/tkpv-35-35-1.jpg",
    descripcion: "Cajon Tycoon Classic, construcción robusta y sonido equilibrado."
  },
  {
    id: 64,
    titulo: "LP Aspire Cajon",
    categoria: "Percusion",
    subcategoria: "Cajones",
    precio: 46000,
    stock: 8,
    imagen: "https://drumcenternh.com/cdn/shop/products/lpa1332dws-hqw_1.jpg?v=1702657937",
    descripcion: "Cajon LP Aspire, compacto y con buena resonancia."
  },
  {
    id: 65,
    titulo: "Gon Bops Matador",
    categoria: "Percusion",
    subcategoria: "Cajones",
    precio: 53000,
    stock: 7,
    imagen: "https://productos.mjmusic.com.ar/images/TPCJW.jpg",
    descripcion: "Cajon Gon Bops Matador, madera selecta con acabado premium."
  },
  //Electrófonos
  // Sintetizadores
  {
    id: 66,
    titulo: "Korg Minilogue",
    categoria: "Electrofonos",
    subcategoria: "Sintetizadores",
    precio: 780000,
    stock: 4,
    imagen: "https://www.b2bmusicstore.com.ar/wp-content/uploads/korg-minilogue-xd-2.jpg",
    descripcion: "Sintetizador analógico Korg Minilogue, 4 voces, ideal para producción musical."
  },
  {
    id: 67,
    titulo: "Roland Juno-DS61",
    categoria: "Electrofonos",
    subcategoria: "Sintetizadores",
    precio: 690000,
    stock: 6,
    imagen: "https://compasuno.com.ar/wp-content/uploads/2021/07/D_722710-MLA25636842337_062017-F-300x300.jpg",
    descripcion: "Sintetizador Roland Juno-DS61, polifónico y versátil para todo tipo de músicos."
  },
  {
    id: 68,
    titulo: "Novation Bass Station II",
    categoria: "Electrofonos",
    subcategoria: "Sintetizadores",
    precio: 720000,
    stock: 5,
    imagen: "https://therockstore.com.ar/wp-content/uploads/2021/10/1621987072949-1024x1024.jpg",
    descripcion: "Sintetizador analógico Novation Bass Station II, potente y con secuenciador."
  },
  {
    id: 69,
    titulo: "Arturia MicroFreak",
    categoria: "Electrofonos",
    subcategoria: "Sintetizadores",
    precio: 640000,
    stock: 7,
    imagen: "https://nightlife-electronics.com/cdn/shop/products/Arturia_microfreak_synthesizer1_900x.jpg?v=1564461950",
    descripcion: "Sintetizador híbrido Arturia MicroFreak, diseño compacto y sonidos innovadores."
  },
  {
    id: 70,
    titulo: "Korg Prologue 8",
    categoria: "Electrofonos",
    subcategoria: "Sintetizadores",
    precio: 1200000,
    stock: 2,
    imagen: "https://expomusic.com.pe/wp-content/uploads/2022/01/Sintetizador-Analogico-Korg-Prologue-16-1.jpg",
    descripcion: "Sintetizador Korg Prologue 8, 8 voces, ideal para profesionales."
  },
  // Teclados
  {
    id: 71,
    titulo: "Yamaha P-125",
    categoria: "Electrofonos",
    subcategoria: "Teclados",
    precio: 370000,
    stock: 8,
    imagen: "https://m.media-amazon.com/images/I/31RGH48OFmL._SS400_.jpg",
    descripcion: "Teclado Yamaha P-125, piano digital compacto con excelente sonido."
  },
  {
    id: 72,
    titulo: "Casio Privia PX-160",
    categoria: "Electrofonos",
    subcategoria: "Teclados",
    precio: 320000,
    stock: 10,
    imagen: "https://r2.gear4music.com/media/47/478327/600/preview.jpg",
    descripcion: "Teclado Casio Privia PX-160, ideal para principiantes y estudiantes."
  },
  {
    id: 73,
    titulo: "Roland FP-30X",
    categoria: "Electrofonos",
    subcategoria: "Teclados",
    precio: 410000,
    stock: 5,
    imagen: "https://solomusica.com.ar/sm2020/9905-large_default/roland-fp-30x-piano-digital.jpg",
    descripcion: "Teclado Roland FP-30X, piano digital portátil con sonidos realistas."
  },
  {
    id: 74,
    titulo: "Korg B2",
    categoria: "Electrofonos",
    subcategoria: "Teclados",
    precio: 350000,
    stock: 7,
    imagen: "https://partituraonline.com/97170-large_default/korg-b2sp-bk.jpg",
    descripcion: "Teclado Korg B2, diseño elegante y sonido auténtico."
  },
  {
    id: 75,
    titulo: "Alesis Recital Pro",
    categoria: "Electrofonos",
    subcategoria: "Teclados",
    precio: 290000,
    stock: 9,
    imagen: "https://http2.mlstatic.com/D_Q_NP_611527-MLU74075464957_012024-O.webp",
    descripcion: "Teclado Alesis Recital Pro, con 88 teclas y sensibilidad ajustable."
  },
  // Bajos eléctricos
  {
    id: 76,
    titulo: "Fender Player Jazz Bass",
    categoria: "Electrofonos",
    subcategoria: "Bajos electricos",
    precio: 580000,
    stock: 4,
    imagen: "https://media2.101db.com.ar/11695-Productos/bajo-fender-player-jazz-bass-maple-buttercream.jpg",
    descripcion: "Bajo electrico Fender Player Jazz Bass, sonido clásico y versatilidad."
  },
  {
    id: 77,
    titulo: "Ibanez GSR200",
    categoria: "Electrofonos",
    subcategoria: "Bajos electricos",
    precio: 320000,
    stock: 6,
    imagen: "https://http2.mlstatic.com/D_Q_NP_948572-MLU73304723790_122023-O.webp",
    descripcion: "Bajo electrico Ibanez GSR200, ideal para principiantes y sonido moderno."
  },
  {
    id: 78,
    titulo: "Yamaha TRBX304",
    categoria: "Electrofonos",
    subcategoria: "Bajos electricos",
    precio: 450000,
    stock: 5,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/040/912/products/yamaha-trbx304-car-yamaha1-af997898c0ff8ee58916917853436558-480-0.jpg",
    descripcion: "Bajo electrico Yamaha TRBX304, gran construccion y tono equilibrado."
  },
  {
    id: 79,
    titulo: "Squier Classic Vibe '60s Precision",
    categoria: "Electrofonos",
    subcategoria: "Bajos electricos",
    precio: 390000,
    stock: 7,
    imagen: "https://gamamusic.com/cdn/shop/files/0374510505-1.jpg?v=1690411907&width=1000",
    descripcion: "Bajo electrico Squier Classic Vibe '60s Precision, sonido vintage."
  },
  {
    id: 80,
    titulo: "Epiphone Thunderbird IV",
    categoria: "Electrofonos",
    subcategoria: "Bajos electricos",
    precio: 520000,
    stock: 4,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_991516-MLA46228789091_062021-O.webp",
    descripcion: "Bajo electrico Epiphone Thunderbird IV, diseño icónico y sonido potente."
  },
  // Pianos digitales
  {
    id: 81,
    titulo: "Yamaha DGX-670",
    categoria: "Electrofonos",
    subcategoria: "Pianos Digitales",
    precio: 580000,
    stock: 5,
    imagen: "https://es.yamaha.com/es/files/Image-index_DGX-670_1080x1080_d80d3e2df704cbcc702418ae8ade6a22.jpg?impolicy=resize&imwid=1080&imhei=1080",
    descripcion: "Piano digital Yamaha DGX-670, con funciones avanzadas y sonidos realistas."
  },
  {
    id: 82,
    titulo: "Roland RP-102",
    categoria: "Electrofonos",
    subcategoria: "Pianos Digitales",
    precio: 670000,
    stock: 4,
    imagen: "https://www.toms.co.za/cdn/shop/products/RP-102_DR_800x.jpg?v=1666866044",
    descripcion: "Piano digital Roland RP-102, ideal para principiantes y con gran tacto."
  },
  {
    id: 83,
    titulo: "Casio Privia PX-S1000",
    categoria: "Electrofonos",
    subcategoria: "Pianos Digitales",
    precio: 420000,
    stock: 7,
    imagen: "https://www.musicaltommy.com/33456-large_default/casio-privia-px-s1100bk-kit.jpg",
    descripcion: "Piano digital Casio Privia PX-S1000, compacto y con excelente calidad de sonido."
  },
  {
    id: 84,
    titulo: "Korg B1",
    categoria: "Electrofonos",
    subcategoria: "Pianos Digitales",
    precio: 390000,
    stock: 6,
    imagen: "https://static.sonovente.com/img/library/zoom/49/450/49104_1.jpg",
    descripcion: "Piano digital Korg B1, sonido auténtico y diseño simple."
  },
  {
    id: 85,
    titulo: "Kawai ES110",
    categoria: "Electrofonos",
    subcategoria: "Pianos Digitales",
    precio: 720000,
    stock: 3,
    imagen: "https://images-na.ssl-images-amazon.com/images/I/61ww1pP1bdL._SS400_.jpg",
    descripcion: "Piano digital Kawai ES110, tacto profesional y portátil."
  },
  // Theramines
  {
    id: 86,
    titulo: "Moog Theremini",
    categoria: "Electrofonos",
    subcategoria: "Theremines",
    precio: 280000,
    stock: 4,
    imagen: "https://www.heavenimagenes.com/heavencommerce/bf05a8b6-ecb8-4713-82f8-c2ad017db15b/images/v2/MOOG/1204231157379229_01_xlarge.jpg",
    descripcion: "Theremini de Moog, theremín digital con funcionalidades modernas y sintetizador integrado."
  },
  {
    id: 87,
    titulo: "Burns Theremin",
    categoria: "Electrofonos",
    subcategoria: "Theremines",
    precio: 250000,
    stock: 3,
    imagen: "https://lh3.googleusercontent.com/proxy/4P0AsNGbySOQlm4zOw-Xd0Gxjcc90YU47dRJ9NaVDPBH45JAPuaLgcqeUgZ8NK1__o-SyiFF8m9s0MfZ8N3rkN-dpxUC0QZaJ7mtCNZtaCx2vw",
    descripcion: "Theremín Burns, diseño clásico y sonido auténtico."
  },
  {
    id: 88,
    titulo: "Befaco Theremax",
    categoria: "Electrofonos",
    subcategoria: "Theremines",
    precio: 230000,
    stock: 5,
    imagen: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/597998/19405816_800.jpg",
    descripcion: "Theremin modular Befaco Theremax, ideal para músicos experimentales."
  },
  {
    id: 89,
    titulo: "Paia Theremin Kit",
    categoria: "Electrofonos",
    subcategoria: "Theremines",
    precio: 180000,
    stock: 6,
    imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-85BSdE3LkSeqBoWBCJlTuOu_NHARqYRlXoeO9IAzSli7PUhwkgjFmwhXMcTAcglfIKhi43Auc7xyfn_v-VIcwuKScIs0zPywtbrfJ7BEsRNvDHFW-TxPFmWiMiUzoDXLi5_maA/s1600/s-l1600-3.jpg",
    descripcion: "Kit Theremin Paia para armar, una opción para aprender y personalizar."
  },
  {
    id: 90,
    titulo: "Tangible Instruments Theremin",
    categoria: "Electrofonos",
    subcategoria: "Theremines",
    precio: 260000,
    stock: 2,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Etherwave_Theremin_Kit.jpg/1200px-Etherwave_Theremin_Kit.jpg",
    descripcion: "Theremin Tangible Instruments, control avanzado y diseño compacto."
  },
  // Controladores MIDI
  {
    id: 91,
    titulo: "Akai MPK Mini MK3",
    categoria: "Electrofonos",
    subcategoria: "Controladores MIDI",
    precio: 85000,
    stock: 12,
    imagen: "https://www.b2bmusicstore.com.ar/wp-content/uploads/akai-mpk-mini-mk3-1.jpg",
    descripcion: "Controlador MIDI compacto Akai MPK Mini MK3, con pads y knobs asignables."
  },
  {
    id: 92,
    titulo: "Novation Launchkey 49 MK3",
    categoria: "Electrofonos",
    subcategoria: "Controladores MIDI",
    precio: 130000,
    stock: 8,
    imagen: "https://proaudiosur.com.ar/wp-content/uploads/2024/10/D_928857-MLA45773797698_042021-F.jpg",
    descripcion: "Controlador Novation Launchkey 49 MK3, ideal para producción y presentaciones."
  },
  {
    id: 93,
    titulo: "Arturia KeyLab Essential 61",
    categoria: "Electrofonos",
    subcategoria: "Controladores MIDI",
    precio: 150000,
    stock: 6,
    imagen: "https://www.musicalesdoris.com/cdn/shop/products/9ecc1607b096f64152679e9c60bc4be4-controlador-arturia-midi-usb-61-tcls-arturia-keylab-essent-61mk3-bk_1280x.jpg?v=1694565282",
    descripcion: "Controlador Arturia KeyLab Essential 61, con integración total para DAWs."
  },
  {
    id: 94,
    titulo: "M-Audio Oxygen 25 MKV",
    categoria: "Electrofonos",
    subcategoria: "Controladores MIDI",
    precio: 78000,
    stock: 10,
    imagen: "https://http2.mlstatic.com/D_912518-CBT81892310383_012025-C.jpg",
    descripcion: "Controlador M-Audio Oxygen 25 MKV, portátil y con pads RGB."
  },
  {
    id: 95,
    titulo: "Native Instruments Komplete Kontrol M32",
    categoria: "Electrofonos",
    subcategoria: "Controladores MIDI",
    precio: 115000,
    stock: 7,
    imagen: "https://chilangoeshop.com/shop/49639-medium_default/native-instruments-komplete-kontrol-m32.jpg",
    descripcion: "Controlador Native Instruments Komplete Kontrol M32, compacto y potente."
  }
]
export default productos;
