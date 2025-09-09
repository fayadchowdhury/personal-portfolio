import { readmeToPlainText } from "../utils";

export async function getAllProjects(url: string) {
    try {
        let projects: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean}[] = [];
        const res = await fetch(url);
        if ( res.status == 200 ) {
            const data = await res.json();
            const projectsDb = data["projects"];
            for (const elem of projectsDb) {
                let project: {picPath: string, title: string, subtitle: string, period: string, description: string, items: string[], featured: boolean} = 
                {
                    "picPath": "",
                    "title": "",
                    "subtitle": "",
                    "period": "",
                    "description": "",
                    "items": [],
                    "featured": false
                }
                project.picPath = elem.imageUrl;
                project.title = elem.repo;
                const subtitleText: string = elem.description ?? "";
                project.subtitle = subtitleText.length > 30 ? subtitleText.slice(0,30) + "..." : subtitleText;
                const projectCreatedAtYear: Number = new Date(elem.projectCreatedAt).getFullYear();
                const projectUpdatedAtYear: Number = new Date(elem.projectUpdatedAt).getFullYear();
                const periodText = `${projectCreatedAtYear} - ${projectUpdatedAtYear == new Date().getFullYear() ? "Present" : projectUpdatedAtYear}`;
                project.period = periodText;
                const readmeText: string = readmeToPlainText(elem.readme ?? "");
                project.description = readmeText.length > 50 ? readmeText.slice(0,50) + "..." : readmeText;
                project.items = ["abc", "def"];
                project.featured = Array.from(elem.topics).indexOf("featured") == -1 ? false : true;
                projects.push(project);
            }
            return projects;
        }
    } catch (err: unknown) {
        console.log(`Error fetching projects: ${err}`);
    }
};