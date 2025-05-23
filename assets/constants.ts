type Blurb = {
    quote: string;
    speaker: string;
    title: string;
}

type Event = {
    date: string;
    city: string;
    name: string;
    optionalLink: string;
}

type anotherWork = {
    title: string;
    publisher: string;
    link: string;
}

type News = {
    title: string;
    link: string;
}

export const italicizeTwoDevil = textAutoFormat('Two-Step Devil', 'i');
export const italicizeFireSermon = textAutoFormat('Fire Sermon', 'i');
export const italicizeSym = textAutoFormat('I Want to Show You More', 'i');
export const italicizeHemispheres = textAutoFormat('Hemispheres', 'i');
export const italicizeLocalSouls= textAutoFormat('Local Souls', 'i');

const fullTsdBlurbs = [
    {
        quote: `“Just as the Prophet makes art out of detritus, Quatro alchemizes gloomy subject matter into transcendent beauty . . . Quatro writes with the musicality and command of a mystic poet. Her sentences are also propulsive; the novel is a page-turner that leaves readers feeling deeply invested in the fates of the Prophet and Michael, individually and together . . . Theologically avant-garde and emotionally supple, Two-Step Devil is a Southern Gothic novel for fans of Denis Johnson, Frank Stanford and Wendell Berry. Like her forebears, Quatro wrestles with what it might look like to find and embrace a living faith in the modern world.” `,
        speaker: `New York Times`,
        title: ``,
    },
    {
        quote: `“Jamie Quatro’s Two-Step Devil is the rare contemporary work of fiction that takes the Deep South, with its essentially biblical figures of thought and speech, as seriously as the region should be taken . . . It is a prophetic book about the recent past and I have not read anything like it for a long time.”`,
        speaker: `The Paris Review`,
        title: ``,
    },
    {
        quote: `“Two-Step Devil is in part an unusual father-daughter story, as Ms. Quatro embroiders a fragile and very sweet relationship between the outcasts . . . Intimately evoked . . . Ms. Quatro is a rare novelist for whom a religious belief in good and evil is not merely a plot device but a genuine guide to describing reality.”`,
        speaker: `Wall Street Journal`,
        title: ``,
    },
    {
        quote: `“In Jamie Quatro’s fiction, a person is a burning thing: a voracious creature, hot with emotional, sexual and spiritual needs; prey to the squalid demands of embodied existence...I can’t shake the sense that the pages feel warm to the touch. I see, in my mind’s eye, her sentences threaded with muscle and sinew, letters glistening with sweat and blood . . . Across Quatro’s oeuvre, there is no forgetting that selfhood is material: pulp and tissue and cuts . . . If Quatro has written a song for the frail fleshsack, she has, too, intimated humanity’s cowardice in storytelling, the entwined ‘horrific and beautiful’ realities we balk at, and in desperate self-preservation, refuse to witness.”`,
        speaker: `Washington Post`,
        title: ``,
    },
    {
        quote: `“There are faint echoes of Cormac McCarthy and Dennis Covington’s Salvation on Sand Mountain. But like the Prophet’s singular visions, her literary meditations are hers and hers alone: Two-Step Devil quickens suspense right through to the last page, her sentences taut yet beautifully made, her political content subtle, her compassion resonant.”`,
        speaker: `Chapter 16`,
        title: ``,
    },
    {
        quote: `“A gripping tale that plays with form as much as point-of-view to deliver an enrapturing story. This blistering yet tender work of speculative fiction does not seek to condemn, but instead expands the conversation into the dark crevices where religious zealotry and mental health meet the perceptions of good and evil.”`,
        speaker: `Atlanta Journal Constitution`,
        title: ``,
    },
    {
        quote: `“Quatro’s theological seriousness is convincing because she imbeds it in so much lyricism—and because it is never cheap . . . Against oceanic feelings and collective creeds, literary fiction pitches specific encounter, particular hope, embodied grace. In three books that feel both fearless and forgiving, Jamie Quatro has made religious belief live because she let religious belief struggle. In doing so, she put it all together."`,
        speaker: `Comment Magazine`,
        title: ``,
    },
    {
        quote: `"We find ourselves clinging to visions of success and hope but are confronted by reality, and this juxtaposition is what makes Two-Step Devil not only a darkly humorous and insightful novel, but a dramatic tragedy...While Quatro’s novel is short, its diversity of narrative techniques and detailed character portraits make the story feel well-rounded and robust ... Quatro chooses a nuanced portrait focusing on inner humanity, rather than a purely voyeuristic or charitable approach. If there is an answer to the rural American question in terms of politics and representation, Quatro does not pose it, but she does shed light on the impact of years of ignorance, and how those we choose to ignore will nevertheless persist."`,
        speaker: `Chicago Review of Books`,
        title: ``,
    },
    {
        quote: `“Two-Step Devil is powerful in a manner that balances extremes — quiet moments, horrific violence, heartbreak, joy, self-discovery and fate. Both Winston and Michael are very finely drawn and totally unforgettable, set in a tale that is timely and timeless. The Prophet’s life work...is fascinating and frightening, gentle and commanding. Michael is singular, but still her story is all too familiar. Quatro’s book is emotionally difficult, incredibly compelling and always beautiful. She has penned a novel of dark realism and dreamy insight, struggle and possibility."`,
        speaker: `Book Reporter`,
        title: ``,
    },
    {
        quote: `"Quatro reckons with faith and the nature of evil in her daring and disturbing latest . . . It's hard to turn away from Quatro's electrifying vision."`,
        speaker: `Publishers Weekly`,
        title: ``,
    },
    {
        quote: `"In 2014, a visionary 70-year-old man develops a bond with a captive teenage girl that could change both their destinies . . . By alternating between perspectives and pushing the novel’s formal boundaries, Quatro daringly explores the evils and mercies, large and small, that steer the courses of human lives. A searing and innovative allegory for our turbulent times.”`,
        speaker: `Kirkus Reviews`,
        title: ``,
    },
    {
        quote: `Quatro’s prose ranks among the best Southern writing . . . Quatro excels at getting the hairs on your arms to stand on end, if not through narrative suspense, then through the radical nature of her narrative aim . . . Without question, Quatro is a pioneering writer for a new South, our patron saint of Southern discomfort.”`,
        speaker: `BookPage`,
        title: ``,
    },
    {
        quote: `“An electrifying, ambitious work.”`,
        speaker: `Soujourners`,
        title: ``,
    },
    {
        quote: `“…full of surprises, both literary and emotional, and culminates in an ending that would be well-praised by [Flannery] O’Connor herself."`,
        speaker: `Catholic Herald`,
        title: ``,
    },
    {
        quote: `"I am in awe of Jamie Quatro's genius tonal calibrations and miraculous conjurations, her firm and delicate grasp of her characters' mysterious natures and overlapping struggles, their doubt-raddled, faithfully beating hearts. I was so moved by the Prophet's thorny goodness and Michael's strong life-wish. I found Two-Step Devil wickedly funny, endlessly surprising, and sublime."`,
        speaker: `Karen Russell`,
        title: `Orange World`,
    },
    {
        quote: `"Jamie Quatro is a writer of sinuous, muscular power and grace. Two-Step Devil is a starkly gorgeous story of God and loss and art and love, and her best book yet."`,
        speaker: `Lauren Groff`,
        title: `The Vaster Wilds`,
    },
    {
        quote: `"In this spellbinding story of good and evil, revelation and madness, Jamie Quatro ponders all the ways in which innocence and vulnerability can be exploited in a culture that deliberately turns from human suffering. Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written — and only, I suspect, with an angel peering over her shoulder."`,
        speaker: `Margaret Renkl`,
        title: `The Comfort of Crows`,
    },
    {
        quote: `"Reading this novel is like holding on to a live wire. Jamie Quatro is the real thing. The music of these sentences lights my hair on fire."`,
        speaker: `Garth Greenwell`,
        title: `Small Rain`,
    },
    {
        quote: `"The bold, ingenious, impassioned Two-Step Devil takes risks—tonally, formally and theologically—that would terrify a less masterly writer than Jamie Quatro. Her unforgettable characters, her meticulous observation of backwoods folklife and her wide-ranging intellect come together to create a novel that's a wild and rich entertainment, a profound interrogation of God's ways to Man, and—perhaps most daring of all—a story of simple human compassion."`,
        speaker: `David Gates`,
        title: `A Hand Reached Down To Guide Me `,
    },
    {
        quote: `"Jamie Quatro's Two-Step Devil compelled me with almost supernatural force. I could not turn away. It's a book that wrestles with the biggest questions about sin and salvation, violation and agency—striding fearlessly into narrative and political terrain almost always treated with knee-jerk, agenda-driven simplicity—but the pulse at the core of this breathtaking novel is unequivocally human, tender and alive—formally daring and utterly riveting." `,
        speaker: `Leslie Jamison`,
        title: `Splinters`,
    },
    {
        quote: `"Glorious, rich, mad, wonderful, daring and epic in its scope, Two-Step Devil is simply thrilling to read."`,
        speaker: `Samantha Harvey`,
        title: `Orbital`,
    },
    {
        quote: `"The characters in Jamie Quatro's Two-Step Devil will surely join the pantheon of Hazel Motes, Temple Drake, and Howard Finster. They are their own peculiar theological texts, defying doctrinal consistency—and thank God for that."`,
        speaker: `Charles Marsh`,
        title: `Evangelical Anxiety`,
    },
    {
        quote: `"Jamie Quatro is one of the finest, and most fearless, American writers currently working. Her new novel, Two-Step Devil, is, among other things, an intense exploration of the Christian faith, a deeply empathetic portrait of a weirdo, and a peerlessly innovative modern-day theodicy. I've never read anything like it. I suspect no one has."`,
        speaker: `Tom Bissell`,
        title: `Creative Types`,
    },
].map(b => ({ ...b, quote: italicizeTwoDevil(b.quote) })) satisfies readonly Blurb[];

