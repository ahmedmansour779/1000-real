import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeaderFlex, HeaderWrapper } from "../../style/header";

export default function Header() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeaderWrapper>
                <div className="container">
                    <HeaderFlex>
                        <HeaderFlex shadow={true}>
                            <Link to="/"><span>1000</span></Link>
                            <Link to="/"><span>ريال</span></Link>
                        </HeaderFlex>
                        <HeaderFlex gap="true">

                            <Link to="/about-us"><p>حولنا</p></Link>
                            <Link to="/service"><p>خدماتنا</p></Link>

                        </HeaderFlex>
                    </HeaderFlex>
                </div>
            </HeaderWrapper>
        </motion.div>
    )
}
