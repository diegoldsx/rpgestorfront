import { z } from "zod";

export const ServiceDeskSchema = z.object({
  id: z.string(),
  registration: z.string().min(1, { message: "Matrícula é obrigatório" }),
  document: z.string().min(1, { message: "O documento é obrigatório" }),
  memberId: z.string(),
  phone: z.string().optional(),
  email: z.string().min(1, { message: "O email é obrigatório" }),
  company: z.string().optional(),
  sector: z.string().optional(),
  local: z.string().optional(),
  appointmentDate: z
    .string()
    .min(1, { message: "A data de agendamento é obrigatória" }),
  appointmentHour: z
    .string()
    .min(1, { message: "A hora de agendamento é obrigatória" }),
  description: z.string().optional(),
});

export type ServiceDeskType = z.infer<typeof ServiceDeskSchema>;

export const fakeServiceDesks: ServiceDeskType[] = [
  {
    id: '1',
    registration: 'registration 1',
    document: 'document 1',
    memberId: 'memberId 1',
    phone: 'phone 1',
    email: 'email 1',
    company: 'company 1',
    sector: 'sector 1',
    local: 'local 1',
    appointmentDate: 'appointmentDate 1',
    appointmentHour: 'appointmentHour 1',
    description: 'description 1',
  },
  {
    id: '2',
    registration: 'registration 2',
    document: 'document 2',
    memberId: 'memberId 2',
    phone: 'phone 2',
    email: 'email 2',
    company: 'company 2',
    sector: 'sector 2',
    local: 'local 2',
    appointmentDate: 'appointmentDate 2',
    appointmentHour: 'appointmentHour 2',
    description: 'description 2',
  }
]

