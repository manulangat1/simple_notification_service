import { Controller } from '@nestjs/common';
import { MailtrapService } from './mailtrap.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SendMailOptions } from '../common/interfaces/general.interfaces';

@Controller('mailtrap')
export class MailtrapController {
  constructor(private readonly mailtrapService: MailtrapService) {}

  @MessagePattern('send_mail')
  async handleSendMail(@Payload() data: SendMailOptions) {
    await this.mailtrapService.sendMail(data);
  }
}
