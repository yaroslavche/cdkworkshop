# AWS CDK Workshop

https://cdkworkshop.com/

`npm run build`   compile typescript to js

`cdk synth`       emits the synthesized CloudFormation template

`cdk deploy`      deploy this stack to your default AWS account/region

```
...
Outputs:
CdkWorkshopStack.ViewHitCounterViewerEndpoint = https://xxxxxxxxxx.execute-api.{region}.amazonaws.com/prod/
CdkWorkshopStack.Endpoint = https://yyyyyyyyyy.execute-api.{region}.amazonaws.com/prod/
```

```bash
$ curl {CdkWorkshopStack.ViewHitCounterViewerEndpoint}{path}
```

`CdkWorkshopStack.Endpoint`:
![table](http://i.piccy.info/i9/8d65007bf0f74522f48d726e2b8f2077/1574245704/11382/1344752/Screenshot_20191120_122744.png)
