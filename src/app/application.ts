import { ExpressAdapter } from "../infra/adapter/express.adapter";
import { HttpRouterInterface } from "./interfaces/http-router.interface";
import { HttpRouter } from "../infra/api/http-routes.api";
import { applicationConfiguration } from "../infra/api/config";


export class Application {
    private expressAdapter: ExpressAdapter;
    private httpRouter: HttpRouterInterface;


    constructor(){
        this.expressAdapter = new ExpressAdapter();
        this.httpRouter = new HttpRouter(this.expressAdapter);
    }

    start(): void{
        try {
            console.info(`[Application] Running on ${applicationConfiguration.devMode ? 'development' : 'production'} mode`);
            this.expressAdapter.listen(applicationConfiguration.nodePort)
            this.httpRouter.init();
        } catch (error: unknown) {
            console.error(`[Application] Error on start application: ${error}`)
        }
    }
}