const shortenedTsdBlurbs = [
    {
        quote: `"Quatro writes with the musicality and command of a mystic poet . . . Her sentences are also propulsive; the novel is a page-turner that leaves readers feeling deeply invested in the fates of the Prophet and Michael.”`,
        speaker: `New York Times`,
        title: ``,
    },
    {
        quote: `"I am in awe of Jamie Quatro's genius tonal calibrations and miraculous conjurations … I found Two-Step Devil wickedly funny, endlessly surprising, and sublime."`,
        speaker: `Karen Russell`,
        title: `Orange World`,
    },
    {
        quote: `"Brilliantly paced and exquisitely detailed, this striking novel takes on such weighty themes as faith, humanity, and frailty without a touch of melodrama . . . A spectacular masterpiece.”`,
        speaker: `Booklist, starred review`,
        title: ``,
    },
    {
        quote: `"Quatro daringly explores the evils and mercies, large and small, that steer the courses of human lives. A searing and innovative allegory for our turbulent times.”`,
        speaker: `Kirkus Reviews`,
        title: ``,
    },
    {
        quote: `“Without question, Quatro is a pioneering writer for a new South, our patron saint of Southern discomfort.”`,
        speaker: `BookPage`,
        title: ``,
    },
    {
        quote: `"Quatro reckons with faith and the nature of evil in her daring and disturbing latest . . . It's hard to turn away from Quatro's electrifying vision."`,
        speaker: `Publishers Weekly`,
        title: ``,
    },
    {
        quote: `“Jamie Quatro is a writer of sinuous, muscular power and grace. Two-Step Devil is a starkly gorgeous story of God and loss and art and love, and her best book yet.”`,
        speaker: `Lauren Groff`,
        title: `Small Rain`,
    },
    {
        quote: `“Reading this novel is like holding on to a live wire. Jamie Quatro is the real thing. The music of these sentences lights my hair on fire.”`,
        speaker: `Garth Greenwell`,
        title: `The Comfort of Crows`,
    },
    {
        quote: `“Two-Step Devil compelled me with almost supernatural force. I could not turn away . . . unequivocally human, tender and alive—formally daring and utterly riveting."`,
        speaker: `Leslie Jamison`,
        title: `Splinters`,
    },
    {
        quote: `"Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written — and only, I suspect, with an angel peering over her shoulder."`,
        speaker: `Margaret Renkl`,
        title: `The Vaster Wilds`,
    },
    {
        quote: `"Bold, ingenious, impassioned . . .  a wild and rich entertainment, a profound interrogation of God’s ways to Man, and—perhaps most daring of all—a story of simple human compassion.”`,
        speaker: `David Gates`,
        title: `A Hand Reached Down To Guide Me `,
    },
    {
        quote: `"Glorious, rich, mad, wonderful, daring and epic in its scope, Two-Step Devil is simply thrilling to read."`,
        speaker: `Samantha Harvey`,
        title: `Orbital`,
    },
    {
        quote: `"Jamie Quatro is one of the finest, and most fearless, American writers currently working."`,
        speaker: `Tom Bissell`,
        title: `Creative Types`,
    },
    {
        quote: `"The characters in Jamie Quatro's Two-Step Devil will surely join the pantheon of Hazel Motes, Temple Drake, and Howard Finster."`,
        speaker: `Charles Marsh`,
        title: `Evangelical Anxiety`,
    },
].map(b => ({ ...b, quote: italicizeTwoDevil(b.quote) })) satisfies readonly Blurb[];

