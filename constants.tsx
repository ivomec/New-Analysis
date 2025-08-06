import React from 'react';
import { UploadCategory } from './types';
import XRayIcon from './components/icons/XRayIcon';
import EyeIcon from './components/icons/EyeIcon';
import EcgIcon from './components/icons/EcgIcon';
import AudioIcon from './components/icons/AudioIcon';
import DentalIcon from './components/icons/DentalIcon';
import BloodTestIcon from './components/icons/BloodTestIcon';

export const UPLOAD_CATEGORIES: UploadCategory[] = [
  {
    id: 'xray',
    label: '엑스레이 (X-ray)',
    accept: 'image/png, image/jpeg',
    icon: <XRayIcon className="w-8 h-8 text-slate-500" />,
  },
  {
    id: 'eye',
    label: '안구 사진 (Eye Photo)',
    accept: 'image/png, image/jpeg',
    icon: <EyeIcon className="w-8 h-8 text-slate-500" />,
  },
  {
    id: 'ecg',
    label: '심전도 (ECG/EKG)',
    accept: 'image/png, image/jpeg',
    icon: <EcgIcon className="w-8 h-8 text-slate-500" />,
  },
  {
    id: 'dental',
    label: '치아 사진 (Dental)',
    accept: 'image/png, image/jpeg',
    icon: <DentalIcon className="w-8 h-8 text-slate-500" />,
  },
  {
    id: 'blood',
    label: '혈액검사 결과',
    accept: 'image/png, image/jpeg',
    icon: <BloodTestIcon className="w-8 h-8 text-slate-500" />,
  },
    {
    id: 'auscultation',
    label: '청진 녹음 (Auscultation)',
    accept: 'audio/mpeg, audio/wav',
    icon: <AudioIcon className="w-8 h-8 text-slate-500" />,
  },
];

export const DOG_BREEDS: string[] = [
  '골든 리트리버',
  '푸들',
  '말티즈',
  '포메라니안',
  '시츄',
  '치와와',
  '닥스훈트',
  '비숑 프리제',
  '웰시 코기',
  '진돗개',
  '믹스견',
  '직접입력'
];

export const CAT_BREEDS: string[] = [
  '코리안 숏헤어',
  '러시안 블루',
  '페르시안',
  '샴',
  '스코티시 폴드',
  '노르웨이 숲',
  '뱅갈',
  '랙돌',
  '브리티시 숏헤어',
  '믹스묘',
  '직접입력'
];