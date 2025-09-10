import { extractTldr, readmeToPlainText, splitByDashAndCapitalize } from "../utils";

export async function getAllProjects(url: string) {
    try {
        let projects: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean}[] = [];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            const projectsDb = data["projects"];
            for (const elem of projectsDb) {
                let project: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean, url: string} = 
                {
                    "picPath": "",
                    "title": "",
                    "subtitle": "",
                    "period": "",
                    "description": "",
                    "items": [],
                    "featured": false,
                    "url": ""
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
                project.items = extractTldr(elem.readme).map((feature) => feature.trim());
                project.featured = Array.from(elem.topics).indexOf("featured") == -1 ? false : true;
                project.url = `https://github.com/${elem.owner}/${elem.repo}`; // Hard code the Github bit
                projects.push(project);
            }
            return projects;
        }
    } catch (err: unknown) {
        console.log(`Error fetching projects: ${err}`);
    }
};