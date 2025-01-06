/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export default class CreateQueueDto {
  @IsNotEmpty({
    message: "O campo de expertId é obrigatório!",
  })
  expertId: string;
}
