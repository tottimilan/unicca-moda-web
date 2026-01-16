'use client'

import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/button'
import { Star, ExternalLink, Plus } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function ReviewsButtons() {
  const handleViewReviewsClick = () => {
    trackEvent('click_reviews_view', {
      page: window.location.pathname,
      button_location: 'reviews_page'
    })

    if (siteConfig.links.reviews.view && siteConfig.links.reviews.view !== '#') {
      window.open(siteConfig.links.reviews.view, '_blank', 'noopener,noreferrer')
    }
  }

  const handleWriteReviewClick = () => {
    trackEvent('click_reviews_write', {
      page: window.location.pathname,
      button_location: 'reviews_page'
    })

    if (siteConfig.links.reviews.write && siteConfig.links.reviews.write !== '#') {
      window.open(siteConfig.links.reviews.write, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        onClick={handleViewReviewsClick}
        variant="outline"
        size="lg"
        className="inline-flex items-center gap-2"
      >
        <ExternalLink className="h-5 w-5" />
        {siteConfig.copy.ctaReviews}
      </Button>

      <Button
        onClick={handleWriteReviewClick}
        variant="outline"
        size="lg"
        className="inline-flex items-center gap-2"
      >
        <Plus className="h-5 w-5" />
        {siteConfig.copy.ctaWriteReview}
      </Button>
    </div>
  )
}