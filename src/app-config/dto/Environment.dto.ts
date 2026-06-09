import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class EnvironmentValues {
  @IsString()
  @IsNotEmpty()
  MAIL_TRAP_API_KEY!: string;

  @IsEmail()
  @IsNotEmpty()
  MAILTRAP_SENDER_EMAIL: string;

  @IsString()
  @IsNotEmpty()
  MAILTRAP_SENDER_NAME: string;
}
