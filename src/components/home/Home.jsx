import { Button, Buttons, HomeCenter, HomeWrapper, Text } from "../../style/home";

export default function Home() {
    return (
        <HomeWrapper>
            <HomeCenter className="countainer">
                <Buttons>
                    <Button>ماذا نقدم؟</Button>
                    <Button>من نحن؟</Button>
                </Buttons>
                <Text>نحن نتطلع إلى العمل معك ومساعدتك على تعزيز تواجدك الرقمي وتحقيق نجاحك في مجال التسويق الرقمي</Text>
            </HomeCenter>
        </HomeWrapper>
    )
}
