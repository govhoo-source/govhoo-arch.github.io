/* =========================================================
   familybondlaw.com — 康雪崧律师团队 · 外国采购商中国法律服务
   六语言切换 (zh/en/es/fr/de/ar) + 服务目录渲染 + WhatsApp
   数据结构参考 spbuds.com：select + data-i18n + translations
   ========================================================= */

/* ---------- 通用 UI 文案翻译 ---------- */
const I18N = {
  zh: {
    pageTitle: "中国执业律师 · 服务境外采购商 | 康雪崧律师 · 功承瀛泰深圳",
    brandName: "康雪崧律师团队<b> · 功承瀛泰</b>",
    brandSub: "跨境采购法律服务 · 中国 · 深圳",
    navServices: "服务清单", navAbout: "关于我", navFees: "收费模式", navContact: "联系我们",
    heroEyebrow: "中国执业律师 · 中英双语 · 深耕跨境贸易",
    heroTitle1: "你在中国采购，", heroTitle2: "我就是你在中国的律师",
    heroSub: "我是康雪崧，中国执业律师、上海功承瀛泰（深圳）律师事务所合伙人。我懂中国法律、能用中英双语直接沟通、熟悉跨境贸易实操，长期服务境外采购商——从供应商尽调、合同把关、货款安全，到知识产权、贸易合规与争议解决，替你在中国的生意挡住风险。",
    heroEn: "Kang Xuesong · China-qualified lawyer · Wintell & Co (Shenzhen) — your on-the-ground counsel in China.",
    btnCatalogue: "浏览服务清单",
    heroCardTag: "为什么是我",
    why1: "中国执业律师：在中国境内可立案、可出庭、可保全、可执行",
    why2: "中英双语直连沟通，不靠翻译转述",
    why3: "香港大学金融背景，懂跨境贸易实操与供应链",
    why4: "服务过同类境外采购商：付款前尽调、货款追索、商标抢注应对",
    why5: "依托功承瀛泰全国 18 家办公室与英国 HFW 联营网络",
    why6: "标准化产品 · 签约前书面报价 · 费用透明",
    tr1s: "家", tr2s: "名", tr3n: "双",
    tr1: "全国办公室", tr2: "专业人员", tr3: "语言能力", tr4: "深圳分所设立",
    cataEyebrow: "服务目录", cataTitle: "八大板块 · 覆盖采购全流程", cataSub: "每一项服务均可在签约前获得书面报价，交付成果可提供英文版本。点击上方板块快速跳转。",
    abEyebrow: "关于我", abTitle: "关于我",
    abFirmH: "关于律所 — 上海功承瀛泰律师事务所",
    abFirmP1: "功承瀛泰（Wintell & Co）是一家全国性综合律师事务所，由上海瀛泰与吉林功承于 2023 年合并设立，总部位于上海，拥有近 500 名专业人员，在全国设有 18 家办公室，并与英国夏礼文律师事务所（HFW）及新加坡律师事务所建立联营合作，可为客户提供跨法域一体化法律服务。",
    abFirmP2: "律所长期深耕海事海商、跨境商事争议解决与国际仲裁、金融保险、知识产权及公司商事领域，代理案例多次入选《最高人民法院公报》及最高人民法院涉“一带一路”建设典型案例，连续多年获钱伯斯（Chambers）、The Legal 500、《亚洲法律杂志》（ALB）、《商法》（CBLJ）等国际权威评级推荐，并获评“全国优秀律师事务所”。",
    abFirmP3: "上海功承瀛泰（深圳）律师事务所于 2023 年设立，地处粤港澳大湾区核心城市深圳，毗邻香港，深度链接珠三角制造业与外贸产业带，可为境外采购商提供近距离、高响应的在地法律支持。",
    abTeamH: "团队特色",
    tFeat1: "中英文双语服务，跨境沟通零障碍",
    tFeat2: "粤港澳大湾区区位，贴近珠三角供应链",
    tFeat3: "全国 18 家办公室协同交付",
    tFeat4: "HFW · 新加坡联营跨境网络",
    tFeat5: "标准化产品 · 透明报价 · 固定费用",
    kName: "康雪崧 律师", kRole: "功承瀛泰（深圳）律师事务所合伙人 · 团队负责人",
    kEdu1: "中山大学", kEdu1b: "法学本科",
    kEdu2: "香港大学", kEdu2b: "金融与投资管理研究生",
    kBio1: "我是康雪崧，中国执业律师，2014 年起执业，上海功承瀛泰（深圳）律师事务所合伙人。中山大学法学本科、香港大学金融与投资管理研究生，兼具法律与金融的复合背景，长期为境内外企业客户提供中英文双语法律服务，深耕涉港涉外业务。",
    kBio2: "我懂中国法律、说中英双语、熟悉跨境贸易实操，也长期服务境外采购商，可以把中国法律要求和你的采购安排放在一起考虑。团队服务产品曾获深圳市律师协会创新大赛二等奖（2023）与三等奖（2026），涉外采购法律服务由我牵头，联合全所海事海商、跨境合规、知识产权团队协同交付。",
    kBadge1: "Chambers / Legal 500 推荐律所", kBadge2: "执业证号 14403201411015550",
    feeEyebrow: "收费模式", feeTitle: "服务收费模式",
    feeSub: "所有报价均为含税价；差旅、公证、翻译及第三方机构费用实报实销。",
    fee1T: "固定费用", fee1D: "标准化服务产品，签约前提供书面报价，价格清晰透明，无隐藏费用。",
    fee2T: "计时收费", fee2D: "适用于争议解决与专项合规等个案化服务，按实际投入计费。",
    fee3T: "年度顾问 Retainer", fee3D: "打包年度法律顾问服务，享受优先响应与专属费率。",
    ctaTitle: "为您的中国采购保驾护航", ctaSub: "告诉我们您的采购需求与目标市场，我们将在 1 个工作日内回复。欢迎通过 WhatsApp 或邮件直接联系康雪崧律师团队。",
    btnEmail: "发送邮件",
    footBrand: "康雪崧律师团队<b> · 功承瀛泰</b>",
    footDesc: "上海功承瀛泰（深圳）律师事务所。为外国采购商提供中国采购全流程法律服务。本网站所有内容仅供一般信息参考，不构成法律意见。",
    footNav: "网站导航", footContact: "联系方式",
    footCopy: "康雪崧律师团队 · 上海功承瀛泰（深圳）律师事务所",
    footDisclaimer: "本网站及其内容仅供服务介绍之用，不构成法律意见；具体权利义务以双方签署的委托合同为准。",
    painEyebrow: "你的真实处境",
    painTitle: "跨境采购里，真正让人睡不着觉的 8 件事",
    painSub: "每一条都对应一个具体的服务板块——点击卡片，可直接跳转到对应服务。",
    painJump: "查看对应板块",
    painMapLead: "对应服务板块",
    advEyebrow: "为什么是我",
    advTitle: "四个理由，让你敢把在中国的法律事务交给我",
    advSub: "懂中国法律、中英双语、熟悉跨境贸易实操、有同类外商客户经验——这四点决定了我能为你做什么、做到什么程度。",
    gapEyebrow: "服务路径说明",
    gapTitle: "不同路径，能覆盖到哪一步",
    gapSub: "一件跨境采购的事能推进到哪一步，取决于执业资格与中国法律的程序要求。以下是常见路径的职能范围，以及我可以承接的部分。",
    gapCant: "常见路径的职能范围",
    gapCan: "我可以承接的部分"
  },
  en: {
    pageTitle: "China-Qualified Lawyer for Overseas Buyers | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Cross-border Sourcing Legal Services · Shenzhen, China",
    navServices: "Services", navAbout: "About", navFees: "Fees", navContact: "Contact",
    heroEyebrow: "China-Qualified Lawyer · Bilingual · Cross-border Trade",
    heroTitle1: "Sourcing in China?", heroTitle2: "I am your lawyer in China",
    heroSub: "I am Kang Xuesong, a China-qualified lawyer and partner at Wintell & Co (Shenzhen). I know Chinese law, work in both Chinese and English, and understand how cross-border trade actually operates. I have long served overseas buyers — from supplier due diligence, contract review and payment security to IP, trade compliance and dispute resolution — protecting your business on the ground in China.",
    heroEn: "康雪崧律师 · 中国执业律师 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "Browse Services",
    heroCardTag: "Why me",
    why1: "A China-qualified lawyer: can file, appear, preserve and enforce inside China",
    why2: "Direct bilingual communication — no translator in between",
    why3: "HKU finance background; understands trade practice and supply chains",
    why4: "Has served overseas buyers: pre-payment due diligence, payment recovery, trademark squatting",
    why5: "Backed by Wintell & Co's 18 national offices and the HFW (UK) association",
    why6: "Standardised products · written quotes before engagement · transparent fees",
    tr1s: "Offices", tr2s: "Professionals", tr3n: "2",
    tr1: "National offices", tr2: "Professionals", tr3: "Languages", tr4: "Shenzhen office since",
    cataEyebrow: "Service Catalogue", cataTitle: "Eight Sections Covering the Full Sourcing Journey", cataSub: "Written quotes are available before engagement for every service; deliverables can be provided in English. Use the chips above to jump to a section.",
    abEyebrow: "About me", abTitle: "About me",
    abFirmH: "The Firm — Wintell & Co",
    abFirmP1: "Wintell & Co is a full-service national law firm headquartered in Shanghai, formed in 2023 through the merger of Wintell and Gongcheng. With nearly 500 professionals across 18 offices nationwide, and through its associations with HFW (UK) and a Singapore law firm, the firm provides integrated cross-border legal services.",
    abFirmP2: "The firm is well known for maritime law, cross-border commercial dispute resolution and international arbitration, finance and insurance, IP and corporate & commercial work. Its cases have been published in the Gazette of the Supreme People's Court and listed among the SPC's typical cases concerning the Belt & Road Initiative. It is consistently recommended by Chambers and Partners, The Legal 500, ALB and China Business Law Journal, and has been honoured as a 'National Excellent Law Firm'.",
    abFirmP3: "Wintell & Co (Shenzhen Office), established in 2023 in the Greater Bay Area next to Hong Kong, is closely connected to the Pearl River Delta manufacturing and foreign-trade belt, offering overseas buyers close-to-the-ground and responsive legal support.",
    abTeamH: "Team highlights",
    tFeat1: "Bilingual (CN/EN) service — seamless cross-border communication",
    tFeat2: "GBA location close to the Pearl River Delta supply chain",
    tFeat3: "Coordinated delivery across 18 national offices",
    tFeat4: "Associated network: HFW & a Singapore firm",
    tFeat5: "Standardised products · transparent quotes · fixed fees",
    kName: "Kang Xuesong", kRole: "Partner, Wintell & Co (Shenzhen Office) · Team Lead",
    kEdu1: "Sun Yat-sen University", kEdu1b: "LL.B., Law",
    kEdu2: "The University of Hong Kong", kEdu2b: "Postgraduate, Finance & Investment Management",
    kBio1: "I am Kang Xuesong, a China-qualified lawyer in practice since 2014 and a partner at Wintell & Co (Shenzhen). I hold an LL.B. from Sun Yat-sen University and a postgraduate degree in Finance and Investment Management from the University of Hong Kong — a combined legal and financial background — and I have long served domestic and international clients in Chinese and English, focusing on Hong Kong-related and cross-border matters.",
    kBio2: "I know Chinese law, work in two languages, understand cross-border trade practice, and have long served overseas buyers, so PRC requirements and your sourcing arrangements are considered together. Our service products won second prize (2023) and third prize (2026) in the Shenzhen Lawyers Association Innovation Competition; cross-border sourcing services are led by me and delivered with the firm's maritime, trade-compliance and IP teams.",
    kBadge1: "Chambers / Legal 500 recommended firm", kBadge2: "PRC Licence No. 14403201411015550",
    feeEyebrow: "Fee Models", feeTitle: "Fee Models",
    feeSub: "All quotes are inclusive of tax; travel, notarisation, translation and third-party costs are reimbursed at cost.",
    fee1T: "Fixed Fee", fee1D: "Standardised products with a written quote before engagement — clear, transparent, no hidden costs.",
    fee2T: "Hourly Billing", fee2D: "For bespoke work such as dispute resolution and ad-hoc compliance, billed on actual time spent.",
    fee3T: "Annual Retainer", fee3D: "A bundled annual counsel package with priority response and preferential rates.",
    ctaTitle: "Protect Your Sourcing Journey in China", ctaSub: "Tell us about your sourcing needs and target market — we reply within one business day. Contact the Kang Xuesong Team via WhatsApp or email.",
    btnEmail: "Email Us",
    footBrand: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    footDesc: "Wintell & Co (Shenzhen Office). Full-process legal services for overseas buyers sourcing from China. Content on this website is for general information only and does not constitute legal advice.",
    footNav: "Sitemap", footContact: "Contact",
    footCopy: "Kang Xuesong Team · Wintell & Co (Shenzhen Office)",
    footDisclaimer: "This website and its content are for service introduction only and do not constitute legal advice; rights and obligations are governed by the engagement agreement signed by the parties.",
    painEyebrow: "Your real situation",
    painTitle: "Eight things that really keep overseas buyers awake",
    painSub: "Each one maps to a specific service block — click a card to jump straight to it.",
    painJump: "See the related service",
    painMapLead: "Related service block",
    advEyebrow: "Why me",
    advTitle: "Four reasons to trust your China legal work to me",
    advSub: "Chinese law, bilingual delivery, hands-on cross-border trade experience, and buyers like you — these four things define what I can do for you.",
    gapEyebrow: "Service paths, clarified",
    gapTitle: "What each route can cover",
    gapSub: "How far a cross-border sourcing matter can go depends on licensing and on PRC procedural requirements. Below is the scope of the usual routes, and the part I take on.",
    gapCant: "Scope of the usual routes",
    gapCan: "What I take on"
  },
  es: {
    pageTitle: "Servicios Legales para Compradores Internacionales en China | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Servicios legales transfronterizos · Shenzhen, China",
    navServices: "Servicios", navAbout: "Sobre mí", navFees: "Honorarios", navContact: "Contacto",
    heroEyebrow: "Ejercicio profesional en China · Bilingüe · Comercio transfronterizo",
    heroTitle1: "¿Compra en China?", heroTitle2: "Yo soy su abogado en China",
    heroSub: "Mi nombre es Kang Xuesong. Ejerzo en China desde 2014 y dirijo en Wintell & Co (Shenzhen) el equipo de servicios legales para compradores extranjeros. Conozco el Derecho chino, trabajo en chino e inglés y entiendo cómo funciona realmente el comercio transfronterizo: desde la diligencia de proveedores, la revisión de contratos y la seguridad de pagos hasta la propiedad intelectual, el cumplimiento comercial y la resolución de disputas, protejo su negocio sobre el terreno en China.",
    heroEn: "康雪崧律师 · 中国执业律师 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "Ver Servicios",
    heroCardTag: "Por qué yo",
    why1: "Con licencia para ejercer en China: puedo demandar, comparecer, asegurar y ejecutar dentro del país",
    why2: "Comunicación directa en chino e inglés, sin traductores",
    why3: "Formación financiera en la Universidad de Hong Kong: el comercio y las cadenas de suministro no me son ajenos",
    why4: "Experiencia con compradores extranjeros: diligencia previa al pago, cobro de pagos, registros indebidos de marcas",
    why5: "Con el respaldo de 18 oficinas nacionales de Wintell & Co y la red asociada de HFW (Reino Unido)",
    why6: "Productos estandarizados · presupuesto por escrito antes de contratar · honorarios transparentes",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Oficinas nacionales", tr2: "Profesionales", tr3: "Idiomas", tr4: "Oficina de Shenzhen desde",
    cataEyebrow: "Catálogo", cataTitle: "Ocho secciones para todo el proceso de compra", cataSub: "Cada servicio cuenta con presupuesto escrito antes del encargo; los entregables pueden emitirse en inglés.",
    abEyebrow: "Sobre mí", abTitle: "Sobre mí",
    abFirmH: "El despacho — Wintell & Co",
    abFirmP1: "Wintell & Co es un despacho nacional de servicios integrales con sede en Shanghái, creado en 2023 mediante la fusión de Wintell y Gongcheng. Con casi 500 profesionales en 18 oficinas en todo el país y asociaciones con HFW (Reino Unido) y una firma de Singapur, ofrece servicios legales transfronterizos integrados.",
    abFirmP2: "El despacho destaca en derecho marítimo, resolución transfronteriza de disputas y arbitraje internacional, finanzas y seguros, propiedad intelectual y derecho corporativo y comercial. Sus casos han sido publicados en el Boletín del Tribunal Supremo Popular y reconocidos como casos típicos de la Iniciativa de la Franja y la Ruta. Es recomendado por Chambers and Partners, The Legal 500, ALB y China Business Law Journal, y ha sido galardonado como 'Despacho Nacional Excelente'.",
    abFirmP3: "La oficina de Wintell & Co en Shenzhen, establecida en 2023 en la Gran Bahía junto a Hong Kong, está vinculada al cinturón manufacturero y de comercio exterior del Delta del Río Perla, ofreciendo apoyo legal cercano y ágil a compradores internacionales.",
    abTeamH: "Aspectos destacados del equipo",
    tFeat1: "Servicio bilingüe (chino/inglés)",
    tFeat2: "Ubicación en la Gran Bahía, cerca de la cadena de suministro",
    tFeat3: "Entrega coordinada en 18 oficinas nacionales",
    tFeat4: "Red asociada: HFW y firma de Singapur",
    tFeat5: "Productos estandarizados · presupuestos transparentes · tarifas fijas",
    kName: "Kang Xuesong", kRole: "Socia, Wintell & Co (Shenzhen) · Líder de equipo",
    kEdu1: "Universidad Sun Yat-sen", kEdu1b: "Licenciatura en Derecho",
    kEdu2: "Universidad de Hong Kong", kEdu2b: "Posgrado en Finanzas y Gestión de Inversiones",
    kBio1: "Mi nombre es Kang Xuesong. Ejerzo en China desde 2014, en Wintell & Co (Shenzhen), donde dirijo el equipo de servicios legales para compradores extranjeros. Mi formación: licenciatura en Derecho por la Universidad Sun Yat-sen y posgrado en Finanzas y Gestión de Inversiones por la Universidad de Hong Kong, un perfil jurídico y financiero combinado. Atiendo desde hace años a clientes nacionales e internacionales en chino e inglés, con especial dedicación a los asuntos vinculados a Hong Kong y transfronterizos.",
    kBio2: "Conozco el Derecho chino, trabajo en dos idiomas, entiendo la práctica del comercio transfronterizo y llevo años asesorando a compradores extranjeros, lo que permite considerar juntos los requisitos del Derecho chino y su operativa de compra. Nuestros productos de servicio obtuvieron el 2.º premio (2023) y el 3.er premio (2026) del Concurso de Innovación de la Asociación de Abogados de Shenzhen; los servicios de este catálogo los lidero yo junto con los equipos de marítimo, cumplimiento comercial y propiedad intelectual del despacho.",
    kBadge1: "Despacho recomendado por Chambers / Legal 500", kBadge2: "Licencia PRC n.º 14403201411015550",
    feeEyebrow: "Honorarios", feeTitle: "Modelos de honorarios",
    feeSub: "Todos los presupuestos incluyen impuestos; viajes, notarización, traducción y costes de terceros se reembolsan a precio de coste.",
    fee1T: "Tarifa fija", fee1D: "Productos estandarizados con presupuesto escrito antes del encargo: claro y sin costes ocultos.",
    fee2T: "Facturación por horas", fee2D: "Para trabajos a medida como disputas y cumplimiento puntual, según el tiempo real invertido.",
    fee3T: "Retainer anual", fee3D: "Paquete anual de asesoría con respuesta prioritaria y tarifas preferentes.",
    ctaTitle: "Proteja sus compras en China", ctaSub: "Cuéntenos sus necesidades de compra y mercado objetivo; respondemos en un día laborable. Contacte al equipo de Kang Xuesong por WhatsApp o correo.",
    btnEmail: "Enviar correo",
    footBrand: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    footDesc: "Wintell & Co (Shenzhen). Servicios legales integrales para compradores internacionales. El contenido de este sitio es solo informativo y no constituye asesoramiento legal.",
    footNav: "Mapa del sitio", footContact: "Contacto",
    footCopy: "Kang Xuesong Team · Wintell & Co (Shenzhen)",
    footDisclaimer: "Este sitio y su contenido solo sirven como presentación de servicios y no constituyen asesoramiento legal; los derechos y obligaciones se rigen por el contrato firmado.",
    painEyebrow: "Su situación real",
    painTitle: "Ocho cosas que de verdad quitan el sueño a los compradores extranjeros",
    painSub: "Cada una corresponde a un bloque de servicios concreto: pulse una tarjeta para ir directamente.",
    painJump: "Ver el servicio relacionado",
    painMapLead: "Bloque de servicios correspondiente",
    advEyebrow: "Por qué yo",
    advTitle: "Cuatro razones para confiarme su asunto legal en China",
    advSub: "Derecho chino, servicio bilingüe, experiencia real en comercio transfronterizo y clientes como usted: esto define lo que puedo hacer por usted.",
    gapEyebrow: "Vías de servicio",
    gapTitle: "Qué cubre cada vía",
    gapSub: "Hasta dónde puede llegar un asunto de abastecimiento transfronterizo depende de la habilitación profesional y de las exigencias procesales chinas. A continuación, el alcance de las vías habituales y la parte que asumo yo.",
    gapCant: "Alcance de las vías habituales",
    gapCan: "Lo que asumo yo"
  },
  fr: {
    pageTitle: "Services Juridiques pour Acheteurs Internationaux en Chine | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Services juridiques transfrontaliers · Shenzhen, Chine",
    navServices: "Services", navAbout: "À propos", navFees: "Honoraires", navContact: "Contact",
    heroEyebrow: "Exercice du droit en Chine · Bilingue · Commerce transfrontalier",
    heroTitle1: "Vous achetez en Chine ?", heroTitle2: "Je suis votre avocat en Chine",
    heroSub: "Je m'appelle Kang Xuesong. J'exerce en Chine depuis 2014 et je dirige chez Wintell & Co (Shenzhen) l'équipe dédiée aux acheteurs étrangers. Je connais le droit chinois, je travaille en chinois et en anglais, et je comprends le fonctionnement réel du commerce transfrontalier : de la due diligence fournisseurs à la sécurité des paiements, en passant par la propriété intellectuelle, la conformité commerciale et le règlement des litiges, je protège votre activité sur le terrain en Chine.",
    heroEn: "康雪崧律师 · 中国执业律师 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "Voir les services",
    heroCardTag: "Pourquoi moi",
    why1: "Exercer en Chine : agir, plaider, saisir et exécuter sur le territoire chinois",
    why2: "Communication directe en chinois et en anglais, sans traducteur",
    why3: "Formation financière à l'Université de Hong Kong : une vraie compréhension du commerce et des chaînes d'approvisionnement",
    why4: "Expérience auprès d'acheteurs étrangers : due diligence avant paiement, recouvrement, dépôts de marque abusifs",
    why5: "Appuyé par les 18 bureaux nationaux de Wintell & Co et le réseau HFW (Royaume-Uni)",
    why6: "Produits standardisés · devis écrit avant mission · honoraires transparents",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Bureaux nationaux", tr2: "Professionnels", tr3: "Langues", tr4: "Bureau de Shenzhen depuis",
    cataEyebrow: "Catalogue", cataTitle: "Huit sections couvrant tout le processus d'achat", cataSub: "Un devis écrit est fourni avant toute mission ; les livrables peuvent être remis en anglais.",
    abEyebrow: "À propos de moi", abTitle: "À propos de moi",
    abFirmH: "Le cabinet — Wintell & Co",
    abFirmP1: "Wintell & Co est un cabinet national à service complet dont le siège est à Shanghai, créé en 2023 par la fusion de Wintell et Gongcheng. Avec près de 500 professionnels répartis dans 18 bureaux et des associations avec HFW (Royaume-Uni) et un cabinet singapourien, il fournit des services juridiques transfrontaliers intégrés.",
    abFirmP2: "Le cabinet est réputé en droit maritime, règlement transfrontalier des litiges et arbitrage international, finance et assurances, propriété intellectuelle et droit des affaires. Ses dossiers ont été publiés au Bulletin de la Cour suprême populaire et reconnus comme cas typiques de l'initiative « Ceinture et Route ». Il est recommandé par Chambers and Partners, The Legal 500, ALB et China Business Law Journal, et honoré du titre de « Cabinet national d'excellence ».",
    abFirmP3: "Le bureau de Shenzhen, créé en 2023 dans la Grande Baie à côté de Hong Kong, est étroitement lié au tissu manufacturier et au commerce extérieur du delta de la Rivière des Perles, offrant aux acheteurs étrangers un soutien juridique de proximité et réactif.",
    abTeamH: "Atouts de l'équipe",
    tFeat1: "Service bilingue (chinois/anglais)",
    tFeat2: "Localisation Grande Baie, proche de la chaîne d'approvisionnement",
    tFeat3: "Coordination sur 18 bureaux nationaux",
    tFeat4: "Réseau associé : HFW et un cabinet singapourien",
    tFeat5: "Produits standardisés · devis transparents · honoraires fixes",
    kName: "Kang Xuesong", kRole: "Associée, Wintell & Co (Shenzhen) · Cheffe d'équipe",
    kEdu1: "Université Sun Yat-sen", kEdu1b: "Licence en droit",
    kEdu2: "Université de Hong Kong", kEdu2b: "Master en Finance et Gestion d'Investissement",
    kBio1: "Je m'appelle Kang Xuesong. J'exerce en Chine depuis 2014, au sein de Wintell & Co (Shenzhen), où je dirige l'équipe de services juridiques destinée aux acheteurs étrangers. Ma formation : licence en droit de l'Université Sun Yat-sen et troisième cycle en finance et gestion d'investissement de l'Université de Hong Kong — un double profil juridique et financier. J'accompagne depuis des années des clients nationaux et internationaux en chinois et en anglais, avec une spécialisation sur les dossiers liés à Hong Kong et transfrontaliers.",
    kBio2: "Je connais le droit chinois, je travaille en deux langues, je maîtrise la pratique du commerce transfrontalier et j'accompagne depuis longtemps des acheteurs étrangers , ce qui permet d'examiner ensemble les exigences du droit chinois et votre organisation d'achat. Nos produits de service ont obtenu le 2e prix (2023) et le 3e prix (2026) du Concours d'Innovation de l'Association des Avocats de Shenzhen ; les services de ce catalogue sont pilotés par moi, avec les équipes maritime, conformité commerciale et PI du cabinet.",
    kBadge1: "Cabinet recommandé Chambers / Legal 500", kBadge2: "Licence PRC n° 14403201411015550",
    feeEyebrow: "Honoraires", feeTitle: "Modèles d'honoraires",
    feeSub: "Tous les devis sont TTC ; frais de déplacement, notarisation, traduction et tiers remboursés au coût.",
    fee1T: "Honoraires fixes", fee1D: "Produits standardisés avec devis écrit avant mission — clairs, sans frais cachés.",
    fee2T: "Facturation horaire", fee2D: "Pour les missions sur mesure (litiges, conformité ponctuelle), au temps réel passé.",
    fee3T: "Contrat annuel (retainer)", fee3D: "Forfait annuel de conseil avec réponse prioritaire et tarifs préférentiels.",
    ctaTitle: "Protégez vos achats en Chine", ctaSub: "Dites-nous vos besoins et votre marché cible ; réponse sous un jour ouvré. Contactez l'équipe Kang Xuesong par WhatsApp ou e-mail.",
    btnEmail: "Envoyer un e-mail",
    footBrand: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    footDesc: "Wintell & Co (Shenzhen). Services juridiques complets pour acheteurs internationaux. Le contenu de ce site est informatif et ne constitue pas un avis juridique.",
    footNav: "Plan du site", footContact: "Contact",
    footCopy: "Kang Xuesong Team · Wintell & Co (Shenzhen)",
    footDisclaimer: "Ce site et son contenu sont uniquement présentés à titre informatif et ne constituent pas un avis juridique ; les droits et obligations sont régis par le contrat signé.",
    painEyebrow: "Votre situation réelle",
    painTitle: "Huit choses qui empêchent vraiment les acheteurs étrangers de dormir",
    painSub: "Chacune correspond à un bloc de services précis : cliquez sur une carte pour y accéder.",
    painJump: "Voir le service concerné",
    painMapLead: "Bloc de services concerné",
    advEyebrow: "Pourquoi moi",
    advTitle: "Quatre raisons de me confier vos affaires juridiques en Chine",
    advSub: "Droit chinois, prestation bilingue, expérience concrète du commerce transfrontalier et clients comme vous : voilà ce que je peux faire pour vous.",
    gapEyebrow: "Les voies possibles",
    gapTitle: "Ce que couvre chaque voie",
    gapSub: "Jusqu'où peut aller un dossier d'achat transfrontalier dépend de l'inscription au barreau et des exigences procédurales chinoises. Voici le périmètre des voies habituelles, et la part que j'assume.",
    gapCant: "Périmètre des voies habituelles",
    gapCan: "Ce que j'assume"
  },
  de: {
    pageTitle: "Rechtsdienstleistungen für internationale Käufer in China | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Grenzüberschreitende Rechtsdienstleistungen · Shenzhen, China",
    navServices: "Leistungen", navAbout: "Über mich", navFees: "Honorare", navContact: "Kontakt",
    heroEyebrow: "Anwaltliche Tätigkeit in China · Zweisprachig · Grenzüberschreitender Handel",
    heroTitle1: "Sie kaufen in China ein?", heroTitle2: "Ich bin Ihr Anwalt in China",
    heroSub: "Mein Name ist Kang Xuesong. Ich bin seit 2014 in China anwaltlich tätig und leite bei Wintell & Co (Shenzhen) das Team für ausländische Einkäufer. Ich kenne das chinesische Recht, arbeite auf Chinesisch und Englisch und verstehe, wie grenzüberschreitender Handel tatsächlich abläuft: von der Lieferantenprüfung über Vertragsprüfung und Zahlungssicherheit bis hin zu geistigem Eigentum, Handels-Compliance und Streitbeilegung schütze ich Ihr Geschäft vor Ort in China.",
    heroEn: "康雪崧律师 · 中国执业律师 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "Leistungen ansehen",
    heroCardTag: "Warum ich",
    why1: "In China zugelassen: klagen, verhandeln, sichern und vollstrecken im Inland",
    why2: "Direkte Kommunikation auf Chinesisch und Englisch — ohne Übersetzer",
    why3: "Finanzausbildung an der Universität Hongkong: Handelspraxis und Lieferketten sind mir vertraut",
    why4: "Erfahrung mit ausländischen Einkäufern: Due Diligence vor Zahlung, Forderungseinzug, Markenpiraterie",
    why5: "Gestützt auf 18 nationale Büros von Wintell & Co und das HFW-Netzwerk (UK)",
    why6: "Standardisierte Produkte · schriftliches Angebot vor Beauftragung · transparente Honorare",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Nationale Büros", tr2: "Fachleute", tr3: "Sprachen", tr4: "Büro Shenzhen seit",
    cataEyebrow: "Leistungskatalog", cataTitle: "Acht Bereiche für den gesamten Einkaufsprozess", cataSub: "Für jede Leistung erhalten Sie vor Beauftragung ein schriftliches Angebot; Ergebnisse können auf Englisch geliefert werden.",
    abEyebrow: "Über mich", abTitle: "Über mich",
    abFirmH: "Die Kanzlei — Wintell & Co",
    abFirmP1: "Wintell & Co ist eine nationale Full-Service-Kanzlei mit Hauptsitz in Shanghai, gegründet 2023 durch die Fusion von Wintell und Gongcheng. Mit fast 500 Fachleuten in 18 Büros und Partnerschaften mit HFW (UK) und einer singapurischen Kanzlei bietet sie integrierte grenzüberschreitende Rechtsdienstleistungen.",
    abFirmP2: "Die Kanzlei ist bekannt für Seehandelsrecht, grenzüberschreitende Streitbeilegung und internationale Schiedsgerichtsbarkeit, Finanzen & Versicherungen, IP sowie Gesellschafts- und Handelsrecht. Ihre Fälle wurden im Amtsblatt des Obersten Volksgerichts veröffentlicht und als typische Fälle der Belt-and-Road-Initiative anerkannt. Sie wird von Chambers and Partners, The Legal 500, ALB und China Business Law Journal empfohlen und als „Nationale Exzellenz-Kanzlei“ ausgezeichnet.",
    abFirmP3: "Das 2023 gegründete Büro Shenzhen liegt im Kern der Greater Bay Area neben Hongkong, eng verbunden mit dem Fertigungs- und Außenhandelsgürtel des Perlflussdeltas – für internationale Käufer ein direkter, reaktionsschneller Rechtsstandort.",
    abTeamH: "Team-Highlights",
    tFeat1: "Zweisprachiger Service (Chinesisch/Englisch)",
    tFeat2: "Standort Greater Bay Area, nahe der Lieferkette",
    tFeat3: "Koordinierte Leistung über 18 nationale Büros",
    tFeat4: "Assoziierte Partner: HFW und singapurische Kanzlei",
    tFeat5: "Standardisierte Produkte · transparente Angebote · Festpreise",
    kName: "Kang Xuesong", kRole: "Partnerin, Wintell & Co (Shenzhen) · Teamleiterin",
    kEdu1: "Sun-Yat-sen-Universität", kEdu1b: "LL.B., Rechtswissenschaften",
    kEdu2: "Universität Hongkong", kEdu2b: "Postgraduales Studium Finanzen & Investmentmanagement",
    kBio1: "Mein Name ist Kang Xuesong. Ich bin seit 2014 in China anwaltlich tätig, bei Wintell & Co (Shenzhen), wo ich das Team für Rechtsdienstleistungen für ausländische Einkäufer leite. Meine Ausbildung: LL.B. der Sun-Yat-sen-Universität und Postgraduiertenabschluss in Finanz- und Investmentmanagement der Universität Hongkong — ein kombiniertes juristisches und finanzielles Profil. Seit Jahren betreue ich nationale und internationale Mandanten auf Chinesisch und Englisch, mit Schwerpunkt auf Hongkong-bezogenen und grenzüberschreitenden Mandaten.",
    kBio2: "Ich kenne das chinesische Recht, arbeite zweisprachig, verstehe die Praxis des grenzüberschreitenden Handels und habe lange ausländische Einkäufer betreut, sodass chinesische Anforderungen und Ihre Beschaffungsabläufe zusammen betrachtet werden. Unsere Serviceprodukte gewannen den 2. Preis (2023) und 3. Preis (2026) des Innovationswettbewerbs der Shenzhener Anwaltsvereinigung; die Leistungen dieses Katalogs leite ich gemeinsam mit den Teams für Seehandel, Handels-Compliance und IP der Kanzlei.",
    kBadge1: "Von Chambers / Legal 500 empfohlene Kanzlei", kBadge2: "PRC-Zulassung Nr. 14403201411015550",
    feeEyebrow: "Honorare", feeTitle: "Honorarmodelle",
    feeSub: "Alle Angebote inklusive Steuern; Reise-, Notar-, Übersetzungs- und Drittkosten werden zum Selbstkostenpreis erstattet.",
    fee1T: "Festpreis", fee1D: "Standardisierte Produkte mit schriftlichem Angebot vor Auftrag – klar und ohne versteckte Kosten.",
    fee2T: "Zeithonorar", fee2D: "Für individuelle Mandate wie Streitbeilegung und Einzel-Compliance, abgerechnet nach tatsächlichem Aufwand.",
    fee3T: "Jahresretainer", fee3D: "Gebündeltes Jahresberatungspaket mit vorrangiger Antwort und Vorzugskonditionen.",
    ctaTitle: "Schützen Sie Ihren Einkauf in China", ctaSub: "Teilen Sie uns Ihre Einkaufsbedürfnisse und Zielmärkte mit – Antwort innerhalb eines Werktags. Kontaktieren Sie das Team Kang Xuesong per WhatsApp oder E-Mail.",
    btnEmail: "E-Mail senden",
    footBrand: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    footDesc: "Wintell & Co (Shenzhen). Umfassende Rechtsdienstleistungen für internationale Käufer. Der Inhalt dieser Website dient nur der allgemeinen Information und stellt keine Rechtsberatung dar.",
    footNav: "Sitemap", footContact: "Kontakt",
    footCopy: "Kang Xuesong Team · Wintell & Co (Shenzhen)",
    footDisclaimer: "Diese Website und ihre Inhalte dienen nur der Leistungsvorstellung und stellen keine Rechtsberatung dar; Rechte und Pflichten richten sich nach dem unterzeichneten Vertrag.",
    painEyebrow: "Ihre reale Lage",
    painTitle: "Acht Dinge, die ausländischen Einkäufern wirklich den Schlaf rauben",
    painSub: "Jeder Punkt entspricht einem konkreten Leistungsblock — Karte anklicken und direkt springen.",
    painJump: "Passende Leistung ansehen",
    painMapLead: "Zugehöriger Leistungsblock",
    advEyebrow: "Warum ich",
    advTitle: "Vier Gründe, mir Ihre China-Rechtsangelegenheiten anzuvertrauen",
    advSub: "Chinesisches Recht, zweisprachige Leistung, praktische Erfahrung im grenzüberschreitenden Handel und Kunden wie Sie — das bestimmt, was ich für Sie tun kann.",
    gapEyebrow: "Wege der Mandatsführung",
    gapTitle: "Was jeder Weg abdeckt",
    gapSub: "Wie weit ein grenzüberschreitender Beschaffungsfall kommt, hängt von der Zulassung und den chinesischen Verfahrensvorgaben ab. Hier stehen der Umfang der üblichen Wege und der Teil, den ich übernehme.",
    gapCant: "Umfang der üblichen Wege",
    gapCan: "Was ich übernehme"
  },
  ar: {
    pageTitle: "خدمات قانونية للمشترين الأجانب في الصين | كانغ شيويه سونغ · وينتل آند كو شنتشن",
    brandName: "فريق كانغ شيويه سونغ<b> · وينتل آند كو</b>",
    brandSub: "خدمات قانونية عابرة للحدود · شنتشن، الصين",
    navServices: "الخدمات", navAbout: "من أنا", navFees: "الأتعاب", navContact: "اتصل بنا",
    heroEyebrow: "محامٍ مرخّص في الصين · ثنائي اللغة · التجارة العابرة للحدود",
    heroTitle1: "هل تشتري من الصين؟", heroTitle2: "أنا محاميتك في الصين",
    heroSub: "أنا كانغ شيوه سونغ، محامٍ مرخّص في الصين وشريك في وينتل آند كو (شنتشن). أعرف القانون الصيني، وأعمل بالصينية والإنجليزية، وأفهم كيف تعمل التجارة العابرة للحدود فعليًا. أخدم المشترين الأجانب منذ سنوات — من العناية الواجبة بالموردين ومراجعة العقود وأمان المدفوعات إلى الملكية الفكرية والامتثال التجاري وحل النزاعات — لحماية أعمالك على الأرض في الصين.",
    heroEn: "康雪崧律师 · 中国执业律师 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "تصفح الخدمات",
    heroCardTag: "لماذا أنا",
    why1: "محامية مرخّصة في الصين: رفع الدعوى والمرافعة والحجز والتنفيذ داخل الصين",
    why2: "تواصل مباشر ثنائي اللغة دون وسيط مترجم",
    why3: "خلفية مالية من جامعة هونغ كونغ: يفهم التجارة وسلسلة التوريد",
    why4: "خدم مشترين أجانب: الفحص قبل الدفع، وتحصيل المدفوعات، وتسجيل العلامات بسوء نية",
    why5: "بدعم 18 مكتبًا وطنيًا لوينتل آند كو وشبكة HFW (بريطانيا)",
    why6: "منتجات موحدة · عرض سعر مكتوب قبل التعاقد · أتعاب شفافة",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "مكتباً وطنياً", tr2: "متخصصاً", tr3: "لغتان", tr4: "مكتب شنتشن منذ",
    cataEyebrow: "كتالوج الخدمات", cataTitle: "ثمانية أقسام تغطي عملية الشراء كاملة", cataSub: "يُقدَّم عرض أسعار كتابي قبل التعاقد لكل خدمة؛ ويمكن توفير المخرجات باللغة الإنجليزية.",
    abEyebrow: "من أنا", abTitle: "من أنا",
    abFirmH: "المكتب — وينتل آند كو",
    abFirmP1: "وينتل آند كو مكتب محاماة وطني شامل يقع مقره الرئيسي في شنغهاي، تأسس عام 2023 من اندماج وينتل وغونغتشنغ. وبفضل ما يقارب 500 متخصص في 18 مكتباً وطنياً، وشراكاته مع HFW (بريطانيا) ومكتب سنغافوري، يقدم خدمات قانونية متكاملة عابرة للحدود.",
    abFirmP2: "يشتهر المكتب بالقانون البحري، وحل النزاعات التجارية العابرة للحدود والتحكيم الدولي، والتمويل والتأمين، والملكية الفكرية، وقانون الشركات والتجارة. نُشرت قضاياه في نشرة المحكمة الشعبية العليا وأُدرجت ضمن القضايا النموذجية لمبادرة الحزام والطريق. وهو موصى به من Chambers and Partners وThe Legal 500 وALB وChina Business Law Journal، وحاصل على لقب «مكتب المحاماة الوطني المتميز».",
    abFirmP3: "تأسس مكتب شنتشن عام 2023 في قلب منطقة الخليج الكبرى بجوار هونغ كونغ، ويرتبط ارتباطاً وثيقاً بحزام التصنيع والتجارة الخارجية في دلتا نهر اللؤلؤ، مما يوفر للمشترين الأجانب دعماً قانونياً قريباً وسريع الاستجابة.",
    abTeamH: "أبرز مزايا الفريق",
    tFeat1: "خدمة ثنائية اللغة (صينية/إنجليزية)",
    tFeat2: "موقع في منطقة الخليج الكبرى قريب من سلسلة التوريد",
    tFeat3: "تنسيق التسليم عبر 18 مكتباً وطنياً",
    tFeat4: "شبكة منتسبة: HFW ومكتب سنغافوري",
    tFeat5: "منتجات موحدة · عروض شفافة · أتعاب ثابتة",
    kName: "كانغ شيويه سونغ", kRole: "شريكة، وينتل آند كو (شنتشن) · قائدة الفريق",
    kEdu1: "جامعة صن يات سين", kEdu1b: "إجازة في القانون",
    kEdu2: "جامعة هونغ كونغ", kEdu2b: "دراسات عليا في التمويل وإدارة الاستثمار",
    kBio1: "اسمي كانغ شيويه سونغ. أعمل بالمحاماة في الصين منذ 2014، في مكتب وينتل آند كو (شنتشن)، حيث أدير فريق الخدمات القانونية المخصص للمشترين الأجانب. تكويني: إجازة في القانون من جامعة صن يات سين، ودراسات عليا في التمويل وإدارة الاستثمار من جامعة هونغ كونغ — مزيج من التأهيل القانوني والمالي. أخدم منذ سنوات عملاء محليين ودوليين بالصينية والإنجليزية، مع تركيز على الملفات المتعلقة بهونغ كونغ والملفات العابرة للحدود.",
    kBio2: "أعرف القانون الصيني، وأعمل بلغتين، وأفهم ممارسة التجارة العابرة للحدود، وأخدم المشترين الأجانب منذ سنوات، بما يسمح بمراعاة متطلبات القانون الصيني وترتيبات شرائك معًا. حازت منتجاتنا الخدمية على الجائزة الثانية (2023) والثالثة (2026) في مسابقة الابتكار لجمعية محامي شنتشن؛ وأتولّى قيادة خدمات هذا الكتالوج بالتعاون مع فرق المكتب في القانون البحري والامتثال التجاري والملكية الفكرية.",
    kBadge1: "مكتب موصى به من Chambers / Legal 500", kBadge2: "رقم الترخيص الصيني 14403201411015550",
    feeEyebrow: "الأتعاب", feeTitle: "نماذج الأتعاب",
    feeSub: "جميع العروض شاملة الضرائب؛ وتُسدَّد تكاليف السفر والتوثيق والترجمة والأطراف الثالثة بالتكلفة الفعلية.",
    fee1T: "أتعاب ثابتة", fee1D: "منتجات موحدة مع عرض أسعار كتابي قبل التعاقد — واضحة وبلا تكاليف خفية.",
    fee2T: "الفوترة بالساعة", fee2D: "للمهام المخصصة مثل حل النزاعات والامتثال الخاص، تُحسب حسب الوقت الفعلي.",
    fee3T: "عقد سنوي", fee3D: "باقة استشارات سنوية شاملة مع استجابة ذات أولوية وأسعار تفضيلية.",
    ctaTitle: "احمِ مشترياتك في الصين", ctaSub: "أخبرنا باحتياجاتك الشرائية وأسواقك المستهدفة — نرد خلال يوم عمل واحد. تواصل مع فريق كانغ شيويه سونغ عبر واتساب أو البريد الإلكتروني.",
    btnEmail: "إرسال بريد",
    footBrand: "فريق كانغ شيويه سونغ<b> · وينتل آند كو</b>",
    footDesc: "وينتل آند كو (شنتشن). خدمات قانونية شاملة للمشترين الأجانب من الصين. محتوى هذا الموقع لأغراض إعلامية عامة فقط ولا يشكل استشارة قانونية.",
    footNav: "خريطة الموقع", footContact: "اتصل بنا",
    footCopy: "فريق كانغ شيويه سونغ · وينتل آند كو (شنتشن)",
    footDisclaimer: "هذا الموقع ومحتواه لأغراض التعريف بالخدمات فقط ولا يشكلان استشارة قانونية؛ وتُحدَّد الحقوق والالتزامات بموجب العقد الموقع.",
    painEyebrow: "وضعك الحقيقي",
    painTitle: "ثمانية أمور تحرم المشترين الأجانب فعلاً من النوم",
    painSub: "كل بند يقابل قسم خدمات محددًا — اضغط البطاقة للانتقال إليه مباشرة.",
    painJump: "اطّلع على الخدمة المرتبطة",
    painMapLead: "قسم الخدمة المقابل",
    advEyebrow: "لماذا أنا",
    advTitle: "أربعة أسباب تجعلك تأتمنني على شؤونك القانونية في الصين",
    advSub: "القانون الصيني، وخدمة ثنائية اللغة، وخبرة عملية في التجارة العابرة للحدود، وعملاء مثلك — هذا ما يحدد ما أستطيع تقديمه لك.",
    gapEyebrow: "مسارات الخدمة",
    gapTitle: "ما يغطيه كل مسار",
    gapSub: "إلى أي مدى يمكن دفع مسألة شراء عابرة للحدود يعتمد على الترخيص ومتطلبات الإجراءات الصينية. وفيما يلي نطاق المسارات المعتادة، والجزء الذي أتولاه أنا.",
    gapCant: "نطاق المسارات المعتادة",
    gapCan: "ما أتولاه أنا"
  }
};

