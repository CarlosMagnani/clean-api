export const v1RoutePrefix = '/api/v1';

import { RouteConfigInterface } from '../interfaces/route-config.interface';
import { SwaggerDefinition } from 'swagger-jsdoc';


const v1Routes: RouteConfigInterface[] = [

];

const v1Swagger: SwaggerDefinition = {
    tags: [
        {
            name: 'Application V1',
            description: 'Endpoints to study clean-architecture',
        },
    ],

    paths: {

    }
}

export { v1Swagger }