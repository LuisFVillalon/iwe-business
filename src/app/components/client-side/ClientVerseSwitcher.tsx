'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';

interface BibleVerse {
  verse: string;
  author: string;
}

const BibleVerses: BibleVerse[] = [
  // Hard Work
  {
    verse: 'Commit your work to the Lord, and your plans will be established.',
    author: 'Proverbs 16:3'
  },
  {
    verse: 'Whoever works his land will have plenty of bread, but he who follows worthless pursuits lacks sense.',
    author: 'Proverbs 12:11'
  },
  {
    verse: 'The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.',
    author: 'Proverbs 13:4'
  },
  {
    verse: 'Do not be slothful in zeal, be fervent in spirit, serve the Lord.',
    author: 'Romans 12:11'
  },
  {
    verse: 'Whatever your hand finds to do, do it with your might.',
    author: 'Ecclesiastes 9:10'
  },

  // Honesty
  {
    verse: 'Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool.',
    author: 'Proverbs 19:1'
  },
  {
    verse: 'Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out.',
    author: 'Proverbs 10:9'
  },
  {
    verse: 'A false balance is an abomination to the Lord, but a just weight is his delight.',
    author: 'Proverbs 11:1'
  },
  {
    verse: 'Keep your tongue from evil and your lips from speaking deceit.',
    author: 'Psalm 34:13'
  },
  {
    verse: 'Provide things honest in the sight of all men.',
    author: 'Romans 12:17 (KJV)'
  },

  // Teamwork / Community
  {
    verse: 'Iron sharpens iron, and one man sharpens another.',
    author: 'Proverbs 27:17'
  },
  {
    verse: 'And let us consider how to stir up one another to love and good works.',
    author: 'Hebrews 10:24'
  },
  {
    verse: 'Live in harmony with one another. Do not be haughty, but associate with the lowly.',
    author: 'Romans 12:16'
  },
  {
    verse: "Bear one another's burdens, and so fulfill the law of Christ.",
    author: 'Galatians 6:2'
  },
  {
    verse: 'Love one another with brotherly affection. Outdo one another in showing honor.',
    author: 'Romans 12:10'
  },

  // Humility
  {
    verse: 'Humble yourselves before the Lord, and he will exalt you.',
    author: 'James 4:10'
  },
  {
    verse: 'When pride comes, then comes disgrace, but with the humble is wisdom.',
    author: 'Proverbs 11:2'
  },
  {
    verse: 'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.',
    author: 'Philippians 2:3'
  },
  {
    verse: 'Clothe yourselves, all of you, with humility toward one another.',
    author: '1 Peter 5:5'
  },
  {
    verse: 'Blessed are the meek, for they shall inherit the earth.',
    author: 'Matthew 5:5'
  },

  // Confidence
  {
    verse: 'I can do all things through him who strengthens me.',
    author: 'Philippians 4:13'
  },
  {
    verse: 'The Lord is my light and my salvation; whom shall I fear?',
    author: 'Psalm 27:1'
  },
  {
    verse: 'For the Lord will be your confidence and will keep your foot from being caught.',
    author: 'Proverbs 3:26'
  },
  {
    verse: 'Cast not away your confidence, which has great reward.',
    author: 'Hebrews 10:35'
  },
  {
    verse: 'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed.',
    author: 'Joshua 1:9'
  },

  // Mixed Values (Honesty, Humility, Teamwork)
  {
    verse: 'Let love be genuine. Abhor what is evil; hold fast to what is good.',
    author: 'Romans 12:9'
  },
  {
    verse: 'Let another praise you, and not your own mouth; a stranger, and not your own lips.',
    author: 'Proverbs 27:2'
  },
  {
    verse: 'Each of you should use whatever gift you have received to serve others.',
    author: '1 Peter 4:10'
  },
  {
    verse: 'The greatest among you shall be your servant.',
    author: 'Matthew 23:11'
  },
  {
    verse: 'Be completely humble and gentle; be patient, bearing with one another in love.',
    author: 'Ephesians 4:2'
  }
];
const BibleVerseSpanish: BibleVerse[] = [
  // Trabajo Duro
  {
    verse: 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.',
    author: 'Proverbios 16:3'
  },
  {
    verse: 'El que labra su tierra se saciará de pan, pero el que sigue a los ociosos carece de juicio.',
    author: 'Proverbios 12:11'
  },
  {
    verse: 'El alma del perezoso desea y nada alcanza; mas el alma de los diligentes será prosperada.',
    author: 'Proverbios 13:4'
  },
  {
    verse: 'En lo que requiere diligencia, no perezosos; fervientes en espíritu, sirviendo al Señor.',
    author: 'Romanos 12:11'
  },
  {
    verse: 'Todo lo que te venga a la mano para hacer, hazlo según tus fuerzas.',
    author: 'Eclesiastés 9:10'
  },

  // Honestidad
  {
    verse: 'Más vale pobre con integridad que necio de labios y perverso.',
    author: 'Proverbios 19:1'
  },
  {
    verse: 'El que camina en integridad anda confiado; el que pervierte sus caminos será descubierto.',
    author: 'Proverbios 10:9'
  },
  {
    verse: 'El peso falso es abominación al Señor; pero la pesa cabal le agrada.',
    author: 'Proverbios 11:1'
  },
  {
    verse: 'Guarda tu lengua del mal, y tus labios de hablar engaño.',
    author: 'Salmo 34:13'
  },
  {
    verse: 'Procurad lo bueno delante de todos los hombres.',
    author: 'Romanos 12:17 (RVR)'
  },

  // Trabajo en equipo / Comunidad
  {
    verse: 'El hierro se afila con el hierro, y el hombre en el trato con el hombre.',
    author: 'Proverbios 27:17'
  },
  {
    verse: 'Considerémonos unos a otros para estimularnos al amor y a las buenas obras.',
    author: 'Hebreos 10:24'
  },
  {
    verse: 'Vivan en armonía los unos con los otros. No sean altivos, sino háganse solidarios con los humildes.',
    author: 'Romanos 12:16'
  },
  {
    verse: 'Ayúdense unos a otros a llevar sus cargas, y así cumplirán la ley de Cristo.',
    author: 'Gálatas 6:2'
  },
  {
    verse: 'Ámense los unos a los otros con amor fraternal, respetándose y honrándose mutuamente.',
    author: 'Romanos 12:10'
  },

  // Humildad
  {
    verse: 'Humíllense delante del Señor, y él los exaltará.',
    author: 'Santiago 4:10'
  },
  {
    verse: 'Cuando viene el orgullo, viene también la deshonra; pero con los humildes está la sabiduría.',
    author: 'Proverbios 11:2'
  },
  {
    verse: 'No hagan nada por egoísmo o vanidad; más bien, con humildad consideren a los demás como superiores a ustedes mismos.',
    author: 'Filipenses 2:3'
  },
  {
    verse: 'Revístanse todos de humildad en su trato mutuo.',
    author: '1 Pedro 5:5'
  },
  {
    verse: 'Bienaventurados los mansos, porque ellos heredarán la tierra.',
    author: 'Mateo 5:5'
  },

  // Confianza
  {
    verse: 'Todo lo puedo en Cristo que me fortalece.',
    author: 'Filipenses 4:13'
  },
  {
    verse: 'El Señor es mi luz y mi salvación; ¿a quién temeré?',
    author: 'Salmo 27:1'
  },
  {
    verse: 'Porque el Señor será tu confianza, y él preservará tu pie de quedar preso.',
    author: 'Proverbios 3:26'
  },
  {
    verse: 'No pierdan, pues, su confianza, que tiene grande galardón.',
    author: 'Hebreos 10:35'
  },
  {
    verse: '¿No te lo he ordenado yo? ¡Sé fuerte y valiente! No temas ni te acobardes.',
    author: 'Josué 1:9'
  },

  // Valores mixtos (Honestidad, Humildad, Comunidad)
  {
    verse: 'El amor sea sin fingimiento. Aborrezcan lo malo, sigan lo bueno.',
    author: 'Romanos 12:9'
  },
  {
    verse: 'Que te alabe el extraño, y no tu propia boca; el ajeno, y no tus labios.',
    author: 'Proverbios 27:2'
  },
  {
    verse: 'Cada uno ponga al servicio de los demás el don que haya recibido.',
    author: '1 Pedro 4:10'
  },
  {
    verse: 'El mayor de ustedes será su servidor.',
    author: 'Mateo 23:11'
  },
  {
    verse: 'Sean humildes y amables; sean pacientes y tolérense unos a otros con amor.',
    author: 'Efesios 4:2'
  }
];


// Animated Bible Verse Component
export default function ClientVerseSwitcher(): React.ReactElement {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex(() => Math.floor(Math.random() * BibleVerses.length));
        setIsVisible(true);
      }, 300); // Half of the transition duration
    }, 7000); // Change verse every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const currentVerse = language === "spanish" ? BibleVerseSpanish[currentIndex] : BibleVerses[currentIndex];

  return (
    <div className="relative overflow-hidden min-h-[100px] flex items-center justify-center">
      <div
        className={`text-center md:text-xl text-[#333333] flex flex-col items-center transition-all duration-700 ease-in-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
        style={{ fontStyle: 'italic' }}
      >
        <span className="mb-2">
          &quot;{currentVerse.verse}&quot;
        </span>
        <span className="font-bold">
          — {currentVerse.author}
        </span>
      </div>
    </div>
  );
};
