import { motion } from "framer-motion";
import { HeaderFlex, HeaderWrapper } from "../../style/header";

export default function Header() {
    return (
        <HeaderWrapper>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <HeaderFlex>
                        <HeaderFlex >
                            <span>1000</span>
                            <span>ريال</span>
                        </HeaderFlex>
                        <HeaderFlex gap>
                            <p>حولنا</p>
                            <p>خدماتنا</p>
                        </HeaderFlex>
                    </HeaderFlex>
                </div>
            </motion.div>
        </HeaderWrapper>
    )
}
