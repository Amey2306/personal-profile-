import { Project, Experience, SkillCategory } from './types';

export const RESUME_CONTEXT = `
Name: Amey Shinde
Role: Digital Marketing Manager & MarTech Strategist
Email: ameyshinde2391@gmail.com
Phone: 9004143320
LinkedIn: https://www.linkedin.com/in/ameyshinde23/
Location: Mumbai

Summary:
I am a high-performance Digital Marketing Manager known for a "Never Give Up" attitude. I specialize in MarTech, CRM integrations, and end-to-end performance marketing across Google, Meta, LinkedIn, and Pinterest. I possess the capacity to manage 10+ complex projects simultaneously, delivering creative strategy and execution that hits targets whatever it takes. My expertise extends to advanced Analytics (Power BI, Tableau), Automation (N8N, Make.com, Power Apps), and AI workflows (Google AI Studio).

Skills:
- Performance Marketing: Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, Pinterest Ads, Twitter Ads, WhatsApp Marketing.
- MarTech & Automation: N8N, Make.com, Google AI Studio, CRM Integrations (Salesforce, Leadsquared, Hubspot), Power Apps, Marketing Automation.
- Strategy: Media Planning, Campaign Execution, Creative Strategy, Budget Optimization.
- Analytics & Data: Power BI, Google Analytics 4, Microsoft Clarity, Advanced Excel (Pivots, Macros), Tableau, SQL Basics.
- Project Management: Handling 10+ concurrent projects, Agile workflows.

Experience:

1. Madison India / Account Manager (Secondment at Godrej Properties)
   Sept 2023 - PRESENT, Mumbai
   - Acting as spokesperson at Godrej Properties.
   - Managing MMR region (4 Launches, 6 Sustenance Projects).
   - Responsible for Regional Business/Campaign KPIs (Leads, Walk-ins, Bookings, Revenue).
   - Managed 6cr Budget in a Quarter, increasing revenue by 10%.
   - Minimized Go-live Date by 20%, kept Cost of Marketing < 2%.

2. Mahindra Lifespaces / Asst Marketing Manager - Digital
   Sept 2022 - Aug 2023, Mumbai (Worli)
   - Achieved 60% Revenue increment through Digital in Chennai and 40% in Pune.
   - Significant jump in L2W ratio (18-20%), 35% Qualified leads.
   - Budget optimisation by 15%.
   - Maintained strong market presence via Social media & YouTube.

3. Xanadu Realty / Digital Marketing Manager
   Sept 2022 - August 2023, Mumbai
   - Performance marketing for different real estate projects.
   - Driving business by achieving targeted Lead walk-in and walk-in-to-business ratios.
   - Planning brand engagement, website traffic, and budgeting.
   - Call centre integrations and functionality.

4. Proptech Solutions / Digital Marketing
   March 2022 - Sept 2022, Mumbai
   - Drove business through Digital channels and SEO for plotted development in Navi Mumbai.

5. Forbinary Technologies / Sales Executive
   May 2019 - Aug 2021, Mumbai
   - SaaS based platform empowering SMEs to develop branded mobile apps.
   - Responsible for Sales/Revenue and implementing sales strategies.

6. KHS Innovation and Engineering
   Aug 2017 - Sept 2019
   - Responsible for North region dealer/distributor management.

7. AGS Technologies / Jr. Engineer
   July 2016 - July 2017
   - Installation of NFC devices on Petrol pumps.

Education:
- Datta Meghe College of Engg / Mechanical Engineering (2012-2016)
- Fr. Agnels Polytechnic / Diploma in Mechanical Engineering (2008-2012)
`;

export const PROJECTS: Project[] = [
  {
    title: "Godrej Properties MMR Launch",
    description: "Managed 4 launches and 6 sustenance projects. Minimized go-live timelines by 20% and maintained Cost of Marketing under 2% while managing a 6Cr quarterly budget.",
    tags: ["Strategy", "Budgeting", "Real Estate", "Team Lead"],
    link: "#",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Mahindra Digital Growth",
    description: "Achieved 60% revenue increment in Chennai and 40% in Pune via digital channels. Optimized budget by 15% and improved L2W ratio to 18-20%.",
    tags: ["Performance Marketing", "Revenue Growth", "Analytics"],
    link: "#",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "SaaS Sales & Strategy",
    description: "Empowered SMEs to build branded mobile apps at Forbinary Technologies. Drove sales revenue and developed new marketing strategies for the platform.",
    tags: ["SaaS", "Sales", "B2B Marketing"],
    link: "#",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Account Manager (Godrej Properties)",
    company: "Madison India",
    period: "Sept 2023 - PRESENT",
    description: "Managing MMR region launches and sustenance projects. increased revenue by 10% with a 6cr quarterly budget. Optimized marketing costs to <2%."
  },
  {
    id: 2,
    role: "Asst Marketing Manager - Digital",
    company: "Mahindra Lifespaces",
    period: "Sept 2022 - Aug 2023",
    description: "Drove 60% revenue increment in Chennai & 40% in Pune. Improved lead quality and walk-in ratios through targeted performance marketing."
  },
  {
    id: 3,
    role: "Digital Marketing Manager",
    company: "Xanadu Realty",
    period: "Sept 2022 - Aug 2023",
    description: "Handled performance marketing, brand engagement, and budgeting for real estate developers. Integrated call center operations for better lead tracking."
  },
  {
    id: 4,
    role: "Digital Marketing",
    company: "Proptech Solutions",
    period: "March 2022 - Sept 2022",
    description: "Drove business through digital channels and SEO for plotted development projects in Navi Mumbai."
  },
  {
    id: 5,
    role: "Sales Executive",
    company: "Forbinary Technologies",
    period: "May 2019 - Aug 2021",
    description: "Responsible for sales and revenue generation for a SaaS platform. Provided market analysis and feedback on product features."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Ad Platforms",
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Pinterest Ads", "Twitter Ads", "YouTube Ads", "Native Ads"],
    icon: "Megaphone"
  },
  {
    title: "Automation & AI",
    skills: ["N8N", "Make.com", "Google AI Studio", "Power Apps", "CRM Integrations", "Salesforce"],
    icon: "BarChart"
  },
  {
    title: "Strategy & Exec",
    skills: ["Media Planning", "Campaign Execution", "Creative Strategy", "Power BI", "Excel Dashboards", "Budgeting"],
    icon: "TrendingUp"
  }
];