# API Mails built with Node.js

This is a sample API for sending emails using Node.js, Express, and Nodemailer.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/juanmaescudero/api-mails
```

2. Navigate to the project directory:

```bash
cd api-mails
```

3. Install dependencies:

```bash
npm install
```

## Usage

Create a `.env` file in the root of your project and set the following variables:

```bash
MAIL_USER=YOUR_EMAIL
MAIL_PASS=YOUR_PASS
MAIL_HOST=YOUR_SMTP_HOST
MAIL_PORT=YOUR_PORT
```

Make sure to replace `YOUR_EMAIL`, `YOUR_PASS`, `YOUR_SMTP_HOST`, and `YOUR_PORT` with your actual email credentials and SMTP server information.

## API Endpoints

- `POST /mails/register`: Send an email using the following JSON format:

```json
{
    "name": "John Doe",
    "email": "john@doe.com",
    "template": "USER_REGISTER"
}
```
- `POST /mails/lostPassword`: Send an email using the following JSON format:

```json
{
    "name": "John Doe",
    "email": "john@doe.com",
    "template": "LOST_PASSWORD"
}
```

Ensure to set the appropriate headers and provide the required JSON payload when making requests to the API.

Feel free to customize and extend the API based on your specific email sending needs.