(function () {
  var I18N = {
    en: {
      'nav.home': 'Home', 'nav.saudi': 'Saudi & GCC', 'nav.egypt': 'Egypt', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cta': 'Start', 'open': 'Open',
      'meta.1': 'Steps Marketing', 'meta.2': 'Cairo / Dammam', 'meta.3': 'Market entry · Distribution · Demand',
      'h1.l1': 'Enter Saudi Arabia', 'h1.l2': 'with people', 'h1.l3': 'on the ground.',
      'hero.sub': 'Market entry, distribution and demand for brands expanding into the Kingdom and the GCC. And for businesses in Egypt, the content that gets them discovered. Offices in Cairo and Dammam.',
      'hero.cta': 'Start a conversation',
      'svc.k': 'What we do',
      't1.k': 'Market entry & research', 't1.d': 'Feasibility, channel map, competitors and the regulatory landscape for your category.',
      't2.k': 'Set-up & compliance', 't2.d': 'SFDA registration guidance and the right importer or entity structure.',
      't3.k': 'Distribution & partners', 't3.d': 'Introductions to distributors, wholesalers and industrial buyers across the Kingdom.',
      't4.k': 'Brand & demand', 't4.d': 'Positioning, B2B campaigns and retail visibility that keep products moving.',
      't5.k': 'Content system (Egypt)', 't5.d': 'Story-driven short videos, every month, for businesses that need to be discovered.',
      't6.k': 'Readiness check', 't6.d': 'Six questions, one honest read on how close your product is to the Saudi shelf.',
      'tick.cities': ['Riyadh', 'Jeddah', 'Dammam', 'Kuwait', 'Doha', 'Manama', 'Dubai', 'Muscat', 'Cairo'],
      'tick.sectors': ['Rice', 'Edible oils', 'Dairy', 'Grains', 'Pulses', 'Sugar', 'Pharmaceuticals', 'Chemicals', 'Consumer goods', 'Industrial products'],
      'believe.k': 'What we believe',
      'b1': 'The product is rarely the problem. Access is.',
      'b2': 'Distribution without demand stalls by the second order.',
      'b3': 'One accountable team beats five intermediaries.',
      'b4': 'A clear no early is cheaper than a stalled launch later.',
      'ready.teaser.t': 'How ready is your product for Saudi Arabia?', 'ready.teaser.d': 'Six honest questions. Two minutes. No email needed to see the result.', 'ready.teaser.b': 'Take the check',
      'eg.teaser.b': 'See the content system',
      'home.cta.d': 'Tell us about the business and the goal. We reply within one business day.', 'c.btn': 'Contact us', 'wa.btn': 'WhatsApp',
      'sp.k': 'Saudi Arabia & the GCC', 'sp.h1a': 'Four decisions. We stay for', 'sp.h1b': 'all of them.',
      'saudi.k': 'How entry works', 'saudi.h2': 'Four decisions. We stay for all of them.',
      'saudi.lede': 'Most launches stall on access, compliance or demand, rarely on the product. We close all three, on the ground, as one team.',
      'saudi.lede2': 'Each step ends with something you can hold: a decision, a registration, a signed partner, a demand plan.',
      'saudi.cta': 'Book a market-entry call', 'you.get': 'You get',
      's1.t': 'Assess', 's1.d': 'Feasibility, channel map, competitor benchmark and the regulatory landscape for your category.', 's1.g': 'a go or no-go call and a go-to-market roadmap.',
      's2.t': 'Set up', 's2.d': 'SFDA registration guidance, the right importer or entity structure, and pricing built for Saudi trade, with specialist partners where needed.', 's2.g': 'a product that is allowed, and priced, to sell.',
      's3.t': 'Enter', 's3.d': 'Introductions to established distributors, wholesalers and industrial buyers across the Eastern, Central and Western regions, with terms built for the long run.', 's3.g': 'signed channel partners, not a single shipment.',
      's4.t': 'Grow', 's4.d': 'Positioning, B2B campaigns, content, and HORECA and retail visibility, calibrated for Saudi trade and consumer dynamics.', 's4.g': 'demand that sustains sell-through.',
      'mk.k': 'Where we work', 'mk.h2': 'Two offices, nine cities, one team.',
      'map.cairo': 'Cairo', 'map.dammam': 'Dammam', 'map.riyadh': 'Riyadh', 'map.jeddah': 'Jeddah', 'map.kuwait': 'Kuwait', 'map.doha': 'Doha', 'map.manama': 'Manama', 'map.dubai': 'Dubai', 'map.muscat': 'Muscat',
      'map.office': 'Office', 'map.legend1': 'Steps office', 'map.legend2': 'Active market',
      'fp.primary.l': 'Primary markets', 'fp.primary.v': 'Saudi Arabia · Egypt', 'fp.gcc.l': 'Active GCC', 'fp.gcc.v': 'UAE · Kuwait · Qatar · Bahrain · Oman', 'fp.road.l': 'Roadmap', 'fp.road.v': 'Wider MENA through partner networks',
      'food.l': 'Food commodities', 'food.rice': 'Rice', 'food.oils': 'Edible oils', 'food.dairy': 'Dairy', 'food.grains': 'Grains', 'food.pulses': 'Pulses', 'food.sugar': 'Sugar (ICUMSA 45)',
      'nonfood.l': 'Non-food sectors', 'nf.pharma': 'Pharmaceuticals', 'nf.chem': 'Chemicals', 'nf.consumer': 'Consumer goods', 'nf.industrial': 'Industrial products',
      'ready.k': 'Readiness check', 'ready.h2': 'How ready is your product for Saudi Arabia?', 'ready.lede': 'Six honest questions. Tick what is already in place.',
      'q1': 'The product is registered with SFDA, or registration has started.',
      'q2': 'Arabic labelling and packaging are ready for the Saudi shelf.',
      'q3': 'You have a priced offer for Saudi distributors: landed cost, margins, terms.',
      'q4': 'You have spoken with at least one Saudi distributor or buyer.',
      'q5': 'You know which region you start in: Eastern, Central or Western.',
      'q6': 'You have a plan for demand beyond the first shipment.',
      'v.0': 'Early days. Start with Assess: it tells you whether to go, and how.',
      'v.1': 'Half-way there. The gaps are usually in Set up or Enter.',
      'v.2': 'Close. The question now is Grow: who creates the demand once you are in.',
      'ready.of': 'of 6', 'ready.send': 'Send this to Steps', 'ready.fine': 'Nothing is sent until you choose to.',
      'pre.t': 'Readiness check', 'pre.in': 'In place', 'pre.miss': 'Not yet',
      'eg.k': 'Egypt', 'ep.k': 'Egypt · Content system', 'eg.h2': 'Behind every business, a story. We tell yours so customers find you.',
      'eg.lede': 'A monthly system of story-driven short videos for your own pages: strategy, scripts, production and publishing, built so people remember you and come to you.',
      'e1.t': 'Strategy first', 'e1.d': 'We find the one idea your customers will repeat to others.',
      'e2.t': 'Produced for you', 'e2.d': 'Script, voice, edit and posting, every month.',
      'e3.t': 'Measured by customers', 'e3.d': 'Views matter only when they turn into messages and visits.',
      'eg.cta1': 'Watch recent work on Instagram', 'eg.cta2': 'Message us on WhatsApp', 'eg.cta3': 'Tell us about your business',
      'month.k': 'How a month works', 'month.h2': 'One idea a week. Told so it travels.',
      'month.lede': 'Production is the easy part. The work is finding the story your customers will repeat, and telling it in their language.',
      'm1.t': 'Discover', 'm1.d': 'We study your business and your customers, and find the one idea worth repeating.',
      'm2.t': 'Write', 'm2.d': 'Scripts the way your customers talk. Hook first, no filler.',
      'm3.t': 'Produce', 'm3.d': "Voice, edit and captions, in your brand's look.",
      'm4.t': 'Publish & measure', 'm4.d': 'Posted on your pages. We count messages and visits, not views.',
      'who.k': 'Who it is for', 'who.h2': 'Businesses people choose with their eyes first.',
      'w1': 'Clinics', 'w2': 'Restaurants & cafés', 'w3': 'Shops', 'w4': 'Services', 'w5': 'Education', 'w6': 'Real estate',
      'ab.k': 'About Steps', 'ab.h1a': 'One team,', 'ab.h1b': 'on the ground.',
      'ab.lede': 'Steps Marketing is a market-entry and growth partner with offices in Cairo and Dammam. We take brands into Saudi Arabia and the GCC, and we help businesses in Egypt get discovered.',
      'how.k': 'How we work', 'how.h2': 'Three habits that decide whether a launch holds.',
      'hw1.t': 'One accountable team', 'hw1.d': 'Strategy, channel access and execution sit with the same people, so nothing falls between advisors.',
      'hw2.t': 'On the ground', 'hw2.d': 'Cairo and Dammam are offices, not representatives. Decisions get made where the market is.',
      'hw3.t': 'An honest no', 'hw3.d': 'If entry does not make sense, we say so early. It is cheaper than a stalled launch.',
      'offices.k': 'Offices',
      'talk': "Let's talk",
      'c.eg.l': 'Cairo office', 'c.eg.v': 'Fifth Settlement, Cairo, Egypt', 'c.sa.l': 'Dammam office', 'c.sa.v': 'Dammam, Kingdom of Saudi Arabia',
      'c.phone.l': 'Phone & WhatsApp', 'c.mail.l': 'Email', 'c.reply.l': 'Response', 'c.reply': 'Within one business day.',
      'f.t': 'Tell us about the business and the goal.', 'f.s': 'A few lines are enough. We will come back with questions.',
      'f.name': 'Full name', 'f.company': 'Company', 'f.country': 'Country', 'f.c.eg': 'Egypt', 'f.c.sa': 'Saudi Arabia', 'f.c.ae': 'United Arab Emirates', 'f.c.other': 'Other',
      'f.email': 'Email', 'f.phone': 'Phone or WhatsApp', 'f.goal': 'I want to',
      'f.g.saudi': 'Enter Saudi Arabia or the GCC', 'f.g.dist': 'Find distribution partners', 'f.g.setup': 'Register products and set up locally', 'f.g.egypt': 'Grow a business in Egypt with content', 'f.g.other': 'Something else',
      'f.msg': 'Message', 'f.send': 'Send', 'f.err': 'Something went wrong. Please send us a WhatsApp message instead: +20 10 5577 2172.', 'f.sending': 'Sending…', 'f.ok.t': 'Received.', 'f.ok.d': 'We will reply within one business day.',
      'foot.rights': 'All rights reserved.'
    },
    ar: {
      'nav.home': 'الرئيسية', 'nav.saudi': 'السعودية والخليج', 'nav.egypt': 'مصر', 'nav.about': 'من نحن', 'nav.contact': 'تواصل', 'nav.cta': 'ابدأ', 'open': 'افتح',
      'meta.1': 'Steps Marketing', 'meta.2': 'القاهرة / الدمام', 'meta.3': 'دخول الأسواق · التوزيع · الطلب',
      'h1.l1': 'ادخل السوق السعودي', 'h1.l2': 'مع فريق', 'h1.l3': 'على الأرض.',
      'hero.sub': 'دخول الأسواق، والتوزيع، وبناء الطلب للعلامات المتجهة إلى المملكة والخليج. وللشركات في مصر، المحتوى الذي يجعل عملاءها يعرفونها. مكاتب في القاهرة والدمام.',
      'hero.cta': 'ابدأ الحديث',
      'svc.k': 'ماذا نفعل',
      't1.k': 'دخول السوق والبحوث', 't1.d': 'جدوى، وخريطة قنوات، ومنافسون، والمشهد التنظيمي لفئتك.',
      't2.k': 'التأسيس والامتثال', 't2.d': 'إرشاد في تسجيل SFDA، والهيكل المناسب للاستيراد أو الكيان.',
      't3.k': 'التوزيع والشركاء', 't3.d': 'تعريف بموزعين وتجار جملة ومشترين صناعيين في أنحاء المملكة.',
      't4.k': 'العلامة والطلب', 't4.d': 'تموضع، وحملات B2B، وحضور في التجزئة يُبقي المنتج يتحرك.',
      't5.k': 'نظام المحتوى (مصر)', 't5.d': 'فيديوهات قصيرة تحكي قصة عملك، كل شهر، للأعمال التي تحتاج أن تُكتشف.',
      't6.k': 'فحص الجاهزية', 't6.d': 'ستة أسئلة، وقراءة صريحة لمدى قرب منتجك من الرف السعودي.',
      'tick.cities': ['الرياض', 'جدة', 'الدمام', 'الكويت', 'الدوحة', 'المنامة', 'دبي', 'مسقط', 'القاهرة'],
      'tick.sectors': ['الأرز', 'الزيوت', 'الألبان', 'الحبوب', 'البقوليات', 'السكر', 'الأدوية', 'الكيماويات', 'السلع الاستهلاكية', 'المنتجات الصناعية'],
      'believe.k': 'ما نؤمن به',
      'b1': 'المنتج نادرًا ما يكون المشكلة. الوصول هو المشكلة.',
      'b2': 'التوزيع بلا طلب يتوقف عند الطلبية الثانية.',
      'b3': 'فريق واحد مسؤول أفضل من خمسة وسطاء.',
      'b4': 'رفض واضح في البداية أرخص من إطلاق متعثر لاحقًا.',
      'ready.teaser.t': 'ما مدى جاهزية منتجك للسوق السعودي؟', 'ready.teaser.d': 'ستة أسئلة صريحة. دقيقتان. ولا حاجة لبريد لترى النتيجة.', 'ready.teaser.b': 'ابدأ الفحص',
      'eg.teaser.b': 'شاهد نظام المحتوى',
      'home.cta.d': 'أخبرنا عن العمل والهدف. نرد خلال يوم عمل واحد.', 'c.btn': 'تواصل معنا', 'wa.btn': 'واتساب',
      'sp.k': 'السعودية والخليج', 'sp.h1a': 'أربعة قرارات. ونبقى معك', 'sp.h1b': 'فيها كلها.',
      'saudi.k': 'كيف يتم الدخول', 'saudi.h2': 'أربعة قرارات. ونبقى معك فيها كلها.',
      'saudi.lede': 'أغلب الإطلاقات تتعثر عند الوصول أو الامتثال أو الطلب، ونادرًا عند المنتج. نغلق الثلاثة على الأرض، كفريق واحد.',
      'saudi.lede2': 'كل خطوة تنتهي بشيء ملموس: قرار، أو تسجيل، أو شريك موقّع، أو خطة طلب.',
      'saudi.cta': 'احجز مكالمة دخول السوق', 'you.get': 'تحصل على',
      's1.t': 'التقييم', 's1.d': 'دراسة جدوى، وخريطة للقنوات، ومقارنة بالمنافسين، والمشهد التنظيمي لفئة منتجك.', 's1.g': 'قرار واضح بالدخول أو عدمه، وخارطة طريق إلى السوق.',
      's2.t': 'التأسيس', 's2.d': 'إرشاد في تسجيل SFDA، والهيكل المناسب للاستيراد أو الكيان، وتسعير مبني للتجارة السعودية، مع شركاء متخصصين عند الحاجة.', 's2.g': 'منتج مسموح له بالبيع، ومسعّر ليبيع.',
      's3.t': 'الدخول', 's3.d': 'تعريف بموزعين وتجار جملة ومشترين صناعيين راسخين في المناطق الشرقية والوسطى والغربية، بشروط مبنية للمدى الطويل.', 's3.g': 'شركاء قنوات موقّعون، لا شحنة واحدة.',
      's4.t': 'النمو', 's4.d': 'تموضع، وحملات B2B، ومحتوى، وحضور في قنوات الفنادق والمطاعم والتجزئة، بما يناسب السوق السعودي.', 's4.g': 'طلب يحافظ على استمرار البيع.',
      'mk.k': 'أين نعمل', 'mk.h2': 'مكتبان، تسع مدن، فريق واحد.',
      'map.cairo': 'القاهرة', 'map.dammam': 'الدمام', 'map.riyadh': 'الرياض', 'map.jeddah': 'جدة', 'map.kuwait': 'الكويت', 'map.doha': 'الدوحة', 'map.manama': 'المنامة', 'map.dubai': 'دبي', 'map.muscat': 'مسقط',
      'map.office': 'مكتب', 'map.legend1': 'مكتب Steps', 'map.legend2': 'سوق نشط',
      'fp.primary.l': 'الأسواق الرئيسية', 'fp.primary.v': 'السعودية · مصر', 'fp.gcc.l': 'الخليج', 'fp.gcc.v': 'الإمارات · الكويت · قطر · البحرين · عُمان', 'fp.road.l': 'خارطة الطريق', 'fp.road.v': 'باقي المنطقة عبر شبكة الشركاء',
      'food.l': 'سلع غذائية', 'food.rice': 'الأرز', 'food.oils': 'الزيوت', 'food.dairy': 'الألبان', 'food.grains': 'الحبوب', 'food.pulses': 'البقوليات', 'food.sugar': 'السكر (ICUMSA 45)',
      'nonfood.l': 'قطاعات غير غذائية', 'nf.pharma': 'الأدوية', 'nf.chem': 'الكيماويات', 'nf.consumer': 'السلع الاستهلاكية', 'nf.industrial': 'المنتجات الصناعية',
      'ready.k': 'فحص الجاهزية', 'ready.h2': 'ما مدى جاهزية منتجك للسوق السعودي؟', 'ready.lede': 'ستة أسئلة صريحة. علّم ما هو جاهز فعلًا.',
      'q1': 'المنتج مسجّل لدى SFDA، أو بدأ التسجيل.',
      'q2': 'الملصقات والتغليف بالعربية جاهزة للرف السعودي.',
      'q3': 'لديك عرض مسعّر للموزعين السعوديين: التكلفة الواصلة، والهوامش، والشروط.',
      'q4': 'تحدثت مع موزع أو مشترٍ سعودي واحد على الأقل.',
      'q5': 'تعرف المنطقة التي تبدأ منها: الشرقية أو الوسطى أو الغربية.',
      'q6': 'لديك خطة لبناء الطلب بعد الشحنة الأولى.',
      'v.0': 'في البداية. ابدأ بالتقييم: يخبرك هل تدخل، وكيف.',
      'v.1': 'في منتصف الطريق. الفجوات غالبًا في التأسيس أو الدخول.',
      'v.2': 'قريب. السؤال الآن هو النمو: من يصنع الطلب بعد أن تدخل.',
      'ready.of': 'من 6', 'ready.send': 'أرسل النتيجة إلى Steps', 'ready.fine': 'لا يُرسل شيء إلا إذا اخترت ذلك.',
      'pre.t': 'فحص الجاهزية', 'pre.in': 'جاهز', 'pre.miss': 'ليس بعد',
      'eg.k': 'مصر', 'ep.k': 'مصر · نظام المحتوى', 'eg.h2': 'إحنا بنحكيها، وعميلك بيوصلك.',
      'eg.lede': 'نظام شهري من الفيديوهات القصيرة لصفحاتك: استراتيجية، وسكريبتات، وإنتاج، ونشر. معمول عشان الناس تفتكرك وتيجي لك.',
      'e1.t': 'الاستراتيجية أولًا', 'e1.d': 'بنلاقي الفكرة الواحدة اللي عميلك هيكررها لغيره.',
      'e2.t': 'إنتاج كامل', 'e2.d': 'سكريبت وصوت ومونتاج ونشر، كل شهر.',
      'e3.t': 'بنقيس بالعملاء', 'e3.d': 'المشاهدات تفرق لما تتحول لرسائل وزيارات.',
      'eg.cta1': 'شوف شغلنا على Instagram', 'eg.cta2': 'كلّمنا على WhatsApp', 'eg.cta3': 'احكي لنا عن البيزنس بتاعك',
      'month.k': 'الشهر بيمشي إزاي', 'month.h2': 'فكرة كل أسبوع. محكية بطريقة تخليها تنتشر.',
      'month.lede': 'الإنتاج هو الجزء السهل. الشغل الحقيقي إننا نلاقي الحكاية اللي عميلك هيكررها، ونحكيها بلغته.',
      'm1.t': 'نكتشف', 'm1.d': 'بندرس البيزنس وعملاءك، ونلاقي الفكرة الواحدة اللي تستاهل تتكرر.',
      'm2.t': 'نكتب', 'm2.d': 'سكريبتات بلغة عملاءك. الهوك الأول، ومن غير حشو.',
      'm3.t': 'ننتج', 'm3.d': 'صوت ومونتاج وكابشن، بشكل براندك.',
      'm4.t': 'ننشر ونقيس', 'm4.d': 'بيتنشر على صفحاتك. اللي بنعدّه رسائل وزيارات، مش مشاهدات.',
      'who.k': 'لمين', 'who.h2': 'البيزنس اللي الناس بتختاره بعينها الأول.',
      'w1': 'عيادات', 'w2': 'مطاعم وكافيهات', 'w3': 'محلات', 'w4': 'خدمات', 'w5': 'تعليم', 'w6': 'عقارات',
      'ab.k': 'عن Steps', 'ab.h1a': 'فريق واحد،', 'ab.h1b': 'على الأرض.',
      'ab.lede': 'Steps Marketing شريك لدخول الأسواق والنمو، بمكاتب في القاهرة والدمام. نأخذ العلامات التجارية إلى السعودية والخليج، ونساعد الشركات في مصر على أن يعرفها عملاؤها.',
      'how.k': 'كيف نعمل', 'how.h2': 'ثلاث عادات تحدد إن كان الإطلاق سيصمد.',
      'hw1.t': 'فريق واحد مسؤول', 'hw1.d': 'الاستراتيجية والوصول إلى القنوات والتنفيذ عند الأشخاص أنفسهم، فلا يسقط شيء بين المستشارين.',
      'hw2.t': 'على الأرض', 'hw2.d': 'القاهرة والدمام مكتبان، لا وكلاء. القرار يُتخذ حيث السوق.',
      'hw3.t': 'رفض صريح', 'hw3.d': 'إن لم يكن الدخول منطقيًا، نقولها مبكرًا. أرخص من إطلاق متعثر.',
      'offices.k': 'المكاتب',
      'talk': 'نتكلم؟',
      'c.eg.l': 'مكتب القاهرة', 'c.eg.v': 'التجمع الخامس، القاهرة، مصر', 'c.sa.l': 'مكتب الدمام', 'c.sa.v': 'الدمام، المملكة العربية السعودية',
      'c.phone.l': 'الهاتف وواتساب', 'c.mail.l': 'البريد الإلكتروني', 'c.reply.l': 'الرد', 'c.reply': 'خلال يوم عمل واحد.',
      'f.t': 'أخبرنا عن العمل والهدف.', 'f.s': 'سطور قليلة تكفي. سنعود إليك بالأسئلة.',
      'f.name': 'الاسم الكامل', 'f.company': 'الشركة', 'f.country': 'الدولة', 'f.c.eg': 'مصر', 'f.c.sa': 'السعودية', 'f.c.ae': 'الإمارات', 'f.c.other': 'أخرى',
      'f.email': 'البريد الإلكتروني', 'f.phone': 'الهاتف أو واتساب', 'f.goal': 'أريد',
      'f.g.saudi': 'الدخول إلى السعودية أو الخليج', 'f.g.dist': 'إيجاد شركاء توزيع', 'f.g.setup': 'تسجيل المنتجات والتأسيس محليًا', 'f.g.egypt': 'تنمية عملي في مصر بالمحتوى', 'f.g.other': 'شيء آخر',
      'f.msg': 'الرسالة', 'f.send': 'إرسال', 'f.err': 'حدث خطأ أثناء الإرسال. راسلنا على واتساب: +20 10 5577 2172.', 'f.sending': 'جارٍ الإرسال…', 'f.ok.t': 'وصلت رسالتك.', 'f.ok.d': 'نرد خلال يوم عمل واحد.',
      'foot.rights': 'جميع الحقوق محفوظة.'
    }
  };

  var PAGES = ['home', 'saudi', 'egypt', 'about', 'contact'];
  var root = document.documentElement;
  var current = 'en';
  var currentPage = 'home';
  var pendingScroll = null;

  function t(lang, key) {
    var d = I18N[lang] || {};
    return Object.prototype.hasOwnProperty.call(d, key) ? d[key] : I18N.en[key];
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function renderTicker(id, arr) {
    var el = document.getElementById(id);
    if (!el) return;
    var html = '';
    for (var r = 0; r < 4; r++) for (var i = 0; i < arr.length; i++) html += '<span class="ti">' + esc(arr[i]) + '</span>';
    el.innerHTML = html;
  }

  function apply(lang) {
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var val = t(lang, nodes[i].getAttribute('data-i18n'));
      if (val == null || typeof val !== 'string') continue;
      nodes[i].textContent = val;
    }
    renderTicker('tickA', t(lang, 'tick.cities'));
    renderTicker('tickB', t(lang, 'tick.sectors'));
    root.lang = lang === 'ar' ? 'ar' : 'en';
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    root.classList.toggle('ar', lang === 'ar');
    var b = document.getElementById('langBtn');
    if (b) b.textContent = lang === 'ar' ? 'English' : 'العربية';
    try { localStorage.setItem('steps-lang', lang); } catch (e) {}
    current = lang;
    updateReady();
  }

  /* ---------- routing on plain hashes ---------- */
  function parseHash() {
    var h = (location.hash || '').replace('#', '').toLowerCase();
    var lang = null;
    if (/-ar$/.test(h)) { lang = 'ar'; h = h.slice(0, -3); }
    else if (/-en$/.test(h)) { lang = 'en'; h = h.slice(0, -3); }
    if (h === 'ar' || h === 'en') { lang = h; h = 'home'; }
    if (PAGES.indexOf(h) < 0) h = 'home';
    return { page: h, lang: lang };
  }
  function jumpTop() {
    var prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prev;
  }
  function showPage(p, target) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) pages[i].hidden = pages[i].getAttribute('data-page') !== p;
    var links = document.querySelectorAll('[data-nav]');
    for (var j = 0; j < links.length; j++) links[j].classList.toggle('active', links[j].getAttribute('data-nav') === p);
    currentPage = p;
    navEl.classList.remove('hide');
    jumpTop();
    if (target) {
      var el = document.getElementById(target);
      if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
    }
    observeReveals();
  }
  function route() {
    var r = parseHash();
    if (r.lang && r.lang !== current) apply(r.lang);
    showPage(r.page, pendingScroll);
    pendingScroll = null;
  }
  window.addEventListener('hashchange', route);
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var dest = a.getAttribute('href').slice(1).toLowerCase();
    if (a.hasAttribute('data-scroll')) pendingScroll = a.getAttribute('data-scroll');
    if (a.hasAttribute('data-goal')) { var g = document.getElementById('goal'); if (g) g.value = a.getAttribute('data-goal'); }
    if (dest === currentPage) {
      e.preventDefault();
      var tgt = pendingScroll; pendingScroll = null;
      if (tgt) { var el = document.getElementById(tgt); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenu(false);
    }
  });

  /* ---------- readiness check ---------- */
  var boxes = document.querySelectorAll('.rc');
  var scoreNum = document.getElementById('scoreNum');
  var meterBar = document.getElementById('meterBar');
  var verdict = document.getElementById('verdict');
  function count() { var n = 0; for (var i = 0; i < boxes.length; i++) if (boxes[i].checked) n++; return n; }
  function updateReady() {
    var n = count();
    if (scoreNum) scoreNum.textContent = n;
    if (meterBar) meterBar.style.width = (n / 6 * 100) + '%';
    if (verdict) verdict.textContent = t(current, n <= 2 ? 'v.0' : (n <= 4 ? 'v.1' : 'v.2'));
  }
  for (var bi = 0; bi < boxes.length; bi++) boxes[bi].addEventListener('change', updateReady);
  document.getElementById('sendReady').addEventListener('click', function () {
    var inPlace = [], missing = [];
    for (var i = 0; i < boxes.length; i++) {
      var label = t(current, boxes[i].getAttribute('data-q'));
      (boxes[i].checked ? inPlace : missing).push(label);
    }
    var goal = document.getElementById('goal'), msg = document.getElementById('msg');
    if (goal) goal.value = 'saudi';
    if (msg) {
      msg.value = t(current, 'pre.t') + ': ' + count() + ' / 6\n' +
        t(current, 'pre.in') + ': ' + (inPlace.length ? inPlace.join(' · ') : '—') + '\n' +
        t(current, 'pre.miss') + ': ' + (missing.length ? missing.join(' · ') : '—');
    }
    location.hash = 'contact';
  });

  /* ---------- nav ---------- */
  var navEl = document.getElementById('nav');
  var lastY = window.scrollY;
  var menuOpen = false;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    navEl.classList.toggle('hide', y > lastY && y > 160 && !menuOpen);
    lastY = y;
  }, { passive: true });

  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    menuOpen = open;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('locked', open);
    if (open) navEl.classList.remove('hide');
  }
  burger.addEventListener('click', function () { setMenu(!menuOpen); });
  document.getElementById('menuClose').addEventListener('click', function () { setMenu(false); });
  var menuLinks = menu.querySelectorAll('a');
  for (var mi = 0; mi < menuLinks.length; mi++) menuLinks[mi].addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) setMenu(false); });

  /* ---------- reveal on scroll (from a visible resting state) ---------- */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  function observeReveals() {
    var rv = document.querySelectorAll('.page:not([hidden]) .rv:not(.in)');
    for (var i = 0; i < rv.length; i++) { if (io) io.observe(rv[i]); else rv[i].classList.add('in'); }
  }

  /* ---------- form ---------- */
  var form = document.getElementById('leadForm');
  var ok = document.getElementById('ok');
  /* Form delivery: POST JSON to /api/contact (a Cloudflare Worker on this domain). The Worker verifies the Turnstile
     token, validates the fields and delivers the message; Cloudflare rate-limits the path. Nothing third-party in the page. */
  var FORM_ENDPOINT = '/api/contact';   // Cloudflare Worker on this domain: Turnstile check + rate limit + delivery
  var formErr = document.getElementById('formErr');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var btn = form.querySelector('button[type="submit"]');
    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = t(current, 'f.sending');
    if (formErr) formErr.hidden = true;
    var data = new FormData(form);
    data.append('language', current);
    data.append('page', location.href);
    var obj = {}; data.forEach(function (v, k) { obj[k] = v; });
    fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(obj) })
      .then(function (r) {
        if (!r.ok) throw new Error('status ' + r.status);
        return r.json();
      })
      .then(function (j) {
        if (!j || !j.ok) throw new Error('rejected');
        form.hidden = true;
        ok.hidden = false;
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = label;
        if (formErr) formErr.hidden = false;
        try { if (window.turnstile) window.turnstile.reset(); } catch (e2) {}
      });
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  /* ---------- boot ---------- */
  var saved = null;
  try { saved = localStorage.getItem('steps-lang'); } catch (e) {}
  var browser = (navigator.language || '').toLowerCase();
  var start = parseHash();
  var initial = start.lang || ((saved === 'ar' || saved === 'en') ? saved : (browser.indexOf('ar') === 0 ? 'ar' : 'en'));
  apply(initial);
  showPage(start.page, null);
  document.getElementById('langBtn').addEventListener('click', function () { apply(current === 'ar' ? 'en' : 'ar'); });
})();
