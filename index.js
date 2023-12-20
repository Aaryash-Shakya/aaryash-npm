#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string";
import chalk from "chalk";
import inquirer from "inquirer";
import nanospinner from "nanospinner";

// global variables
let factUsedIndex = []

const sleep = (ms = 1000) => new Promise(r => setTimeout(r, ms));

function setFiglet(message) {
    figlet(
        message,
        {
            font: "Larry 3D",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(gradientString.pastel.multiline(data));
        }
    );
}

async function downloadAnimation(downloadName) {
    const spinner = nanospinner.createSpinner(`Downloading ${downloadName}...`).start();
    await sleep(700);
    spinner.success({ text: `${downloadName} Downloaded` });
}

function printHeaderInBox(header) {
    const newHeader = `| ${header} |`;
    let bar = "";
    for (let i = 0; i < newHeader.length; i++) {
        bar += "-";
    }
    console.log(chalk.yellowBright(bar));
    console.log(chalk.yellowBright(newHeader));
    console.log(chalk.yellowBright(bar));
}

async function welcome() {
    setFiglet("_Aaryash_\n_Shakya_\n");
    await sleep();
    await downloadAnimation("User Profile");
    await downloadAnimation("Contact Information");
    await downloadAnimation("Skills and Expertise");
    await downloadAnimation("Certifications");
    await downloadAnimation("Project Details");
    await downloadAnimation("Resume");
    await downloadAnimation("Hobbies and Interests");
    await sleep();
}

async function introduction() {
    console.log(chalk.greenBright("\n\nHI! I am Aaryash Shakya."));
    await sleep();
    console.log("I am a MERN Stack developer with expertise in web applications.");
    console.log("Currently pursuing a BSc. CSIT degree at Sagarmatha College of Science and Technology.");
    console.log("Passionate about clean code, innovative technology, and continuous learning.");
    console.log("I have contributed to open-source projects and actively participate in coding communities.");
    console.log("My goal is to leverage technology to create innovative solutions that make a positive impact.");
}

function contactInformation() {
    const contacts = [
        {
            platform: "Email",
            username: "aaryashshakya.dev@gmail.com",
            link: null,
        },
        {
            platform: "Github",
            username: "Aaryash-Shakya",
            link: "https://github.com/Aaryash-Shakya",
        },
        {
            platform: "LinkedIn",
            username: "aaryash-shakya",
            link: "https://linkedin.com/in/aaryash-shakya",
        },
    ];
    printHeaderInBox("Contact Information");
    console.log("\nYou can find me on the following platforms.");
    console.log("--------------------------------------------");
    contacts.forEach(contact => {
        console.log(chalk.cyanBright(`${contact.platform}: `));
        console.log(`\tusername: ${contact.username}`);
        if (contact.link !== null) {
            console.log(`\tlink: ${contact.link}`);
        }
        console.log("--------------------------------------------");
    });
}

function educationalBackground() {
    const educations = [
        {
            level: "Grade 10",
            institute: "Maitri Shishu Vidhyalaya",
            startYear: "2006 AD",
            passYear: "2018 AD",
        },
        {
            level: "+2 Science",
            institute: "National School of Sciences",
            startYear: "2018 AD",
            passYear: "2020 AD",
        },
        {
            level: "BSc. Computer Science and Information Technology",
            institute: "Sagarmatha College of Science and Technology",
            startYear: "2021 AD",
            passYear: "ongoing",
        },
    ];
    printHeaderInBox("Educational Background");
    console.log("\n--------------------------------------------");
    educations.forEach(async education => {
        console.log(`${chalk.greenBright(education.level)}`);
        console.log(`\t${education.institute}`);
        console.log(`\t${education.startYear} - ${education.passYear}`);
        console.log("--------------------------------------------");
    });
}

