// ============================================================
// All PHASOR 2K26 content lives here. Edit this file, not the
// components, when copy changes (dates, fees, coordinators...).
// ============================================================

export const site = {
  name: "PHASOR 2K26",
  tagline: "Where ideas flow without resistance...",
  motto: "A national level technical symposium and workshop for electrical innovators",
  dates: "6th, 7th & 8th October 2026",
  college: "JNTUA College of Engineering (Autonomous), Pulivendula",
  address: "Pulivendula, Kadapa (Dist.), Andhra Pradesh - 516390",
  department: "Department of Electrical and Electronics Engineering",
  venue: "Seminar Hall, EEE Department, JNTUA Pulivendula",

  // UPDATED: new registration form
  registerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdpMiZTE7tsOKSGAYdfUssYpHv65XGE6f5qQZeD62AOeyWJpQ/viewform?usp=publish-editor",

  contact: {
    email: "phasor2k26@gmail.com",
    website: "https://jntuacep.ac.in/departments/dept-of-eee/",
    instagram: "phasor2k26",
    youtube: "youtube.com/@phasor2k26",
  },

  about: [
    `PHASOR 2K26 is a national level technical symposium and workshop presented by the Department of Electrical and Electronics Engineering, JNTUA College of Engineering Pulivendula.`,
    `Built around the spirit of electrical innovation, the symposium brings students, faculty, and industry voices together for workshops, technical events, career guidance, and collaborative learning.`,
    `The theme "where ideas flow without resistance" reflects the department's focus on power systems, renewable energy, embedded intelligence, and practical engineering skills for the next generation of EEE students.`,
  ],

  aboutMeta: [
    { label: "Symposium", value: "National level technical symposium and workshop" },
    { label: "Dates", value: "6, 7 and 8 October 2026" },
    { label: "Venue", value: "Seminar Hall, EEE Department" },
    { label: "Contact", value: "phasor2k26@gmail.com" },
  ],

  workshops: [
    {
      title: "AI / Embedded Systems for Drone Swarm Technology",
      tag: "Embedded AI",
      desc: "Explore intelligent embedded systems, coordination logic, and real-world drone swarm applications.",
      icon: "drone",
      speaker: "N. Venkat Reddy, Founder and CEO, Vihaan Electrix Techybot",
    },
    {
      title: "Grid Integration of Renewable Energy Resources",
      tag: "Power Systems",
      desc: "A focused workshop on renewable energy integration, grid stability, and modern power infrastructure.",
      icon: "grid",
      speaker: "Dr. P. Srinivasa Varma and D. Ramesh Kumar Babu",
    },
    {
      title: "Career Guidance",
      tag: "Faculty Members",
      desc: "Guidance sessions for students on career paths, skill building, higher studies, and industry readiness.",
      icon: "career",
      speaker: "Faculty members, Department of EEE",
    },
  ],

  events: [
    { name: "Paper Presentation", icon: "paper" },
    { name: "Technical Quiz", icon: "quiz" },
    { name: "Photo Contest", icon: "camera" },
    { name: "Culturals", icon: "culture" },
    { name: "Spot Events", icon: "trophy" },
  ],

  // UPDATED: event note + parent accommodation row
  fees: [
    { label: "For Each Workshop", price: "Rs. 500/-", note: "Per participant" },
    { label: "For Both Workshops", price: "Rs. 800/-", note: "Combined workshop pass" },
    { label: "For Each Event", price: "Rs. 100/-", note: "Per person, per event. Teams of 2 only" },
    { label: "Parent Accommodation", price: "Rs. 300/-", note: "If parents accompany you" },
  ],

  // NEW: registration rules
  rules: [
    "Each team has exactly two members.",
    "Each person pays Rs. 100/- for each event.",
    "Parents accompanying participants: Rs. 300/- for accommodation.",
  ],

  // NEW: paper & poster topics
  topics: [
    {
      title: "AI in Embedded Systems & Drone Swarm Technology",
      papers: [
        "TinyML: Bringing Artificial Intelligence to Embedded Systems",
        "AI-Based Autonomous Navigation and Collision Avoidance in Drone Swarms",
      ],
      posters: [
        "“When Drones Think as One” – Intelligence Behind Drone Swarms",
        "“TinyML – AI on a Chip”",
      ],
    },
    {
      title: "Grid Integration of Renewable Energy Sources",
      papers: [
        "Grid-Forming Inverters for Renewable Energy Integration",
        "AI-Based Renewable Energy Forecasting and Grid Management",
      ],
      posters: [
        "“Grid of Tomorrow: Smart, Green & Resilient”",
        "“Grid-Forming Inverters: Building the Renewable Grid”",
      ],
    },
  ],

  prizeWorth: "Events, workshops & career guidance",

  collegeAbout: `University College of Engineering, Pulivendula, J.N.T. University Anantapur has been established with the social objective of providing technical education that is accessible and affordable to rural people. The college foundation was laid on 25th December 2005 by former Chief Minister of Andhra Pradesh, late Dr. Y. S. Rajashekhara Reddy garu.

The institute is one of the University Colleges of JNTU Anantapur, Ananthapuramu and is a government run institute. With dedicated faculty, staff, and sincere student effort, the institute has earned a good reputation in the J.N.T. University Anantapur region.

The institute has 175 acres of land and a built-up area of 22,320.00 sq.m. At present, the institute has adequate building accommodation to house all academic programmes offered at the campus.`,

  departmentAbout: `The Electrical and Electronics Engineering (EEE) department was established in the year 2006. The department offers an Under Graduate program in Electrical and Electronics Engineering, full-time Post Graduate programs in Electrical Power Systems and Power Electronics and Drives, and a part-time Post Graduate program in Electrical Power Systems.

These programs provide a platform for bright graduates and support research in state-of-the-art technologies. The B.Tech in EEE at JNTUA College of Engineering Pulivendula is one of the sought-after programs in Andhra Pradesh and attracts top students qualifying in APEAPCET. The M.Tech program is also sought after by students qualifying in GATE and PGECET examinations.`,

  departmentSourceUrl: "https://jntuacep.ac.in/departments/dept-of-eee/",

  people: {
    patron: "Dr. D. Vishnu Vardhan, Principal, JNTUACEP",
    coPatron: "Prof. K. Sesha Maheswaramma, Vice Principal, JNTUACEP",
    convener: "Dr. J. Sreenivasulu, Associate Professor and HOD",
    coConvener: "Dr. Shaik Hussain Vali, Assistant Professor",
    workshopCoordinator: "Dr. R. Narendra Rao - 9866653043",
    staffCoordinators: [
      { name: "Sri. T. Obulesu", phone: "8179271946" },
      { name: "Sri. B. Narasimha Reddy", phone: "9848781019" },
      { name: "Sri. V. V. Krishna Reddy", phone: "9963426011" },
    ],
    studentCoordinators: [
      { name: "C. Pavan", phone: "8978962027" },
      { name: "K. Bhargava Kumar", phone: "9652909271" },
      { name: "A. Rushendra Reddy", phone: "9014355906" },
      { name: "D. Prathiha", phone: "7673961972" },
      { name: "M. Greeshma", phone: "9441061266" },
    ],
  },
};
