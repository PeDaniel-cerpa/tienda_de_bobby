import { AplicationBuilder } from "../class/aplicationBuilderService";

const app = new AplicationBuilder().terminalView().build();
app.start();

export default app;
