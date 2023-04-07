import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

const photos = [image1, image2, image3, image4, image5]

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex flex-wrap justify-start gap-5 overflow-hidden sm:gap-8">
        {photos.map((image, imageIndex) => (
          <div
            key={image.src}
            className='relative aspect-[9/10] w-44 flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:w-72'
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  const title = 'Massey Gutters'
  const metaContent = [
    "Chris Massey opened Massey Gutter Installation way back in 1998. ",
    "Twenty five years in the business he has over seen tens of thousands of gutter installations all over metro Atlanta. ",
    "Specializing in 6\" aluminum seamless gutters with 3\" x 4\" downspouts in an assortment of colors.  Copper gutters. Commercial box gutters. Half round gutters with round downspouts. ",
    "Massey Gutter Installation carries a wide assortment of gutter covers that can fit any budget. ",
    "Included in these systems is the Leaftech gutter cover which comes with a lifetime clogfree guarantee www.leaftechus com Massey Gutter Installation is fully insured.",
    " Besides servicing home owners in metro Atlanta there are 70 different businesses ranging from roofing companies, paint contractors, builders and general contractors that choose Massey Gutter Installation to handle all thier gutter needs.",
    "Call Chris today for a free estimate 404 314 6800 Financing available"
  ].join("")

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent}/>
        <meta name="robots" content="index, nofollow" />
      </Head>
      <Container className="mt-5">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Massey Gutter Installation
          </h1>

          <div className='mt-4 flex flex-col items-center'>
            <a href="tel:4043146800" className='text-sky-500 text-3xl'>(404) 314-6800</a>
            <div className='mt-2 text-white text-center'>
              Call Chris today for a free estimate.
              <br />
              Financing available.
            </div>
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
            Chris Massey opened Massey Gutter Installation way back in 1998. Twenty five years in the business he has over seen tens of thousands of gutter installations all over metro Atlanta.
            &nbsp;
            Specializing in 6&quot; aluminum seamless gutters with 3&quot; x 4&quot; downspouts in an assortment of colors. Copper gutters. Commercial box gutters. Half round gutters with round downspouts.
            Massey Gutter Installation carries a wide assortment of gutter covers that can fit any budget.
            Included in these systems is the Leaftech gutter cover which comes with a lifetime clogfree guarantee <a href="https://leaftechus.com/" target='blank'>leaftechus</a> com Massey Gutter Installation is fully insured.
            Besides servicing home owners in metro Atlanta there are 70 different businesses ranging from roofing companies, paint contractors, builders and general contractors that choose Massey Gutter Installation to handle all thier gutter needs.
            {/* <br />
            <br />
            Call Chris today for a free estimate <a href="tel:4043146800" className='text-sky-500'>(404) 314-6800</a> Financing available. */}
          </p>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
        <Photos />
      </Container>
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}
