import { AplicationBuilder } from "../class/aplicationBuilderService";

const app = new AplicationBuilder().terminalLocalStorageView().build();
app.start();
export default app;