async function skillsAndExpertise() {
    // skill based on current year 2023
    const skills = [
        {
            name: "C",
            level: "Intermediate",
            category: "Programming Language",
            experience: "3 years",
        },
        {
            name: "C++",
            level: "Intermediate",
            category: "Programming Language",
            experience: "3 years",
        },
        {
            name: "JavaScript",
            level: "Advance",
            category: "Programming Language",
            experience: "5 years",
        },
        {
            name: "TypeScript",
            level: "Intermediate",
            category: "Programming Language",
            experience: "1 year",
        },
        {
            name: "Bash",
            level: "Beginner",
            category: "Programming Language",
            experience: "1 year",
        },
        {
            name: "HTML",
            level: "Advance",
            category: "Markup Language",
            experience: "5 years",
        },
        {
            name: "CSS",
            level: "Advance",
            category: "Stylesheet Language",
            experience: "5 years",
        },
        {
            name: "SASS",
            level: "Advance",
            category: "Stylesheet Language",
            experience: "3 years",
        },
        {
            name: "Bootstrap",
            level: "Advance",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "Tailwind",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "React",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "Express",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "1 year",
        },
        {
            name: "Node js",
            level: "Intermediate",
            category: "Runtime Environment",
            experience: "1 year",
        },
        {
            name: "MySQL",
            level: "Intermediate",
            category: "Database",
            experience: "2 years",
        },
        {
            name: "MongoDB",
            level: "Intermediate",
            category: "Database",
            experience: "1 year",
        },
        {
            name: "Git and GitHub",
            level: "Advance",
            category: "Version Control",
            experience: "3 years",
        },
        {
            name: "npm",
            level: "Intermediate",
            category: "Package Manager",
            experience: "1 year",
        },
        {
            name: "Linux",
            level: "Intermediate",
            category: "Operating System",
            experience: "2 years",
        },
        {
            name: "Photoshop",
            level: "Beginner",
            category: "Design and Graphics",
            experience: "2 years",
        },
    ];
    printHeaderInBox("Skills and Expertise");
    let ans = await inquirer.prompt({
        name: "sortBy",
        type: "list",
        choices: ["Category (Default)", "List by Category (only names)", "Alphabetical", "Proficiency"],
        message: "Sort skills by?",
    });

    // after checking all conditions the printing algo begins so each case only sorts the array.
    // not using break on each case to reduce repetition
    switch (ans.sortBy) {
        case "List by Category (only names)":
            let currentCategory = "";
            let skillArray = [];
            console.log("\n--------------------------------------------");
            for (let i in skills) {
                if (currentCategory !== skills[i].category) {
                    // on category change print the values in skillArray
                    // don't execute for the first item
                    if (currentCategory !== "") {
                        console.log(`${chalk.greenBright(currentCategory)}: ${skillArray.join(", ")}`);
                    }
                    // update current category and reset skillArray
                    currentCategory = skills[i].category;
                    skillArray = [];
                }
                skillArray.push(skills[i].name);
            }
            console.log("--------------------------------------------");
            // exception: need break coz we are printing in list
            break;
        case "Proficiency":
            // TODO very repetitive make the output portion a separate function
            const advanceSkills = skills.filter(skill => skill.level === "Advance");
            const intermediateSkills = skills.filter(skill => skill.level === "Intermediate");
            const beginnerSkills = skills.filter(skill => skill.level === "Beginner");
            console.log("\n--------------------------------------------");
            console.log(chalk.redBright("Advance"));
            console.log("--------------------------------------------");
            advanceSkills.forEach(async skill => {
                console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
                console.log(`\t${skill.level} / ${skill.experience}`);
                console.log("--------------------------------------------");
            });
            console.log(chalk.redBright("Intermediate"));
            console.log("--------------------------------------------");
            intermediateSkills.forEach(async skill => {
                console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
                console.log(`\t${skill.level} / ${skill.experience}`);
                console.log("--------------------------------------------");
            });
            console.log(chalk.redBright("Beginner"));
            console.log("--------------------------------------------");
            beginnerSkills.forEach(async skill => {
                console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
                console.log(`\t${skill.level} / ${skill.experience}`);
                console.log("--------------------------------------------");
            });
            break;
        case "Alphabetical":
            skills.sort((a, b) => a.name.localeCompare(b.name));
        // don't break just sort
        // case "Proficiency":
        //     skills.sort((a, b) => a.proficiency.localeCompare(b.proficiency));
        // don't break just sort
        case "Category (Default)":
            console.log("\n--------------------------------------------");
            skills.forEach(async skill => {
                console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
                console.log(`\t${skill.level} / ${skill.experience}`);
                console.log("--------------------------------------------");
            });
            break;

        default:
            console.log("Invalid option");
    }
}

