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
