import swaggerJsdoc from 'swagger-jsdoc';
import { SwaggerDefinition } from 'swagger-jsdoc';
import { v1Swagger } from '../../app/v1/v1.module';

class SwaggerAdapter {
    static createSwaggerDocs(swaggerDefinition: SwaggerDefinition): unknown {
        const swaggerDocs = swaggerJsdoc({
            swaggerDefinition,
            apis: []
        });

        return swaggerDocs;
    }
}

export const swaggerDocsForV1 = SwaggerAdapter.createSwaggerDocs(v1Swagger);