/* ---------- 服务目录数据 ----------
   每个分类: id, no(中文数字/罗马), title {六语}, sub {六语}, items[]
   每项: no, name(服务名) {六语}, en(英文名=name.en), scope {六语}, del {六语}, fee {六语}, feeType
   feeType: 'fixed' | 'time' | 'mix' | 'semi' 用于样式
*/
const FEES_LABEL = {
  zh: { fixed: "固定费用", time: "计时", mix: "固定+计时", semi: "计时/半风险", stage: "计时+阶段固定", quote: "按案报价", retainer: "年度固定" },
  en: { fixed: "Fixed fee", time: "Hourly", mix: "Fixed + hourly", semi: "Hourly / semi-contingent", stage: "Hourly + stage fixed", quote: "Case-by-case", retainer: "Annual retainer" },
  es: { fixed: "Tarifa fija", time: "Por horas", mix: "Fija + horas", semi: "Horas / semirriesgo", stage: "Horas + fases fijas", quote: "Según el caso", retainer: "Anual" },
  fr: { fixed: "Forfait", time: "Horaire", mix: "Forfait + horaire", semi: "Horaire / semi-condition", stage: "Horaire + phases forfaitaires", quote: "Au cas par cas", retainer: "Annuel" },
  de: { fixed: "Festpreis", time: "Stundensatz", mix: "Fest + Stunden", semi: "Stunden / Semi-Erfolg", stage: "Stunden + Phasenpauschale", quote: "Fallabhängig", retainer: "Jahresretainer" },
  ar: { fixed: "أتعاب ثابتة", time: "بالساعة", mix: "ثابتة + بالساعة", semi: "بالساعة / شبه طوارئ", stage: "بالساعة + مراحل ثابتة", quote: "حسب الحالة", retainer: "سنوي" }
};

