import { extractTldr, readmeToPlainText, splitByDashAndCapitalize } from "../utils";

export async function getAllProjects(url: string) {
    try {
        let projects: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean, url: string, readme: string}[] = [];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            const projectsDb = data["projects"];
            for (const elem of projectsDb) {
                let project: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean, url: string, readme: string} = 
                {
                    "picPath": "",
                    "title": "",
                    "subtitle": "",
                    "period": "",
                    "description": "",
                    "items": [],
                    "featured": false,
                    "url": "",
                    "readme": ""
                }
                project.picPath = elem.imageUrl;
                project.title = splitByDashAndCapitalize(elem.repo);
                const subtitleText: string = elem.description ?? "";
                project.subtitle = subtitleText.length > 70 ? subtitleText.slice(0,70) + "..." : subtitleText;
                const projectCreatedAtYear: Number = new Date(elem.projectCreatedAt).getFullYear();
                const projectUpdatedAtYear: Number = new Date(elem.projectUpdatedAt).getFullYear();
                const periodText = `${projectCreatedAtYear} - ${projectUpdatedAtYear == new Date().getFullYear() ? "Present" : projectUpdatedAtYear}`;
                project.period = periodText;
                const readmeText: string = readmeToPlainText(elem.readme ?? "");
                project.description = readmeText.length > 100 ? readmeText.slice(0,100) + "..." : readmeText;
                project.items = extractTldr(elem.readme).map((feature) => feature.trim().slice(2));
                project.featured = Array.from(elem.topics).indexOf("featured") == -1 ? false : true;
                project.url = `https://github.com/${elem.owner}/${elem.repo}`; // Hard code the Github bit
                project.readme = elem.readme ?? "";
                projects.push(project);
            }
            return projects;
        }
    } catch (err: unknown) {
        console.log(`Error fetching projects: ${err}`);
    }
};

export async function getAllWorks(url: string) {
    try {
        let works: {order: number, iconPath: string, title: string, subtitle: string, period: string, description: string, items: string[]}[] = [];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            const worksDb = data["works"];
            for (const elem of worksDb) {
                let work: {order: number, iconPath: string, title: string, subtitle: string, period: string, description: string, items: string[]} = 
                {
                    "order": 1,
                    "iconPath": "",
                    "title": "",
                    "subtitle": "",
                    "period": "",
                    "description": "",
                    "items": []
                }
                work.order = Number(elem.order);
                work.iconPath = elem.iconPath;
                work.title = elem.title;
                work.subtitle = elem.subtitle;
                work.period = elem.period;
                work.description = elem.description;
                work.items = elem.items;
                works.push(work);
            }
            return works;
        }
    } catch (err: unknown) {
        console.log(`Error fetching works: ${err}`);
    }
};

export async function getAllTestimonials(url: string) {
    try {
        let testimonials: {title: string, message: string, name: string, designation: string, imagePath: string, rating: number}[] = [];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            const testimonialsDb = data["testimonials"];
            for (const elem of testimonialsDb) {
                let testimonial: {title: string, message: string, name: string, designation: string, imagePath: string, rating: number} = 
                {
                    "title": "",
                    "message": "",
                    "name": "",
                    "designation": "",
                    "imagePath": "",
                    "rating": 0
                }
                testimonial.title = elem.title;
                testimonial.message = elem.message;
                testimonial.name = elem.name;
                testimonial.designation = elem.designation;
                testimonial.imagePath = elem.imagePath;
                testimonial.rating = Number(elem.rating);
                testimonials.push(testimonial);
            }
            return testimonials;
        }
    } catch (err: unknown) {
        console.log(`Error fetching testimonials: ${err}`);
    }
};

export async function getSkillsByType(url: string, type: string) {
    try {
        const reqBody = { "type": type };
        let skills: {name: string, iconPath: string, type: string, subType: string }[] = [];
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        });
        if ( res.status == 200 ) {
            const data = await res.json();
            const skillsDb = data["skills"];
            for (const elem of skillsDb) {
                let skill: {name: string, iconPath: string, type: string, subType: string } = 
                {
                    "name": "",
                    "iconPath": "",
                    "type": "",
                    "subType": ""
                }
                skill.name = elem.name;
                skill.iconPath = elem.iconPath;
                skill.type = elem.type;
                skill.subType = elem.subType;
                skills.push(skill);
            }
            if ( skills.length > 0 ){
                const groupedSkills = Object.entries(
                    skills.reduce((acc: Record<string, { name: string; iconPath: string }[]>, skill) => 
                    {
                        if (!acc[skill.subType]) {
                            acc[skill.subType] = [];
                        }
                        acc[skill.subType].push({
                            name: skill.name,
                            iconPath: skill.iconPath,
                        });
                        return acc;
                    },
                    {}
                    )
                ).map(([subType, skills]) => 
                    (
                        {
                            subType,
                            skills,
                        }
                    )
                );
                return groupedSkills;
            }
            else {
                console.log(`Error grouping skills into core and area skills`);
            }
        }
    } catch (err: unknown) {
        console.log(`Error fetching skills: ${err}`);
    }
};

export async function getNavbarData(url: string) {
    try {
        let navbar: { leader: { text: string, specialChar: string}, links: { label: string, url: string }[] };
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            navbar = data["navbar"];
            return navbar;
        }
    } catch (err: unknown) {
        console.log(`Error fetching navbar data: ${err}`);
    }
};

export async function getTaglinesData(url: string) {
    try {
        let taglines: { text: string, icon: string }[];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            taglines = data["taglines"];
            return taglines;
        }
    } catch (err: unknown) {
        console.log(`Error fetching taglines data: ${err}`);
    }
};

export async function getSocialsData(url: string) {
    try {
        let socials: { icon: string, link: string }[];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            socials = data["socials"];
            return socials;
        }
    } catch (err: unknown) {
        console.log(`Error fetching socials data: ${err}`);
    }
};

export async function getNameData(url: string) {
    try {
        let name: string;
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            name = data["name"];
            return name;
        }
    } catch (err: unknown) {
        console.log(`Error fetching name data: ${err}`);
    }
};

export async function getIntroData(url: string) {
    try {
        let intro: string;
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            intro = data["intro"];
            return intro;
        }
    } catch (err: unknown) {
        console.log(`Error fetching intro data: ${err}`);
    }
};

export async function getContactFormData(url: string) {
    try {
        let contactForm: { title: string, description: string };
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            contactForm = data["contactForm"];
            return contactForm;
        }
    } catch (err: unknown) {
        console.log(`Error fetching contact form data: ${err}`);
    }
};