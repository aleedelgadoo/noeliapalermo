import {
  HeartPulse,
  ShieldPlus,
  Smile,
  Sparkle,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from 'lucide-react'
import { ToothIcon } from '../components/icons'

export interface Treatment {
  slug: string
  icon: LucideIcon | typeof ToothIcon
  title: string
  short: string
  description: string
  highlights: string[]
  duration: string
}

export const TREATMENTS: Treatment[] = [
  {
    slug: 'limpieza-dental',
    icon: ToothIcon,
    title: 'Limpieza dental',
    short: 'Previene caries y enfermedades periodontales.',
    description:
      'Una profilaxis profesional elimina placa y sarro en zonas que el cepillado diario no alcanza, cuidando encías y esmalte a largo plazo.',
    highlights: [
      'Eliminación de placa y sarro con ultrasonido',
      'Pulido y revisión de encías',
      'Recomendaciones personalizadas de higiene',
    ],
    duration: '45 min aprox.',
  },
  {
    slug: 'ortodoncia',
    icon: Smile,
    title: 'Ortodoncia',
    short: 'Corrige la posición de tus dientes y mejora tu sonrisa.',
    description:
      'Brackets tradicionales o alineadores transparentes para corregir la mordida y alinear tu sonrisa de forma cómoda y progresiva.',
    highlights: [
      'Evaluación digital de tu mordida',
      'Brackets metálicos, estéticos o alineadores',
      'Seguimiento mensual incluido',
    ],
    duration: '12–24 meses',
  },
  {
    slug: 'implantes-dentales',
    icon: ShieldPlus,
    title: 'Implantes dentales',
    short: 'Recupera la funcionalidad y estética de tu sonrisa.',
    description:
      'Reemplazamos piezas perdidas con implantes de titanio biocompatibles que devuelven fuerza de mordida y una apariencia completamente natural.',
    highlights: [
      'Planeación guiada por escáner 3D',
      'Materiales biocompatibles de alta duración',
      'Corona personalizada a tu color dental',
    ],
    duration: '3–6 meses',
  },
  {
    slug: 'blanqueamiento',
    icon: Sparkles,
    title: 'Blanqueamiento',
    short: 'Dientes más blancos y una sonrisa más radiante.',
    description:
      'Aclaramos el tono de tus dientes con gel profesional activado en consultorio, con resultados visibles desde la primera sesión.',
    highlights: [
      'Hasta 6 tonos más claro en una sesión',
      'Gel de uso profesional, seguro para el esmalte',
      'Kit de mantenimiento para casa',
    ],
    duration: '60 min aprox.',
  },
  {
    slug: 'endodoncia',
    icon: Syringe,
    title: 'Endodoncia',
    short: 'Trata la raíz del diente y elimina el dolor de origen.',
    description:
      'Tratamiento de conducto para salvar piezas con infección o daño en la pulpa dental, aliviando el dolor y evitando la extracción.',
    highlights: [
      'Anestesia local para un procedimiento indoloro',
      'Limpieza y sellado del conducto radicular',
      'Restauración de la pieza tratada',
    ],
    duration: '1–2 sesiones',
  },
  {
    slug: 'carillas-dentales',
    icon: Sparkle,
    title: 'Carillas dentales',
    short: 'Rediseña la forma y el color de tu sonrisa.',
    description:
      'Láminas ultrafinas de porcelana o resina que cubren la cara visible del diente, ideales para corregir forma, color o espacios.',
    highlights: [
      'Diseño de sonrisa digital previo',
      'Porcelana de alta resistencia y estética',
      'Resultado natural y duradero',
    ],
    duration: '2–3 sesiones',
  },
  {
    slug: 'extracciones',
    icon: Stethoscope,
    title: 'Extracciones',
    short: 'Remoción segura de piezas dañadas o molares del juicio.',
    description:
      'Extracciones simples o quirúrgicas realizadas con protocolos de bioseguridad y control del dolor, incluyendo indicaciones de cuidado posterior.',
    highlights: [
      'Evaluación con radiografía previa',
      'Procedimiento con anestesia local',
      'Guía de cuidados post-extracción',
    ],
    duration: '30–60 min',
  },
  {
    slug: 'chequeo-preventivo',
    icon: HeartPulse,
    title: 'Chequeo preventivo',
    short: 'Revisión integral para detectar problemas a tiempo.',
    description:
      'Consulta de valoración con revisión clínica y radiográfica para detectar caries, desgaste o problemas de encías antes de que avancen.',
    highlights: [
      'Revisión clínica completa',
      'Diagnóstico con apoyo radiográfico digital',
      'Plan de tratamiento personalizado',
    ],
    duration: '30 min aprox.',
  },
]