const CATALOGUE = [
  {
    id: "pre", noZh: "一", noEn: "01",
    title: { zh: "交易前服务", en: "Pre-Transaction", es: "Pre-transacción", fr: "Pré-transaction", de: "Vor der Transaktion", ar: "ما قبل التعامل" },
    sub: { zh: "PRE-TRANSACTION", en: "PRE-TRANSACTION", es: "PRE-TRANSACCIÓN", fr: "PRÉ-TRANSACTION", de: "VOR DER TRANSAKTION", ar: "قبل التعامل" },
    items: [
      { no: "1.1", name: { zh: "供应商标准背景调查", en: "Supplier Standard Due Diligence", es: "Debida diligencia estándar del proveedor", fr: "Due diligence standard du fournisseur", de: "Standard-Due-Diligence des Lieferanten", ar: "العناية الواجبة القياسية للمورد" },
        scope: { zh: "工商登记档案、涉诉与被执行记录、失信名单、经营异常、行政处罚、股权结构核查", en: "Business registration records, litigation & enforcement history, dishonesty list, operational irregularities, administrative penalties, and shareholding structure review", es: "Registro mercantil, litigios y ejecución, listas de morosos, irregularidades, sanciones y estructura accionarial", fr: "Registre commercial, litiges et exécution, listes des mauvais payeurs, irrégularités, sanctions et structure actionnariale", de: "Handelsregister, Prozess- und Vollstreckungshistorie, Schuldnerliste, Unregelmäßigkeiten, Sanktionen und Aktionärsstruktur", ar: "سجلات التسجيل التجاري، والتقاضي والتنفيذ، وقوائم التعثر، والمخالفات، والعقوبات الإدارية، وهيكل الملكية" },
        del: { zh: "中英文尽调报告 · 5 个工作日", en: "Bilingual DD report · 5 working days", es: "Informe bilingüe · 5 días hábiles", fr: "Rapport bilingue · 5 jours ouvrés", de: "Zweisprachiger Bericht · 5 Werktage", ar: "تقرير ثنائي اللغة · 5 أيام عمل" },
        fee: "fixed" },
      { no: "1.2", name: { zh: "供应商深度尽调（含实地核验）", en: "Enhanced Due Diligence (with site visit)", es: "Debida diligencia ampliada (con visita)", fr: "Due diligence renforcée (avec visite)", de: "Erweiterte Due Diligence (mit Standortbesuch)", ar: "عناية واجبة موسعة (مع زيارة ميدانية)" },
        scope: { zh: "标准尽调全部内容＋实地验厂陪同、经营场所与产能核验、关联公司穿透、实控人背景调查", en: "All standard DD items plus accompanied factory visits, verification of premises & capacity, look-through of affiliated companies, and background check on the ultimate controller", es: "Todo lo estándar + visitas a fábrica, verificación de instalaciones y capacidad, filiales y antecedentes del controlador", fr: "Tout le standard + visites d'usine accompagnées, vérification des locaux et capacités, transparence des sociétés liées et historique du contrôleur", de: "Alle Standardpunkte plus begleitete Werksbesuche, Prüfung von Räumlichkeiten & Kapazität, Durchschau verbundener Firmen und Hintergrund des Kontrollinhabers", ar: "جميع بنود المعيار + زيارات ميدانية للمصنع، والتحقق من المنشآت والطاقة، واختراق الشركات المرتبطة، والتحقق من خلفية المالك الفعلي" },
        del: { zh: "中英文尽调报告＋实地照片/影像 · 10–15 个工作日", en: "Bilingual DD report + site photos/video · 10–15 working days", es: "Informe + fotos/video · 10–15 días hábiles", fr: "Rapport + photos/vidéo · 10–15 jours ouvrés", de: "Bericht + Fotos/Video · 10–15 Werktage", ar: "تقرير + صور/فيديو ميداني · 10–15 يوم عمل" },
        fee: "fixed" },
      { no: "1.3", name: { zh: "采购合同起草与审查", en: "Purchase Contract Drafting & Review", es: "Redacción y revisión del contrato de compra", fr: "Rédaction et révision du contrat d'achat", de: "Entwurf und Prüfung des Kaufvertrags", ar: "صياغة ومراجعة عقد الشراء" },
        scope: { zh: "中英双语采购合同；质量标准与验收、付款条件、违约金、知识产权归属、贸易术语、法律适用与争议解决条款设计", en: "Bilingual purchase contracts; drafting of quality standards & acceptance, payment terms, liquidated damages, IP ownership, trade terms, governing law and dispute resolution clauses", es: "Contrato bilingüe; calidad y aceptación, pagos, penalidades, propiedad intelectual, Incoterms, ley aplicable y arbitraje", fr: "Contrat bilingue ; normes de qualité et réception, paiement, pénalités, propriété intellectuelle, Incoterms, loi applicable et arbitrage", de: "Zweisprachiger Vertrag; Qualitätsstandards & Abnahme, Zahlungsbedingungen, Vertragsstrafen, IP-Inhaberschaft, Incoterms, anwendbares Recht und Streitbeilegung", ar: "عقد شراء ثنائي اللغة؛ معايير الجودة والقبول، وشروط الدفع، والتعويضات، وملكية الملكية الفكرية، والشروط التجارية، والقانون الواجب التطبيق، وتسوية النزاعات" },
        del: { zh: "中英双语合同＋条款说明备忘录 · 3–5 个工作日", en: "Bilingual contract + clause memo · 3–5 working days", es: "Contrato + memorando · 3–5 días hábiles", fr: "Contrat + mémorandum · 3–5 jours ouvrés", de: "Vertrag + Klausel-Memo · 3–5 Werktage", ar: "عقد ثنائي اللغة + مذكرة شرح · 3–5 أيام عمل" },
        fee: "fixed" },
      { no: "1.4", name: { zh: "样品与质量基准法律安排", en: "Sample & Quality Benchmark Arrangement", es: "Acuerdo sobre muestras y referencias de calidad", fr: "Accord sur échantillons et références qualité", de: "Vereinbarung zu Mustern & Qualitätsmaßstab", ar: "ترتيبات العينات ومعايير الجودة" },
        scope: { zh: "样品确认、封样安排、质量标准书面化与证据固定方案", en: "Sample confirmation, sealed-sample arrangements, written quality standards and evidence-preservation plan", es: "Confirmación de muestras, muestras selladas, estándares escritos y preservación de pruebas", fr: "Confirmation d'échantillons, échantillons scellés, standards écrits et conservation des preuves", de: "Musterbestätigung, versiegelte Muster, schriftliche Qualitätsstandards und Beweissicherung", ar: "تأكيد العينات، وترتيبات الختم، وتوثيق معايير الجودة، وخطة حفظ الأدلة" },
        del: { zh: "封样协议/质量确认文件 · 2–3 个工作日", en: "Sealed-sample / quality confirmation document · 2–3 working days", es: "Documento de muestras/calidad · 2–3 días hábiles", fr: "Document échantillons/qualité · 2–3 jours ouvrés", de: "Dokument zu Mustern/Qualität · 2–3 Werktage", ar: "وثيقة ختم العينات/تأكيد الجودة · 2–3 أيام عمل" },
        fee: "fixed" }
    ]
  },
  {
    id: "perf", noZh: "二", noEn: "02",
    title: { zh: "履约与货款安全保障", en: "Performance & Payment Security", es: "Cumplimiento y seguridad de pago", fr: "Exécution et sécurité des paiements", de: "Erfüllung & Zahlungssicherheit", ar: "أداء الالتزام وأمان المدفوعات" },
    sub: { zh: "PERFORMANCE & PAYMENT SECURITY", en: "PERFORMANCE & PAYMENT SECURITY", es: "CUMPLIMIENTO Y SEGURIDAD DE PAGO", fr: "EXÉCUTION ET SÉCURITÉ DES PAIEMENTS", de: "ERFÜLLUNG & ZAHLUNGSSICHERHEIT", ar: "أداء الالتزام وأمان المدفوعات" },
    items: [
      { no: "2.1", name: { zh: "付款与信用证条款审核", en: "Payment & L/C Terms Review", es: "Revisión de pagos y cartas de crédito", fr: "Révision des conditions de paiement et L/C", de: "Prüfung von Zahlungs- und L/C-Bedingungen", ar: "مراجعة شروط الدفع وخطابات الاعتماد" },
        scope: { zh: "T/T、D/P、信用证条款审核，付款节点与单据要求设计", en: "Review of T/T, D/P and L/C terms; design of payment milestones and document requirements", es: "Revisión de T/T, D/P y L/C; diseño de hitos y requisitos documentales", fr: "Révision T/T, D/P, L/C ; conception des échéances et exigences documentaires", de: "Prüfung von T/T, D/P und L/C; Gestaltung von Zahlungsmeilensteinen und Dokumentanforderungen", ar: "مراجعة شروط T/T وD/P وخطابات الاعتماد، وتصميم مراحل الدفع ومتطلبات المستندات" },
        del: { zh: "审核意见＋修改建议 · 2–3 个工作日", en: "Review opinion + recommendations · 2–3 working days", es: "Opinión + recomendaciones · 2–3 días hábiles", fr: "Avis + recommandations · 2–3 jours ouvrés", de: "Prüfvermerk + Empfehlungen · 2–3 Werktage", ar: "رأي + توصيات · 2–3 أيام عمل" },
        fee: "fixed" },
      { no: "2.2", name: { zh: "单证与履约文件审核", en: "Shipping Document Review", es: "Revisión de documentos de embarque", fr: "Révision des documents d'expédition", de: "Prüfung der Versanddokumente", ar: "مراجعة مستندات الشحن" },
        scope: { zh: "提单、报关单、原产地证、检验证书等单证的法律审核", en: "Legal review of bills of lading, customs declarations, certificates of origin, inspection certificates and related documents", es: "Revisión de BL, declaraciones aduaneras, certificados de origen e inspección", fr: "Révision des connaissements, déclarations en douane, certificats d'origine et d'inspection", de: "Prüfung von Konnossementen, Zollanmeldungen, Ursprungs- und Inspektionszertifikaten", ar: "المراجعة القانونية لسندات الشحن والإقرارات الجمركية وشهادات المنشأ والفحص" },
        del: { zh: "审核意见 · 2 个工作日", en: "Review opinion · 2 working days", es: "Opinión · 2 días hábiles", fr: "Avis · 2 jours ouvrés", de: "Prüfvermerk · 2 Werktage", ar: "رأي · يوما عمل" },
        fee: "fixed" },
      { no: "2.3", name: { zh: "质量争议与索赔代理", en: "Quality Dispute & Claims", es: "Disputas de calidad y reclamaciones", fr: "Litiges qualité et réclamations", de: "Qualitätsstreitigkeiten & Ansprüche", ar: "نزاعات الجودة والمطالبات" },
        scope: { zh: "质量索赔策略、第三方检验对接、证据固定、谈判索赔", en: "Claims strategy, liaison with third-party inspection, evidence preservation, negotiation and claims", es: "Estrategia, inspección de terceros, pruebas y negociación", fr: "Stratégie, inspection tierce, preuves et négociation", de: "Anspruchsstrategie, Drittprüfung, Beweissicherung, Verhandlung", ar: "استراتيجية المطالبة، والتنسيق مع جهات الفحص الخارجية، وحفظ الأدلة، والتفاوض" },
        del: { zh: "索赔方案＋代理谈判 · 按阶段报价", en: "Claims plan + negotiation · staged quote", es: "Plan + negociación · por fases", fr: "Plan + négociation · par phases", de: "Anspruchsplan + Verhandlung · nach Phasen", ar: "خطة مطالبة + تفاوض · حسب المراحل" },
        fee: "semi" },
      { no: "2.4", name: { zh: "货款催收与和解谈判", en: "Debt Collection & Settlement", es: "Cobro de deudas y acuerdos", fr: "Recouvrement et transaction", de: "Forderungseinzug & Vergleich", ar: "تحصيل المستحقات والتفاوض للتسوية" },
        scope: { zh: "中英文律师函、还款谈判、和解协议起草", en: "Bilingual demand letters, repayment negotiation, drafting of settlement agreements", es: "Cartas de demanda, negociación y acuerdos de pago", fr: "Mises en demeure bilingues, négociation et accords", de: "Zweisprachige Mahnschreiben, Verhandlung und Vergleichsvereinbarungen", ar: "خطابات إنذار ثنائية اللغة، والتفاوض على السداد، وصياغة اتفاقيات التسوية" },
        del: { zh: "律师函 48 小时内；谈判按进度", en: "Demand letter within 48h; negotiation per progress", es: "Carta en 48h; negociación según avance", fr: "Mise en demeure sous 48h ; négociation au fil de l'eau", de: "Mahnschreiben binnen 48h; Verhandlung nach Fortschritt", ar: "خطاب إنذار خلال 48 ساعة؛ التفاوض حسب التقدم" },
        fee: "time" }
    ]
  },
  {
    id: "ip", noZh: "三", noEn: "03",
    title: { zh: "知识产权保护", en: "Intellectual Property Protection", es: "Protección de la propiedad intelectual", fr: "Protection de la propriété intellectuelle", de: "Schutz geistigen Eigentums", ar: "حماية الملكية الفكرية" },
    sub: { zh: "INTELLECTUAL PROPERTY", en: "INTELLECTUAL PROPERTY", es: "PROPIEDAD INTELECTUAL", fr: "PROPRIÉTÉ INTELLECTUELLE", de: "GEISTIGES EIGENTUM", ar: "الملكية الفكرية" },
    items: [
      { no: "3.1", name: { zh: "商标布局与注册申请", en: "Trademark Registration", es: "Registro de marcas", fr: "Enregistrement de marques", de: "Markenregistrierung", ar: "تسجيل العلامات التجارية" },
        scope: { zh: "中国商标检索、注册申请、类别规划、马德里国际注册", en: "China trademark search, filing, class strategy and Madrid international registration", es: "Búsqueda, solicitud, plan de clases y registro internacional de Madrid", fr: "Recherche, dépôt, stratégie de classes et enregistrement international de Madrid", de: "China-Markenrecherche, Anmeldung, Klassenstrategie und internationale Madrid-Registrierung", ar: "الفحص والتسجيل الصيني للعلامات، وتخطيط الفئات، والتسجيل الدولي لمدريد" },
        del: { zh: "申请文件＋受理通知跟进 · 官方时限内", en: "Filing documents + follow-up · within official deadlines", es: "Documentos + seguimiento · plazos oficiales", fr: "Dépôt + suivi · délais officiels", de: "Unterlagen + Verfolgung · offizielle Fristen", ar: "مستندات الطلب + متابعة · ضمن المواعيد الرسمية" },
        fee: "fixed" },
      { no: "3.2", name: { zh: "商标抢注监测与异议", en: "Watch Service & Opposition", es: "Vigilancia y oposición de marcas", fr: "Surveillance et opposition", de: "Markenüberwachung & Widerspruch", ar: "مراقبة العلامات والاعتراض" },
        scope: { zh: "抢注监测预警、异议、无效宣告、撤三申请", en: "Bad-faith filing monitoring, opposition, invalidation and non-use cancellation", es: "Monitoreo, oposición, nulidad y cancelación por no uso", fr: "Surveillance, opposition, nullité et déchéance pour défaut d'usage", de: "Überwachung, Widerspruch, Nichtigkeits- und Löschungsanträge", ar: "رصد التسجيل المسيء، والاعتراض، وإبطال العلامات، وطلب الشطب لعدم الاستخدام" },
        del: { zh: "监测报告/异议文书 · 按官方时限", en: "Watch report / opposition filings · per official deadlines", es: "Informe/oposición · plazos oficiales", fr: "Rapport/opposition · délais officiels", de: "Bericht/Widerspruch · offizielle Fristen", ar: "تقرير/مستندات اعتراض · حسب المواعيد الرسمية" },
        fee: "mix" },
      { no: "3.3", name: { zh: "展会知识产权维权与应对", en: "Trade Fair IP Enforcement", es: "Defensa IP en ferias", fr: "Défense PI en salons", de: "IP-Durchsetzung auf Messen", ar: "إنفاذ الملكية الفكرية في المعارض" },
        scope: { zh: "广交会、进博会等展会投诉处理、侵权取证、被投诉应对与担保放行", en: "Complaints at Canton Fair, CIIE etc., infringement evidence, defence against complaints and release under security", es: "Quejas en ferias, pruebas, defensa y liberación con garantía", fr: "Plaintes en salons, preuves, défense et mainlevée sous garantie", de: "Beschwerden auf Messen, Beweissicherung, Verteidigung und Freigabe gegen Sicherheit", ar: "معالجة الشكاوى في المعارض مثل معرض كانتون والصين الدولي للاستيراد، وجمع أدلة التعدي، والرد على الشكاوى" },
        del: { zh: "现场/远程应急处理 · 24 小时响应", en: "On-site / remote emergency response · 24h", es: "Respuesta 24h · presencial/remoto", fr: "Intervention 24h · sur place/à distance", de: "Vor-Ort-/Remote-Einsatz · 24h", ar: "معالجة طارئة ميدانية/عن بُعد · استجابة خلال 24 ساعة" },
        fee: "time" },
      { no: "3.4", name: { zh: "知识产权海关备案与查扣", en: "Customs Recordal & Seizure", es: "Registro aduanero y decomiso", fr: "Enregistrement douanier et saisie", de: "Zollregistrierung & Beschlagnahme", ar: "التسجيل الجمركي للملكية الفكرية والضبط" },
        scope: { zh: "商标专利版权海关备案、侵权货物查扣申请与后续处理", en: "Customs recordal of trademarks, patents and copyrights, applications for seizure of infringing goods and follow-up", es: "Registro de marcas, patentes y derechos de autor; decomisos", fr: "Enregistrement douanier marques/brevets/droits d'auteur, saisies", de: "Zollregistrierung von Marken/Patenten/Urheberrechten, Beschlagnahme", ar: "التسجيل الجمركي للعلامات والبراءات وحقوق المؤلف، وطلب ضبط البضائع المقلدة" },
        del: { zh: "备案证明＋查扣申请 · 按官方时限", en: "Recordal certificate + seizure application · per official deadlines", es: "Certificado + solicitud · plazos oficiales", fr: "Certificat + demande · délais officiels", de: "Nachweis + Antrag · offizielle Fristen", ar: "شهادة التسجيل + طلب الضبط · حسب المواعيد الرسمية" },
        fee: "mix" },
      { no: "3.5", name: { zh: "OEM 定牌加工合规与侵权应对", en: "OEM Compliance & Defense", es: "Cumplimiento OEM y defensa", fr: "Conformité OEM et défense", de: "OEM-Compliance & Verteidigung", ar: "امتثال التصنيع حسب الطلب (OEM) والدفاع" },
        scope: { zh: "定牌加工合同审查、加工侵权风险分析、诉讼应对", en: "Review of OEM contracts, infringement risk analysis for processing, litigation response", es: "Contratos OEM, análisis de riesgo y litigios", fr: "Contrats OEM, analyse de risque et contentieux", de: "OEM-Verträge, Risikoanalyse und Prozessvertretung", ar: "مراجعة عقود التصنيع حسب الطلب، وتحليل مخاطر التقليد، والرد القضائي" },
        del: { zh: "法律意见＋代理方案 · 按案报价", en: "Legal opinion + representation plan · case-by-case", es: "Opinión + plan · según caso", fr: "Avis + plan · au cas par cas", de: "Rechtsgutachten + Plan · fallabhängig", ar: "رأي قانوني + خطة تمثيل · حسب الحالة" },
        fee: "time" },
      { no: "3.6", name: { zh: "域名与电商平台侵权处理", en: "Domain & E-commerce Enforcement", es: "Dominios y plataformas de e-commerce", fr: "Noms de domaine et e-commerce", de: "Domains & E-Commerce-Durchsetzung", ar: "معالجة النطاقات ومنصات التجارة الإلكترونية" },
        scope: { zh: "UDRP 域名仲裁、平台投诉下架、跨境电商店铺合规", en: "UDRP domain arbitration, takedown complaints on platforms, compliance for cross-border e-commerce stores", es: "Arbitraje UDRP, retiros en plataformas y cumplimiento e-commerce", fr: "Arbitrage UDRP, retraits sur plateformes, conformité e-commerce", de: "UDRP-Schiedsverfahren, Plattform-Beschwerden, E-Commerce-Compliance", ar: "تحكيم UDRP للنطاقات، وشكاوى الإزالة على المنصات، وامتثال متاجر التجارة الإلكترونية" },
        del: { zh: "投诉文书＋代理 · 按案报价", en: "Complaint filings + representation · case-by-case", es: "Documentos + representación · según caso", fr: "Dépôts + représentation · au cas par cas", de: "Beschwerden + Vertretung · fallabhängig", ar: "مستندات الشكوى + تمثيل · حسب الحالة" },
        fee: "mix" }
    ]
  },
  {
    id: "tc", noZh: "四", noEn: "04",
    title: { zh: "贸易合规", en: "Trade Compliance", es: "Cumplimiento comercial", fr: "Conformité commerciale", de: "Handels-Compliance", ar: "الامتثال التجاري" },
    sub: { zh: "TRADE COMPLIANCE", en: "TRADE COMPLIANCE", es: "CUMPLIMIENTO COMERCIAL", fr: "CONFORMITÉ COMMERCIALE", de: "HANDELS-COMPLIANCE", ar: "الامتثال التجاري" },
    items: [
      { no: "4.1", name: { zh: "制裁与出口管制合规筛查", en: "Sanctions & Export Control Screening", es: "Detección de sanciones y control de exportaciones", fr: "Contrôle des sanctions et exportations", de: "Sanktions- & Exportkontroll-Screening", ar: "فحص العقوبات وضوابط التصدير" },
        scope: { zh: "供应商/货物/最终用户 OFAC、EAR 及涉俄二级制裁风险筛查，交易结构设计建议", en: "OFAC, EAR and Russia-related secondary-sanctions risk screening of suppliers/goods/end-users, with structuring advice", es: "Detección OFAC/EAR y sanciones secundarias; asesoría de estructura", fr: "Contrôle OFAC/EAR et sanctions secondaires Russie ; conseil de structuration", de: "OFAC-/EAR- und Russland-Sekundärsanktions-Screening; Strukturierungsberatung", ar: "فحص مخاطر العقوبات OFAC وEAR والعقوبات الثانوية المرتبطة بروسيا للموردين/البضائع/المستخدمين النهائيين" },
        del: { zh: "筛查报告＋合规建议 · 3–5 个工作日", en: "Screening report + compliance advice · 3–5 working days", es: "Informe + asesoría · 3–5 días hábiles", fr: "Rapport + conseil · 3–5 jours ouvrés", de: "Bericht + Beratung · 3–5 Werktage", ar: "تقرير فحص + توصيات امتثال · 3–5 أيام عمل" },
        fee: "fixed" },
      { no: "4.2", name: { zh: "进出口关税与归类合规咨询", en: "Customs & Tariff Advisory", es: "Aranceles y clasificación aduanera", fr: "Conseil douanier et tarifaire", de: "Zoll- & Tarifberatung", ar: "استشارات الجمارك والتعرفة" },
        scope: { zh: "HS 编码归类、原产地规则、关税筹划、海关估价与稽查应对", en: "HS classification, rules of origin, tariff planning, customs valuation and handling of audits", es: "Clasificación HS, origen, planificación arancelaria y auditorías", fr: "Classement SH, règles d'origine, planification tarifaire et contrôles", de: "HS-Einreihung, Ursprungsregeln, Zollplanung und Prüfungsverfahren", ar: "تصنيف النظام المنسق (HS)، وقواعد المنشأ، وتخطيط التعرفة، والتقييم الجمركي، والتعامل مع التفتيش" },
        del: { zh: "法律意见 · 按案报价", en: "Legal opinion · case-by-case", es: "Opinión · según caso", fr: "Avis · au cas par cas", de: "Rechtsgutachten · fallabhängig", ar: "رأي قانوني · حسب الحالة" },
        fee: "time" },
      { no: "4.3", name: { zh: "贸易救济案件应对", en: "Trade Remedy Proceedings", es: "Medidas de defensa comercial", fr: "Procédures de défense commerciale", de: "Handelsschutzverfahren", ar: "إجراءات الدفاع التجاري" },
        scope: { zh: "反倾销、反补贴、保障措施调查的应诉与抗辩", en: "Response and defence in anti-dumping, countervailing and safeguard investigations", es: "Defensa en antidumping, subvenciones y salvaguardias", fr: "Défense en antidumping, subventions et sauvegardes", de: "Verteidigung in Antidumping-, Subventions- und Schutzmaßnahmenverfahren", ar: "الرد والدفاع في تحقيقات مكافحة الإغراق والدعم والحماية" },
        del: { zh: "应诉代理 · 按程序阶段报价", en: "Representation · quoted per procedural stage", es: "Representación · por fases", fr: "Représentation · par phase", de: "Vertretung · nach Verfahrensabschnitt", ar: "تمثيل · حسب مراحل الإجراء" },
        fee: "stage" }
    ]
  },
  {
    id: "mar", noZh: "五", noEn: "05",
    title: { zh: "海商海事", en: "Maritime & Shipping", es: "Marítimo y transporte", fr: "Droit maritime et transport", de: "See- & Transportrecht", ar: "القانون البحري والشحن" },
    sub: { zh: "MARITIME & SHIPPING", en: "MARITIME & SHIPPING", es: "MARÍTIMO Y TRANSPORTE", fr: "DROIT MARITIME ET TRANSPORT", de: "SEE- & TRANSPORTRECHT", ar: "القانون البحري والشحن" },
    items: [
      { no: "5.1", name: { zh: "无单放货与货损货差索赔", en: "Release without B/L & Cargo Claims", es: "Entrega sin BL y reclamaciones de carga", fr: "Remise sans connaissement et avaries", de: "Auslieferung ohne Konnossement & Ladungsschäden", ar: "تسليم البضاعة دون سند شحن ومطالبات البضائع" },
        scope: { zh: "无单放货追偿、货损货差索赔、承运人责任认定与诉讼", en: "Recovery for delivery without bill of lading, cargo loss/damage claims, carrier liability and litigation", es: "Recuperación por entrega sin BL, pérdida/daño y responsabilidad del transportista", fr: "Recouvrement pour remise sans BL, pertes/avaries, responsabilité du transporteur", de: "Rückgriff bei Auslieferung ohne Konnossement, Ladungsverlust/-schaden, Haftung des Beförderers", ar: "المطالبة بالتسليم دون سند شحن، ومطالبات الفقد والتلف، وتحديد مسؤولية الناقل" },
        del: { zh: "索赔方案＋代理 · 按案报价", en: "Claims plan + representation · case-by-case", es: "Plan + representación · según caso", fr: "Plan + représentation · au cas par cas", de: "Anspruchsplan + Vertretung · fallabhängig", ar: "خطة مطالبة + تمثيل · حسب الحالة" },
        fee: "semi" },
      { no: "5.2", name: { zh: "货运代理与物流纠纷", en: "Freight Forwarder Disputes", es: "Disputas de transitarios", fr: "Litiges de transitaires", de: "Speditionsstreitigkeiten", ar: "نزاعات وكلاء الشحن" },
        scope: { zh: "货代合同纠纷、目的港弃货处置、仓储滞箱费争议", en: "Forwarding contract disputes, disposal of abandoned cargo at destination, warehousing and demurrage/detention disputes", es: "Contratos de flete, abandono de carga y demoras", fr: "Contrats de fret, marchandises abandonnées, surestaries", de: "Speditionsverträge, aufgegebene Ladung, Lager- und Standgeld", ar: "نزاعات عقود الشحن، والتعامل مع البضائع المتروكة في ميناء الوصول، ونزاعات التخزين وتأخير الحاويات" },
        del: { zh: "法律意见＋代理 · 按案报价", en: "Legal opinion + representation · case-by-case", es: "Opinión + representación · según caso", fr: "Avis + représentation · au cas par cas", de: "Gutachten + Vertretung · fallabhängig", ar: "رأي قانوني + تمثيل · حسب الحالة" },
        fee: "time" }
    ]
  },
  {
    id: "dr", noZh: "六", noEn: "06",
    title: { zh: "争议解决", en: "Dispute Resolution", es: "Resolución de disputas", fr: "Règlement des litiges", de: "Streitbeilegung", ar: "حل النزاعات" },
    sub: { zh: "DISPUTE RESOLUTION", en: "DISPUTE RESOLUTION", es: "RESOLUCIÓN DE DISPUTAS", fr: "RÈGLEMENT DES LITIGES", de: "STREITBEILEGUNG", ar: "حل النزاعات" },
    items: [
      { no: "6.1", name: { zh: "商事诉讼代理", en: "Commercial Litigation", es: "Litigios comerciales", fr: "Contentieux commercial", de: "Wirtschaftsprozesse", ar: "التقاضي التجاري" },
        scope: { zh: "采购合同纠纷、质量纠纷、货款纠纷诉讼代理（财产保全、一审二审执行全流程）", en: "Litigation for purchase-contract, quality and payment disputes — property preservation, trial, appeal and enforcement", es: "Litigios de compra, calidad y pago; medidas cautelares y ejecución", fr: "Contentieux d'achat, qualité et paiement ; mesures conservatoires et exécution", de: "Prozesse bei Kaufvertrags-, Qualitäts- und Zahlungsstreitigkeiten; Sicherungsmaßnahmen und Vollstreckung", ar: "التمثيل في دعاوى عقود الشراء والجودة والمستحقات (شامل الحجز التحفظي والمحاكم والتنفيذ)" },
        del: { zh: "全程代理 · 按程序阶段报价", en: "Full representation · quoted per stage", es: "Representación completa · por fases", fr: "Représentation complète · par phase", de: "Volle Vertretung · nach Phase", ar: "تمثيل كامل · حسب مراحل الإجراء" },
        fee: "semi" },
      { no: "6.2", name: { zh: "商事仲裁代理", en: "Commercial Arbitration", es: "Arbitraje comercial", fr: "Arbitrage commercial", de: "Wirtschaftsschiedsverfahren", ar: "التحكيم التجاري" },
        scope: { zh: "CIETAC、SCIA、上海国仲及 ICC 等仲裁程序代理，仲裁条款设计审查", en: "Representation in arbitration before CIETAC, SCIA, SHIAC, ICC and others; design and review of arbitration clauses", es: "Arbitraje CIETAC, SCIA, SHIAC, ICC; cláusulas arbitrales", fr: "Arbitrage CIETAC, SCIA, SHIAC, ICC ; clauses compromissoires", de: "Vertretung vor CIETAC, SCIA, SHIAC, ICC u.a.; Gestaltung von Schiedsklauseln", ar: "التمثيل في تحكيم CIETAC وSCIA وSHIAC وICC وغيرها، وتصميم ومراجعة شرط التحكيم" },
        del: { zh: "全程代理 · 按程序阶段报价", en: "Full representation · quoted per stage", es: "Representación completa · por fases", fr: "Représentation complète · par phase", de: "Volle Vertretung · nach Phase", ar: "تمثيل كامل · حسب مراحل الإجراء" },
        fee: "semi" },
      { no: "6.3", name: { zh: "外国判决与仲裁裁决承认执行", en: "Recognition & Enforcement", es: "Reconocimiento y ejecución", fr: "Reconnaissance et exécution", de: "Anerkennung & Vollstreckung", ar: "الاعتراف والتنفيذ" },
        scope: { zh: "外国法院判决、外国仲裁裁决在中国法院的承认与执行（含纽约公约路径）", en: "Recognition and enforcement of foreign judgments and arbitral awards in Chinese courts, including under the New York Convention", es: "Ejecución de sentencias y laudos extranjeros en China (Convención de Nueva York)", fr: "Exécution des jugements et sentences étrangers en Chine (Convention de New York)", de: "Anerkennung und Vollstreckung ausländischer Urteile und Schiedssprüche in China (New Yorker Übereinkommen)", ar: "الاعتراف بالحكام والأحكام الأجنبية وتنفيذها في المحاكم الصينية (بما في ذلك اتفاقية نيويورك)" },
        del: { zh: "执行代理 · 按程序阶段报价", en: "Enforcement representation · per stage", es: "Representación de ejecución · por fases", fr: "Représentation en exécution · par phase", de: "Vertretung in der Vollstreckung · nach Phase", ar: "تمثيل في التنفيذ · حسب مراحل الإجراء" },
        fee: "time" }
    ]
  },
  {
    id: "fdi", noZh: "七", noEn: "07",
    title: { zh: "外商投资落地", en: "Foreign Investment Set-up", es: "Inversión extranjera", fr: "Implantation d'investissement étranger", de: "Ausländische Investitionen", ar: "تأسيس الاستثمار الأجنبي" },
    sub: { zh: "FOREIGN INVESTMENT SET-UP", en: "FOREIGN INVESTMENT SET-UP", es: "INVERSIÓN EXTRANJERA", fr: "IMPLANTATION D'INVESTISSEMENT ÉTRANGER", de: "AUSLÄNDISCHE INVESTITIONEN", ar: "تأسيس الاستثمار الأجنبي" },
    items: [
      { no: "7.1", name: { zh: "外资公司设立（WFOE/代表处）", en: "WFOE / Rep. Office Set-up", es: "Constitución de WFOE/oficina de representación", fr: "Création de WFOE/bureau de représentation", de: "Gründung von WFOE/Repräsentanz", ar: "تأسيس شركة أجنبية المملوكة بالكامل (WFOE)/مكتب تمثيل" },
        scope: { zh: "外商独资企业、代表处设立，行业准入负面清单分析，注册地与架构设计", en: "Establishment of WFOEs and representative offices, negative-list analysis, and design of location and structure", es: "WFOE, oficinas de representación, lista negativa y estructura", fr: "WFOE, bureaux de représentation, liste négative et structure", de: "Gründung von WFOEs und Repräsentanzen, Negativlisten-Analyse, Standort- und Strukturgestaltung", ar: "تأسيس الشركات الأجنبية ومكاتب التمثيل، وتحليل القائمة السلبية للدخول، وتصميم المقر والهيكل" },
        del: { zh: "全套设立文件＋执照 · 4–8 周", en: "Full set-up documents + licence · 4–8 weeks", es: "Documentos + licencia · 4–8 semanas", fr: "Dossier complet + licence · 4–8 semaines", de: "Gründungsunterlagen + Lizenz · 4–8 Wochen", ar: "مستندات التأسيس كاملة + الترخيص · 4–8 أسابيع" },
        fee: "fixed" },
      { no: "7.2", name: { zh: "外商投资合规登记", en: "FDI Compliance Registration", es: "Registro de inversión extranjera", fr: "Enregistrement IDE", de: "FDI-Compliance-Registrierung", ar: "تسجيل الامتثال للاستثمار الأجنبي المباشر" },
        scope: { zh: "FDI 外汇登记、商务备案、后续变更登记", en: "FDI foreign-exchange registration, commercial filing and subsequent change registrations", es: "Registro cambiario FDI, presentaciones y cambios", fr: "Enregistrement des changes FDI, dépôts et modifications", de: "FDI-Devisenregistrierung, Handelsanmeldung und Änderungsregistrierungen", ar: "التسجيل النقدي الأجنبي للاستثمار المباشر، والإيداع التجاري، وتسجيل التعديلات" },
        del: { zh: "登记完成 · 按官方时限", en: "Registration completed · per official deadlines", es: "Registro · plazos oficiales", fr: "Enregistrement · délais officiels", de: "Registrierung · offizielle Fristen", ar: "إتمام التسجيل · حسب المواعيد الرسمية" },
        fee: "fixed" },
      { no: "7.3", name: { zh: "并购与增资", en: "M&A & Capital Increase", es: "Fusiones, adquisiciones y aumentos", fr: "Fusions-acquisitions et augmentation de capital", de: "M&A & Kapitalerhöhung", ar: "الاندماج والاستحواذ وزيادة رأس المال" },
        scope: { zh: "股权收购、资产收购尽职调查、交易文件起草、交割与反垄断申报", en: "Equity/asset acquisition due diligence, transaction documents, closing and antitrust filing", es: "Due diligence, documentos, cierre y antimonopolio", fr: "Due diligence, actes, closing et notification antitrust", de: "Due Diligence, Vertragswerke, Closing und Kartellrecht", ar: "العناية الواجبة لشراء الأسهم/الأصول، وصياغة مستندات الصفقة، والإغلاق، والإخطار بمكافحة الاحتكار" },
        del: { zh: "尽调报告＋交易文件 · 按案报价", en: "DD report + transaction documents · case-by-case", es: "Informe + documentos · según caso", fr: "Rapport + actes · au cas par cas", de: "Bericht + Dokumente · fallabhängig", ar: "تقرير العناية الواجبة + مستندات الصفقة · حسب الحالة" },
        fee: "mix" }
    ]
  },
  {
    id: "spc", noZh: "八", noEn: "08",
    title: { zh: "专项与认证服务", en: "Special & Certification Services", es: "Servicios especiales y certificación", fr: "Services spéciaux et certification", de: "Sonder- & Zertifizierungsleistungen", ar: "خدمات خاصة وشهادات" },
    sub: { zh: "SPECIAL & CERTIFICATION", en: "SPECIAL & CERTIFICATION", es: "ESPECIALES Y CERTIFICACIÓN", fr: "SPÉCIAUX ET CERTIFICATION", de: "SONDER- & ZERTIFIZIERUNG", ar: "خدمات خاصة وشهادات" },
    items: [
      { no: "8.1", name: { zh: "供应商破产债权人保护", en: "Creditor Protection in Insolvency", es: "Protección del acreedor en insolvencia", fr: "Protection du créancier en insolvabilité", de: "Gläubigerschutz in der Insolvenz", ar: "حماية الدائن في الإفلاس" },
        scope: { zh: "破产债权申报、取回权与优先权主张、破产程序参与", en: "Filing of claims in bankruptcy, assertion of recovery and priority rights, participation in proceedings", es: "Reclamaciones, derechos de recuperación y prioridad", fr: "Déclarations de créances, droits de revendication et priorité", de: "Anmeldung von Forderungen, Aussonderungs- und Vorzugsrechte", ar: "تقديم مطالبات الإفلاس، والمطالبة بحقوق الاسترداد والأولوية، والمشاركة في الإجراءات" },
        del: { zh: "申报文件＋代理 · 按案报价", en: "Claim filings + representation · case-by-case", es: "Documentos + representación · según caso", fr: "Déclarations + représentation · au cas par cas", de: "Anmeldungen + Vertretung · fallabhängig", ar: "مستندات التقديم + تمثيل · حسب الحالة" },
        fee: "time" },
      { no: "8.2", name: { zh: "公证、海牙认证与领事认证代办", en: "Notarization & Apostille/Legalization", es: "Notarización y apostilla/legalización", fr: "Notarisation et apostille/légalisation", de: "Notarisierung & Apostille/Legalisierung", ar: "التوثيق وخدمات الأبوستيل والتصديق القنصلي" },
        scope: { zh: "文件公证、海牙认证（Apostille）、领事认证全程代办（含翻译）", en: "End-to-end notarisation, apostille and consular legalisation (including translation)", es: "Notarización, apostilla y legalización (con traducción)", fr: "Notarisation, apostille et légalisation (avec traduction)", de: "Notarisierung, Apostille und Legalisierung inklusive Übersetzung", ar: "توثيق المستندات، وخدمة الأبوستيل، والتصديق القنصلي (بما في ذلك الترجمة)" },
        del: { zh: "认证完成文件 · 2–4 周", en: "Certified documents · 2–4 weeks", es: "Documentos · 2–4 semanas", fr: "Documents · 2–4 semaines", de: "Beglaubigte Unterlagen · 2–4 Wochen", ar: "مستندات مصدقة · 2–4 أسابيع" },
        fee: "fixed" },
      { no: "8.3", name: { zh: "中国法律意见书", en: "Legal Opinion on PRC Law", es: "Opinión legal sobre derecho chino", fr: "Avis juridique sur le droit chinois", de: "Rechtsgutachten zum chinesischen Recht", ar: "رأي قانوني حول القانون الصيني" },
        scope: { zh: "就交易、合规、争议事项出具中英文法律意见书", en: "Bilingual legal opinions on transactional, compliance and dispute matters", es: "Opiniones bilingües sobre operaciones, cumplimiento y disputas", fr: "Avis bilingues sur opérations, conformité et litiges", de: "Zweisprachige Gutachten zu Transaktionen, Compliance und Streitigkeiten", ar: "إصدار آراء قانونية ثنائية اللغة بشأن المعاملات والامتثال والنزاعات" },
        del: { zh: "法律意见书 · 5–10 个工作日", en: "Legal opinion · 5–10 working days", es: "Opinión · 5–10 días hábiles", fr: "Avis · 5–10 jours ouvrés", de: "Gutachten · 5–10 Werktage", ar: "رأي قانوني · 5–10 أيام عمل" },
        fee: "fixed" },
      { no: "8.4", name: { zh: "常年采购法律顾问", en: "Annual Retainer Counsel", es: "Asesoría anual", fr: "Conseil annuel (retainer)", de: "Jahresretainer-Beratung", ar: "مستشار قانوني سنوي للمشتريات" },
        scope: { zh: "年度打包：不限次日常咨询＋约定额度合同审查＋供应商尽调折扣＋纠纷代理优先费率", en: "Annual package: unlimited routine consultations, agreed quota of contract reviews, DD discounts and priority rates for dispute work", es: "Consultas ilimitadas, revisión de contratos, descuentos y tarifas prioritarias", fr: "Consultations illimitées, quota de contrats, remises DD et tarifs prioritaires", de: "Unbegrenzte Beratung, Vertragsprüfungskontingent, DD-Rabatte und Vorzugssätze", ar: "باقة سنوية: استشارات يومية غير محدودة + حصة متفق عليها لمراجعة العقود + خصومات على العناية الواجبة + أسعار تفضيلية للنزاعات" },
        del: { zh: "年度顾问协议 · 即时响应（中英双语）", en: "Annual retainer agreement · prompt bilingual response", es: "Acuerdo anual · respuesta inmediata", fr: "Convention annuelle · réponse rapide bilingue", de: "Jahresvertrag · schnelle zweisprachige Antwort", ar: "اتفاقية سنوية · استجابة فورية ثنائية اللغة" },
        fee: "retainer" }
    ]
  }
];

