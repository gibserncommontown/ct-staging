import Description from "./Description"

const TabData = [
  //{ to: "/showcase/", title: "All" },
  { to: "/showcase/commonacademy/", title: "CommonAcademy" },
  { to: "/showcase/qoqolo/", title: "Qoqolo" },
  { to: "/showcase/swiiit/", title: "SWIIIT" },
  { to: "/showcase/eldercare/", title: "Eldercare" },
]

// Little Skool-House got 2, swiiit and qoqolo
const commonadademyContent = [
  {
    name: "Integrated Mother Tongue Languages Portal",
    link: "#",
    description:
      "The Integrated Mother Tongue Languages Portal (iMTL) promotes the learning of Mother Tongue Languages through online learning and collaboration.\n      \n      \n      The iMTL Portal offers a shift from passive learning to active learning via many collaborative features, including mind-mapping and the Collaborative Canvas, to foster the joy of learning MTLs amongst students.",
    type: "commonacademy",
    cover: require('./images/commonacademy/integrated-mother-tongue-languages-portal.jpg'),
    hover: require('./images/commonacademy/integrated-mother-tongue-languages-portal.jpg'),
  },
  {
    name: "PesonaEdu",
    link: "#",
    description: "",
    type: "commonacademy",
    cover: require('./images/commonacademy/PesonaEdu.jpg'),
    hover: require('./images/commonacademy/PesonaEdu.jpg'),
  },

]

const qoqoloContent = [
  {
    name: "My First Skool",
    link: "https://www.myfirstskool.com/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 1.1_Myfirstskool.jpg"),
    hover: require("./images/qoqolo/Row 1.1_Myfirstskool.jpg"),
  },
  {
    name: "Mamre Oaks",
    link: "https://www.mamreoaks.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Mamre oaks.png"),
    hover: require("./images/qoqolo/Mamre oaks.png"),
  },
  {
    name: "Star Learners",
    link: "https://starlearners.com.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 1.3_Starlearners.jpg"),
    hover: require("./images/qoqolo/Row 1.3_Starlearners.jpg"),
  },
  {
    name: "British Council Pre School",
    link: "https://www.britishcouncil.sg/pre-school",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 2.1_British Council.jpg"),
    hover: require("./images/qoqolo/Row 2.1_British Council.jpg"),
  },
  {
    name: "Far Eastern Kindergarten",
    link: "https://www.lifebpc.com/fekedu/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 2.2_Far Eastern Kindergarten.jpg"),
    hover: require("./images/qoqolo/Row 2.2_Far Eastern Kindergarten.jpg"),
  },
  {
    name: "FinlandWay®",
    link: "https://finlandwayschools.com/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 2.3_Finlandway.jpg"),
    hover: require("./images/qoqolo/Row 2.3_Finlandway.jpg"),
  },
  {
    name: "Cornerstone Community Church",
    link: "https://www.cscc.org.sg/childrens-church/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 3.1_Cornerstonekidz.jpg"),
    hover: require("./images/qoqolo/Row 3.1_Cornerstonekidz.jpg"),
  },
  {
    name: "Invictus International School",
    link: "https://www.invictus.school/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Invictus.png"),
    hover: require("./images/qoqolo/Invictus.png"),
  },
  {
    name: "Jamiyah Singapore",
    link: "http://jk.jamiyah.org.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 3.3_jamiyah.jpg"),
    hover: require("./images/qoqolo/Row 3.3_jamiyah.jpg"),
  },

  {
    name: "Chiltern House Preschool",
    link: "https://www.chilternhouse.com.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Chiltern House.png"),
    hover: require("./images/qoqolo/Chiltern House.png"),
  },

  {
    name: "Pentecost Methodist",
    link: "http://kindergarten.pmc.org.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Row 4.2_Pentecost Methodist Church Kindergarten.jpg"),
    hover: require("./images/qoqolo/Row 4.2_Pentecost Methodist Church Kindergarten.jpg"),
  },

  {
    name: "Primus Schoolhouse",
    link: "https://primus.edu.sg/",
    description: "",
    type: "qoqolo",
    cover: require("./images/qoqolo/Primus Schoolhouse.png"),
    hover: require("./images/qoqolo/Primus Schoolhouse.png"),
  },
]

