import type { Locale } from '@/lib/i18n'

import { common as commonEn } from './en/common'
import { home as homeEn } from './en/home'
import { contact as contactEn } from './en/contact'
import { servicesIndex as servicesIndexEn } from './en/services/index'
import { seo as seoEn } from './en/services/seo'
import { sea as seaEn } from './en/services/sea'
import { metaAds as metaAdsEn } from './en/services/meta-ads'
import { analytics as analyticsEn } from './en/services/analytics'
import { automation as automationEn } from './en/services/automation'
import { customSaas as customSaasEn } from './en/services/custom-saas'

import { common as commonFr } from './fr/common'
import { home as homeFr } from './fr/home'
import { contact as contactFr } from './fr/contact'
import { servicesIndex as servicesIndexFr } from './fr/services/index'
import { seo as seoFr } from './fr/services/seo'
import { sea as seaFr } from './fr/services/sea'
import { metaAds as metaAdsFr } from './fr/services/meta-ads'
import { analytics as analyticsFr } from './fr/services/analytics'
import { automation as automationFr } from './fr/services/automation'
import { customSaas as customSaasFr } from './fr/services/custom-saas'

const en = {
  common: commonEn,
  home: homeEn,
  contact: contactEn,
  servicesIndex: servicesIndexEn,
  services: {
    seo: seoEn,
    sea: seaEn,
    metaAds: metaAdsEn,
    analytics: analyticsEn,
    automation: automationEn,
    customSaas: customSaasEn,
  },
}

export type Dictionary = typeof en

// The French dictionary must have exactly the same structure as the English one
const fr: Dictionary = {
  common: commonFr,
  home: homeFr,
  contact: contactFr,
  servicesIndex: servicesIndexFr,
  services: {
    seo: seoFr,
    sea: seaFr,
    metaAds: metaAdsFr,
    analytics: analyticsFr,
    automation: automationFr,
    customSaas: customSaasFr,
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, fr }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}
