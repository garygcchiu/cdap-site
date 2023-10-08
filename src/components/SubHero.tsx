interface SubHeroProps {
    text: string[];
}

export const SubHero = ({ text }: SubHeroProps) => {
    return (
        <section className={'pt-[100px] container'}>
            <div className={'max-w-lg flex flex-col'}>
                {text.map((t, index) => (
                    <div key={index} className={'mb-4'}>
                        {t}
                    </div>
                ))}
            </div>
        </section>
    );
};
