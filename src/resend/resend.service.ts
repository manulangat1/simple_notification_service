import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
@Injectable()
export class ResendService {
  private resend: Resend;
  constructor() {
    // TODO: come and do the
    this.resend = new Resend('');
  }

  async sendHTMLEmail(): Promise<any> {
    try {
      await this.resend.emails.send({
        from: 'emmanuelthedeveloper@gmail.com',
        to: 'emmanuelthedeveloper@gmail.com',
        subject: '',
        html: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   async sendEmail(): Promise<any> {
  //     try {
  //     } catch (error) {
  //       console.log();
  //     }
  //   }
}