function myProjects() {
    const projects = [
        {
            title: "Yatra Nepal",
            techStack: "HTML, CSS, JavaScript, Bootstrap",
            description:
                "Web application featuring a dynamic calendar view showcasing diverse events throughout Nepal across the year",
        },
        {
            title: "E-Commerce Web App",
            techStack: "MERN Stack, Bootstrap, Nodemailer, JWT",
            description:
                "Feature-rich web application, seamlessly integrating all essential functionalities of a standard e-commerce platform.",
        },
        {
            title: "Kheti Bazar",
            techStack: "MERN Stack, Bootstrap",
            description:
                "A robust web app facilitating seamless Contract Management to pioneer Contract Farming - 1st runner up, TECHTRlX23 HACKATHON",
        },
        {
            title: "E-Commerce Web App",
            techStack: "MERN Stack, TypeScript, Nodemailer, JWT",
            description: "A robust and scalable backend solution for a Food Delivery Platform.",
        },
    ];
    printHeaderInBox("My Projects");
    console.log("\n--------------------------------------------");
    projects.forEach(async project => {
        console.log(`${chalk.greenBright(project.title)}`);
        console.log(`\t${project.techStack}`);
        console.log(`\t${project.description}`);
        console.log("--------------------------------------------");
    });
}

function randomFact() {
    const facts = [
        "I watch a lot of videos on space, relativity and quantum mechanics.",
        "I can speak 5 languages: Nepali, English, Newari, Hindi, Japanese.",
        "I read a lot of web novels",
        "I enjoy climbing and bouldering.",
        "I am pretty good at chess (1400 chess.com)",
    ];
    randomIndex = Math.floor(Math.random() * facts.length);

    // todo: try to make the random go through all before repeating
    // if(factUsedIndex.length == facts.length){
    //     factUsedIndex = []
    // }

    // let randomIndex = -1
    // while(factUsedIndex.includes(randomIndex)){
    //     randomIndex = Math.floor(Math.random() * facts.length);
    // }
    // factUsedIndex.push(randomIndex)


    
    console.log(facts[randomIndex]);
}

async function userInterface() {
    console.log(
        chalk.greenBright("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    );
    let exit = false;
    let ans = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: [
            "Educational Background",
            "Contact Information",
            "Skills and Expertise",
            "Projects",
            "Hobbies and Interests",
            "Random Fact about me",
            "Exit",
        ],
        message: "What would you like to know about me?",
    });
    switch (ans.option) {
        case "Contact Information":
            contactInformation();
            break;
        case "Educational Background":
            educationalBackground();
            break;
        case "Skills and Expertise":
            await skillsAndExpertise();
            break;
        case "Projects":
            myProjects();
            break;
        case "Hobbies and Interests":
            console.log("soon");
            break;
        case "Random Fact about me":
            randomFact();
            break;
        // get this for yourself
        case "Exit":
            exit = true;
            break;
        default:
            console.log("invalid option");
    }
    if (exit) {
        console.log(chalk.redBright("Exiting..."));
        await sleep(150);
        console.log(chalk.red("Thank you for visiting"));
        await sleep(150);
        console.log(chalk.redBright("BYE"));
    } else {
        userInterface();
    }
}

// driver code using top level await
console.clear();
await welcome();
await introduction();
await userInterface();
