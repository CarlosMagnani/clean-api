import express, { Express, NextFunction, Request, Response, Router} from 'express';
import compression from 'compression';
import cors from 'cors';
import { HttpServerInterface } from '../../app/interfaces/http-server.interface';
import { serverErrorMiddleware } from '../api/middleware/server-error.middleware';
import { HttpResponse } from '../api/response/http.response';


export class ExpressAdapter implements HttpServerInterface {
    private express: Express;
    private router: Router;

    constructor(){
        this.express = express();
        this.router = Router();
        this.express.use(express.json());
        this.express.use(compression());
        this.express.use(cors());
        this.express.use(this.router);
        this.express.use(serverErrorMiddleware.execute)
    }

    on(method: string, url: string, callback: Function): void {
        this.router[method](url, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const requestCustom = {
                    ...req.params,
                    ...req.query,
                    ...req.body
                };
                const output = await callback(requestCustom);

               const response: HttpResponse = {
                    statusCode: res.statusCode,
                    message: res.statusMessage,
                    response: output
                };

                return res.json(response);

            } catch (error: unknown) {
                next(error);
            }
        });
    }

    listen(port: number): void {
        console.info(`[ExpressAdapter] Listening on port ${port}`);
        this.express.listen(port);
    }
}