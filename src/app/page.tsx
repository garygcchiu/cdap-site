import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HomeCTA } from '@/components/HomeCTA';
import { MainNav } from '@/components/MainNav';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { SubHero } from '@/components/SubHero';
import { Team } from '@/components/Team';
import { client } from '@/lib/sanity/client';
import { HeroData, ProcessStepData, Service, TeamMember } from '@/lib/types';
import brandingWoganPic from '/public/branding-wogan-web.png';
import marketingPic from '/public/marketing.webp';
import websitesPic from '/public/websites.webp';

const navData = [
    { title: 'Process', href: '#process' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
];

const ctaData = {
    header: 'Ready to turn your ideas into tech solutions?',
    ctaButtonText: "Let's talk",
};

const servicesData = [
    {
        name: 'Website Design & Development',
        description:
            'Crafting responsive, search engine friendly websites with instant impact, impressing users and effectively positioning your brand.',
        image: '',
    },
    {
        name: 'Branding',
        description:
            'Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.',
        image: '',
    },
    {
        name: 'Digital Marketing',
        description:
            'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions.',
        image: '',
    },
];

const servicesData2 = [
    {
        title: 'Strategy',
        body: 'We focus on understanding your brand, audience and business objectives to inform a digital strategy that is geared toward success.',
        listItems: [
            'Research & Insights',
            'Product Platform Strategy',
            'Content Planning',
            'IA Development',
        ],
        image: websitesPic,
    },
    {
        title: 'Branding',
        body: 'Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.',
        listItems: ['User Journey Mapping', 'Wireframing'],
        image: brandingWoganPic,
    },
    {
        title: 'Development',
        body: 'Crafting responsive, search engine friendly websites with instant impact, impressing users and effectively positioning your brand.',
        listItems: ['System Architecture', 'Product Development', 'API Design & Implementation'],
        image: marketingPic,
    },
];

export const revalidate = 60;

export default async function Home() {
    const getHero = client.fetch<HeroData>(`*[_type == "hero"][0]`, {
        next: { revalidate },
    });
    const getProcessSteps = client.fetch<ProcessStepData[]>(`*[_type == "processStep"]`, {
        next: { revalidate },
    });
    const getTeamMembers = client.fetch<TeamMember[]>(`*[_type == "teamMember"]`, {
        next: { revalidate },
    });
    const getServices = client.fetch<Service[]>(`*[_type == "service"]`, {
        next: { revalidate },
    });
    const [heroData, processStepsData, teamData, serviceData] = await Promise.all([
        getHero,
        getProcessSteps,
        getTeamMembers,
        getServices,
    ]);

    return (
        <div>
            <MainNav items={navData} />
            <div className="bg-white z-[1] relative mb-[400px] md:mb-[200px]">
                <main>
                    <div id="portal" />
                    <Hero data={heroData.header} />
                    <SubHero data={heroData.subHeader} />
                    <Process data={processStepsData} />
                    <Services data={serviceData} />
                    <Team data={teamData} />
                    <HomeCTA text={ctaData} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
