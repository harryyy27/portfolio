import React from 'react'
import { Wrapper, Paragraph, Heading,SubHeading, Image,Figure,Caption,ComponentWrapper } from '../components/styled'
import nader from './img/nader.jpg'
import starry_day from './img/starry_day1.png'
import starry_night from './img/starry_night.jpeg'
import jacob from './img/jacobs.png'
const DeepLearning =(props)=>{
        return(
            <Wrapper open={props.burgerOpen}>
                <Heading>Keras</Heading>
                <SubHeading>Where am I now?</SubHeading>
                <Paragraph>I have also completed a number of projects with <strong style={{color:"red"}}>Keras</strong>, mainly from the book Deep Learning with <strong style={{color:"red"}}>Python</strong>. It's given me a broad high level overview of deep learning. I now feel like I know what's possible and where to begin projects that require either <strong style={{color:"red"}}>machine learning</strong> or <strong style={{color:"red"}}>deep learning</strong>. It also gave me a very useful overview of some of the techniques available for <strong style={{color:"red"}}>optimizing</strong> neural networks such as <strong style={{color:"red"}}>ensembling</strong> and a number of methods for preventing <strong style={{color:"red"}}>overfitting</strong>.</Paragraph>
                
                <SubHeading>What's next?</SubHeading>
                <Paragraph>
                The next step is gaining a low level understanding by studying <strong style={{color:"red"}}>inear algebra</strong>l (for which I am also book ready!). I have also nearly finished my first <strong style={{color:"red"}}>Kaggle</strong> project! Stay tuned!!! The ultimate aim really is to get to such a level where research journals/papers are readable to me.</Paragraph>

                <SubHeading>A few examples</SubHeading>
                <Paragraph>Until I figure out the best way to share my work, I am unfortunately limited to sharing only the results with you. Below is an image I created through <strong style={{color:"red"}}>Neural Style Transfer</strong>. This technique involves taking the top layers of a network that has studying the stroke patterns from the Van Goth painting starry night and a picture of a friend of mine.</Paragraph>
                <ComponentWrapper space="justify">
                    <Figure>
                        <Image src={starry_night} alt="starry night"/>
                        <Caption>Starry night</Caption>
                    </Figure>
                    <Figure>
                        <Image src={nader} alt="nader"/>
                        <Caption>My buddy</Caption>
                    </Figure>
                </ComponentWrapper>
                <Paragraph>
                    Using Neural Style Transfer, the 2 images were spliced together as follows!
                </Paragraph>
                <Figure>
                        <Image src={starry_day} alt="starry day"/>
                        <Caption>Starry day</Caption>
                    </Figure>
                <Paragraph>
                    Another labrat :)
                </Paragraph>
                <Figure>
                        <Image src={jacob} alt="jacob"/>
                        <Caption>Jacob</Caption>
                    </Figure>
                
                <Paragraph>
                    Further examples available upon request!
                </Paragraph>
            </Wrapper>
        )
    
}

export default DeepLearning;