/* ---------- 表格列标题 ---------- */
const COL_HEAD = {
  zh: { no: "No.", name: "服务项目 Service", scope: "服务内容 Scope", del: "交付物与时限 Deliverables", fee: "收费 Fee" },
  en: { no: "No.", name: "Service", scope: "Scope", del: "Deliverables & Timeline", fee: "Fee" },
  es: { no: "No.", name: "Servicio", scope: "Alcance", del: "Entregables y plazo", fee: "Honorarios" },
  fr: { no: "No.", name: "Service", scope: "Étendue", del: "Livrables et délai", fee: "Honoraires" },
  de: { no: "Nr.", name: "Leistung", scope: "Umfang", del: "Ergebnis & Frist", fee: "Honorar" },
  ar: { no: "رقم", name: "الخدمة", scope: "النطاق", del: "المخرجات والمدة", fee: "الأتعاب" }
};

/* =========================================================
   痛点数据：8 条真实痛点 ↔ 8 大服务板块（一一对应）
   ========================================================= */
const PAINS = [
  {
    cat: "pre", icon: "&#128269;",
    pain: {
      zh: "供应商看着很正规，可它到底有没有资质、有没有产能、有没有正在打的官司？我在国外根本查不到。",
      en: "The supplier looks legitimate — but does it have the licences, the real capacity, any lawsuits? None of that is searchable from abroad.",
      es: "El proveedor parece formal, pero ¿tiene licencias, capacidad real, litigios pendientes? Nada de eso se puede consultar desde el extranjero.",
      fr: "Le fournisseur semble fiable — mais a-t-il les licences, la capacité réelle, des contentieux ? Rien de tout cela n'est consultable depuis l'étranger.",
      de: "Der Lieferant wirkt seriös — doch hat er Lizenzen, echte Kapazität, laufende Verfahren? Aus dem Ausland ist davon nichts prüfbar.",
      ar: "يبدو المورّد موثوقًا — لكن هل يملك التراخيص والطاقة الإنتاجية؟ وهل عليه قضايا؟ لا يمكن التحقق من ذلك من الخارج."
    },
    fix: {
      zh: "我在中国境内调取工商登记、股权结构、不动产、涉诉与被执行信息，必要时实地或视频核厂，出具可作证据使用的尽调报告——付款之前，先把对方看清楚。",
      en: "I retrieve corporate registration, shareholding, property, litigation and enforcement records inside China, verify the factory on site or by video, and deliver a due-diligence report usable as evidence — know exactly who you are paying, before you pay.",
      es: "Obtengo el registro mercantil, la estructura societaria, inmuebles, litigios y embargos dentro de China, verifico la fábrica in situ o por vídeo y entrego un informe de diligencia utilizable como prueba: sepa a quién paga antes de pagar.",
      fr: "Je récupère en Chine le registre du commerce, l'actionnariat, les biens immobiliers, les litiges et les saisies, je vérifie l'usine sur place ou en visio, et je remets un rapport de due diligence utilisable comme preuve : sachez à qui vous payez avant de payer.",
      de: "Ich beschaffe in China Handelsregister-, Gesellschafter-, Immobilien-, Prozess- und Vollstreckungsdaten, prüfe das Werk vor Ort oder per Video und liefere einen als Beweis verwertbaren Due-Diligence-Bericht — wissen Sie, an wen Sie zahlen, bevor Sie zahlen.",
      ar: "أستخرج داخل الصين السجل التجاري وهيكل الملكية والعقارات والقضايا وسجلات التنفيذ، وأتحقق من المصنع ميدانيًا أو بالفيديو، وأسلّم تقرير فحص يمكن استخدامه كدليل — اعرف لمن تدفع قبل أن تدفع."
    }
  },
  {
    cat: "perf", icon: "&#128176;",
    pain: {
      zh: "预付款付了，货却一拖再拖；或者货到港才发现不对板——尾款到底该不该付？",
      en: "You paid the deposit and the goods keep slipping — or they arrive and don't match the spec. Should you pay the balance?",
      es: "Pagó el anticipo y la mercancía se retrasa; o llega y no coincide con lo pactado. ¿Debe pagar el saldo?",
      fr: "L'acompte est versé et la marchandise tarde — ou elle arrive non conforme. Faut-il payer le solde ?",
      de: "Anzahlung geleistet, Ware verzögert sich — oder kommt nicht spezifikationsgemäß. Restzahlung leisten?",
      ar: "دفعت الدفعة المقدمة وتأخرت البضاعة، أو وصلت مخالفة للمواصفات — فهل تدفع الباقي؟"
    },
    fix: {
      zh: "我把验收标准、违约后果与付款节点写进合同，用质保金、担保与所有权保留把风险压到最低；一旦违约，第一时间发律师函、申请财产保全。",
      en: "I build acceptance standards, default consequences and payment milestones into the contract, and use retention, security and retention of title to cap your risk. On default: formal demand and asset preservation, immediately.",
      es: "Incorporo al contrato los criterios de aceptación, las consecuencias del incumplimiento y los hitos de pago, y uso retenciones, garantías y reserva de dominio para limitar el riesgo. Ante incumplimiento: requerimiento formal y embargo de bienes de inmediato.",
      fr: "J'intègre au contrat les critères de conformité, les conséquences de l'inexécution et les jalons de paiement, et j'utilise retenues, garanties et réserve de propriété pour limiter le risque. En cas de manquement : mise en demeure et saisie conservatoire immédiates.",
      de: "Ich verankere Abnahmekriterien, Verzugsfolgen und Zahlungsmeilensteine im Vertrag und begrenze Ihr Risiko mit Einbehalten, Sicherheiten und Eigentumsvorbehalt. Bei Verzug folgen sofort Abmahnung und Vermögenssicherung.",
      ar: "أُدرج في العقد معايير القبول ونتائج الإخلال ومراحل الدفع، وأستخدم المحتجزات والضمانات والاحتفاظ بالملكية لتقليل المخاطر، وعند الإخلال يُرسل إنذار رسمي ويُطلب الحجز على الأموال فورًا."
    }
  },
  {
    cat: "ip", icon: "&#128737;",
    pain: {
      zh: "品牌、图纸、模具在中国被抄，商标还被别人抢先注册——展会上看到山寨货却毫无办法。",
      en: "Your brand, drawings and tooling get copied in China — and someone else registered your trademark first. You see clones at trade fairs and feel powerless.",
      es: "Copian su marca, planos y moldes en China — y otro registró su marca primero. Ve imitaciones en ferias y no puede hacer nada.",
      fr: "Votre marque, vos plans et vos moules sont copiés en Chine — et un tiers a déposé votre marque en premier. Vous voyez des contrefaçons en salon sans pouvoir réagir.",
      de: "Marke, Zeichnungen und Werkzeuge werden in China kopiert — und ein Dritter hat Ihre Marke zuerst angemeldet. Auf Messen sehen Sie Plagiate und sind machtlos.",
      ar: "تُنسخ علامتك ورسوماتك وقوالبك في الصين، ويسجّل غيرك علامتك التجارية أولًا، فترى التقليد في المعارض بلا حيلة."
    },
    fix: {
      zh: "商标与专利布局、抢注应对与无效宣告、侵权投诉与诉讼、海关知识产权备案——把你的设计和品牌在中国真正锁住。",
      en: "Trademark and patent strategy, action against bad-faith filings, infringement complaints and litigation, customs IP recordal — lock your brand and designs down in China.",
      es: "Estrategia de marcas y patentes, oposición frente a registros de mala fe, denuncias y litigios por infracción, registro aduanero de PI: asegure su marca y sus diseños en China.",
      fr: "Stratégie marques et brevets, action contre les dépôts de mauvaise foi, plaintes et contentieux en contrefaçon, enregistrement douanier des PI : verrouillez votre marque et vos designs en Chine.",
      de: "Marken- und Patentstrategie, Vorgehen gegen bösgläubige Anmeldungen, Abmahnung und Verletzungsklage, Zollregistrierung von Schutzrechten — sichern Sie Marke und Design in China.",
      ar: "استراتيجية العلامات والبراءات، والتعامل مع التسجيلات سيئة النية، وشكاوى الانتهاك والدعاوى، وتسجيل حقوق الملكية لدى الجمارك — أوقف التقليد في الصين."
    }
  },
  {
    cat: "tc", icon: "&#128678;",
    pain: {
      zh: "海关突然扣货、被质疑原产地规避关税，或者遇上反倾销调查——这些规则我完全没接触过。",
      en: "Customs seizes your shipment, questions the origin to avoid duties, or an anti-dumping investigation lands — rules you have never dealt with.",
      es: "La aduana retiene su carga, cuestiona el origen para eludir aranceles o se abre una investigación antidumping: normas que desconoce por completo.",
      fr: "La douane bloque votre cargaison, conteste l'origine pour éluder les droits, ou une enquête antidumping est ouverte — des règles que vous ne maîtrisez pas.",
      de: "Der Zoll stoppt Ihre Sendung, bezweifelt die Ursprungsangabe oder eine Antidumping-Untersuchung beginnt — Regeln, die Sie nicht kennen.",
      ar: "تحتجز الجمارك شحنتك أو تشكك في المنشأ لتجنب الرسوم، أو يبدأ تحقيق مكافحة الإغراق — قواعد لا تعرفها."
    },
    fix: {
      zh: "原产地与 HS 编码审查、进出口合规体检、贸易救济调查应对、关税筹划——让货顺利放行，把调查和罚款挡在前面。",
      en: "Origin and HS-code review, import/export compliance health-check, trade-remedy defence, duty planning — keep goods moving and stay ahead of investigations and penalties.",
      es: "Revisión de origen y código HS, auditoría de cumplimiento de importación/exportación, defensa en medidas comerciales y planificación arancelaria: despacho ágil, sin sobresaltos.",
      fr: "Revue de l'origine et du code SH, audit de conformité import/export, défense en mesures de défense commerciale et optimisation tarifaire : dédouanement fluide, enquêtes et amendes anticipées.",
      de: "Ursprungs- und HS-Code-Prüfung, Import/Export-Compliance-Audit, Verteidigung in Handelsschutzverfahren, Zollplanung — Ware läuft, Untersuchungen und Bußgelder bleiben vor der Tür.",
      ar: "مراجعة المنشأ ورمز HS، وتدقيق الامتثال للاستيراد والتصدير، والدفاع في إجراءات الحماية التجارية، وتخطيط الرسوم — لتمرّ البضاعة ويتجنّب التحقيقات والغرامات."
    }
  },
  {
    cat: "mar", icon: "&#128674;",
    pain: {
      zh: "货在海上出事：延误、货损、无单放货，甚至提单是假的——我该找谁说理？",
      en: "Trouble at sea: delay, cargo damage, delivery without a bill of lading — or the B/L itself is forged. Who do you claim against?",
      es: "Problemas en el mar: retraso, daños, entrega sin conocimiento de embarque — o el propio B/L es falso. ¿Contra quién reclama?",
      fr: "Avarie en mer : retard, dommage, livraison sans connaissement — ou connaissement falsifié. Contre qui agir ?",
      de: "Ärger auf See: Verzug, Ladungsschaden, Auslieferung ohne Konnossement — oder ein gefälschtes B/L. Gegen wen klagen?",
      ar: "مشكلة في البحر: تأخير أو تلف أو تسليم دون بوليصة شحن — أو بوليصة مزوّرة. ضد من تطالب؟"
    },
    fix: {
      zh: "提单与租约审查、货损货差索赔、无单放货追责、扣船与海事保全——联合全所海商海事团队共同处理。",
      en: "B/L and charterparty review, cargo loss and shortage claims, liability for delivery without a B/L, ship arrest and maritime preservation — handled with the firm's dedicated maritime team.",
      es: "Revisión de B/L y fletamentos, reclamaciones por pérdida o faltante, responsabilidad por entrega sin B/L, embargo de buques y medidas cautelares marítimas, con el equipo marítimo del despacho.",
      fr: "Revue des connaissements et chartes-parties, réclamations pour pertes et manquants, responsabilité pour livraison sans connaissement, saisie de navire et mesures conservatoires, avec l'équipe maritime du cabinet.",
      de: "Prüfung von Konnossement und Chartervertrag, Schadens- und Fehlmengenansprüche, Haftung bei Auslieferung ohne B/L, Schiffsarrest und seerechtliche Sicherung — mit dem Schifffahrtsteam der Kanzlei.",
      ar: "مراجعة بوالص الشحن وعقود الإيجار، ومطالبات التلف والنقص، والمسؤولية عن التسليم دون بوليصة، وتوقيف السفن والتحفظ البحري — بالتعاون مع فريق القانون البحري."
    }
  },
  {
    cat: "dr", icon: "&#9878;",
    pain: {
      zh: "真的闹翻了，中国的法院和仲裁我完全不熟，语言不通、也没人可信——最怕赢了官司还是拿不到钱。",
      en: "It becomes a real dispute — you don't know China's courts or arbitration, the language, or whom to trust. Worst of all: winning but never getting paid.",
      es: "Estalla el conflicto y no conoce los tribunales ni el arbitraje en China, ni el idioma, ni en quién confiar. Y lo peor: ganar sin cobrar.",
      fr: "Le litige éclate : vous ne connaissez ni les tribunaux ni l'arbitrage en Chine, ni la langue, ni à qui vous fier. Pire : gagner sans être payé.",
      de: "Es kommt zum Streit — Sie kennen weder Gerichte noch Schiedsverfahren in China, nicht die Sprache, nicht die Menschen. Und: gewinnen, aber nie Geld sehen.",
      ar: "يتحول الأمر إلى نزاع حقيقي ولا تعرف المحاكم الصينية ولا التحكيم ولا اللغة ولا من تثق به، والأسوأ أن تكسب القضية دون أن تحصّل أموالك."
    },
    fix: {
      zh: "诉前与诉中财产保全、诉讼与仲裁代理、判决与裁决的承认与执行——从立案到执行全程由我替你跑，你不需要飞到中国。",
      en: "Pre- and mid-action asset preservation, litigation and arbitration representation, recognition and enforcement of judgments and awards — I run it from filing to enforcement; you don't need to fly to China.",
      es: "Medidas cautelares previas y durante el proceso, representación en litigios y arbitrajes, reconocimiento y ejecución de sentencias y laudos: de la demanda a la ejecución, sin viajar a China.",
      fr: "Saisies conservatoires avant et pendant l'instance, représentation en contentieux et arbitrage, reconnaissance et exécution des jugements et sentences : de la requête à l'exécution, sans venir en Chine.",
      de: "Vermögenssicherung vor und während des Verfahrens, Prozess- und Schiedsvertretung, Anerkennung und Vollstreckung von Urteilen und Schiedssprüchen — ich führe es von der Klage bis zur Vollstreckung; Sie müssen nicht nach China reisen.",
      ar: "الحجز التحفظي قبل الدعوى وأثناءها، والتمثيل في التقاضي والتحكيم، والاعتراف بالأحكام والقرارات وتنفيذها — أتولّى الأمر من رفع الدعوى حتى التنفيذ دون حاجة لسفرك إلى الصين."
    }
  },
  {
    cat: "fdi", icon: "&#127970;",
    pain: {
      zh: "想在中国设立公司、设厂或找合资伙伴，但从准入政策到落地流程，我不知道从哪一步开始。",
      en: "You want to set up a company, a plant or a joint venture in China — but from market-access rules to the actual process, you don't know where to start.",
      es: "Quiere crear una empresa, una planta o una joint venture en China, pero no sabe por dónde empezar.",
      fr: "Vous voulez créer une société, une usine ou une coentreprise en Chine, mais ne savez pas par où commencer.",
      de: "Sie möchten in China eine Firma, ein Werk oder ein Joint Venture gründen — wissen aber nicht, wo anfangen.",
      ar: "تريد تأسيس شركة أو مصنع أو مشروع مشترك في الصين، لكنك لا تعرف من أين تبدأ."
    },
    fix: {
      zh: "外资准入评估、公司设立与股权架构、合资谈判与全套文件、持续合规顾问——从第一天起就把架构搭对。",
      en: "Foreign-investment access assessment, entity set-up and shareholding structure, JV negotiation and full documentation, ongoing compliance counsel — get the structure right from day one.",
      es: "Evaluación de acceso a la inversión extranjera, constitución y estructura societaria, negociación y documentación de la JV, asesoría de cumplimiento continua: la estructura correcta desde el primer día.",
      fr: "Évaluation de l'accès à l'investissement étranger, constitution et structuration, négociation et documentation de la JV, conformité continue : une structure juste dès le premier jour.",
      de: "Prüfung des Marktzugangs, Gründung und Beteiligungsstruktur, JV-Verhandlung und komplette Dokumentation, laufende Compliance-Beratung — von Tag eins an richtig aufgesetzt.",
      ar: "تقييم دخول الاستثمار الأجنبي، والتأسيس وهيكل الملكية، والتفاوض على المشروع المشترك ووثائقه الكاملة، واستشارات الامتثال المستمرة — هيكل صحيح من اليوم الأول."
    }
  },
  {
    cat: "spc", icon: "&#128209;",
    pain: {
      zh: "产品要进中国或从中国出口，认证、公证、领事认证一堆文件，我搞不清需要哪些、怎么办。",
      en: "Products entering or leaving China need certifications, notarisation and legalisation — you can't tell which documents apply or how to obtain them.",
      es: "Los productos que entran o salen de China exigen certificaciones, notarización y legalización: no sabe qué documentos aplican ni cómo obtenerlos.",
      fr: "Les produits entrants ou sortants de Chine exigent certifications, notarisation et légalisation — vous ignorez quels documents s'appliquent et comment les obtenir.",
      de: "Produkte für oder aus China brauchen Zertifizierungen, Notar- und Konsularbeglaubigungen — Sie wissen nicht, welche Unterlagen gelten und wie Sie sie bekommen.",
      ar: "تحتاج المنتجات الداخلة أو الخارجة من الصين إلى شهادات وتصديقات — ولا تعرف أي مستندات تلزمك وكيف تحصل عليها."
    },
    fix: {
      zh: "产品认证与合规咨询、文件公证与领事认证、专项法律意见书——需要什么、多久出、多少费用，一次讲清楚。",
      en: "Product certification and compliance advice, notarisation and consular legalisation, specialist legal opinions — what's needed, how long it takes, what it costs, explained up front.",
      es: "Asesoría en certificación y cumplimiento, notarización y legalización consular, informes jurídicos especializados: qué se necesita, en cuánto tiempo y a qué coste, todo claro desde el inicio.",
      fr: "Conseil en certification et conformité, notarisation et légalisation consulaire, consultations juridiques spécialisées : ce qu'il faut, en combien de temps, à quel coût — expliqué d'emblée.",
      de: "Zertifizierungs- und Compliance-Beratung, Notar- und Konsularbeglaubigung, spezialisierte Rechtsgutachten — was nötig ist, wie lange es dauert, was es kostet, von Anfang an erklärt.",
      ar: "استشارات الشهادات والامتثال، والتصديق لدى كاتب العدل والقنصلية، والآراء القانونية المتخصصة — ما يلزم وكم يستغرق وكم يكلف، بوضوح من البداية."
    }
  }
];

