import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AboutContainer, AboutUsWrapper, Body, Header } from "../../style/aboutUs";

export default function AboutUs(props) {
    // eslint-disable-next-line react/prop-types
    const { color, padding, background } = props;

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AboutUsWrapper id="aboutUs" background={background} padding={padding} colorText={color} >
                <AboutContainer>
                    <Header>
                        <IconArrowBadgeLeftFilled size={40} />
                        <div>من نحن؟</div>
                        <IconArrowBadgeRightFilled size={40} />
                    </Header>
                    <Body>
                        <div>
                            نحن نقدم افضل الخدمات الخاصة بالتسويق الرقمي حيث اننا نضم افضل الكوادر المتخصصة في تقديم حلول تسويقية متكاملة، نوفر العديد من الخدمات المختلفة على منصات السوشيال ميديا سواء على منصات اليوتيوب و تيك توك والمواقع الإلكترونية ومحرك البحث جوجل
                        </div>
                        <div>
                            تتمتع 1000 ريال بخبرة واسعة لذا نحن على دراية بأهمية التسويق الرقمي الذي يساعد على تعزيز الوعي بالعلامة التجارية وزيادة الوصول إلى الجمهور المستهدف لكل عملائنا وتحقيق الكثير من الأرباح في وقت قياسي، فيما يلي سوف نوضح كافة الخدمات التي نقدمها بأسعار تنافسية والتي تصل إلى 1000 ريال لأي خدمة
                        </div>
                        <div>
                            وبناءا على ذلك لدينا في 1000 ريال فريق متخصص من المسوقين الرقميين الذين يتمتعون بالمهارات والخبرات اللازمة لتحقيق نجاح حملات التسويق الرقمي ونهتم بتقديم خدمات عالية الجودة وفقًا لمتطلبات العميل، ونسعى  جاهدين للاستفادة من استثمارات التسويق
                        </div>
                        <div>
                            شركتنا توفر حلول شاملة للتسويق الرقمي من خلال منصات اليوتيوب و تيك توك والمواقع الإلكترونية وجوجل وذلك بفضل فريقنا المتخصص والخبرة الواسعة التي تعمل على تحقيق هدف العميل بمبلغ يصل الى 1000 ريال، يمكننا تقديم أي من الخدمات المذكورة بشكل شامل وفقًا لاحتياجات العملاء ومتطلباتهم
                        </div>
                        <div>
                            نحن نتطلع إلى العمل معك ومساعدتك على تعزيز تواجدك الرقمي وتحقيق نجاحك في مجال التسويق الرقمي ،لا تتردد في الاتصال بنا للحصول على مزيد من المعلومات أو لطلب خدماتنا
                        </div>
                    </Body>
                </AboutContainer>
            </AboutUsWrapper>
        </motion.div>
    )
}