const fsBlurbs = [
    {
        quote: `“It would be difficult to overstate the wonder I felt while reading this novel. It’s among the most beautiful books I’ve ever read about longing—for beauty, for sex, for God, for a coherent life. Great writers write with their whole lives, with everything they have seen and thought and felt, with their obsessions and their desires; their books have the density and richness of existence. Jamie Quatro is a such a writer, and Fire Sermon is such a book.”`,
        speaker: ` `,
        title: `Garth Greenwell`,
    },
    {
        quote: `"The state of marriage makes yearning possible, and yearning makes us burn, which Maggie (and perhaps Quatro) sees as a good and essential and human thing. I was stunned by the notion, and enchanted by the way the book built to a crystallized idea rather than a scene or an event—thinking as a dramatic gesture is a pleasure found more commonly in nonfiction than in fiction . . . By the time she’s done bobbing and weaving her way through her narrative, Quatro makes us feel the absolute necessity of desire, which she reveals as something shining: a hammered-gold necklace, begged for, worn twice, given away."`,
        speaker: ` `,
        title: `The Atlantic`,
    },
    {
        quote: `"As with Graham Greene’s 'The End of the Affair,' Fire Sermon examines infidelity by deftly balancing the sexual and the spiritual. There is agony and ecstasy, and the tantalizing hope of redemption through confession. All is rendered with fierce intelligence and lyrical grace. Passionate and intimate, few first novels are so adept at tracking 'the guiltiest swervings of the weaving heart.' "`,
        speaker: ` `,
        title: `Minneapolis Star Tribune`,
    },
    {
        quote: `"Nothing on Earth has ever not been about the passage of time — not a film, a poem, a cave painting, a house, a poncho, a comic book, a snowman or a fugue. But some art is particularly obsessed . . . Jamie Quatro, in her very sad first novel, Fire Sermon, squeezes large flows of time into a book as thin as my little finger. Time haunts every sentence . . . The reader is left to intuit all the life those numbers once contained — the people who lived then, the children who memorized the numbers, the parents who helped them do the memorizing. And then of course we think of our own number, and what it might mean to someone who might memorize it someday, and what it feels like, right now, to be inside of it: 2018."`,
        speaker: ` `,
        title: `New York Times Magazine`,
    },
    {
        quote: `"Adultery may be a tale as old as time, but Quatro’s take is freshly urgent . . . Fire Sermon burns with emotional honesty. Unlike the great adulteresses of fiction, Anna Karenina and Emma Bovary, Quatro’s conflicted heroine is not miserably married; nor is her lover an unworthy boor. The result is an impassioned, deeply moral exploration of devotion and 'what’s waiting on the far side of fidelity.'”`,
        speaker: ` `,
        title: `San Francisco Chronicle`,
    },
    {
        quote: `"Affecting . . . powerful . . . Quatro's novel, full of vivid, mercurial prose, breathes new life into the subject [of adultery] and sets it gloriously ablaze."`,
        speaker: ` `,
        title: `Publishers Weekly`,
    }, 
    {
        quote: `"Affecting...powerful...Quatro's novel, full of vivid, mercurial prose, breathes new life into the subject [of adultery] and sets it gloriously ablaze."`,
        speaker: `O, `,
        title: `The Oprah Magazine`,
    }, 
    {
        quote: `"Tender and tumultuous, Fire Sermon is a remarkable novel written by a uniquely talented author."`,
        speaker: ` `,
        title: `Financial Times`,
    }, 
    {
        quote: `"Charged with erotic energy and an almost mystical yearning, Jamie Quatro’s debut novel is a tour de force exploration of lust, marriage, longing, and love. . . Quatro’s special magic as a writer is her ability to illuminate and intensify Maggie’s secret (and ultimately finite) love affair so that it seems to resonate across decades of Maggie’s life, continuing to shape and inform her even as her marriage endures, her career thrives, and her children grow into adulthood. . . Fire Sermon is a virtuosic portrait of flesh-and-blood sensuality and the mystery of salvation."`,
        speaker: ` `,
        title: `ELLE`,
    }, 
    {
        quote: `"A stunning first novel about faith and yearning in the crucible of a strained marriage and a brief affair. . . Quatro charts Maggie's tormented grappling with desire and conscience in excruciatingly intimate scenes . . . The lyric cadence of Quatro's writing gets into one's veins as she stealthily transforms the most common of plotlines into a scorching analysis of the 'agony of temptation,' prayer, the relationship between Eros and the divine, and a 'renewed sense of holiness.' Maggie longs for a 'return to a viable literature of faith.' Quatro infuses that tradition with fresh, molten energy."`,
        speaker: ` `,
        title: `Booklist`,
    },
    {
        quote: `“Quatro is a true cartographer of desire, showing that the longings of the body and the soul aren’t two autonomous states but constitute a singularly vast and singularly wild territory. Her fiction is sexy, it’s theological, and it’s consistently and surprisingly both at the same time.”`,
        speaker: `Anthony Domestico, `,
        title: `Commonweal`,
    },
    {
        quote: `“Fire Sermon transcends the familiarity of its subject matter through its formal originality, its erudite meditations on the intersections of religious devotion and erotic desire, and the breathtaking lyricism of Jamie Quatro’s prose, which manages somehow to be both intensely elegiac and as fluent as good conversation…There are so many moments in this fine debut that call to be read and re-read, flipped over and scrutinized—moments of searing, painful truth and gorgeously articulated delusion which ring with their own sort of truth about the lengths to which we will go to make sense of the inexplicable. Isn’t this the task of great fiction?”`,
        speaker: ` `,
        title: `Chapter 16`,
    },
    {
        quote: `“What an absolutely beautiful and moving book. I started reading Fire Sermon and literally was cranky when I couldn’t get back to it. The writing is nothing less than masterful. I’ve always been a HUGE fan of Jamie Quatro but now she’s taking my fandom to another level.”`,
        speaker: `Jacqueline Woodson, author of `,
        title: `Brown Girl Dreaming + Another Brooklyn`,
    },
    {
        quote: `"This book is bright and dark by turns but always shot through with a vital, unerring grace. Plus it's about love and death, sex and God. What more could a reader want?"`,
        speaker: `Jenny Offill, author of `,
        title: `Dept. of Speculation`,
    },
    {
        quote: `"I devoured this novel. Quatro is a fearless marvel. An exquisite story of female desire, faith, and commitment and one of the most haunting portraits of a marriage I've ever read.”`,
        speaker: `Lily King, author of `,
        title: `Euphoria`,
    },

].map(b => ({ ...b, quote: italicizeFireSermon(b.quote) })) satisfies readonly Blurb[];

