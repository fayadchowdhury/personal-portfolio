import data_dev from "./data-dev.json";
import data_prod from "./data-prod.json"
import { getAllProjects } from "./dataApi";

const mode: string = import.meta.env.VITE_ENV;
let data: typeof data_dev | typeof data_prod;

if (mode === "dev-json") {
    data = data_dev;
} else if (mode === "prod-json") {
    data = data_prod;
} else {
    data = data_dev;
}

const baseUrl: string = data["baseUrl"];
const apiProjects = await getAllProjects(baseUrl + "projects/getAll");
if (apiProjects) {
    data["projects"] = apiProjects;
}

export default data;