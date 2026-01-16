import { Hero } from '@/components/Hero'
import { Pillars } from '@/components/Pillars'
import { FeaturedReviews } from '@/components/FeaturedReviews'
import { Novedades } from '@/components/Novedades'
import { Gallery } from '@/components/Gallery'
import { Reviews } from '@/components/Reviews'
import { VisitUs } from '@/components/VisitUs'

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedReviews />
      <Novedades />
      <Gallery />
      <Reviews />
      <VisitUs />
    </>
  )
}
