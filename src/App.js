import logo from "./logo.png";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";
import six from "./six.png";
import seven from "./seven.png";
import eight from "./eight.png";
import nine from "./nine.png";
import plus from "./plus.png";
import menu from "./menu.png";
import sign from "./sign.png";
import "./App.css";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SearchOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
const TopDiv = styled.div`
  background-color: #e2e6e7;
  height: 3rem;
  display: flex;
`;
const Navbar = styled.div`
  height: 7rem;
`;
const MainDiv = styled.div`
  background-color: #e2e6e7;
  height: 36rem;
`;
const MainHeading = styled.h1`
  font-size: 5rem;
  margin: 0.8rem auto;
`;
const OngoingDiv = styled.div`
  background-color: #2c2c2c;
  height: 43rem;
  padding-left: 7rem;
`;
const NumberDiv = styled.div`
  height: ${(props) => (props.primary ? "13rem" : "30rem")};
`;
const CompletedDiv = styled.div`
  background-color: #e2e6e7;
  height: 36rem;
  padding: 7rem 4rem 1rem 11rem;
`;
const Footer = styled.div`
  background-color: #2c2c2c;
  height: 34rem;
  color: white;
`;
const LastFooter = styled.div`
  background-color: #2c2c2c;
  height: 4rem;
  bottom: 0;
  margin-top: -1rem;
`;
const LightBlack = styled.h5`
  font-size: 1.5rem;
  line-height: 0;
  margin: 1.5rem 0 0 0;
`;
const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1;
`;
const RedHeading = styled.h5`
  font-size: 1.3rem;
  color: red;
  line-height: 0.1;
  padding: 0;
  margin: 3rem 0 0 0;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 37rem;
`;
const RedButton = styled(Button)`
  background: red;
  border: 0;
  font-size: 1.2rem;
  padding: 0.4rem;
`;
const Image = styled.img``;
const WrittenDiv = styled.div`
  text-align: left;
  padding-left: 6rem;
`;
const MainRow = styled(Row)`
  display: flex;
  padding: ${(props) => (props.primary ? "0rem" : "3rem")};
`;
const NavRow = styled(Row)`
  display: flex;
`;
const GreyHeading = styled.h3`
  color: #bfc1c2;
  padding: ${(props) => (props.primary ? "1rem" : "0rem")};
`;
const WhiteHeading = styled.h1`
  font-weight: 300;
`;
const WhitePara = styled.p`
  width: 19rem;
  font-size: 1.1rem;
  line-height: 1.5;
`;
const WhiteText = styled.h3`
  font-weight: 400;
  line-height: 1;
  font-size: 1rem;
`;
const LeftCol = styled(Col)`
  text-align: ${(props) => (props.right ? "right" : "left")};
  padding-left: ${(props) => (props.primary ? "10rem" : "2rem")};

  margin-left: ${(props) => props.margin || "-2rem"};
`;
const BigHeading = styled.h1`
  color: white;
  font-size: 4rem;
  text-align: left;
  margin: 5rem 2.5rem 1rem 2.5rem;
  padding-top: 4rem;
`;
const RedText = styled.h3`
  color: red;
  font-size: 1.5rem;
`;
const BlackHeading = styled.h3`
  font-size: 2rem;
  margin: 0;
`;
const ArrowDiv = styled.div`
  background-color: black;
  width: 2rem;
  height: 2.5rem;
  margin-top: -8rem;

  &.slick-prev:before {
    content: "￩";
    color: white;
    padding: 0.5rem;
    font-size: 29px;
  }
  &.slick-next {
    right: unset;
    &:before {
      content: "￫";
      color: white;
      padding: 0.5rem;
      font-size: 29px;
    }
  }
  &:active {
    background-color: red;
  }
  &:hover {
    background-color: red;
  }
`;
const NavDiv = styled.div`
  padding: 1rem;
`;
const NavHeading = styled.h3`
  color: #bfc1c2;
`;
const NavCol = styled(Col)`
  border-left: 1px solid grey;
