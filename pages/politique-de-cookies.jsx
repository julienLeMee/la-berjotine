import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Section = ({ title, children }) => (
  <section className='mb-12'>
    <h2 className='font-display text-2xl text-[#18312f] mb-4'>{title}</h2>
    <div className='text-gray-700 leading-relaxed space-y-3'>{children}</div>
  </section>
)

const PolitiqueDeCookies = () => {
  return (
    <>
      <Head>
        <title>Politique de cookies – La Berjotine</title>
      </Head>

      <div className='relative mt-[76px] h-64 overflow-hidden sm:m-5 sm:mt-[96px] sm:rounded-[2rem] md:h-80'>
        <Image
          src='/assets/berjotine-homepage-2.jpg'
          alt='politique de cookies'
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-[#292f2e]/60' />
        <div className='relative z-10 flex h-full items-center justify-center'>
          <h1 className='text-center text-4xl text-white md:text-6xl'>
            Politique de cookies
          </h1>
        </div>
      </div>

      <div className='w-full py-20 sm:py-28'>
        <div className='site-container max-w-4xl'>

          <Section title="Qu'est-ce qu'un cookie ?">
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
              lors de votre visite sur un site internet. Il permet au site de mémoriser des informations sur votre
              navigation afin d’améliorer votre expérience et de mesurer l’audience du site.
            </p>
          </Section>

          <Section title="Les cookies utilisés sur ce site">
            <p>
              Le site <span className='font-semibold'>laberjotine.fr</span> utilise uniquement des cookies
              techniques strictement nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune
              donnée personnelle à des fins commerciales ou publicitaires.
            </p>
            <div className='overflow-x-auto mt-4'>
              <table className='w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
                <thead className='bg-[#096b79] text-white'>
                  <tr>
                    <th className='text-left px-4 py-3'>Nom</th>
                    <th className='text-left px-4 py-3'>Finalité</th>
                    <th className='text-left px-4 py-3'>Durée</th>
                    <th className='text-left px-4 py-3'>Type</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                  <tr className='bg-white'>
                    <td className='px-4 py-3 font-medium'>cookie-consent</td>
                    <td className='px-4 py-3'>Mémorisation de votre choix concernant les cookies (accepté ou refusé)</td>
                    <td className='px-4 py-3'>13 mois</td>
                    <td className='px-4 py-3'>Technique (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Base légale">
            <p>
              Conformément aux recommandations de la <span className='font-semibold'>CNIL</span> (Commission Nationale
              de l’Informatique et des Libertés) et au <span className='font-semibold'>Règlement Général sur la
              Protection des Données (RGPD)</span>, tout dépôt de cookie non strictement nécessaire au fonctionnement
              du site requiert votre consentement préalable.
            </p>
            <p>
              Les cookies techniques utilisés sur ce site sont exemptés de consentement obligatoire en vertu de
              l’article 82 de la loi Informatique et Libertés, car ils sont indispensables au fonctionnement
              du service demandé.
            </p>
          </Section>

          <Section title="Votre consentement">
            <p>
              Lors de votre première visite sur ce site, un bandeau vous informe de l’utilisation des cookies
              et vous permet de les <span className='font-semibold'>accepter ou de les refuser</span>.
              Le refus n’a aucune incidence sur votre navigation.
            </p>
            <p>
              Votre choix est mémorisé pendant <span className='font-semibold'>13 mois</span> maximum,
              conformément aux recommandations de la CNIL.
            </p>
          </Section>

          <Section title="Gérer ou retirer votre consentement">
            <p>
              Vous pouvez modifier ou retirer votre consentement à tout moment en :
            </p>
            <ul className='list-disc list-inside space-y-1 pl-2'>
              <li>Vidant les données de navigation (localStorage) de votre navigateur</li>
              <li>Paramétrant votre navigateur pour bloquer les cookies</li>
            </ul>
            <p className='mt-3'>
              Guides par navigateur :
            </p>
            <ul className='list-disc list-inside space-y-1 pl-2'>
              <li>
                <a href='https://support.google.com/chrome/answer/95647' target='_blank' rel='noopener noreferrer' className='text-[#01647C] hover:underline'>Google Chrome</a>
              </li>
              <li>
                <a href='https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox' target='_blank' rel='noopener noreferrer' className='text-[#01647C] hover:underline'>Mozilla Firefox</a>
              </li>
              <li>
                <a href='https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' target='_blank' rel='noopener noreferrer' className='text-[#01647C] hover:underline'>Apple Safari</a>
              </li>
            </ul>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès,
              de rectification, d’effacement et d’opposition concernant vos données personnelles.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question relative à notre politique de cookies, vous pouvez
              nous contacter à :{' '}
              <a href='mailto:laberjotine@gmail.com' className='text-[#01647C] hover:underline'>
                laberjotine@gmail.com
              </a>
            </p>
            <p>
              Vous avez également le droit d’introduire une réclamation auprès de la CNIL :{' '}
              <a href='https://www.cnil.fr/fr/vous-souhaitez-contacter-la-cnil' target='_blank' rel='noopener noreferrer' className='text-[#01647C] hover:underline'>
                cnil.fr
              </a>
            </p>
          </Section>

          <Section title="Contact">
            <p>
              <span className='font-semibold'>La Berjotine</span> — 13 Rue du Calvaire, 71120 Charolles<br />
              <a href='mailto:laberjotine@gmail.com' className='text-[#01647C] hover:underline'>laberjotine@gmail.com</a>
              {' · '}
              <a href='tel:0687334027' className='text-[#01647C] hover:underline'>06.87.33.40.27</a>
            </p>
          </Section>

          <p className='text-sm text-gray-400 mt-10'>Dernière mise à jour : mars 2026</p>

        </div>
      </div>
    </>
  )
}

export default PolitiqueDeCookies
