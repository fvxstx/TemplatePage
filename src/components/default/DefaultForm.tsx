"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  firstName: z.string().min(1, "Primeiro nome é obrigatório"),
  whatsappNumber: z.string().min(1, "Número do WhatsApp é obrigatório"),
  email: z.string().email({ message: "Digite um email válido" }),
});

type FormData = z.infer<typeof FormSchema>;

const DefaultForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Card className="bg-transparent bg-opacity-80 rounded-3xl border-[#3561FE] w-auto lg:w-96 text-white mx-4 mb-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-2">
          Entre na lista VIP <br />
          <span className="text-lg font-medium">
            e garanta até 70% de desconto no pré lançamento!
          </span>
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Primeiro nome"
              className="w-full bg-[#04071280] border-[#1C389E] rounded-xl h-12 placeholder:text-[#6074B9] placeholder:font-medium"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Número do Whatsapp"
              className="w-full bg-[#04071280] border-[#1C389E] rounded-xl h-12 placeholder:text-[#6074B9] placeholder:font-medium"
              {...register("whatsappNumber")}
            />
            {errors.whatsappNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.whatsappNumber.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="w-full bg-[#04071280] border-[#1C389E] rounded-xl h-12 placeholder:text-[#6074B9] placeholder:font-medium"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-[#FFC763] text-[#704700] font-bold text-sm h-12 my-4 rounded-xl hover:bg-yellow-600"
          >
            Entrar para lista VIP
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default DefaultForm;
