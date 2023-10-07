import NextImage from 'next/image';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ScrollDown } from '@/components/ScrollDown';
import { Cursor } from '@/components/Cursor';
import { Button } from '@/components/ui/button';
import { Ticker } from '@/components/Ticker';
import { InfoColumns } from '@/components/InfoColumns';
import { CardOverImage } from '@/components/CardOverImage';
import { Footer } from '@/components/Footer';
import { CenteredCTA } from '@/components/CenteredCTA';
import { libre } from '@/app/fonts';

const tickerItems: string[] = [
    'SUPERCULTURE is a creative studio and fashion house. Located on the internet. We help influencers, online audiences, internet culture launch IDEAS',
    'Design MERCH',
    'Press COVERAGE',
    'From (sub)CULTURE to SUPERCULTURE',
    'BRING IT ON',
    "NOTHING WE CAN'T DESIGN AND MAKE",
    'INTERNET CREATOR',
    'ADVANCING YOU',
    'GLOBAL AUDIENCE',
];

const columnsData = [
    {
        columnHeader: 'INDUSTRY EXPERTISE',
        columnItems: [
            'Online Influencers',
            'Esports Teams & Orgs',
            'Internet Culture',
            'Merchandise & Retail',
            'Ecommerce Strategy',
            'Direct-to-Consumer (DTC)',
            'Pitch Deck Design',
            'Venture Capital & Growth',
            'Startup Accelerators (YC, TS, 500)',
            'Social Consumer Apps',
            'B2B Companies',
        ],
    },
    {
        columnHeader: 'COMPANIES & PROJECTS',
        columnItems: [
            'Team Solomid',
            'Instagram',
            'Facebook',
            'Italic',
            'Shopify',
            'TOLD',
            'Intern Season',
            'Hallyu Mode',
            'Art Maison',
            'Oat Milk Gang',
            'CSY',
        ],
    },
    {
        columnHeader: 'SERVICES FOR YOU',
        columnItems: [
            'Internet Culture Strategy',
            'Art Direction',
            'Brand Building',
            'Content Strategy',
            'Creative Production',
            'Fashion & Merchandise',
            'Instagram & Snapchat Filters',
            'Media & Press Coverage',
            'Monetization Growth',
            'Online Shopping',
            'Operations & Fulfillment',
        ],
    },
];

const cardData = {
    header: 'Fan Merch. Fashion House. Ecommerce.',
    subheader: 'MERCHANDISING',
    body: 'We empower the new guard of culture creators to launch their own fashion brands. Our team has decades of experience launching high-growth fashion brands and we can’t wait to help bring your creative vision to life. From idea to launch to fulfillment, we’re ready.',
    link: 'https://www.google.ca',
};

const centeredCTAData = {
    header: 'Brand Growth',
    subheader: "SMALL TEAMS DON'T HAVE TO HAVE SMALL DREAMS",
    body: "Strategy for fan engagement, creative trends, and new creative media are hurdles we’ve jumped before. We thrive on virality. We've done it for outselves and for clients. Learn how we built a 100k person waitlist before even launching.",
    link: 'https://www.google.ca',
};

export default function Home() {
    return (
        <div className={'bg-black'}>
            <Header />
            <main>
                <div id="portal"></div>
                <Cursor />
                <ScrollDown />
                <Hero />
                <Ticker items={tickerItems} />
                <section className={'px-8 md:px-24 flex flex-col md:flex-row mt-32 container'}>
                    <div className={'text-white md:flex-1 z-[2]'}>
                        <div className={'overflow-hidden'}>
                            <h3
                                className={
                                    'after:content after:border-b-[1px] after:bg-white after:inline-block after:border-white after:w-full after:h-full after:-mr-[120%] after:mb-[4px] after:ml-4'
                                }
                            >
                                FROM SUBCULTURE TO
                            </h3>
                            <NextImage
                                src="/logo-red.svg"
                                alt="Logo"
                                width={250}
                                height={200}
                                className={'mt-6'}
                            />
                        </div>
                        <div className={'leading-8 mt-8'}>
                            We empower the new guard of culture creators to launch their own fashion
                            brands.
                        </div>
                        <div className={'leading-8 mt-4'}>
                            We are the first talent and merch studio for new influencers from the
                            internet (Instagram, TikTok, Youtube, Twitch) with direct monetization
                            and growth experience from the inside of platforms like Facebook and
                            Shopify.
                        </div>
                        <div className={'mt-8 mb-16 flex justify-center md:justify-start'}>
                            <Button size={'lg'}> Learn More </Button>
                        </div>
                    </div>
                    <div className={'flex md:flex-1 md:ml-8 z-[2] justify-center'}>
                        <div className={'w-full relative max-w-[450px] pb-[118.8%]'}>
                            <NextImage
                                alt={'arc'}
                                src={'/arc-photo.png'}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </section>
                <section className="relative px-8 md:px-24 mt-16 container z-[5]">
                    <InfoColumns data={columnsData} />
                </section>
                <section className={'px-8 md:px-24 text-white flex flex-col mt-8 container z-[5]'}>
                    <h3 className={'mb-4'}>WORK FEATURED IN PRESS</h3>
                    <div>
                        <p className={libre.className}>
                            Vox • Forbes • Business of Fashion • Wall Street Journal • Cheddar • The
                            Guardian • Glamour • NY Mag, The Strategist
                        </p>
                    </div>
                </section>
                <section className={'container px-8 md:px-24 mt-16 h-max max-h-max z-[5]'}>
                    <CardOverImage
                        imageSrc={'/2guys.png'}
                        cardHeading={cardData.header}
                        cardBody={cardData.body}
                        cardSubheading={cardData.subheader}
                        cardLink={cardData.link}
                    />
                </section>
                <section className={'container px-8 md:px-24 mt-16 lg:mt-32'}>
                    <CenteredCTA {...centeredCTAData} />
                </section>
                <section className={'container px-8 md:px-24 mt-32'}>
                    <Footer />
                </section>
            </main>
        </div>
    );
}