/* =========================================================
   四大优势：懂中国法律 · 中英双语 · 熟悉跨境贸易实操 · 同类外商客户经验
   ========================================================= */
const ADV = [
  {
    icon: "&#9878;",
    t: {
      zh: "中国执业律师，可在中国境内实际办案", en: "A China-qualified lawyer who can act on the ground",
      es: "Con licencia para ejercer en China: actuar dentro del país", fr: "Exercer en Chine : agir directement sur le terrain",
      de: "In China zugelassen: vor Ort handeln können", ar: "ممارسة المحاماة في الصين: القدرة على التحرّك ميدانيًا"
    },
    d: {
      zh: "我持有中国律师执业证（执业证号 14403201411015550），可以在中国境内立案、出庭、调查取证、申请财产保全与强制执行。依照中国法律，这几项程序须由中国执业律师在中国境内完成。",
      en: "I hold a PRC lawyer's licence (No. 14403201411015550) and can file cases, appear in court, obtain evidence, apply for asset preservation and enforce judgments inside China following PRC procedure end to end.",
      es: "Tengo licencia para ejercer en China (n.º 14403201411015550): puedo demandar, comparecer, obtener pruebas, solicitar medidas cautelares y ejecutar resoluciones dentro de China ; según el Derecho chino, estas actuaciones las realiza un abogado con licencia en China.",
      fr: "Je détiens une licence pour exercer en Chine (n° 14403201411015550) : je peux saisir les juridictions, plaider, obtenir des preuves, solliciter des mesures conservatoires et exécuter les décisions en Chine ; en droit chinois, ces étapes relèvent d'un avocat inscrit en Chine.",
      de: "Ich besitze eine chinesische Anwaltszulassung (Nr. 14403201411015550) und kann in China klagen, verhandeln, Beweise erheben, Vermögenssicherung beantragen und Urteile vollstrecken ; diese Schritte sind nach chinesischem Recht von einem in China zugelassenen Anwalt zu erledigen.",
      ar: "أحمل ترخيص المحاماة في الصين (رقم 14403201411015550): أستطيع رفع الدعاوى والمرافعة وجمع الأدلة وطلب الحجز على الأموال وتنفيذ الأحكام داخل الصين ; وهذه الخطوات يؤديها، وفق القانون الصيني، محامٍ مرخّص في الصين."
    }
  },
  {
    icon: "&#127760;",
    t: {
      zh: "中英双语，直连沟通不转述", en: "Bilingual — no translator in between",
      es: "Bilingüe, sin intermediarios que traduzcan", fr: "Bilingue — sans traducteur intermédiaire",
      de: "Zweisprachig — ohne Übersetzer dazwischen", ar: "ثنائي اللغة — بلا وسيط مترجم"
    },
    d: {
      zh: "中文是我的母语，英文是我的工作语言。合同、律师函、尽调报告、庭审材料可直接出中英文本——不经转述，信息不丢失，风险不误判。",
      en: "Chinese is my native language and English my working language. Contracts, demand letters, due-diligence reports and court filings can all be delivered in Chinese and English — nothing lost in retelling, no risk misread.",
      es: "El chino es mi lengua materna y el inglés mi lengua de trabajo. Contratos, requerimientos, informes de diligencia y escritos judiciales se entregan en chino e inglés: sin distorsión y sin riesgos malinterpretados.",
      fr: "Le chinois est ma langue maternelle, l'anglais ma langue de travail. Contrats, mises en demeure, rapports de due diligence et écritures sont livrés en chinois et en anglais : aucune perte d'information, aucun risque mal évalué.",
      de: "Chinesisch ist meine Muttersprache, Englisch meine Arbeitssprache. Verträge, Abmahnungen, Due-Diligence-Berichte und Schriftsätze liefere ich auf Chinesisch und Englisch — keine Informationsverluste, keine falsch eingeschätzten Risiken.",
      ar: "الصينية لغتي الأم والإنجليزية لغة عملي. العقود والإنذارات وتقارير الفحص ومستندات التقاضي تُسلَّم بالصينية والإنجليزية — دون فقدان معلومات أو سوء تقدير للمخاطر."
    }
  },
  {
    icon: "&#128202;",
    t: {
      zh: "懂跨境贸易实操，不只是懂法条", en: "I understand the trade, not just the law",
      es: "Entiendo el comercio, no solo la ley", fr: "Je comprends le commerce, pas seulement la loi",
      de: "Ich verstehe den Handel, nicht nur das Gesetz", ar: "أفهم التجارة لا القانون فقط"
    },
    d: {
      zh: "香港大学金融与投资管理研究生背景，加上长期涉港涉外业务经验。我熟悉贸易术语、信用证与电汇条款、验货标准、供应链与关税结构——听得懂你的生意，才谈得上保护你的生意。",
      en: "A postgraduate degree in Finance and Investment Management from the University of Hong Kong, plus years of cross-border practice. I know Incoterms, L/C and T/T terms, inspection standards, supply chains and duty structures — understanding your business is where protection begins.",
      es: "Máster en Finanzas y Gestión de Inversiones por la Universidad de Hong Kong y años de práctica transfronteriza. Conozco Incoterms, condiciones de L/C y T/T, normas de inspección, cadenas de suministro y estructuras arancelarias: entender su negocio es el punto de partida para protegerlo.",
      fr: "Formation en finance et gestion d'investissement (Université de Hong Kong) et pratique transfrontalière de longue date. Je maîtrise les Incoterms, les conditions L/C et T/T, les normes d'inspection, les chaînes d'approvisionnement et les droits de douane : comprendre votre activité est le point de départ de sa protection.",
      de: "Postgraduiertenabschluss in Finanz- und Investmentmanagement der Universität Hongkong plus langjährige grenzüberschreitende Praxis. Ich kenne Incoterms, L/C- und T/T-Bedingungen, Prüfstandards, Lieferketten und Zollstrukturen — Ihr Geschäft zu verstehen ist der Anfang seines Schutzes.",
      ar: "شهادة دراسات عليا في المالية وإدارة الاستثمار من جامعة هونغ كونغ، مع خبرة طويلة في الأعمال العابرة للحدود. أعرف شروط التجارة الدولية واعتمادات المستندات والتحويلات ومعايير الفحص وسلاسل التوريد وهياكل الرسوم — وفهم عملك هو بداية حمايته."
    }
  },
  {
    icon: "&#129309;",
    t: {
      zh: "有同类外商客户经验，懂你的顾虑", en: "I have served buyers like you",
      es: "He asesorado a compradores como usted", fr: "J'ai accompagné des acheteurs comme vous",
      de: "Ich habe Käufer wie Sie beraten", ar: "خدمت مشترين أمثالكم"
    },
    d: {
      zh: "团队长期为境外采购商、贸易商与品牌方提供对华采购法律支持，处理过供应商违约、质量争议、货款追索、商标抢注与海关合规等同类事务。你现在遇到的问题，我大概率已经处理过。",
      en: "Our team has long supported overseas buyers, traders and brand owners on China sourcing — supplier default, quality disputes, payment recovery, trademark squatting and customs compliance. Whatever you face now, I have most likely handled it before.",
      es: "Nuestro equipo lleva años apoyando a compradores, comerciantes y titulares de marcas extranjeros en sus compras en China: incumplimiento de proveedores, disputas de calidad, cobro de pagos, registro indebido de marcas y cumplimiento aduanero. Lo que afronta ahora, probablemente ya lo hemos resuelto.",
      fr: "Notre équipe accompagne depuis longtemps acheteurs, négociants et titulaires de marques étrangers pour leurs achats en Chine : défaillance fournisseur, litiges qualité, recouvrement, dépôts de marque abusifs et conformité douanière. Ce que vous vivez, nous l'avons très probablement déjà traité.",
      de: "Unser Team unterstützt seit Jahren ausländische Einkäufer, Händler und Markeninhaber beim China-Bezug: Lieferantenverzug, Qualitätsstreitigkeiten, Forderungseinzug, Markenpiraterie und Zoll-Compliance. Was Sie jetzt erleben, haben wir höchstwahrscheinlich schon gelöst.",
      ar: "يدعم فريقنا منذ سنوات المشترين والتجار وأصحاب العلامات الأجانب في مشترياتهم من الصين: إخلال المورّد، ونزاعات الجودة، وتحصيل المدفوعات، وتسجيل العلامات بسوء نية، والامتثال الجمركي. ما تواجهه الآن على الأرجح تعاملنا معه من قبل."
    }
  }
];

