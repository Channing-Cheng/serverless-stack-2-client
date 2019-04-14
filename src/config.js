const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-4v15nei8x1xq"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://c0fqt06txf.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_MvM8pfZtR",
    APP_CLIENT_ID: "2liti6fvchbkjrj8bk2nq71kc8",
    IDENTITY_POOL_ID: "us-east-1:f2af9730-ed37-42dc-881c-1dc1ff10f1fb"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-v1ieimad65u2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h2w98i7yi1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_99zwZaBM5",
    APP_CLIENT_ID: "tk7a8acer6ue98clo2grr5p4u",
    IDENTITY_POOL_ID: "us-east-1:1adcf4c0-739a-43f7-9d08-d4dea084edd3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
