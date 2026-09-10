/* =========================================================
   familybondlaw.com — 康雪崧律师团队 · 外国采购商中国法律服务
   六语言切换 (zh/en/es/fr/de/ar) + 服务目录渲染 + WhatsApp
   数据结构参考 spbuds.com：select + data-i18n + translations
   ========================================================= */

/* ---------- 通用 UI 文案翻译 ---------- */
const I18N = {
  zh: {
    pageTitle: "外国采购商中国法律服务 | 康雪崧律师团队 · 功承瀛泰深圳",
    brandName: "康雪崧律师团队<b> · 功承瀛泰</b>",
    brandSub: "跨境采购法律服务 · 中国 · 深圳",
    navServices: "服务清单", navAbout: "关于我们", navFees: "收费模式", navContact: "联系我们",
    heroEyebrow: "外国采购商 · 中国法律服务清单",
    heroTitle1: "外国采购商", heroTitle2: "中国法律服务清单",
    heroSub: "从供应商尽职调查到采购合同、货款安全、知识产权保护、贸易合规与争议解决——康雪崧律师团队依托功承瀛泰全国网络，为境外采购商提供全链条、中英双语的在地法律支持。",
    heroEn: "Kang Xuesong Team · Wintell & Co (Shenzhen) — trusted legal counsel for overseas buyers sourcing from China.",
    btnCatalogue: "浏览服务清单",
    heroCardTag: "为什么选择我们",
    why1: "中英文双语服务 · Bilingual (CN/EN) counsel",
    why2: "粤港澳大湾区区位 · 深圳办公室毗邻香港",
    why3: "全国 18 家办公室协同交付",
    why4: "HFW（英国）· 新加坡联营跨境网络",
    why5: "标准化产品 · 固定费用 · 透明报价",
    why6: "海事海商 / 贸易合规 / 知产专家团队支持",
    tr1s: "家", tr2s: "名", tr3n: "双",
    tr1: "全国办公室", tr2: "专业人员", tr3: "语言能力", tr4: "深圳分所设立",
    cataEyebrow: "服务目录", cataTitle: "八大板块 · 覆盖采购全流程", cataSub: "每一项服务均可在签约前获得书面报价，交付成果可提供英文版本。点击上方板块快速跳转。",
    abEyebrow: "关于我们", abTitle: "关于我们",
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
    kBio1: "康雪崧律师，2014 年起执业，具有中国内地与香港跨境法律服务的复合背景，长期为境内外企业及个人客户提供中英文双语法律服务，深耕涉港涉外法律业务，兼具公司治理、合同纠纷与企业法律顾问的丰富实务经验。",
    kBio2: "其服务产品曾获深圳市律师协会创新大赛二等奖（2023）与三等奖（2026）。涉外采购法律服务由其团队牵头，并联合全所海事海商、跨境合规、知识产权等专业团队协同交付。",
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
    footDisclaimer: "本网站及其内容仅供服务介绍之用，不构成法律意见；具体权利义务以双方签署的委托合同为准。"
  },
  en: {
    pageTitle: "Legal Services for Overseas Buyers in China | Kang Xuesong Team · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Cross-border Sourcing Legal Services · Shenzhen, China",
    navServices: "Services", navAbout: "About Us", navFees: "Fee Models", navContact: "Contact",
    heroEyebrow: "Legal Service Catalogue for Overseas Buyers",
    heroTitle1: "Legal Services for", heroTitle2: "Overseas Buyers in China",
    heroSub: "From supplier due diligence to purchase contracts, payment security, IP protection, trade compliance and dispute resolution — the Kang Xuesong Team, backed by Wintell & Co's national network, provides full-chain, bilingual on-the-ground legal support for overseas buyers.",
    heroEn: "康雪崧律师团队 · 上海功承瀛泰（深圳）律师事务所",
    btnCatalogue: "Browse Services",
    heroCardTag: "Why us",
    why1: "Bilingual counsel (Chinese & English)",
    why2: "Shenzhen office next to Hong Kong in the GBA",
    why3: "Coordinated delivery across 18 national offices",
    why4: "Associated network: HFW (UK) & a Singapore firm",
    why5: "Standardised products · fixed fees · transparent quotes",
    why6: "Maritime / trade compliance / IP specialist teams",
    tr1s: "Offices", tr2s: "Professionals", tr3n: "2",
    tr1: "National offices", tr2: "Professionals", tr3: "Languages", tr4: "Shenzhen office since",
    cataEyebrow: "Service Catalogue", cataTitle: "Eight Sections Covering the Full Sourcing Journey", cataSub: "Written quotes are available before engagement for every service; deliverables can be provided in English. Use the chips above to jump to a section.",
    abEyebrow: "About Us", abTitle: "About Us",
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
    kBio1: "Admitted to practise in 2014, Kang Xuesong has a blended China-mainland/Hong Kong cross-border practice background and has long served domestic and overseas corporate and individual clients bilingually. She focuses on Hong Kong-related and cross-border matters, with solid experience in corporate governance, commercial disputes and corporate legal counsel.",
    kBio2: "Her service products won 2nd prize (2023) and 3rd prize (2026) in the Shenzhen Lawyers Association Innovation Competition. Cross-border sourcing services under this catalogue are led by her team and delivered in collaboration with the firm's maritime, trade compliance and IP teams nationwide.",
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
    footDisclaimer: "This website and its content are for service introduction only and do not constitute legal advice; rights and obligations are governed by the engagement agreement signed by the parties."
  },
  es: {
    pageTitle: "Servicios Legales para Compradores Internacionales en China | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Servicios legales transfronterizos · Shenzhen, China",
    navServices: "Servicios", navAbout: "Nosotros", navFees: "Honorarios", navContact: "Contacto",
    heroEyebrow: "Catálogo de servicios legales para compradores internacionales",
    heroTitle1: "Servicios legales para", heroTitle2: "compradores internacionales en China",
    heroSub: "Desde la diligencia debida de proveedores hasta contratos de compra, seguridad de pagos, protección de propiedad intelectual, cumplimiento comercial y resolución de disputas — el equipo de Kang Xuesong, con la red nacional de Wintell & Co, ofrece apoyo legal integral y bilingüe para compradores en el extranjero.",
    heroEn: "Kang Xuesong Team · Wintell & Co (Shenzhen) — asesoría legal de confianza para compradores internacionales.",
    btnCatalogue: "Ver Servicios",
    heroCardTag: "Por qué nosotros",
    why1: "Asesoría bilingüe (chino e inglés)",
    why2: "Oficina en Shenzhen, junto a Hong Kong (Gran Bahía)",
    why3: "Entrega coordinada en 18 oficinas nacionales",
    why4: "Red asociada: HFW (Reino Unido) y firma de Singapur",
    why5: "Productos estandarizados · tarifas fijas · presupuestos transparentes",
    why6: "Equipos especializados en marítimo, comercio y propiedad intelectual",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Oficinas nacionales", tr2: "Profesionales", tr3: "Idiomas", tr4: "Oficina de Shenzhen desde",
    cataEyebrow: "Catálogo", cataTitle: "Ocho secciones para todo el proceso de compra", cataSub: "Cada servicio cuenta con presupuesto escrito antes del encargo; los entregables pueden emitirse en inglés.",
    abEyebrow: "Nosotros", abTitle: "Sobre nosotros",
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
    kBio1: "Admitida a ejercer en 2014, Kang Xuesong cuenta con experiencia transfronteriza entre China continental y Hong Kong, y atiende en dos idiomas a clientes corporativos e individuales. Se centra en asuntos relacionados con Hong Kong y transfronterizos, con sólida experiencia en gobierno corporativo, disputas comerciales y asesoría legal empresarial.",
    kBio2: "Sus productos de servicio obtuvieron el 2.º premio (2023) y el 3.er premio (2026) del Concurso de Innovación de la Asociación de Abogados de Shenzhen. Los servicios de este catálogo los lidera su equipo con la colaboración de los equipos nacionales de marítimo, cumplimiento comercial y propiedad intelectual.",
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
    footDisclaimer: "Este sitio y su contenido solo sirven como presentación de servicios y no constituyen asesoramiento legal; los derechos y obligaciones se rigen por el contrato firmado."
  },
  fr: {
    pageTitle: "Services Juridiques pour Acheteurs Internationaux en Chine | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Services juridiques transfrontaliers · Shenzhen, Chine",
    navServices: "Services", navAbout: "À propos", navFees: "Honoraires", navContact: "Contact",
    heroEyebrow: "Catalogue de services juridiques pour acheteurs internationaux",
    heroTitle1: "Services juridiques pour", heroTitle2: "acheteurs internationaux en Chine",
    heroSub: "De la due diligence fournisseur aux contrats d'achat, sécurité des paiements, protection de la propriété intellectuelle, conformité commerciale et règlement des litiges — l'équipe Kang Xuesong, appuyée par le réseau national de Wintell & Co, offre un accompagnement juridique complet et bilingue aux acheteurs étrangers.",
    heroEn: "Kang Xuesong Team · Wintell & Co (Shenzhen) — conseil juridique de confiance pour les acheteurs internationaux.",
    btnCatalogue: "Voir les services",
    heroCardTag: "Pourquoi nous",
    why1: "Conseil bilingue (chinois et anglais)",
    why2: "Bureau à Shenzhen, près de Hong Kong (Grande Baie)",
    why3: "Coordination sur 18 bureaux nationaux",
    why4: "Réseau associé : HFW (Royaume-Uni) et un cabinet singapourien",
    why5: "Produits standardisés · honoraires fixes · devis transparents",
    why6: "Équipes spécialisées maritime / conformité / PI",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Bureaux nationaux", tr2: "Professionnels", tr3: "Langues", tr4: "Bureau de Shenzhen depuis",
    cataEyebrow: "Catalogue", cataTitle: "Huit sections couvrant tout le processus d'achat", cataSub: "Un devis écrit est fourni avant toute mission ; les livrables peuvent être remis en anglais.",
    abEyebrow: "À propos", abTitle: "À propos de nous",
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
    kBio1: "Inscrite au barreau en 2014, Kang Xuesong a une expérience transfrontalière Chine continentale–Hong Kong et sert en deux langues des clients entreprises et particuliers. Elle se concentre sur les dossiers liés à Hong Kong et transfrontaliers, avec une solide expérience en gouvernance d'entreprise, litiges commerciaux et conseil juridique.",
    kBio2: "Ses produits de service ont obtenu le 2e prix (2023) et le 3e prix (2026) du Concours d'Innovation de l'Association des Avocats de Shenzhen. Les services de ce catalogue sont pilotés par son équipe, en collaboration avec les équipes nationales maritime, conformité commerciale et propriété intellectuelle.",
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
    footDisclaimer: "Ce site et son contenu sont uniquement présentés à titre informatif et ne constituent pas un avis juridique ; les droits et obligations sont régis par le contrat signé."
  },
  de: {
    pageTitle: "Rechtsdienstleistungen für internationale Käufer in China | Kang Xuesong · Wintell & Co Shenzhen",
    brandName: "Kang Xuesong Team<b> · Wintell &amp; Co</b>",
    brandSub: "Grenzüberschreitende Rechtsdienstleistungen · Shenzhen, China",
    navServices: "Leistungen", navAbout: "Über uns", navFees: "Honorare", navContact: "Kontakt",
    heroEyebrow: "Rechtsdienstleistungskatalog für internationale Käufer",
    heroTitle1: "Rechtsdienstleistungen für", heroTitle2: "internationale Käufer in China",
    heroSub: "Von der Lieferanten-Due-Diligence über Kaufverträge und Zahlungssicherheit bis zu IP-Schutz, Handels-Compliance und Streitbeilegung – das Team Kang Xuesong, gestützt auf das nationale Netz von Wintell & Co, bietet ausländischen Käufern umfassende, zweisprachige Rechtsunterstützung vor Ort.",
    heroEn: "Kang Xuesong Team · Wintell & Co (Shenzhen) — vertrauenswürdige Rechtsberatung für internationale Käufer.",
    btnCatalogue: "Leistungen ansehen",
    heroCardTag: "Warum wir",
    why1: "Zweisprachige Beratung (Chinesisch & Englisch)",
    why2: "Büro in Shenzhen, nahe Hongkong (Greater Bay Area)",
    why3: "Koordinierte Leistung über 18 nationale Büros",
    why4: "Assoziierte Partner: HFW (UK) und eine singapurische Kanzlei",
    why5: "Standardisierte Produkte · Festpreise · transparente Angebote",
    why6: "Spezialteams für Seehandel / Compliance / IP",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "Nationale Büros", tr2: "Fachleute", tr3: "Sprachen", tr4: "Büro Shenzhen seit",
    cataEyebrow: "Leistungskatalog", cataTitle: "Acht Bereiche für den gesamten Einkaufsprozess", cataSub: "Für jede Leistung erhalten Sie vor Beauftragung ein schriftliches Angebot; Ergebnisse können auf Englisch geliefert werden.",
    abEyebrow: "Über uns", abTitle: "Über uns",
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
    kBio1: "Seit 2014 zugelassen, verfügt Kang Xuesong über grenzüberschreitende Erfahrung zwischen dem chinesischen Festland und Hongkong und betreut inländische wie ausländische Firmen- und Privatkunden zweisprachig. Ihr Schwerpunkt liegt auf Hongkong-bezogenen und grenzüberschreitenden Mandaten mit solider Erfahrung in Corporate Governance, Wirtschaftsstreitigkeiten und Unternehmensberatung.",
    kBio2: "Ihre Serviceprodukte gewannen den 2. Preis (2023) und 3. Preis (2026) des Innovationswettbewerbs der Shenzhener Anwaltsvereinigung. Die Leistungen dieses Katalogs werden von ihrem Team geleitet und gemeinsam mit den nationalen Teams für Seehandel, Handels-Compliance und IP erbracht.",
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
    footDisclaimer: "Diese Website und ihre Inhalte dienen nur der Leistungsvorstellung und stellen keine Rechtsberatung dar; Rechte und Pflichten richten sich nach dem unterzeichneten Vertrag."
  },
  ar: {
    pageTitle: "خدمات قانونية للمشترين الأجانب في الصين | كانغ شيويه سونغ · وينتل آند كو شنتشن",
    brandName: "فريق كانغ شيويه سونغ<b> · وينتل آند كو</b>",
    brandSub: "خدمات قانونية عابرة للحدود · شنتشن، الصين",
    navServices: "الخدمات", navAbout: "من نحن", navFees: "الأتعاب", navContact: "اتصل بنا",
    heroEyebrow: "كتالوج الخدمات القانونية للمشترين الأجانب",
    heroTitle1: "خدمات قانونية", heroTitle2: "للمشترين الأجانب في الصين",
    heroSub: "من العناية الواجبة بالموردين إلى عقود الشراء، وأمان المدفوعات، وحماية الملكية الفكرية، والامتثال التجاري، وحل النزاعات — يقدم فريق كانغ شيويه سونغ، بدعم شبكة وينتل آند كو الوطنية، دعماً قانونياً شاملاً وثنائي اللغة للمشترين الأجانب.",
    heroEn: "فريق كانغ شيويه سونغ · وينتل آند كو (شنتشن) — مستشارون قانونيون موثوقون للمشترين الأجانب من الصين.",
    btnCatalogue: "تصفح الخدمات",
    heroCardTag: "لماذا نحن",
    why1: "استشارات ثنائية اللغة (الصينية والإنجليزية)",
    why2: "مكتب في شنتشن بجوار هونغ كونغ (منطقة الخليج الكبرى)",
    why3: "تنسيق التسليم عبر 18 مكتباً وطنياً",
    why4: "شبكة منتسبة: HFW (بريطانيا) ومكتب سنغافوري",
    why5: "منتجات موحدة · أتعاب ثابتة · عروض أسعار شفافة",
    why6: "فرق متخصصة في البحري / الامتثال التجاري / الملكية الفكرية",
    tr1s: "", tr2s: "", tr3n: "2",
    tr1: "مكتباً وطنياً", tr2: "متخصصاً", tr3: "لغتان", tr4: "مكتب شنتشن منذ",
    cataEyebrow: "كتالوج الخدمات", cataTitle: "ثمانية أقسام تغطي عملية الشراء كاملة", cataSub: "يُقدَّم عرض أسعار كتابي قبل التعاقد لكل خدمة؛ ويمكن توفير المخرجات باللغة الإنجليزية.",
    abEyebrow: "من نحن", abTitle: "من نحن",
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
    kBio1: "مرخصة منذ 2014، تملك كانغ شيويه سونغ خبرة عابرة للحدود بين الصين القارية وهونغ كونغ، وتخدم عملاء من الشركات والأفراد محلياً ودولياً بلغتين. تركز على القضايا المتعلقة بهونغ كونغ والعابرة للحدود، مع خبرة راسخة في حوكمة الشركات والنزاعات التجارية والاستشارات القانونية للشركات.",
    kBio2: "حازت منتجاتها الخدمية على الجائزة الثانية (2023) والثالثة (2026) في مسابقة الابتكار لجمعية محامي شنتشن. تُدار خدمات هذا الكتالوج بواسطة فريقها، بالتعاون مع فرق المكتب الوطنية في المجال البحري والامتثال التجاري والملكية الفكرية.",
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
    footDisclaimer: "هذا الموقع ومحتواه لأغراض التعريف بالخدمات فقط ولا يشكلان استشارة قانونية؛ وتُحدَّد الحقوق والالتزامات بموجب العقد الموقع."
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
