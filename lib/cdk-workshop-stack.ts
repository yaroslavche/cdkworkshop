import cdk = require('@aws-cdk/core');
import lambda = require("@aws-cdk/aws-lambda");
import apigw = require("@aws-cdk/aws-apigateway");

export class CdkWorkshopStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler'
        });

        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: hello
        });
    }
}
