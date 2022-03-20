const newsArticles = {
  technology: [
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Jay Peters",
      title:
        "Gran Turismo 7 has been largely unplayable for hours due to server maintenance - The Verge",
      description:
        "Gran Turismo 7 has been undergoing server maintenance for hours because of an issue found with update 1.07. The maintenance is limiting PS4 and PS5 players to one-off single-player races, and it’s unclear when it might end.",
      url: "https://www.theverge.com/2022/3/17/22983882/ps5-gran-turismo-7-update-1-0-7-server-outage-hours",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/CcRvmGfacH_sj2olHZHPdQ88nGc=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23325167/i1yUwuUQyq9FluH.jpeg",
      publishedAt: "2022-03-17T23:08:01Z",
      content:
        "Due to an issue found with Update 1.07, we are extending the current server maintenance period\r\nIt has extended server maintenance due to an issue.\r\nImage: Sony\r\nGran Turismo 7, one of the biggest Pl… [+1560 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Chaim Gartenberg",
      title:
        "Watch 14 minutes of gameplay from Hogwarts Legacy, the upcoming Harry Potter RPG - The Verge",
      description:
        "The first gameplay trailer for Hogwarts Legacy, the upcoming Harry Potter RPG, has arrived, showing off 14 minutes of footage from the title. It’ll be out holiday season 2022.",
      url: "https://www.theverge.com/2022/3/17/22983770/hogwarts-legacy-harry-potter-rpg-gameplay-reveal-trailer-release-date",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/jPVysLxIR1l7JUFeEOJ4NLJ_ElE=/0x46:2452x1330/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23324919/Screen_Shot_2022_03_17_at_5.03.39_PM.png",
      publishedAt: "2022-03-17T21:55:36Z",
      content: "Coming holiday season 2022",
    },
    {
      source: { id: null, name: "Kotaku" },
      author: "Ethan Gach",
      title:
        "Mario Kart 8 Connoisseurs Are Already Dissecting Its Newest Courses - Kotaku",
      description:
        "Fans are split on Mii erasure and whether Coconut Mall looks good enough",
      url: "https://kotaku.com/mario-kart-8-booster-course-pass-dlc-coconut-mall-chang-1848669317",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7595315995067905bf173747154cc65f.jpg",
      publishedAt: "2022-03-17T21:10:06Z",
      content:
        "Five years after it came to Switch, Mario Kart 8Deluxe is about to get eight new race tracks as part of its Booster Course Pass DLC, and players are already parsing whether they look deluxe enough. T… [+2520 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Andrew Cunningham",
      title:
        "Speedy new 5800X3D is AMD’s first non-overclockable Ryzen processor - Ars Technica",
      description:
        "New 3D V-Cache technology requires a lower voltage limit for the CPU.",
      url: "https://arstechnica.com/gadgets/2022/03/speedy-new-5800x3d-is-amds-first-non-overclockable-ryzen-processor/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/03/5800x3d-760x380.jpeg",
      publishedAt: "2022-03-17T20:49:06Z",
      content:
        "23 with 21 posters participating\r\nAMD's Ryzen 7 5800X3D promises to be one of the company's fastest gaming CPUs, and it's one of the last high-end chips that will grace the AM4 socket before Ryzen 70… [+1918 chars]",
    },
    {
      source: { id: null, name: "MacRumors" },
      author: "Juli Clover",
      title:
        "M1 Ultra Doesn't Beat Out Nvidia's RTX 3090 GPU Despite Apple's Charts - MacRumors",
      description:
        "Despite Apple's claims and charts, the new M1 Ultra chip is not able to outperform Nvidia's RTX 3090 in terms of raw GPU performance,...",
      url: "https://www.macrumors.com/2022/03/17/m1-ultra-nvidia-rtx-3090-comparison/",
      urlToImage:
        "https://images.macrumors.com/t/t4PAoZuIvQI5R-66wlNkh-OZZ3c=/1720x/article-new/2022/03/m1-ultra-performance-chart.jpg",
      publishedAt: "2022-03-17T20:17:42Z",
      content:
        "Despite Apple's claims and charts, the new M1 Ultra chip is not able to outperform Nvidia's RTX 3090 in terms of raw GPU performance, according to benchmark testing performed by The Verge.\r\nWhen the … [+1491 chars]",
    },
    {
      source: { id: null, name: "eWrestlingNews" },
      author: null,
      title: "Update On AEW’s Console Video Game - eWrestlingNews",
      description:
        "AEW continues to work on its first-ever console video game, but there has not been a lot of news as of late.",
      url: "https://www.ewrestlingnews.com/news/update-on-aews-console-video-game",
      urlToImage:
        "https://www.ewrestlingnews.com/wp-content/uploads/2021/12/01-all-elite-wrestling-aew-logo-2021.jpg",
      publishedAt: "2022-03-17T19:46:46Z",
      content:
        "AEW continues to work on its first-ever console video game, but there has not been a lot of news as of late. \r\nFightful Select reports there is a story mode with input from certain wrestlers and some… [+676 chars]",
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Florence Ion",
      title: "The Smart Home Of The Future Just Got Delayed—Again - Gizmodo",
      description:
        "The CSA has announced it's delaying the launch of Matter to fall of 2022.",
      url: "https://gizmodo.com/the-smart-home-of-the-future-just-got-delayed-again-1848668296",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/da10340da562e4f6515647bd32a79869.jpg",
      publishedAt: "2022-03-17T19:35:00Z",
      content:
        "Where is Matter, the smart home standard of the future? The specification still feels like a theory. It doesnt help that theres yet another delay on the horizon.\r\nGranted, its not easy pushing throug… [+2509 chars]",
    },
    {
      source: { id: "polygon", name: "Polygon" },
      author: "Nicole Carpenter",
      title:
        "Elden Ring’s most mysterious and secret items, explained - Polygon",
      description:
        "There are so many mysterious items in FromSoftware’s Elden Ring. What are Golden Runes? What about Rowa Raisins? Can Torrent die? We answer all the questions about items that you felt embarrassed to ask.",
      url: "https://www.polygon.com/elden-ring-guide-walkthrough/22983253/secrets-items-what-is-golden-rune-stonesword-key-can-torrent-die-rowa-raisins-glovewort",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/GE94GuMkieOP9kunvpbT3UUY-fE=/0x57:2880x1565/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23267965/Elden_Ring_Keepsakes_header.jpg",
      publishedAt: "2022-03-17T19:12:53Z",
      content:
        "If youre anything like me, you have been picking up buckets full of items in Elden Ring and leaving them to languish in your inventory. Maybe thats because you forgot you had them, overwhelmed by the… [+5295 chars]",
    },
    {
      source: { id: "polygon", name: "Polygon" },
      author: "Michael McWhertor",
      title:
        "Elden Ring’s most overpowered PvP build nerfed in new patch - Polygon",
      description:
        "A new Elden Ring patch (1.03) fixes the game’s most annoying PvP build, the Fire’s Deadly Sin incantation/Eclipse Shotel curved sword exploit.",
      url: "https://www.polygon.com/22983055/elden-ring-patch-pvp-exploit-eclipse-shotel-fires-deadly-sin-mimic-tear",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/iIQHhCdrkvn2tcovl3kMKp2gDAA=/0x150:3840x2160/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23324305/FOEjeFTWUAIWOYA.jpeg",
      publishedAt: "2022-03-17T18:45:00Z",
      content:
        "Elden Rings new patch, version 1.03, made a handful of overpowered weapons and summons in FromSoftwares new game less effective, much to the frustration of players who relied on certain swords, ashes… [+2146 chars]",
    },
    {
      source: { id: null, name: "Kotaku" },
      author: "Sisi Jiang",
      title:
        "How To Revive Those Elden Ring NPCs You Murdered Before The Patch Fixed Their Quests - Kotaku",
      description:
        "You can reset the status of many NPCs with the help of a turtle in a pope hat",
      url: "https://kotaku.com/elden-ring-revive-church-of-vows-miriel-kenneth-dialos-1848667976",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/14b0b09c5a3a55669c66d468adbf3850.jpg",
      publishedAt: "2022-03-17T18:35:00Z",
      content:
        "If youre an overeager (or overly violent) Elden Ring player, then you might have killed a few NPCs here and there without realizing that they were actually crucial to a quest, or that they were holdi… [+1653 chars]",
    },
    {
      source: { id: null, name: "Pinkbike.com" },
      author: null,
      title:
        "Video: Dream Builds - A Classy Chrome Commencal Meta TR 29 - Pinkbike.com",
      description:
        "Beta Photo Director Anthony Smith builds up this Meta TR 29 into one of the most stunning all-metal dream builds we've ever seen.",
      url: "https://www.pinkbike.com/news/video-dream-builds-a-classy-chrome-commencal-meta-tr-29.html",
      urlToImage: "https://ep1.pinkbike.org/p4pb22232446/p4pb22232446.jpg",
      publishedAt: "2022-03-17T18:34:01Z",
      content:
        "Our first Dream Build wasnt on YouTube. It was on paper. Beta Gear Editor (and former World Cup mechanic) Ryan Palmer, whose corrugated aluminum lair youre about to step into, first made fantasy into… [+1679 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Corbin Davenport",
      title:
        "Android 13 Developer Preview 2 brings the app drawer to the taskbar - XDA Developers",
      description:
        "Android 13 updates the taskbar on large-screen devices with a new button to open the app drawer without going to the home screen.",
      url: "https://www.xda-developers.com/android-13-app-drawer-taskbar/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/03/Android-13-logo-within-tablet-vector-on-gradient-background.jpg",
      publishedAt: "2022-03-17T18:18:00Z",
      content:
        "Android 13 Developer Preview 2 was just released on Thursday, with another round of new features and changes leading up to the final release of Android 13 later this year. Google highlighted some of … [+1881 chars]",
    },
    {
      source: { id: null, name: "Lifehacker.com" },
      author: "Jake Peterson",
      title: "Apple's Latest Update Can Brick Your Mac - Lifehacker",
      description:
        "Apple's macOS 12.3 update is bricking Macs across the board.",
      url: "https://lifehacker.com/apples-latest-update-can-brick-your-mac-1848666760",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/96f95175d41099e0f186126035c02642.jpg",
      publishedAt: "2022-03-17T18:00:00Z",
      content:
        "When it comes to updates, especially from Apple, Im usually one to say install it ASAP. After all, these updates usually go through weeks, if not months, of beta testingplenty of time to find and wee… [+3676 chars]",
    },
    {
      source: { id: null, name: "Bungie.net" },
      author: null,
      title: "This Week At Bungie – 3/17/2022 > News - Bungie",
      description:
        "Bungie.net is the Internet home for Bungie, the developer of Destiny, Halo, Myth, Oni, and Marathon, and the only place with official Bungie info straight from the developers.",
      url: "https://www.bungie.net/en/News/Article/51177",
      urlToImage:
        "https://www.bungie.net:45000/pubassets/pkgs/157/157363/FrontPageBanner_1920x590.jpg",
      publishedAt: "2022-03-17T17:43:18Z",
      content: null,
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Phillip Tracy",
      title: "Samsung's First QD-OLED TV Has Arrived - Gizmodo",
      description:
        "The Samsung OLED TV is available for pre-order today starting at $2,399.",
      url: "https://gizmodo.com/meet-the-samsung-oled-tv-s95b-its-first-qd-oled-tv-1848667654",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/54112085f7d2f662b43112b2bbe817fe.jpg",
      publishedAt: "2022-03-17T17:40:00Z",
      content:
        "Samsung announced the pre-order availability of several flagship TV models shown at CES 2022 earlier this year, but buried at the bottom of its press release were three words that immediately caught … [+2740 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Samantha Murphy Kelly, CNN Business",
      title:
        "Samsung's latest budget 5G smartphone takes on the iPhone SE - CNN",
      description:
        "Barely a week after Apple unveiled its first budget 5G smartphone, Samsung announced a competing model that rivals it on price.",
      url: "https://www.cnn.com/2022/03/17/tech/samsung-galaxy-a53-5g/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317122149-20220317-samsung-galaxy-a53-5g-super-tease.jpg",
      publishedAt: "2022-03-17T17:35:00Z",
      content: null,
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Ron Amadeo",
      title:
        "Google Play Store will promote tablet apps with “quality” ranking - Ars Technica",
      description:
        "The next part of Google's tablet push is easier app discovery.",
      url: "https://arstechnica.com/gadgets/2022/03/google-play-store-will-promote-tablet-apps-with-quality-ranking/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2021/12/Screen-Shot-2021-12-09-at-3.39.16-PM-760x380.png",
      publishedAt: "2022-03-17T17:26:38Z",
      content:
        "Enlarge/ A mockup of Android 12L running on different types and sizes of devices.\r\n22 with 21 posters participating\r\nGoogle wants to make 2022 the year of Android tablets, and after launching a table… [+2326 chars]",
    },
    {
      source: { id: null, name: "9to5google.com" },
      author: null,
      title:
        "Android TV 12 will start showing up on TVs ‘early’ this year, dev preview now available via OTA - 9to5Google",
      description:
        'Google has quietly confirmed that Android TV 12 will finally make its formal debut on TVs starting "early" this year.',
      url: "https://9to5google.com/2022/03/17/android-tv-12-rollout-ota/",
      urlToImage:
        "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2020/04/google_adt3_android_tv_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-03-17T17:17:08Z",
      content:
        "Android TV 12 is one of the platform’s most meaningful updates in a while, but despite its early start, Google has yet to release the final version. In a new blog post published this week, Google has… [+1685 chars]",
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Cam Shea",
      title: "Hearthstone is Going on a Voyage to the Sunken City! - IGN - IGN",
      description: null,
      url: "https://www.ign.com/articles/hearthstone-voyage-to-the-sunken-city-expansion",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/03/17/hs-sunken-1280-1647497355818.jpg?width=1280",
      publishedAt: "2022-03-17T17:04:26Z",
      content:
        "Blizzard today announced the first full Hearthstone expansion for 2022 - Voyage to the Sunken City. This set of 135 new cards will be available on April 12 in NA and April 13 in ANZ, and will take pl… [+2663 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Dark Deity - Launch Trailer - Nintendo Switch - Nintendo",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZp2DhM9IkS8",
      urlToImage: null,
      publishedAt: "2022-03-17T17:00:52Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more",
    },
  ],
  science: [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Ashley Strickland, CNN",
      title:
        "Watch NASA roll mega Artemis I moon rocket out to the launchpad - CNN",
      description:
        "On Thursday, NASA's 322-foot-tall Artemis I stack, including the mega SLS rocket and Orion capsule, began rolling out of the Vehicle Assembly Building at Cape Canaveral and will undergo an 11-hour, 4-mile ride to the launchpad aboard an Apollo-era giant NASA …",
      url: "https://www.cnn.com/2022/03/17/world/nasa-artemis-i-rollout-pad-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317160941-02-artemis-rollout-0317-super-tease.jpg",
      publishedAt: "2022-03-17T23:55:11Z",
      content: null,
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Tom Metcalfe",
      title:
        "1st image snapped by iconic Webb telescope pushes limits of the 'laws of physics' - Livescience.com",
      description:
        "The photo is even better than scientists hoped it would be.",
      url: "https://www.livescience.com/james-webb-telescope-image-limits-of-physics",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/oxh3ahgNZs2DXCMDBzH2W4-1200-80.jpg",
      publishedAt: "2022-03-17T19:07:21Z",
      content:
        "The James Webb Space Telescope\r\n (Webb) has released its first sharp image and it is a doozy — a spectacular view of a twinkling orange star that is focused with such sharpness that it pushes the lim… [+6049 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Using the Moon’s Orbit as a Powerful New Gravitational Wave Detector - SciTechDaily",
      description:
        "Researchers from the UAB, IFAE, and University College London propose using the variations in distance between the Earth and the Moon, which can be measured with a precision of less than a centimeter, as a new gravitational wave detector within a frequency ra…",
      url: "https://scitechdaily.com/using-the-moons-orbit-as-a-powerful-new-gravitational-wave-detector/",
      urlToImage: "https://scitechdaily.com/images/Moon-Earth-Sun.gif",
      publishedAt: "2022-03-17T17:28:51Z",
      content:
        "Researchers from the UAB, IFAE, and University College London propose using the variations in distance between the Earth and the Moon, which can be measured with a precision of less than a centimeter… [+4228 chars]",
    },
    {
      source: { id: null, name: "SpaceNews" },
      author: "Jeff Foust",
      title: "ESA suspends work with Russia on ExoMars mission - SpaceNews",
      description:
        "ESA has formally halted plans to launch its ExoMars mission on a Russian rocket in September in response to Russia’s invasion of Ukraine.",
      url: "https://spacenews.com/esa-suspends-work-with-russia-on-exomars-mission/",
      urlToImage:
        "https://spacenews.com/wp-content/uploads/2020/01/2.-ExoMars2018_Rover_20140321_9k.jpg",
      publishedAt: "2022-03-17T17:21:39Z",
      content:
        "Updated 2:45 p.m. Eastern with comments with ESA press conference.\r\nTITUSVILLE, Fla. The European Space Agency has formally halted plans to launch its ExoMars mission on a Russian rocket in September… [+3816 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Hannah Devlin",
      title:
        "‘Quantum hair’ could resolve Hawking’s black hole paradox, say scientists - The Guardian",
      description:
        "New mathematical formulation means huge paradigm shift in physics would not be necessary",
      url: "https://amp.theguardian.com/science/2022/mar/17/quantum-hair-could-resolve-stephen-hawking-black-hole-paradox-say-scientists",
      urlToImage: null,
      publishedAt: "2022-03-17T13:44:06Z",
      content:
        "Black holesNew mathematical formulation means huge paradigm shift in physics would not be necessary \r\nStephen Hawkings black hole information paradox has bedevilled scientists for half a century and … [+3922 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Jeanna Bryner",
      title:
        "Gaping 'sinkholes' opening up on the Arctic seafloor - Livescience.com",
      description:
        "Melting permafrost is causing parts of the seafloor to collapse.",
      url: "https://www.livescience.com/sinkholes-opening-arctic-seafloor",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/pnzb6Lw4gjCg3GesRM5s9A-1200-80.jpg",
      publishedAt: "2022-03-17T13:09:57Z",
      content:
        "Repeated surveys with MBARI’s mapping AUVs revealed dramatic changes to seafloor bathymetry from the Arctic shelf edge in the Canadian Beaufort Sea. This sinkhole developed in just nine years. (Image… [+4931 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Elizabeth Howell",
      title: "Another search for Planet 9 comes up empty - Space.com",
      description:
        "'Results ... are generally consistent with other null searches for Planet 9.'",
      url: "https://www.space.com/planet-9-search-empty-millimeter-survey",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/pEJBJF7P5Y9GGSGo8wDW2e-1200-80.jpg",
      publishedAt: "2022-03-17T10:24:48Z",
      content:
        "A theorized huge, ninth planet beyond the orbit of Neptune once again wasn't found in a new survey of the solar system's outer reaches.\r\nAstronomers scanned a large portion of the sky using the 6-met… [+3318 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Megan Marples",
      title:
        "A new armored dinosaur species from the early Jurassic period was discovered in China - CNN",
      description:
        "Researchers discovered the remains of a new dinosaur species called Yuxisaurus kopchicki in Yunnan province, China. The formidable creature was adorned with spikes and bony plates that covered most of its body.",
      url: "https://www.cnn.com/2022/03/17/world/yuxisaurus-kopchicki-dinosaur-species-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220315102441-yuxisaurus-kopchicki-dinosaur-species-scn-super-tease.jpg",
      publishedAt: "2022-03-17T09:53:39Z",
      content: null,
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Jamie Oberdick",
      title:
        "Novel theory of entropy may solve materials design issues - Phys.org",
      description:
        "A challenge in materials design is that in both natural and manmade materials, volume sometimes decreases, or increases, with increasing temperature. While there are mechanical explanations for this phenomenon for some specific materials, a general understand…",
      url: "https://phys.org/news/2022-03-theory-entropy-materials-issues.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/novel-theory-of-entrop.jpg",
      publishedAt: "2022-03-16T20:51:19Z",
      content:
        "A challenge in materials design is that in both natural and manmade materials, volume sometimes decreases, or increases, with increasing temperature. While there are mechanical explanations for this … [+5517 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Alejandra O'Connell-Domenech",
      title:
        "NASA's Mars helicopter will continue flying on red planet | TheHill - The Hill",
      description:
        "The small Ingenuity Mars Helicopter recently completed its 21st flight on the planet.",
      url: "https://thehill.com/changing-america/enrichment/arts-culture/598493-nasas-mars-helicopter-will-continue-flying-on-red",
      urlToImage:
        "https://thehill.com/sites/default/files/ca_ingenuitysecondflight_042221nasa_0.jpg",
      publishedAt: "2022-03-16T20:50:06Z",
      content:
        "NASAs Ingenuity Mars Helicopter will keep making trips at least through September.  \r\nThe tiny chopper hitched a ride to Mars on the Perseverance Rover in the summer of 2020 and landed on the planets… [+2003 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X staff",
      title:
        "Effects of ancient carbon releases suggest possible scenarios for future climate - Phys.org",
      description:
        "A massive release of greenhouse gases, likely triggered by volcanic activity, caused a period of extreme global warming known as the Paleocene-Eocene Thermal Maximum (PETM) about 56 million years ago. A new study now confirms that the PETM was preceded by a s…",
      url: "https://phys.org/news/2022-03-effects-ancient-carbon-scenarios-future.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2022/effects-of-ancient-car.jpg",
      publishedAt: "2022-03-16T18:00:11Z",
      content:
        "A massive release of greenhouse gases, likely triggered by volcanic activity, caused a period of extreme global warming known as the Paleocene-Eocene Thermal Maximum (PETM) about 56 million years ago… [+6272 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Amanda Kooser",
      title: "Asteroid Spotted a Mere Two Hours Before Impacting Earth - CNET",
      description: "We're getting better at finding the sneakiest asteroids.",
      url: "https://www.cnet.com/science/space/asteroid-spotted-a-mere-two-hours-before-impacting-earth/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/b63e3b74f30bd4af63d7561723a976e52df7af30/2022/03/15/f5b4424f-2448-45d0-a028-c6ea70df6454/klet-observatory-sees-asteroid-2.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-03-16T17:22:00Z",
      content:
        "The Klet Observatory in the Czech Republic snapped asteroid 2022 EB5 just 13 minutes before impact.\r\nESA/Red circle by Amanda Kooser/CNET\r\nTwo hours. That's about how much time elapsed between the di… [+2213 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Ryan Morrison",
      title:
        "Slow moving central section of the San Andreas Fault could lead to larger earthquakes - Daily Mail",
      description:
        "Researchers looked back through the geological record for the slow moving portion of the San Andreas fault, and found it has experienced earthquakes of magnitude seven and higher.",
      url: "https://www.dailymail.co.uk/sciencetech/article-10619615/Slow-moving-central-section-San-Andreas-Fault-lead-larger-earthquakes.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/03/16/16/55436357-0-image-a-16_1647448228372.jpg",
      publishedAt: "2022-03-16T16:37:16Z",
      content:
        "A slow-moving central section of the 800-mile San Andreas Fault line in California could play host to much larger earthquakes than previously thought, according to a new study.\r\nSituated between Park… [+12360 chars]",
    },
    {
      source: { id: null, name: "Nature.com" },
      author: null,
      title:
        "High-resolution laser resonances of antiprotonic helium in superfluid 4He - Nature.com",
      description:
        "The spectral lines of antiprotonic helium atoms are shown to retain their sub-gigahertz linewidth upon submersion in a bath of superfluid helium, enabling the hyperfine structure to be resolved.",
      url: "https://www.nature.com/articles/s41586-022-04440-7",
      urlToImage:
        "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-022-04440-7/MediaObjects/41586_2022_4440_Fig1_HTML.png",
      publishedAt: "2022-03-16T16:18:44Z",
      content:
        "<li>Toennies, J. P. &amp; Vilesov, A. F. Spectroscopy of atoms and molecules in liquid helium. Annu. Rev. Phys. Chem.49, 141 (1998).\r\nADS \r\n CAS \r\n PubMed \r\nGoogle Scholar \r\n</li><li>Takahashi, Y., S… [+12017 chars]",
    },
    {
      source: { id: null, name: "Nature.com" },
      author: null,
      title:
        "Single fibre enables acoustic fabrics via nanometre-scale vibrations - Nature.com",
      description:
        "A piezoelectric fibre woven into a machine-washable fabric converts tenuous&nbsp;sound pressure into electric signals and is used to listen to cardiac sound, determine the source direction of a sound, and record and play back audio.",
      url: "https://www.nature.com/articles/s41586-022-04476-9",
      urlToImage:
        "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-022-04476-9/MediaObjects/41586_2022_4476_Fig1_HTML.png",
      publishedAt: "2022-03-16T16:01:38Z",
      content:
        "<li>Delany, M. E. &amp; Bazley, E. N. Acoustical properties of fibrous absorbent materials. Appl. Acoust.3, 105116 (1970).\r\nGoogle Scholar \r\n</li><li>Tang, X. &amp; Yan, X. Acoustic energy absorption… [+8587 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Elizabeth Howell",
      title:
        "Eugene Parker, astrophysicist namesake of NASA's Parker Solar Probe, dies at 94 - Space.com",
      description: "Eugene Parker changed the way we see the sun.",
      url: "https://www.space.com/eugene-parker-solar-probe-scientist-dead",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WbiBo3Wwgpew88jbTjuQoD-1200-80.jpg",
      publishedAt: "2022-03-16T15:02:23Z",
      content:
        "Eugene Parker, the pioneering astrophysicist whose name graces NASA's Parker Solar Probe mission, died Tuesday (March 15) at age 94.\r\nParker's work focused on understanding the sun. In a key contribu… [+5379 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Stefanie Waldek",
      title:
        "Satellites show Arctic sea ice is melting even faster than scientists realized - Space.com",
      description: "It's thinned 5 feet in just three years.",
      url: "https://www.space.com/arctic-sea-ice-thinning-frightening-rate",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/cE8MDoN7dyadd48u9yt64j-1200-80.jpeg",
      publishedAt: "2022-03-16T15:00:14Z",
      content:
        'A new study based on NASA and ESA satellite data shows that Arctic sea ice is thinning at a "frightening rate."\r\nMeasuring the ice via satellites each month from 2018 to 2021, polar scientists Sahra … [+2595 chars]',
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Paul Sutter",
      title:
        "Dark matter may exist because a mirror universe is running backward in time - Livescience.com",
      description:
        "An anti-universe running backwards in time could explain dark matter and cosmic inflation.",
      url: "https://www.livescience.com/mirror-universe-explains-dark-matter",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/mLQREHaJwZvHa5mDyi3nCZ-1200-80.jpg",
      publishedAt: "2022-03-16T13:25:19Z",
      content:
        'A wild new theory suggests there may be another "anti-universe," running backward in time prior to the Big Bang.\r\nThe idea assumes that the early universe was small, hot and dense — and so uniform th… [+5744 chars]',
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Elizabeth Howell",
      title:
        "Hubble Space Telescope spots eerie galaxy 'eye' staring across the universe - Space.com",
      description:
        "You can see gas and dust embedded at the heart of this star collection.",
      url: "https://www.space.com/hubble-space-telescope-image-galaxy-eye",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Jyf6NymkHeojeu2NVFSc77-1200-80.jpg",
      publishedAt: "2022-03-16T10:30:57Z",
      content:
        'A new Hubble Space Telescope clearly captures the heart of a distant galaxy structured much like our own.\r\nThe new image shows the "eye" of a galaxy called NGC 1097, which is located 48 million light… [+1978 chars]',
    },
  ],
  health: [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Sandee LaMotte, CNN",
      title:
        "Sleeping with even a small amount of light may harm your health, study says - CNN",
      description:
        "Sleeping with the lights on, even if they were dim, was associated with poor heart health and an increased risk for diabetes, a new study found.",
      url: "https://www.cnn.com/2022/03/14/health/sleeping-lights-danger-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210813151854-deep-sleep-stock-super-tease.jpg",
      publishedAt: "2022-03-18T00:32:31Z",
      content:
        "Sleep Awareness Week is March 13-19, and CNN's Life, But Better Sleep section will have daily tips and facts you need to get a better night's slumber. Join us!\r\n (CNN)Sleeping for only one night with… [+4626 chars]",
    },
    {
      source: { id: null, name: "WSB Atlanta" },
      author: "WSBTV.com News Staff",
      title:
        "Study reveals deadly new tick-borne virus is circulating in Georgia - WSB Atlanta",
      description:
        "According to the study, most cases of the virus were found in people who had pre-existing conditions and their illnesses were “predominately severe or fatal.”",
      url: "https://www.wsbtv.com/news/local/study-reveals-deadly-new-virus-is-circulating-among-ticks-georgia/3DIZSKUN2RA53EL2LIOMJGPK5I/",
      urlToImage:
        "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/DxlnqH1cwpQoV89UtYSzkdtZIuA=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/MFUU5MJMNNB6VLEYXICQI5T7GM.jpg",
      publishedAt: "2022-03-17T21:15:12Z",
      content:
        "ATLANTA — A potentially deadly new virus is circulating among ticks in Georgia, according to scientists at Emory University.\r\nThe Heartland virus was first identified in Missouri in 2009 and made two… [+1584 chars]",
    },
    {
      source: { id: null, name: "Townhall" },
      author: "Katie Pavlich",
      title: "The CDC Quietly Updates Data on Child COVID Deaths - Townhall",
      description:
        "The Centers for Disease Control has quietly changed it's data representing the number of children who died from Wuhan coronavirus. ** Correction with updated numbers. The CDC may have removed closer",
      url: "https://townhall.com/tipsheet/katiepavlich/2022/03/17/the-cdc-quietly-changes-its-data-on-pediatric-covid-deaths-n2604695",
      urlToImage:
        "https://media.townhall.com/townhall/reu/s1280x720/2022/11/ce186c98-1cf3-4a7a-bb19-8f118ebb05df.jpg",
      publishedAt: "2022-03-17T18:35:00Z",
      content:
        "The Centers for Disease Control has quietly changed it's data representing the number of children who died from Wuhan coronavirus. \r\n** Correction with updated numbers. The CDC may have removed close… [+2645 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "John Ely Senior",
      title:
        "Study reveals lithium prescribed to bipolar and depression patients cuts risk of dementia - Daily Mail",
      description:
        "Cambridge researchers have discovered a potential link between lithium medication and a reduced risk of developing dementia from a study of nearly 30,000 mental health patients in Britain.",
      url: "https://www.dailymail.co.uk/health/article-10623249/Study-reveals-lithium-prescribed-bipolar-depression-patients-cuts-risk-dementia.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/03/17/12/55471287-0-image-a-7_1647521775680.jpg",
      publishedAt: "2022-03-17T18:00:46Z",
      content:
        "A mood-stabilising drug given to patients with bipolar disorder may cut the risk of dementia, a study suggests. \r\nLithium's supposed benefits were uncovered by Cambridge University academics who anal… [+4829 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Sandee LaMotte, CNN",
      title: "Excessive napping could be a sign of dementia, study finds - CNN",
      description:
        "Taking several naps a day or regularly napping for long periods of time each day could be an early sign of dementia in the elderly, a new study found.",
      url: "https://www.cnn.com/2022/03/17/health/napping-dangers-dementia-study-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220316144525-0317-napping-dangers-wellness-super-tease.jpg",
      publishedAt: "2022-03-17T15:00:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Rise in cases of diabetes, possible link of covid-19 pandemic lifestyle? | World News | WION - WION",
      description:
        "In the last two years,  the world has also witnessed a substantial increase in the number of diabetes cases prompting scientists to explore whether there cou...",
      url: "https://www.youtube.com/watch?v=9V8TmRX20gw",
      urlToImage: "https://i.ytimg.com/vi/9V8TmRX20gw/maxresdefault.jpg",
      publishedAt: "2022-03-17T12:43:01Z",
      content: null,
    },
    {
      source: { id: null, name: "Eatthis.com" },
      author: "Michael Martin",
      title:
        "Signs You Have Pre-Diabetes, Say Experts — Eat This Not That - Eat This, Not That",
      description:
        "Left unchecked, pre-diabetes can lead to Type 2 diabetes, which raises the risk of heart disease, stroke, dementia, and other complications.",
      url: "http://www.eatthis.com/news-pre-diabetes-signs-say-experts/",
      urlToImage:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/woman-headache-pain-sleep-problem-insomnia-bed-monring.jpg?quality=82&strip=all",
      publishedAt: "2022-03-17T10:01:24Z",
      content:
        "Pre-diabetes and type 2 diabetes are an American epidemic: According to the American Medical Association, one in three American adults has pre-diabetesnearly 88 million peopleand 80% of them are unaw… [+3617 chars]",
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "Carly Cassella",
      title:
        "A Toxic Fungus Could Be Contributing to Some People's Irritable Bowel Disease - ScienceAlert",
      description:
        "Some strains of yeast in the human gut can produce toxins that could contribute to irritable bowel disease (IBD), according to new research.",
      url: "https://www.sciencealert.com/toxin-secreting-yeast-may-be-behind-some-forms-of-gut-inflammation",
      urlToImage:
        "https://www.sciencealert.com/images/2022-03/processed/CandidaFungiIBD_1024.jpg",
      publishedAt: "2022-03-17T05:17:15Z",
      content:
        'Some strains of yeast in the human gut can produce toxins that could contribute to irritable bowel disease (IBD), according to new research.\r\nThese "high-damaging" Candida albicans yeast strains aren… [+4261 chars]',
    },
    {
      source: { id: null, name: "Bnonews.com" },
      author: "https://facebook.com/bnonews/",
      title: "China reports another human case of H5N6 bird flu - BNO News",
      description:
        "Another person in mainland China has fallen seriously ill after testing positive for H5N6 bird flu, raising the number of cases so far this year to 17, officials say. The spike in human cases has led to calls for increased surveillance. The latest case is a 5…",
      url: "https://bnonews.com/index.php/2022/03/china-reports-another-human-case-of-h5n6-bird-flu-2/",
      urlToImage:
        "https://bnonews.com/wp-content/uploads/2021/02/7242016AvianInfluenza.jpg",
      publishedAt: "2022-03-17T03:33:45Z",
      content:
        "Another person in mainland China has fallen seriously ill after testing positive for H5N6 bird flu, raising the number of cases so far this year to 17, officials say. The spike in human cases has led… [+2271 chars]",
    },
    {
      source: { id: null, name: "Deseret News" },
      author: "Herb Scribner",
      title: "COVID symptoms vs. allergy symptoms: What to know - Deseret News",
      description:
        "The CDC shared a chart of allergy and COVID-19 symptoms to consider",
      url: "https://www.deseret.com/coronavirus/2022/3/16/22981006/cdc-covid-19-symptoms-allergies-chart",
      urlToImage:
        "https://deseret.brightspotcdn.com/dims4/default/00b0f07/2147483647/strip/true/crop/3000x1713+0+144/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FQD6brvlFof7HEKoIbqAt9vlaApA%3D%2F0x0%3A3000x2000%2F3000x2000%2Ffilters%3Afocal%281500x1000%3A1501x1001%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23130723%2FOmicron_3.jpg",
      publishedAt: "2022-03-17T01:45:00Z",
      content:
        "The Centers for Disease Control and Prevention recently shared a chart that outlined the different symptoms someone can get from COVID-19 and seasonal allergies.\r\nWhy it matters: Spring is right arou… [+1151 chars]",
    },
    {
      source: { id: null, name: "The Lancet" },
      author: null,
      title:
        "Comparative analysis of the risks of hospitalisation and death associated with SARS-CoV-2 omicron (B.1.1.529) and delta (B.1.617.2) variants in England: a cohort study - The Lancet",
      description:
        "The risk of severe outcomes following SARS-CoV-2 infection is substantially lower\nfor omicron than for delta, with higher reductions for more severe endpoints and significant\nvariation with age. Underlying the observed risks is a larger reduction in intrinsic…",
      url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00462-7/fulltext",
      urlToImage:
        "//els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/0e39881a-1a74-4a1d-a187-679ff83238dd/gr1.jpg",
      publishedAt: "2022-03-16T23:32:25Z",
      content:
        "We use cookies to help provide and enhance our service and tailor content and ads. To update your cookie settings, please visit the Cookie Preference Center for this site.Copyright © 2022 Elsevier In… [+173 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Dr. Nicholas P. Kondoleon",
      title:
        "How athletes can return to exercise after COVID-19 infection: New guidance released - ABC News",
      description: "",
      url: "https://abcnews.go.com/Health/athletes-return-exercise-covid-19-infection-guidance-released/story?id=83481042",
      urlToImage:
        "https://s.abcnews.com/images/Health/treadmill-gym-gty-jt-220316_1647452626439_hpMain_16x9_992.jpg",
      publishedAt: "2022-03-16T22:39:04Z",
      content:
        "Throughout the pandemic, several professional and collegiate sports leagues cancelled major events and seasons, in part to slow the spread of COVID-19, but also due to alarming reports of athletes de… [+5112 chars]",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "https://www.facebook.com/neurosciencenews",
      title:
        "Spending More Time at Home Is Linked to More Severe Symptoms in People With Depression - Neuroscience News",
      description:
        "People with major depressive disorder who spent more time at home during a two-week period reported more severe symptoms of depression.",
      url: "https://neurosciencenews.com/depression-home-20204/",
      urlToImage:
        "https://neurosciencenews.com/files/2022/03/depression-home-neurosciences-public.jpg",
      publishedAt: "2022-03-16T21:56:16Z",
      content:
        "Summary: People with major depressive disorder who spent more time at home during a two-week period reported more severe symptoms of depression.\r\nSource: King’s College London\r\nResearchers from the R… [+6923 chars]",
    },
    {
      source: { id: null, name: "KTVI Fox 2 St. Louis" },
      author: "Gregg Palermo",
      title:
        "‘Highly pathogenic’ Avian flu found in St. Louis County - KTVI Fox 2 St. Louis",
      description:
        "Four people were monitored for symptoms but have been released. Bird-to-human transmission is considered rare.",
      url: "https://fox2now.com/news/highly-pathogenic-avian-flu-found-in-st-louis-county/",
      urlToImage:
        "https://fox2now.com/wp-content/uploads/sites/14/2022/03/GettyImages-1299284528.jpg?w=1280",
      publishedAt: "2022-03-16T21:08:49Z",
      content:
        "ST. LOUIS COUNTY, Mo.–The sixth case of bird flu found in the state of Missouri this spring is the first case in St. Louis County, the health department announced Wednesday.\r\nAuthorities say a “presu… [+971 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "The Sun",
      title:
        "Scientists reveal the ideal amount of sleep adults really need - New York Post ",
      description:
        "Research from experts in Washington, US, found that having too much sleep could actually interfere with your cognitive function.",
      url: "https://nypost.com/2022/03/16/scientists-reveal-the-ideal-amount-of-sleep-adults-need/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/03/sleeping-quality-1.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-03-16T21:01:00Z",
      content:
        "Sleep is important for many reasons – but experts have warned that too much can actually be bad for your brain.\r\nOfficial NHS guidance states that most adults need between six and nine hours sleep ev… [+4101 chars]",
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: null,
      title:
        "Britons less cautious over Covid than at any point during pandemic - Financial Times",
      description:
        "Relaxation comes as government advisers increasingly uneasy over rising infections and hospital admissions from Omicron BA.2 offshoot",
      url: "https://www.ft.com/content/abb2f882-0eff-42df-969a-a02f22f3a4a1",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ffca84e91-1e95-4f3b-b9b8-201165ee82eb.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2022-03-16T19:22:08Z",
      content:
        "Britons are taking fewer precautions towards Covid-19 than at any point during the pandemic, according to the latest polling data, as unease grows among government science advisers about a rising wav… [+5421 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Andrew Court",
      title:
        "'Real-life Wolverine' credits ripped physique to raw brains and testicles diet - New York Post ",
      description: "This is the perfect combination of brains and brawn.",
      url: "https://nypost.com/2022/03/16/real-life-wolverine-credits-physique-to-raw-brains-testicles-diet/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/03/wolverine-diet-00.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-03-16T19:01:00Z",
      content:
        "This is the perfect combination of brains and brawn.\r\nA Los Angeles-based bodybuilder credits his hulking physique to a daily diet of veal brains and testicles.\r\nWeam Breiche who has been described b… [+2997 chars]",
    },
    {
      source: { id: null, name: "KSBW The Central Coast" },
      author: null,
      title:
        "Highly-transmissible COVID-19 subvariant increasing in CA, expert 'doubts' lockdowns will be needed - KSBW Monterey",
      description:
        "In the last two weeks, the UK and other parts of Europe are reporting a spike in COVID-19 cases due to an omicron sub-variant called BA.2.",
      url: "https://www.ksbw.com/article/california-covid-subvariant-lockdowns-highly-transmissible/39454357",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/coronavirus-california-1585590516.jpg?crop=1.00xw:0.992xh;0,0&resize=1200:*",
      publishedAt: "2022-03-16T18:52:00Z",
      content:
        "SAN FRANCISCO (KGO) —In the last two weeks, the UK and other parts of Europe are reporting a spike in COVID-19 cases due to an omicron sub-variant called BA.2 which is believed to be 30 % more transm… [+1897 chars]",
    },
    {
      source: { id: null, name: "Nature.com" },
      author: null,
      title:
        "A single-cell atlas of human and mouse white adipose tissue - Nature.com",
      description:
        "A single-cell atlas of white adipose tissue from mouse and human reveals diverse cell types and similarities and differences across species and dietary conditions.",
      url: "https://www.nature.com/articles/s41586-022-04518-2",
      urlToImage:
        "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-022-04518-2/MediaObjects/41586_2022_4518_Fig1_HTML.png",
      publishedAt: "2022-03-16T17:40:43Z",
      content:
        "<li>Rosen, E. D. &amp; Spiegelman, B. M. What we talk about when we talk about fat. Cell156, 2044 (2014).\r\nCAS \r\n PubMed \r\n PubMed Central \r\nGoogle Scholar \r\n</li><li>Kahn, S. E., Hull, R. L. &amp; U… [+15819 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Matt Richtel",
      title:
        "Brain-Imaging Studies Hampered by Small Data Sets, Study Finds - The New York Times",
      description:
        "Researchers have long used imaging technology to try to understand mental-health ailments. But with relatively few participants, such studies may not be producing valid findings.",
      url: "https://www.nytimes.com/2022/03/16/science/brain-imaging-research.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/16/science/16brain/16brain-facebookJumbo.jpg",
      publishedAt: "2022-03-16T16:00:14Z",
      content:
        "But the Nature paper demonstrates that the data drawn from just two dozen subjects is generally insufficient to be reliable and can in fact yield massively inflated findings, Dr. Dosenbach said.\r\nFor… [+1176 chars]",
    },
  ],
  general: [
    {
      source: { id: null, name: "New York Times" },
      author: "Alyssa Lukpat",
      title:
        "Bus Shooting in Florida Leaves 2 Dead and 2 Injured - The New York Times",
      description:
        "The bus driver was hailed for driving swiftly to Police Headquarters in Fort Lauderdale, at one point veering into oncoming lanes. A suspect surrendered after the bus came to a stop.",
      url: "https://www.nytimes.com/2022/03/17/us/fort-lauderdale-bus-shooting.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/17/multimedia/17xp-busshooting-01/17xp-busshooting-01-facebookJumbo.jpg",
      publishedAt: "2022-03-18T00:22:17Z",
      content:
        "To get to the front of the police station, have that presence of mind, pretty much saved lives, Chief Alvarez said, adding that the driver deserved to be applauded for minimizing the damage on the ro… [+561 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Ashley Strickland, CNN",
      title:
        "Watch NASA roll mega Artemis I moon rocket out to the launchpad - CNN",
      description:
        "On Thursday, NASA's 322-foot-tall Artemis I stack, including the mega SLS rocket and Orion capsule, began rolling out of the Vehicle Assembly Building at Cape Canaveral and will undergo an 11-hour, 4-mile ride to the launchpad aboard an Apollo-era giant NASA …",
      url: "https://www.cnn.com/2022/03/17/world/nasa-artemis-i-rollout-pad-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317160941-02-artemis-rollout-0317-super-tease.jpg",
      publishedAt: "2022-03-17T23:55:11Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Eric Levenson and Steve Almasy, CNN",
      title:
        "Swimmer Lia Thomas becomes first transgender athlete to win an NCAA D-I title - CNN",
      description:
        "University of Pennsylvania swimmer Lia Thomas became the first transgender athlete to win an NCAA Division I title after finishing first in the women's 500-yard freestyle event Thursday evening.",
      url: "https://www.cnn.com/2022/03/17/sport/lia-thomas-ncaa-swimming/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317185359-01-lia-thomas-ncaa-swimming-super-tease.jpg",
      publishedAt: "2022-03-17T23:48:26Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Felicia Sonmez, Mariana Alfaro",
      title:
        "Mark Meadows's voter registration under investigation in North Carolina following reports of alleged fraud - The Washington Post",
      description:
        "The former White House chief of staff is under investigation after news organizations reported that he registered to vote in 2020 using the address of a mobile home he has never lived in.",
      url: "https://www.washingtonpost.com/politics/2022/03/17/mark-meadows-voter-registration-investigation/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IDWYKZU75YI6ZFBYEVLQTNWN3Q.jpg&w=1440",
      publishedAt: "2022-03-17T23:46:56Z",
      content:
        "Local district attorney Ashley Welch has referred this matter to the Department of Justices Special Prosecutions Section, and we have agreed to her request, Nazneen Ahmed, press secretary for the Nor… [+2084 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Rob Demovsky",
      title:
        "Sources -- Green Bay Packers trading Davante Adams to Las Vegas Raiders - ESPN",
      description:
        "In a blockbuster trade, the Raiders are acquiring Davante Adams from the Packers for two 2022 draft picks, including their first-rounder, sources told ESPN. Las Vegas is giving the star receiver a new 5-year contract.",
      url: "https://www.espn.com/nfl/story/_/id/33529955/green-bay-packers-trading-davante-adams-las-vegas-raiders",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0110%2Fr960059_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-17T23:42:36Z",
      content:
        "GREEN BAY, Wis. -- It turns out Aaron Rodgers' return to the Green Bay Packers didn't mean the same thing for Davante Adams. Just days after Rodgers signed his blockbuster contract extension to retur… [+3700 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Kathryn Watson, Caroline Linton",
      title: "Blinken confirms death of U.S. citizen in Ukraine - CBS News",
      description:
        "The secretary of state did not share any additional details.",
      url: "https://www.cbsnews.com/news/ukraine-american-citizen-killed-blinken/",
      urlToImage:
        "https://cbsnews1.cbsistatic.com/hub/i/r/2022/02/02/04fa7e92-f0d0-44b9-8fe6-057b1fe28b68/thumbnail/1200x630g1/27b8229e7fccac0827d1db868bb1a916/ap22032794032026.jpg",
      publishedAt: "2022-03-17T23:22:00Z",
      content:
        "U.S. Secretary of State Antony Blinken confirmed on Thursday the death of a U.S. citizen in Ukraine, although he didn't have more details to share. A State Department spokesperson said the death occu… [+1832 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Adam Zagoria",
      title:
        "NCAA March Madness: Michigan Knocks Off Colorado State - The New York Times",
      description:
        "Michigan also beat Colorado State, a higher-seeded team, but oddsmakers had favored the Wolverines. Providence held off South Dakota State and Memphis notched a big win.",
      url: "https://www.nytimes.com/2022/03/17/sports/ncaabasketball/march-madness-score-results.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/17/multimedia/17mcbb-tournament-richmond/17mcbb-tournament-richmond-facebookJumbo.jpg",
      publishedAt: "2022-03-17T23:20:11Z",
      content:
        "As one member of Michigans famed Fab Five exhorted the Wolverines from the stands at Gainbridge Fieldhouse in Indianapolis, another member coached the team into the round of 32 in the N.C.A.A. tourna… [+1983 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Adam Sabes",
      title:
        "Missouri interstate crash involving 40-50 vehicles results in at least five dead: Report - Fox News",
      description:
        "At least five people are dead after a crash involving 40-50 vehicles occurred on Missouri Interstate 57, according to reports.",
      url: "https://www.foxnews.com/us/missouri-interstate-crash-five-dead",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Untitled-design-2022-03-17T175559.245.png",
      publishedAt: "2022-03-17T23:19:21Z",
      content:
        "At least five people are dead after a crash involving 40-50 vehicles occurred on a Missouri interstate, according to reports.\r\nThe crash involving 40-50 vehicles happened on Missouri's Interstate 57 … [+1320 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Jay Peters",
      title:
        "Gran Turismo 7 has been largely unplayable for hours due to server maintenance - The Verge",
      description:
        "Gran Turismo 7 has been undergoing server maintenance for hours because of an issue found with update 1.07. The maintenance is limiting PS4 and PS5 players to one-off single-player races, and it’s unclear when it might end.",
      url: "https://www.theverge.com/2022/3/17/22983882/ps5-gran-turismo-7-update-1-0-7-server-outage-hours",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/CcRvmGfacH_sj2olHZHPdQ88nGc=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23325167/i1yUwuUQyq9FluH.jpeg",
      publishedAt: "2022-03-17T23:08:01Z",
      content:
        "Due to an issue found with Update 1.07, we are extending the current server maintenance period\r\nIt has extended server maintenance due to an issue.\r\nImage: Sony\r\nGran Turismo 7, one of the biggest Pl… [+1560 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "6 College Golfers and Coach Killed in Fiery Car Wreck - Inside Edition",
      description:
        "Nine people are dead after a tragic vehicle collision killed members of University of the Southwest’s golf team and coach. Police say a pick-up truck crossed...",
      url: "https://www.youtube.com/watch?v=VbvZg6n7bME",
      urlToImage: "https://i.ytimg.com/vi/VbvZg6n7bME/maxresdefault.jpg",
      publishedAt: "2022-03-17T22:56:12Z",
      content: null,
    },
    {
      source: { id: null, name: "WLS-TV" },
      author: "Diane Pathieu, Michelle Gallardo",
      title:
        "'Empire' actor Jussie Smollett still in Illinois after released from Cook County Jail while disorderly conduct sentence appealed - WLS-TV",
      description:
        '"Empire" actor Jussie Smollett was released from jail while his attorneys appeal his sentence on multiple disorderly conduct convictions.',
      url: "https://abc7chicago.com/jussie-smollett-released-from-jail-release-date/11658305/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/11659788_031722-wls-smollett-img.jpg?w=1600",
      publishedAt: "2022-03-17T22:30:00Z",
      content:
        "CHICAGO (WLS) -- Jussie Smollett was released from Cook County Jail Wednesday after an appeals court agreed with his lawyers that he should be released pending the appeal of his conviction for lying … [+9594 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Jacob Pramuk, Amanda Macias, Chloe Taylor",
      title:
        "U.S. accuses Russia of war crimes after bombing Mariupol theater; Russia makes bond payment - CNBC",
      description:
        "Russian attacks across Ukraine have resulted in numerous civilian deaths over the past day, Ukrainian officials have said.",
      url: "https://www.cnbc.com/2022/03/17/russia-ukraine-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107031803-1647475592579-gettyimages-1239243696-AA_17032022_653383.jpeg?v=1647475635&w=1920&h=1080",
      publishedAt: "2022-03-17T22:04:00Z",
      content:
        "Ukrainian President Volodymyr Zelenskyy has addressed lawmakers in Germany's Bundestag.\r\nSpeaking via videolink, Ukraine's President warned that \"obviously sanctions are not enough to stop this war.\"… [+1165 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Amie Parnes and Morgan Chalfant",
      title:
        "GOP talking point could turn to Biden's 'underwhelming' Russia response | TheHill - The Hill",
      description:
        "When Ukrainian President Volodymyr Zelensky spoke to members of Congress on Wednesday and pointed...",
      url: "https://thehill.com/homenews/administration/598692-gop-talking-point-could-turn-to-bidens-underwhelming-russia-response",
      urlToImage:
        "https://thehill.com/sites/default/files/article_images/bidenjoe_zelenskyyvolodymyr_031722gn-ap-see-credits_biden-zelensky_0.jpeg",
      publishedAt: "2022-03-17T22:02:55Z",
      content:
        "When Ukrainian President Volodymyr Zelensky spoke to members of Congress on Wednesday and pointedly highlighted President BidenJoe Biden Irish PM tests positive for COVID-19 during visit to DCCNN anc… [+8164 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Zack Sharf",
      title:
        "Daniel Radcliffe Says No to ‘Harry Potter and the Cursed Child’ Movie: ‘Not Interested Right Now’ - Variety",
      description:
        "Daniel Radcliffe reunited with Emma Watson and Rupert Grint earlier this year for HBO Max’s “Harry Potter” reunion special, but don’t expect the trio to get back in front of the camera for a “Harry Potter and the Cursed Child” film adaptation — at least not i…",
      url: "https://variety.com/2022/film/news/daniel-radcliffe-rejects-harry-potter-cursed-child-movie-1235208441/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/01/MCDHAP2_EC372.jpg?w=1024",
      publishedAt: "2022-03-17T21:52:00Z",
      content:
        "Daniel Radcliffe reunited with Emma Watson and Rupert Grint earlier this year for HBO Max’s “Harry Potter” reunion special, but don’t expect the trio to get back in front of the camera for a “Harry P… [+1721 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Nate Ulrich, USA TODAY",
      title:
        "Baker Mayfield requests trade from Browns, who say they won't deal starting QB - USA TODAY",
      description:
        "Baker Mayfield wants out of Cleveland after the Browns pursued Deshaun Watson, but the team isn't entertaining the idea of moving its starting QB.",
      url: "https://www.usatoday.com/story/sports/nfl/browns/2022/03/17/baker-mayfield-requests-trade-cleveland-browns-deshaun-watson/7080523001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/03/17/USAT/08768b47-f4ca-4d59-8ec0-8a64d3e401e6-XXX_IMG_AP_BROWNS_PATRIOTS_F_1_1_73V1VP80.jpg?auto=webp&crop=5517,3103,x1,y0&format=pjpg&width=1200",
      publishedAt: "2022-03-17T21:33:45Z",
      content:
        "Baker Mayfield wants a divorce. The Cleveland Browns, however, are reluctant to sign the papers, at least for now.\r\nMayfield asked for a trade Thursday afternoon, but the Browns responded by telling … [+6738 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Alexander Smith",
      title:
        "'Scum and traitors': Under pressure over Ukraine, Putin turns his ire on Russians - CNBC",
      description:
        "With his invasion floundering and his economy teetering, Putin on Wednesday slammed Russians who are against the war or who sympathize with the West.",
      url: "https://www.cnbc.com/2022/03/17/scum-and-traitors-under-pressure-over-ukraine-putin-turns-his-ire-on-russians.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107021603-16459703592022-02-27t135404z_1493225669_rc2dss9h4jsj_rtrmadp_0_ukraine-crisis-russia-nuclear.jpeg?v=1645970394&w=1920&h=1080",
      publishedAt: "2022-03-17T21:24:24Z",
      content:
        "LONDON Anyone looking for signs that embattled and isolated Russia might soften its position would not have found much hope in the increasingly belligerent words of President Vladimir Putin.\r\nWith hi… [+4518 chars]",
    },
    {
      source: { id: null, name: "WSB Atlanta" },
      author: "WSBTV.com News Staff",
      title:
        "Study reveals deadly new tick-borne virus is circulating in Georgia - WSB Atlanta",
      description:
        "According to the study, most cases of the virus were found in people who had pre-existing conditions and their illnesses were “predominately severe or fatal.”",
      url: "https://www.wsbtv.com/news/local/study-reveals-deadly-new-virus-is-circulating-among-ticks-georgia/3DIZSKUN2RA53EL2LIOMJGPK5I/",
      urlToImage:
        "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/DxlnqH1cwpQoV89UtYSzkdtZIuA=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/MFUU5MJMNNB6VLEYXICQI5T7GM.jpg",
      publishedAt: "2022-03-17T21:15:12Z",
      content:
        "ATLANTA — A potentially deadly new virus is circulating among ticks in Georgia, according to scientists at Emory University.\r\nThe Heartland virus was first identified in Missouri in 2009 and made two… [+1584 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Julie Creswell",
      title:
        "Koch Industries Will Continue to Operate Factories in Russia - The New York Times",
      description:
        "Koch employs about 600 people in Russia through a unit that makes up a small part of its overall business.",
      url: "https://www.nytimes.com/2022/03/17/business/koch-russia.html",
      urlToImage:
        "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
      publishedAt: "2022-03-17T21:11:41Z",
      content:
        "Koch Industries, the industrial conglomerate run by the billionaire Charles Koch, has said it will continue to operate factories in Russia as other companies pull out after Russias attack on Ukraine.… [+889 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "FOXBusiness",
      title:
        "House votes overwhelmingly to suspend normal trade relations with Russia, Belarus - Fox Business",
      description:
        "The House of Representatives on Thursday voted 424-8 in favor of suspending normal trade relations with Russia and Belarus amid the invasion of Ukraine.",
      url: "https://www.foxbusiness.com/politics/house-votes-overwhelmingly-suspend-trade-relations-russia-belarus",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/02/0/0/How-will-war-between-Russia-Ukraine-impact-oil-prices.jpg?ve=1&tl=1",
      publishedAt: "2022-03-17T21:11:14Z",
      content:
        "The House of Representatives on Thursday voted 424-8 to suspend normal trade relations with Russia and Belarus amid the invasion of Ukraine.\r\nThe Senate will vote next on the suspension, which would … [+2078 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Peter Aitken",
      title:
        "Japan spots Russian warships possibly heading toward Ukraine - Fox News",
      description:
        "Japan and Russia have maintained a dispute over the Kuril Islands since Russia took possession of them at the end of World War II.",
      url: "https://www.foxnews.com/world/japan-spots-russian-warships-ukraine",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/japan-prime-minister.png",
      publishedAt: "2022-03-17T20:59:09Z",
      content:
        "Japans defense ministry reported it had tracked four large Russian ships transporting troops through a strait north of the country and heading west. \r\nOfficials speculated that the vessels could have… [+2507 chars]",
    },
  ],
  entertainment: [
    {
      source: { id: null, name: "TooFab" },
      author: "Toofab Staff",
      title:
        "Josh Peck Confronted Drake Bell After Wedding Drama: 'Go Apologize to My Wife' - TooFab",
      description: 'Bell\'s wife, however, says Peck is a "f---ing liar."',
      url: "https://toofab.com/2022/03/17/josh-peck-drake-bell-wedding-drama/",
      urlToImage:
        "https://images.toofab.com/image/17/16by9/2022/03/17/17f4ba360e4f477792ab7214db67c6ad_xl.jpg",
      publishedAt: "2022-03-17T22:48:00Z",
      content:
        'Josh Peck has reignited old beef with former costar Drake Bell.\r\nDuring an appearance on the "BFFs" podcast on Wednesday, the "How I Met Your Father" actor shared his side of the story after the two … [+3009 chars]',
    },
    {
      source: { id: null, name: "WLS-TV" },
      author: "Diane Pathieu, Michelle Gallardo",
      title:
        "'Empire' actor Jussie Smollett still in Illinois after released from Cook County Jail while disorderly conduct sentence appealed - WLS-TV",
      description:
        '"Empire" actor Jussie Smollett was released from jail while his attorneys appeal his sentence on multiple disorderly conduct convictions.',
      url: "https://abc7chicago.com/jussie-smollett-released-from-jail-release-date/11658305/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/11659788_031722-wls-smollett-img.jpg?w=1600",
      publishedAt: "2022-03-17T22:30:00Z",
      content:
        "CHICAGO (WLS) -- Jussie Smollett was released from Cook County Jail Wednesday after an appeals court agreed with his lawyers that he should be released pending the appeal of his conviction for lying … [+9594 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Logan Paul Says He's Open To Wrestling After WrestleMania, Tag Team W/ Bro Jake - TMZ",
      description:
        "Logan Paul says he's down to wrestle after WrestleMania 38 ... but only if the fans want him.",
      url: "https://www.tmz.com/2022/03/17/logan-paul-join-wwe-wrestlemania-the-miz-jake-paul-rey-mysterio/",
      urlToImage:
        "https://imagez.tmz.com/image/da/16by9/2022/03/17/da57096a7b484e2996306395dbf70ddb_xl.jpg",
      publishedAt: "2022-03-17T22:22:23Z",
      content:
        '2:47 PM PT -- Seems the Logan Paul-Jake Paul WWE tag team could be one step closer to becoming a reality. The Problem Child was a guest on tonight\'s "TMZ Sports" TV show (airs on FS1) ... and he told… [+2413 chars]',
    },
    {
      source: { id: null, name: "mlive.com" },
      author: "Edward Pevos | epevos@MLive.com",
      title:
        "Member of Greta Van Fleet taken to hospital: ‘Last 24 hours have been arduous’ - MLive.com",
      description: "Here's what the band is saying about his condition.",
      url: "https://www.mlive.com/life/2022/03/member-of-greta-van-fleet-taken-to-hospital-following-concert-postponements.html",
      urlToImage:
        "https://www.mlive.com/resizer/4zxWolhpQQ6kwdoX0NgVGSi2V2k=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HDW4QN6ZLJE5FCF3GG5ASUE5FU.JPG",
      publishedAt: "2022-03-17T22:05:00Z",
      content:
        "A member of Greta Van Fleet has been taken to the hospital. The band made the announcement a short time ago on their social media channels following yesterdays announced postponement of their remaini… [+1593 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Zack Sharf",
      title:
        "Daniel Radcliffe Says No to ‘Harry Potter and the Cursed Child’ Movie: ‘Not Interested Right Now’ - Variety",
      description:
        "Daniel Radcliffe reunited with Emma Watson and Rupert Grint earlier this year for HBO Max’s “Harry Potter” reunion special, but don’t expect the trio to get back in front of the camera for a “Harry Potter and the Cursed Child” film adaptation — at least not i…",
      url: "https://variety.com/2022/film/news/daniel-radcliffe-rejects-harry-potter-cursed-child-movie-1235208441/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/01/MCDHAP2_EC372.jpg?w=1024",
      publishedAt: "2022-03-17T21:52:00Z",
      content:
        "Daniel Radcliffe reunited with Emma Watson and Rupert Grint earlier this year for HBO Max’s “Harry Potter” reunion special, but don’t expect the trio to get back in front of the camera for a “Harry P… [+1721 chars]",
    },
    {
      source: { id: null, name: "Grub Street" },
      author: "Chris Crowley",
      title:
        "Di Fara Pizza Legend Domenico 'Dom' De Marco Has Died - Grub Street",
      description:
        "The food-world icon behind Midwood’s Di Fara was 85 years old.",
      url: "https://www.grubstreet.com/2022/03/di-fara-dom-de-marco-rip.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/dfd/e5a/bd9d08a883d3449cce74a5b6e641bc5e83-domenico-de-marco-di-fara.1x.rsocial.w1200.jpg",
      publishedAt: "2022-03-17T21:15:00Z",
      content:
        "Domenico Dom De Marco, who in 1965 opened a pizzeria called Di Fara in Midwood, Brooklyn, that attracted legions of fans, has died. The news was shared by his daughter, Maggie De Marco Mieles, on the… [+3186 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Melinda Wenner Moyer",
      title:
        "‘Turning Red’ Sparks Conversations About Periods and Sexuality - The New York Times",
      description:
        "Some parents don’t like its depictions of adolescent rebellion, periods and sexuality, but experts say those topics are appropriate for family discussion.",
      url: "https://www.nytimes.com/2022/03/16/well/family/turning-red-periods-discussion.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/16/well/16well-turningred/16well-turningred-facebookJumbo.jpg",
      publishedAt: "2022-03-17T21:09:00Z",
      content:
        "The reality is that our children are exposed to these themes, to a certain extent, with or without our control, Dr. Wang said. Watching a movie like Turning Red together as a family, and checking in … [+2146 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Donie O'Sullivan, CNN",
      title:
        "Kanye West suspended from Instagram for 24 hours after directing racial slur at Trevor Noah - CNN",
      description:
        'Kanye West has been suspended from Instagram after he posted a racial slur directed at "Daily Show" host Trevor Noah, a spokesperson for Meta confirmed to CNN.',
      url: "https://www.cnn.com/2022/03/16/entertainment/kanye-west-trevor-noah-instagram/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200701080216-02-kanye-west-file-super-tease.jpg",
      publishedAt: "2022-03-17T20:12:00Z",
      content:
        '(CNN)Kanye West has been suspended from Instagram after he posted a racial slur directed at "Daily Show" host Trevor Noah, a spokesperson for Meta confirmed to CNN. \r\nWest violated the platform\'s pol… [+925 chars]',
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Emily Selleck",
      title:
        "'Love Is Blind' star Shake debuts new girlfriend after dramatic Deepti split - Page Six",
      description:
        "The controversial reality star appears to have moved on with a woman named Emily after his ex-fiancé left him at the altar.",
      url: "https://pagesix.com/2022/03/17/love-is-blinds-shake-debuts-new-girlfriend-after-deepti-split/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/03/shake-new-girlfriend-deepti-split.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2022-03-17T20:11:00Z",
      content:
        "Abhishek “Shake” Chatterjee suggested marrying his “Love Is Blind” co-star Deepti Vempati would have been “settling.”\r\nThe reality star, who appeared on season two of the Netflix dating show, appears… [+2414 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Alexandra Del Rosario",
      title:
        "‘Squid Game’s Hoyeon to Join Cate Blanchett, Kevin Kline For Apple TV+ Series ‘Disclaimer’ - Deadline",
      description:
        "Recent SAG Award-winner Hoyeon (Squid Game) has joined the cast of Apple TV+’s upcoming thriller series Disclaimer, and will appear opposite stars Cate Blanchett and Kevin Kline. The series, based on the novel by Renee Knight, hails from Roma helmer Alfonso C…",
      url: "https://deadline.com/2022/03/squid-games-hoyeon-cate-blanchett-apple-disclaimer-1234981422/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/03/MEGA838010_003-e1647545013935.jpg?w=1024",
      publishedAt: "2022-03-17T20:00:00Z",
      content:
        "Recent SAG Award-winner Hoyeon (Squid Game) has joined the cast of Apple TV+’s upcoming thriller series Disclaimer, and will appear opposite stars Cate Blanchett and Kevin Kline. The series, based on… [+1639 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Eileen Reslen",
      title:
        "Justin Bieber speaks out on Hailey Baldwin's 'really scary' medical emergency - Page Six",
      description:
        "The 25-year-old model revealed on Instagram last Saturday that she had been hospitalized with “stroke like symptoms” due to a “small blood clot” on her brain.",
      url: "https://pagesix.com/2022/03/17/justin-bieber-calls-hailey-baldwins-blood-clot-scary/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/03/justin-bieber-talks-hailey-baldwin-health-scare.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2022-03-17T19:56:00Z",
      content:
        "Justin Bieber shared with fans during his latest “Justice” tour stop how his wife, Hailey Baldwin, is doing after her recent health scare.\r\n“Most of you probably know or have seen the news about my w… [+2474 chars]",
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Scott Roxborough",
      title:
        "Ukrainian Actress Oksana Shvets Killed in Russian Rocket Attack - Hollywood Reporter",
      description:
        "Ukrainian actress Oksana Shvets, a famed film and theater performer, has been killed in a Russian rocket attack on a residential building in Kyiv, according to her troupe, the Young Theater. According to media reports, she was 67. “During the rocket shelling …",
      url: "https://www.hollywoodreporter.com/news/general-news/ukrainian-actress-oksana-shvets-killed-russian-rocket-attack-1235113970/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/03/Oksana-Shvets-Headshot-Vertical-Publicity-H-2022.jpg?w=1024",
      publishedAt: "2022-03-17T19:55:21Z",
      content:
        "Ukrainian actress Oksana Shvets, a famed film and theater performer, has been killed in a Russian rocket attack on a residential building in Kyiv, according to her troupe, the Young Theater. Accordin… [+1408 chars]",
    },
    {
      source: { id: null, name: "Vulture" },
      author: "Justin Curto",
      title:
        "Muse Release Possible Anti-Mask Song 'Compliance': WATCH - Vulture",
      description:
        "It sure seems like it from the band’s new song and video, “Compliance.”",
      url: "https://www.vulture.com/2022/03/muse-anti-mask-song-compliance.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/835/2c8/16f24a383f255ecac78f3eeb99a2c9bf5d-muse-compliance.1x.rsocial.w1200.jpg",
      publishedAt: "2022-03-17T19:44:50Z",
      content:
        "The rock band Muse has never exactly hid its politics. Remember the bop Uprising from 2009, which included lines such as, Rise up and take the power back / Its time the fat cats had a heart attack? T… [+1587 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Jacob Kastrenakes",
      title:
        "Meghan Markle will launch Spotify podcast in summer 2022 - The Verge",
      description:
        "Prince Harry and Meghan Markle’s Archewell Audio will launch its first podcast series in summer 2022. The announcement comes after the company raised concerns over COVID-19 misinformation with Spotify.",
      url: "https://www.theverge.com/2022/3/17/22983375/meghan-markle-spotify-podcast-series-summer-2022-launch-archewell-audio",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/i1aVfgTR4d_bGJhClOnLnNBi0jM=/0x0:3600x1885/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23324401/1342506810.jpg",
      publishedAt: "2022-03-17T19:19:06Z",
      content:
        "Spotify has waiting more than a year to get its first series\r\nPhoto by John Lamparski / Getty Images\r\nSpotifys production deal with Prince Harry and Meghan Markle will finally result in a podcast ser… [+1461 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Francesca Bacardi",
      title:
        "Wendy Williams on Wells Fargo battle: 'I want to see all my money' - Page Six",
      description:
        "Williams also addressed reports surrounding her health, telling “GMA,” “You know, I’m 57 now, but I have the mind and body of a 25-year-old.”",
      url: "https://pagesix.com/2022/03/17/wendy-williams-speaks-out-on-battle-with-wells-fargo-over-money/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/03/wendy-williams-wells-fargo.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2022-03-17T19:10:00Z",
      content:
        "Show her the money.\r\nWendy Williams hit back at her bank Wells Fargo’s claims that she needs a guardian to oversee her affairs, telling “Good Morning America” Thursday she does not “want that.”\r\n“The… [+2133 chars]",
    },
    {
      source: { id: null, name: "The A.V. Club" },
      author: "Tatiana Tenreyro",
      title: "Arcade Fire announces new album WE - The A.V. Club",
      description:
        'The band shared the first single, called"The Lightning I, II," from the upcoming record',
      url: "https://www.avclub.com/arcade-fire-announce-new-album-we-1848668126",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/217cc02537eb7fa8070ed1512068753f.jpg",
      publishedAt: "2022-03-17T18:40:00Z",
      content:
        "Arcade Fire is ready to usher us into a new post-Everything Now era. After announcing a surprise show in New Orleans benefitting Ukraine at the beginning of the week and teasing new music for the pas… [+2135 chars]",
    },
    {
      source: { id: null, name: "TVLine" },
      author: "Dave Nemetz",
      title:
        "[VIDEO] 'Candy' Teaser: Jessica Biel Docudrama on Hulu — Watch - TVLine",
      description:
        "Hulu is giving us a taste of Candy: A new teaser has been released for the Jessica Biel-led limited series, which you can watch above. Based on a true story, Candy stars Biel as Candy Montgomery, a picture-perfect Texas housewife in the 1980s who’s done every…",
      url: "https://tvline.com/2022/03/17/candy-hulu-jessica-biel-teaser-photos/",
      urlToImage:
        "https://tvline.com/wp-content/uploads/2022/03/candy-hulu-jessica-biel.jpg?w=1024",
      publishedAt: "2022-03-17T18:32:00Z",
      content:
        "Hulu is giving us a taste of Candy: A new teaser has been released for the Jessica Biel-led limited series, which you can watch above.\r\nBased on a true story, Candy stars Biel as Candy Montgomery, a … [+1759 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Carly Stern",
      title:
        "Petition to YouTube to remove Marilyn Manson video in which he allegedly rapes Evan Rachel Wood - Daily Mail",
      description:
        "Wood, 34, claims in her new documentary, Phoenix Rising, that then-boyfriend Manson raped her while filming 'Heart-Shaped Glasses.'",
      url: "https://www.dailymail.co.uk/femail/article-10624121/Petition-YouTube-remove-Marilyn-Manson-video-allegedly-rapes-Evan-Rachel-Wood.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/03/17/16/55481217-0-image-a-237_1647534656232.jpg",
      publishedAt: "2022-03-17T18:22:56Z",
      content:
        "Thousands of people have signed a petition demanding that Marilyn Manson's 'Heart-Shaped Glasses' be pulled from YouTube in light of actress Evan Rachel Wood's claims that Manson raped her in the mus… [+15171 chars]",
    },
    {
      source: { id: null, name: "Eonline.com" },
      author: "Corinne Heller",
      title:
        "Marvel-ous News: Tom Hiddleston and Zawe Ashton Are Engaged - E! NEWS",
      description:
        "Loki is getting married! Tom Hiddleston has popped the question to fellow Marvel star Zawe Ashton. Get more details on their romance.",
      url: "https://www.eonline.com/news/1323538/marvel-ous-news-tom-hiddleston-and-zawe-ashton-are-engaged",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2022217/rs_1200x1200-220317102856-1200-Tom-Hiddleston-engaged-to-Zawe-Ashton-GettyImages-1384872019.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2022-03-17T18:10:00Z",
      content:
        "No tricks here! Tom Hiddleston is engaged.\r\nThe actor, best known for playing Marvel's trickster god Loki, is set to marry girlfriend and fellow MCU star Zawe Ashton, E! News learned Thursday, March … [+725 chars]",
    },
    {
      source: { id: null, name: "Vulture" },
      author: "Roxana Hadadi",
      title: "Review: 'WeCrashed' Disrupts Nothing - Vulture",
      description:
        "This tedious series’ top-down, voyeuristic focus on the notorious couple behind WeWork is impressively ill conceived.",
      url: "http://www.vulture.com/article/review-wecrashed-wework-series-jared-leto-anne-hathaway.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/a23/94b/0f1324e2bc5dc19b266493a9c4ab0685b8-wecrashed.1x.rsocial.w1200.jpg",
      publishedAt: "2022-03-17T17:51:58Z",
      content:
        "If there is one benefit to the gruelingly long, impressively ill-conceived WeCrashed, its how clear the series is, perhaps unintentionally, in its depiction of one dispiriting truism that fellow scam… [+9565 chars]",
    },
  ],

  sports: [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Homero de la Fuente and Richard Greene, CNN",
      title:
        "Russian court extends US basketball star Brittney Griner's arrest until May 19, reports TASS - CNN",
      description:
        "A Moscow court announced it has extended the arrest of American basketball star Brittney Griner until May 19, according to Russian state news agency TASS.",
      url: "https://www.cnn.com/2022/03/17/sport/brittney-griner-russia-detention-extended-spt-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220311023551-wnba-brittney-griner-052019-file-super-tease.jpg",
      publishedAt: "2022-03-17T23:54:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Eric Levenson and Steve Almasy, CNN",
      title:
        "Swimmer Lia Thomas becomes first transgender athlete to win an NCAA D-I title - CNN",
      description:
        "University of Pennsylvania swimmer Lia Thomas became the first transgender athlete to win an NCAA Division I title after finishing first in the women's 500-yard freestyle event Thursday evening.",
      url: "https://www.cnn.com/2022/03/17/sport/lia-thomas-ncaa-swimming/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317185359-01-lia-thomas-ncaa-swimming-super-tease.jpg",
      publishedAt: "2022-03-17T23:48:26Z",
      content: null,
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Rob Demovsky",
      title:
        "Sources -- Green Bay Packers trading Davante Adams to Las Vegas Raiders - ESPN",
      description:
        "In a blockbuster trade, the Raiders are acquiring Davante Adams from the Packers for two 2022 draft picks, including their first-rounder, sources told ESPN. Las Vegas is giving the star receiver a new 5-year contract.",
      url: "https://www.espn.com/nfl/story/_/id/33529955/green-bay-packers-trading-davante-adams-las-vegas-raiders",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0110%2Fr960059_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-17T23:42:36Z",
      content:
        "GREEN BAY, Wis. -- It turns out Aaron Rodgers' return to the Green Bay Packers didn't mean the same thing for Davante Adams. Just days after Rodgers signed his blockbuster contract extension to retur… [+3700 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Adam Zagoria",
      title:
        "NCAA March Madness: Michigan Knocks Off Colorado State - The New York Times",
      description:
        "Michigan also beat Colorado State, a higher-seeded team, but oddsmakers had favored the Wolverines. Providence held off South Dakota State and Memphis notched a big win.",
      url: "https://www.nytimes.com/2022/03/17/sports/ncaabasketball/march-madness-score-results.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/17/multimedia/17mcbb-tournament-richmond/17mcbb-tournament-richmond-facebookJumbo.jpg",
      publishedAt: "2022-03-17T23:20:11Z",
      content:
        "As one member of Michigans famed Fab Five exhorted the Wolverines from the stands at Gainbridge Fieldhouse in Indianapolis, another member coached the team into the round of 32 in the N.C.A.A. tourna… [+1983 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Everton v. Newcastle | PREMIER LEAGUE HIGHLIGHTS | 3/17/2022 | NBC Sports - NBC Sports",
      description:
        "Alex Iwobi's dramatic 99th-minute winner may have saved Everton's season, as the 10-man Toffees stole a vital win over Newcastle to boost their survival hope...",
      url: "https://www.youtube.com/watch?v=aU-xG5DVTcY",
      urlToImage: "https://i.ytimg.com/vi/aU-xG5DVTcY/maxresdefault.jpg",
      publishedAt: "2022-03-17T23:09:32Z",
      content: null,
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Joel Sherman",
      title:
        "Dodgers' Freddie Freeman signing shows how much further Mets have to go - New York Post ",
      description:
        "Freddie Freeman left the NL East, a nice outcome for the Mets — But he did end up with the Dodgers, making the best of the National League even better.",
      url: "https://nypost.com/2022/03/17/freddie-freeman-to-dodgers-improves-national-leagues-best/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/03/freddie-freeman-dodgers-nl-east.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-03-17T22:53:00Z",
      content:
        "PORT ST. LUCIE Freddie Freeman left the NL East on Wednesday night, a nice outcome for the Mets considering that Max Scherzer described the first baseman as the toughest at-bat in the division.\r\nBut … [+4774 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Rich Cimini",
      title:
        "New York Jets CB D.J. Reed says Seattle Seahawks' offer to try to re-sign him was 'disrespectful' - ESPN",
      description:
        'New Jets cornerback D.J. Reed said Thursday he "felt disrespected" by the Seahawks\' offer to him when they tried to re-sign him.',
      url: "https://www.espn.com/nfl/story/_/id/33529428/new-york-jets-cb-dj-reed-says-seattle-seahawks-offer-try-re-sign-was-disrespectful",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1220%2Fr792744_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-17T22:43:51Z",
      content:
        'FLORHAM PARK, N.J. -- Cornerback D.J. Reed enjoyed his two seasons with the Seattle Seahawks. He wanted to stick around, but he was insulted by their contract offer before free agency.\r\n"They made me… [+2873 chars]',
    },
    {
      source: { id: null, name: "Goheels.com" },
      author: "University of North Carolina Athletics",
      title: "Lucas: Marquette Rapid Reactions - UNC Athletics",
      description: "Quick takeaways from the NCAA Tournament opener.",
      url: "https://goheels.com/news/2022/3/17/mens-basketball-lucas-marquette-rapid-reactions.aspx",
      urlToImage:
        "https://d141rwalb2fvgk.cloudfront.net/images/2022/3/17/Love_A22I7484.jpg?preset=large.socialmediaimage",
      publishedAt: "2022-03-17T22:42:42Z",
      content:
        "Story Links\r\nBy Adam Lucas1. Carolina dominated Marquette in a first round NCAA Tournament win, 95-63. Carolina had a remarkable 29 assists on 34 made field goals in an incredible display of sharing … [+3721 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Don Van Natta Jr.",
      title:
        "Ex-GM Donnie Nelson sues Dallas Mavericks, says he was fired for reporting sexual misconduct; team denies claim - ESPN",
      description:
        "Donnie Nelson is suing the Mavericks, with the former longtime general manager alleging that team owner Mark Cuban fired him for reporting sexual harassment and sexual assault by a staff member. The Mavericks deny the allegations.",
      url: "https://www.espn.com/nba/story/_/id/33527472/ex-gm-donnie-nelson-sues-dallas-mavericks-says-was-fired-reporting-sexual-misconduct-team-denies-claim",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0616%2Fr868313_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-17T22:41:15Z",
      content:
        "Former longtime Dallas Mavericks general manager Donnie Nelson sued the team Thursday, alleging that owner Mark Cuban fired him last summer as retaliation for reporting that Cuban's chief of staff se… [+11908 chars]",
    },
    {
      source: { id: null, name: "The Boston Globe" },
      author: null,
      title:
        "Patriots sign veteran running back Ty Montgomery to two-year deal - The Boston Globe",
      description:
        "Montgomery, a converted wide receiver, spent the last two seasons with the Saints and also is used on special teams.",
      url: "https://www.bostonglobe.com/2022/03/17/sports/patriot-free-agency-ty-montgomery/",
      urlToImage:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/audT7RF63vCjUShLft7-JZfP6s0=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/HP5KQXYC7ED5NKU4JE3PMBF2QU.jpg",
      publishedAt: "2022-03-17T22:41:15Z",
      content:
        "Soon after entering the NFL, though, Montgomery shifted his position to running back. He was Green Bays leading rusher in 2016, with 457 yards and three touchdowns. He also caught 44 passes for 348 y… [+4244 chars]",
    },
    {
      source: { id: null, name: "U.S. Soccer" },
      author: null,
      title:
        "Berhalter Calls 27 Players For March World Cup Qualifying Training Camp - U.S. Soccer",
      description:
        "USMNT Sits in Second Place of Octagonal with Three Matches Remaining; USA-Mexico on March 24 at Estadio Azteca Kicks Off Climactic Window",
      url: "https://www.ussoccer.com/stories/2022/03/berhalter-calls-27-players-for-march-world-cup-qualifying-training-camp",
      urlToImage:
        "https://cdn.ussoccer.com/-/media/project/ussf/2022-article-images/mntconmar_roster_announcementfbtw_1roster_card.ashx?h=1080&la=en-US&w=1920&rev=e0ced7baa7ed416d91d226a7067a24d9&hash=4084703304A4CEABE6862560B6D823E7",
      publishedAt: "2022-03-17T22:35:08Z",
      content:
        "(BACK) IN THE MIX\r\nOf the 27 players, a total of 19 were part of the January/February World Cup Qualifying roster. With 71 caps, DeAndre Yedlin is the most experienced player on the roster, followed … [+11552 chars]",
    },
    {
      source: { id: null, name: "The Falcoholic" },
      author: "Adnan Ikic",
      title:
        "Falcons sign former Bears RB Damien Williams to 1-year deal - The Falcoholic",
      description: "Williams is a seven-year veteran.",
      url: "https://www.thefalcoholic.com/2022/3/17/22983884/falcons-sign-former-bears-rb-damien-williams-to-1-year-deal",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/VH7t3JuEtVXGm23HRno6WgM1Trs=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23325214/1339944596.jpg",
      publishedAt: "2022-03-17T22:23:36Z",
      content:
        "The Atlanta Falcons have made an addition to their running back room on Thursday afternoon, announcing the signing of seven-year veteran Damien Williams, who previously played for the Chicago Bears.\r… [+740 chars]",
    },
    {
      source: { id: null, name: "Cincy Jungle" },
      author: "Jason Marcum",
      title:
        "La’el Collins visiting Bengals after Cowboys cut him: NFL Free Agents 2022 - Cincy Jungle",
      description: "“This has a chance to get done.”",
      url: "https://www.cincyjungle.com/2022/3/17/22974512/lael-collins-cowboys-news-bengals-rumors-nfl-free-agents-2022",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/4NoMa_5Xe237nMOJU1GFvmxGg_8=/169x65:1122x564/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23325267/1020221130.jpg",
      publishedAt: "2022-03-17T22:22:53Z",
      content:
        "The Cincinnati Bengals are wasting no time in getting Lael Collins to town.\r\nAccording to the NFL Network, Collins is set to visit the Bengals, and theres a chance a deal gets. This comes after the D… [+1994 chars]",
    },
    {
      source: { id: null, name: "Prideofdetroit.com" },
      author: "Jeremy Reisman",
      title:
        "DJ Chark says he turned down multi-year deals because Lions were right culture fit - Pride Of Detroit",
      description:
        "The family culture of the Detroit Lions was a big reason Chark chose to sign there.",
      url: "https://www.prideofdetroit.com/2022/3/17/22983776/dj-chark-he-turned-down-multi-year-deals-detroit-lions-culture-fit-free-agency",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/xCR6hY6eZ9TOcJtD1e7UwYlsriU=/0x37:2770x1487/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23325007/usa_today_15987414.jpg",
      publishedAt: "2022-03-17T21:45:00Z",
      content:
        "This years free agency period proved lucrative for a lot of wide receivers. Christian Kirk got a four-year, $72 million deal. Allen Robinson just agreed to terms with the Rams for a reported three-ye… [+3675 chars]",
    },
    {
      source: { id: null, name: "MLB Trade Rumors" },
      author: "Anthony Franco",
      title: "Angels To Sign Ryan Tepera - MLB Trade Rumors",
      description:
        "The Angels continue to bolster the relief unit, agreeing to terms with Ryan Tepera on a two-year, $14MM deal. It's the second notable &hellip;",
      url: "https://www.mlbtraderumors.com/2022/03/angels-working-on-agreement-with-ryan-tepera.html",
      urlToImage:
        "https://cdn.mlbtraderumors.com/files/2022/03/USATSI_16932743-1024x715.jpg",
      publishedAt: "2022-03-17T21:43:49Z",
      content:
        "The Angels continue to bolster the relief unit, agreeing to terms with Ryan Tepera on a two-year, $14MM deal. It’s the second notable free agent pickup of the day for the Halos, who agreed to terms w… [+3382 chars]",
    },
    {
      source: { id: null, name: "syracuse.com" },
      author: "Matt Parrino | mparrino@nyup.com",
      title:
        "Cole Beasley sends messages to former Bills teammates after release - syracuse.com",
      description:
        "Beasley and Isaiah McKenzie share heartfelt messages after veteran released by Bills.",
      url: "https://www.syracuse.com/buffalo-bills/2022/03/cole-beasley-sends-messages-to-former-bills-teammates-after-release.html",
      urlToImage:
        "https://www.syracuse.com/resizer/yJB-5ZouV8q5wZTn3b-qirDkEiE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ES7A2LIX3ZFJBG2HIDBSCPLBT4.jpg",
      publishedAt: "2022-03-17T21:42:00Z",
      content:
        "The Buffalo Bills released veteran wide receiver Cole Beasley on Thursday, ending months of speculation that the team would cut him to add roughly $6 million in salary cap space.\r\nAfter the move beca… [+2830 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Paula Badosa vs. Veronika Kudermetova | 2022 Indian Wells Quarterfinal | WTA Match Highlights - WTA",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAstYKWQGKUM",
      urlToImage: null,
      publishedAt: "2022-03-17T21:41:43Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Cameron DaSilva",
      title: "6 takeaways from Rams' deal with WR Allen Robinson - Rams Wire",
      description:
        "The Rams added another star receiver to their offense, bringing in Allen Robinson. What does it mean for the offense and LA’s other WRs?",
      url: "https://theramswire.usatoday.com/lists/rams-allen-robinson-free-agency-signing-takeaways/",
      urlToImage:
        "https://theramswire.usatoday.com/wp-content/uploads/sites/64/2022/03/c3c6e55a7cd3499fb9630ecc4f816761.jpg?w=1024&h=576&crop=1",
      publishedAt: "2022-03-17T21:36:21Z",
      content:
        "The Rams are always open to trading players, even ones perceived as being key starters. They did it with Michael Brockers, Jared Goff, Brandin Cooks and Marcus Peters, and they also cut Todd Gurley a… [+589 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Nate Ulrich, USA TODAY",
      title:
        "Baker Mayfield requests trade from Browns, who say they won't deal starting QB - USA TODAY",
      description:
        "Baker Mayfield wants out of Cleveland after the Browns pursued Deshaun Watson, but the team isn't entertaining the idea of moving its starting QB.",
      url: "https://www.usatoday.com/story/sports/nfl/browns/2022/03/17/baker-mayfield-requests-trade-cleveland-browns-deshaun-watson/7080523001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/03/17/USAT/08768b47-f4ca-4d59-8ec0-8a64d3e401e6-XXX_IMG_AP_BROWNS_PATRIOTS_F_1_1_73V1VP80.jpg?auto=webp&crop=5517,3103,x1,y0&format=pjpg&width=1200",
      publishedAt: "2022-03-17T21:33:45Z",
      content:
        "Baker Mayfield wants a divorce. The Cleveland Browns, however, are reluctant to sign the papers, at least for now.\r\nMayfield asked for a trade Thursday afternoon, but the Browns responded by telling … [+6738 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Charl Schwartzel throws club on 15, eagles 16 at Valspar Championship | Golf Channel - Golf Channel",
      description:
        "Charl Schwartzel feels the highs and lows at the Valspar Championship, throwing his club after his tee shot on the 15th hole and then holing out for Eagle fr...",
      url: "https://www.youtube.com/watch?v=x7PntFquJ7U",
      urlToImage: "https://i.ytimg.com/vi/x7PntFquJ7U/maxresdefault.jpg",
      publishedAt: "2022-03-17T21:24:07Z",
      content: null,
    },
  ],
  business: [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Wall Street closes higher as worries ease around Fed, Russian default - Reuters.com",
      description:
        "All three of Wall Street's major indexes advanced more than 1% on Thursday as investors considered the Federal Reserve's path for interest rate hikes and worries eased about the prospects of a Russian default after creditors received payments.",
      url: "https://www.reuters.com/business/futures-slip-ukraine-jitters-after-fed-driven-rally-2022-03-17/",
      urlToImage:
        "https://www.reuters.com/resizer/D9YtJreS_e_TZuR01JcBQJ2QSdo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJUBMYBQUVP47PWUB2ORQYGUXA.jpg",
      publishedAt: "2022-03-17T23:37:00Z",
      content:
        "March 17 (Reuters) - All three of Wall Street's major indexes advanced more than 1% on Thursday as investors considered the Federal Reserve's path for interest rate hikes and worries eased about the … [+4220 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Sarah E. Needleman, Denny Jacob",
      title: "GameStop Shares Fall on Surprise Loss - The Wall Street Journal",
      description:
        "The videogame retailer posts an adjusted loss of $1.86 a share; analysts were expecting a profit",
      url: "https://www.wsj.com/articles/gamestop-shares-fall-on-surprise-loss-11647550430",
      urlToImage: "https://images.wsj.net/im-506209/social",
      publishedAt: "2022-03-17T23:34:00Z",
      content:
        "GameStop Corp. recorded a loss during the holiday quarter despite an increase in sales, surprising analysts who were expecting the videogame retailer to turn a profit. \r\n GameStop has been working to… [+325 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Leslie Josephs",
      title:
        "American Airlines will resume alcohol sales on flights starting April 18 - CNBC",
      description:
        "American and Southwest last year delayed plans to bring back alcohol because of assaults on crew members.",
      url: "https://www.cnbc.com/2022/03/17/american-airlines-will-resume-alcohol-sales-on-board-april-18.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105473015-1537987912232gettyimages-863830172.jpeg?v=1647442166&w=1920&h=1080",
      publishedAt: "2022-03-17T23:07:50Z",
      content:
        "American Airlines said Thursday it will resume sales of alcoholic beverages on domestic and short-haul international flights next month, a plan it delayed almost a year ago because of a surge in unru… [+1748 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Krystal Hur",
      title:
        "Keep trusting money-making companies through market turbulence, Cramer says - CNBC",
      description:
        '"Stay out of the crosshairs of the young, money-losing stocks," the "Mad Money" host said Thursday.',
      url: "https://www.cnbc.com/2022/03/17/cramer-keep-trusting-money-making-companies-through-market-turbulence.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/104531352-IMG_1181rrr-jim-cramer.jpg?v=1497548243&w=1920&h=1080",
      publishedAt: "2022-03-17T22:44:09Z",
      content:
        "Investors need to keep their eyes on the prize by choosing companies with tangible results and tuning out the outside noise, CNBC's Jim Cramer said Thursday.\r\n\"Stay out of the crosshairs of the young… [+1643 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Julie Creswell",
      title:
        "Koch Industries Will Continue to Operate Factories in Russia - The New York Times",
      description:
        "Koch employs about 600 people in Russia through a unit that makes up a small part of its overall business.",
      url: "https://www.nytimes.com/2022/03/17/business/koch-russia.html",
      urlToImage:
        "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
      publishedAt: "2022-03-17T21:11:41Z",
      content:
        "Koch Industries, the industrial conglomerate run by the billionaire Charles Koch, has said it will continue to operate factories in Russia as other companies pull out after Russias attack on Ukraine.… [+889 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Gina Martinez",
      title:
        "Chick-fil-A may be declared a 'public nuisance' by the city of Santa Barbara due to drive-thru lines - Daily Mail",
      description:
        "Santa Barbara officials are close to declaring a busy Chick-fil-A a 'public nuisance' due to traffic safety concerns caused by the restaurant's long drive-thru lines.",
      url: "https://www.dailymail.co.uk/news/article-10624839/Chick-fil-declared-public-nuisance-city-Santa-Barbara-drive-lines.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/03/17/20/55490249-0-image-a-14_1647549993124.jpg",
      publishedAt: "2022-03-17T21:01:26Z",
      content:
        "California officials are close to declaring a busy Chick-fil-A a 'public nuisance' due to traffic safety concerns caused by the restaurant's long drive-thru lines. \r\nEarlier this month the Santa Barb… [+4540 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Mary Meisenzahl",
      title:
        "Burger King says it wants to shut down its 800 restaurants in Russia but it can't - Yahoo News",
      description:
        "Burger King's franchising agreement means it doesn't have unilateral control of Russian operations.",
      url: "https://www.businessinsider.com/burger-king-wants-to-shut-down-russian-restaurants-2022-3",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/rcPbYVlcU1KVkp_PsuR58A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/uu/api/res/1.2/5n8c6fmjlJgCFIilM36ciA--~B/aD0zMzMzO3c9NDQ0NDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/business_insider_articles_888/1bfe50459c1595dedd319d89adc9c463",
      publishedAt: "2022-03-17T21:00:20Z",
      content:
        "A Burger King store in St. Petersburg, Russia.Maksim Konstantinov/SOPA Images/LightRocket via Getty Images.\r\n<ul><li>Burger King parent company president David Shear says the chain wants to close its… [+2757 chars]",
    },
    {
      source: { id: null, name: "Jalopnik" },
      author: "Lawrence Hodge",
      title:
        "I'm Going To Need Audi To Give Us This Gorgeous A6 Avant E-Tron - Jalopnik",
      description:
        "But you know we won't ever see this thing on our shores when it goes on sale.",
      url: "https://jalopnik.com/im-going-to-need-audi-to-give-us-this-gorgeous-a6-avant-1848665144",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5e8dfa5eb07fbf3482265c211bda2986.jpg",
      publishedAt: "2022-03-17T21:00:00Z",
      content:
        "Piggybacking off last years A6 e-tron Sportback concept, Audi has teased us with some possible forbidden fruit: an EV wagon. The German luxury brand has debuted a wagon version of its A6 e-tron conce… [+2667 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Kellen Browning",
      title:
        "Uber, Lyft Drivers Struggle With High Gas Prices - The New York Times",
      description:
        "Some drivers say they find it hard to justify spending hours on the road for Uber or Lyft as fuel costs continue to tick upward.",
      url: "https://www.nytimes.com/2022/03/17/technology/gas-prices-uber-lyft-drivers.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/17/multimedia/17gig-gas1/17gig-gas1-facebookJumbo.jpg",
      publishedAt: "2022-03-17T20:31:50Z",
      content:
        "Jennifer Montgomery, an UberEats driver in Las Vegas, where gas costs $5 per gallon, agreed that the gas fee doesnt even put a dent in the cost of fuel, which for her has been at least $30 more each … [+957 chars]",
    },
    {
      source: { id: null, name: "Kitco NEWS" },
      author: "http://www.facebook.com/kitconews",
      title:
        "Commodity chaos triggers double-digit gains for gold price as war in Ukraine enters fourth week - Kitco NEWS",
      description: "",
      url: "https://www.kitco.com/news/2022-03-17/Commodity-chaos-triggers-double-digit-gains-for-gold-price-as-war-in-Ukraine-enters-fourth-week.html",
      urlToImage:
        "https://www.kitco.com/news/2022-03-17/images/shutterstock_2100588973-min.jpg",
      publishedAt: "2022-03-17T20:23:00Z",
      content:
        "(Kitco News) Precious metals are back at the top of the leader board, posting double-digit gains as the volatile commodity space keeps investors looking at gold, palladium, silver, and platinum.\r\nOn … [+4427 chars]",
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Philip van Doorn",
      title:
        "17 oil stocks, including Warren Buffett favorite Occidental Petroleum, that are expected to book the highest free cash flow - MarketWatch",
      description:
        "High free cash flow, strong demand for oil and low capital spending are setting up good times for investors",
      url: "https://www.marketwatch.com/story/17-oil-stocks-including-warren-buffett-favorite-occidental-petroleum-that-are-expected-to-book-the-highest-free-cash-flow-11647530943",
      urlToImage: "https://images.mktw.net/im-382169/social",
      publishedAt: "2022-03-17T20:10:00Z",
      content:
        "The price action has been nothing short of breathtaking oil has swung by $55 a barrel this year. On Thursday alone, it surged by more than 7% after peace negotiations stalled in Ukraine and billionai… [+7158 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Business Wire",
      title:
        "FedEx Corp. Reports Higher Third Quarter Earnings - Yahoo Finance",
      description:
        "MEMPHIS, Tenn., March 17, 2022--FedEx Corp. (NYSE: FDX) today reported financial results for the quarter ended February 28.",
      url: "https://finance.yahoo.com/news/fedex-corp-reports-higher-third-200300859.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/h0a5haj1JLrSUPGqD8oDIg--~B/aD0xMDE7dz0yMDY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/business-wire.com/9959989503cc83561a84003d5e8f07d4",
      publishedAt: "2022-03-17T20:03:00Z",
      content:
        "Operating Income of $1.3 Billion, Up 32% Year Over Year; Up 37% on an Adjusted Basis\r\nStrong Earnings Growth Expected in Fourth Quarter\r\nMEMPHIS, Tenn., March 17, 2022--(BUSINESS WIRE)--FedEx Corp. (… [+25226 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Matt Egan, CNN Business",
      title: "Oil spikes back above $100 as Russia fears grow - CNN",
      description:
        "Oil prices surged Thursday back above $100 a barrel on renewed concerns about the war in Ukraine disrupting Russia's energy supplies.",
      url: "https://www.cnn.com/2022/03/17/business/oil-gas-prices-russia/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220317130955-us-crude-oil-0314-super-tease.jpg",
      publishedAt: "2022-03-17T19:57:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Alex Weprin",
      title:
        "Endeavor CEO Ari Emanuel’s 2021 Pay Package Tops $308M Thanks to IPO Equity - Hollywood Reporter",
      description:
        "In his first year leading a publicly traded company, Endeavor founder and CEO Ari Emanuel received a pay package that topped $308 million, thanks almost entirely to a one-time restricted stock grant, which is tied to performance. In its annual report with the…",
      url: "https://www.hollywoodreporter.com/business/business-news/ari-emanuels-2021-pay-package-1235113583/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/03/GettyImages-1309826391-H-2022.jpg?w=1024",
      publishedAt: "2022-03-17T19:53:24Z",
      content:
        "In his first year leading a publicly traded company, Endeavor founder and CEO Ari Emanuel received a pay package that topped $308 million, thanks almost entirely to a one-time restricted stock grant,… [+3047 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Paul R. La Monica, CNN Business",
      title:
        "Warren Buffett's Berkshire Hathaway is making a huge bet on this oil company - CNN",
      description:
        "The Oracle of Omaha is making an even bigger bet on a major oil company as crude prices continue to surge.",
      url: "https://www.cnn.com/2022/03/17/investing/berkshire-hathaway-warren-buffett-occidental-petroleum/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210623073725-01-warren-buffett-2019-file-super-tease.jpg",
      publishedAt: "2022-03-17T18:43:47Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Spencer Kimball",
      title:
        "Merck's Keytruda reduced risk of disease recurrence or death in early lung cancer patients by 24% - CNBC",
      description:
        "Merck plans to submit the data on early stage lung cancer to the FDA as soon as possible.",
      url: "https://www.cnbc.com/2022/03/17/mercks-keytruda-reduced-risk-of-recurrence-or-death-in-early-lung-cancer-patients-by-24percent.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107032008-1647522429666-gettyimages-689594434-Stefanie.jpeg?v=1647522480&w=1920&h=1080",
      publishedAt: "2022-03-17T18:17:56Z",
      content:
        "Merck's antibody therapy for early stage lung cancer patients who have previously undergone surgery to have tumors removed reduced the risk of the disease returning again or the patient dying by 24%,… [+4338 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Catie Keck",
      title:
        "Why Netflix is starting to crack down on password sharing - The Verge",
      description:
        "Netflix has for years ignored the fact that many of us are mooching off our friends’ and families’ accounts. But as Netflix’s growth slows and its annual production budget for churning out new hits creeps ever higher, that’s changed. In other words, Netflix n…",
      url: "https://www.theverge.com/22983315/netflix-password-account-sharing-test-streaming",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/z7NKhXwT3kSZUT8D0tQmI_Moz74=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13370033/acastro_181101_1777_netflix_0001.jpg",
      publishedAt: "2022-03-17T18:17:16Z",
      content:
        "Netflix is changing its tune on account sharing\r\nIllustration by Alex Castro / The Verge\r\nNetflix has for years ignored the fact that many of us are mooching off our friends and families accounts. Bu… [+3779 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Robert Frank",
      title:
        "A million new millionaires were created in U.S. last year, and the richest got richer, report says - CNBC",
      description:
        "The roaring stock market and crypto gains created more than a million new millionaires in the U.S. last year, according to a new report.",
      url: "https://www.cnbc.com/2022/03/17/million-new-millionaires-were-created-in-us-last-year-report-says.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106802203-1623342920737-106802203-1606309030811-wall.jpg?v=1623342931&w=1920&h=1080",
      publishedAt: "2022-03-17T18:17:09Z",
      content:
        "The roaring stock market and crypto gains created more than a million new millionaires in the U.S. last year, according to a new report.\r\nThe number of Americans with $1 million or more in investible… [+2473 chars]",
    },
    {
      source: { id: null, name: "Chicago Tribune" },
      author: "Olivia Olander, Madeline Buckley",
      title: "Gas giveaway prompts traffic issues - Chicago Tribune",
      description:
        "Social media reports about traffic around the stations selected for Willie Wilson's gas giveaway seemed to be flowing faster than free fuel Thursday.",
      url: "https://www.chicagotribune.com/news/ct-gas-giveaway-traffic-congestion-willie-wilson-20220317-sjuj53dwizecte6ocyvxtzlyaq-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/ateHHXHBorZs0tSX3C2cY-rsrtw=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/LHJLG3PDHREOHHRZPJXBLYEQFU",
      publishedAt: "2022-03-17T17:53:00Z",
      content:
        "A gas giveaway by entrepreneur and former mayoral candidate Willie Wilson caused a headache for some Chicagoans Thursday morning, and not from fuel fumes: Cars reportedly lined up overnight in antici… [+3016 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "EXCLUSIVE Moscow sets out strict new controls on foreigners trading Russian assets - Reuters.com",
      description:
        'Russia laid down strict new rules for foreigners seeking permits to buy and sell Russian assets ranging from securities to real estate, a client memo by Citigroup <a href="https://www.reuters.com/companies/C.N" target="_blank">(C.N)</a> showed, raising fresh …',
      url: "https://www.reuters.com/business/exclusive-moscow-outlines-tough-terms-foreigners-trading-russia-assets-citi-memo-2022-03-17/",
      urlToImage:
        "https://www.reuters.com/resizer/lOZXW5UfEvgGD5xJENZ4DdK09Mk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KRMMIG7RMBMB5ERNUCKLXKC5QA.jpg",
      publishedAt: "2022-03-17T17:50:00Z",
      content:
        "LONDON/NEW YORK, March 17 (Reuters) - Russia laid down strict new rules for foreigners seeking permits to buy and sell Russian assets ranging from securities to real estate, a client memo by Citigrou… [+3786 chars]",
    },
  ],
};

export default newsArticles;
