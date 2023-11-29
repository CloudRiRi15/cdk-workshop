import * as cdk from 'aws-cdk-lib' ;
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelooHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,    //execution enviroment
      code: lambda.Code.fromAsset('lambda'),  //code loaded from "lambda directory"
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });
  }
}