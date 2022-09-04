import { useRouter } from "next/router";
import { GetLocale } from "../locales/GetLocale";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../components/Slider"), { suspense: true })
const Introduction = dynamic(() => import("../components/Introduction"), { suspense: true })
const OfferSection = dynamic(() => import("../components/OfferSection"), { suspense: true })
const Hotels = dynamic(() => import("../components/Hotels"), { ssr: false })

export default function Home(props) {
  const { introduction, offersection, hotels, footer } = props.content;
  return (
    <section className="home">
      <Suspense fallback={<p> Yükleniyor.....</p>}>
        <Slider />
        <Introduction {...introduction} />
        <OfferSection {...offersection} />
        <Hotels hotels={hotels} footer={footer} />
      </Suspense>
    </section>
  )
}
export async function getStaticProps(context) {
  const content = await GetLocale(context.locale);
  content.hotels = [
    { name: 'BODRUM RESORT', img: '/images/Hotels/Bodrum.png' },
    { name: 'KEMER RESORT', img: '/images/Hotels/Kemer.png' },
    { name: 'KREMLIN PALACE', img: '/images/Hotels/Kremlin.png' },
    { name: 'ZEUS DİDİM', img: '/images/Hotels/Zeus.png' },
    { name: 'VENUS DİDİM', img: '/images/Hotels/Venus.png' },
  ]
  return {
    props: {
      content
    }
  }
}