const symBlurbs = [
    {
        quote: `“The best stories in Jamie Quatro's first collection, I Want to Show You More, are about adultery. They are passionate, sensuous, savagely intense, and remarkable for their brave dualism . . . Moves between carnality and spirit like some franker, modernized Flannery O'Connor tale. Quatro has a poet's compound eye . . . [and] fearless lyricism . . . Expansive, joyful, with forgiveness supplanting ruination. Who needs the New Testament? In Quatro's world, hard Genesis is always making way for the softer Song of Solomon: 'I sat down under his shadow with great delight, and his fruit was sweet to my taste.'"`,
        speaker: `James Wood, `,
        title: `The New Yorker`,
    },
    {
        quote: `“Subtle, sexy, and reflective . . . Quatro is incisive on technology and our new varities of instant gratification . . . Quatro’s stories [have] led some to compare her work to that of Walker Percy and Flannery O’Connor. I also picked up metal-detector traces of Jayne Anne Phillips . . . and of Lorrie Moore’s pulverizing wit . . . In order to be good at big things, writers must be good at small ones. Quatro’s details resonate . . . There’s so much in these stories that’s shocking. Yet there’s so much solace.”`,
        speaker: `Dwight Garner, `,
        title: `The New York Times`,
    },
    {
        quote: `“[With its] impressive agility and inventiveness . . . I Want to Show You More is an obsessive first collection that feels like a fifth or sixth. It is a dogged, brutally thoughtful piece of work, and gives us a writer of great originality and apparent artistic maturity who seems to have come out of nowhere . . . Strange, thrilling, and disarmingly honest . . . Quatro hits the right balance, giving us the closest thing I’ve seen in years to Donald Barthelme’s insouciance, sweetness, and ominousness . . . Provides the most engaging literary treatment of Christianity since O’Connor, without a hint of the condescension the subject often receives in contemporary fiction. . . [Quatro's] flights of fancy are never ostentatious or arbitrary; instead they grow naturally out of the emotional and psychological states of her characters. Readers may hope to see more of this hallucinatory mode from her, but—if they’re like me—they will welcome whatever they can get.”`,
        speaker: `J. Robert Lennon, `,
        title: `The New York Times Book Review`,
    },
    {
        quote: `"Haunting and sharp . . . [reminiscent] of the dark-meets-light style of Lydia Davis or Alice Munro—but it leaves room for zingers, too. Quatro is so good . . . the title of this debut collection isn't just a tease."`,
        speaker: ` `,
        title: `Elle`,
    },
    {
        quote: `"A remarkable debut by an important new voice . . . Quatro [has] a mature understanding of how we handle disappointment and how, quite often, we take refuge in the most unhelpful places. How we feel doesn't affect our lives nearly so much as where we take our feelings."`,
        speaker: ` `,
        title: `The Toronto Star`,
    },
    {
        quote: `"Vivid . . . Arresting . . . Quatro very much establishes her own distinctive voice and style . . . A luminous collection that announces a unique literary talent. Quatro's stories dazzle and shine."`,
        speaker: ` `,
        title: `San Francisco Chronicle`,
    },
    {
        quote: `"Delicious reading . . . [An] impressive debut about the shortcomings of people who wrestle with angels, and usually lose."`,
        speaker: ` `,
        title: `Chicago Tribune`,
    },
].map(b => ({ ...b, quote: italicizeSym(b.quote) })) satisfies readonly Blurb[];

