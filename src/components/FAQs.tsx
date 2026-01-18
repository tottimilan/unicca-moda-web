'use client'

import { useState } from 'react'
import { siteConfig } from '@/content/site'
import { ChevronDown } from 'lucide-react'

interface FAQsProps {
  /** Mostrar solo un subset de FAQs por índices */
  indices?: number[]
  /** Título de la sección */
  title?: string
  /** Subtítulo */
  subtitle?: string
}

export function FAQs({ indices, title, subtitle }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = indices 
    ? indices.map(i => siteConfig.faqs[i]).filter(Boolean)
    : siteConfig.faqs

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-stone-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {(title || subtitle) && (
            <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
              {subtitle && (
                <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                  {title}
                </h2>
              )}
            </div>
          )}

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-stone-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between gap-3 md:gap-4 hover:bg-stone-50 transition-colors active:bg-stone-100"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