/* =========================================================
   服务路径说明：常见路径的职能范围 vs 我可以承接的部分
   ========================================================= */
const GAP = [
  {
    cant: {
      zh: "本国律师路径：熟悉您所在国的法律与商业环境，在境外谈判、合规与执行等环节提供支持；中国境内的立案、出庭、调查取证与财产保全，按中国法律须由中国执业律师办理。",
      en: "Your home-country counsel: strong on your own law and business environment, and valuable for negotiation, compliance and enforcement abroad. Inside China, filing, court appearances, evidence-gathering and asset preservation must be handled by a lawyer licensed in China.",
      es: "Abogado de su país: sólido en su Derecho y su entorno empresarial, y valioso para negociar, cumplir y ejecutar en el extranjero. Dentro de China, demandar, comparecer, obtener pruebas y adoptar medidas cautelares corresponde a un abogado con licencia china.",
      fr: "Avocat de votre pays : solide sur votre droit et votre environnement d'affaires, précieux pour négocier, se conformer et exécuter à l'étranger. En Chine, saisir une juridiction, plaider, obtenir des preuves et prendre des mesures conservatoires relève d'un avocat inscrit en Chine.",
      de: "Anwalt in Ihrem Land: stark im eigenen Recht und Geschäftsumfeld, wertvoll für Verhandlung, Compliance und Vollstreckung im Ausland. In China müssen Klage, Verhandlung, Beweiserhebung und Vermögenssicherung von einem in China zugelassenen Anwalt geführt werden.",
      ar: "محامي بلدك: قوي في قانون بلدك وبيئته التجارية، ومفيد في التفاوض والامتثال والتنفيذ في الخارج. أما داخل الصين، فإن رفع الدعوى والمرافعة وجمع الأدلة والحجز على الأموال يقوم بها محامٍ مرخّص في الصين."
    },
    can: {
      zh: "我在中国境内完成立案、出庭、调查取证、财产保全与强制执行，并与您所在国的律师配合衔接。",
      en: "I handle filing, court appearances, evidence-gathering, asset preservation and enforcement inside China, and coordinate with your home-country counsel where needed.",
      es: "Yo me encargo dentro de China de demandar, comparecer, obtener pruebas, medidas cautelares y ejecución, y coordino con su abogado de origen cuando hace falta.",
      fr: "Je prends en charge en Chine la saisine, les plaidoiries, l'obtention de preuves, les mesures conservatoires et l'exécution, et je coordonne avec votre avocat d'origine si nécessaire.",
      de: "Ich übernehme in China Klage, Verhandlung, Beweiserhebung, Vermögenssicherung und Vollstreckung und stimme mich bei Bedarf mit Ihrem Anwalt im Heimatland ab.",
      ar: "أتولى داخل الصين رفع الدعوى والمرافعة وجمع الأدلة والحجز على الأموال والتنفيذ، وأنسّق عند الحاجة مع محاميك في بلدك."
    }
  },
  {
    cant: {
      zh: "翻译或中间人转述：沟通多一层转述，法律细节需要反复确认，关键判断容易在传递中走形。",
      en: "Translators or intermediaries: every extra layer of relay adds a step where legal nuance has to be checked again.",
      es: "Traductores o intermediarios: cada capa añadida obliga a reconfirmar los matices jurídicos.",
      fr: "Traducteurs ou intermédiaires : chaque couche supplémentaire oblige à revérifier les nuances juridiques.",
      de: "Übersetzer oder Mittelsmänner: Jede zusätzliche Ebene bedeutet, rechtliche Nuancen erneut abzugleichen.",
      ar: "المترجمون أو الوسطاء: كل طبقة إضافية تعني إعادة التحقق من الدقائق القانونية."
    },
    can: {
      zh: "我直接用中文或英文与你沟通，交付文件中英双语，责任链条清晰。",
      en: "I speak with you directly in Chinese or English and deliver documents in both, with a clear line of responsibility.",
      es: "Hablo con usted directamente en chino o inglés y entrego documentos en ambos idiomas, con responsabilidad clara.",
      fr: "Je communique directement avec vous en chinois ou en anglais et je livre les documents dans les deux langues, avec une responsabilité claire.",
      de: "Ich kommuniziere direkt auf Chinesisch oder Englisch und liefere Dokumente in beiden Sprachen — mit klarer Verantwortung.",
      ar: "أتواصل معك مباشرة بالصينية أو الإنجليزية وأسلّم المستندات باللغتين مع مسؤولية واضحة."
    }
  },
  {
    cant: {
      zh: "仅在中国境内执业的律师路径：熟悉中国程序与本地实务，服务与成果通常以中文交付。",
      en: "A China-domestic practice: deep familiarity with PRC procedure and local practice, with deliverables usually in Chinese.",
      es: "Un despacho puramente local en China: gran conocimiento del procedimiento chino y la práctica local, con entregables habitualmente en chino.",
      fr: "Un cabinet purement local en Chine : grande maîtrise de la procédure chinoise et des usages locaux, livrables généralement en chinois.",
      de: "Eine rein chinesische Kanzlei: sehr vertraut mit chinesischem Verfahren und lokaler Praxis, Ergebnisse meist auf Chinesisch.",
      ar: "مكتب محلي في الصين فقط: معرفة عميقة بالإجراءات الصينية والممارسة المحلية، والتسليم غالبًا بالصينية."
    },
    can: {
      zh: "我兼顾中国法律与跨境采购实务，交付中英双语版本，并用你熟悉的方式说明风险。",
      en: "I combine PRC law with cross-border sourcing practice, deliver in Chinese and English, and explain the risk in terms you already use.",
      es: "Combino el Derecho chino con la práctica del abastecimiento transfronterizo, entrego en chino e inglés y explico el riesgo en sus propios términos.",
      fr: "J'allie droit chinois et pratique des achats transfrontaliers, je livre en chinois et en anglais et j'explique le risque dans vos termes.",
      de: "Ich verbinde chinesisches Recht mit grenzüberschreitender Beschaffungspraxis, liefere auf Chinesisch und Englisch und erkläre das Risiko in Ihrer Sprache.",
      ar: "أجمع بين القانون الصيني وممارسة الشراء العابر للحدود، وأسلّم بالصينية والإنجليزية، وأشرح الخطر بالمصطلحات التي تعرفها."
    }
  },
  {
    cant: {
      zh: "线上查询平台：可以快速查到工商、涉诉等基础数据，数据的法律含义与可用性仍需专业判断。",
      en: "Online search platforms: fast access to basic registry and litigation data, whose legal meaning and usability still require professional judgement.",
      es: "Plataformas de consulta en línea: acceso rápido a datos básicos mercantiles y judiciales, cuyo significado jurídico y utilidad requieren aún un juicio profesional.",
      fr: "Plateformes de recherche en ligne : accès rapide aux données de registre et de contentieux, dont la portée juridique et l'exploitabilité demandent encore une appréciation professionnelle.",
      de: "Online-Rechercheplattformen: schneller Zugriff auf Register- und Verfahrensdaten, deren rechtliche Bedeutung und Verwertbarkeit weiterhin fachliche Bewertung erfordern.",
      ar: "منصات البحث الإلكترونية: وصول سريع إلى بيانات السجل التجاري والقضايا، لكن معناها القانوني وقابلية استخدامها تحتاجان إلى تقدير مهني."
    },
    can: {
      zh: "我出具带法律判断的尽调报告与律师函，可直接用于谈判、仲裁或诉讼。",
      en: "I deliver due-diligence reports and demand letters with legal conclusions, usable directly in negotiation, arbitration or litigation.",
      es: "Entrego informes de diligencia y requerimientos con conclusiones jurídicas, utilizables directamente en negociación, arbitraje o litigio.",
      fr: "Je remets des rapports de due diligence et des mises en demeure assortis de conclusions juridiques, directement utilisables en négociation, arbitrage ou contentieux.",
      de: "Ich liefere Due-Diligence-Berichte und Abmahnungen mit rechtlicher Bewertung — direkt einsetzbar in Verhandlung, Schiedsverfahren oder Prozess.",
      ar: "أسلّم تقارير فحص وإنذارات تتضمن حكمًا قانونيًا، تصلح مباشرة للتفاوض أو التحكيم أو التقاضي."
    }
  }
];

