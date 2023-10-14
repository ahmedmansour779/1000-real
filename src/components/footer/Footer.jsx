import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import color from "../../style/config";
import { FooterContainer, FooterWrapper, IconsFooter } from "../../style/footer";

export default function Footer() {
    let currentYear = new Date().getFullYear()

    return (
        <FooterWrapper>
            <FooterContainer>
                <div>
                    © {currentYear} Qode Interactive, All Rights Reserved
                </div>
                <IconsFooter>
                    <a href='https://www.facebook.com/ahmed.mask.184'>
                        <IconBrandFacebook color={color.white} />
                    </a>
                    <a href='https://twitter.com/ahmedma66567002'>
                        <IconBrandTwitter color={color.white} />
                    </a>
                    <a href='https://www.linkedin.com/in/ahmed-mansour-b6b407213/'>
                        <IconBrandLinkedin color={color.white} />
                    </a>
                    <a href='https://www.youtube.com/channel/UC2is6EFgtUfFbDZbbDwYIoQ'>
                        <IconBrandYoutube color={color.white} />
                    </a>
                </IconsFooter>
            </FooterContainer>
        </FooterWrapper>
    )
}
