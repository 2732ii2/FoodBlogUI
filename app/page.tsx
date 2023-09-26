'use client';
import Image from 'next/image'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TwitterIcon from "@mui/icons-material/Twitter";
import src from "./scr.png";
import vector from "./Vector 1.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Box, Button, ChakraProvider, Flex, Heading} from "@chakra-ui/react";
import logo from "./logo.png";
import phrama from "./pharmasict-serving-customer-drug-store 1.jpg";
import locl1 from "./secbox.png";
import rec from "./Rectangle 407.png";
import r1 from "./r1.png";
import r2 from "./r2.png";
import r3 from "./r3.png";
import r4 from "./r4.png";
import r5 from "./r5.png";
import r6 from "./r6.png";

import { relative } from 'path';
import { useState } from 'react';
export default function Home() {
  var [state,setState]=useState(0);
  var list_1 = [
    {
      img_url: r1,
      title: "Grilled Tomatoes at Home",
      para: "",
    },
    {
      img_url: r2,
      title: "Snacks for Travel",
      para: "",
    },
    {
      img_url: r3,
      title: "Post-workout Recipes",
      para: "",
    },
  ];
  var list_2 = [
    {
      img_url: r4,
      title: "How To Grill Corn",
      para: "",
    },
    {
      img_url: r5,
      title: "Crunchwrap Supreme",
      para: "",
    },
    {
      img_url: r6,
      title: "Broccoli Cheese Soup",
      para: "",
    },
  ];
  return (
    <ChakraProvider>
      <Flex
        className="hello"
        // height={"100vh"}
        // width={"100%"}
        // justifyContent={"space-between"}
      >
        <Box id="insideleft">
          {" "}
          <Image
            src={logo}
            width={107}
            height={83}
            alt="Picture of the author"
          />
          <Heading id="heading">Discover the Best Food and Drinks</Heading>
          <p
            style={{
              width: "345px",
              marginTop: "5%",
              marginBottom: "12%",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "16.445px",
              fontWeight: "400",
              color: "#444957",
            }}
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button
            bg={"#E23744"}
            color={"#FFF"}
            width={190}
            height={63}
            variant={"unstyled"}
            borderRadius={40}
            fontFamily={"'Open Sans', sans-serif"}
            fontSize={18}
          >
            Explore Now!
          </Button>
        </Box>
        <Box
          id="insideright"
          width={"55%"}
          height={"100%"}
          display={"flex"}
          // border={"1px solid black"}
          justifyContent={"end"}
          position={"relative"}
          alignContent={"start"}
        >
          <div id="slit">
            <Image
              id="slitimg"
              src={locl1}
              style={{ width: "95%", height: "98%", objectFit: "cover" }}
              // height={83}
              alt="Picture of the author"
            />
          </div>
          <div
            style={{
              width: "100%",
              minWidth: "100%",
              position: "absolute",
              minHeight: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <svg
              id="imgsvg"
              widths={"100%"}
              xmlns="http://www.w3.org/2000/svg"
              height={"100%"}
              viewBox="0 0 752 839"
              fill=""
            >
              <path
                d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
                fill="#E23744"
              />
            </svg>
          </div>
        </Box>
      </Flex>

      <Flex
        id="about_us"
        width={"100%"}
        height={"65vh"}
        mt={35}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div
          id="ab_block"
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // background:
            //   "linear-gradient(rgba(30, 42, 93, .1), rgba(48, 62, 130, .1), rgba(60, 80, 157, .1))",
            background:
              "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
          }}
        >
          <Image
            id="img_abs"
            src={phrama}
            style={{ width: "25%", height: "100%", objectFit: "cover" }}
            // height={83}
            alt="Picture of the author"
          />
          <Flex
            id="flex_abs"
            flexDirection={"column"}
            alignItems={"start"}
            overflow={"hidden"}
            justifyContent={"space-between"}
            height={"70%"}
            // border={"1px solid black"}
          >
            <Heading id="head_abs" fontSize={45} fontWeight={600}>
              About US
            </Heading>
            <p
              id="p_abs"
              style={{ width: "350px", fontSize: "15px", fontWeight: "400" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <Button
              bg={"#E23744"}
              color={"#FFF"}
              minWidth={140}
              height={53}
              variant={"unstyled"}
              borderRadius={40}
              fontFamily={"'Open Sans', sans-serif"}
              fontSize={16}
            >
              Read More
            </Button>
          </Flex>
        </div>
      </Flex>
      <Flex
        width={"100%"}
        height={"90vh"}
        id="lastsecond"
        overflow={"hidden"}
        flexDirection={"column"}
      >
        <Heading
          id="ls_head"

          // border={"1px solid black"}
          // width={390}
        >
          Latest Articles
        </Heading>
        <div
          id="top_ls_head"
          style={{
            width: "100%",
            height: "75%",
            // border: "1px solid black",

            overflowX: "hidden",
            display: "flex",
            alignItems: "center",
            transition: "all .5s",
          }}
        >
          <div
            style={{
              minWidth: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: `-${state}00%`,
              // border: "1px solid black",
            }}
          >
            <div
              id="inside_ls"
              style={{
                minWidth: "90%",
                width: "80%",

                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                // border: "1px solid black",
                // marginLeft: `-${state}00%`,
              }}
            >
              {list_1.map((e, i) => {
                return (
                  <div id="ls_inside_div" key={i}>
                    <Image
                      src={e.img_url}
                      style={{
                        width: "90%",
                        marginTop: "20px",
                        height: "50%",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                      // height={83}
                      alt="Picture of the author"
                    />
                    <h2
                      style={{
                        color: "rgba(14, 35, 104, 1)",
                        width: "90%",
                        // border={"1px solid black"}
                        textAlign: "start",
                        letterSpacing: "1px",
                        marginTop: "2px",
                        fontSize: "21px",
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      {e.title}
                    </h2>
                    <p
                      style={{
                        width: "90%",
                        fontSize: "12px",
                        fontWeight: "400",
                        height: "19%",
                        overflowY: "scroll",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. t has survived not only five
                      centuries.
                    </p>
                    <div
                      style={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <Button
                        id="read_btn"
                        color={"#424961"}
                        width={131}
                        height={42}
                        variant={"unstyled"}
                        border={"1px solid #424961"}
                        borderRadius={20}
                        fontFamily={"'Open Sans', sans-serif"}
                        fontSize={16}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              minWidth: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              id="inside_ls"
              style={{
                minWidth: "90%",
                width: "80%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // marginLeft: `-${state}00%`,
              }}
            >
              {list_2.map((e, i) => {
                return (
                  <div
                    id="ls_inside_div"
                    // style={{
                    //   width: "30%",
                    //   height: "90%",
                    //   borderRadius: "20px",
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   alignItems: "center",
                    //   border: " 1.37px solid rgba(147, 162, 211, 0.38)",
                    // }}
                    key={i}
                  >
                    <Image
                      src={e.img_url}
                      style={{
                        width: "90%",
                        marginTop: "20px",
                        height: "50%",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                      // height={83}
                      alt="Picture of the author"
                    />
                    <h2
                      style={{
                        color: "rgba(14, 35, 104, 1)",
                        width: "90%",
                        // border={"1px solid black"}
                        textAlign: "start",
                        letterSpacing: "1px",
                        marginTop: "2px",
                        fontSize: "21px",
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      {e.title}
                    </h2>
                    <p
                      style={{
                        width: "90%",
                        fontSize: "12px",
                        marginTop: "5px",
                        height: "19%",
                        overflowY: "scroll",
                        marginBottom: "5px",
                        fontWeight: "400",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. t has survived not only five
                      centuries.
                    </p>
                    <div
                      style={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <Button id='read_btn'
                        color={"#424961"}
                        width={131}
                        height={42}
                        variant={"unstyled"}
                        border={"1px solid #424961"}
                        borderRadius={20}
                        fontFamily={"'Open Sans', sans-serif"}
                        fontSize={16}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardArrowLeftIcon
            onClick={() => {
              if (state == 1) {
                setState(state - 1);
              }
            }}
            style={{
              border: "1px solid black",
              padding: "1",
              borderRadius: "5px",
              marginRight: "10px",

              background: state == 1 ? "" : "rgba(0,0,0,.1)",
            }}
          />
          {state + 1}/2
          <KeyboardArrowRightIcon
            onClick={() => {
              if (state < 1) {
                setState(state + 1);
              }
            }}
            style={{
              border: "1px solid black",
              padding: "1",

              borderRadius: "5px",
              marginLeft: "10px",
              background: state == 0 ? "" : "rgba(0,0,0,.1)",
            }}
          />
        </div>
      </Flex>

      <Flex
        id="last_d"
        width={"100%"}
        overflow={"hidden"}
        height={"50vh"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <div
          style={{
            width: "25%",
            // border: "1px solid black",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            width={161}
            height={125}
            alt="Picture of the author"
          />
        </div>
        <div
          style={{
            width: "25%",
            // border: "1px solid black",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "start",
              width: "85%",
              fontSize: "18px",
              marginTop: "-100px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Contact US
          </h2>
          <p
            style={{
              width: "85%",
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p
            style={{
              width: "85%",
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            example2020@gmail.com
          </p>
          <p
            style={{
              width: "85%",
              fontSize: "14px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
          >
            (904) 443-0343
          </p>
        </div>
        <div
          style={{
            width: "20%",
            // border: "1px solid black",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "start",
              width: "85%",
              fontSize: "18px",
              marginTop: "-100px",
              marginBottom: "20px",
              fontWeight: "600",
              color: "#646874",
            }}
          >
            More
          </h2>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              width: "85%",
              color: "#646874",
            }}
          >
            About US
          </p>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "5px",
              width: "85%",
              color: "#646874",
            }}
          >
            Products
          </p>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "5px",
              width: "85%",
              color: "#646874",
            }}
          >
            Career
          </p>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "5px",
              width: "85%",
              color: "#646874",
            }}
          >
            Contact US
          </p>
        </div>
        <div
          style={{
            width: "20%",
            // border: "1px solid black",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              width: "85%",
              fontSize: "18px",
              marginTop: "-100px",
              marginBottom: "20px",
              fontWeight: "600",
              color: "#646874",
            }}
          >
            Social Links
          </h2>
          <div
            style={{
              width: "85%",
              height: "39%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "55%",
                height: "20%",
                marginLeft: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
            </div>
          </div>
          <p>© 2022 Food Truck Example</p>
        </div>
      </Flex>
    </ChakraProvider>
  );
}