/* =========================================================
   追加文案层（I18N_EXT）：自查清单 + 常见问题
   独立对象 + Object.assign 合并，避免改动上方巨型 I18N 字面量
   ========================================================= */
const I18N_EXT = {
  zh: {
    navCheck: "自查清单", navFaq: "常见问题",
    chkEyebrow: "免费自查清单",
    chkTitle: "12 项自查：你的中国采购，风险卡在哪一步",
    chkSub: "先自查，再决定要不要请律师。以下 12 项是境外采购商最容易忽略、事后代价也最高的环节。答不上来的项目，就是需要重点加固的地方。",
    chkNote: "以上任何一项答不上来，都建议在付款或扩大订单之前，先做一次「供应商 + 合同」风险体检。",
    chkCtaBtn: "索取完整版清单（含处置建议）",
    chkCtaAlt: "或发邮件索取",
    faqEyebrow: "常见问题",
    faqTitle: "境外采购商最常问的 6 个问题",
    faqSub: "如果这里没有你的问题，欢迎通过 WhatsApp 或邮件直接问康雪崧律师。"
  },
  en: {
    navCheck: "Checklist", navFaq: "FAQ",
    chkEyebrow: "Free checklist",
    chkTitle: "12 checks: where is the risk in your China sourcing?",
    chkSub: "Check first, then decide whether you need a lawyer. These 12 points are what overseas buyers most often overlook — and where a mistake costs the most. Any point you cannot answer is a point worth reinforcing.",
    chkNote: "For any point you cannot answer, a supplier-and-contract risk review is worth doing before you pay or scale up.",
    chkCtaBtn: "Request the full checklist (with action steps)",
    chkCtaAlt: "Or request by email",
    faqEyebrow: "FAQ",
    faqTitle: "Six questions overseas buyers ask most",
    faqSub: "If your question is not here, ask Kang Xuesong directly on WhatsApp or by email."
  },
  es: {
    navCheck: "Lista", navFaq: "Preguntas",
    chkEyebrow: "Lista gratuita",
    chkTitle: "12 puntos: ¿dónde está el riesgo en su abastecimiento en China?",
    chkSub: "Primero revise, después decida si necesita un abogado. Estos 12 puntos son los que los compradores extranjeros suelen pasar por alto y donde un error cuesta más caro. Cada punto sin respuesta es un punto a reforzar.",
    chkNote: "Si no puede responder a alguno de estos puntos, conviene una revisión de riesgo de proveedor y contrato antes de pagar o ampliar pedidos.",
    chkCtaBtn: "Solicitar la lista completa (con pasos de acción)",
    chkCtaAlt: "O solicitarla por correo",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Seis preguntas que más hacen los compradores extranjeros",
    faqSub: "Si su pregunta no está aquí, pregúntele directamente a Kang Xuesong por WhatsApp o correo."
  },
  fr: {
    navCheck: "Liste", navFaq: "Questions",
    chkEyebrow: "Liste gratuite",
    chkTitle: "12 points : où se situe le risque dans vos achats en Chine ?",
    chkSub: "Vérifiez d'abord, décidez ensuite si vous avez besoin d'un avocat. Ces 12 points sont les plus souvent négligés par les acheteurs étrangers, et ceux où une erreur coûte le plus cher. Chaque point sans réponse est un point à renforcer.",
    chkNote: "Pour tout point sans réponse, un audit de risque fournisseur et contrat est utile avant de payer ou d'augmenter les volumes.",
    chkCtaBtn: "Demander la liste complète (avec les actions à mener)",
    chkCtaAlt: "Ou la demander par e-mail",
    faqEyebrow: "Questions fréquentes",
    faqTitle: "Six questions que posent le plus souvent les acheteurs étrangers",
    faqSub: "Si votre question n'y figure pas, posez-la directement à Kang Xuesong par WhatsApp ou e-mail."
  },
  de: {
    navCheck: "Checkliste", navFaq: "FAQ",
    chkEyebrow: "Kostenlose Checkliste",
    chkTitle: "12 Punkte: Wo liegt das Risiko bei Ihrem China-Einkauf?",
    chkSub: "Erst prüfen, dann entscheiden, ob Sie einen Anwalt brauchen. Diese 12 Punkte werden von ausländischen Einkäufern am häufigsten übersehen, und Fehler kosten hier am meisten. Jeder Punkt ohne Antwort ist ein Punkt zum Nachschärfen.",
    chkNote: "Für jeden Punkt ohne Antwort lohnt sich eine Risikoprüfung von Lieferant und Vertrag, bevor Sie zahlen oder Mengen erhöhen.",
    chkCtaBtn: "Vollständige Checkliste anfordern (mit Handlungsschritten)",
    chkCtaAlt: "Oder per E-Mail anfordern",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Sechs Fragen, die ausländische Einkäufer am häufigsten stellen",
    faqSub: "Wenn Ihre Frage hier nicht steht, fragen Sie Kang Xuesong direkt per WhatsApp oder E-Mail."
  },
  ar: {
    navCheck: "قائمة الفحص", navFaq: "الأسئلة",
    chkEyebrow: "قائمة فحص مجانية",
    chkTitle: "١٢ نقطة: أين يقع الخطر في شرائك من الصين؟",
    chkSub: "افحص أولًا، ثم قرر إن كنت تحتاج إلى محامٍ. هذه النقاط الاثنتا عشرة هي الأكثر إغفالًا من المشترين الأجانب، والأكثر تكلفة عند الخطأ. كل نقطة لا تجد لها جوابًا هي نقطة تستحق التقوية.",
    chkNote: "إذا لم تجد جوابًا لأي نقطة، فمن المفيد إجراء مراجعة مخاطر للمورّد والعقد قبل الدفع أو زيادة الكميات.",
    chkCtaBtn: "اطلب القائمة الكاملة (مع خطوات العمل)",
    chkCtaAlt: "أو اطلبها بالبريد الإلكتروني",
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "ستة أسئلة يطرحها المشترون الأجانب أكثر من غيرها",
    faqSub: "إن لم يكن سؤالك هنا، اسأل كانغ شيوسونغ مباشرة عبر واتساب أو البريد الإلكتروني."
  }
};
Object.keys(I18N_EXT).forEach(function (l) {
  if (I18N[l]) Object.assign(I18N[l], I18N_EXT[l]);
});

/* ---------- 12 项采购风险自查清单 ---------- */
const CHECKLIST = [
  {
    t: { zh: "供应商与资信", en: "Supplier and credit", es: "Proveedor y solvencia", fr: "Fournisseur et solvabilité", de: "Lieferant und Bonität", ar: "المورّد والملاءة" },
    items: [
      { zh: "签约前是否查过供应商的工商登记、股东、涉诉与失信记录？", en: "Have you checked the supplier's business registration, shareholders, litigation and credit records before signing?", es: "¿Ha verificado el registro mercantil, los socios, los litigios y los antecedentes de crédito del proveedor antes de firmar?", fr: "Avez-vous vérifié le registre du commerce, les associés, les litiges et les antécédents de crédit du fournisseur avant de signer ?", de: "Haben Sie vor Vertragsabschluss Handelsregister, Gesellschafter, Prozess- und Bonitätsdaten des Lieferanten geprüft?", ar: "هل تحققت قبل التوقيع من السجل التجاري للمورّد وشركائه والقضايا وسجل الائتمان؟" },
      { zh: "对方提供的营业执照、厂址与产能，是否与官方登记一致？", en: "Do the licence, factory address and capacity the supplier gave you match the official records?", es: "¿Coinciden la licencia, la dirección de la fábrica y la capacidad indicadas con los registros oficiales?", fr: "La licence, l'adresse de l'usine et la capacité annoncées correspondent-elles aux registres officiels ?", de: "Stimmen die angegebene Lizenz, Werksadresse und Kapazität mit den amtlichen Registern überein?", ar: "هل تتطابق الرخصة وعنوان المصنع والطاقة الإنتاجية مع السجلات الرسمية؟" },
      { zh: "是否存在同一实控人注册多家名称近似的公司（换壳风险）？", en: "Could the same owner be behind several similarly named companies, so the counterparty can be switched?", es: "¿Podría el mismo titular estar detrás de varias empresas con nombres similares (riesgo de cambio de sociedad)?", fr: "Le même dirigeant est-il derrière plusieurs sociétés aux noms proches, avec un risque de changement de coquille ?", de: "Steckt hinter mehreren ähnlich benannten Firmen derselbe Inhaber, sodass die Vertragspartei gewechselt werden kann?", ar: "هل يقف المالك نفسه خلف عدة شركات بأسماء متشابهة بحيث يمكن تغيير الطرف المتعاقد؟" }
    ]
  },
  {
    t: { zh: "合同与付款", en: "Contract and payment", es: "Contrato y pago", fr: "Contrat et paiement", de: "Vertrag und Zahlung", ar: "العقد والدفع" },
    items: [
      { zh: "合同是否约定了质量标准、验收方式与不合格品的处置办法？", en: "Does the contract define quality standards, the inspection method and how non-conforming goods are handled?", es: "¿El contrato define estándares de calidad, método de inspección y tratamiento de bienes no conformes?", fr: "Le contrat définit-il les normes de qualité, la méthode d'inspection et le traitement des produits non conformes ?", de: "Legt der Vertrag Qualitätsstandards, Prüfmethode und den Umgang mit nicht konformer Ware fest?", ar: "هل يحدد العقد معايير الجودة وطريقة الفحص وكيفية التعامل مع البضاعة غير المطابقة؟" },
      { zh: "付款节奏是否与生产、验货、发货节点挂钩，而非全额预付？", en: "Is payment tied to production, inspection and shipment milestones rather than paid in full upfront?", es: "¿Está el pago vinculado a hitos de producción, inspección y embarque en lugar de pagarse todo por adelantado?", fr: "Le paiement est-il lié aux étapes de production, d'inspection et d'expédition plutôt qu'un prépaiement intégral ?", de: "Ist die Zahlung an Produktions-, Prüfungs- und Versandmeilensteine gekoppelt statt einer vollen Vorauszahlung?", ar: "هل ترتبط الدفعات بمراحل الإنتاج والفحص والشحن بدلًا من الدفع الكامل مقدمًا؟" },
      { zh: "是否明确约定了争议解决方式、适用法律与管辖（仲裁或中国法院）？", en: "Are the dispute-resolution method, governing law and forum (arbitration or a Chinese court) clearly agreed?", es: "¿Están claramente pactados el método de solución de controversias, la ley aplicable y el foro (arbitraje o tribunal chino)?", fr: "Le mode de règlement des litiges, la loi applicable et la juridiction (arbitrage ou tribunal chinois) sont-ils clairement prévus ?", de: "Sind Streitbeilegungsart, anwendbares Recht und Gerichtsstand (Schiedsverfahren oder chinesisches Gericht) klar geregelt?", ar: "هل تم الاتفاق بوضوح على طريقة فضّ النزاع والقانون الواجب التطبيق والجهة المختصة (تحكيم أو محكمة صينية)؟" }
    ]
  },
  {
    t: { zh: "质量与交付", en: "Quality and delivery", es: "Calidad y entrega", fr: "Qualité et livraison", de: "Qualität und Lieferung", ar: "الجودة والتسليم" },
    items: [
      { zh: "是否安排第三方验货（如 SGS、BV）并约定明确的验收标准？", en: "Have you arranged third-party inspection such as SGS or BV, with clear acceptance criteria?", es: "¿Ha previsto una inspección por tercero (por ejemplo SGS o BV) con criterios de aceptación claros?", fr: "Avez-vous prévu une inspection par un tiers (par exemple SGS ou BV) avec des critères d'acceptation clairs ?", de: "Ist eine Drittprüfung etwa durch SGS oder BV mit klaren Abnahmekriterien vorgesehen?", ar: "هل تم الاتفاق على فحص طرف ثالث مثل SGS أو BV بمعايير قبول واضحة؟" },
      { zh: "交货期、迟延违约金与不可抗力条款是否清晰、可执行？", en: "Are the delivery date, late-delivery penalty and force-majeure clause clear and enforceable?", es: "¿Son claras y exigibles la fecha de entrega, la penalización por retraso y la cláusula de fuerza mayor?", fr: "Le délai de livraison, les pénalités de retard et la clause de force majeure sont-ils clairs et exécutables ?", de: "Sind Liefertermin, Verzugsstrafe und Force-Majeure-Klausel klar und durchsetzbar?", ar: "هل تاريخ التسليم وغرامة التأخير وشرط القوة القاهرة واضحة وقابلة للتنفيذ؟" },
      { zh: "往来邮件、订单、验货报告与变更记录是否完整留存作为证据？", en: "Are emails, orders, inspection reports and change records kept as evidence?", es: "¿Se conservan correos, pedidos, informes de inspección y cambios como prueba?", fr: "Les e-mails, commandes, rapports d'inspection et modifications sont-ils conservés comme preuves ?", de: "Werden E-Mails, Bestellungen, Prüfberichte und Änderungen als Beweismittel archiviert?", ar: "هل تُحفظ المراسلات والطلبات وتقارير الفحص وسجلات التعديل كأدلة؟" }
    ]
  },
  {
    t: { zh: "知识产权与合规", en: "IP and compliance", es: "Propiedad intelectual y cumplimiento", fr: "Propriété intellectuelle et conformité", de: "Schutzrechte und Compliance", ar: "الملكية الفكرية والامتثال" },
    items: [
      { zh: "商标是否已在中国注册，或至少在海关办理了知识产权备案？", en: "Is your trademark registered in China, or at least recorded with China Customs?", es: "¿Está su marca registrada en China o al menos inscrita ante la Aduana china?", fr: "Votre marque est-elle déposée en Chine, ou au moins enregistrée auprès des douanes chinoises ?", de: "Ist Ihre Marke in China eingetragen oder zumindest beim chinesischen Zoll hinterlegt?", ar: "هل علامتك التجارية مسجلة في الصين أو على الأقل مسجلة لدى الجمارك الصينية؟" },
      { zh: "产品是否涉及中国出口管制、强制认证（CCC）或关税归类风险？", en: "Does the product involve Chinese export controls, mandatory certification such as CCC, or tariff-classification risk?", es: "¿El producto implica controles de exportación chinos, certificación obligatoria (CCC) o riesgo de clasificación arancelaria?", fr: "Le produit relève-t-il de contrôles à l'exportation chinois, d'une certification obligatoire (CCC) ou d'un risque de classement tarifaire ?", de: "Betrifft das Produkt chinesische Ausfuhrkontrollen, Pflichtzertifizierung wie CCC oder Einreihungsrisiken?", ar: "هل يخضع المنتج لضوابط التصدير الصينية أو شهادة إلزامية مثل CCC أو مخاطر التصنيف الجمركي؟" },
      { zh: "遇到侵权、商标抢注或海关扣货时，是否知道处置时限与可行路径？", en: "If infringement, trademark squatting or a customs hold occurs, do you know the deadlines and the available routes?", es: "Ante una infracción, un registro de mala fe o una retención aduanera, ¿conoce los plazos y las vías disponibles?", fr: "En cas de contrefaçon, de dépôt frauduleux ou de retenue douanière, connaissez-vous les délais et les voies possibles ?", de: "Kennen Sie bei Rechtsverletzung, Markenpiraterie oder Zollbeschlagnahme die Fristen und die möglichen Wege?", ar: "عند وقوع تقليد أو تسجيل بسوء نية أو حجز جمركي، هل تعرف المهل والمسارات المتاحة؟" }
    ]
  }
];

