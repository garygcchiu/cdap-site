import { ContactUsForm } from '@/components/ContactUsForm';

interface HomeCTAProps {
    text: {
        header: string;
        ctaButtonText: string;
    };
}

export const HomeCTA = ({ text }: HomeCTAProps) => {
    return (
        <section className={'pt-[100px] border-t-[1px] border-black pb-[100px]'}>
            <div className={'container grid grid-cols-1 md:grid-cols-2'}>
                <h3 className={'font-light text-3xl mb-12 md:mb-0'}>{text.header}</h3>
                <div className={'flex justify-start self-center'} id={'contact'}>
                    <ContactUsForm submitButtonText={text.ctaButtonText} />
                </div>
            </div>
        </section>
    );
};
