const TRANSLATIONS = {
  en: {
    // Nav
    'nav-home':        'Home',
    'nav-about':       'About',
    'nav-dinners':     'Dinners <span class="dropdown-arrow">▼</span>',
    'nav-business':    'Business Dining',
    'nav-homecooking': 'Home Cooking',
    'nav-celebrations':'Celebrations',
    'nav-walking':     'Walking Dinner',
    'nav-cooking':     'Cooking Experiences',
    'nav-request':     'Request',

    // Shared buttons
    'btn-request':     'Make a request',
    'footer-copy':     '© 2026',

    // Business Dining (zakelijk)
    'zak-eyebrow':     'For businesses & corporate clients',
    'zak-title':       'Business Dining',
    'zak-lead':        'Refined culinary experiences tailored for your business occasions — from intimate client meetings to large-scale networking events.',
    'zak-concept-title':'What do we offer?',
    'zak-li-1':        'Business dinners & lunches',
    'zak-li-2':        'Client meetings',
    'zak-li-3':        'Networking events',
    'zak-li-4':        'Walking dinners (business context)',
    'zak-li-5':        'Networking drinks',
    'zak-li-6':        'Receptions',
    'zak-bio':         'Each event is fully customised — from mise-en-place to the last plate. You welcome your guests, we take care of the rest.',
    'zak-crosssell':   'Looking for something more interactive?',
    'zak-crosssell-link': 'Discover our Walking Dinner.',
    'zak-cta':         'Request a quote',
    'zak-gallery':     'Dishes',

    // Home Cooking (familie)
    'hc-eyebrow':      'For private, intimate, at-home occasions',
    'hc-title':        'Home Cooking',
    'hc-lead':         'The chef at home experience — you are the guest at your own table. We cook fresh, intimate and fully tailored for you and your guests.',
    'hc-concept-title':'The concept',
    'hc-bio':          'Enjoy a restaurant experience in the comfort of your own home. I come to you, cook everything fresh on location and leave your kitchen spotless. All you need to do is enjoy.',
    'hc-sit-title':    'Occasions',
    'hc-sit-1':        'Dinners or lunches with friends',
    'hc-sit-2':        'Small, intimate groups',
    'hc-opt-title':    'Options',
    'hc-opt-1':        'Menu from 3 courses',
    'hc-opt-2':        'Shared dining',
    'hc-crosssell':    'Looking for something interactive?',
    'hc-crosssell-link': 'Discover our Cooking Experiences.',
    'hc-cta':          'Plan a home dinner or lunch',
    'hc-gallery':      'Dishes',

    // Celebrations (thema)
    'cel-eyebrow':     'For everything worth celebrating',
    'cel-title':       'Celebrations',
    'cel-lead':        'From an intimate birthday dinner to a wedding reception — we turn every festive moment into a culinary memory that lasts.',
    'cel-concept-title':'What are we celebrating?',
    'cel-li-1':        '21st birthday dinners or lunches',
    'cel-li-2':        'Birthdays — ladies lunch & gentlemen\'s dinner',
    'cel-li-3':        'Family dinners',
    'cel-li-4':        'Weddings',
    'cel-walk-title':  'Walking dinner option',
    'cel-walk-bio':    'Want your guests to mingle? Choose a walking dinner in a festive setting — small dishes brought around and enjoyed standing in an informal atmosphere.',
    'cel-crosssell':   'Something interactive for the group?',
    'cel-crosssell-link': 'Check out our Walking Dinner.',
    'cel-cta':         'Celebrate with us',
    'cel-gallery':     'Dishes',

    // Walking Dinner
    'wd-eyebrow':      'Business & festive',
    'wd-title':        'Walking Dinner',
    'wd-lead':         'Small dishes, enjoyed standing, while your guests mingle freely. The perfect format for a networking event, reception or festive gathering.',
    'wd-concept-title':'The concept',
    'wd-bio':          'In a walking dinner, each dish is served in small portions and eaten standing. There is no fixed table — guests move freely through the space, creating a relaxed and social atmosphere.',
    'wd-ex-title':     'Examples',
    'wd-ex-1':         'Business: networking drinks, receptions, client evenings',
    'wd-ex-2':         'Private: birthdays, weddings, informal parties',
    'wd-ex-3':         '4–6 courses served around',
    'wd-ex-4':         '10–80 guests',
    'wd-menu-title':   'Menu options',
    'wd-menu-1':       'Classic amuses & bites',
    'wd-menu-2':       'Seasonal mini-courses',
    'wd-menu-3':       'Vegetarian, vegan & gluten-free available',
    'wd-menu-4':       'Fully catered: preparation, service & clean-up',
    'wd-cta':          'Make a request',
    'wd-gallery':      'Dishes',

    // Cooking Experiences (wijn)
    'ce-eyebrow':      'Interactive & hands-on',
    'ce-title':        'Cooking Experiences',
    'ce-lead':         'Cooking as an experience — working together in the kitchen under the guidance of the chef. Professional and fun, perfect as team building or a unique dinner with friends.',
    'ce-concept-title':'What do we offer?',
    'ce-li-1':         'Team building',
    'ce-li-2':         'Cooking together',
    'ce-li-3':         'Personal guidance by the chef',
    'ce-bio':          'You cook along, we guide you. No experience needed — just a love of good company, learning and great food. At the end, everyone sits together to enjoy what was made collectively.',
    'ce-cta-1':        'Book an interactive dinner or lunch',
    'ce-cta-2':        'Plan your Team Experience',
    'ce-gallery':      'Impressions',

    // Bezorgen
    'bez-eyebrow':     'Services',
    'bez-title':       'Delivery of Amuses',
    'bez-lead':        'Want to surprise your guests without me coming over? I deliver fresh, homemade amuses directly to your home or venue.',
    'bez-concept-title':'How does it work?',
    'bez-bio':         'The amuses are prepared fresh on the day and delivered in stylish packaging, complete with presentation or heating instructions where needed. Perfect as a refined starter for your own dinner or as luxury drinks bites.',
    'bez-li-1':        'Minimum 10 pieces per order',
    'bez-li-2':        'Seasonal and changing selection',
    'bez-li-3':        'Delivery on agreed date & time',
    'bez-li-4':        'Suitable for vegetarian, vegan & gluten-free',
    'bez-cta':         'Make a request',

    // About
    'about-eyebrow-who':   'Who we are',
    'about-bio-1':         '[Add your English story here — who you are, what you do, and who you cook for.]',
    'about-bio-2':         '[Second paragraph — your background, training or the types of clients you cook for.]',
    'about-story-eyebrow': 'Story & passion',
    'about-story-title':   'Why I cook',
    'about-story-bio-1':   '[Tell your story in English — where did your passion for cooking begin?]',
    'about-story-bio-2':   '[Second paragraph about what cooking means to you.]',
    'about-diff-eyebrow':  'Why we are different',
    'about-diff-title':    'What makes us unique?',
    'about-diff-1-label':  '[Distinguishing point 1]',
    'about-diff-1-text':   '[Describe what sets you apart — e.g. fully custom, always fresh produce, personal contact.]',
    'about-diff-2-label':  '[Distinguishing point 2]',
    'about-diff-2-text':   '[Second distinguishing feature — e.g. seasonal menus, ingredient transparency, your style.]',
    'about-diff-3-label':  '[Distinguishing point 3]',
    'about-diff-3-text':   '[Third point — e.g. full service, personal approach, or the experience you create.]',
    'about-cta':           'Make a request',

    // Request page
    'req-heading':     'Submit a request',
    'req-sub':         'Fill in the form and I will get back to you as soon as possible.',
    'req-pick':        'Choose a service',
    'req-sec-personal':'Your details',
    'req-name-label':  'Name <span class="required">*</span>',
    'req-phone-label': 'Phone number',
    'req-email-label': 'Email address <span class="required">*</span>',
    'req-sec-event':   'About the event',
    'req-guests-label':'Number of guests <span class="required">*</span>',
    'req-date-label':  'Preferred date',
    'req-location-label':'Location (address / city)',
    'req-sec-extra':   'Additional information',
    'req-desc-label':  'Description &amp; any dietary requirements <span class="required">*</span>',
    'req-submit':      'Submit request →',
    'req-name-ph':     'Your full name',
    'req-phone-ph':    'E.g. +31 6 12345678',
    'req-email-ph':    'your@email.com',
    'req-guests-ph':   'E.g. 20',
    'req-location-ph': 'E.g. Amsterdam',
    'req-desc-ph':     'Tell us more about your event, dietary requirements or special requests...',
    'req-error-fields':'Please fill in all required fields.',
    'req-error-service':'Please select a service.',

    // Wine arrangement (shared across dinner pages)
    'wine-title':      'Wine Arrangement',
    'wine-bio-1':      'Complete your dinner with a carefully curated wine arrangement. We select wines that perfectly complement the dishes and your occasion — from an elegant aperitif to a matching wine with each course.',
    'wine-bio-2':      'Whether you choose a classic wine pairing or personalised advice, we ensure a culinary experience that engages all the senses.',

    // Home page
    'home-title':      'Fine catering &amp; dining<br>in the comfort of your own home',
    'home-sub':        'TheCook.nu combines culinary refinement with a personal and relaxed setting — from intimate dinners to business gatherings and special celebrations.',
    'home-tagline':    'Restaurant quality, at your home.',
    'home-btn-about':  'About me',
    'home-card-hc-desc':'A chef at home for the moments that deserve something extra. Refined, organic and fully bespoke.',
    'home-card-bd-desc':'Business dining in your own environment. Professional, flexible and tailored to the last detail.',
    'home-card-cel-desc':'From birthdays to special milestones — a stylish and carefree culinary experience. Specialised in 21st birthday dinners.',
    'home-card-wd-desc':'Refined small dishes in an informal, standing setting. Dynamic, stylish and surprising.',
    'home-card-ce-desc':"Cook together, experience together. In pairs, your guests prepare a complete dinner under professional guidance — interactive and connecting.",
    'home-cta-eyebrow':'Ready to enjoy?',
    'home-cta-text':   'Let us take care of your culinary experience — fully customised and tailored to your wishes in every detail.',
    'home-cta-btn':    'Request',

    // Business Dining (zakelijk) - body content
    'zak-lead-main':   'Business dining takes on a new dimension when it takes place in your own environment.',
    'zak-bio-1':       'TheCook.nu provides refined dinners and lunches for business occasions, with quality, discretion and complete peace of mind at the forefront. From intimate client dinners to larger gatherings with colleagues — we create a professional yet relaxed atmosphere for good conversation and connection.',
    'zak-bio-2':       'We understand that business gatherings often require precise planning and specific requirements. That is why we align our service carefully with your programme and take into account dietary needs, allergies and personal preferences.',
    'zak-bio-3':       'With carefully selected ingredients and a personal approach, we bring restaurant quality to your table.',
    'zak-tagline':     'Professional, flexible and taken care of to the last detail.',
    'zak-btn':         'Request',

    // Home Cooking (familie) - body content
    'fam-eyebrow':     'For businesses and family clients',
    'fam-title':       'Business Dining',
    'fam-lead':        'Family dining takes on a new dimension when it takes place in your own environment.',
    'fam-bio-1':       'TheCook.nu provides refined dinners and lunches for family occasions, with quality, discretion and complete peace of mind at the forefront. From intimate dinners to larger gatherings with colleagues — we create a professional yet relaxed atmosphere for good conversation and connection.',
    'fam-bio-2':       'We understand that family gatherings often require precise planning and specific requirements. That is why we align our service carefully with your programme and take into account dietary needs, allergies and personal preferences.',
    'fam-bio-3':       'With carefully selected ingredients and a personal approach, we bring restaurant quality to your table.',
    'fam-tagline':     'Professional, flexible and taken care of to the last detail.',
    'fam-btn':         'Request',

    // Celebrations (thema) - missing keys
    'cel-bio-2':       'From intimate birthday dinner to wedding reception — we turn every festive moment into a culinary memory that lasts. With carefully selected ingredients and a personal approach, we bring restaurant quality to your table.',
    'cel-tagline':     'Festive, memorable and taken care of to the last detail.',

    // Walking Dinner - missing keys
    'wd-tagline':      'Relaxed, social and culinarily refined.',

    // Cooking Experiences (wijn) - missing keys
    'ce-bio-2':        'Professional and fun, perfect as team building or a unique dinner with friends. With carefully selected ingredients and a personal approach, we bring restaurant quality to your table.',
    'ce-tagline':      'Interactive, hands-on and culinarily refined.',

    // About page
    'about-welcome':      'Welcome to TheCook.nu',
    'about-intro-1':      'TheCook.nu – fine catering &amp; dining – was born from the desire to enjoy culinary excellence in an intimate, familiar environment, without having to go to a restaurant.',
    'about-intro-2':      'What started within our own network of friends and business associates has grown into a total concept that perfectly meets this need. We combine the warmth of a home setting with culinary refinement, high-quality service and fully taking care of our guests.',
    'about-intro-3':      'This creates space to truly enjoy — as a guest and as host.',
    'about-exp-eyebrow':  'The experience',
    'about-exp-title':    'Dining in your own restaurant',
    'about-exp-bio-1':    'Whether it is a formal business dinner or an informal occasion: dining in your own "restaurant" proves time and again to be a special and valued experience. It creates a relaxed setting where conversations naturally flow and connection is central.',
    'about-exp-bio-2':    "From a business dinner to a jubilee, such as a 50th wedding anniversary with family and friends or a ladies' lunch for a birthday — we take care of the complete culinary programme, so you have nothing to worry about. No planning, no washing up, just enjoying the moment.",
    'about-final-eyebrow':'In conclusion',
    'about-final-bio-1':  'By listening carefully and immersing ourselves in your wishes, we create an experience that is completely tailored to you.',
    'about-final-bio-2':  'Small or large, business or private, understated or festive — every event is unique. We are happy to make a personal proposal for you.',
    'about-final-bio-3':  'In addition to TheCook.nu, I work as a professional Chef and am regularly hired by companies including renowned restaurants. This experience translates into a high culinary standard, with quality, technique and presentation at the forefront.',
    'about-tagline':      'My name is Monique Varossieau – your private Chef.',
  },

  nl: {
    'nav-home':        'Home',
    'nav-about':       'Over mij',
    'nav-dinners':     'Dinners <span class="dropdown-arrow">▼</span>',
    'nav-business':    'Business Dining',
    'nav-homecooking': 'Home Cooking',
    'nav-celebrations':'Celebrations',
    'nav-walking':     'Walking Dinner',
    'nav-cooking':     'Cooking Experiences',
    'nav-request':     'Aanvragen',

    'btn-request':     'Maak een aanvraag',
    'footer-copy':     '© 2026',

    'zak-eyebrow':     'Voor bedrijven en zakelijke klanten',
    'zak-title':       'Business Dining',
    'zak-lead':        'Verfijnde culinaire ervaringen op maat voor uw zakelijke gelegenheden — van intieme klantafspraken tot grootschalige netwerkevents.',
    'zak-concept-title':'Wat bieden wij aan?',
    'zak-li-1':        'Zakelijke diners & lunches',
    'zak-li-2':        'Klantafspraken',
    'zak-li-3':        'Netwerkevents',
    'zak-li-4':        'Walking-dinners (zakelijke context)',
    'zak-li-5':        'Netwerkborrels',
    'zak-li-6':        'Recepties',
    'zak-bio':         'Elk evenement wordt volledig op maat samengesteld — van de mise-en-place tot het laatste bord. U ontvangt uw gasten, wij regelen de rest.',
    'zak-crosssell':   'Looking for something more interactive?',
    'zak-crosssell-link': 'Discover our Walking Dinner.',
    'zak-cta':         'Request a quote',
    'zak-gallery':     'Gerechten',

    'hc-eyebrow':      'Voor privé, intiem, thuis',
    'hc-title':        'Home Cooking',
    'hc-lead':         'De chef aan huis ervaring — u bent de gast aan uw eigen tafel. Wij koken vers, intiem en volledig op maat voor u en uw gasten.',
    'hc-concept-title':'Het concept',
    'hc-bio':          'Geniet van een restaurant-beleving in de comfort van uw eigen huis. Ik kom naar u toe, kook alles vers op locatie en laat uw keuken schoon achter. U hoeft nergens aan te denken — behalve genieten.',
    'hc-sit-title':    'Situaties',
    'hc-sit-1':        'Diners of lunches met vrienden',
    'hc-sit-2':        'Kleine, intieme groepen',
    'hc-opt-title':    'Opties',
    'hc-opt-1':        'Menu vanaf 3 gangen',
    'hc-opt-2':        'Shared dining',
    'hc-crosssell':    'Op zoek naar iets interactiefs?',
    'hc-crosssell-link': 'Ontdek onze Cooking Experiences.',
    'hc-cta':          'Plan thuis diner of lunch',
    'hc-gallery':      'Gerechten',

    'cel-eyebrow':     'Voor alles wat feestelijk is',
    'cel-title':       'Celebrations',
    'cel-lead':        'Van een intiem verjaardagsdiner tot een bruidsreceptie — wij maken van elk feestelijk moment een culinaire herinnering die bijblijft.',
    'cel-concept-title':'Wat vieren we?',
    'cel-li-1':        '21-diners of lunches',
    'cel-li-2':        'Verjaardagen — ladies lunch & herendiner',
    'cel-li-3':        'Familiediners',
    'cel-li-4':        'Bruiloften',
    'cel-walk-title':  'Walking dinner optie',
    'cel-walk-bio':    'Wil je de gasten laten minglen? Kies voor een walking dinner in een feestelijke setting — kleine gerechtjes die staand rondgebracht en genuttigd worden in een informele sfeer.',
    'cel-crosssell':   'Iets interactiefs voor het gezelschap?',
    'cel-crosssell-link': 'Bekijk ons Walking Dinner.',
    'cel-cta':         'Celebrate with us',
    'cel-gallery':     'Gerechten',

    'wd-eyebrow':      'Zakelijk & feestelijk',
    'wd-title':        'Walking Dinner',
    'wd-lead':         'Kleine gerechtjes, staand genuttigd, terwijl uw gasten vrij kunnen minglen. Het perfecte format voor een netwerkborrel, receptie of feestelijk samenzijn.',
    'wd-concept-title':'Het concept',
    'wd-bio':          'Bij een walking dinner wordt elk gerecht in kleine porties rondgebracht en staand gegeten. Er is geen vaste tafel — gasten bewegen vrij door de ruimte, wat zorgt voor een ontspannen en sociale sfeer.',
    'wd-ex-title':     'Voorbeelden',
    'wd-ex-1':         'Zakelijk: netwerkborrels, recepties, klantavonden',
    'wd-ex-2':         'Privé: verjaardagen, bruiloften, informele feesten',
    'wd-ex-3':         '4–6 rondgaande gangen',
    'wd-ex-4':         '10–80 personen',
    'wd-menu-title':   'Menu opties',
    'wd-menu-1':       'Klassieke amuses & bites',
    'wd-menu-2':       'Seizoensgebonden mini-gangen',
    'wd-menu-3':       'Vegetarisch, vegan & glutenvrij mogelijk',
    'wd-menu-4':       'Volledig verzorgd: bereiding, bediening & opruimen',
    'wd-cta':          'Maak een aanvraag',
    'wd-gallery':      'Gerechten',

    'ce-eyebrow':      'Interactief & hands-on',
    'ce-title':        'Cooking Experiences',
    'ce-lead':         'Koken als beleving — samen aan het werk in de keuken onder begeleiding van de chef. Professioneel én leuk, perfect als teambuilding of een uniek diner met vrienden.',
    'ce-concept-title':'Wat bieden wij aan?',
    'ce-li-1':         'Teambuilding',
    'ce-li-2':         'Samen koken',
    'ce-li-3':         'Persoonlijke begeleiding door de chef',
    'ce-bio':          'U kookt zelf mee, wij begeleiden. Geen ervaring nodig — alleen zin in gezelligheid, leren en lekker eten. Aan het einde zit iedereen samen aan tafel om te genieten van wat er gezamenlijk gemaakt is.',
    'ce-cta-1':        'Boek een interactief diner of lunch',
    'ce-cta-2':        'Plan jouw Team Experience',
    'ce-gallery':      'Impressie',

    'bez-eyebrow':     'Diensten',
    'bez-title':       'Bezorgen van Amuses',
    'bez-lead':        'Wilt u uw gasten verrassen zonder dat ik ter plaatse kom? Ik bezorg verse, zelfgemaakte amuses direct bij u thuis of op locatie.',
    'bez-concept-title':'Hoe werkt het?',
    'bez-bio':         'De amuses worden op de dag zelf vers bereid en bezorgd in stijlvolle verpakking, compleet met opmaak- of verwarm-instructies waar nodig. Perfect als verfijnd voorgerecht bij uw eigen diner of als luxe borrel-hapjes.',
    'bez-li-1':        'Minimaal 10 stuks per bestelling',
    'bez-li-2':        'Seizoensgebonden en wisselend aanbod',
    'bez-li-3':        'Bezorging op afgesproken datum & tijd',
    'bez-li-4':        'Geschikt voor vegetarisch, vegan & glutenvrij',
    'bez-cta':         'Maak een aanvraag',

    'about-eyebrow-who':   'Over de chef',
    'about-bio-1':         '[Schrijf hier jouw verhaal. Wie ben je? Waar komt jouw passie voor koken vandaan?]',
    'about-bio-2':         '[Vertel gerust over jouw achtergrond, opleiding of bijzondere ervaringen.]',
    'about-story-eyebrow': 'Verhaal & passie',
    'about-story-title':   'Waarom ik kook',
    'about-story-bio-1':   '[Vertel hier het échte verhaal achter jouw passie voor koken.]',
    'about-story-bio-2':   '[Tweede alinea over wat koken voor jou betekent.]',
    'about-diff-eyebrow':  'Waarom wij anders zijn',
    'about-diff-title':    'Wat maakt ons uniek?',
    'about-diff-1-label':  '[Onderscheidend punt 1]',
    'about-diff-1-text':   '[Beschrijf hier wat jou onderscheidt.]',
    'about-diff-2-label':  '[Onderscheidend punt 2]',
    'about-diff-2-text':   '[Tweede onderscheidend kenmerk.]',
    'about-diff-3-label':  '[Onderscheidend punt 3]',
    'about-diff-3-text':   '[Derde punt.]',
    'about-cta':           'Maak een aanvraag',

    'req-heading':     'Aanvraag indienen',
    'req-sub':         'Vul het formulier in en ik neem zo snel mogelijk contact met je op.',
    'req-pick':        'Kies een dienst',
    'req-sec-personal':'Jouw gegevens',
    'req-name-label':  'Naam <span class="required">*</span>',
    'req-phone-label': 'Telefoonnummer',
    'req-email-label': 'E-mailadres <span class="required">*</span>',
    'req-sec-event':   'Over het evenement',
    'req-guests-label':'Aantal gasten <span class="required">*</span>',
    'req-date-label':  'Gewenste datum',
    'req-location-label':'Locatie (adres / stad)',
    'req-sec-extra':   'Extra informatie',
    'req-desc-label':  'Beschrijving &amp; eventuele dieetwensen <span class="required">*</span>',
    'req-submit':      'Verstuur aanvraag →',
    'req-name-ph':     'Jouw volledige naam',
    'req-phone-ph':    'Bijv. 06 12345678',
    'req-email-ph':    'jouw@email.nl',
    'req-guests-ph':   'Bijv. 20',
    'req-location-ph': 'Bijv. Amsterdam',
    'req-desc-ph':     'Vertel meer over jouw evenement, dieetwensen of speciale verzoeken...',
    'req-error-fields':'Vul alstublieft alle verplichte velden in.',
    'req-error-service':'Kies alstublieft een dienst.',

    // Wine arrangement (shared)
    'wine-title':      'Wijn Arrangement',
    'wine-bio-1':      'Maak uw diner compleet met een zorgvuldig samengesteld wijnarrangement. Wij selecteren wijnen die perfect aansluiten bij de gerechten en uw gelegenheid — van een elegante aperitief tot een passende wijn bij elk gang.',
    'wine-bio-2':      'Of u nu kiest voor een klassieke wijnbegeleiding of een persoonlijk advies op maat, wij zorgen voor een culinaire beleving die alle zintuigen aanspreekt.',

    // Home page
    'home-title':      'Fine catering &amp; dining<br>in the comfort of your own home',
    'home-sub':        'TheCook.nu combineert culinaire verfijning met een persoonlijke en ontspannen setting — van intieme diners tot zakelijke bijeenkomsten en bijzondere vieringen.',
    'home-tagline':    'Restaurantkwaliteit, bij u thuis.',
    'home-btn-about':  'Over mij',
    'home-card-hc-desc':'Een chef aan huis voor de momenten die nét iets extra\'s verdienen. Verfijnd, biologisch en volledig op maat.',
    'home-card-bd-desc':'Zakelijk dineren in uw eigen omgeving. Representatief, flexibel en tot in detail afgestemd.',
    'home-card-cel-desc':'Van verjaardagen tot bijzondere mijlpalen — een stijlvolle en zorgeloze culinaire ervaring. Gespecialiseerd in 21-diners.',
    'home-card-wd-desc':'Verfijnde gerechtjes in een informele, staande setting. Dynamisch, stijlvol en verrassend.',
    'home-card-ce-desc':'Samen koken, samen beleven. In duo\'s bereiden uw gasten onder professionele begeleiding een compleet diner — interactief en verbindend.',
    'home-cta-eyebrow':'Klaar om te genieten?',
    'home-cta-text':   'Laat ons uw culinaire invulling verzorgen — volledig op maat en tot in detail afgestemd op uw wensen.',
    'home-cta-btn':    'Aanvragen',

    // Business Dining (zakelijk) - body content
    'zak-lead-main':   'Zakelijk dineren krijgt een nieuwe dimensie wanneer het plaatsvindt in uw eigen omgeving.',
    'zak-bio-1':       'TheCook.nu verzorgt verfijnde diners en lunches voor zakelijke gelegenheden, waarbij kwaliteit, discretie en volledige ontzorging centraal staan. Van intieme diners met relaties tot grotere settings met collega\'s waar ook walking dinners tot de mogelijkheden behoort — wij creëren een professionele, maar ontspannen sfeer waarin ruimte is voor goed gesprek en verbinding.',
    'zak-bio-2':       'Wij begrijpen dat zakelijke bijeenkomsten vaak vragen om een strakke planning en specifieke wensen. Daarom stemmen wij onze service nauwkeurig af op uw programma en houden wij rekening met dieetwensen, allergieën en persoonlijke voorkeuren.',
    'zak-bio-3':       'Met zorgvuldig geselecteerde producten en een persoonlijke benadering brengen wij restaurantniveau naar uw tafel.',
    'zak-tagline':     'Representatief, flexibel en tot in detail verzorgd.',
    'zak-btn':         'Aanvragen',

    // Home Cooking (familie) - body content
    'fam-eyebrow':     'Voor bedrijven en Familiee klanten',
    'fam-title':       'Business Dining',
    'fam-lead':        'Familie dineren krijgt een nieuwe dimensie wanneer het plaatsvindt in uw eigen omgeving.',
    'fam-bio-1':       'TheCook.nu verzorgt verfijnde diners en lunches voor Familiee gelegenheden, waarbij kwaliteit, discretie en volledige ontzorging centraal staan. Van intieme diners met relaties tot grotere settings met collega\'s waar ook walking dinners tot de mogelijkheden behoort — wij creëren een professionele, maar ontspannen sfeer waarin ruimte is voor goed gesprek en verbinding.',
    'fam-bio-2':       'Wij begrijpen dat Familiee bijeenkomsten vaak vragen om een strakke planning en specifieke wensen. Daarom stemmen wij onze service nauwkeurig af op uw programma en houden wij rekening met dieetwensen, allergieën en persoonlijke voorkeuren.',
    'fam-bio-3':       'Met zorgvuldig geselecteerde producten en een persoonlijke benadering brengen wij restaurantniveau naar uw tafel.',
    'fam-tagline':     'Representatief, flexibel en tot in detail verzorgd.',
    'fam-btn':         'Aanvragen',

    // Celebrations - ontbrekende sleutels
    'cel-bio-2':       'Van intiem verjaardagsdiner tot bruidsreceptie — wij maken van elk feestelijk moment een culinaire herinnering die bijblijft. Met zorgvuldig geselecteerde producten en een persoonlijke benadering brengen wij restaurantniveau naar uw tafel.',
    'cel-tagline':     'Feestelijk, memorabel en tot in detail verzorgd.',

    // Walking Dinner - ontbrekende sleutels
    'wd-tagline':      'Ontspannen, sociaal en culinair verfijnd.',

    // Cooking Experiences - ontbrekende sleutels
    'ce-bio-2':        'Professioneel én leuk, perfect als teambuilding of een uniek diner met vrienden. Met zorgvuldig geselecteerde producten en een persoonlijke benadering brengen wij restaurantniveau naar uw tafel.',
    'ce-tagline':      'Interactief, hands-on en culinair verfijnd.',

    // About pagina
    'about-welcome':      'Welkom bij TheCook.nu',
    'about-intro-1':      'TheCook.nu – fine catering &amp; dining – is ontstaan vanuit de wens om culinair te genieten in een intieme, vertrouwde omgeving, zonder de gang naar een restaurant.',
    'about-intro-2':      'Wat begon binnen ons eigen netwerk van vrienden en zakenrelaties, is uitgegroeid tot een totaalconcept dat perfect aansluit op deze behoefte. Wij combineren de warmte van de thuissfeer met culinaire verfijning, hoogwaardige service en het volledig ontzorgen van onze gasten.',
    'about-intro-3':      'Zo ontstaat er ruimte om écht te genieten — als gast én als gastheer of gastvrouw.',
    'about-exp-eyebrow':  'De ervaring',
    'about-exp-title':    'Dineren in uw eigen restaurant',
    'about-exp-bio-1':    'Of het nu gaat om een formeel zakelijk diner of een informele gelegenheid: dineren in uw eigen "restaurant" blijkt keer op keer een bijzondere en gewaardeerde ervaring. Het creëert een ontspannen setting waarin gesprekken vanzelf op gang komen en verbinding centraal staat.',
    'about-exp-bio-2':    'Van een zakelijk diner tot een jubileum, zoals een 50-jarig huwelijk met familie en vrienden of een ladies lunch bij een verjaring — wij verzorgen de complete culinaire invulling, zodat u zich nergens zorgen over hoeft te maken. Geen planning, geen afwas, alleen genieten van het moment.',
    'about-final-eyebrow':'Tot slot',
    'about-final-bio-1':  'Door goed te luisteren en ons te verdiepen in uw wensen, creëren wij een ervaring die volledig op maat is.',
    'about-final-bio-2':  'Klein of groot, zakelijk of privé, ingetogen of feestelijk — elk event is uniek. Wij maken graag een persoonlijk voorstel voor u.',
    'about-final-bio-3':  'Naast TheCook.nu werk ik als professioneel Chef en word ik regelmatig ingehuurd door bedrijven waaronder gerenommeerde restaurants. Deze ervaring vertaalt zich naar een hoog culinair niveau, waarbij kwaliteit, techniek en presentatie centraal staan.',
    'about-tagline':      'Mijn naam is Monique Varossieau – uw private Chef.',
  }
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang]?.[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = TRANSLATIONS[lang]?.[key];
    if (val !== undefined) el.placeholder = val;
  });
  localStorage.setItem('lang', lang);
  const nlSpan = document.querySelector('.lang-switch .ls-nl');
  const enSpan = document.querySelector('.lang-switch .ls-en');
  if (nlSpan) nlSpan.classList.toggle('ls-active', lang === 'nl');
  if (enSpan) enSpan.classList.toggle('ls-active', lang === 'en');
  document.documentElement.lang = lang;
}

function toggleLang() {
  const current = localStorage.getItem('lang') || 'nl';
  applyLanguage(current === 'nl' ? 'en' : 'nl');
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(localStorage.getItem('lang') || 'nl');
});
