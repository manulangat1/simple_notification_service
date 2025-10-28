import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
@Injectable()
export class ResendService {
  private resend: Resend;
  constructor(private configService: ConfigService) {
    // TODO: come and do the
    this.resend = new Resend(
      this.configService.getOrThrow<string>('RESEND_API_KEY'),
    );
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
}
