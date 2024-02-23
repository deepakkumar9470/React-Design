import cup from '../assets/cup.svg'
import diamond from '../assets/diamond.svg'
import web_laptop from '../assets/web_laptop.png'

const navLinks = [
    {
        title: "Categories"
    },
    {
        title: "Website Builders"
    },
    {
        title: "Today's deals"
    },
]


const filterlinksData = [
    { title: "Tooles" },
    { title: "AWS Builder" },
    { title: "Start Build" },
    { title: "Build Supplies" },
    { title: "Tooling" },
    { title: "BlueHosting" },

]


const accordianLinksData = [
    { title: "Home" },
    { title: "Hosting for all" },
    { title: "Hosting" },
    { title: "Hosting6" },
    { title: "Hosting5" },
]



const cardsData = [
    {
        count : 1, 
        imageUrl :web_laptop,
        headTitle: "WixPro 72-Inch Responsive Website Builder", 
        headDesc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        childTitle: "Main highlights",
        childDesc: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        iconUrl : cup,
        status:true,
        iconTitle: "Best Choice",
        rating:9.8,
        ratingStatus:"Exceptional"
    },

    {
        count : 2, 
        imageUrl :web_laptop,
        headTitle: "SiteCraft 68-Inch Ultimate Web Design Studio",
        headDesc: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        childTitle: "Main highlights",
        childDesc: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
        iconUrl : diamond,
          status:true,
        iconTitle: "Best Value",
        rating:9.5,
        ratingStatus:"Excellent"
    },


    {
        count : 3, 
        imageUrl :web_laptop,
        headTitle: "WixPro 72-Inch Responsive Website Builder",
        headDesc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        childTitle: "Main highlights",
        childDesc: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        iconUrl : cup,
        status:false,
        iconTitle: "Best Choice",
        rating:9.3,
        ratingStatus:"Exceptional"
    },

    {
        count : 4, 
        imageUrl :web_laptop,
        headTitle: "CDK Resposive Builder",
        headDesc: "An extensive library of widgets and apps, and detailed step-by-step guides",
        childTitle: "Main highlights",
        childDesc: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        iconUrl : diamond,
        status:false,
        iconTitle: "Best Value",
        rating:9.1,
        ratingStatus:"Very Good"
    }

]



const footerLinksCat = [
    {
        title: "Web Builder"
    },
    {
        title: "Hosting"
    },
    {
        title: "Data Center"
    },
    {
        title: "Robotic-Automation"
    },

]



const footerLinksContact = [
    {
        title: "Contact"
    },
    {
        title: "Privacy Policy"
    },
    {
        title: "Terms Of Service"
    },
    {
        title: "Terms Of Service"
    },
    {
        title: "Categories"
    },
    {
        title: "About"
    },

]


const relatedCardsData = [
    {
        title: "Webbuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offer: 20,
        time: "Limited Time",
        offPrice: "39.96",
        actualPrice: "49.96",
    },
    {
        title: "Webbuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offer: 20,
        time: "Limited Time",
        offPrice: "39.96",
        actualPrice: "49.96",
    },
    {
        title: "Webbuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offer: 20,
        time: "Limited Time",
        offPrice: "39.96",
        actualPrice: "49.96",
    },

]

export {
    navLinks,
    filterlinksData,
    accordianLinksData,
    cardsData,
    footerLinksCat,
    footerLinksContact,
    relatedCardsData
}