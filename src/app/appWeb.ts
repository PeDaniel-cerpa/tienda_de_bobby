import { AplicationBuilder } from "../class/aplicationBuilderService";

const appWeb = new AplicationBuilder().webView().build();
appWeb.start();
export default appWeb;