const swiiitContent = [
  {
    name: "Raffles Girls School",
    link: "https://www.rgs.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 1.1_Raffles Girls .jpg"),
    hover: require("./images/swiiit/Row 1.1_Raffles Girls .jpg"),
  },
  {
    name: "Yishun Town Secondary School",
    link: "https://yishuntownsec.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 1.2_Yishun Town.jpg"),
    hover: require("./images/swiiit/Row 1.2_Yishun Town.jpg"),
  },

  {
    name: "Pei Hwa Presbyterian Primary School",
    link: "https://peihwapresbyterianpri.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 1.3_Pei Hwa.jpg"),
    hover: require("./images/swiiit/Row 1.3_Pei Hwa.jpg"),
  },

  {
    name: "Maris Stella High School",
    link: "https://marisstellahigh.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 2.1_Maris Stella High.jpg"),
    hover: require("./images/swiiit/Row 2.1_Maris Stella High.jpg"),
  },

  {
    name: "Canossa Catholic Primary",
    link: "https://canossacatholicpri.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 2.2_Canossa Catholic.jpg"),
    hover: require("./images/swiiit/Row 2.2_Canossa Catholic.jpg"),
  },

  {
    name: "Pei Tong Primary",
    link: "https://peitongpri.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 2.3_Pei Tong.jpg"),
    hover: require("./images/swiiit/Row 2.3_Pei Tong.jpg"),
  },

  {
    name: "Junyuan Secondary",
    link: "https://junyuansec.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 3.1_Junyan Sec.jpg"),
    hover: require("./images/swiiit/Row 3.1_Junyan Sec.jpg"),
  },

  {
    name: "Dunman Secondary School",
    link: "https://dunmansec.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 3.2_Dunman Sec.jpg"),
    hover: require("./images/swiiit/Row 3.2_Dunman Sec.jpg"),
  },

  {
    name: "Ahmad Ibrahim Secondary School",
    link: "https://ahmadibrahimsec.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 3.3_ahmadibrahimsec.jpg"),
    hover: require("./images/swiiit/Row 3.3_ahmadibrahimsec.jpg"),
  },

  // {
  //   name: "Nanyang Junior College",
  //   link: "https://nanyangjc.moe.edu.sg/",
  //   description: "",
  //   type: "swiiit",
  //   cover: require("./images/swiiit/Row 4.1_Nanyang JC.jpg"),
  //   hover: require("./images/swiiit/Row 4.1_Nanyang JC.jpg"),
  // },

  {
    name: "Tampines Meridian Junior College",
    link: "https://tmjc.moe.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 4.2_TMJC.jpg"),
    hover: require("./images/swiiit/Row 4.2_TMJC.jpg"),
  },

  {
    name: "NUS High School of Mathematics and Science",
    link: "https://www.nushigh.edu.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Row 4.3_NUS High.jpg"),
    hover: require("./images/swiiit/Row 4.3_NUS High.jpg"),
  },

  {
    name: "Singapore Airshow",
    link: "https://www.singaporeairshow.com/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Singapore Airshow.png"),
    hover: require("./images/swiiit/Singapore Airshow.png"),
  },

  {
    name: "Singapore International Water Week",
    link: "https://www.siww.com.sg/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/Singapore International Water Week.png"),
    hover: require("./images/swiiit/Singapore International Water Week.png"),
  },

  {
    name: "IMDEX Asia",
    link: "https://www.imdexasia.com/",
    description: "",
    type: "swiiit",
    cover: require("./images/swiiit/IMDEX Asia.png"),
    hover: require("./images/swiiit/IMDEX Asia.png"),
  },

]

const eldercareContent = [
  {
    name: "Active Global Specialised Caregivers Singapore",
    link: "https://www.activeglobalcaregiver.sg",
    description: "",
    type: "eldercare",
    cover: require("./images/eldercare/ActiveGlobal.jpg"),
    hover: require("./images/eldercare/ActiveGlobal.jpg"),
  },
  {
    name: "St Luke's Eldercare",
    link: "https://www.slec.org.sg/",
    description: "",
    type: "eldercare",
    cover: require("./images/eldercare/st-like-eldercare.png"),
    hover: require("./images/eldercare/st-like-eldercare.png"),
  },

]

export {
  TabData,
  commonadademyContent,
  qoqoloContent,
  swiiitContent,
  eldercareContent,
  Description,
}
