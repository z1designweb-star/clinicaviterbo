
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

// Helper para obter todos os médicos de todas as unidades
export const ALL_DOCTORS = Object.entries(UNIT_DOCTORS).flatMap(([unitSlug, doctors]) => 
  doctors.map(doc => ({ ...doc, unitSlug }))
);

// Helper para obter lista única de especialidades de todos os médicos
export const UNIQUE_DOCTOR_SPECIALTIES = Array.from(
  new Set(ALL_DOCTORS.flatMap(doc => doc.specialties))
).sort();

export interface Insurance {
  name: string;
  slug: string;
  domain?: string;
  imageUrl?: string;
}

export const INSURANCES: Insurance[] = [
  { name: 'Amil', slug: 'amil', domain: 'amil.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1rHrbFMzHsfzT3q6dwBNzyHTv2IqfdiUT' },
  { name: 'Apub', slug: 'apub', domain: 'apub.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1wzhtwDmyo8X9D0ADtYqKD35Kjsy85JP0' },
  { name: 'Asfeb', slug: 'asfeb', domain: 'asfeb.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1_2aDjnxPbmEp1T-yhyMBaq_kdZiI5aDz' },
  { name: 'Asseba', slug: 'asseba', imageUrl: 'https://lh3.googleusercontent.com/d/1nCqFVckFs9fxs-rQezX7eAe5FCmipJ7L' },
  { name: 'Assefaz', slug: 'assefaz', domain: 'assefaz.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1eOHsqSJaeFa9z0wAxltLXABDiC2CJ4c7' },
  { name: 'Asteba', slug: 'asteba', imageUrl: 'https://lh3.googleusercontent.com/d/1PXQEvF0IC9EcoLBChNg8-8b5BDLylfax' },
  { name: 'Atitude Saúde', slug: 'atitude-saude', domain: 'atitudesaude.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1RatHeWTvjybn4uA4VPNA_n_bNvyedY_z' },
  { name: 'BC Saúde', slug: 'bc-saude', domain: 'bcb.gov.br', imageUrl: 'https://lh3.googleusercontent.com/d/1il2zL5uvlQWDypTR7zOMOG-j2gRS7CX5' },
  { name: 'Camed Saúde', slug: 'camed-saude', domain: 'camed.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1-UhE6ves-r4qqkK5PcgK0tnTfQOpzS0W' },
  { name: 'CapSaúde', slug: 'cap-saude', domain: 'capsaude.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1znKN9VCG7OgkOHurOam1s_lHZji6yB8_' },
  { name: 'Casembrapa', slug: 'casembrapa', domain: 'casembrapa.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1413Hx6YZAifr3xLgYEhciS61YrQZz0sA' },
  { name: 'Casseb', slug: 'casseb', domain: 'casseb.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1x-mimjCuN32UbF1FEXJ1pH5fsu6t9gRo' },
  { name: 'Cassi', slug: 'cassi', domain: 'cassi.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1GxO40Owwj4d1bdOgXaP72WyUJATSh29s' },
  { name: 'Codevasf', slug: 'codevasf', domain: 'codevasf.gov.br', imageUrl: 'https://lh3.googleusercontent.com/d/1htEbnK6L2UlZCwV0KiQjYWTMRawZJERG' },
  { name: 'Conab', slug: 'conab', domain: 'conab.gov.br', imageUrl: 'https://lh3.googleusercontent.com/d/1uorI6sudl8MQ4j6ksKXo8olk8kwi1ecK' },
  { name: 'Fachesf', slug: 'fachesf', domain: 'fachesf.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1_WLTgD0WwDAK598K_1ILotwumt03v34c' },
  { name: 'Fusex', slug: 'fusex', domain: 'eb.mil.br', imageUrl: 'https://lh3.googleusercontent.com/d/1wJklsZtiV9-Ei3zl46o1qsHFAgAlWJah' },
  { name: 'Gama', slug: 'gama', domain: 'gamaesaude.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1057dPAsG_nrYfRuHPPyU_oL8qtmLvdj4' },
  { name: 'Geap Saúde', slug: 'geap-saude', domain: 'geap.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1IwSMnLheqvJKwmyZdTCrq4rLLGGV0x28' },
  { name: 'Hapvida', slug: 'hapvida', domain: 'hapvida.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1hdKYmTAo8kdNMvqXnNkCR803L0IBctNs' },
  { name: 'Hospital Naval', slug: 'hospital-naval', domain: 'marinha.mil.br', imageUrl: 'https://lh3.googleusercontent.com/d/102R74ywlt6hoME4x_eASZpZrl4KH9ROz' },
  { name: 'Life', slug: 'life', domain: 'lifesaude.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1P2gSrO9-KItlCV1NiunjDFbG1ActbHc0' },
  { name: 'Nordeste Saúde', slug: 'nordeste-saude', imageUrl: 'https://lh3.googleusercontent.com/d/1Sr053SdHtnCdu2AHihgouxt0JuZQ8U3m' },
  { name: 'NotreDame', slug: 'notredame', domain: 'gndi.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1PURAk1_4hNaexNO4xa-GudjseQDjhxRO' },
  { name: 'Pasa', slug: 'pasa', domain: 'saudepasa.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1i_Ulo8gOaFIMXtwPPV1vCLA0IOhjjgaB' },
  { name: 'Saúde Petrobrás', slug: 'petrobras', domain: 'saudepetrobras.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1c-QlKWXiDPhh9LEjIDnKZt7oj9wNjuB0' },
  { name: 'Plan-Assiste', slug: 'plan-assiste', domain: 'mpu.mp.br', imageUrl: 'https://lh3.googleusercontent.com/d/1RD15LPbUALBVhafbbtCLuPxBUfuYZP-w' },
  { name: 'Planserv', slug: 'planserv', domain: 'planserv.ba.gov.br', imageUrl: 'https://lh3.googleusercontent.com/d/1cJuDQeLPanmWjV3S8bAB68ZlAt1kw6M0' },
  { name: 'Porto Saúde', slug: 'porto-saude', domain: 'portoseguro.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1vmlHMcnMJurmpJbi5LUbG4U5iOWzksdM' },
  { name: 'Postal Saúde', slug: 'postal-saude', domain: 'postalsaude.com.br', imageUrl: 'https://lh3.googleusercontent.com/d/1NvmIB4g4FqF8RPHRB0M4pTRmYYT0FEFb' },
  { name: 'Pro-Social', slug: 'pro-social', domain: 'trf1.jus.br', imageUrl: 'https://lh3.googleusercontent.com/d/1DCaAodazpY0zbd8NRBACCcCyOU2Y7gGi' },
  { name: 'Saúde Caixa', slug: 'saude-caixa', domain: 'caixa.gov.br', imageUrl: 'https://lh3.googleusercontent.com/d/1-xWKsuUJJe1YUlEvy8l-aqv3w0g3unSw' },
  { name: 'Select', slug: 'select', imageUrl: 'https://lh3.googleusercontent.com/d/1PGl7QJ5xYHs1u7PpP5mz2W5EUwwq7doz' },
  { name: 'Sepaco', slug: 'sepaco', domain: 'sepaco.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/18-wVdf2q2wVXm9XvPQjP7nNtyJya1iCr' },
  { name: 'Telos', slug: 'telos', domain: 'telos.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1R9P5TyzfRa0Ela2jM2fsMmBh_NOKoZtF' },
  { name: 'Trt5', slug: 'trt5', domain: 'trt5.jus.br', imageUrl: 'https://lh3.googleusercontent.com/d/1FxqZk2FKwxAwu2jnUpnqXGo3FrvUk09O' },
  { name: 'Unafisco Saúde', slug: 'unafisco-saude', domain: 'unafiscosaude.org.br', imageUrl: 'https://lh3.googleusercontent.com/d/1vib9LNS7R69hLsHtpREAZ3gV2YQnEjBI' },
  { name: 'Vale', slug: 'vale', domain: 'vale.com', imageUrl: 'https://lh3.googleusercontent.com/d/1op2TyB_Wkxbbzi3ZBk8bhrlXayMEFSLj' }
];

export const CONTACT_INFO = {
  email: 'agendamentos@clinicaviterbo.com.br',
  phone: '(71) 3016-3015',
  whatsapp: '(71) 9 9991-5525',
  instagram: 'https://instagram.com/clinicaviterbo',
  facebook: 'https://facebook.com/clinicaviterbo'
};
