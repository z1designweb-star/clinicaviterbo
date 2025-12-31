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

export const UNITS = [
  { 
    slug: 'salvador-trade',
    name: 'Unidade Salvador Trade', 
    city: 'Salvador - BA',
    address: 'Av. Tancredo Neves, 1632, Ed. Salvador Trade Center, Torre Sul, salas 1801 a 1804, Caminho das Árvores, Salvador/BA, Cep: 41.820-020', 
    phone: '(71) 3016-3015' 
  },
  { 
    slug: 'boulevard-side',
    name: 'Unidade Boulevard Side', 
    city: 'Salvador - BA',
    address: 'Rua Ewerton Visco, 290, Ed Boulevard Side Empresarial, Salas 614 a 617, Cep 41.820-022, Caminho das Árvores, Salvador/BA', 
    phone: '(71) 9 9991-8031' 
  },
  { 
    slug: 'itaigara',
    name: 'Unidade Itaigara', 
    city: 'Salvador - BA',
    address: 'Av. ACM, 771, Ed Empresarial Torre do Parque, Itaigara, Salvador/BA, Cep 41.825-000', 
    phone: '(71) 9 9991-2838' 
  },
  { 
    slug: 'hangar-park',
    name: 'Unidade Hangar Park', 
    city: 'Salvador - BA',
    address: 'Av. Luis Viana, 13233, Hangar Business, Park 5, salas 508/509, Paralela, Salvador/BA, Cep 41.500-300', 
    phone: '(71) 9 9991-9383' 
  },
  { 
    slug: 'comercio',
    name: 'Unidade Comércio', 
    city: 'Salvador - BA',
    address: 'Rua Miguel Calmon, 39, Ed Nelson de Farias, salas 101/103, Comércio, Salvador/BA, Cep 40.015-010', 
    phone: '(71) 9 9991-5525' 
  },
  { 
    slug: 'dual-medical',
    name: 'Unidade Dual Medical', 
    city: 'Lauro de Freitas - BA',
    address: 'Rua Lafaiete Francisco dos Santos, nº 153, Edf. Dual Medical & Business, Ala A, Salas 603 a 605, Lauro de Freitas/BA, CEP: 42.703-100', 
    phone: '(71) 9 9721-5088' 
  },
];

export interface Doctor {
  name: string;
  crm: string;
  specialties: string[];
  schedule: { day: string; hours: string }[];
}

