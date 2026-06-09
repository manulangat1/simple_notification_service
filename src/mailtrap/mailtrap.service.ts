import { Injectable, Logger } from '@nestjs/common';
import { MailtrapClient } from 'mailtrap';
import { AppConfigService } from '../app-config/app-config.service';
import { SendMailOptions } from '../common/interfaces/general.interfaces';

@Injectable()
export class MailtrapService {
  private readonly client: MailtrapClient;
  private readonly logger = new Logger();
  private readonly sender: { name: string; email: string };
  constructor(private configService: AppConfigService) {
    this.sender = {
      name: this.configService.mailTrapSenderName,
      email: this.configService.mailTrapEmail,
    };
    this.client = new MailtrapClient({
      token: this.configService.mailTrapApiKey,
    });
  }

  async sendMail({ to, subject, text, html }: SendMailOptions): Promise<void> {
    const recipients = Array.isArray(to)
      ? to.map((email) => ({ email }))
      : [{ email: to }];

    try {
      const res = await this.client.send({
        from: this.sender,
        to: recipients,
        subject,
        text,
        html,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      this.logger.error(`Failed to send email to ${to}`);
      throw error;
    }
  }
}