const events = [
// template 

// {
//     date: '',
//     city: '',
//     name: '',
//     optionalLink: '',
// }
    {
        date: '3/6/25',
        city: 'Rainsville, AL',
        name: 'Visiting Writer, NACC',
        optionalLink: 'https://www.nacc.edu/news/nacc-to-host-annual-arts-and-humanities-speakers-forum-on-march-6-2025',
    },
    {
        date: '3/15/25 - 3/19/25',
        city: 'Tucson, AZ',
        name: 'Tucson Festival of Books / Masters Workshop',
        optionalLink: 'https://tucsonfestivalofbooks.org/',
    },
    {
        date: '4/1/25 - 4/5/25',
        city: 'Oxford, MS',
        name: 'Oxford Conference for the Book',
        optionalLink: 'https://oxfordconferenceforthebook.com/book-conference-events-kick-off-in-april/',
    },
    {
        date: '6/8/25 - 7/19/25',
        city: 'Sewanee, TN',
        name: 'Fiction Faculty, Sewanee School of Letters',
        optionalLink: 'https://letters.sewanee.edu/academic-life/faculty/current-faculty/',
    },
    {
        date: '9/1/25 - 9/30/25',
        city: 'Ménerbes, France',
        name: 'Writer-in-Residence, La Maison Dora Maar',
        optionalLink: 'https://maisondoramaar.org/visit/maison-dora-maar/',
    },
    {
        date: '10/23/25',
        city: 'Columbia, SC',
        name: 'Institute for Southern Studies, University of South Carolina',
        optionalLink: '',
    },
    {
        date: '11/12/25',
        city: 'Brooklyn, NY',
        name: `Master Lecture, The Writer's Foundry`,
        optionalLink: 'https://www.sjny.edu/brooklyn/academics/graduate/graduate-degrees/creative-writing/master-lecturers',
    },

] 

