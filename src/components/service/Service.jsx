import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from 'react';
import data from '../../data/data';
import { Model, ModelWrapper } from '../../style/Model';
import { Card, Header, ServerWrapper, ServiceContainer } from "../../style/service";

export default function Service(props) {
    const [show, setShow] = useState(false)
    const [content, setContent] = useState(1)
    // eslint-disable-next-line react/prop-types
    const { paddingTop } = props;

    const hideModel = () => {
        setShow(false)
    }

    const showContent = (id) => {
        setContent(id)
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ServerWrapper padding={paddingTop}>
                <ServiceContainer>
                    <Header>
                        <IconArrowBadgeLeftFilled size={40} />
                        <div>ماذا نقدم؟</div>
                        <IconArrowBadgeRightFilled size={40} />
                    </Header>
                    <div>
                        <Carousel
                            height={200}
                            slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                            slideGap="md"
                            controlsOffset="xs"
                            dragFree
                            controlSize={25}
                            loop
                            slidesToScroll={1}
                        >
                            {
                                data.map((item, index) => {
                                    return (
                                        <Carousel.Slide key={index}>
                                            <Card onClick={() => { showContent(index); setShow(true) }}>
                                                <img src={item.image} alt={item.title} />
                                                <b onClick={() => { showContent(index); setShow(true) }} className='details'>تفاصيل</b>
                                            </Card>
                                        </Carousel.Slide>
                                    )
                                })
                            }
                        </Carousel>
                        <ModelWrapper onClick={hideModel} style={{ display: show ? "block" : "none" }}>{content}</ModelWrapper>
                        <Model display={show} >
                            <button onClick={hideModel}><IconX /></button>
                            <h3>{data[content].title}</h3>
                            <p>{data[content].description}</p>
                        </Model>
                    </div>
                </ServiceContainer>
            </ServerWrapper>
        </motion.div>
    )
}
