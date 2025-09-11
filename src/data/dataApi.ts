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
        console.log(`Error fetching socials data: ${err}`);
    }
};