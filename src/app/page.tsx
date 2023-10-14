import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HomeCTA } from '@/components/HomeCTA';
import { MainNav } from '@/components/MainNav';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { SubHero } from '@/components/SubHero';
import { Team } from '@/components/Team';
import { client } from '@/lib/sanity/client';
import { HeroData, ProcessStepData } from '@/lib/types';
import brandingWoganPic from '/public/branding-wogan-web.png';
import marketingPic from '/public/marketing.webp';
import websitesPic from '/public/websites.webp';

const navData = [
    { title: 'Projects', href: '#projects ' },
    { title: 'About', href: '#about ' },
    { title: 'Contact', href: '#contact ' },
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

const teamData = [
    {
        name: 'Gary Chiu',
        title: 'Co-Founder',
        picture: '/ESW-Jonathan-1.jpg',
        biography:
            'Jonathan Wang is the founder of the digital design studio, Eat. Sleep.Work, Inc., established in November of 2004 where he also acts as the managing Creative Director. He was born and raised in Los Angeles, CA with an early passion for the arts and illustration. Immersed in formal Illustration training at the age of six and continued his practice throughout his career.\n' +
            'Jonathan graduated from California State University Long Beach in 2000 with a B.S. Business Management and an emphasis in Information Systems, while simultaneously enrolled in the Graphic Design program at Art Center in 1998. He has been working in Advertising and Marketing professionally since 1999, with some of the biggest multinational clients in the world such as Nestlé, UBS, Henkel, Disney, Warner Bros. and Mattel. He has partnered with well-known agencies such as BBDO (the world’s most awarded agency), Trigger LA, Midnight Oil Creative, Brand Thirty-Three, and Rocket XL.',
    },
    {
        name: 'Shyam Ponnampalam',
        title: 'Co-Founder',
        picture: '/ESW-Chimmy-1.jpg',
        biography:
            'Cerritos, CA born Chimmy obtained a BS in Business Administration from CSULB in 2001 and has since been steadily in the world of graphic design. By taking calculated risks at the right time in life, he would fulfill his dreams of opening up shop with Wang in 2005. Their complementary personality types have made them a perfect business team, undoubtedly contributing to the successes they have achieved with Eat Sleep Work.\n' +
            'Along with an advanced understanding of a variety of programming languages and a knack for problem solving, he brings with him a true passion for the design process. In particular, he is driven and inspired by clients with whom he works through their enthusiasm for the product they make or the service they provide. With a sharp tongue and quick wit, he always tells it like it is, with a brutal yet refreshing sense of honesty.',
    },
];

export default async function Home() {
    const revalidate = 60; // seconds
    const getHero = client.fetch<HeroData>(`*[_type == "hero"][0]`, {
        next: { revalidate },
    });
    const getProcessSteps = client.fetch<ProcessStepData[]>(`*[_type == "processStep"]`, {
        next: { revalidate },
    });
    const [heroData, processStepsData] = await Promise.all([getHero, getProcessSteps]);

    return (
        <div>
            <MainNav items={navData} />
            <div className="bg-white z-[1] relative mb-[400px] md:mb-[200px]">
                <main>
                    <div id="portal" />
                    <Hero data={heroData.header} />
                    <SubHero data={heroData.subHeader} />
                    <Process data={processStepsData} />
                    <Services data={servicesData2} />
                    <Team data={teamData} />
                    <HomeCTA text={ctaData} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
