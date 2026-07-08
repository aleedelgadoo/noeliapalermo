export interface GalleryPhoto {
  id: string
  src: string
  alt: string
}

/** Placeholder photography — swap for real (consented) patient photos before launch. */
export const PATIENT_GALLERY: GalleryPhoto[] = [
  { id: 'g1', src: 'https://picsum.photos/seed/np-paciente-1/900/1100', alt: 'Paciente sonriendo en el consultorio' },
  { id: 'g2', src: 'https://picsum.photos/seed/np-paciente-2/900/1100', alt: 'Consulta con la Dra. Noelia Palermo' },
  { id: 'g3', src: 'https://picsum.photos/seed/np-paciente-3/900/1100', alt: 'Paciente durante un tratamiento' },
  { id: 'g4', src: 'https://picsum.photos/seed/np-paciente-4/900/1100', alt: 'Resultado de un tratamiento dental' },
  { id: 'g5', src: 'https://picsum.photos/seed/np-paciente-5/900/1100', alt: 'Paciente feliz con su nueva sonrisa' },
]

export interface PatientCase {
  id: string
  name: string
  treatment: string
  before: string
  after: string
}

/** Placeholder photography — swap for real (consented) before/after patient photos before launch. */
export const PATIENT_CASES: PatientCase[] = [
  {
    id: 'c1',
    name: 'Paciente de Ortodoncia',
    treatment: 'Ortodoncia',
    before: 'https://picsum.photos/seed/np-antes-1/700/800',
    after: 'https://picsum.photos/seed/np-despues-1/700/800',
  },
  {
    id: 'c2',
    name: 'Paciente de Carillas',
    treatment: 'Carillas dentales',
    before: 'https://picsum.photos/seed/np-antes-2/700/800',
    after: 'https://picsum.photos/seed/np-despues-2/700/800',
  },
  {
    id: 'c3',
    name: 'Paciente de Blanqueamiento',
    treatment: 'Blanqueamiento',
    before: 'https://picsum.photos/seed/np-antes-3/700/800',
    after: 'https://picsum.photos/seed/np-despues-3/700/800',
  },
  {
    id: 'c4',
    name: 'Paciente de Implantes',
    treatment: 'Implantes dentales',
    before: 'https://picsum.photos/seed/np-antes-4/700/800',
    after: 'https://picsum.photos/seed/np-despues-4/700/800',
  },
  {
    id: 'c5',
    name: 'Paciente de Ortodoncia',
    treatment: 'Ortodoncia',
    before: 'https://picsum.photos/seed/np-antes-5/700/800',
    after: 'https://picsum.photos/seed/np-despues-5/700/800',
  },
  {
    id: 'c6',
    name: 'Paciente de Carillas',
    treatment: 'Carillas dentales',
    before: 'https://picsum.photos/seed/np-antes-6/700/800',
    after: 'https://picsum.photos/seed/np-despues-6/700/800',
  },
]
