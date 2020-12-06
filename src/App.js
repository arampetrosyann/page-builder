import { Typography } from "@material-ui/core";
import {
  InsertEmoticonRounded,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Editor, Frame, Element } from "@craftjs/core";
import styles from "./styles/App.module.css";
import { Header, Navigation, Main, Footer, Toolbox } from "./components";
import {
  Button,
  Text,
  Image,
  Card,
  Banner,
  Divider,
  Slideshow,
  IconButton,
  Flexbox,
} from "./components/user";
import { CardBottom } from "./components/user/Card/Card";
import { navigation, about, cards, slideshow } from "./constants";

import logo from "./assets/images/logo.png";
import imgMountain from "./assets/images/mountain.jpg";
import imgYerevan from "./assets/images/yerevan.jpg";

function App() {
  return (
    <div className={styles.app}>
      <Editor
        resolver={{
          Button,
          Text,
          Image,
          Card,
          Banner,
          Divider,
          Slideshow,
          Flexbox,
          CardBottom,
          IconButton,
        }}
      >
        <Toolbox />
        <Frame>
          <Element canvas>
            <Header>
              <Element
                is={Flexbox}
                id="box"
                justifyContent="space-between"
                alignItems="center"
                height="inherit"
                padding="0 153px"
                canvas
              >
                <Image src={logo} alt="Logo" title="Smile Travel" href="/" />
                <Navigation links={navigation} height="inherit" />
              </Element>
            </Header>

            <Main>
              <Banner src={imgMountain} height={620}>
                <Element
                  is={Flexbox}
                  id="banner1"
                  flexDirection="column"
                  margin="auto 0"
                  alignItems="center"
                  textAlign="center"
                  canvas
                >
                  <Text
                    fontSize={55}
                    fontWeight={800}
                    color="#ffffff"
                    style={{
                      margin: "14px 0",
                      textTransform: "uppercase",
                    }}
                    value="Улыбнитесь с нами"
                  />
                  <Divider />
                  <Text
                    fontSize={19}
                    color="#ffffff"
                    style={{ margin: "14px 0" }}
                    value="Приезжайте в древнюю страну Армению, где тысячелетий тому
                    назад впервые ступил Ной, где приняли Христианство раньше,
                    чем где либо. В наше время это земля, соединяющая Европу и
                    Азию, и здесь вы сможете одновременно побывать в обоих
                    континентах."
                  />
                  <Button value="О НАС" style={{ margin: "14px 0" }} />
                </Element>
              </Banner>

              <Element
                is={Flexbox}
                component="section"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                padding="16px 0 0 0"
                canvas
              >
                <Typography variant="h4" component="h2" paragraph={true}>
                  ТУРЫ В АРМЕНИЮ 2020!
                </Typography>
                <Text
                  fontSize={19}
                  fontWeight="bolder"
                  style={{ padding: "14px 0" }}
                  value="ЭКОНОМЬТЕ СВОЕ ВРЕМЯ НА ПОИСКЕ ТУРА В АРМЕНИЮ. ОТПРАВЬТЕ
                  БЕСПЛАТНУЮ ЗАЯВКУ НАМ."
                />

                <Text
                  style={{ padding: "14px 0" }}
                  value="Просто заполните одну из подходящих для вас заявок и мы в
                  течение 2-ух рабочих дней отправим самые лучшие предложения."
                />
                <Button value="Свяжитесь с нами" style={{ margin: "14px 0" }} />
              </Element>

              <Element
                is={Flexbox}
                component="section"
                flexWrap="wrap"
                padding="82px 13px 27px"
                canvas
              >
                {cards.map(({ img, heading, title, text }, ind) => {
                  return (
                    <Card
                      imageSrc={img}
                      alt={`Tour ${ind + 1}`}
                      title={title}
                      text={heading}
                      height={380}
                      style={{ padding: "12px 24px" }}
                      key={ind}
                    >
                      <Text value={text} />
                      <Button
                        value="БЕСПЛАТНАЯ ЗАЯВКА"
                        style={{ marginTop: 20 }}
                      />
                    </Card>
                  );
                })}
              </Element>

              <Element
                is={Flexbox}
                flexDirection="column"
                alignItems="center"
                padding="18px 0"
                canvas
              >
                <Divider margin="17px 0" />
                <Text
                  fontSize={20}
                  fontWeight={700}
                  value="КАДРЫ ОДНОГО ИЗ НАШИХ VIP ТУРОВ"
                />
              </Element>

              <Element
                is={Flexbox}
                alignItems="center"
                justifyContent="center"
                canvas
              >
                <Slideshow images={slideshow} width={600} height={400} />
              </Element>

              <Element
                is={Flexbox}
                flexDirection="column"
                alignItems="center"
                padding="53px 3px"
                canvas
              >
                <Text
                  fontSize={22}
                  fontWeight={700}
                  value="СПЕШИТЕ ОТПРАВИТЬ БЕСПЛАТНУЮ ЗАЯВКУ И УСПЕЙТЕ ЗАБРОНИРОВАТЬ
                  ЛУЧШИЕ ОТЕЛИ."
                />
                <Button
                  value="ОТПРАВИТЬ БЕСПЛАТНУЮ ЗАЯВКУ"
                  style={{ marginTop: 28 }}
                />
              </Element>

              <Element
                is={Flexbox}
                flexDirection="column"
                alignItems="center"
                bgcolor="#ff7c020d"
                padding="56px 42px"
                canvas
              >
                <Text
                  fontSize={33}
                  fontWeight={500}
                  style={{ padding: 17 }}
                  value="КТО МЫ И ПОЧЕМУ НАМ МОЖНО ДОВЕРИТЬСЯ?"
                />
                <Divider />

                <Element
                  is={Flexbox}
                  id="aboutboxcont"
                  alignItems="center"
                  padding="30px 110px"
                  canvas
                >
                  <Element is={Flexbox} id="abc1" flexDirection="column" canvas>
                    {about.slice(0, 3).map((text, ind) => {
                      return (
                        <Element
                          is={Flexbox}
                          id="abouts1"
                          alignItems="center"
                          padding="30px 0"
                          key={ind}
                          canvas
                        >
                          <IconButton>
                            <InsertEmoticonRounded />
                          </IconButton>
                          <Text style={{ padding: 11 }} value={text} />
                        </Element>
                      );
                    })}
                  </Element>

                  <Element
                    is={Flexbox}
                    id="abc2"
                    component="section"
                    flexDirection="column"
                    canvas
                  >
                    {about.slice(3, 6).map((text, ind) => {
                      return (
                        <Element
                          is={Flexbox}
                          id="abouts2"
                          alignItems="center"
                          padding="30px 0"
                          key={ind}
                          canvas
                        >
                          <IconButton>
                            <InsertEmoticonRounded />
                          </IconButton>
                          <Text style={{ padding: 11 }} value={text} />
                        </Element>
                      );
                    })}
                  </Element>
                </Element>
              </Element>

              <Banner src={imgYerevan} height={440}>
                <Element
                  is={Flexbox}
                  id="bannerbox2"
                  flexDirection="column"
                  alignItems="center"
                  canvas
                >
                  <Text
                    fontSize={31}
                    color="#ffffff"
                    style={{
                      margin: "14px 0",
                    }}
                    value="НАШИ ПАРТНЕРЫ"
                  />
                  <Divider />
                </Element>
              </Banner>
            </Main>

            <Footer
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 13,
              }}
            >
              <Element
                is={Flexbox}
                flexDirection="column"
                alignItems="center"
                canvas
              >
                <Text
                  fontWeight={700}
                  color="#ffffff"
                  style={{
                    margin: "14px 0",
                  }}
                  value="СВЯЖИТЕСЬ С НАМИ"
                />
                <Divider />
              </Element>

              <Element
                is={Flexbox}
                alignItems="center"
                padding="24px 4px"
                canvas
              >
                <IconButton href="https://www.facebook.com/" target="_blank">
                  <Facebook />
                </IconButton>
                <IconButton href="https://www.instagram.com/" target="_blank">
                  <Instagram />
                </IconButton>
                <IconButton href="https://www.youtube.com/" target="_blank">
                  <YouTube />
                </IconButton>
                <IconButton href="https://twitter.com/" target="_blank">
                  <Twitter />
                </IconButton>
              </Element>
            </Footer>
          </Element>
        </Frame>
      </Editor>
    </div>
  );
}

export default App;