const shortFiction = [
    {
        title: `"Ezekiel Machine,"`,
        publisher: `Harper's`,
        link: 'https://harpers.org/archive/2024/08/ezekiel-machine-jamie-quatro-two-step-devil/',
    },
    {
        title: `"Two Men, Mary," `,
        publisher: 'The Paris Review',
        link: 'https://www.theparisreview.org/fiction/8040/two-men-mary-jamie-quatro',
    },
    {
        title: `"Yogurt Days," `,
        publisher: 'The New Yorker',
        link: 'https://www.newyorker.com/magazine/2023/08/07/yogurt-days-fiction-jamie-quatro',
    },
    {
        title: `"Little House," `,
        publisher: 'The Paris Review',
        link: 'https://www.theparisreview.org/fiction/7991/little-house-jamie-quatro',
    },
    {
        title: `"Aubade," `,
        publisher: 'The New York Review of Books',
        link: 'https://www.nybooks.com/online/2021/01/30/aubade/',
    },
    {
        title: `"Dirt Man," `,
        publisher: 'The Kenyon Review',
        link: 'https://kenyonreview.org/',
    },
    {
        title: `"Hypothetical Love," `,
        publisher: 'AGNI (issue 84)',
        link: 'https://agnionline.bu.edu/fiction/hypothetical-love-letter-composed-on-the-occasion-of-my-twentieth-wedding-anniversary/',
    },
    {
        title: `"Holding," `,
        publisher: 'Virginia Quarterly Review',
        link: 'https://www.vqronline.org/winter-2016/fiction/holding',
    },
    {
        title: `"Belief," `,
        publisher: 'Tin House',
        link: 'https://tinhouse.com/product/faith-spring-2016/',
    },
    {
        title: `"Kyrie, With Endnotes," `,
        publisher: 'Oxford American',
        link: 'https://oxfordamerican.org/magazine/issue-90-fall-2015/kyrie-with-endnotes',
    },
    {
        title: `"Wreckage," `,
        publisher: 'Ecotone',
        link: 'https://ecotonemagazine.org/fiction/wreckage/',
    },
    {
        title: `"Working, "`,
        publisher: 'Oxford American',
        link: 'https://oxfordamerican.org/magazine/issue-88-spring-2015/working',
    },
    {
        title: `"Bedtime Story," `,
        publisher: 'Tin House',
        link: 'https://tinhouse.com/product/summer-reading-18/',
    },

]

