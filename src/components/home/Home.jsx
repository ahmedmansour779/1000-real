import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Buttons, HomeContainer, HomeWrapper, Text } from "../../style/home";

export default function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HomeWrapper>
                <HomeContainer>
                    <Buttons>
                        <Link to="/service"><Button>ماذا نقدم؟</Button></Link>
                        <Link to="/about-us"><Button>من نحن؟</Button></Link>
                    </Buttons>
                    <Text>نحن نتطلع إلى العمل معك ومساعدتك على تعزيز تواجدك الرقمي وتحقيق نجاحك في مجال التسويق الرقمي</Text>
                </HomeContainer>
            </HomeWrapper>
        </motion.div>
    )
}
