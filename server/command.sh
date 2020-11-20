# create an s3 bucket
aws s3 mb s3://my-blogs-site-code-sam

# package cloudformation
aws cloudformation package  --s3-bucket my-blogs-site-code-sam --template-file template.yaml --output-template-file gen/template-generated.yaml
# sam package ... 

# deploy 
aws cloudformation deploy --template-file gen/template-generated.yaml --stack-name my-blog-site-sam --capabilities CAPABILITY_IAM