const nonFiction = [
    {
        title: '"Lifelines: On Santa Barbara," ',
        publisher: 'The Paris Review',
        link: 'https://www.theparisreview.org/blog/2023/08/25/lifelines-on-santa-barbara/',
    },
    {
        title: 'Astrid Lindgren’s Stockholm, ',
        publisher: 'Hemispheres',
        link: 'https://www.hemispheresmag.com/the-magazine/',
    },
    {
        title: `Rim-to-Rim in the Grand Canyon, `,
        publisher: 'Travel + Leisure',
        link: 'https://www.travelandleisure.com/trip-ideas/national-parks/hiking-grand-canyon-rim-trail', 
    },
    {
        title: `“Ex Parvis Magna,” `,
        publisher: 'Oxford American',
        link: 'https://oxfordamerican.org/magazine/issue-109-110-summer-fall-2020/ex-parvis-magna',
    },
    {
        title: `Pandemic Dispatch, `,
        publisher: 'The New York Review of Books',
        link: 'https://www.nybooks.com/online/2020/04/05/pandemic-journal-march-30-april-5/#quatro',
    },
    {
        title: `“Dénaturé, ”`,
        publisher: 'Greenpeace Climate Visionaries Series',
        link: 'https://www.greenpeace.org/usa/stories/jamie-quatro-on-our-climate-in-crisis/',
    },
    {
        title: `“The Hidden Life of Anne Vaughan Lock, "`,
        publisher: 'The New Yorker',
        link: 'https://www.newyorker.com/books/page-turner/the-hidden-life-of-a-forgotten-sixteenth-century-female-poet',
    },
    {
        title: `"What Does Your Husband Think of Your Novel?" `,
        publisher: 'Paris Review',
        link: 'https://www.theparisreview.org/blog/2018/01/16/husband-think-novel/',
    },
    {
        title: `"Speed Away," `,
        publisher: 'Oxford American',
        link: 'https://oxfordamerican.org/magazine/issue-97-summer-2017/speed-away',
    },
    {
        title: `“The Sound Before the Song: Flannery O’Connor’s Prayer Journal,” `,
        publisher: 'Oxford American',
        link: 'https://oxfordamerican.org/magazine/issue-84-spring-2014/the-sound-before-the-song',
    },
    {
        title: `“What It Takes: The Messy, Beautiful Business of Being a Writer Parent,” `,
        publisher: 'Poets & Writers',
        link: 'https://www.pw.org/content/what_it_takes',
    },
    {
        title: `Review of Local Souls by Allan Gurganus,`,
        publisher: 'New York Times Book Review',
        link: 'https://www.nytimes.com/2013/10/13/books/review/local-souls-by-allan-gurganus.html',
    },
].map(b => ({ ...b, title: italicizeHemispheres(italicizeLocalSouls(b.title)) })) satisfies readonly anotherWork[];

