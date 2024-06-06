type Blurb = {
    quote: string;
    speaker: string;
    title: string;
}

export const italicizeTwoDevil = textAutoFormat('Two-Step Devil', 'i');
export const italicizeFireSermon = textAutoFormat('Fire Sermon', 'i');
export const italicizeSym = textAutoFormat('I Want to Show You More', 'i');

const fullTsdBlurbs = [
    {
        quote: `"In this spellbinding story of good and evil, revelation and madness, Jamie Quatro ponders all the ways in which innocence and vulnerability can be exploited in a culture that deliberately turns from human suffering. Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written — and only, I suspect, with an angel peering over her shoulder."`,
        speaker: `Margaret Renkl`,
        title: `The Vaster Wilds`,
    },
    {
        quote: `"Jamie Quatro is a writer of sinuous, muscular power and grace. Two-Step Devil is a starkly gorgeous story of God and loss and art and love, and her best book yet."`,
        speaker: `Lauren Groff`,
        title: `Small Rain`,
    },
    {
        quote: `"Reading this novel is like holding on to a live wire. Jamie Quatro is the real thing. The music of these sentences lights my hair on fire."`,
        speaker: `Garth Greenwell`,
        title: `The Comfort of Crows`,
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
        quote: `"Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written — and only, I suspect, with an angel peering over her shoulder."`,
        speaker: `Margaret Renkl`,
        title: `The Vaster Wilds`,
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
        quote: `"Bold, ingenious, impassioned . . .  a wild and rich entertainment, a profound interrogation of God’s ways to Man, and–perhaps most daring of all—a story of simple human compassion.”`,
        speaker: `David Gates`,
        title: `A Hand Reached Down To Guide Me `,
    },
    {
        quote: `“Two-Step Devil compelled me with almost supernatural force. I could not turn away...unequivocally human, tender and alive—formally daring and utterly riveting."`,
        speaker: `Leslie Jamison`,
        title: `Splinters`,
    },
    {
        quote: `"Glorious, rich, mad, wonderful, daring and epic in its scope, Two-Step Devil is simply thrilling to read."`,
        speaker: `Samantha Harvey`,
        title: `Orbital`,
    },
    {
        quote: `"The characters in Jamie Quatro's Two-Step Devil will surely join the pantheon of Hazel Motes, Temple Drake, and Howard Finster."`,
        speaker: `Charles Marsh`,
        title: `Evangelical Anxiety`,
    },
    {
        quote: `"Jamie Quatro is one of the finest, and most fearless, American writers currently working."`,
        speaker: `Tom Bissell`,
        title: `Creative Types`,
    },
].map(b => ({ ...b, quote: italicizeTwoDevil(b.quote) })) satisfies readonly Blurb[];

const fsBlurbs = [
    {
        quote: `"Roiling, raw and sensual on the surface, this mazy novel rewards a second reading… The sentences burn with desire and disquiet. The novel is generously condensed, ardently focused, its mechanisms poetic, not expository. In fact, although it is fiction, Fire Sermon reminds me most of confessional poetry, the aim of which is uncompromising honesty and self-exposure. .. You may enter this book through an interest in poetry or theology, but once you are there, it shows you more."`,
        speaker: ` `,
        title: `New York Times Book Review`,
    },
    {
        quote: `"The state of marriage makes yearning possible, and yearning makes us burn, which Maggie (and perhaps Quatro) sees as a good and essential and human thing. I was stunned by the notion, and enchanted by the way the book built to a crystallized idea rather than a scene or an event—thinking as a dramatic gesture is a pleasure found more commonly in nonfiction than in fiction...By the time she’s done bobbing and weaving her way through her narrative, Quatro makes us feel the absolute necessity of desire, which she reveals as something shining: a hammered-gold necklace, begged for, worn twice, given away."`,
        speaker: ` `,
        title: `The Atlantic`,
    },
    {
        quote: `"As with Graham Greene’s 'The End of the Affair,' Fire Sermon examines infidelity by deftly balancing the sexual and the spiritual. There is agony and ecstasy, and the tantalizing hope of redemption through confession. All is rendered with fierce intelligence and lyrical grace. Passionate and intimate, few first novels are so adept at tracking 'the guiltiest swervings of the weaving heart.' "`,
        speaker: ` `,
        title: `Minneapolis Star Tribune`,
    },
    {
        quote: `"Nothing on Earth has ever not been about the passage of time — not a film, a poem, a cave painting, a house, a poncho, a comic book, a snowman or a fugue. But some art is particularly obsessed….Jamie Quatro, in her very sad first novel, Fire Sermon, squeezes large flows of time into a book as thin as my little finger. Time haunts every sentence…. The reader is left to intuit all the life those numbers once contained — the people who lived then, the children who memorized the numbers, the parents who helped them do the memorizing. And then of course we think of our own number, and what it might mean to someone who might memorize it someday, and what it feels like, right now, to be inside of it: 2018."`,
        speaker: ` `,
        title: `New York Times Magazine`,
    },
    {
        quote: `"Adultery may be a tale as old as time, but Quatro’s take is freshly urgent...Fire Sermon burns with emotional honesty. Unlike the great adulteresses of fiction, Anna Karenina and Emma Bovary, Quatro’s conflicted heroine is not miserably married; nor is her lover an unworthy boor. The result is an impassioned, deeply moral exploration of devotion and 'what’s waiting on the far side of fidelity.'”`,
        speaker: ` `,
        title: `San Francisco Chronicle`,
    },
    {
        quote: `"Affecting...powerful...Quatro's novel, full of vivid, mercurial prose, breathes new life into the subject [of adultery] and sets it gloriously ablaze."`,
        speaker: ` `,
        title: `Publishers Weekly`,
    }
].map(b => ({ ...b, quote: italicizeFireSermon(b.quote) })) satisfies readonly Blurb[];

