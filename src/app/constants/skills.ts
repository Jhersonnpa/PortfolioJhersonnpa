import { CircleGauge, Layers, SearchCheck } from 'lucide-react';

export const skills = [
  {
    id: 'scalability',
    gradientColor: 'var(--jungle--green)',
    asset: {
      background: 'var(--bush)',
      icon: Layers,
    },
    title: {
      label: 'Escabilidad',
      background: 'var(--black--bean)',
    },
    content:
      'Me especializo en arquitecturas front-end que escalan a medida que sus aplicaciones y equipos crecen, utilizando estructuras modulares y flujos de trabajo eficientes.',
  },
  {
    id: 'Rendimiento',
    gradientColor: 'var(--azure--radiance)',
    asset: {
      background: 'var(--blue--zodiac)',
      icon: CircleGauge,
    },
    title: {
      label: 'Rendimiento',
      background: 'var(--downriver)',
    },
    content:
      'Me aseguro de que las aplicaciones front-end estén optimizadas para la velocidad, la capacidad de respuesta y las experiencias de usuario fluidas, ya que son eficientes para los desarrolladores.',
  },
  {
    id: 'SEO-tecnico',
    gradientColor: 'var(--rose-of--sharon)',
    asset: {
      background: 'var(--rose-of--sharon-2)',
      icon: SearchCheck,
    },
    title: {
      label: 'SEO Técnico',
      background: 'var(--rose-of--sharon-2)',
    },
    content:
      'Me aseguro de que las aplicaciones front-end sean rastreables, indexables y accesibles para los motores de búsqueda, lo que garantiza una clasificación más alta y una mayor visibilidad.',
  },
];

export const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'postgresql',
  'firebase',
  'vercel',
  'cypress',
  'docker',
  'git',
  'github',
  'figma',
  'mongodb',
  'astro',
];

export const techs = [
  {
    label: 'javascript',
    textColor: '#F7DF1E', // Brighter yellow
    bgColor: '#F0C800', // Darker yellow
  },
  {
    label: 'astro',
    textColor: '#F7DF1E', // Brighter yellow
    bgColor: '#F0C800', // Darker yellow
  },
  {
    label: 'typescript',
    textColor: '#3178C6', // Brighter blue
    bgColor: '#1E5D92', // Darker blue
  },
  {
    label: 'react',
    textColor: '#61DAFB', // Brighter light blue
    bgColor: '#4B9FC9', // Darker blue
  },
  {
    label: 'next',
    textColor: '#61DAFB', // Brighter light blue
    bgColor: '#4B9FC9', // Darker blue
  },
  {
    label: 'css',
    textColor: '#38BDF8', // Brighter cyan
    bgColor: '#0D8FB7', // Darker cyan
  },
  {
    label: 'tailwind css',
    textColor: '#38BDF8', // Brighter cyan
    bgColor: '#0D8FB7', // Darker cyan
  },
  {
    label: 'webpack',
    textColor: '#DB7093', // Brighter pink
    bgColor: '#9B4F6C', // Darker pink
  },
  {
    label: 'node.js',
    textColor: '#68A063', // Brighter green
    bgColor: '#4E8B4A', // Darker green
  },
  {
    label: 'mongodb',
    textColor: '#47A248', // Brighter green
    bgColor: '#2C6A2F', // Darker green
  },
  {
    label: 'express',
    textColor: '#000000', // Bright black (neutral)
    bgColor: '#333333', // Darker black (neutral)
  },
  {
    label: 'git',
    textColor: '#6A3B97', // Brighter purple
    bgColor: '#4E2C6C', // Darker purple
  },
  {
    label: 'github',
    textColor: '#6A3B97', // Brighter purple
    bgColor: '#4E2C6C', // Darker purple
  },
  {
    label: 'and more...',
    textColor: '#6A3B97', // Brighter purple
    bgColor: '#4E2C6C', // Darker purple
  },
];
