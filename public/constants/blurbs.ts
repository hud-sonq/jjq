type Blurb = {
    quote: string;
    speaker: string;
    title: string;
}

export const italicizeTwoDevil = textAutoFormat('Two-Step Devil', 'i');

const fullBlurbs = [
    {
        quote: `"In this spellbinding story of good and evil, revelation and madness, Jamie Quatro ponders all the ways in which innocence and vulnerability can be exploited in a culture that deliberately turns from human suffering. Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written -- and only, I suspect, with an angel peering over her shoulder."`,
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
        quote: `"The bold, ingenious, impassioned Two-Step Devil takes risks--tonally, formally and theologically--that would terrify a less masterly writer than Jamie Quatro. Her unforgettable characters, her meticulous observation of backwoods folklife and her wide-ranging intellect come together to create a novel that's a wild and rich entertainment, a profound interrogation of God's ways to Man, and--perhaps most daring of all--a story of simple human compassion."`,
        speaker: `David Gates`,
        title: `A Hand Reached Down To Guide Me `,
    },
    {
        quote: `"Jamie Quatro's Two-Step Devil compelled me with almost supernatural force. I could not turn away. It's a book that wrestles with the biggest questions about sin and salvation, violation and agency--striding fearlessly into narrative and political terrain almost always treated with knee-jerk, agenda-driven simplicity--but the pulse at the core of this breathtaking novel is unequivocally human, tender and alive--formally daring and utterly riveting." `,
        speaker: `Leslie Jamison`,
        title: `Splinters`,
    },
    {
        quote: `"Glorious, rich, mad, wonderful, daring and epic in its scope, Two-Step Devil is simply thrilling to read."`,
        speaker: `Samantha Harvey`,
        title: `Orbital`,
    },
    {
        quote: `"The characters in Jamie Quatro's Two-Step Devil will surely join the pantheon of Hazel Motes, Temple Drake, and Howard Finster. They are their own peculiar theological texts, defying doctrinal consistency--and thank God for that."`,
        speaker: `Charles Marsh`,
        title: `Evangelical Anxiety`,
    },
    {
        quote: `"Jamie Quatro is one of the finest, and most fearless, American writers currently working. Her new novel, Two-Step Devil, is, among other things, an intense exploration of the Christian faith, a deeply empathetic portrait of a weirdo, and a peerlessly innovative modern-day theodicy. I've never read anything like it. I suspect no one has."`,
        speaker: `Tom Bissell`,
        title: `Creative Types`,
    },
].map(b => ({ ...b, quote: italicizeTwoDevil(b.quote) })) satisfies readonly Blurb[];



const shortenedBlurbs = [
    {
        quote: `"Beautiful and brave and brilliant, shot through with mystery and love, Two-Step Devil is a novel that only Jamie Quatro could have written -- and only, I suspect, with an angel peering over her shoulder."`,
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

export { fullBlurbs, shortenedBlurbs };
