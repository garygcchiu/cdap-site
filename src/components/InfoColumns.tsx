import { libre } from '@/app/fonts';

interface ColumnProps {
    columnHeader: string;
    columnItems: string[];
}

interface InfoColumnsProps {
    data: ColumnProps[];
}

const Column = ({ columnHeader, columnItems }: ColumnProps) => {
    return (
        <div className="bg-black">
            <div className="border-t-[1px] border-white">
                <div className={'text-white py-4'}>{columnHeader}</div>
                <ul>
                    {columnItems.map((item, index) => (
                        <li key={index} className={`text-white ${libre.className}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const InfoColumns = ({ data }: InfoColumnsProps) => {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-12 border-b-[1px] border-white pb-4'}>
            {data.map((d, index) => (
                <Column columnHeader={d.columnHeader} columnItems={d.columnItems} key={index} />
            ))}
        </div>
    );
};
