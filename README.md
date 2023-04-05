# CloudFour-AWS
This GitHub repository contains an API that is designed to perform several operations related to cloud computing. As a cloud computing engineering student, this API is a great resource for understanding how to deploy a working API on AWS Elastic Beanstalk, upload files to an S3 bucket, and store the links in a database. This API can retrieve all the names of the uploaded files and links to the database.

## Features
This API has been developed to provide the following features:

- Upload a file to an S3 bucket and save the link in the database.
- Retrieve all the names of the uploaded files and links to the database.

## Deployment
The API has been deployed on AWS Elastic Beanstalk. The deployment process is as follows:

- Clone the repository to your local system.
- Create a new Elastic Beanstalk environment and application.
- Use the AWS Command Line Interface (CLI) to deploy the application on Elastic Beanstalk.
- Configure the environment variables to connect to the database.

## Usage
The API can be used to upload a file to an S3 bucket and save the link in the database. To use the API, follow the steps below:

- Use a web client like Postman or curl to make a POST request to the /upload endpoint with the file to upload.
- The API will return a response indicating if the upload was successful or failed.
- To retrieve all the names of the uploaded files and links to the database, make a GET request to the /files endpoint.

## Conclusion
This API is a great resource for cloud computing engineering students looking to learn how to deploy a working API on AWS Elastic Beanstalk and upload files to an S3 bucket. The API is easy to use and can be customized to fit your specific use case. If you have any questions or issues, feel free to reach out to the developer.
