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
    titulo: 'Espalhar a luz',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '42 min',
    url: 'https://youtu.be/8nd2bX18vzk',
    descricao: 'Prática para expandir luz, consciência e energia positiva por todo o planeta.'
  },

  {
    numero: 2,
    titulo: 'Amor profundo',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '54 min',
    url: 'https://youtu.be/BxTVmIHV2Kc',
    descricao: 'Prática de conexão e expansão do amor coletivo para a harmonia da Terra.'
  },

  {
    numero: 3,
    titulo: 'Shanti Namaskar',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '38 min',
    url: 'https://youtu.be/ANOLju4ktZY',
    descricao: 'Shanti Namaskara é uma prática suave de movimento e respiração para trazer equilíbrio e paz interior.'
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
  },
  {
    numero: 101,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Y9jPVenvlts',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
 {
  numero: 102,
  titulo: 'Aula do Yoga Sámkhya',
  nivel: 'Todos os níveis', 
  categoria: 'Yoga Sámkhya',
  duracao: '60 min', 
  url: 'https://youtu.be/MGLuZO4WW84',
  descricao: 'Aula completa'
},

 {
    numero: 103,
    titulo: 'Espalhar a luz por cada canto do Planeta',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '42 min',
    url: 'https://youtu.be/hO0CkqLMbZw',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 104,
    titulo: 'Envolver o Planeta terra em amor profundo',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '54 min',
    url: 'https://youtu.be/AVAapCvg2bw',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 105,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/3fpan7OQpd8',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 106,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/HIwf81ZY1xM',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 107,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/gUwVaMlytKg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 108,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/7B6b4V3mxM4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 109,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/sI8hQ71S5dk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 110,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/MaXmqJLLAVs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 111,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/TD4-sTa3axE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 112,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/JF_AZFxAyck',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 113,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/l6kuWYCBjz8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 114,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/gXuV-yA61DU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 115,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BRXoiZxxa8g',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 116,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/kdxjN2h1sdE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 117,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/iz9mZhu6TnU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 118,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/XMOIn1fnjD4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 119,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/yTxBxEqo4gk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 120,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/GTV51CGG9VY',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 121,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/4ofZirTPHkM',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 122,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/NpLRXnv_8QY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 123,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/V0ixIx-YKdk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 124,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/7dCu4-Wa1D0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 125,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/1Iio-wO12ds',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 126,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ttGXbKC5ou4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 127,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Af0g-UF2oZQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 128,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/a0kp_TIBGaw',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 129,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/4umhKEcA3tk',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 130,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/cP77h2nmmAU',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 131,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/DXD14rYjJOA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 132,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/FHODPE77MsU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 133,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/tXCqC8Ro08I',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 134,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/oVe7lXryZkQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 135,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/u6fw0752MM8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 136,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/fl4KossfuPQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 137,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/jqEpk7b9ubo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 138,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/vwHSyWgTBo8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 139,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/J2q6V46Ba70',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 140,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/vOTh8oeAVbs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 141,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6BbQ8MSpUe0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 142,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Xu-F2SOwAtY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 143,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/CijTugv7dWI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 144,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/qY_4ZY0rGbk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 145,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/vMDQ0VOOaWo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 146,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/EM6cyGnysQw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 147,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/nwWNTf8k0BA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 148,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/jeBzpFF9m9Q',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 149,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/rrgpZ5Vera4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 150,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/j35njkqyQl4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 151,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Ty41M2KSIe8',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 152,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/HshsziKfZHU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 153,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/fub0JNXzoaI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 154,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/1QBs2vYiO2A',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 155,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/IahV6-JLNTc',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 156,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Q35XJ2K1rdA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 157,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/mXFflLw73XI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 158,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/kC0uI0IGRJE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 159,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/H4h_BrHQL5Y',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 160,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/A0QDN1LqReg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 161,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/-v8nRyQAdq8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 162,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/vLFIlusQS7s',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 163,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/fPGdIdz8FvA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 164,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/QV2Tp2u9vm8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 165,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/6x2LYcP6dhA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 166,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/4ocpFM7PEe8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 167,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/QNCggRKR4zs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 168,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/AkVKOW9okLg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 169,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/m37-IeH0s0k',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 170,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Y0OWxsO6h5Q',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 171,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/lojBusCBAU8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 172,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/or3i_D1zK7E',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 173,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/CQA9ZnmbqVI',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 174,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/H3-YAcKp358',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 175,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/PLEnhMgMy38',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 176,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/HiOe7tAnFvM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 177,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/JOdzNat2dJM',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 178,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/hhWz1OlSAmg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 179,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/AMy5OsNraL8',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 180,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Fcv5xHw_rSU',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 181,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ycUvUOt3fn8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 182,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/15aZLLRp_DY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 183,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/LtoNq4m437A',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 184,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/FKQu3RGSJcg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 185,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/8W6CcJcdaT4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 186,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/GWaLq9Ze6Zg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 187,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ej8EoQwhV5g',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 188,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/L6Qaux6LUAo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 189,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/GP7Wf0Qtmwc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 190,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/SXb7AMCppVs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 191,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/AZgiGaCKPAo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 192,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/kXnXOHfPfQY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 193,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/htb3L_8o_dA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 194,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/-Osl3BGowuo',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 195,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/dibaZrWIU0o',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 196,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/M5_AzrLylAI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 197,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/riTJL1Z6ZNA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 198,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/QeVVYxPH_-o',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 199,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/mlfDiw-Hk2Q',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 200,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/epANpPweg_Y',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 201,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/cn1wl65YO7c',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 202,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Wv1FrFIYp7U',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
   {
  numero: 203,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/a5tK4DPkFbE',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
 {
  numero: 204,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/w-tTKRN5tic',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
}

];

for (let i = 205; i <= 500; i++) {

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
