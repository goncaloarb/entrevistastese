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
  'Intermediario',
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
    nivel: 'Intermédio',
    categoria: 'Yoga Total',
    duracao: '54 min',
    url: 'https://youtu.be/BxTVmIHV2Kc',
    descricao: 'Prática de conexão e expansão do amor coletivo para a harmonia da Terra.'
  },

  {
    numero: 3,
    titulo: 'Shanti Namaskar',
    nivel: 'Iniciante',
    categoria: 'Flexibilidade',
    duracao: '38 min',
    url: 'https://youtu.be/ANOLju4ktZY',
    descricao: 'Shanti Namaskara é uma prática suave de movimento e respiração para trazer equilíbrio e paz interior.'
  },
  {
    numero: 4,
    titulo: 'Planeta saudável',
    nivel: 'Intermédio',
    categoria: 'Sono',
    duracao: '54 min',
    url: 'https://youtu.be/EGAvMognwy4',
    descricao: 'Uma aula de yoga focada em equilíbrio, bem-estar consciente entre o corpo, mente e natureza.'
  },
  {
    numero: 5,
    titulo: 'Equilíbrio Interior',
    nivel: 'Intermédio',
    categoria: 'Relaxamento',
    duracao: '52 min',
    url: 'https://youtu.be/DS7Tz5eh9dA',
    descricao: 'Prática focada na respiração, relaxamento e equilíbrio entre corpo e mente.'
  },

  {
    numero: 6,
    titulo: '"Respiração Consciente"',
    nivel: 'Intermédio',
    categoria: 'Sono',
    duracao: '52 min',
    url: 'https://youtu.be/I5eYFc_sICs',
    descricao: 'Aula focada em técnicas respiratórias, alongamento e bem-estar interior.'
  },

  {
    numero: 7,
    titulo: 'Vai ficar tudo bem',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '54 min',
    url: 'https://youtu.be/ql9gOCChnMk',
    descricao: 'Aula de yoga suave para acalmar a mente e cultivar confiança em tempos difíceis.'
  },
  {
    numero: 8,
    titulo: 'Aquietar a mente',
    nivel: 'Intermédio',
    categoria: 'Relaxamento',
    duracao: '1h 4min',
    url: 'https://youtu.be/J1v8cmb4ubE',
    descricao: 'Uma prática de yoga calma e centrada, focada em desacelerar e aquietar a mente.'
  },

  {
    numero: 9,
    titulo: 'Aula Completa',
    nivel: 'Intermédio',
    categoria: 'Sono',
    duracao: '1h 4min',
    url: 'https://youtu.be/KJasf_IeL4Y',
    descricao: 'Aula do yoga relaxante, para acalmar o stress'
  },

  {
    numero: 10,
    titulo: 'A energia que está dentro de nós',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '53 min',
    url: 'https://youtu.be/rC2npY28fto',
    descricao: 'Uma aula para despertar a energia que vive dentro de nós, através da respiração, do movimento e da conexão interior.'
  },
  {
    numero: 11,
    titulo: 'Todos os seres do planeta felizes',
    nivel: 'Intermédio',
    categoria: 'Sono',
    duracao: '57 min',
    url: 'https://youtu.be/RMnmmvSxflA',
    descricao: 'Uma prática dedicada à felicidade e harmonia de todos os seres do planeta.'
  },
  {
    numero: 12,
    titulo: 'Alcançar um estado de bem estar',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '58 min',
    url: 'https://youtu.be/ZmxHyTuXo38',
    descricao: 'Uma prática para despertar a energia interior e alcançar um profundo estado de bem-estar, equilíbrio e conexão.'
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
    url: 'https://youtu.be/nD1muxK6rH4',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 188,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ej8EoQwhV5g',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 189,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/L6Qaux6LUAo',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 190,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/GP7Wf0Qtmwc',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 191,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/SXb7AMCppVs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 192,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/AZgiGaCKPAo',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 193,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/kXnXOHfPfQY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 194,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/htb3L_8o_dA',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 195,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/-Osl3BGowuo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 196,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/dibaZrWIU0o',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 197,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/M5_AzrLylAI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 198,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/riTJL1Z6ZNA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 199,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/QeVVYxPH_-o',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 200,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/mlfDiw-Hk2Q',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 201,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/epANpPweg_Y',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 202,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/cn1wl65YO7c',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
   {
  numero: 203,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/Wv1FrFIYp7U',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
 {
  numero: 204,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/a5tK4DPkFbE',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
{
    numero: 205,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/w-tTKRN5tic',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 206,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/4dZhC326orM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 207,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/czOSS1BRsII',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 208,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/cMMiqR3zG-s',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 209,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/-Qw0IP4JheI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 210,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/2IXW1zS4zhs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 211,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/lSpPjrwwl-E',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 212,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/iuoyhCJJhWs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 213,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/wAhNeBr2co4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 214,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/oq4Sm5ur_sg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 215,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/LF4RJNe0TRk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 216,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/W05ReJjj5XM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 217,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Ow9nFML5FAo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 218,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/W1kULxOnJGc',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 219,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/XDUMJIbDi9k',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 220,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Wia6_hzz-cY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 221,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/iQcpY0LVpXs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 222,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/T5EI_zGwMko',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 223,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/UAN2UE7sn0k',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 224,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/1gj24c7ncfQ',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 225,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/W_-kG9FJVIA',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 226,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Cp6EwrG-6fg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 227,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/wDdRwWzSbuE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 228,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/2pp3Re7z_tI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 229,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/6BDHnBvahhs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 230,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/0Itc_YEWrHU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 231,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/3G0ZZKks9FQ',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 232,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/LgJgXnvvC-U',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 233,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/NiladZVwe1A',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 234,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/hyDP0OeUdSY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 235,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/VnLgLldV7hI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 236,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/dVwJG5XnqgM',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 237,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/8V8JFF1lZY8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 238,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Ew9tXzsiP4g',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 239,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/R5_pezu7_6o',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 240,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/bJ-8t9FSC30',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 241,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/WsQcNRWFyPw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 242,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/DLvtp1LegaY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 243,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/5NGy3W0mwdo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 244,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/__J8xmPuR1c',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 245,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/0KS6a6RrGDY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 246,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/MoilBmrYKk4',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 247,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uNooo2r4qHk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 248,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/T7U6GMz8Ac0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 249,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/2uPkkzDjYiw',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 250,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/vJHs-vLGQ3Q',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 251,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ke8QD64simo',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 252,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Onbxow0IKiY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 253,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/xHNVWLZYzkk',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 254,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/q7zmhrCuZDc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 255,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/n25uYIShluA',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 256,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/jfBuq-z4ZIk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 257,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/vv5098On8Uo',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 258,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/cVJ1SXhmoh4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 259,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/w43NShEwWrY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 260,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/AWfTIfjQ6xY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 261,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/0CBweOsPyuw',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 262,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/jD0L1Gcy05o',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 263,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/wEUsc0aw7QQ',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 264,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/x47EpJbbzFE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 265,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/3PMHwQAYBK8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 266,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6jNPSqCtR4I',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 267,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/f3vNRJqF-l0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 268,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/c5y37ePJGcc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 269,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BDNbb828rHs',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 270,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/LOLr2VnZ5QY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 271,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/TSP6Kvk_RecE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 272,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/K7N8K3Gxw4s',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 273,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/X1V0AgqUXJU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 274,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/tFlkoz_Fdfc',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 275,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/luw2jtRocwk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 276,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ErmRChBwpLE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 277,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/8ZF_55UWACg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 278,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/eQAMxuK_F4k',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 279,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/95Z02CUEAok',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 280,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6-NASMC_OpY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 281,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/AQzACQMpBeA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 282,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/irvArF_5oa8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 283,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/yDGnx_661DU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 284,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/_rEbZGeMOak',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 285,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6fWZqRE1q-8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 286,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/MoI42VpyUcw',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 287,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/yXCI6Y0STFY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 288,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/NDg7i4213B0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 289,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/zAlF8iFaSOQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 290,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/jTdAJURXqQU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 291,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/0mt_b0uYeUM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 292,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/8AllDkv9Nq0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 293,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/PobpwDAwwMY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 294,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/pcE0YIUchxQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 295,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/tP0xEqdiPck',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 296,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/kKBnHisUYPk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 297,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/qfDW-7vIAq0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 298,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/l_5YLWMNI8w',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 299,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Iqgzt6CmMfo',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 300,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/lLagCmfxm3U',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
  {
    numero: 301,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/tpGOjWthWgc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
 {
  numero: 302,
  titulo: 'Aula do Yoga Sámkhya',
  nivel: 'Todos os níveis', 
  categoria: 'Yoga Sámkhya',
  duracao: '60 min', 
  url: 'https://youtu.be/RrTs4GIUF0U',
  descricao: 'Aula completa'
},

 {
    numero: 303,
    titulo: 'Espalhar a luz por cada canto do Planeta',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '42 min',
    url: 'https://youtu.be/EmFoMLSVQSw',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 304,
    titulo: 'Envolver o Planeta terra em amor profundo',
    nivel: 'Iniciante',
    categoria: 'Yoga Total',
    duracao: '54 min',
    url: 'https://youtu.be/TmlYf7mtpq0',
    descricao: 'Uma prática suave durante o confinamento.'
  },

  {
    numero: 305,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/-HufgevJnZs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 306,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/YJHHL8OnjT0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 307,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/RNHB7-MKRWY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 308,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/I2fWgKf8G6s',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 309,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/9_KUWzD_4eo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 310,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/SChMOW8m9iQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 311,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/G7tQgwm34WQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 312,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/gdqZ9ljjiW8',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 313,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/kKMN28RJAkQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 314,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/cjbC2LsOU2g',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 315,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/YUxDpAd-Mjs',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 316,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/-jArTkWwQRQ',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 317,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/BV_Y6rbAKDY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 318,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/1sHyK_4qwC4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 319,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'hhttps://youtu.be/EoQA8LSC2bw',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 320,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/A-UD9dfhs4E',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 321,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/RgFa9jke5ws',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 322,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/i9r5FJtvPQ0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 323,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/j3Zuv6L44Ko',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 324,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/HlMFhs5CZFY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 325,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/PhY3BdKFw3s',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 326,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Wjg4JGlyyb0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 327,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/yKopD8NKNwM',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 328,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/9IAlr4cadEk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 329,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/QcRujRaigRU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 330,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/s0Yh0L_iO88',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 331,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/GohVSsbA5rU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 332,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/xZDFAsD9zKY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 333,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/nhXJ2cYalzI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 334,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/91Jyzn_DLO8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 335,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/oMtdHtrEMLc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 336,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/fUlC3DkfSY8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 337,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/yntj1CE5rO8',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 338,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/yntj1CE5rO8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 339,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/thZ2Z0szLGc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 340,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/_sTJ9D0mqpc',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 341,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/2Q7csCoThE8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 342,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/LvZbHHUK5nw',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 343,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Od6A6IgI5sY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 344,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/DDEmhTfGlW0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 345,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Zr2kpyYevmo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 346,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/IqfJ8AEfTxc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 347,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/blwlh3wnW_U',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 348,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/C1o7vk1o-54',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 349,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/TYKfYSIrd_E',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 350,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/b8y6bm5eMvU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 351,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ka6Lac9-6eI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 352,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/dofMfS7wuBA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 353,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/f4U6MX3y9ts',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 354,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/sN9HR4FWTqE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 355,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/q_x75fqsNnc',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 356,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/G-3vD9mDe_U',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 357,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Gh_W-b4SxGA',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 358,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/AN1tszv23gE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 359,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/U1oMvOvo_OU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 360,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/LThCjmUBzcI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 361,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Wi09bVrxOyQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 362,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/Wi09bVrxOyQ',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 363,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/1_Li9nKHJ2A',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 364,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/veqQ_pvvkrA',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 365,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/LqeVxIe4Qv4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 366,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/7BRZgGQAJMU',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 367,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/onYPnZ4rBS4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 368,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/912yb3Fc79o',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 369,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/NBCD51d9UfU',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 370,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uRrHqJJBfWo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 371,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/F59R_EkGrzs',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 372,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/wiyjMmIERAo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 373,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Cinf5mON0Aw',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 374,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/U2mDqKGeGT0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 375,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/RpNzTKTB92Q',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 376,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/fwlwjZQ0TNM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 377,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/0OZuv3CVYOE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 378,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/sOwlsJRBvDw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 379,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/AxaYg29Zr0k',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 380,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/AFJJN_ATSN4',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 381,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/TGHysS29oVM',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 382,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/AFJJN_ATSN4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 383,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/TwOk123okkg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 384,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/UlCQ_wQDdF8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 385,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/CPMJ451qQA8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 386,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/SN7QmU7qgXU',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 387,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/OBQ-ki-0Tjg',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 388,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/woTVGdC0sm0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 389,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/eFzwRd9frCs',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 390,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/n73QNBMW-Sc',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 391,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Yr0BuGjrsjE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 392,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/5p9MSSsQYwE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 393,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/c-BrnWBqjec',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 394,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/LBHY9uBP8Aw',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 395,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/fW9Btv6qLsg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 396,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/N5L3xXdffEE',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 397,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/QAn69jRFPY0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 398,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/eFvxLCZlqOc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 399,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/BLlDieN5Bn0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 400,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/6cMMuqjF8VA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 401,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/GKCSAuzvle4',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 402,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/XjT5mFfrSoI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
   {
  numero: 403,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/-E9xeuo9jB4',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
 {
  numero: 404,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/44qn0U8Srgo',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
{
    numero: 405,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/KaP9hsMeF4g',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 406,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/WIWVblCIxJw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 407,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/tb-1oo-oExg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 408,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/iJBRbja7cds',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 409,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/wpbGyFWE2tw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 410,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/swgVwJ_4l0c',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 411,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/VEAn7wMJN_U',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 412,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/7XZoRkYoUR0',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 413,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/NH2whBrU1hY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 414,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/gHpm06pB6UM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 415,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/6cG8fNvh6D8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 416,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/K2HeYn6C0Hg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 417,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/iqUUfWkMEbs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 418,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/JVpQsC_TK0g',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 419,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/nU8nc1RDVEY',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 420,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/PTgiEiyDXhg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 421,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/EsKvsh8fbMA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 422,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/CnitUx7QiJ4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 423,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/IXfRUvR7Oco',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 424,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/nLMyeKQIPSo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 425,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/nZrLSydvb0s',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 426,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/zMFVQlSlbA8',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 427,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/zDPHJ2zMfWk',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 428,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/wqddPeCu2VA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 429,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/gsekXwaWSFU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 430,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/FeZcgbiFupU',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 431,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/xWuwHD9MJn0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 432,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/_fnrZmrhb-g',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 433,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/xElcThX-pYE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 434,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/3valWtiR6Pw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 435,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/cFud6zUyQAM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 436,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/4pwJOwgoCcg',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 437,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/JNSSeZdUbss',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 438,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/9Vwo24bcs7c',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 439,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/71flXG7hhZ8',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 440,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/O3P6Mr8TTPI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 441,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/gnjVHqAPliY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 442,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/Rek9MTfhPOs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 443,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/rEObU6dzz-I',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 444,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/vmYYpHsJ1Ms',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 445,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/zbkE2QFd5sM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 446,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/d-C-v5-lD4c',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 447,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/WfKqJKX5T1U',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 448,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/rgKD5ppp2Xk',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 449,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/H12BDTGrpeA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 450,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ExSxgA3a9Dk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 451,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Y5-CEjCoEP8',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 452,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/8MOgmRxDXZs',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 453,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/clymoIeQpt0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 454,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/yHGVhfCcUrs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 455,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/NkrT_ZbIWH4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 456,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/hEOn2mcEzPY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 457,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/a9JTZlJC3XM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 458,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/qb1CE3WWq8M',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 459,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/lHv16cVl06g',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 460,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/451BOfvMJkI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 461,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/Rvb1Ion7sPQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 462,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/3DdElhu5ZNg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 463,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/AB6EellqfTE',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 464,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/euELfOaGkEs',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 465,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/FMdRJLplNTI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 466,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Oix_HW6s4AI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 467,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/ZhR1a9p940M',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 468,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uBbSAm7IhCc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 469,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/sskqOKJpjE0',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 470,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/Tmo371_LYP0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 471,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/0zm5ELXk8fE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 472,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/yZHkJbOhpXs',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 473,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/dSgy5y64y4Q',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 474,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/xxbdmtXmYMc',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 475,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/oRH4pkOhhUQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 476,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/2EiEDSz7-5U',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 477,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/0L26zNJ0qIM',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 478,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/iQ4-eayYYV0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 479,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/uCN9yGobgYo',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 480,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/FeWlS8-EYKw',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 481,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/D0R--ZOzEfA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 482,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/jyKiDDOkY18',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 483,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/JuMiDKReHEM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 484,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/2l-qXccHuk4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 485,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/8xB3y6K_wpg',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 486,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/H_Go0Cduj7Y',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 487,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/UY5mx_nTHJc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 488,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/JdzrBW9zjeA',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 489,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/8AUEXA9AGvI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 490,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Otpyl-ji1sg',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 491,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/PTpYCZozSas',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 492,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/5t5B9qgzQEk',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 493,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/YMCQWgtkpGQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 494,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/XBxDrerSWK4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 495,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/qydIfp8tvW0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 496,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/ryCAIkRb-eU',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 497,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/iAxMUwXjv80',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 498,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/bQMO0lp7WrY',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 499,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/6lTdmxvbVGI',
    descricao: 'Sequência calma para melhorar o sono.'
  },
   {
    numero: 500,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Dv0nwXj7r3g',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 501,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/aQyQGHNAyLY',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 502,
    titulo: 'Aula Especial (Vale de Cambra)',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/LXXw57J4CSQ',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },
   {
  numero: 503,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/s3JnIGrdO-E',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
 {
  numero: 504,
  titulo: 'Yoga para Relaxar e Alongar',
  nivel: 'Iniciante',
  categoria: 'Relaxamento',
  duracao: '59 min',
  url: 'https://youtu.be/MNmGwZlUL8Q',
  descricao: 'Uma aula completa de yoga para relaxar, alongar o corpo e libertar tensões.'
},
{
    numero: 505,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/pijqua6CRUc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 506,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/yesieq6KFRM',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 507,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/rtuWkYJo6E4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 508,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/OjRtncBJFP4',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 509,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/SQCXi8LYt7A',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 510,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/1dOf1b_go4c',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 511,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/83HOINYRr3k',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 512,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/r2PMEV8w_sA',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 513,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/z5wNn7PeM-4',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 514,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/2m80Y2g4_Dg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 515,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/0TbxjLXtleE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 516,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/0RxMJmlzGaQ',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 517,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/gZd5xey6gb0',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 518,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/GxkomS7lLuE',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 519,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/g4rRmB3I3kk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 520,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/Jm-dOuXq0QI',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 521,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/2u4p42J5zcg',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 522,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/YymYYJfq7sE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 523,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/ahCe9tfoYjo',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 524,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/U-tQQQOWDxo',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 525,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/VK-Um1Sk9e0',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 526,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/sg5-IySQPIk',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 527,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/L6CNSzC2C9w',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 528,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/j6wGSKJG1qI',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 529,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/9qWvqwGe5Kc',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 530,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/mKGIRZInUuY',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 531,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/tSy7gAnyDeA',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 532,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '30 min',
    url: 'https://youtu.be/EjkpTnQTRk4',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 533,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/FYatTqOLiTg',
    descricao: 'Sequência calma para melhorar o sono.'
  },
  {
    numero: 534,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/hCPknsJ9dKE',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  },

  {
    numero: 535,
    titulo: 'Yoga para Dormir Melhor',
    nivel: 'Iniciante',
    categoria: 'Sono',
    duracao: '18 min',
    url: 'https://youtu.be/rY4yGc7L0nc',
    descricao: 'Sequência calma para melhorar o sono.'
  },

  {
    numero: 536,
    titulo: 'Yoga para Alongamento',
    nivel: 'Intermédio',
    categoria: 'Flexibilidade',
    duracao: '1h 6 min',
    url: 'https://youtu.be/jfw_MCl5TXk',
    descricao: 'Aula focada em mobilidade e alongamento.'
  },
  {
    numero: 537,
    titulo: 'Yoga para Ansiedade',
    nivel: 'Iniciante',
    categoria: 'Relaxamento',
    duracao: '22 min',
    url: 'https://youtu.be/6kQadLL5aXI',
    descricao: 'Uma prática suave para relaxar corpo e mente.'
  }
 


];

for (let i = 538; i <= 537; i++) {

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
