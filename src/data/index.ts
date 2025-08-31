import data_dev from "./data-dev.json";
import data_prod from "./data-prod.json"

const mode: string = import.meta.env.VITE_ENV;
let data: typeof data_dev | typeof data_prod;

if (mode === "dev-json") {
    data = data_dev;
} else if (mode === "prod-json") {
    data = data_prod;
} else {
    data = data_dev;
}

export default data;