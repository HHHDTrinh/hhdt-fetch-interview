import Box from './common/Box';
import Food_1 from '../assets/content/food-1.png';
import Food_2 from '../assets/content/food-2.png';
import Petrol_1 from '../assets/content/petrol-1.png';
import Petrol_2 from '../assets/content/petrol-2.png';
import Rental_1 from '../assets/content/rental-1.png';
import Rental_2 from '../assets/content/rental-2.png';
import IconImage from '../assets/content/icon.svg';

const Content = () => {
    return (
        <section className="pl-[16px] xs:mb-[90px] lg:mb-[0px] lg:px-[32px]">
            <div>
                <h1 className="font-semibold text-[18px] leading-[24px] text-[#171725]">
                    Petrol
                </h1>
                <div className="flex flex-row gap-[25px] overflow-x-hidden">
                    <Box
                        image={Petrol_1}
                        title="15 Coins"
                        desc="50% discount for every $100 top-up on your Shell Petrol Card"
                    />
                    <Box
                        isDisable
                        image={Petrol_2}
                        icon={IconImage}
                        title="1,000 Coins"
                        desc="70% discount top-up on your Shell Petrol Card"
                        link="Insufficient coins"
                    />
                    <Box
                        image={Petrol_1}
                        title="15 Coins"
                        desc="50% discount for every $100 top-up on your Shell Petrol Card"
                    />
                    <Box
                        isDisable
                        image={Petrol_2}
                        icon={IconImage}
                        title="1,000 Coins"
                        desc="70% discount top-up on your Shell Petrol Card"
                        link="Insufficient coins"
                    />
                    <Box
                        image={Petrol_1}
                        title="15 Coins"
                        desc="50% discount for every $100 top-up on your Shell Petrol Card"
                    />
                    <Box
                        isDisable
                        image={Petrol_2}
                        icon={IconImage}
                        title="1,000 Coins"
                        desc="70% discount top-up on your Shell Petrol Card"
                        link="Insufficient coins"
                    />
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-[18px] leading-[24px] text-[#171725]">
                    Rental Rebate
                </h1>
                <div className="flex flex-row gap-[25px] overflow-x-hidden">
                    <Box
                        image={Rental_1}
                        title="20 Coins"
                        desc="Get $20 Rental rebate"
                    />
                    <Box
                        image={Rental_2}
                        title="15 Coins"
                        desc="Get $500 Rental rebate"
                    />
                    <Box
                        image={Rental_1}
                        title="20 Coins"
                        desc="Get $20 Rental rebate"
                    />
                    <Box
                        image={Rental_2}
                        title="15 Coins"
                        desc="Get $500 Rental rebate"
                    />
                    <Box
                        image={Rental_1}
                        title="20 Coins"
                        desc="Get $20 Rental rebate"
                    />
                    <Box
                        image={Rental_2}
                        title="15 Coins"
                        desc="Get $500 Rental rebate"
                    />
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-[18px] leading-[24px] text-[#171725]">
                    Food and Beverage
                </h1>
                <div className="flex flex-row gap-[25px] overflow-x-hidden">
                    <Box
                        image={Food_1}
                        title="25 Coins"
                        desc="NTUC Fairprice $50 Voucher"
                    />
                    <Box
                        image={Food_2}
                        title="5 Coins"
                        desc="Free Cold Stone Sundae at any flavour!"
                    />
                    <Box
                        image={Food_1}
                        title="25 Coins"
                        desc="NTUC Fairprice $50 Voucher"
                    />
                    <Box
                        image={Food_2}
                        title="5 Coins"
                        desc="Free Cold Stone Sundae at any flavour!"
                    />
                    <Box
                        image={Food_1}
                        title="25 Coins"
                        desc="NTUC Fairprice $50 Voucher"
                    />
                    <Box
                        image={Food_2}
                        title="5 Coins"
                        desc="Free Cold Stone Sundae at any flavour!"
                    />
                </div>
            </div>
        </section>
    );
};

export default Content;
