import type { ReactElement } from 'react';

export interface UploadCategory {
  id: string;
  label: string;
  accept: string;
  icon: ReactElement;
}

export interface UploadedFile {
  file: File;
  previewUrl: string;
}

export interface PatientInfo {
  name: string;
  species: 'dog' | 'cat' | '';
  breed: string;
  ageYears: number;
  ageMonths: number;
  sex: 'male' | 'female' | '';
  isNeutered: boolean;
  specialNotes: string;
  dentalNotes: string;
}