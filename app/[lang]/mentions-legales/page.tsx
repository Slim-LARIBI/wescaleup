import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage'
import { pageMetadata, type Locale } from '@/lib/i18n'

// French-only page (English version: /en/terms)
interface PageProps {
  params: { lang: Locale }
}

const title = 'Mentions légales'
const description =
  'Mentions légales et conditions d’utilisation du site Wescaleup : éditeur, hébergeur, propriété intellectuelle et responsabilité.'

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.lang !== 'fr') return {}
  return pageMetadata({ lang: 'fr', path: '/mentions-legales', title, description })
}

const sections: LegalSection[] = [
  {
    title: 'Éditeur du site',
    list: [
      'Nom commercial : Wescaleup',
      'Raison sociale : WESCALEUP SARL',
      'Forme juridique : SARL (société à responsabilité limitée)',
      'Capital social : 1 000 DT',
      'Siège social : 08, rue de l’Université, El Manar 1, 2092 El Menzah, Tunis, Tunisie',
      'Identifiant unique RNE : 1725825X',
      'Matricule fiscal : 1725825X',
      'Email : slim.laribi@wescaleup.tech',
      'Téléphone : +216 22 354 833',
    ],
  },
  {
    title: 'Directeur de la publication',
    paragraphs: ['Slim LARIBI, gérant (CEO)'],
  },
  {
    title: 'Hébergement',
    paragraphs: [
      'Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — https://vercel.com',
    ],
  },
  {
    title: 'Objet du site',
    paragraphs: [
      'Le site www.wescaleup.tech présente les services de l’agence Wescaleup (performance marketing, tracking, analytics, SEO, automatisation et logiciels sur mesure) et permet de nous contacter. Les informations publiées sont fournies à titre indicatif et ne constituent pas une offre contractuelle. Toute mission fait l’objet d’une proposition commerciale distincte.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'L’ensemble des contenus du site (textes, visuels, logo, mise en page, code) est la propriété de Wescaleup, sauf mention contraire. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.',
      'Les marques et logos de tiers cités sur le site (Google, Meta, Shopify, etc.) restent la propriété de leurs titulaires respectifs.',
    ],
  },
  {
    title: 'Utilisation du site',
    paragraphs: [
      'Vous vous engagez à utiliser le site de manière loyale et à ne pas porter atteinte à son fonctionnement (tentative d’intrusion, envoi massif de formulaires, contenus illicites, etc.).',
      'Les informations que vous transmettez via le formulaire de contact doivent être exactes. Leur traitement est décrit dans notre politique de confidentialité.',
    ],
  },
  {
    title: 'Responsabilité',
    paragraphs: [
      'Wescaleup s’efforce d’assurer l’exactitude et la mise à jour des informations publiées, sans pouvoir garantir leur exhaustivité. Les résultats et chiffres présentés sont issus de projets passés et ne constituent pas une garantie de résultats futurs.',
      'Wescaleup ne saurait être tenue responsable d’une indisponibilité temporaire du site ou de dommages résultant de son utilisation.',
    ],
  },
  {
    title: 'Liens externes',
    paragraphs: [
      'Le site peut contenir des liens vers des sites tiers. Wescaleup n’exerce aucun contrôle sur ces sites et n’est pas responsable de leur contenu.',
    ],
  },
  {
    title: 'Données personnelles et cookies',
    paragraphs: [
      'Le traitement de vos données personnelles et l’utilisation des cookies sont détaillés dans notre politique de confidentialité, accessible depuis le pied de page du site.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: [
      'Les présentes mentions sont soumises au droit tunisien. En cas de litige, et à défaut de solution amiable, les tribunaux de Tunis seront seuls compétents.',
    ],
  },
]

export default function MentionsLegalesPage({ params }: PageProps) {
  if (params.lang !== 'fr') notFound()

  return (
    <LegalPage
      label="Informations légales"
      title={title}
      updated="Dernière mise à jour : 2 octobre 2026"
      sections={sections}
    />
  )
}
