// aulas.js
// Biblioteca automática com 500 aulas

const categorias = [
  'Relaxamento',
  'Flexibilidade',
  'Respiração',
  'Meditação',
  'Vinyasa',
  'Hatha',
  'Mobilidade',
  'Força',
  'Energia',
  'Equilíbrio'
];

const niveis = [
  'Iniciante',
  'Intermediário',
  'Avançado'
];

const titulos = [
  'Yoga Matinal',
  'Yoga Noturno',
  'Yoga para Ansiedade',
  'Yoga Flow',
  'Yoga Restaurativo',
  'Yoga para Flexibilidade',
  'Yoga para Costas',
  'Yoga para Energia',
  'Meditação Guiada',
  'Respiração Consciente',
  'Yoga para Pernas',
  'Yoga para Ombros',
  'Yoga para Coluna',
  'Yoga Relaxante',
  'Yoga Dinâmico',
  'Yoga Profundo',
  'Yoga Intensivo',
  'Yoga Lunar',
  'Yoga Solar',
  'Yoga Terapêutico'
];

const videos = [
  'https://youtu.be/8nd2bX18vzk',
  'https://youtu.be/BxTVmIHV2Kc',
  'https://youtu.be/ANOLju4ktZY',
  'https://youtu.be/EGAvMognwy4',
  'https://youtu.be/DS7Tz5eh9dA',
  'https://youtu.be/I5eYFc_sICs',
  'https://youtu.be/ql9gOCChnMk',
  'https://youtu.be/J1v8cmb4ubE',
  'https://youtu.be/KJasf_IeL4Y',
  'https://youtu.be/rC2npY28fto'
];



const aulas = [

  {
    numero: 1,
    titulo: 'Espalhar a luz por cada canto do Planeta',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '42 min',
    url: 'https://youtu.be/8nd2bX18vzk',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 2,
    titulo: 'Envolver o Planeta terra em amor profundo',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '54 min',
    url: 'https://youtu.be/BxTVmIHV2Kc',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 3,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ANOLju4ktZY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 4,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/EGAvMognwy4',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 5,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/DS7Tz5eh9dA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 6,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/I5eYFc_sICs',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 7,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ql9gOCChnMk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 8,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/J1v8cmb4ubE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 9,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/KJasf_IeL4Y',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 10,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/rC2npY28fto',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 11,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/RMnmmvSxflA',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 12,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ZmxHyTuXo38',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 13,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/m8npmHoB7gc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 14,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/wRrly9lmr0Q',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 15,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/pUr3J7MSYgM',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 16,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/zzeLAXdeOjQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 17,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/pAZ08zhwA2E',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 18,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/iH3FKJTGhfw',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 19,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/l2GxRkOB-WA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 20,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6mr21Rjgawk',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 21,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/4_ZWzNbBqpU',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 22,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/b1R_yTzO8WA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 23,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/aoqAX-nW1B4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 24,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/KvAz5YIXpuI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 25,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/qNLFaXw_ud8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 26,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/PyMsGfUbF50',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 27,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/XAPXhh6lM54',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 28,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/eeaY-oFERpg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 29,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/YOAGx0G91nA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 30,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/4S7h6sDpZ3A',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 31,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/xVhPeUanzRo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 32,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/P42L-wS3XSY',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 33,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/dEYDmk7T9vc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 34,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/YJngynpSqGY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 35,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/HFg6oPfmgFU',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 36,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/5hIpYIG9KVw',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 37,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/RH4uet0NlxA',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 38,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/9Mdsi_oUnsE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 39,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6Kw9NzAIHVU',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 40,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/d5vaKzMTAx8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 41,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/tVU3L3UlvrE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 42,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/zbWGtUdZjdA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 43,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/HtwIuFbqIfY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 44,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BR3LA41U-dg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 45,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Ufsz3BQbpyE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 46,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/c6ZFYwKF-yE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 47,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/rWGL_hzt8Q4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 48,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/2GYPDZeoHR0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 49,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/WJetEEvdVVE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 50,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/atZI2jrPPA0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 51,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BOjbd8IK-BM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 52,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/rPBZAcGgPIE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 53,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/OcjJ-V7mk7M',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 54,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/_lr9lh6HSnE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 55,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/h7zJG5_ziM4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 56,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/6832UHUWgFk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 57,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ruy8wZFNuFc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 58,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/DIBJvEf5B0E',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 59,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/YXA_CFywuho',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 60,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/ATO1p3KWKO0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 61,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/qz3dGLb06s4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 62,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ESj0Vgv8Pw4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 63,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ipIDg7dYeg4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 64,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/9se875E4cro',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 65,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/r76Eo2vlhsI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 66,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/XAqYFZzCWfY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 67,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/zg56A_oNhso',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 68,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/0s3h9fHmtC8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 69,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/b_wAZ4X6kvU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 70,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/bmKvX7XjV3w',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 71,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Jh3aRU6XFgE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 72,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/V6u8QFZ_XsY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 73,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/xiGCm_atk4k',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 74,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/K062UmcGheY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 75,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uCu0xDN0iOg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 76,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/dyhhdYBdHxU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 77,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/QRJIeVuUZf0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 78,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/IBTiR8jXoQw',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 79,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uCN9yGobgYo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 80,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/oiwIHfsE6sE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 81,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/CZ0ZDXPYbHI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 82,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ykUqpc3TMBk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 83,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/C1Lx9BCtpQw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 84,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/BOJnIQLemQI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 85,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BkRpKFBpge0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 86,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/t97E_JzrBs0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 87,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/glWZPjj6W-Q',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 88,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/cv7gFzuBdJM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 89,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/FJg_Uicl7t8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 90,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/E1rlNL813OM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 91,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/5UZp1HOIQmk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 92,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/MtzSv_ro5sk',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 93,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/96PkNa_ZzzY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 94,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/fi2THw1U5hE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 95,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/hxM8JOZhs60',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 96,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/RkmUvfyh398',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 97,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/uKkgdk3fj0c',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 98,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/9It1ao8GCiM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 99,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/J6ei8t6dBbs',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 100,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Y9jPVenvlts',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  }
  

];

for (let i = 101; i <= 500; i++) {

  const titulo = titulos[i % titulos.length];
  const nivel = niveis[i % niveis.length];
  const categoria = categorias[i % categorias.length];
  const video = videos[i % videos.length];

  aulas.push({
    numero: i,
    titulo: `${titulo} ${i}`,
    nivel: nivel,
    categoria: categoria,
    duracao: `${10 + (i % 50)} min`,
    url: video,
    descricao: `Aula focada em ${categoria.toLowerCase()} com prática guiada para melhorar o teu bem-estar.`
  });

}

console.log(`✅ ${aulas.length} aulas carregadas.`);
