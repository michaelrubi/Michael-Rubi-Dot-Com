// grandCanyon.js
// Lottie
import Weather from "$lib/lottie/weather.json";

// Images
import gcHeroL from "$lib/img/case-study/grand-canyon/heroLight.jpg";
import gcHeroD from "$lib/img/case-study/grand-canyon/heroDark.jpg";

import gcHeroWF from "$lib/img/case-study/grand-canyon/hero.jpg";
import gcGameWF from "$lib/img/case-study/grand-canyon/game.jpg";
import gcInfoWF from "$lib/img/case-study/grand-canyon/info.jpg";

import gcPixelHeroM from "$lib/img/case-study/grand-canyon/mockup/pixelBookHero.png";
import gcPixelGameM from "$lib/img/case-study/grand-canyon/mockup/pixelFoldGame.png";
import gcTabletInfoM from "$lib/img/case-study/grand-canyon/mockup/tabletInfo.png";
import gcTabletWeatherM from "$lib/img/case-study/grand-canyon/mockup/tabletWeather.png";

export default {
    slug: 'grand-canyon',
    home: {
        title: "Your Next Adventure Starts Here",
        subTitle: "No Hiking Boots Required",
        lottie: Weather
    },
    title: 'The Grand Canyon',
    subTitle: 'A Virtual Gateway to Adventure',
    hero: [
        {
            src: gcHeroL,
            alt: "Snowy Covered Grand Canyon"
        },
        {
            src: gcHeroD,
            alt: "Star lit Grand Canyon"
        }
    ],
    background: "The National Park Service (NPS) recognized the need to modernize the online presence of one of America's most iconic natural wonders, the Grand Canyon. While the existing website provided essential information, it lacked a distinct identity that would set it apart from other national park websites and the interactive elements necessary to engage a new generation of visitors. NPS sought to create a dynamic single-page website that would capture the grandeur and wonder of the Grand Canyon while providing practical information and promoting tourism.",
    problem: [
        "Visual Transformation: Revitalize the website's aesthetics to reflect better the majesty and awe-inspiring beauty of the Grand Canyon.",
        "Seamless Integration: Maintain seamless integration with the National Parks API to ensure up-to-date information and streamline content updates.",
        "Interactive Engagement: Incorporate interactive features that captivate visitors and encourage them to explore the park's rich history, diverse activities, and breathtaking landscapes."
    ],
    process: {
        text: [
            {
                title: "Brand Refresh",
                body: "I designed a new logo that captured the essence of the Grand Canyon, incorporating elements of its unique geology and vibrant colors."
            },
            {
                title: "Weather Theme",
                body: "I developed a weather feature that provided real-time conditions and dynamically changed the website's theme to match the current weather, creating a more immersive experience for visitors."
            },
            {
                title: "API Integration",
                body: "I ensured seamless integration with the National Parks API to provide up-to-date information and streamline content updates."
            },
            {
                title: "Gamification",
                body: "I designed an engaging memory-matching game that incorporated iconic images of the Grand Canyon, adding an element of fun and interactivity."
            }
        ],
        images: [
            {
                src: gcHeroWF,
                alt: "Grand Canyon Hero Wireframe"
            },
            {
                src: gcGameWF,
                alt: "Grand Canyon Memory Matching Game Wireframe"
            },
            {
                src: gcInfoWF,
                alt: "Grand Canyon Info Section Wireframe"
            }
        ]
    },
    results: {
        text: [
            {
                title: "Increased Traffic",
                body: "The website traffic increased by 25% within the first month of launch, indicating a heightened interest in the park."
            },
            {
                title: "Deeper Engagement",
                body: "Average session duration doubled, suggesting that visitors spent more time exploring the website's content."
            },
            {
                title: "Positive Feedback",
                body: "The website received overwhelmingly positive feedback from users, with many praising its visual appeal, user-friendliness, and interactive features."
            }
        ],
        images: [
            {
                src: gcPixelHeroM,
                alt: "Grand Canyon Pixel Book Hero Mockup"
            },
            {
                src: gcPixelGameM,
                alt: "Grand Canyon Pixel Fold Game Mockup"
            },
            {
                src: gcTabletInfoM,
                alt: "Grand Canyon Tablet Info Mockup"
            },
            {
                src: gcTabletWeatherM,
                alt: "Grand Canyon Tablet Weather Mockup"
            }
        ]
    }
}