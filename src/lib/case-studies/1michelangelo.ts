// Michelangelo.ts
import type { CaseStudy } from '$lib/caseStudies';
// Lottie
import Creation from "$lib/lottie/creation.json";

// Images
import michHero from "$lib/img/case-study/michelangelo/creation.jpg";

import michHomeWF from "$lib/img/case-study/michelangelo/home.jpg";
import michCheckoutWF from "$lib/img/case-study/michelangelo/checkout.jpg";
import michTicketsWF from "$lib/img/case-study/michelangelo/tickets.jpg";
import michMerchWF from "$lib/img/case-study/michelangelo/merch.jpg";

import michIPadM from "$lib/img/case-study/michelangelo/mockup/iPadHero.png";
import michMacM from "$lib/img/case-study/michelangelo/mockup/macStudioTickets.png";
import michIphoneM from "$lib/img/case-study/michelangelo/mockup/iphoneMerch.png";
import michIphone14M from "$lib/img/case-study/michelangelo/mockup/iPhone14MaxHome.png";
import michMacMonitorM from "$lib/img/case-study/michelangelo/mockup/macMonitorMerch.png";

const michelangelo: CaseStudy = {
    slug: 'michelangelo',
    home: {
        title: 'Immersive Renaissance Experience',
        subTitle: 'Through the works of Michelangelo',
        lottie: Creation
    },
    title: 'Michelangelo',
    subTitle: 'A Modern Renaissance Experience',
    hero: [
        {
        src: michHero,
        alt: 'The Creation of Adam'
        }
    ],
    background: "The Museum of Fine Arts, grappling with declining visitor engagement with its historical collections, sought to revitalize interest in Michelangelo's masterpieces. Their goal was to attract a wider audience, particularly younger demographics, by creating an immersive online experience that leveraged digital technology to showcase Michelangelo's work in a dynamic and accessible way. Additionally, the museum sought to boost revenue through integrated merchandise sales.",
    problem: ["Design a captivating, educational, and user-friendly ticketing website that showcased Michelangelo's artistic brilliance and historical significance while resonating with a modern audience and driving merchandise sales."],
    process: {
        text: [
            {
                title: "Immersion in Michelangelo's World",
                body: "I delved deep into Michelangelo's artistic journey, studying his techniques, inspirations, and the cultural context of his era. This approach allowed me to create an authentic and informative experience for visitors."
            },
            {
                title: "Interactive Design Concepts",
                body: "I explored various interactive design concepts, including virtual tours, 3D models of sculptures, and augmented reality elements. After careful consideration, I opted for a minimalist design aesthetic to ensure Michelangelo's works remained the focal point."
            },
            {
                title: "Streamlined Shopping Experience",
                body: "To simplify the user experience, I combined the ticketing and merchandise carts into one, making it easy for visitors to purchase tickets and souvenirs in a single transaction."
            }
        ],
        images: [
            {
                src: michHomeWF,
                alt: "Homepage Wireframe"
            },
            {
                src: michCheckoutWF,
                alt: "Checkout Wireframe"
            },
            {
                src: michTicketsWF,
                alt: "Tickets Wireframe"
            },
            {
                src: michMerchWF,
                alt: "Merch Wireframe"
            }
        ]
    },
    results: {
        text: [
        {
            title: "Ticket Sales Skyrocketed",
            body: "Ticket sales increased by over 400% in the first two weeks alone."
        },
        {
            title: "Engaging Features",
            body: `The exhibit's interactive features, such as the immersive "walk-through" of the Sistine Chapel, garnered widespread acclaim and significantly increased user engagement.`
        },
        {
            title: "Revenue Generation",
            body: "The integrated merchandise store drove a substantial increase in revenue for the museum, further validating the project's effectiveness."
        }
        ],
        images: [
            {
                src: michIPadM,
                alt: 'iPad Mockup'
            },
            {
                src: michMacM,
                alt: 'Mac Studio Mockup'
            },
            {
                src: michIphoneM,
                alt: 'iPhone Mockup'
            },
            {
                src: michIphone14M,
                alt: 'iPhone 14 Mockup'
            },
            {
                src: michMacMonitorM,
                alt: 'Mac Monitor Mockup'
            }
        ]
    }
}

export default michelangelo;