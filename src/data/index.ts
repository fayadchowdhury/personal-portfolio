import data_dev from "./data-dev.json";
import data_prod from "./data-prod.json"
export * from "./dataApi";

const mode: string = import.meta.env.VITE_ENV;
export let data: typeof data_dev | typeof data_prod;

if (mode === "dev-json") {
    data = data_dev;
} else if (mode === "prod-json") {
    data = data_prod;
} else {
    data = data_dev;
}

export const baseUrl: string = data["baseUrl"];