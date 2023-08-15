import { HttpRouterInterface } from "../../app/interfaces/http-router.interface";
import { HttpServerInterface } from "../../app/interfaces/http-server.interface";


export class HttpRouter implements HttpRouterInterface {
    private httpServerInstance: HttpServerInterface;

    constructor(httpServerInstance: HttpServerInterface){
        this.httpServerInstance = httpServerInstance;
    }

    init(): void {
        
    }
}