`;
const TextDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;
function App() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <ArrowDiv />,
    prevArrow: <ArrowDiv />,
  };

  const singleSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <TopDiv>
        <TextDiv>
          <GreyHeading style={{ marginTop: 13, marginLeft: 30 }}>
            <PhoneOutlined /> +91 80 2286 8093 / 2286 8094 / 2286 8095
          </GreyHeading>
          <GreyHeading style={{ marginLeft: 30, marginTop: 13 }}>
            <MailOutlined /> info@sterlingstatesindia.com
          </GreyHeading>
        </TextDiv>
        <img src={sign} alt={sign} />
      </TopDiv>
      <Navbar>
        <NavRow>
          <LeftCol>
            <img src={logo} alt={logo} />
          </LeftCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Ongoing Projects</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Completed Projects</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Upcoming Projects</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Joint Development</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Real Estates</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>About Us</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>Contact Us</NavHeading>
            </NavDiv>
          </NavCol>
          <NavCol>
            <NavDiv>
              <NavHeading>
                <SearchOutlined />
              </NavHeading>
            </NavDiv>
          </NavCol>
          <LeftCol>
            <img src={menu} alt={menu} />
          </LeftCol>
        </NavRow>
      </Navbar>
      <Slider {...singleSettings}>
        <MainDiv>
          <MainRow>
            <LeftCol>
              <LightBlack>Welcome To Zafar's Sterling Estates</LightBlack>
              <MainHeading>BUILDING A LUXURIOUS TOMORROW</MainHeading>
              <Paragraph>
                With over 3 decades of construction, Zafar Sterling Estate is
                India's one of the most promissing construction company
              </Paragraph>
              <RedButton>Read More</RedButton>
            </LeftCol>
            <LeftCol>
              <img src={nine} alt={nine} />
            </LeftCol>
          </MainRow>
        </MainDiv>
        <MainDiv>
          <MainRow>
            <LeftCol>
              <LightBlack>Welcome To Zafar's Sterling Estates</LightBlack>
              <MainHeading>BUILDING A LUXURIOUS TOMORROW</MainHeading>
              <Paragraph>
                With over 3 decades of construction, Zafar Sterling Estate is
                India's one of the most promissing construction company
              </Paragraph>
              <RedButton>Read More</RedButton>
            </LeftCol>
            <LeftCol>
              <img src={nine} alt={nine} />
            </LeftCol>
          </MainRow>
        </MainDiv>
        <MainDiv>
          <MainRow>
            <LeftCol>
              <LightBlack>Welcome To Zafar's Sterling Estates</LightBlack>
              <MainHeading>BUILDING A LUXURIOUS TOMORROW</MainHeading>
              <Paragraph>
                With over 3 decades of construction, Zafar Sterling Estate is
                India's one of the most promissing construction company
              </Paragraph>
              <RedButton>Read More</RedButton>
            </LeftCol>
            <LeftCol>
              <img src={nine} alt={nine} />
            </LeftCol>
          </MainRow>
        </MainDiv>
      </Slider>
      <NumberDiv>
        <MainRow>
          <Col>
            <Image src={one} />
          </Col>
          <Col>
            <WrittenDiv>
              <LightBlack>About Us</LightBlack>
              <Heading>33 YEAR OF DELIVERING LUXURY</Heading>
              <RedHeading>Building Success One Day At a Time</RedHeading>
              <Paragraph>
                Incorporated in the year 1988, Zaffar' Sterling Estate is today
                one of the Banglore's most respected developers in the market.
                Over the years under the leadership of its Managing Director
                Zaffar Fiaz, Sterling Estate has built a reputation that is
                grounded in its corporate vision, mission and philosophy of
                life.
              </Paragraph>
              <RedButton>Read More</RedButton>
            </WrittenDiv>
          </Col>
        </MainRow>
      </NumberDiv>
      <OngoingDiv>
        <BigHeading>Ongoing Project</BigHeading>
        <NavRow>
          <LeftCol>
            <img src={two} alt={two} />
            <RedText>Sterling Snow Drop</RedText>
            <GreyHeading>Frazer Town, Off Hennur Road, Banglore</GreyHeading>
          </LeftCol>
          <LeftCol margin="1rem">
            <img src={three} alt={three} />
            <RedText>Sterling Hyde Park</RedText>
            <GreyHeading>Devanhalli - VijayPuraRoad, Banglore</GreyHeading>
          </LeftCol>
        </NavRow>
      </OngoingDiv>
      <NumberDiv primary>
        <MainRow>
          <LeftCol right margin="4rem">
            <BlackHeading>33 YEARS</BlackHeading>
            <LightBlack>of Existence</LightBlack>
          </LeftCol>
          <LeftCol right margin="4rem">
            <BlackHeading>17 PROJECTS</BlackHeading>
            <LightBlack>of Repute</LightBlack>
          </LeftCol>
          <LeftCol right margin="4rem">
            <BlackHeading>2K+ CUSTOMERS</BlackHeading>
            <LightBlack>with Happiness</LightBlack>
          </LeftCol>
          <LeftCol right margin="4rem">
            <BlackHeading>1 MOTTO</BlackHeading>
            <LightBlack>of exceeding client expecattions</LightBlack>
          </LeftCol>
        </MainRow>
      </NumberDiv>
      <CompletedDiv>
        <Slider {...settings}>
          <LeftCol>
            <img src={four} alt={four} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>
          <LeftCol>
            <img src={five} alt={five} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>
          <LeftCol>
            <img src={four} alt={four} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>
          <LeftCol>
            <img src={five} alt={five} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>{" "}
          <LeftCol>
            <img src={four} alt={four} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>
          <LeftCol>
            <img src={five} alt={five} />
            <LightBlack>Sterling Finsbury Park</LightBlack>
            <GreyHeading>Haudin Road, Banglore</GreyHeading>
            <img src={plus} alt={plus} />
          </LeftCol>
        </Slider>
      </CompletedDiv>
      <Footer>
        <MainRow>
          <LeftCol>
            <WhiteHeading>About Zaffar Sterling Estates</WhiteHeading>
            <img src={six} alt={logo} />
            <WhitePara>
              With over 3 decades of construction, Zaffer Sterling Estates is
              India's one of the most promising construction company
            </WhitePara>
            <WhiteText>Read More</WhiteText>
          </LeftCol>
          <LeftCol primary>
            <WhiteHeading>Quick Links</WhiteHeading>
            <WhiteText>Sterling Snow Drop</WhiteText>
            <WhiteText>Sterling Hyde Park</WhiteText>
            <WhiteText>Completed Project</WhiteText>
            <WhiteText>About Us</WhiteText>
            <WhiteText>Careers</WhiteText>
            <WhiteText>Joint Development</WhiteText>
            <WhiteText>Turn Key Projects</WhiteText>
            <WhiteText>Resale & Rental</WhiteText>
            <WhiteText>Hospitality</WhiteText>
            <WhiteText>Latest News</WhiteText>
            <WhiteText>Blogs</WhiteText>
            <WhiteText>Contact Us</WhiteText>
          </LeftCol>
          <LeftCol primary>
            <WhiteHeading>Our Brands</WhiteHeading>
            <MainRow primary>
              <LeftCol>
                <img src={seven} alt={seven} />
                <WhiteText>Sterling Properties</WhiteText>
              </LeftCol>
              <LeftCol margin="1rem">
                <img src={eight} alt={eight} />
                <WhiteText>Sterling Suits</WhiteText>
              </LeftCol>
            </MainRow>
          </LeftCol>
        </MainRow>
      </Footer>
      <LastFooter>
        <GreyHeading primary>
          CopyRight 2021, Zaffar' Sterling Estate Private Limited. All Rights
          Reserved
        </GreyHeading>
      </LastFooter>
    </div>
  );
}

export default App;
