
import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Apple, 
  Brain, 
  Dumbbell, 
  StretchHorizontal, 
  HandMetal, 
  Bone, 
  Thermometer 
} from 'lucide-react';

export const SPECIALTIES = [
  { name: 'Acupuntura Médica', slug: 'acupuntura', icon: <Stethoscope className="w-8 h-8" /> },
  { name: 'Clínica da Dor', slug: 'clinica-da-dor', icon: <Activity className="w-8 h-8" /> },
  { name: 'Ortopedia', slug: 'ortopedia', icon: <Bone className="w-8 h-8" /> },
  { name: 'Nutrição', slug: 'nutricao', icon: <Apple className="w-8 h-8" /> },
  { name: 'Psicologia', slug: 'psicologia', icon: <Brain className="w-8 h-8" /> },
  { name: 'Fisioterapia', slug: 'fisioterapia', icon: <Dumbbell className="w-8 h-8" /> },
  { name: 'RPG', slug: 'rpg', icon: <StretchHorizontal className="w-8 h-8" /> },
  { name: 'Massoterapia', slug: 'massoterapia', icon: <HandMetal className="w-8 h-8" /> },
  { name: 'Reumatologia', slug: 'reumatologia', icon: <Thermometer className="w-8 h-8" /> },
  { name: 'Fisiatria', slug: 'fisiatria', icon: <HeartPulse className="w-8 h-8" /> },
];

export const INSURANCES = [
  'Amil', 'Apub', 'Asfeb', 'Asseba', 'Assefaz', 'Asteba', 'AtitudeSaúde', 'BCSaúde', 
  'Camed Saúde', 'CapSaúde', 'Casembrapa', 'Casseb', 'Cassi', 'Codevasf', 'Conab', 
  'Fachesf', 'Fusex', 'Gama', 'Geap Saúde', 'Hapvida', 'Hospital Naval de Salvador', 
  'Life', 'Nordeste Saúde Empresarial', 'NotreDame Intermédica', 'Pasa', 'Saúde Petrobrás', 
  'Plan-Assiste', 'Planserv', 'Porto Saúde', 'Postal Saúde', 'Pro-Social', 'Saúde Caixa', 
  'Select', 'Sepaco', 'Telos', 'Trt5', 'Unafisco Saúde', 'Vale'
];

export const CONTACT_INFO = {
  email: 'agendamentos@clinicaviterbo.com.br',
  phone: '(71) 3016-3015',
  whatsapp: '(71) 9 9991-5525',
  instagram: 'https://instagram.com/clinicaviterbo',
  facebook: 'https://facebook.com/clinicaviterbo'
};
