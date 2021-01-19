/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Rasul Rukh",
  title: "Hi, everyone. I'm Rasul",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of developing Web and " +
      "Mobile applications with JavaScript / Reactjs / Nodejs / Python(Flask) / React Native and some other cool libraries and frameworks. " +
      "Currently passionate about developing efficient Machine and Deep Learning models"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VHvwiXSaU7YWlANryIfFbWy-7niIzcxo/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "rukhillaevrasul@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO HAS BEEN EXPLORING MACHINE/DEEP LEARNING",
  skills: [
    emoji(
      "⚡ Develop Machine Learning modesl with Python libraries such as Scikit-learn, pandas, numpy and scipy"
    ),
    emoji(
      "⚡ Analyse and Visualize data with Python libraries such as Matplotlib, Plotly and Searborn "
    ),
    emoji("⚡ Develop mobile applications with React Native and Java"),
    emoji("⚡ Develop web applications with Reactjs, Angular and Nodejs"),
    emoji(
      "⚡ Backend Development with Node.js and Python as well as Database integration with MySQL and MongoDB"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Help University",
      logo: require("./assets/images/help_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2017 - January 2020",
      desc:
        "Participated in the various researches about Machine Learning, Blockchain and Mobile/Web Development and published a FinTech mobile application as a Final Year Project.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Bukhara Engineering Technological Institute",
      logo: require("./assets/images/bmti_logo.jpg"),
      subHeader: "Foundation in Information Technology in Computer Science",
      duration: "August 2015 - September 2016",
      desc:
        "Ranked one of the top tertiary education in Information Technology course in the country. " +
        "Took courses about Software Engineering, Advanced Mathematics, Cyber Security...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming/OOP",
      progressPercentage: "90%",
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%",
    },
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Trainer",
      company: "Kidocode",
      companylogo: require("./assets/images/kidocode_logo.png"),
      date: "Jan 2019 – May 2020",
      desc:
        "Trained junior developers on Data Preprocessing with pandas and Data Visualizations with Matplotlib. " +
        "Extracted valuable information to support decision-making through Data Analysis using different python libraries such as Scipy, Numpy, Pandas and Matplotlib.",
      descBullets: [
        "Developed several Supervised and Unsupervised Machine Learning models and optimized them using Python libraries.",
        "Used Scikit-learn to develop Machine learning models with various algorithms",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Kidocode",
      companylogo: require("./assets/images/kidocode_logo.png"),
      date: "Jan 2018 – Dec 2018",
      descBullets: [
        "Worked with senior developers on developing web application projects, throughout the various phases of the project cycle.",
        "Integrated backend of web applications using Node.js and Flask framework with MongoDB and MySQL databases.",
        "Collected and consolidated requirements from various teams. Developed a business process model to implement a logical flowchart evaluating boundary conditions.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "The Bridge Empire Consultancy",
      companylogo: require("./assets/images/tbec_logo.png"),
      date: "Jun 2017 – Jan 2018",
      descBullets: [
        "Developed a web application with large user base using JS/CSS/HTML/Bootstrap in front-end and PHP and MySQL(database) in backend",
        "Redesigned and added several widgets to an existing website through WordPress (CMS)",
        "Used Java and object-oriented programming concepts to develop several console and GUI applications.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Project",
  subtitle:
    "Stock market and Finance mobile application with Financial Advisor",
  projects: [
    {
      image: require("./assets/images/financify_icon.png"),
      link: "https://expo.io/@rassrukh/projects/financify-2",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or need help automate with Artificial Intelligence? My Inbox is open for all.",
  number: "+99-9396699",
  emailAddress: "rukhillaevrasul@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
