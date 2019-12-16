import React from 'react';
import {Wrapper, Heading, Paragraph,SubHeading} from '../components/styled'
function Russellandbromley(){
    return(
        <Wrapper>
            <Heading>Russell and Bromley</Heading>
                <Paragraph>
                    My work with <strong style={{color:"red"}}>Russell and Bromley</strong> has mainly been an ongoing collaboration with Oracle involving development of my <strong style={{color:"red"}}>eCommerce</strong> knowledge whilst simultaneously learning how to use the <strong style={{color:"red"}}>Oracle Commerce Cloud</strong> along with <strong style={{color:"red"}}>Knockout.js</strong>, all of which I've successfully managed to achieve. A lot of my work was debugging the website and regression testing to ensure every change had no side effects elsewhere (which was surprisingly common). This gave me a lot of ideas for side projects.
                </Paragraph>
                <SubHeading>Data Extraction/Processing Automation</SubHeading>
                <Paragraph>
                    The first thing I noticed was that a lot of manual data extraction was being performed on the commerce cloud. Safe in the knowledge I'd eventually expand upon this idea, I built an <strong style={{color:"red"}}>Express.js</strong> application to extract data from Oracle via the <strong style={{color:"red"}}>Request</strong> module. Coupled with a <strong style={{color:"red"}}>React</strong> interface, people are now able to extract data in seconds rather than days and can generate CSV files at the click of a button. The admin also has a console through which he can create, delete and adjust the administrative rights of users via a series of endpoints connected to a <strong style={{color:"red"}}>PostgreSQL</strong> database. Additional dependencies used in this project include <strong style={{color:"red"}}>Passport</strong>,<strong style={{color:"red"}}>Redux</strong> & <strong style={{color:"red"}}>Styled Components</strong>
                </Paragraph>
                <SubHeading>Variance Automation</SubHeading>
                <Paragraph>
                    Another extension of the application described above is a stock comparison tool. One of the featured endpoints accepts 2 CSV files pertaining to both the commerce cloud and the warehouse stock levels. After the comparison is performed, the tool then generates a log file containing the variance and carries out the appropriate API requests to ensure the stock on the cloud matches that of the warehouse.
                </Paragraph>
                <SubHeading>Order Automation</SubHeading>
                <Paragraph>
                    UAT for software version updates involved placing orders. After performing a few orders it becomes immediately obvious that it's a fairly mechanical task containing a systematic series of steps. This led me to believe that it was automatable. After doing a little bit of research I stumbled upon <strong style={{color:"red"}}>Selenium</strong> and managed to automate the entire process and speed the process up massively using <strong style={{color:"red"}}>Promise.all</strong>. The tool accepts a CSV file containing various details such as browser, product to be purchased and produces a CSV file containing the order number and the the date of the order.
                </Paragraph>
                <SubHeading>Regression Test Automation</SubHeading>
                <Paragraph>
                    After the order automation, I began to realise how useful Selenium was. I realised I could automate regression testing to a degree. I did this in collaboration with another colleague using <strong style={{color:"red"}}>Python</strong> and <strong style={{color:"red"}}>Selenium</strong>. We also agreed it'd be more useful if we created our own testing suite to perform these tests and managed to address many of the issues I faced during the Orders Automation project which included the issue of a Spinner which occasionally interefered with click events and caused excessive waiting times. However, these tests can only be performed on desktop. A new project of mine is to figure out Appium and use it to carry out Python/Selenium regression tests on mobile devices.
                </Paragraph>
        </Wrapper>
    )
}


export default Russellandbromley;
