```
 npm i @hapi/joi bcrypt bcryptjs express jsonwebtoken mysql nodemailer dotenv
 ```
 ```
 CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    otp VARCHAR(6),
    otpExpire DATETIME
);

 ```
 