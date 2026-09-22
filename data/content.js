/* Fifty. All the words, all the faces.
   This is the only file the family needs to edit.
   Photos live in assets/photos. Tributes are in the order they should appear. */

window.BIRTHDAY = {
  person: {
    // The headline says "Mummy". Her given name is deliberately not used there.
    name: "Mummy",
    milestone: 50,
    greeting: "Happy 50th Birthday, Mummy",
    subtitle: "Fifty years of you. Here is what everyone wanted to say.",
    fromAll: "From all of us"
  },

  /* Chronological. Every photo carries its true pixel size so layouts can
     reserve the exact space and never crop a face. */
  chapters: [
    {
      id: "before",
      title: "Before we called her Mummy",
      note: "A young woman, a young love, and a life not yet built."
    },
    {
      id: "building",
      title: "Building it, brick by brick",
      note: "The work, the shop, the first small hands to hold."
    },
    {
      id: "between",
      title: "The years in between",
      note: "Gele after gele. Celebration after celebration."
    },
    {
      id: "people",
      title: "Her people",
      note: "School runs, graduations, and everyone she carried along."
    },
    {
      id: "now",
      title: "Fifty, and glowing",
      note: "Today."
    }
  ],

  photos: [
    {
      src: "assets/photos/01-young-love-outdoors.jpg",
      w: 1800, h: 1244, chapter: "before",
      alt: "A young Nwando in a patterned wrapper and white hat standing beside Chike outside a house, palm trees behind them.",
      caption: "Long before the four of us."
    },
    {
      src: "assets/photos/02-young-love-traditional.jpg",
      w: 1800, h: 1226, chapter: "before",
      alt: "Nwando laughing with her head tilted toward Chike as they sit together on a dark couch, both in traditional dress.",
      caption: "Thirty-two years of friendship started somewhere around here."
    },
    {
      src: "assets/photos/03-building-a-life.jpg",
      w: 1800, h: 988, chapter: "building",
      alt: "Nwando standing among stacked goods, coolers, basins and chairs at her trading stall.",
      caption: "Surrounded by the work of her own hands."
    },
    {
      src: "assets/photos/04-family-with-baby.jpg",
      w: 1800, h: 1335, chapter: "building",
      alt: "Nwando in a pink top holding a baby boy, with Chike beside her, all three smiling.",
      caption: "The firstborn."
    },
    {
      src: "assets/photos/05-mother-and-daughter.jpg",
      w: 1800, h: 1295, chapter: "building",
      alt: "Nwando holding a small girl with beaded braids close to her cheek.",
      caption: "And then there were more of us."
    },
    {
      src: "assets/photos/06-early-portrait.jpg",
      w: 498, h: 1080, chapter: "between",
      alt: "Nwando smiling gently in a teal patterned shirt, hair cut short.",
      caption: ""
    },
    {
      src: "assets/photos/07-green-celebration.jpg",
      w: 810, h: 1080, chapter: "between",
      alt: "Nwando in a green gele and bright green, red and yellow ankara, taking a photo outdoors.",
      caption: "Owambe weather."
    },
    {
      src: "assets/photos/08-blue-celebration.jpg",
      w: 607, h: 1080, chapter: "between",
      alt: "Nwando in a blue beaded blouse, blue gele and white lace wrapper standing outside a church.",
      caption: ""
    },
    {
      src: "assets/photos/09-braided-portrait.jpg",
      w: 810, h: 1080, chapter: "between",
      alt: "Nwando in long braids and a sheer black top, photographed at home.",
      caption: ""
    },
    {
      src: "assets/photos/10-with-her-daughter.jpg",
      w: 810, h: 1080, chapter: "people",
      alt: "Nwando in a white top leaning in cheek to cheek with one of her daughters.",
      caption: ""
    },
    {
      src: "assets/photos/11-school-run-crew.jpg",
      w: 810, h: 1080, chapter: "people",
      alt: "Nwando in ankara outdoors at school with three of the children, two in navy cadet uniforms, one pulling a face.",
      caption: "Nobody poses properly in this family."
    },
    {
      src: "assets/photos/12-school-day-selfie.jpg",
      w: 810, h: 1080, chapter: "people",
      alt: "Nwando taking a selfie with two of the girls in school uniform, all three smiling.",
      caption: ""
    },
    {
      src: "assets/photos/13-alumni-day.jpg",
      w: 810, h: 1080, chapter: "people",
      alt: "Nwando cheek to cheek with a daughter wearing a green alumni sash.",
      caption: "Another one finished."
    },
    {
      src: "assets/photos/14-red-portrait.jpg",
      w: 810, h: 1080, chapter: "now",
      alt: "Nwando in a red jacket, photographed beside a window.",
      caption: ""
    },
    {
      src: "assets/photos/15-red-celebration.jpg",
      w: 750, h: 1050, chapter: "now",
      alt: "Nwando in a red jacket and wide black trousers standing on a field at an outdoor ceremony.",
      caption: ""
    },
    {
      src: "assets/photos/16-golden-portrait.jpg",
      w: 792, h: 1080, chapter: "now",
      alt: "Nwando in gold lace, a gold gele and coral beads, looking straight at the camera.",
      caption: "Fifty looks like this.",
      hero: true
    },
    {
      src: "assets/photos/17-today-close.jpg",
      w: 810, h: 1080, chapter: "now",
      alt: "Nwando close to the camera in white lace and a champagne gele, greenery behind her.",
      caption: ""
    },
    {
      src: "assets/photos/18-today-in-white.jpg",
      w: 810, h: 1080, chapter: "now",
      alt: "Nwando standing on the grass under a tree in full white lace and a champagne gele.",
      caption: ""
    }
  ],

  /* Order matters: husband, then children by birth order, then friends,
     with Oghenero closing. */
  tributes: [
    {
      id: "chike",
      author: "Chike",
      relation: "Her husband",
      heading: "The Best Mummy in the whole World",
      salutation: "My Baby,",
      pullQuote: "After 32 years of friendship and 23 years of marriage, I can honestly say that I would still choose you.",
      paragraphs: [
        "As you turn 50, I find myself looking back at a journey that began long before we became husband and wife.",
        "We have been friends for 32 years and married for 23 years. When I think about that, I realise just how much of my life has been intertwined with yours. You have not simply been my wife; you have been my friend, my companion, my confidante, the mother of our children, and a woman who has stood beside me through some of life's most beautiful and most difficult moments.",
        "We have had our ups and downs. We have laughed, disagreed, struggled, celebrated, worried, hoped, and dreamed together. There have been moments when life tested us in ways we never anticipated, but somehow, through it all, we kept finding our way back to each other. And perhaps that is one of the greatest gifts of our journey: the storms did not destroy us, they strengthened the bond between us.",
        "You are a woman of many wonderful qualities. You are caring, strong, loyal, loving, resilient, and deeply committed to your family. You have given so much of yourself to the people you love. And yes, my dear, I cannot forget to mention that you can also be very stubborn! \u{1F602}\u{1F92A} But after 32 years, I have come to understand that even that stubbornness is sometimes just another expression of the strength of the woman I married.",
        "You have been an amazing mother and, without hesitation, I will continue to call you the Best Mummy in the World. Our family is blessed to have you, and I am grateful for the love, sacrifices, and countless things, seen and unseen, that you have given to make our home what it is.",
        "At 50, I don't just celebrate your age. I celebrate you: the woman, the wife, the mother, the friend, and the beautiful soul I have had the privilege of walking beside for more than three decades.",
        "My prayer for you as you enter this new chapter is that God will bless you with long life, sound health, peace of mind, joy, fulfilment, and abundant favour. May the years ahead be kinder, brighter, and more rewarding than the years behind. May every sacrifice you have made for others return to you as blessings. May your heart know peace, your home know happiness, and your days be filled with reasons to smile.",
        "May God protect you, guide you, and grant you the desires of your heart. May He bless our family through you and give us many more years together to laugh, argue, make up, travel, grow old, and create memories. May you also take Harmony Cooperative to a level it may never have imagined.",
        "My Baby, after 32 years of friendship and 23 years of marriage, I can honestly say that I would still choose you.",
        "Happy 50th Birthday, my ND baby, Ndokey, the Best Mummy in the World.",
        "I love you, and I pray that the best chapters of your life are only beginning.",
        "Happy Birthday, my love.",
        "Jah bless \u{1F64F}❤️"
      ],
      signoff: "Chike ❤️",
      /* A note laid on the table next to his letter. It is the family talking,
         not him, so his own words stay exactly as he wrote them. */
      aside: {
        name: "Voltron",
        text: "What Dad calls her, because she is always trying to defend us when he is scolding us."
      }
    },

    {
      id: "cc",
      author: "CC",
      relation: "Her first son",
      heading: "All the different versions of you",
      salutation: "",
      pullQuote: "I genuinely believe you might just be an angel sent from heaven, because you are simply just the embodiment of good.",
      paragraphs: [
        "I initially wrote, or should I say started writing, a piece a little while after you said that's what you wanted for your birthday, but I lost it before I could type it out, so this one might come off a bit short.",
        "It's been a rollercoaster through the years, with everything from both of us standing on opposite ends of an argument, to joining forces to go out and get things done, to our spicy gossips and everything in between. I love that I have been able to experience all the different versions of you.",
        "You've shown me what it means to try, fail, and try again. You've shown me a warmth I cannot express with words. In you I have seen what unadulterated, unfiltered joy looks like, and how you bring light to every room you walk into. And with it, what feels like above all, the love and care and understanding you use to approach anyone and everyone around you, and this very delicate touch you apply to every situation, as well as the wisdom in your approach.",
        "I genuinely believe you might just be an angel sent from heaven, because you are simply just the embodiment of good, and I'm so overwhelmed with happiness that I get to wake up and call you my mom.",
        "As you cross this milestone, I hope and pray that your life gets easier, and that you never run out of things that make you happy and people that give you the most joy. I pray you age in good health. I pray for long life, more genuine love, and prosperity that never runs dry.",
        "I love you so much, and I wish I had more than words to express it.",
        "Happy 50th Birthday, Mommy. I love you till the end of time."
      ],
      signoff: "CC"
    },

    {
      id: "uche",
      author: "Uche",
      relation: "Her second daughter, Nwanyikibie",
      heading: "To my mother, my first teacher, my safe place, and my forever Mummy",
      salutation: "Dear Mummy,",
      pullQuote: "If I had a thousand lives, I would still choose you. If I had a thousand mothers, I would still look for you.",
      paragraphs: [
        "Happy 50th birthday to the woman who is so many things to me that sometimes I genuinely do not know which one to call you first. My mother, my first teacher, my disciplinarian, my biggest supporter, my personal adviser, my prayer warrior, my gist partner, my meeting queen, my safe place, my comedian, my biggest critic, and somehow, still one of the funniest people I know. You are truly a full package, Mummy, and I don't think one lifetime is enough to explain everything you mean to me.",
        "Today, as you celebrate 50 beautiful years, I keep thinking about all the memories we have made together. Not just the big memories, but the tiny ones too. The funny ones. The embarrassing ones. The moments that made me angry as a child but make me laugh now. The moments I did not understand then but understand so much better now. When I look back, I realise that so much of who I am today was built in the middle of all those ordinary days with you.",
        "Mummy, you were not the kind of mother who only knew how to say, “I love you.” You showed love in your own language. Sometimes your love sounded like, “Ta, get out of there!” Sometimes it sounded like, “Ila mmanya?” Sometimes it sounded like, “Kini ezuzu ezuzu, keep zuzuing.” Sometimes, it sounded like a very serious warning followed by the instruction to go and bring the cane yourself when we've clearly hidden it. And somehow, you could beat us and use the other hand to pull that same child closer. That is you. You could be strict and still be soft. You could correct us and still make us feel loved. You knew how to be our mother in every possible way.",
        "And Mummy, let us talk about that cane era, because honestly, it deserves its own chapter. As a child, I would do all sorts of things, and eventually enter my bed thinking I had escaped justice. Then you would appear and say, “Bring the cane.” And somehow, I would actually go and bring it. Sometimes you would even say, “Bring another one.” And I would still go and bring another one! Looking back now, I honestly cannot believe I was participating in my own punishment so willingly. You would flog me, I would cry, and life would continue. At the time, I thought you were the strictest woman on earth. Now, when I remember those moments, I laugh, because they are some of the memories I would never want to lose.",
        "There are so many things you said repeatedly that have become part of our family slang. Me, I dey use am sha. Your “Ta, get out of there.” Your “Ina manya?” Your “Kini ezuzu ezuzu, keep zuzuing.” The way you can start a meeting saying it will only take 40 minutes and somehow, two hours and 45 minutes later, you are still talking, still explaining, still adding one more thing. Mummy, I think I inherited that one from you, guy. I understand meetings now. I understand why you love them. You always believed that meetings were more than just people sitting down to talk. You believed they brought family together, gave everyone a chance to share what they were going through, allowed knowledge to be passed around, and helped parents and children understand each other better. Even your long talks were always coming from a place of wanting your family to be connected.",
        "You have always been able to make us laugh. You join our jokes. You understand our inside jokes. You don't take every little thing personally. You can be dramatic, playful, serious and hilarious all in one conversation. And I love that about you. I love that beneath the strict mother was a woman who could genuinely have fun with her children. You did not just raise us; you lived with us. You laughed with us, argued with us, teased us, corrected us, encouraged us and carried all of us along.",
        "I also think about the times I did not understand you. There were things you did that I did not like. There were times I thought you were too strict. There were times I wondered why you had to shout, why you had to insist, why you had to be so firm. I was emotional, and sometimes I took things to heart. But university has taught me something I could never have understood as a little girl: I now see what you were protecting me from. I see the kind of person you were trying to raise. I see the value of the standards you gave me. I see why there were certain things I could never bring myself to do, because the fear of disappointing my mother was stronger than the temptation to do wrong. Your training followed me even when you were not physically there. And now I am grateful.",
        "You trained us so well, Mummy. You gave us standards. You gave us discipline. You taught us that education mattered. You made sacrifices for our future that we did not always understand at the time. You would rather spend money on our school fees and our education than buy fancy bags or unnecessary things for yourself. You chose good schools for us. None of us had to depend on federal schools, because you were determined to give us opportunities. And today, when I look at how well your children have done academically, I realise that your sacrifices were not small.",
        "One of the things I will never forget is how much you sacrificed financially for our education. You even gave out your car to help cover school fees. Mummy, that is not just a sacrifice; that is love in its most practical form. You were willing to give up something you owned because you believed our future was more important. We may not have understood the weight of that decision when we were younger, but I understand it now. I understand that there were things you wanted for yourself that you postponed because you wanted something better for us.",
        "I remember when I did not pass that exam and I was so scared, because I thought you were going to shout. But instead of destroying me with words, you found another way forward. You took me for Common Entrance, encouraged me, and I passed and continued my education. That is one of the many times you showed me that even when one door closes, you will look for another one.",
        "And mathematics! Mummy, I remember declaring with confidence that I was never going to learn mathematics. I had already made up my mind. But you? You were not interested in my declaration. You bombarded me with lesson teachers, gave me a piece of your mind, and made sure I learned it. Today, I am actually good at mathematics. So, technically, every time I solve a mathematical problem, there is a little bit of you inside that answer. You refused to let me give up on myself.",
        "You were also my first teacher in a way that goes far beyond academics. I watched you teach from when I was very young. I watched the way you taught, the happiness you found in teaching, the way you connected with people and gave your knowledge freely. You inspired me without even trying to. I followed that path, and eventually, I became good at it too. Maybe even better than you at some things, Mummy! But honestly, if I am being truthful, I only had the confidence to become good because I had already watched you do it first. You showed me what it meant to be intelligent, confident, eloquent, hardworking and committed.",
        "You have always been beautiful too. And I don't just mean physically, although you know very well that you are a beautiful woman. I mean the kind of beauty that comes from strength, intelligence, confidence, kindness and the way you carry yourself. You are stern, but you are caring. You are strong, but you are soft. You can be very serious, but you are also playful. You are emotional, but you know how to keep going. You are the kind of woman who keeps trying. You are willing to learn, willing to adapt, willing to fight for what matters and willing to carry your family with you.",
        "And Mummy, one of the things I love most about you is that I can talk to you. I can tell you when I have made a mistake. I can tell you things about my life. I can tell you about boys and relationships and the things that come with growing up. I can tell you things I might be embarrassed to tell someone else. And even when you have your own opinion, you don't make me feel like I am no longer your daughter because I made a mistake. You still listen. You still advise. You still love me. That means more to me than I can explain.",
        "You have always treated your children with the same love. You carry all of us. You know each of us differently, but you love each of us deeply. You have been there for all of us in different ways, and I hope that one day we will fully understand the amount of responsibility you have carried for this family.",
        "I also think about how much you worry when we are sick. Mummy, you can panic! “Mummy P.” The moment one of your children is not okay, your whole heart moves toward that child. You may be shouting at us one minute, but let anything happen to us and you become the first person asking questions, making calls, worrying, praying and looking for a solution. That is your heart.",
        "One of my favourite memories is the first birthday of yours that I personally tried to celebrate. I did not have much money, but I wanted to do something for you. I got a cake from Mr Biggs, called your staff, tried to organise things and made sure you were celebrated. Looking back, I think that was the beginning of my planning era. I wanted you to feel special because you had spent so many years making other people feel special. It made me happy to do something for you, even if it was small.",
        "And that is one thing I want you to know today: I see you. I see the woman behind the title of “Mummy.” I see your sacrifices. I see the things you gave up. I see the things you did quietly that we may never have fully understood. I see the times you were tired but still showed up. I see the times you were worried but still smiled. I see the times you had your own problems but still had enough strength to carry ours.",
        "I wish I could go back sometimes. Not to change my childhood, because I love the memories I have, but to change the way I understood you. I wish I could go back and tell little me, “Mummy is not trying to hurt you. Mummy is trying to prepare you.” I wish I had been more understanding. I wish I had not taken some things so deeply to heart. I wish I had known earlier that some of the things I thought were harsh were actually coming from a place of love and protection.",
        "But maybe that is the beauty of growing up. You begin to understand your parents as people. You realise that your mother is not just “Mummy.” She is a woman who has dreams, fears, hopes, sacrifices, emotions, plans and battles of her own. And somehow, through all of that, she still chose to show up for her children.",
        "Mummy, if I had a thousand lives, I would still choose you. If I had to be born again, I would still want you to be my mother. In a thousand years, I would still want you to be my Mummy. I would still choose your voice, your laughter, your lectures, your meetings, your “Ta, get out of there,” your “Ina manya,” your discipline, your prayers, your hugs and even your cane. I would choose all of it, because all of it made you you, and all of it helped make me me.",
        "You are the world's best Mummy to me. You are the kind of person I believe anyone would be blessed to meet in this life. You are the perfect definition of a true mother and a true partner in life. You are someone I can imagine spending a lifetime with and still finding new reasons to love and appreciate.",
        "Fifty years is not just a number. It is fifty years of becoming. Fifty years of learning, loving, giving, teaching, sacrificing, laughing, praying, building and raising a family. Fifty years of God's grace. Fifty years of stories. Fifty years of memories. Fifty years of being Mofunaya Wendo Wendy Christy. And Mummy, 50 looks absolutely beautiful on you.",
        "Today, my prayer is that you will live long enough to enjoy everything you worked so hard for. May you eat the fruits of your labour. May none of the sacrifices you made for your children ever be wasted. Every school fee you paid, every opportunity you created, every sleepless night, every worry, every prayer, every financial sacrifice, every emotional sacrifice, every time you put us before yourself, may God remember all of it and reward you abundantly.",
        "May you see your children prosper. May you see us become everything you prayed we would become. May the things you planted in us grow beyond your expectations. May we give you reasons to smile. May you never have to look at your sacrifices and wonder if they were worth it. Our lives will be part of the answer to that question.",
        "May God grant you the desires of your heart, even the ones you have not said out loud. May He give you good health, long life, peace, joy, financial abundance, strength and fulfilment. May this new chapter bring you opportunities you never imagined. May you have reasons to laugh until your stomach hurts. May you travel, rest, enjoy yourself and receive the kind of love you have spent your whole life giving to other people.",
        "May God protect you from everything that is not meant for you. May He surround you with genuine people. May He keep you strong in your body, peaceful in your mind and joyful in your heart. May He continue to guide you and give you wisdom in every decision. May your home remain blessed, and may your children and everyone connected to you continue to be a source of joy.",
        "And Mummy, I pray that you will not only live long; I pray that you will live well. I pray that your later years will be sweeter than your earlier ones. I pray that the years ahead will carry more laughter than tears, more celebration than struggle, more rest than stress, more abundance than lack, and more answered prayers than unanswered questions.",
        "Thank you for being my first teacher. Thank you for being the woman I watched before I even understood what inspiration meant. Thank you for teaching me through your words and through your life. Thank you for correcting me. Thank you for believing in me. Thank you for pushing me when I wanted to give up. Thank you for being strict when I needed discipline and soft when I needed comfort. Thank you for being the woman who could shout at me and still pull me close.",
        "Thank you for loving all of us. Thank you for carrying this family. Thank you for making education a priority. Thank you for choosing our future over your comfort. Thank you for every sacrifice I know about and every sacrifice I will probably never know about.",
        "I hope that today, as you celebrate your 50th birthday, you feel deeply loved. I hope you look around and see evidence of your labour. I hope you look at your children and see pieces of your own heart walking around in the world. I hope you know that even though we may not say it enough, we notice you. We appreciate you. We love you.",
        "And if I could give you one gift bigger than anything I could buy, it would be the chance to let you see yourself through my eyes. You would see a woman who is strong, beautiful, intelligent, funny, confident, caring, stubborn sometimes, dramatic sometimes, extremely talkative sometimes, but deeply loved always. You would see a woman who has given more than she realises and who has changed the lives of the people around her simply by being herself.",
        "So here is to you, Mummy.",
        "Here is to the woman who can turn a 40-minute meeting into an entire conference. Here is to the woman who can say “get out of there” and still be the first person to pull you close. Here is to the woman who made us spell our names properly. Here is to the woman who refused to let me fail mathematics. Here is to the woman who would rather pay school fees than buy herself a fancy bag. Here is to the woman who gave up her car because her children's education mattered more. Here is to the woman who panics when her children are sick, because her heart is permanently attached to us. Here is to the woman who taught us discipline, confidence, education, responsibility and love. Here is to the woman who taught me without even knowing she was teaching me. Here is to the woman who has spent 50 years becoming the amazing woman we celebrate today.",
        "Happy 50th birthday, my beautiful Mummy.",
        "May this new age be the beginning of a chapter that is even more beautiful than everything that came before it. May you experience a level of happiness you have never known before. May God surprise you with blessings. May your heart be at peace. May your laughter be full. May your dreams come alive. May your sacrifices speak for you. May your children make you proud. May your home remain blessed.",
        "And when you look back at these 50 years, I pray you smile and say, “It was worth it.”",
        "Because Mummy, you were worth every sacrifice. You are worth every celebration. You are worth every prayer. You are worth every word in this letter. And you will always, always be worth choosing.",
        "If I had a thousand lives, I would still choose you. If I had a thousand mothers, I would still look for you. If I had to start all over again, I would still want to be your child.",
        "More Mummy. Always more Mummy.",
        "Happy 50th Birthday, Mummy Mofunaya Wendo Wendy Christy. ❤️ I love you more than these words can ever properly explain. May God keep you for us for many, many more beautiful years.",
        "Happy 50th birthday, World's Best Mummy. ❤️"
      ],
      signoff: "Your beautiful daughter, Nwanyikibie (Uche) Ada \u{1FAC2}\u{1F495}"
    },

    {
      id: "somi",
      author: "Somi",
      relation: "Her third daughter",
      heading: "But my mum is much more",
      salutation: "",
      pullQuote: "My mum is a rare jewel, a sweet soul and a pure spirit. My mum is a million reasons why.",
      paragraphs: [
        "A mum is many things. A mum is a light in dark nights. A mum is our first home, our first restaurant, our first contact. A mum is a friend, a confidant. Crazy enough, a mum is our first fight. A mum is a lot of things. But my mum is much more. My mum is a rare jewel, a sweet soul and a pure spirit. My mum is a million reasons why. My mum is a dictionary definition of beauty on the inside and on the outside.",
        "There have been tough times. Times when I wondered if you were actually my mum \u{1F605}. Times you would beat the nonsense out of me. Times you would punish me for hours that never seemed to end \u{1F614}. Times you would shout for what seemed like forever ♾️. Times when I saw you at your lowest. But I noticed something: no matter how much you beat or punished me, I would be angry, but it only took a while for me to let go.",
        "It's 50 years, Mummy, and the 16 I've known you have undoubtedly had the most eventful moments of my life.",
        "Your type of person is rare. Your heart is hard to come by. So much of you has made me the person I am today. I remember times in Eucharistic when you would see little kids running with sticks in their hands. You would take it from them and warn them not to play with it because of the dangers. Looking at you with little kid eyes, I just thought you were being dramatic. But now I see that it was because of your person. Your sympathy. Your empathy.",
        "You are nice to people even if you've just met them. I see that in not just myself but in my siblings too.",
        "Your strength amazes me, how you are able to endure so much, all with a smile on your face. All while still showering us all with love ❤️. It truly amazes me. You always dared to be different in the right ways. You made sure I never had to feel alone. Even in times when I felt alone, I could still feel it, that there was someone thinking about me.",
        "Thank you for being undeniably you. Thank you for always putting us first. Thank you for considering our wellbeing before yours. Thank you for never doing any of that begrudgingly. Thank you for your punishments. Thank you for your countless shouting sessions. Thank you for your prayers. Thank you for your love. Thank you for the cane \u{1F9AF}.",
        "I pray you get all your heart desires. I pray your blessings will be louder than your down times. I pray your laughter will be greater than your tears. I pray your feet will never stumble. I pray your lips will continually praise. I pray you will reap the fruits of all you have laboured upon. I pray that God will deliver your eyes from crying and seeing evil. I pray He will deliver your feet from stumbling. I pray He will deliver your heart from destruction.",
        "I love you so much and I see all your countless efforts.",
        "Cheers \u{1F942} to more life. Cheers to greater years ahead. Cheers to you, onyinye Chukwu nyere anyi.",
        "We love you and we cherish you."
      ],
      signoff: "Somi"
    },

    {
      id: "ifeoma",
      author: "Ifeoma",
      relation: "Her last born",
      heading: "Welcome to a whole new fabulous level",
      salutation: "",
      pullQuote: "I'm soooooooo grateful that God chose you to be my Mom, and trust, I won't trade it for anything.",
      paragraphs: [
        "HAPPY BIRTHDAY MOTHER \u{1F973}\u{1F973}\u{1F973}\u{1F970}\u{1F970}",
        "OMG, I can't believe you're finally 50 \u{1F979}\u{1F979}\u{1F979}\u{1F979}",
        "Well then, welcome to a whole new FABULOUS level of your life.",
        "I pray that this new age and decade will be filled with everything beautiful ☺️.",
        "I love you more than I can properly put into words and I am extremely BLESSED to call you MOM \u{1F979}\u{1F979}\u{1F979}\u{1F979}",
        "I thank you for always being there for me through the different stages of my life. You helped me grow into the young and beautiful woman I am today. You made sacrifices for me and the whole family, put others first before you, and encouraged me when I needed it the most. I appreciate them every day, whether little ones or the big ones.",
        "You are an extremely strong woman and you have been through so many things that I may probably never understand, but you still make everyone around you feel cared for \u{1F979}\u{1F979}\u{1F979}\u{1F979}\u{1F979}\u{1F979}",
        "I'm soooooooo grateful that God chose you to be my Mom, and trust, I won't trade it for anything \u{1F979}\u{1F979}\u{1F979}\u{1F979}☺️",
        "I hope you know that everything you've contributed to this family is seen and appreciated \u{1F917}\u{1F917}\u{1F917}",
        "Here's to your new age and many many more \u{1F942}\u{1F942}\u{1F942}\u{1F942}\u{1F942}\u{1F942}\u{1F942}",
        "HAPPY BIRTHDAY MOTHER \u{1F973}\u{1F973}\u{1F382}\u{1F382}\u{1F382}\u{1F382}",
        "May this new chapter of your life be one of your happiest yet \u{1F970}\u{1F970}\u{1F970}",
        "I Love You \u{1F979}\u{1F979}\u{1F979}\u{1F979}"
      ],
      signoff: "Ifeoma (last born)"
    },

    {
      id: "dammy",
      author: "Dammy",
      relation: "A daughter she chose",
      heading: "Blessed birthday, Mum",
      salutation: "",
      pullQuote: "You didn't have to love me like your own, but you did. You didn't have to make me feel like I belonged, but you did.",
      paragraphs: [
        "I remember the first time I met you, Mummy. I didn't know then that God was bringing someone into my life who would eventually become a mother to me. Looking back now, I can only see it as one of those beautiful things that God Himself orchestrates.",
        "Somehow, I found myself becoming a part of your family. Through you, God gave me a mother, and He also gave me sisters, siblings I can genuinely call my own. And that is something I will never take for granted.",
        "From the very beginning, you took an interest in me. You welcomed me, cared about me, and loved me so genuinely. There was no long process of trying to make me feel accepted. You simply opened your heart to me, and somehow, I found a place there.",
        "When I came to stay in the house for over a month, that was when I experienced even more deeply what your love meant. You didn't treat me like someone who was merely staying there. You accepted me as your own. You made me feel at home. You treated me like one of your children, and I became so comfortable that saying, “Mummy is this,” “Mummy said this,” or “Let me tell Mummy” just became normal.",
        "Somewhere along the line, you stopped being just someone I knew. You became Mummy. And honestly, Mummy, I am grateful.",
        "Grateful for your love. Grateful for your acceptance. Grateful for the way you made room for me in your heart and in your family. Grateful for the little things you did and probably never realised meant so much to me. Grateful for every conversation, every meal, every correction, every prayer, every concern, every laugh and every moment I got to experience as part of your family.",
        "You didn't have to accept me the way you did, but you did. You didn't have to love me like your own, but you did. You didn't have to make me feel like I belonged, but you did. And that is a gift I will always cherish.",
        "I believe some of the most beautiful family connections are the ones God gives us Himself. They may not begin with blood, but God can connect hearts so deeply that you eventually cannot imagine your story without them.",
        "That is what you have become to me, Mummy. A mother God gave me. And through you, sisters who have become my siblings.",
        "As you celebrate your birthday today, I just want you to know how deeply I appreciate you. Thank you for being a mother to me. Thank you for accepting me into the family. Thank you for loving me so freely and genuinely. Thank you for giving me a place where I could feel at home.",
        "I pray that the Lord will reward you for every sacrifice you have made, including the ones nobody sees. May He preserve your life, strengthen you, honour you and fill your years with peace, joy and beautiful memories.",
        "May you live long enough to enjoy the fruits of your labour. This new year is blessed!",
        "And may the God who connected us continue to preserve this beautiful family He has given me through you.",
        "Blessed birthday, Mum. I am truly grateful that God brought you into my life.",
        "Thank you for being my Mummy. Thank you for giving me sisters. Thank you for giving me family.",
        "Blessed birthday, Mummy. Welcome to the fifth floor."
      ],
      signoff: "Dammy"
    },

    {
      id: "jinghreh",
      author: "Jinghreh",
      relation: "Somi's friend",
      heading: "Better late than never",
      salutation: "Dear Mum and Dad (hope you don't mind me calling you Mum and Dad),",
      pullQuote: "Through all the chaos and mayhem, love endures forever, especially in the hard times.",
      paragraphs: [
        "Life is full of highs and lows, happiness and sadness, joy and disappointment. If you ask people the meaning of life, some would describe it as miserable or sorrowful, while others would say it is radiant or blissful, not because of life itself, but because of the people they have met in life.",
        "In life there will always be good people and bad people. People who want to see you happy, and people who will laugh when you are down and at your darkest moments, which I wish the latter never finds you. I am happy to say both of you are among the first set of people.",
        "Even if we didn't meet very early in life, I'm happy we met now. “Better late than never,” people say, without truly understanding the phrase, with views that it just means not being too late for work or missing a flight, but never thinking of relating it to people. If I ever sit down and think of all the people that the phrase is meaningful for in my life, I'll think about both of you and your amazing family that has helped me in more ways than one, and I'm happy I met all of you in this lifetime.",
        "Because life truly has its ups and downs, and I hope to be there for the ups, to celebrate and be happy, to overcome and feel joy. And for the downs, to be there in your darkest times, not as a mocker, but maybe as someone you can seek comfort in, to be there even in the sorrow to remind you that with the right people in your life there are really no obstacles blocking you from happiness, just trials and challenges that we can overcome together.",
        "As you embark on this new chapter of your lives, I wish you happiness and the best the world has to offer at your fingertips. The world is yours for the taking, no matter what anyone has led you to believe. Together we can overcome everything, because through all the chaos and mayhem, love endures forever, especially in the hard times, and I'm happy and blessed to have met such wonderful people in this life."
      ],
      signoff: "Love you loads, Jinghreh"
    },

    {
      id: "excel",
      author: "Excel",
      relation: "Somi's friend",
      heading: "",
      salutation: "",
      pullQuote: "I pray that you will live to celebrate your children's golden jubilee.",
      paragraphs: [
        "Happy birthday, Mummy. I wish you long life and prosperity. I pray that you will continue to increase in strength, in grace and in wisdom. I pray that you will live to celebrate your children's golden jubilee. You will receive help and support in time of need; just as He did for others, He will do for you. Your story will be a testimony both to your children and grandchildren.",
        "Happy birthday, ma. We love you."
      ],
      signoff: "Excel"
    },

    {
      id: "paul",
      author: "Paul",
      relation: "Somi's friend",
      heading: "",
      salutation: "",
      pullQuote: "Not just to your children, but to all of us who have come to know you as our own mum too.",
      paragraphs: [
        "Happy Birthday, Mummy. Thank you for being such a kind, caring, and wonderful mother, not just to your children, but to all of us who have come to know you as our own mum too.",
        "May God bless you with long life, good health, and more reasons to smile. We celebrate you today and always.",
        "Happy Birthday, Mummy."
      ],
      signoff: "Paul"
    },

    {
      id: "nene",
      author: "Nene",
      relation: "Uche's friend",
      heading: "",
      salutation: "",
      pullQuote: "Thank you for giving birth to a star.",
      paragraphs: [
        "Happy birthday, my Mummy, I love you ❤️",
        "Thank you for always being amazing. Thank you for giving birth to a star, UCHENNA.",
        "I love your hearty laugh, ma, and I look forward to saying hello whenever you're on the call with Uche.",
        "Thank you, ma, for your sacrifices and your love for everyone around you ❤️\u{1F979}",
        "I really love and admire you, ma.",
        "I pray that the Lord continues to bless you, ma. I pray that He continues to keep you. I pray that you're strengthened. I pray that no evil shall befall you or your family, in Jesus' name, amen.",
        "I pray you grow to see your children's children. That's another 50 years. Amen. We all love you, Mummy, so much. Happy beautiful birthday to you.",
        "Happy birthday, ma!!!",
        "Ma, please, I'm coming for my cake o \u{1F62D} I know Uche won't give me, but Mummy please keep my share. Chocolate flavour \u{1F61D}\u{1F61D}\u{1F61D}❤️❤️❤️",
        "I love you!!!!"
      ],
      signoff: "From your favourite DAUGHTER, NENE \u{1F60D}"
    },

    {
      id: "osato",
      author: "Osato",
      relation: "Uche's friend",
      heading: "",
      salutation: "",
      pullQuote: "Keep glowing, beautiful Mummy. Your beauty will never fade, and your best days are still ahead.",
      paragraphs: [
        "Happy birthday, Mummy \u{1F382}",
        "I pray that you will enjoy this new year. In this new year, you will not cry over anything bad, but only tears of joy, in Jesus' name.",
        "May your home always be filled with laughter, love, and happiness. May you continue to shine and be a source of blessing to your family and everyone around you.",
        "Thank you for being a loving mother to me. When we call you, you always advise us, making us see every good thing at the end of the tunnel.",
        "Also, thank you for siding with me any time we call to say that Uche did something \u{1F923}",
        "Thank you for being the best role model to my friend \u{1F60D}",
        "Keep glowing, beautiful Mummy. Your beauty will never fade, and your best days are still ahead.",
        "I really thank God for the day you were born. I love you so much ❤️",
        "God bless you, ma."
      ],
      signoff: "With a big heart, OSATO"
    },

    {
      id: "oghenero",
      author: "Oghenero Agunbiade",
      relation: "Her friend",
      heading: "Celebrating an icon at 50",
      salutation: "",
      pullQuote: "Lolo stood by me, gidigba, like an iroko tree.",
      paragraphs: [
        "It is a rare privilege to celebrate an icon at 50: Nwando, beloved wife of Chike Mofunanya, and the proud parent of four lovely and blessed children.",
        "I met this great woman, now half a century old (may you live to be \u{1F4AF}!), at about age 40, through one of the smartest kids I have ever known, CC, her firstborn son.",
        "Our new friendship looked promising. However, on this fateful day, Nwando yelled at me because I inadvertently did something she didn't quite like. I was quite quick to jump to the wrong conclusion that she is a rough diamond, and was ready to withdraw from the friendship. If there is something I hate, it is being yelled at. However, to the glory of God, God constrained me to exercise patience, a golden virtue!",
        "I am sure glad I listened to the voice of God. I would otherwise have lost a rare gem. I was soon to discover that Nwando, Lolo to me and my family, is in actual fact the finest diamond, one of the best of the daughters of God.",
        "Lolo embodies all the finest qualities and traits, including but not limited to peace and love, humour, sacrifice, honesty, integrity, truthfulness, uprightness, frankness, grace, moral rectitude, hospitality, generosity, kindness, thoughtfulness, compassion, objectivity, cleanliness, organisation, responsibility, decency, dignity, class, humility, reliability, loyalty, supportiveness, faithfulness, steadfastness, love of family, family unity advocacy, gratitude, strength, hard work, diligence, industry, resourcefulness, patience, determination, resilience, persistence, knowledge, wisdom, understanding, piety, counsel, fortitude, and the fear of God.",
        "In addition, Lolo personifies dependability. I say this with all sense of humility, conviction and gratitude, because Nwando Mofunanya saved my life with the indispensable help of God! I call her, alongside a few friends and family, Lifeline!",
        "At the very peak of the worst trial and temptation I would ever confront, when sorrow filled my soul to the brim at the passage of my angel brother-in-law Kabyesi Agba, when sickness and disease ravaged my body, when all hell was let loose because some accursed persons sought my life, in vain, glory alleluia, more than ever before, Lolo stood by me, gidigba, like an iroko tree, encouraging, supporting, and succouring me all the way, like a mother her sick child.",
        "The Bible says there is a friend that sticketh closer than a brother. The Englishman says a friend in need is a friend indeed! And that is what you are to me: a friend indeed, Lolo Nwando Mofunanya, my angel from God!",
        "And so on this happy occasion of your Jubilee Anniversary, I pray that God will grant you long life and prosperity. May God exalt your horn like the horn of a unicorn. May the world celebrate you, in the name of Jesus Christ of Nazareth. Amen, and amen.",
        "Congratulations!"
      ],
      signoff: "Oghenero Agunbiade"
    }
  ]
};
