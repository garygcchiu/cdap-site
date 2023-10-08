import NextImage from 'next/image';
import { MainNav } from '@/components/MainNav';
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
import { SubHero } from '@/components/SubHero';

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

const navData = [
    { title: 'Projects', href: '#projects ' },
    { title: 'About', href: '#about ' },
    { title: 'Contact', href: '#contact ' },
];

const heroText = 'Eat Sleep Work is an independent brand and design agency.';

const subheroText = [
    'Our studios specialize in strategy, design and production across all platforms and along with brand identities, graphic design, marketing, websites, social strategy, and more.',
    'Founded in 2005 by Jonathan Wang, Eat Sleep Work was created as a one-stop shop, a creative hub and launchpad for the ideas you’ve always wanted to realize.',
    'Located in Los Angeles, California and Tucson, Arizona.',
];

export default function Home() {
    return (
        <div>
            <MainNav items={navData} />
            <main>
                <div id="portal" />
                <Hero text={heroText} />
                <SubHero text={subheroText} />
                <section className={'h-screen '}></section>
            </main>
        </div>
    );
}
