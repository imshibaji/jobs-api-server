import { Injectable } from '@nestjs/common';
import { createTransport, Transporter, TransportOptions } from 'nodemailer';
import { Attachment } from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService{
    private transporter: Transporter;
    private attachments: Attachment[];
    public fromName: string;
    public fromEmail: string = process.env.SMTP_USER || 'admin@localhost';
    constructor(){
        this.transporter = createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
              user: process.env.SMTP_USER || 'username',
              pass: process.env.SMTP_PASS || 'password'
            }
          } as TransportOptions);
    }

    async addAttachment(attachment: Attachment){
        this.attachments.push(attachment);
        return this;
    }

    async sendEmail(email: string, subject: string, message: string) {
        return await this.transporter.sendMail({
            from: (this.fromName)? `${this.fromName} <${this.fromEmail}>` : this.fromEmail,
            to: email,
            subject: subject,
            text: message
        });
    }

    async sendHtmlEmail(email: string, subject: string, message: string) {
        return await this.transporter.sendMail({
            from: (this.fromName)? `${this.fromName} <${this.fromEmail}>` : this.fromEmail,
            to: email,
            subject: subject,
            html: message,
            attachments: this.attachments
        });
    }
}