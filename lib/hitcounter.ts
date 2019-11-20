import cdk = require("@aws-cdk/core");
import lambda = require("@aws-cdk/aws-lambda");
import dynamo = require("@aws-cdk/aws-dynamodb");

export interface HitCounterProps {
    downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {

    public readonly handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
        super(scope, id);

        const table = new dynamo.Table(this, 'Hits', {
            partitionKey: {name: 'path', type: dynamo.AttributeType.STRING}
        });

        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        });

        table.grantReadWriteData(this.handler);
        props.downstream.grantInvoke(this.handler);
    }
}