const allNews = [
    {
        title: `Quatro appears on "For the Life of the World" at the Yale Center for Faith & Culture`,
        link: 'https://faith.yale.edu/media/what-the-devil',
        special: `"For the Life of the World"`,
        isItalic: false
    },
    {
        title: `Two-Step Devil wins the 2024 Willie Morris Award for Southern Writing`,
        link: 'https://olemiss.edu/news/2025/2/willie-morris-awards-2025/index.html',
        special: `Two-Step Devil wins the 2024 Willie Morris Award for Southern Writing`,
        isItalic: false
    },
    {
        title: `Two-Step Devil named a 2025 ALA Notable Book`,
        link: 'https://rusaupdate.org/2025/01/2025-notable-books-list-announced-years-best-in-fiction-nonfiction-and-poetry//',
        special: `Two-Step Devil named a 2025 ALA Notable Book`,
        isItalic: false
    },
    {
        title: `“Literature and Belief: The Courageous Grace of Jamie Quatro”`,
        link: 'https://comment.org/literature-and-belief/',
        special: `“Literature and Belief: The Courageous Grace of Jamie Quatro”`,
        isItalic: false
    },
    {
        title: 'Sam Sacks reviews Two-Step Devil in the Wall Street Journal',
        link: 'https://www.wsj.com/arts-culture/books/fiction-jamie-quatros-two-step-devil-1a876bda',
        special: 'in the Wall Street Journal',
        isItalic: false
    },
    {
        title: 'New York Times review of TSD',
        link: 'https://www.nytimes.com/2024/09/10/books/review/two-step-devil-jamie-quatro.html',
        special: 'New York Times',
        isItalic: true
    },
    {
        title: 'Washington Post review of TSD',
        link: 'https://www.washingtonpost.com/books/2024/09/11/two-step-devil-jamie-quatro-review/',
        special: 'Washington Post',
        isItalic: true
    },
    {
        title: 'Two-Step Devil reviewed in the Atlanta Journal-Constitution',
        link: 'https://www.ajc.com/things-to-do/arts-culture/jamie-quatros-two-step-devil-explores-the-dual-nature-of-good-and-evil/VUYGREEGBVAILIXMIMSSSI2OGQ/',
        special: 'reviewed in the Atlanta Journal-Constitution',
        isItalic: false
    },
    {
        title: 'Hamilton Cain reviews TSD for Chapter 16',
        link: 'https://chapter16.org/a-man-of-the-book/',
        special: 'reviews TSD for Chapter 16',
        isItalic: false
    },
    {
        title: 'The Paris Review names Two-Step Devil a Best Book of 2024',
        link: `https://www.theparisreview.org/blog/2024/12/20/the-best-books-of-2024-according-to-friends-of-the-review-part-two/`,
        special: `names Two-Step Devil a Best Book of 2024`,
        isItalic: false
    },
    {
        title: 'Atlanta Journal-Constitution names Two-Step Devil  a Top Ten Book of 2024',
        link: `https://www.ajc.com/things-to-do/ajc-names-best-southern-books-of-2024/Y4UVB7AVDVBUTKJTZEUAHNQ6N4/`,
        special: `names Two-Step Devil  a Top Ten Book of 2024`,
        isItalic: false
    },
    // {
    //     title: 'Two-Step Devil named a Finalist for the Willie Morris Award for Southern Fiction',
    //     link: `https://www.williemorrisawards.org/`,
    //     special: `Finalist for the Willie Morris Award for Southern Fiction`,
    //     isItalic: false
    // },
    {
        title: 'Jill Wilson at Winnipeg Free Press names Two-Step Devil her favorite book of 2024',
        link: `https://www.winnipegfreepress.com/briefings/my-best-of-2024-in-books-music-movies-and-tv`,
        special: `names Two-Step Devil her favorite book of 2024`,
        isItalic: false
    },
    {
        title: 'Quatro appears on Chattanooga’s NPR station, WUTC',
        link: 'https://www.wutc.org/podcast/scenic-roots/2024-09-09/chattanoogas-jamie-quatro-on-her-latest-novel-two-step-devil',
        special: `Chattanooga’s NPR station`,
        isItalic: false
    },
    {
        title: 'Interview with Nick Ripatrazone at Image Journal',
        link: 'https://imagejournal.org/article/web-exclusive-a-conversation-with-jamie-quatro/',
        special: `Interview with Nick Ripatrazone`,
        isItalic: false
    },
    {
        title: 'Quatro appears on the Across the Pond podcast',
        link: ``,
        special: ``,
        isItalic: false
    },
    {
        title: 'Interview with Sara Hildreth at FictionMatters',
        link: `https://fictionmatters.substack.com/p/writing-in-public-jamie-quatro-on?r=3fgzf&utm_medium=ios&triedRedirect=true`,
        special: `Interview with Sara Hildreth at FictionMatters`,
        isItalic: false
    },
    {
        title: 'Quatro on devil depictions in literature',
        link: `https://lithub.com/satanic-sympathies-on-the-demon-depictions-that-helped-jamie-quarto-write-two-step-devil/`,
        special: `Quatro on devil depictions in literature`,
        isItalic: false
    },
    {
        title: 'Interview in The New Yorker',
        link: `https://www.newyorker.com/books/this-week-in-fiction/jamie-quatro-08-07-23`,
        special: `The New Yorker`,
        isItalic: true
    },
    {
        title: 'Interview in The Paris Review',
        link: `https://www.theparisreview.org/blog/2024/03/11/let-me-tell-you-something-a-conversation-with-jamie-quatro/`,
        special: `The Paris Review`,
        isItalic: true
    },
]

export { allNews, fullTsdBlurbs, shortenedTsdBlurbs, fsBlurbs, symBlurbs, events, shortFiction, nonFiction};