const symBlurbs = [
    {
        quote: `“The best stories in Jamie Quatro's first collection, I Want to Show You More, are about adultery. They are passionate, sensuous, savagely intense, and remarkable for their brave dualism. . . . Moves between carnality and spirit like some franker, modernized Flannery O'Connor tale. Quatro has a poet's compound eye . . . [and] fearless lyricism. . . . Expansive, joyful, with forgiveness supplanting ruination. Who needs the New Testament? In Quatro's world, hard Genesis is always making way for the softer Song of Solomon: 'I sat down under his shadow with great delight, and his fruit was sweet to my taste.'"`,
        speaker: `James Wood, `,
        title: `The New Yorker`,
    },
    {
        quote: `“Subtle, sexy, and reflective . . . Quatro is incisive on technology and our new varities of instant gratification. . . . Quatro’s stories [have] led some to compare her work to that of Walker Percy and Flannery O’Connor. I also picked up metal-detector traces of Jayne Anne Phillips . . . and of Lorrie Moore’s pulverizing wit. . . . In order to be good at big things, writers must be good at small ones. Quatro’s details resonate. . . . There’s so much in these stories that’s shocking. Yet there’s so much solace.”`,
        speaker: `Dwight Garner, `,
        title: `The New York Times`,
    },
    {
        quote: `“[With its] impressive agility and inventiveness . . . I Want to Show You More is an obsessive first collection that feels like a fifth or sixth. It is a dogged, brutally thoughtful piece of work, and gives us a writer of great originality and apparent artistic maturity who seems to have come out of nowhere. . . . Strange, thrilling, and disarmingly honest . . . Quatro hits the right balance, giving us the closest thing I’ve seen in years to Donald Barthelme’s insouciance, sweetness, and ominousness. . . . Provides the most engaging literary treatment of Christianity since O’Connor, without a hint of the condescension the subject often receives in contemporary fiction. . . . [Quatro's] flights of fancy are never ostentatious or arbitrary; instead they grow naturally out of the emotional and psychological states of her characters. Readers may hope to see more of this hallucinatory mode from her, but—if they’re like me—they will welcome whatever they can get.”`,
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
        quote: `"Vivid . . . Arresting . . . Quatro very much establishes her own distinctive voice and style. . . . A luminous collection that announces a unique literary talent. Quatro's stories dazzle and shine."`,
        speaker: ` `,
        title: `San Francisco Chronicle`,
    },
    {
        quote: `"Delicious reading . . . [An] impressive debutabout the shortcomings of people who wrestle with angels, and usually lose."`,
        speaker: ` `,
        title: `Chicago Tribune`,
    },
].map(b => ({ ...b, quote: italicizeSym(b.quote) })) satisfies readonly Blurb[];

export { fullTsdBlurbs, shortenedTsdBlurbs, fsBlurbs, symBlurbs };