/* ---------- 常见问题 ---------- */
const FAQ = [
  {
    q: { zh: "你在哪里执业？可以远程合作吗？", en: "Where do you practise? Can we work remotely?", es: "¿Dónde ejerce? ¿Podemos trabajar a distancia?", fr: "Où exercez-vous ? Pouvons-nous travailler à distance ?", de: "Wo sind Sie zugelassen? Können wir remote zusammenarbeiten?", ar: "أين تمارس المهنة؟ هل يمكننا العمل عن بُعد؟" },
    a: { zh: "我在深圳执业，属上海功承瀛泰（深圳）律师事务所。日常沟通与文件往来可以全程线上，通过邮件、WhatsApp 或视频会议进行；需要在中国境内立案、出庭、调查取证、财产保全与强制执行的环节，由我们在现场办理。", en: "I practise in Shenzhen at Wintell and Co (Shenzhen). Day-to-day communication and document exchange can run entirely online, by email, WhatsApp or video call. Steps that must happen inside China, such as filing a case, appearing in court, obtaining evidence, asset preservation and enforcement, are handled by us on the ground.", es: "Ejerzo en Shenzhen, en Wintell and Co (Shenzhen). La comunicación diaria y el intercambio de documentos pueden hacerse íntegramente en línea, por correo, WhatsApp o videollamada. Los trámites que deben realizarse dentro de China, como demandar, comparecer, obtener pruebas, medidas cautelares y ejecución, los llevamos a cabo nosotros sobre el terreno.", fr: "J'exerce à Shenzhen, au sein de Wintell and Co (Shenzhen). Les échanges courants et les documents peuvent se faire entièrement en ligne, par e-mail, WhatsApp ou visioconférence. Les étapes qui doivent avoir lieu en Chine, comme saisir une juridiction, plaider, obtenir des preuves, solliciter des mesures conservatoires et exécuter, sont assurées par nous sur place.", de: "Ich bin in Shenzhen bei Wintell and Co (Shenzhen) zugelassen. Die laufende Kommunikation und der Dokumentenaustausch können vollständig online erfolgen, per E-Mail, WhatsApp oder Videokonferenz. Schritte, die in China stattfinden müssen, etwa Klage, Verhandlung, Beweiserhebung, Vermögenssicherung und Vollstreckung, übernehmen wir vor Ort.", ar: "أمارس المهنة في شنتشن ضمن مكتب وينتل آند كو (شنتشن). يمكن أن تجري المراسلات اليومية وتبادل المستندات بالكامل عن بُعد عبر البريد أو واتساب أو مكالمة مرئية. أما الخطوات التي يجب تنفيذها داخل الصين، مثل رفع الدعوى والمرافعة وجمع الأدلة والحجز على الأموال والتنفيذ، فنتولاها ميدانيًا." }
  },
  {
    q: { zh: "下单前能知道收费吗？", en: "Will I know the fee before I commit?", es: "¿Sabré el costo antes de contratar?", fr: "Connaîtrai-je les honoraires avant de m'engager ?", de: "Erfahre ich die Kosten vor der Beauftragung?", ar: "هل أعرف الأتعاب قبل التعاقد؟" },
    a: { zh: "可以。标准化服务（合同审核、供应商尽调、律师函等）在签约前提供书面固定报价；争议解决等个案化服务按计时收费，先出方案与预算再决定是否启动；长期需求可采用年度顾问模式。报价为含税价，差旅、公证、翻译等第三方费用实报实销。", en: "Yes. Standardised services such as contract review, supplier due diligence and demand letters come with a fixed written quote before you commit. Case-specific work such as dispute resolution is billed by time, with a scope and budget first so you can decide whether to proceed. For ongoing needs we offer an annual retainer. Quotes are tax-inclusive; travel, notarisation, translation and other third-party costs are reimbursed at cost.", es: "Sí. Los servicios estandarizados, como revisión de contratos, diligencia de proveedores y requerimientos, incluyen una cotización fija por escrito antes de contratar. Los asuntos individuales, como la resolución de controversias, se facturan por tiempo, con un plan y presupuesto previos para que decida si iniciar. Para necesidades continuas ofrecemos una retainer anual. Las cotizaciones incluyen impuestos; los gastos de viaje, notariales, de traducción y otros de terceros se reembolsan a costo.", fr: "Oui. Les prestations standardisées, comme la revue de contrat, la due diligence fournisseur et les mises en demeure, font l'objet d'un devis forfaitaire écrit avant tout engagement. Les dossiers spécifiques, comme le règlement des litiges, sont facturés au temps, avec un périmètre et un budget préalables vous permettant de décider. Pour les besoins récurrents, un forfait annuel est possible. Les devis s'entendent taxes comprises ; les frais de déplacement, d'authentification, de traduction et autres frais de tiers sont refacturés au coût réel.", de: "Ja. Für standardisierte Leistungen wie Vertragsprüfung, Lieferanten-Due-Diligence und Abmahnschreiben erhalten Sie vor der Beauftragung ein schriftliches Festpreisangebot. Einzelfälle wie Streitbeilegung werden nach Zeitaufwand abgerechnet, mit vorherigem Konzept und Budget, damit Sie entscheiden können. Für laufenden Bedarf bieten wir einen Jahres-Retainer. Angebote verstehen sich inklusive Steuern; Reise-, Notar-, Übersetzungs- und sonstige Fremdkosten werden zum Selbstkostenpreis weitergegeben.", ar: "نعم. الخدمات المعيارية مثل مراجعة العقود وفحص المورّد والإنذارات القانونية تُقدَّم بعرض سعر ثابت مكتوب قبل التعاقد. أما الأعمال الفردية مثل فضّ النزاعات فتُحسب بالساعة، مع خطة وموازنة مسبقتين لتقرر ما إذا كنت تريد المضي. وللاحتياجات المستمرة يمكن الاتفاق على أتعاب سنوية. الأسعار تشمل الضريبة، وتُحتسب مصاريف السفر والتوثيق والترجمة ومصاريف الأطراف الثالثة بالتكلفة الفعلية." }
  },
  {
    q: { zh: "我订单不大，值得请律师吗？", en: "My order is small. Is a lawyer worth it?", es: "Mi pedido es pequeño, ¿vale la pena un abogado?", fr: "Ma commande est modeste. Cela vaut-il un avocat ?", de: "Meine Bestellung ist klein. Lohnt sich ein Anwalt?", ar: "طلبي صغير: هل يستحق الأمر محاميًا؟" },
    a: { zh: "值得关注的是风险敞口，而不是订单金额。一笔全额预付、一批货不对板，或一个被抢注的商标，损失往往会超过法律服务本身的费用。我们提供从单次合同审核到常年顾问的不同层级服务，可以按需要选择。", en: "What matters is the risk exposure, not the order size. A full prepayment, a shipment that does not match the specification, or a trademark registered by someone else can cost more than the legal service itself. We offer several levels, from a single contract review to an annual retainer, so you can choose what fits.", es: "Lo relevante es la exposición al riesgo, no el tamaño del pedido. Un pago total por adelantado, un lote que no corresponde a la especificación o una marca registrada por un tercero pueden costar más que el propio servicio jurídico. Ofrecemos varios niveles, desde una revisión puntual de contrato hasta una retainer anual.", fr: "L'important est l'exposition au risque, non le montant de la commande. Un prépaiement intégral, une marchandise non conforme ou une marque déposée par un tiers peuvent coûter plus cher que la prestation juridique elle-même. Nous proposons plusieurs niveaux, de la revue ponctuelle de contrat au forfait annuel.", de: "Entscheidend ist die Risikohöhe, nicht die Bestellgröße. Eine volle Vorauszahlung, eine nicht spezifikationsgerechte Lieferung oder eine von Dritten angemeldete Marke können teurer sein als die Rechtsberatung selbst. Wir bieten mehrere Stufen, von der einmaligen Vertragsprüfung bis zum Jahres-Retainer.", ar: "المهم هو حجم التعرّض للخطر لا قيمة الطلب. فالدفع الكامل مقدمًا أو شحنة غير مطابقة للمواصفات أو علامة تجارية سجّلها غيرك قد تكلّف أكثر من الأتعاب القانونية نفسها. نقدم مستويات متعددة، من مراجعة عقد واحدة إلى أتعاب سنوية." }
  },
  {
    q: { zh: "合作顺利的话，还需要律师吗？", en: "If things are going well, do I still need a lawyer?", es: "Si todo va bien, ¿sigo necesitando un abogado?", fr: "Si tout se passe bien, ai-je encore besoin d'un avocat ?", de: "Wenn alles gut läuft, brauche ich dann noch einen Anwalt?", ar: "إذا سارت الأمور جيدًا، هل أحتاج محاميًا؟" },
    a: { zh: "合作顺利时，律师的作用是把商业安排落实到合同、知识产权与合规上，让关系更稳、更可预期；一旦出现迟延、质量问题或对方调整公司主体，提前准备过的一方，手里的证据更完整、可选方案也更多。多数客户选择的是预防与备用方案并行。", en: "When things go well, the lawyer's role is to translate your commercial arrangement into the contract, IP and compliance layers, so the relationship is more stable and predictable. If delay, quality issues or a change of counterparty entity arise, the party with preparation in place holds better evidence and more options. Most clients choose prevention and a fallback plan in parallel.", es: "Cuando todo va bien, la función del abogado es trasladar el acuerdo comercial al contrato, la propiedad intelectual y el cumplimiento, para que la relación sea más estable y previsible. Si surgen retrasos, problemas de calidad o un cambio de sociedad contraparte, quien se preparó antes tiene mejores pruebas y más opciones. La mayoría de los clientes combinan prevención y plan alternativo.", fr: "Quand tout va bien, le rôle de l'avocat est de traduire votre accord commercial dans le contrat, la propriété intellectuelle et la conformité, afin de rendre la relation plus stable et prévisible. En cas de retard, de problème de qualité ou de changement de société cocontractante, la partie préparée dispose de meilleures preuves et de plus d'options. La plupart des clients associent prévention et solution de repli.", de: "Wenn es gut läuft, übersetzt der Anwalt Ihre kaufmännische Vereinbarung in Vertrag, Schutzrechte und Compliance, damit die Beziehung stabiler und planbarer wird. Bei Verzug, Qualitätsproblemen oder einem Wechsel der Vertragspartei hat die vorbereitete Seite bessere Beweise und mehr Optionen. Die meisten Mandanten wählen Prävention und Rückfallplan parallel.", ar: "عندما تسير الأمور جيدًا، يكون دور المحامي ترجمة ترتيبك التجاري إلى العقد والملكية الفكرية والامتثال، لتصبح العلاقة أكثر استقرارًا وقابلية للتوقع. وإذا حدث تأخير أو خلل في الجودة أو تغيّر الكيان المتعاقد، فإن من استعد مسبقًا يملك أدلة أفضل وخيارات أكثر. معظم العملاء يجمعون بين الوقاية وخطة بديلة." }
  },
  {
    q: { zh: "语言不通怎么办？文件和证据怎么处理？", en: "What about language? How are documents handled?", es: "¿Y el idioma? ¿Cómo se gestionan los documentos?", fr: "Et la langue ? Comment sont traités les documents ?", de: "Und die Sprache? Wie werden Dokumente gehandhabt?", ar: "وماذا عن اللغة؟ كيف تُعالج المستندات؟" },
    a: { zh: "我用中文和英文直接与你沟通，不需要第三方转述；交付文件可提供中英文版本。中国境内的工商与涉诉信息查询、公证认证、翻译与送达等事项，由我们协调办理，你不需要另找当地机构对接。", en: "I communicate with you directly in Chinese and English, with no third party relaying messages, and deliverables can be issued in both languages. Business-registry and litigation-record searches, notarisation and legalisation, translation and service of documents inside China are coordinated by us, so you do not need to find a local provider yourself.", es: "Me comunico con usted directamente en chino e inglés, sin terceros que retransmitan, y los entregables pueden emitirse en ambos idiomas. Las consultas de registros mercantiles y judiciales, la legalización, la traducción y las notificaciones dentro de China las coordinamos nosotros, sin que usted deba buscar un proveedor local.", fr: "Je communique avec vous directement en chinois et en anglais, sans intermédiaire, et les livrables peuvent être établis dans les deux langues. Les recherches au registre du commerce et au registre des litiges, l'authentification, la traduction et la signification en Chine sont coordonnées par nos soins, sans que vous ayez à chercher un prestataire local.", de: "Ich kommuniziere direkt auf Chinesisch und Englisch, ohne Zwischeninstanz, und Ergebnisse können in beiden Sprachen erstellt werden. Handels- und Prozessregisterauskünfte, Beglaubigung und Legalisation, Übersetzung und Zustellung in China koordinieren wir, sodass Sie keinen lokalen Dienstleister suchen müssen.", ar: "أتواصل معك مباشرة بالصينية والإنجليزية دون وسيط، ويمكن إصدار المستندات باللغتين. أما الاستعلام من السجلات التجارية والقضائية والتوثيق والتصديق والترجمة والتبليغ داخل الصين فنتولى تنسيقها، دون أن تحتاج إلى البحث عن جهة محلية." }
  },
  {
    q: { zh: "已经出现纠纷了，你们能做什么？", en: "There is already a dispute. What can you do?", es: "Ya hay una controversia. ¿Qué pueden hacer?", fr: "Un litige est déjà né. Que pouvez-vous faire ?", de: "Es gibt bereits Streit. Was können Sie tun?", ar: "هناك نزاع قائم بالفعل. ماذا يمكنكم أن تفعلوا؟" },
    a: { zh: "通常的路径是：发律师函、对账与谈判、申请财产保全，然后提起诉讼或仲裁，并跟进裁判文书的强制执行。不同阶段可选的手段不同，越早介入，方案越多。具体结果取决于事实、证据与法律适用，我们会在评估后告知可行的方案、时间预期与费用。", en: "The usual route is a demand letter, reconciliation and negotiation, an application for asset preservation, then litigation or arbitration, followed by enforcement of the award or judgment. The tools available differ by stage, and earlier involvement generally means more options. The outcome depends on the facts, the evidence and the applicable law; after an assessment we set out the feasible plan, timeline and cost.", es: "La vía habitual es requerimiento, conciliación de cuentas y negociación, solicitud de medidas cautelares, y después litigio o arbitraje, con la posterior ejecución de la resolución. Los instrumentos disponibles varían según la fase y, cuanto antes se intervenga, más opciones hay. El resultado depende de los hechos, las pruebas y el derecho aplicable; tras la evaluación le indicaremos el plan viable, los plazos y el costo.", fr: "La voie habituelle est la mise en demeure, la conciliation des comptes et la négociation, puis une demande de mesures conservatoires, ensuite le contentieux ou l'arbitrage, avec l'exécution de la décision. Les leviers diffèrent selon l'étape et, plus l'intervention est précoce, plus les options sont nombreuses. Le résultat dépend des faits, des preuves et du droit applicable ; après évaluation, nous vous indiquons le plan envisageable, les délais et le coût.", de: "Der übliche Weg ist ein Abmahnschreiben, Kontenabgleich und Verhandlung, dann ein Antrag auf Vermögenssicherung, anschließend Klage oder Schiedsverfahren und danach die Vollstreckung der Entscheidung. Die Mittel unterscheiden sich je nach Phase, und je früher die Mitwirkung beginnt, desto mehr Optionen bestehen. Das Ergebnis hängt von Sachverhalt, Beweisen und anwendbarem Recht ab; nach der Prüfung nennen wir Ihnen den machbaren Plan, den Zeitrahmen und die Kosten.", ar: "المسار المعتاد هو: إنذار قانوني، ثم تسوية الحسابات والتفاوض، ثم طلب الحجز على الأموال، ثم رفع الدعوى أو التحكيم، مع متابعة تنفيذ الحكم أو القرار. تختلف الوسائل المتاحة بحسب المرحلة، وكلما كان التدخل أبكر كانت الخيارات أوسع. أما النتيجة فتعتمد على الوقائع والأدلة والقانون الواجب التطبيق، وبعد التقييم نوضح لك الخطة الممكنة والمدى الزمني والتكلفة." }
  }
];

/* =========================================================
   渲染逻辑
   ========================================================= */
let currentLang = "zh";

function pick(obj, lang){ return (obj && obj[lang]) ? obj[lang] : (obj && obj.en) ? obj.en : ""; }

function applyI18n(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.title = dict.pageTitle || document.title;
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderCatalogue(lang);
  renderPains(lang);
  renderAdv(lang);
  renderGap(lang);
  renderChecklist(lang);
  renderFaq(lang);
}

/* ---------- 渲染：八大痛点 ↔ 八大板块 ---------- */
function renderPains(lang){
  const el = document.getElementById("painsGrid");
  if(!el) return;
  const d = I18N[lang] || I18N.en;
  el.innerHTML = PAINS.map(p => {
    const cat = CATALOGUE.filter(c => c.id === p.cat)[0];
    const catTitle = cat ? pick(cat.title, lang) : "";
    const no = cat ? (lang === "zh" ? cat.noZh : locNum(lang, cat.noEn)) : "";
    return `<div class="pain-card">
      <div class="pain-no">${no}</div>
      <p class="pain-q">${pick(p.pain, lang)}</p>
      <p class="pain-a">${pick(p.fix, lang)}</p>
      <a class="pain-link" href="#cat-${p.cat}">${d.painJump}：${catTitle} &rsaquo;</a>
    </div>`;
  }).join("");
}

/* ---------- 渲染：四大优势 ---------- */
function renderAdv(lang){
  const el = document.getElementById("advGrid");
  if(!el) return;
  el.innerHTML = ADV.map((a, i) => `<div class="adv-card">
      <div class="adv-ico">${locNum(lang, String(i + 1).padStart(2, "0"))}</div>
      <h3 class="adv-title">${pick(a.t, lang)}</h3>
      <p class="adv-desc">${pick(a.d, lang)}</p>
    </div>`).join("");
}

/* ---------- 渲染：服务路径说明 ---------- */
function renderGap(lang){
  const el = document.getElementById("gapList");
  if(!el) return;
  const d = I18N[lang] || I18N.en;
  el.innerHTML = GAP.map(g => `<div class="gap-row">
      <div class="gap-cant"><span class="gap-tag">${d.gapCant}</span><p>${pick(g.cant, lang)}</p></div>
      <div class="gap-can"><span class="gap-tag">${d.gapCan}</span><p>${pick(g.can, lang)}</p></div>
    </div>`).join("");
}

/* ---------- 渲染：12 项采购风险自查清单 ---------- */
function renderChecklist(lang){
  const el = document.getElementById("checklistGrid");
  if(!el) return;
  el.innerHTML = CHECKLIST.map((g, gi) => `<div class="chk-card">
      <h4><span class="chk-no">${locNum(lang, String(gi + 1).padStart(2, "0"))}</span><span>${pick(g.t, lang)}</span></h4>
      <ul>${g.items.map(it => `<li>${pick(it, lang)}</li>`).join("")}</ul>
    </div>`).join("");
}

/* ---------- 渲染：常见问题 ---------- */
function renderFaq(lang){
  const el = document.getElementById("faqList");
  if(!el) return;
  el.innerHTML = FAQ.map(f => `<details class="faq-item">
      <summary>${pick(f.q, lang)}</summary>
      <div class="faq-a">${pick(f.a, lang)}</div>
    </details>`).join("");
}

function renderCatalogue(lang){
  const catNav = document.getElementById("catnavContainer");
  const catEl = document.getElementById("catalogue");
  if(!catNav || !catEl) return;
  /* category quick nav */
  catNav.innerHTML = CATALOGUE.map((c, i) =>
    `<a href="#cat-${c.id}" data-cat="${c.id}">${i18nNum(lang, i+1)}. ${pick(c.title, lang)}</a>`
  ).join("");
  /* body */
  const head = COL_HEAD[lang] || COL_HEAD.en;
  catEl.innerHTML = CATALOGUE.map(c => {
    const title = pick(c.title, lang);
    const sub = pick(c.sub, lang);
    const rows = c.items.map(it => {
      const feeKey = it.fee;
      const feeLabel = (FEES_LABEL[lang] && FEES_LABEL[lang][feeKey]) || "";
      const noLbl = locNum(lang, it.no);
      return `<tr>
        <td class="svc-no">${noLbl}</td>
        <td class="svc-name" data-no="${noLbl}">${pick(it.name, lang)}${lang==='zh' && it.name.en ? '<small>'+it.name.en+'</small>' : ''}</td>
        <td data-label="${head.scope}">${pick(it.scope, lang)}</td>
        <td data-label="${head.del}">${pick(it.del, lang)}</td>
        <td class="svc-fee" data-label="${head.fee}"><span class="fee-pill">${feeLabel}</span></td>
      </tr>`;
    }).join("");
    return `<div class="cat-block" id="cat-${c.id}">
      <div class="cat-head">
        <div class="cat-no">${lang==='zh' ? c.noZh : c.noEn}</div>
        <div class="cat-title"><h3>${title}</h3><p>${sub}</p></div>
      </div>
      <table class="svc">
        <thead><tr>
          <th>${head.no}</th><th>${head.name}</th><th>${head.scope}</th><th>${head.del}</th><th>${head.fee}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join("");
}

function i18nNum(lang, n){
  if(lang === 'ar'){ const ar=['١','٢','٣','٤','٥','٦','٧','٨']; return ar[n-1]||n; }
  return n;
}

/* 数字本地化：阿拉伯语使用阿拉伯-印度数字（含 "1.1" 这类编号） */
function locNum(lang, s){
  if(lang !== 'ar') return s;
  const map = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'};
  return String(s).replace(/[0-9]/g, d => map[d]);
}

/* ---------- init ---------- */
(function(){
  const sel = document.getElementById("languageSelect");
  /* 语言持久化 + 默认(浏览器非中文则英文) */
  const saved = localStorage.getItem("fbl_lang");
  const browserLang = (navigator.language || "").toLowerCase().slice(0,2);
  const def = saved || (browserLang === "zh" ? "zh" : "en");
  currentLang = ["zh","en","es","fr","de","ar"].includes(def) ? def : "en";
  sel.value = currentLang;
  applyI18n(currentLang);
  sel.addEventListener("change", () => {
    currentLang = sel.value;
    localStorage.setItem("fbl_lang", currentLang);
    applyI18n(currentLang);
  });
  /* scroll spy for category chips */
  const blocks = CATALOGUE.map(c => document.getElementById("cat-"+c.id));
  const links = document.querySelectorAll("#catnavContainer a");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(en.isIntersecting){
        links.forEach(l => l.classList.toggle("active", l.getAttribute("data-cat") === en.target.id.replace("cat-","")));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  blocks.forEach(b => b && spy.observe(b));
  /* to top + 移动端粘性导航栏自动收起（向下滚动隐藏，向上滚动即现） */
  const toTop = document.getElementById("toTop");
  const headerEl = document.querySelector("header");
  let lastY = window.scrollY, ticking = false, suppressHideUntil = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    toTop.classList.toggle("show", y > 600);
    if(!ticking){
      ticking = true;
      window.requestAnimationFrame(() => {
        if(headerEl){
          const atBottom = y + window.innerHeight >= document.body.scrollHeight - 80;
          const down = y > lastY && y > 220 && Date.now() > suppressHideUntil;
          if(atBottom) headerEl.classList.remove("nav-hidden");
          else headerEl.classList.toggle("nav-hidden", down);
        }
        lastY = y;
        ticking = false;
      });
    }
  }, { passive: true });
  toTop.addEventListener("click", () => {
    if(headerEl) headerEl.classList.remove("nav-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  /* 点击锚点时保持导航栏可见，避免跳转后标题被遮挡 */
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if(a){
      suppressHideUntil = Date.now() + 1000;
      if(headerEl) headerEl.classList.remove("nav-hidden");
    }
  });
})();
