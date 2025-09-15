import {mailtrapClient, sender} from './mailtrap.config.js';
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from './emailTemplate.js'

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }

}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "3c8e7b60-6df6-4120-b7da-e9957014847e",
            template_variables: {
                "name": name,
                "company_info_name": "Auth Pvt. Ltd"
            }
        })
        console.log("Welcome email send successfully", response);
    } catch (error) {
        console.log("Error sending Welcome email:", error);
        throw new Error(`Error sending Welcome email: ${error.message}`);
    }

}

export const resetPasswordEmail = async (email, resetUrl) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
      category: "Password Reset"
    });

    return response; 
  } catch (error) {
    console.log("Error sending password reset email:", error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};


export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        })

        console.log("Password reset email sent successfully", response);

    } catch (error) {
        console.log("Error sending password reset successful email:", error);
        throw new Error(`Error sending password reset successful email: ${error.message}`);
    }

}