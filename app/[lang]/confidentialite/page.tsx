import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage'
import { pageMetadata, type Locale } from '@/lib/i18n'

// French-only page (English version: /en/privacy)
interface PageProps {
  params: { lang: Locale }
}

const title = 'Politique de confidentialité'
const description =
  'Comment Wescaleup collecte, utilise et protège les données personnelles transmises via son site et son formulaire de contact.'

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.lang !== 'fr') return {}
  return pageMetadata({ lang: 'fr', path: '/confidentialite', title, description })
}

const sections: LegalSection[] = [
  {
    title: 'Qui sommes-nous ?',
    paragraphs: [
      'Le site www.wescaleup.tech est édité par WESCALEUP SARL, société à responsabilité limitée au capital de 1 000 DT, dont le siège est situé 08, rue de l’Université, El Manar 1, 2092 El Menzah, Tunis, Tunisie, immatriculée au Registre national des entreprises (RNE) sous l’identifiant unique 1725825X.',
      'WESCALEUP SARL est responsable du traitement des données personnelles décrites dans cette politique. Pour toute question, vous pouvez nous écrire à slim.laribi@wescaleup.tech ou nous appeler au +216 22 354 833.',
    ],
  },
  {
    title: 'Les données que nous collectons',
    paragraphs: ['Lorsque vous remplissez notre formulaire de contact, nous collectons :'],
    list: [
      'votre nom, votre adresse email, le nom de votre entreprise et l’adresse de votre site web ;',
      'les informations sur votre projet : type de service recherché, type d’activité, budget, délai, dépenses publicitaires, outils utilisés ;',
      'votre objectif prioritaire et le message que vous nous adressez.',
    ],
    after: [
      'Lors de votre navigation, des données techniques peuvent également être collectées : adresse IP, type de navigateur et d’appareil, pages consultées, ainsi que des identifiants issus de cookies ou de traceurs lorsque vous y avez consenti (voir la section « Cookies et mesure d’audience »).',
      'Nous ne collectons volontairement aucune donnée sensible. Merci de ne pas en indiquer dans le champ message.',
    ],
  },
  {
    title: 'Pourquoi nous utilisons vos données',
    list: [
      'Répondre à votre demande de contact et préparer l’appel stratégique : base légale = mesures précontractuelles prises à votre demande et notre intérêt légitime à répondre aux sollicitations.',
      'Assurer le suivi commercial de votre demande (relances, proposition d’accompagnement) : base légale = notre intérêt légitime.',
      'Mesurer l’audience du site et améliorer nos contenus et nos campagnes : base légale = votre consentement.',
      'Assurer la sécurité et le bon fonctionnement du site : base légale = notre intérêt légitime.',
    ],
    after: ['Vos données ne sont jamais vendues ni louées.'],
  },
  {
    title: 'Qui a accès à vos données',
    paragraphs: [
      'Vos données sont accessibles uniquement à l’équipe Wescaleup. Nous faisons appel aux prestataires techniques suivants, qui agissent en tant que sous-traitants et ne traitent vos données que pour notre compte :',
    ],
    list: [
      'Airtable (Formagrid Inc., États-Unis) : stockage et organisation des demandes reçues via le formulaire ;',
      'Resend (États-Unis) : envoi de l’email de notification interne lorsque vous soumettez le formulaire ;',
      'Vercel Inc. (États-Unis) : hébergement du site ;',
      'Google (Google Ireland Ltd / Google LLC) : Google Tag Manager, l’outil qui charge les services de mesure et de marketing ;',
      'uniquement avec votre consentement : les éditeurs des outils de mesure et de marketing listés à la section « Cookies et mesure d’audience » (Google, Meta, LinkedIn, Microsoft et Hotjar).',
    ],
    after: [
      'Certains de ces éditeurs, notamment Google, Meta et LinkedIn, peuvent également utiliser les données collectées par leurs outils pour leurs propres finalités, conformément à leur propre politique de confidentialité.',
    ],
  },
  {
    title: 'Transferts de données hors de votre pays',
    paragraphs: [
      'Certains de nos prestataires sont situés aux États-Unis. Ces transferts sont encadrés par les garanties proposées par chaque prestataire, notamment les clauses contractuelles types adoptées par la Commission européenne et, lorsqu’il s’applique, le cadre de protection des données UE–États-Unis (Data Privacy Framework).',
      'Le traitement de vos données est effectué conformément à la loi organique tunisienne n° 2004-63 du 27 juillet 2004 portant sur la protection des données à caractère personnel. Toute personne peut saisir l’Instance Nationale de Protection des Données Personnelles (INPDP).',
    ],
  },
  {
    title: 'Combien de temps nous conservons vos données',
    list: [
      'Demandes de contact sans suite : 3 ans à compter de notre dernier échange.',
      'Données des clients : pendant toute la durée de la relation commerciale, puis pendant les durées imposées par nos obligations légales (comptables et fiscales notamment).',
      'Cookies et traceurs de mesure d’audience : 13 mois maximum.',
    ],
  },
  {
    title: 'Cookies et mesure d’audience',
    paragraphs: [
      'Le site utilise Google Tag Manager, un outil qui permet de charger des services de mesure d’audience et de marketing. Les outils suivants peuvent être activés via Google Tag Manager :',
    ],
    list: [
      'Google Analytics 4 (Google) : mesure d’audience et analyse de la fréquentation du site ;',
      'Google Ads – suivi des conversions et remarketing (Google) : mesure de l’efficacité de nos campagnes Google Ads et affichage de nos annonces aux personnes ayant visité le site ;',
      'Meta Pixel et Conversions API (Meta) : mesure de l’efficacité de nos campagnes sur Facebook et Instagram et affichage de nos annonces aux personnes ayant visité le site ;',
      'LinkedIn Insight Tag (LinkedIn) : mesure de l’efficacité de nos campagnes LinkedIn et statistiques sur les visiteurs du site ;',
      'Microsoft Clarity (Microsoft) : analyse de la navigation (cartes de chaleur, enregistrements de sessions) pour améliorer le site ;',
      'Hotjar (Hotjar) : analyse de la navigation (cartes de chaleur, enregistrements de sessions) pour améliorer l’expérience utilisateur.',
    ],
    after: [
      'Ces outils ne sont activés qu’après votre consentement, recueilli via le bandeau de cookies. Sans votre accord, aucun cookie de mesure ou de marketing n’est déposé.',
      'Vous pouvez modifier vos choix à tout moment via le lien « Gérer les cookies » en bas de page.',
    ],
  },
  {
    title: 'Vos droits',
    paragraphs: ['Conformément au RGPD et à la loi organique tunisienne n° 2004-63 du 27 juillet 2004 portant sur la protection des données à caractère personnel, vous disposez des droits suivants :'],
    list: [
      'droit d’accès à vos données ;',
      'droit de rectification ;',
      'droit à l’effacement ;',
      'droit d’opposition et de limitation du traitement ;',
      'droit à la portabilité ;',
      'droit de retirer votre consentement à tout moment.',
    ],
    after: [
      'Pour exercer ces droits, écrivez-nous à slim.laribi@wescaleup.tech. Nous vous répondrons dans un délai d’un mois.',
      'Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (France, https://www.cnil.fr) ou de l’INPDP (Tunisie, https://www.inpdp.tn).',
    ],
  },
  {
    title: 'Sécurité',
    paragraphs: [
      'Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données : connexion chiffrée (HTTPS), accès restreint aux seules personnes habilitées et recours à des prestataires reconnus.',
    ],
  },
  {
    title: 'Modification de cette politique',
    paragraphs: [
      'Nous pouvons mettre à jour cette politique, par exemple en cas d’évolution de nos outils. La date de dernière mise à jour figure en haut de cette page.',
    ],
  },
]

export default function ConfidentialitePage({ params }: PageProps) {
  if (params.lang !== 'fr') notFound()

  return (
    <LegalPage
      label="Données personnelles"
      title={title}
      updated="Dernière mise à jour : 2 octobre 2026"
      intro="La protection de vos données personnelles est importante pour nous. Cette page explique, simplement, quelles données nous collectons via ce site, pourquoi, et quels sont vos droits."
      sections={sections}
    />
  )
}
