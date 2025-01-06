import { IsEmail, IsNotEmpty } from "class-validator";

export default class CreateExpertsDto {
  @IsNotEmpty({ message: "O campo nome é obrigatório." })
  name: string;

  @IsNotEmpty({ message: "O campo nome é obrigatório." })
  @IsEmail({}, { message: "O campo deve ter um formato de email válido." })
  email: string;
  phone: string;
}
