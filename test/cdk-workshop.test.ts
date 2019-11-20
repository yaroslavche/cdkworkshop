import {expect as expectCDK, haveResource} from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import CdkWorkshop = require('../lib/cdk-workshop-stack');

test('Lambdas created', () => {
    const app = new cdk.App();
    const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
    expectCDK(stack).to(haveResource('AWS::Lambda::Function', {
        Handler: 'hello.handler'
    }));
    expectCDK(stack).to(haveResource('AWS::Lambda::Function', {
        Handler: 'hitcounter.handler'
    }));
});
