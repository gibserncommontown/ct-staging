"use strict";(self.webpackChunkcommon_town=self.webpackChunkcommon_town||[]).push([[8145],{1939:function(e,t,n){n.d(t,{Z:function(){return q}});var l=n(7294),a=n(5414);function r(e){var t=e.description,n=void 0===t?"":t,r=e.lang,o=e.meta,i=e.title,c=n;return l.createElement(a.Z,{htmlAttributes:{lang:r},title:i,titleTemplate:"%s | CommonTown",meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@gibsernkoh"},{name:"twitter:title",content:i},{name:"twitter:description",content:c},{}].concat(o)})}r.defaultProps={lang:"en",meta:[],description:""};var o=r,i=n(5444),c=n(1720),s=function(){return l.createElement(i.Link,{id:"logo",to:"/",alt:"Common Town"},l.createElement("img",{src:c.Z,alt:"Common Town"}))},m=function(){return l.createElement("div",{className:"header-links"},u.map((function(e){var t=Object.assign({},e,{children:e.alt,className:"link-level-1",activeClassName:"active",partiallyActive:!0}),n=e.children,a=void 0===n?[]:n;return l.createElement("div",{className:"header-link-wrapper"+(a.length?" has-child":""),key:e.key},l.createElement(i.Link,t),a.length?l.createElement("div",{className:"header-link-dropdown"},a.map((function(e){var t=Object.assign({},e,{children:e.alt,className:"link-level-2",activeClassName:"active"});return l.createElement(i.Link,t)}))):null)})))},d=function(){return l.createElement("label",{className:"headerBurger",htmlFor:"headerBurger"},l.createElement("div",{className:"line-wrapper"},l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)))},u=[{key:1,alt:"About Us",to:"/about-us/",children:[].concat([{key:13,alt:"Key Achievements",to:"/about-us/key-achievements/"},{key:12,alt:"Board Members",to:"/about-us/board-members/"},{key:14,alt:"Our Culture",to:"/about-us/our-culture/"}])},{key:2,alt:"Products",to:"/products/",children:[].concat([{key:21,alt:"Swiiit",to:"/products/swiiit/"},{key:22,alt:"CommonAcademy",to:"/products/commonacademy/"},{key:23,alt:"Qoqolo",to:"/products/qoqolo/"},{key:25,alt:"Dudu",to:"/products/dudu/"},{key:27,alt:"Vatitude",to:"/products/vatitude/"}])},{key:21,alt:"News",to:"/news"},{key:3,alt:"Showcase",to:"/showcase/"},{key:4,alt:"Career",to:"/career/"},{key:5,alt:"Contact Us",to:"/contact-us/"}],E=function(e){var t=e.headerOverlay,n=void 0!==t&&t?"headerOverlay":"";return l.createElement("header",{className:n},l.createElement("div",{className:"container"},l.createElement("input",{type:"checkbox",className:"hidden",id:"headerBurger"}),l.createElement(s,null),l.createElement(d,null),l.createElement(m,null)))},p=n(9425),h=n(8204),f=n(1619),v=n(6574),y=n(5996),g=n(8429),w=n(6575),S=n(8786),A=function(){return l.createElement("div",{className:"company-description"},l.createElement("div",{className:"company-logo"},l.createElement("img",{src:h.default,alt:"Common Town Footer Logo"})),l.createElement("div",{className:"company-context"},"A spin-off company from A*STAR Singapore, has a strong research and development capability, and specializes in Education Technology. We are passionate about applying deep technology and research to transform learning, making it faster, better and more effective."))},b=function(){return l.createElement("div",{className:"address"},l.createElement("h6",null,"Contact Us"),l.createElement("address",null,l.createElement("div",{className:"icon"},l.createElement("img",{src:f.default,alt:"address-normal"}),l.createElement("img",{src:v.default,alt:"address-normal"})),"Address: 33 Ubi Avenue 3, #08-72, Vertex (Tower A) Singapore 408868"),l.createElement("a",{className:"contact",title:"Contact Us",href:"tel:+65 6848-8900"},l.createElement("div",{className:"icon"},l.createElement("img",{src:y.default,alt:"phone-normal"}),l.createElement("img",{src:g.default,alt:"phone-normal"})),"+65 6848-8900"),l.createElement("a",{className:"email",title:"Contact Support",href:"mailto: support@commontown.com"},l.createElement("div",{className:"icon"},l.createElement("img",{src:w.default,alt:"email-normal"}),l.createElement("img",{src:S.default,alt:"email-normal"})),"support@commontown.com"))},C=function(){var e=[{type:"linkedin-square",href:"https://www.linkedin.com/company/commontown-pte-ltd"},{type:"facebook-official",href:"https://www.facebook.com/CommonTown/"},{type:"youtube-play",href:"https://www.youtube.com/user/CommonTownvideos"}].map((function(e){var t=e.type,n=e.href,a={key:n,href:n,target:"_blank",rel:"noopener noreferrer",title:t};return l.createElement("a",a,l.createElement("i",{className:"fa fa-"+t}))}));return l.createElement("div",{className:"socials col"},l.createElement("h6",null,"Follow Us"),l.createElement("div",{className:"social-icons"},e))},k=function(){return l.createElement("div",{className:"Footer-products"},l.createElement("h6",null,"Products"),l.createElement(i.Link,{to:"/products/commonacademy/",title:"CommonAcademy"},"CommonAcademy"),l.createElement("a",{href:"https://dudu.town/",target:"_blank",rel:"noopener noreferrer",title:"Dudu"},"Dudu"),l.createElement("a",{href:"https://www.qoqolo.com/",target:"_blank",rel:"noopener noreferrer",title:"Qoqolo"},"Qoqolo"),l.createElement("a",{href:"https://www.swiiit.com/",target:"_blank",rel:"noopener noreferrer",title:"Swiiit"},"Swiiit"),l.createElement(i.Link,{to:"/products/vatitude/",title:"Vatitude"},"Vatitude"))},N=function(e){var t=e.scrollTopSettings,n=void 0===t?{}:t;return l.createElement("div",{id:"footer-scroll-to-top"},l.createElement(p.Z,n,l.createElement("div",{className:"scrollToTop"})))},L=function(){var e=(new Date).getFullYear();return l.createElement("footer",null,l.createElement("div",{className:"container"},l.createElement("div",{className:"footer-1"},l.createElement(A,null),l.createElement(k,null),l.createElement(b,null),l.createElement(C,null)),l.createElement("div",{className:"footer-2"},"Copyright © ",e," CommonTown Pte Ltd. All rights reserved.",l.createElement("div",{className:"footer-dividor"}),l.createElement(i.Link,{to:"/privacy-policy",title:"Site Map"},"Privacy Policy"),l.createElement("div",{className:"footer-dividor"}),l.createElement(i.Link,{to:"/sitemap",title:"Site Map"},"SiteMap"))),l.createElement(N,{scrollTopSettings:{showUnder:100,duration:800}}))},T=n(9903),M=function(e){var t=e.children,n=e.pathClass;return l.createElement("div",{className:"contentArea container "+n,children:t})},P=function(e){return l.createElement("div",{className:"content",children:e.children})},D=n(5514),O=n.n(D),I=function e(t,n){return void 0===n&&(n=1),t.map((function(t){var a=t.title,r=t.to,o=t.child,c=O()._(),s=n+1,m=function(){var t={to:r,alt:a,children:a,activeClassName:"active",partiallyActive:!!o.length},n=l.createElement(i.Link,t),m={className:"hidden",type:"checkbox",id:"toggle-"+c};return o.length?l.createElement(l.Fragment,null,l.createElement("input",m),n,l.createElement("label",{className:"toggler",htmlFor:"toggle-"+c},l.createElement("span",null),l.createElement("span",null)),l.createElement("div",{className:"aside-group aside-group-level-"+s},e(o,s))):n};return l.createElement("div",{key:c,className:"aside-link-wrapper aside-level-"+n},l.createElement(m,null))}))},F=function(e){var t=e.aside,n=t.title,a=t.items,r=t.footer,o=void 0===n?null:l.createElement("div",{className:"aside-header",children:n}),i=l.createElement("div",{className:"aside-body"},I(a)),c=void 0===r?null:l.createElement("div",{className:"aside-footer",children:r}),s=l.createElement("label",{className:"aside-toggler",htmlFor:"toggle-aside"},l.createElement("div",{className:"aside-open-icon"},l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)),l.createElement("div",{className:"aside-close-icon"},l.createElement("div",null,l.createElement("span",null),l.createElement("span",null))));return l.createElement(l.Fragment,null,l.createElement("input",{type:"checkbox",className:"hidden",id:"toggle-aside"}),l.createElement("aside",{className:"aside"},l.createElement("div",{className:"aside-container"},o,i,c)),s)};var q=function(e){var t=e.children,n=e.content,a=e.crumbs,r=void 0===a?[]:a,i=e.headerOverlay,c=void 0!==i&&i,s=e.aside,m=void 0===s?{}:s;void 0===t&&(t=l.createElement(P,{children:n})),"items"in m&&(t=l.createElement(l.Fragment,null,l.createElement(F,{aside:m}),t));var d="undefined"==typeof window?"":window.location.pathname.split("/").filter((function(e){return""!==e.trim()})).join(" ");return l.createElement("div",{className:"handle-router-bug"},l.createElement(o,e),l.createElement(E,{headerOverlay:c}),r?l.createElement(T.Z,{crumbs:r}):null,l.createElement(M,{children:t,pathClass:d}),l.createElement(L,null))}},4261:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var l=n(7294),a=n(1939),r=[{year:2021,description:l.createElement("ul",null,l.createElement("li",null,"Deployed Qoqolo Pre-school management system for Invictus International Programme"),l.createElement("li",null,"Obtained initial Certification for ISO9001:2015 (QMS). Date: 6 August 2021 (Cert No: 701451)"),l.createElement("li",null,"Obtained certification for SS620: 2016 (GDPMDS) again. Date: 18 Oct 2021 (Cert No: 768321)"))},{year:2020,description:l.createElement("ul",null,l.createElement("li",null,"Designed UX for MOE Talents System"),l.createElement("li",null,"Awarded and launched international event sites: Singapore Airshow, IMDEX Asia, Rotorcraft Asia and Unmanned Systems Asia."),l.createElement("li",null,"Deployed Qoqolo Pre-school management system for White Lodge Education Group Services Pte Ltd "),l.createElement("li",null,"Awarded and developed website for Continuing Education Training (CET) Academy, Ngee Ann Polytechnic"),l.createElement("li",null,"Awarded and developed website for World Cities Summit 2021"),l.createElement("li",null,"Awarded and developed website for Singapore International Water Week 2021"),l.createElement("li",null,"Launched PesonaEdu A-Class Learning Management System in Indonesia"))},{year:2019,description:l.createElement("ul",null,l.createElement("li",null,"Qoqolo for Star Learners Preschools"),l.createElement("li",null,"Dudu Home version launched"),l.createElement("li",null,"Vatitude e-Textbook for 30 Indonesian publishers"))},{year:2018,description:l.createElement("ul",null,l.createElement("li",null,"Launched User Experience Design (UXD) Service for Government Agencies"),l.createElement("li",null,"R&D Partnership with A*Star I2R in AI speech technologies"),l.createElement("li",null,"Launched ChineseGo learning app - with NIE and St. Anthony's Canossian Secondary School"),l.createElement("li",null,"Obtained SS 620 : 2016 GDPMDS Certification"))},{year:2017,description:l.createElement("ul",null,l.createElement("li",null,"Launched Dudu iPad App on AppStore"),l.createElement("li",null,"Awarded for the Community Based Care IT System jointly developed with St Luke's ElderCare"),l.createElement("li",null,"Appointed to be a qualified provider of SMART Solutions for pre-schools, Qoqolo School Management System"))},{year:2016,description:l.createElement("ul",null,l.createElement("li",null,"Awarded Web Contractor for IDA(T)1374 Content Websites Platform tender"),l.createElement("li",null,"Swiiit appointed as selected content management system for IDA(T)1374 Content Websites Platform tender"),l.createElement("li",null,"Swiiit selected by 274 schools in Singapore as the content management system"),l.createElement("li",null,"Awarded Integrated Portal for Mother Tongue Languages (iMTL2) tender"))},{year:2015,description:l.createElement("ul",null,l.createElement("li",null,"Launched Dudu Personalised Chinese Learning System to Singapore schools"),l.createElement("li",null,"Distinguished Paper at 4th Int'l Conf. on the Teaching and Learning of Chinese as a Second Language"),l.createElement("li",null,"Qoqolo School Management System rolled out to all NTUC First Campus' My First Skool and Little Skool-House Centres."))},{year:2014,description:l.createElement("ul",null,l.createElement("li",null,"Awarded Civil Service College ULMS (Unified Learning Management System) tender to provide a unified elearning portal to the 70,000 civil servants attending CSC courses."))},{year:2013,description:l.createElement("ul",null,l.createElement("li",null,"Appointed IDA Saas vendor for pre-schools - Qoqolo School Management System and e-Portfolio."," "),l.createElement("li",null,"MOE OPAL, powered by CommonAcademy, is the software developer that won the Asia Pacific FutureGov Award - Education Organisation of the Year."))},{year:2012,description:l.createElement("ul",null,l.createElement("li",null,"Awarded MOE OPAL LCMS tender"))},{year:2011,description:l.createElement("ul",null,l.createElement("li",null,"Awarded MOE East Zone Repository."),l.createElement("li",null,"Awarded MOE IK21 CFC - pre-school e-Portfolio System."),l.createElement("li",null,"Awarded MDA Futurescape Grants under a CommonTown-Pearson partnership to research and develop an Online Chinese Accelerated Reading Programme"))},{year:2009,description:l.createElement("ul",null,l.createElement("li",null,"Singapore MOE and CommonTown became joint winner of the IMS Learning Impact Award (Silver) and bagged the Best Repository Solution"))},{year:2008,description:l.createElement("ul",null,l.createElement("li",null,"Awarded MOE Edumall2.0 tender, rolled out to all MOE teachers."))},{year:2007,description:l.createElement("ul",null,l.createElement("li",null,"Implemented S-Link teachers repository for South Clusters schools."),l.createElement("li",null,"Appointed as the Vendor for School Websites Bulk Tender (Swiiit V2)."))},{year:2006,description:l.createElement("ul",null,l.createElement("li",null,"Implemented WeSHARE teachers repository for West Cluster of schools"),l.createElement("li",null,"Launched V1 Swiiit DIY web-builder"),l.createElement("li",null,"Appointed by A*Star to productize Text-mining SDK"))},{year:2005,description:l.createElement("ul",null,l.createElement("li",null,"Completed MOE iSHARE proof-of-concept project for MOE."),l.createElement("li",null,"Launched 12wap Mobile Community with Clearhub for MY 8TV/TV3 viewers."))},{year:2004,description:l.createElement("ul",null,l.createElement("li",null,"Awarded MOE/IDA Prowess CFC – trial led Project Work System in schools"))},{year:2003,description:l.createElement("ul",null,l.createElement("li",null,"E-learning partnerships established in HK and China."))},{year:2001,description:l.createElement("ul",null,l.createElement("li",null,"Introduced web content management products and solutions. E-Learning partnership with major publishers."))},{year:1999,description:l.createElement("ul",null,l.createElement("li",null,"Spin-off from A*STAR."),l.createElement("li",null,"Establishment and introduced E-community services for the education industry."))}],o=n(5963),i=[{text:"About Us",to:"/about-us"},{text:"Key Achievements",to:"/about-us/key-achievements"}],c=function(){var e=l.createElement(l.Fragment,null,l.createElement("div",{className:"text-center"},l.createElement("h1",null,"Key Achievements"),l.createElement("div",{className:"key-achievements-description"})),l.createElement(o.default,{feeds:r}));return l.createElement(a.Z,{title:"Key Achievements | CommonTown",crumbs:i,content:e})}},5963:function(e,t,n){n.r(t);var l=n(7294),a=n(5514),r=n.n(a);t.default=function(e){var t=e.feeds,n=(void 0===t?[]:t).map((function(e,t){var n=(t+1)%2==0?"feed-align-left":"feed-align-right",a=e.year,o=e.description,i=r()._();return l.createElement("div",{key:i,className:"feed-section "+n},l.createElement("div",{className:"feed-year",children:l.createElement("span",null,a)}),l.createElement("div",{className:"feed-seperator"}),l.createElement("div",{className:"feed-description",children:o}))}));return l.createElement("div",{className:"timeline"},n)}}}]);
//# sourceMappingURL=component---src-pages-about-us-key-achievements-index-js-30ba0b84323f7f0456e6.js.map