export const UNIT_DOCTORS: Record<string, Doctor[]> = {
  'salvador-trade': [
    {
      name: 'Dr. Walter Viterbo',
      crm: '11188',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '14h00 às 18h30' },
        { day: 'Quinta-feira', hours: '14h00 às 18h30' }
      ]
    },
    {
      name: 'Dr. José Mitsuru',
      crm: '23723',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 11h30 e 13h30 às 17h30' },
        { day: 'Quarta-feira', hours: '08h00 às 11h30 e 13h30 às 18h30' },
        { day: 'Sexta-feira', hours: '08h00 às 11h30 e 13h30 às 18h30' }
      ]
    },
    {
      name: 'Dra. Vanessa Basílio',
      crm: '17140',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Terça-feira', hours: '08h00 às 12h30' },
        { day: 'Quinta-feira', hours: '08h00 às 12h30 e 13h30 às 17h00' }
      ]
    },
    {
      name: 'Dr. Felipe Caldas',
      crm: '36959',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '08h00 às 11h30' },
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dra. Lia Tércia',
      crm: '19891',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Quarta-feira', hours: '09h00 às 12h30 e 14h00 às 17h00' },
        { day: 'Sexta-feira', hours: '09h00 às 12h30 e 14h00 às 16h30' }
      ]
    },
    {
      name: 'Dr. Wen Shih Yu',
      crm: '11013',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Rodrigo Neves',
      crm: '31049',
      specialties: ['Ortopedia', 'Clínica da Dor'],
      schedule: [
        { day: 'Quinta-feira', hours: '14h00 às 16h00' }
      ]
    },
    {
      name: 'Dra. Ticiana Vilar',
      crm: '24950',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '09h00 às 12h30' }
      ]
    },
    {
      name: 'Dr. Anderson Maia',
      crm: '26361',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '13h30 às 17h30' },
        { day: 'Quinta-feira', hours: '08h00 às 12h00' }
      ]
    }
  ],
  'boulevard-side': [
    {
      name: 'Dr. Walter Viterbo',
      crm: '11188',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '09h00 às 12h00' },
        { day: 'Quinta-feira', hours: '09h00 às 12h00' }
      ]
    },
    {
      name: 'Dra. Manuela Diana',
      crm: '25095',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 13h30' },
        { day: 'Quinta-feira', hours: '08h15 às 11h30 e 13h30 às 17h00' }
      ]
    },
    {
      name: 'Dra. Vanessa Basílio',
      crm: '17140',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Quarta-feira', hours: '08h00 às 12h30' }
      ]
    },
    {
      name: 'Dr. Felipe Caldas',
      crm: '36959',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '14h00 às 18h00' },
        { day: 'Sexta-feira', hours: '14h00 às 18h00' }
      ]
    },
    {
      name: 'Dra. Juliana Alencar',
      crm: '25834',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 11h30 (Agenda Fechada até 28/09/2025)' }
      ]
    },
    {
      name: 'Dr. Marcelo Pedrosa',
      crm: '31062',
      specialties: ['Acupuntura', 'Dor', 'Ortopedia'],
      schedule: [
        { day: 'Quarta-feira', hours: '08h00 às 12h00' }
      ]
    },
    {
      name: 'Dra. Liz Leite',
      crm: '24792',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '14h00 às 17h30' },
        { day: 'Quinta-feira', hours: '14h00 às 17h00' }
      ]
    },
    {
      name: 'Dr. Juan Calcagno',
      crm: '24344',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '08h30 às 11h30 e 13h30 às 18h00' },
        { day: 'Sexta-feira', hours: '08h30 às 11h30 e 13h30 às 18h00' }
      ]
    },
    {
      name: 'Dra. Cristina Peres',
      crm: '22497',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '14h30 às 18h00 (Agenda Fechada)' },
        { day: 'Quarta-feira', hours: '14h00 às 18h00 (Agenda Fechada)' },
        { day: 'Sábado', hours: '08h00 às 11h00' }
      ]
    },
    {
      name: 'Dr. Antônio Mário Lino',
      crm: '11461',
      specialties: ['Ortopedia', 'Dor'],
      schedule: [
        { day: 'Quarta-feira', hours: '14h30 às 17h50' }
      ]
    },
    {
      name: 'Dr. Paulo Conceição',
      crm: '10640',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Mário Augusto',
      crm: '23299',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Quarta-feira', hours: '14h00 às 18h00' }
      ]
    },
    {
      name: 'Dra. Franciele Portela',
      crm: '31512',
      specialties: ['Fisiatria'],
      schedule: [
        { day: 'Quinta-feira', hours: '08h00 às 11h45' }
      ]
    }
  ],
  'itaigara': [
    {
      name: 'Dr. Walter Viterbo',
      crm: '11188',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '14h00 às 18h20' },
        { day: 'Quarta-feira', hours: '14h00 às 18h30' },
        { day: 'Sexta-feira', hours: '09h00 às 12h00' }
      ]
    },
    {
      name: 'Dr. Marcelo Pedrosa',
      crm: '31062',
      specialties: ['Acupuntura', 'Dor', 'Ortopedia'],
      schedule: [
        { day: 'Terça-feira', hours: '08h00 às 12h00' },
        { day: 'Quinta-feira', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Felipe Caldas',
      crm: '36959',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 11h30' },
        { day: 'Quinta-feira', hours: '08h00 às 11h30 e 14h00 às 17h00' }
      ]
    },
    {
      name: 'Dra. Lia Tércia',
      crm: '19891',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h30 às 12h00' }
      ]
    },
    {
      name: 'Dra. Liz Leite',
      crm: '24792',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '09h00 às 12h00' }
      ]
    },
    {
      name: 'Dr. Ilano Rebello',
      crm: '15583',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '13h30 às 17h30' },
        { day: 'Sexta-feira', hours: '13h30 às 18h00' }
      ]
    },
    {
      name: 'Dra. Aline Oquendo',
      crm: '15800',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Terça-feira', hours: '14h30 às 17h30' }
      ]
    },
    {
      name: 'Dr. José Mitsuru',
      crm: '23723',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '14h00 às 17h30' },
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Mário Sanches',
      crm: '32475',
      specialties: ['Ortopedia'],
      schedule: [
        { day: 'Terça-feira', hours: '14h00 às 16h55' }
      ]
    },
    {
      name: 'Dr. Anderson Maia',
      crm: '26361',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Quarta-feira', hours: '08h00 às 11h30 e 14h30 às 17h00' },
        { day: 'Sexta-feira', hours: '08h00 às 12h00 e 14h00 às 17h00' },
        { day: 'Sábado', hours: '08h00 às 12h00' }
      ]
    },
    {
      name: 'Dra. Franciele Portela',
      crm: '31512',
      specialties: ['Fisiatria'],
      schedule: [
        { day: 'Quinta-feira', hours: '08h00 às 11h45' }
      ]
    },
    {
      name: 'Dr. José Renato',
      crm: '9535',
      specialties: ['Acupuntura', 'Ortopedia'],
      schedule: [
        { day: 'Quinta-feira', hours: '14h00 às 18h30' }
      ]
    },
    {
      name: 'Dra. Daniela Leony',
      crm: '30697',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Sexta-feira', hours: '09h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Daniel Lariú',
      crm: '16954',
      specialties: ['Ortopedia'],
      schedule: [
        { day: 'Sexta-feira', hours: '13h30 às 16h30' }
      ]
    },
    {
      name: 'Dr. Lucas Moreira',
      crm: '23629',
      specialties: ['Geriatria', 'Acupuntura'],
      schedule: [
        { day: 'Quinta-feira', hours: '13h30 às 16h30' }
      ]
    },
    {
      name: 'Dr. Mário Augusto',
      crm: '23299',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Quarta-feira', hours: '08h30 às 12h00' }
      ]
    },
    {
      name: 'Dr. Bernardo Dultra',
      crm: '25043',
      specialties: ['Reumatologia'],
      schedule: [
        { day: 'Terça-feira', hours: '07h30 às 11h50' }
      ]
    },
    {
      name: 'Dra. Stephanie Sampaio',
      crm: 'CRO 19659',
      specialties: ['Odontologia'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Raymundo Netto',
      crm: '24816',
      specialties: ['Ortopedia', 'Traumatologia'],
      schedule: [
        { day: 'Quinta-feira', hours: '07h30 às 11h45' }
      ]
    }
  ],
  'hangar-park': [
    {
      name: 'Dr. Walter Viterbo',
      crm: '11188',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Sexta-feira', hours: '14h00 às 16h30' }
      ]
    },
    {
      name: 'Dr. Ilano Rebello',
      crm: '15583',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '13h30 às 18h00' },
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dra. Cristina Peres',
      crm: '22497',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Sexta-feira', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dr. Felipe Caldas',
      crm: '36959',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '14h00 às 17h00' },
        { day: 'Quarta-feira', hours: '08h00 às 11h30 e 14h00 às 17h00' }
      ]
    },
    {
      name: 'Dr. Wen Shih Yu',
      crm: '11013',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 12h00' },
        { day: 'Terça-feira', hours: '08h00 às 18h00' },
        { day: 'Quinta-feira', hours: '08h00 às 18h00' },
        { day: 'Sexta-feira', hours: '13h30 às 18h00' }
      ]
    },
    {
      name: 'Dra. Valquiria Cavalcanti',
      crm: '13015',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Sexta-feira', hours: '08h00 às 11h30' }
      ]
    },
    {
      name: 'Dra. Jonélia Cirqueira',
      crm: '12806',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Sexta-feira', hours: '08h30 às 12h00' }
      ]
    },
    {
      name: 'Dr. Danilo Cerqueira',
      crm: '33097',
      specialties: ['Ortopedia', 'Clínica da Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '14h30 às 17h30' }
      ]
    }
  ],
  'comercio': [
    {
      name: 'Dr. Walter Viterbo',
      crm: '11188',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '09h00 às 12h00' },
        { day: 'Quarta-feira', hours: '09h00 às 12h00' }
      ]
    },
    {
      name: 'Dr. Jorge Joji',
      crm: '19272',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Segunda-feira', hours: '08h00 às 12h30 e 14h00 às 17h00' },
        { day: 'Quarta-feira', hours: '13h30 às 17h00' }
      ]
    },
    {
      name: 'Dra. Aline Oquendo',
      crm: '15800',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Quarta-feira', hours: '08h30 às 12h00 e 13h30 às 16h00' },
        { day: 'Sábado', hours: '08h00 às 11h40' }
      ]
    },
    {
      name: 'Dra. Ticiana Vilar',
      crm: '24950',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '09h00 às 13h00' },
        { day: 'Sexta-feira', hours: '08h30 às 12h00' }
      ]
    },
    {
      name: 'Dra. Lia Tércia',
      crm: '19891',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '09h00 às 12h00 e 14h00 às 16h20' },
        { day: 'Quinta-feira', hours: '09h00 às 12h00 e 14h00 às 16h20' }
      ]
    },
    {
      name: 'Dra. Manuela Diana',
      crm: '25095',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Sexta-feira', hours: '08h30 às 11h30' }
      ]
    },
    {
      name: 'Dr. Mário Augusto',
      crm: '23299',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Segunda-feira', hours: '13h30 às 17h00' },
        { day: 'Quinta-feira', hours: '08h30 às 12h00' },
        { day: 'Sexta-feira', hours: '13h30 às 17h00' }
      ]
    }
  ],
  'dual-medical': [
    {
      name: 'Dr. Anderson Maia',
      crm: '26361',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [{ day: 'Segunda-feira', hours: '08h00 às 11h30' }]
    },
    {
      name: 'Dr. Ilano Rebello',
      crm: '15583',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Terça-feira', hours: '08h30 às 11h15' },
        { day: 'Quinta-feira', hours: '08h30 às 11h15' }
      ]
    },
    {
      name: 'Dra. Cristina Peres',
      crm: '22497',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [{ day: 'Terça-feira', hours: '08h00 às 11h30' }]
    },
    {
      name: 'Dr. Felipe Caldas',
      crm: '36959',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [{ day: 'Sexta-feira', hours: '08h00 às 11h30' }]
    },
    {
      name: 'Dra. Leonor Fernandes',
      crm: '16961',
      specialties: ['Endocrinologia', 'Acupuntura'],
      schedule: [{ day: 'Terça-feira', hours: '14h00 às 17h00' }]
    },
    {
      name: 'Dr. Wen Shih Yu',
      crm: '11013',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Segunda-feira', hours: '13h30 às 18h00' },
        { day: 'Quarta-feira', hours: '08h00 às 11h30 e 13h30 às 18h00' }
      ]
    },
    {
      name: 'Dr. Mário Augusto',
      crm: '23299',
      specialties: ['Acupuntura', 'Dor'],
      schedule: [
        { day: 'Quinta-feira', hours: '14h00 às 18h00' },
        { day: 'Sábado', hours: '08h30 às 12h00' }
      ]
    },
    {
      name: 'Dr. Jorge Joji',
      crm: '19272',
      specialties: ['Acupuntura'],
      schedule: [{ day: 'Sexta-feira', hours: '08h00 às 12h00 e 14h00 às 18h00' }]
    },
    {
      name: 'Dra. Jonélia Cirqueira',
      crm: '12806',
      specialties: ['Acupuntura'],
      schedule: [
        { day: 'Terça-feira', hours: '14h00 às 17h00' },
        { day: 'Sexta-feira', hours: '14h00 às 17h00' }
      ]
    },
    {
      name: 'Dr. Danilo Cerqueira',
      crm: '33097',
      specialties: ['Ortopedia', 'Clínica da Dor'],
      schedule: [{ day: 'Quinta-feira', hours: '14h30 às 17h10' }]
    },
    {
      name: 'Dr. Cleiton Grabner',
      crm: '22167',
      specialties: [],
      schedule: [
        { day: 'Quinta-feira', hours: '08h00 às 12h00' },
        { day: 'Sábado', hours: '08h00 às 11h30' }
      ]
    }
  ],
};

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