import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "../../style/toUp";

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && <Button onClick={scrollToTop}>
                <IconArrowUp size={35} />
            </Button>}
        </>
    );
}

export default ScrollToTopButton;