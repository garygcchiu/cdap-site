import Link from 'next/link';
import NextImage from '@/components/ui/NextImage';
import { Menu } from '@/components/Menu';
import { SocialLinks } from '@/components/SocialLinks';
import { SubBranding } from '@/components/SubBranding';
import { HeaderLogo } from '@/components/HeaderLogo';

export const Header = () => {
    return (
        <header>
            <nav>
                <HeaderLogo />
                <Menu />
                <SocialLinks />
                <SubBranding />
            </nav>
        </header>
    );
};
