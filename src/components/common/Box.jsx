const Box = ({ image, icon, title, desc, link, isDisable }) => {
    return (
        <div className="rounded-[4px] h-[240px] xs:w-[200px] lg:w-[250px] min-w-[195px] mt-[24px] mb-[48px] shadow-herobanner bg-white border-[1px] border-solid border-[#F1F1F5]">
            <img
                src={image}
                className="h-[98px] w-full"
                alt="background-content"
            />
            <div className="flex flex-col px-[16px] pt-[16px] pb-[20px]">
                <div className="flex items-center mb-[8px]">
                    {icon ? (
                        <img className="mr-[4px]" src={icon} alt="logo" />
                    ) : (
                        ''
                    )}
                    <h1
                        className={`text-[16px] leading-[24px] font-semibold ${
                            isDisable ? 'text-[#696974]' : 'text-[#0062FF]'
                        }`}
                    >
                        {title}
                    </h1>
                </div>
                <p className="min-w-[178px] w-[168px] font-normal text-[16px] leading-[24px] tracking-[-0.005em] text-[#92929D] text-left">
                    {desc}
                </p>
                {link ? (
                    <a
                        className="text-[#0062FF] font-normal text-[14px] leading-[20px] tracking-[-0.5px] mt-[8px]"
                        href="/#"
                    >
                        {link}
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Box;
