<template>
    <div ref="container" class="keen-slider">
        <div class="keen-slider__slide q">
            <div>
                <p style="text-align: center;">"Jamie Quatro is a writer of sinuous, muscular power and grace. <span style="font-style: italic;">Two-Step Devil</span> is a starkly gorgeous story of God and loss and art and love, and her best book yet." </p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Lauren Groff, author of <span style="font-style: italic;">The Vaster Wilds</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
            <div>
                <p style="text-align: center;">"In this spellbinding story of good and evil, revelation and madness, Jamie Quatro ponders all the ways in which innocence and vulnerability can be exploited in a culture that deliberately turns from human suffering. Beautiful and brave and brilliant, shot through with mystery and love, <span style="font-style: italic;">Two-Step Devil</span> is a novel that only Jamie Quatro could have written -- and only, I suspect, with an angel peering over her shoulder."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Margaret Renkl, author of <span style="font-style: italic;">The Comfort of Crows</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"Reading this novel is like holding on to a live wire. Jamie Quatro is the real thing. The music of these sentences lights my hair on fire."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Garth Greenwell, author of <span style="font-style: italic;">Small Rain</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"Jamie Quatro's <span style="font-style: italic;">Two-Step Devil</span> compelled me with almost supernatural force. I could not turn away. It's a book that wrestles with the biggest questions about sin and salvation, violation and agency--striding fearlessly into narrative and political terrain almost always treated with knee-jerk, agenda-driven simplicity--but the pulse at the core of this breathtaking novel is unequivocally human, tender and alive--formally daring and utterly riveting."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Leslie Jamison, author of <span style="font-style: italic;">Splinters</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"The bold, ingenious, impassioned <span style="font-style: italic;">Two-Step Devil</span> takes risks--tonally, formally and theologically--that would terrify a less masterly writer than Jamie Quatro. Her unforgettable characters, her meticulous observation of backwoods folklife and her wide-ranging intellect come together to create a novel that's a wild and rich entertainment, a profound interrogation of God's ways to Man, and--perhaps most daring of all--a story of simple human compassion." </p>
            </div>
            <p>
                <span style="font-weight: bold;">-- David Gates, author of <span style="font-style: italic;">A Hand Reached Down to Guide Me</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"Jamie Quatro is one of the finest, and most fearless, American writers currently working. Her new novel, <span style="font-style: italic;">Two-Step Devil</span>, is, among other things, an intense exploration of the Christian faith, a deeply empathetic portrait of a weirdo, and a peerlessly innovative modern-day theodicy. I've never read anything like it. I suspect no one has."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Tom Bissell, author of <span style="font-style: italic;">Creative Types</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"The characters in Jamie Quatro's <span style="font-style: italic;">Two-Step Devil</span> will surely join the pantheon of Hazel Motes, Temple Drake, and Howard Finster. They are their own peculiar theological texts, defying doctrinal consistency--and thank God for that."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Charles Marsh, author of <span style="font-style: italic;">Strange Glory: A Life</span></span>
            </p>
        </div>

        <div class="keen-slider__slide q">
          <div>
                <p style="text-align: center;">"Glorious, rich, mad, wonderful, daring and epic in its scope, <span style="font-style: italic;">Two-Step Devil</span> is simply thrilling to read."</p>
            </div>
            <p>
                <span style="font-weight: bold;">-- Samantha Harvey, author of <span style="font-style: italic;">Orbital</span></span>
            </p>
        </div>
    </div>
</template>
  
<script>
import { useKeenSlider } from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"

export default {
  setup() {
    const [container] = useKeenSlider(
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 7000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
    return { container }
  },
}
</script>
  
<style scoped>
[class^="q"],
[class*=" q"] {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1.3rem;
color: black;
height: 400px;
max-height: 100vh;
width: 100%;
} 
</style>
  