import { IsEmail, IsNotEmpty } from "class-validator";

export default class CreateUsersDto {
  @IsNotEmpty({ message: "O campo nome é obrigat[orio!" })
  name: string;

  @IsNotEmpty({ message: "O campo email é obrigatório!" })
  @IsEmail({}, { message: "O campo email é obrigatório!" })
  email: string;

  @IsNotEmpty({ message: "O campo password é obrigatório!" })
  password: string;
}
