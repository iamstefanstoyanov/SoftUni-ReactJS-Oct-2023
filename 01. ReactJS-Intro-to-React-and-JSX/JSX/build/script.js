import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

var Header = function Header() {
  return React.createElement(
    'div',
    { className: 'site-header' },
    React.createElement(
      'h1',
      null,
      'Planet'
    )
  );
};

var Main = function Main() {
  return React.createElement(
    'div',
    { className: 'site-main' },
    React.createElement('hr', null),
    React.createElement(
      'section',
      null,
      React.createElement(
        'p',
        null,
        'This article is about the astronomical object. For other uses, see Planet (disambiguation). The eight planets of the Solar System with size to scale (up to down, left to right): Saturn, Jupiter, Uranus, Neptune (outer planets), Earth, Venus, Mars, and Mercury (inner planets) A planet is a large, rounded astronomical body that is neither a star nor its remnant. The best available theory of planet formation is the nebular hypothesis, which posits that an interstellar cloud collapses out of a nebula to create a young protostar orbited by a protoplanetary disk. Planets grow in this disk by the gradual accumulation of material driven by gravity, a process called accretion. The Solar System has at least eight planets: the terrestrial planets Mercury, Venus, Earth, and Mars, and the giant planets Jupiter, Saturn, Uranus, and Neptune. (When the term "planet" is applied more broadly, these eight uncontroversial planets can be distinguished by calling them "major planets".) These planets each rotate around an axis tilted with respect to its orbital pole. All the major planets of the Solar System other than Mercury possess a considerable atmosphere, and some share such features as ice caps, seasons, volcanism, hurricanes, tectonics, and even hydrology. Apart from Venus and Mars, the Solar System planets generate magnetic fields, and all the major planets except Venus and Mercury have natural satellites. The giant planets bear planetary rings, the most prominent being those of Saturn. The word planet probably comes from the Greek plan\u1E17tai, meaning "wanderers". In antiquity, this word referred to the Sun, Moon, and five points of light visible by the naked eye that moved across the background of the stars\u2014namely, Mercury, Venus, Mars, Jupiter, and Saturn. Planets have historically had religious associations: multiple cultures identified celestial bodies with gods, and these connections with mythology and folklore persist in the schemes for naming newly discovered Solar System bodies. Earth itself was recognized as a planet when heliocentrism supplanted geocentrism during the 16th and 17th centuries. With the development of the telescope, the meaning of planet broadened to include objects only visible with assistance: the moons of the planets beyond Earth; the ice giants Uranus and Neptune; Ceres and other bodies later recognized to be part of the asteroid belt; and Pluto, later found to be the largest member of the collection of icy bodies known as the Kuiper belt. The discovery of other large objects in the Kuiper belt, particularly Eris, spurred debate about how exactly to define a planet. The International Astronomical Union (IAU) adopted a standard by which the four terrestrials and four giants qualify, placing Ceres, Pluto, and Eris in the category of dwarf planet,[1][2][3] although many planetary scientists have continued to apply the term planet more broadly.[4] Further advances in astronomy led to the discovery of over five thousand planets outside the Solar System, termed exoplanets. These often show unusual features that the Solar System planets do not show, such as hot Jupiters\u2014giant planets that orbit close to their parent stars, like 51 Pegasi b\u2014and extremely eccentric orbits, such as HD 20782 b. The discovery of brown dwarfs and planets larger than Jupiter also spurred debate on the definition, regarding where exactly to draw the line between a planet and a star. Multiple exoplanets have been found to orbit in the habitable zones of their stars, but Earth remains the only planet known to support life.'
      )
    ),
    React.createElement(
      'section',
      null,
      React.createElement(
        'h2',
        null,
        'Babylon'
      ),
      React.createElement(
        'p',
        null,
        'The first civilization known to have a functional theory of the planets were the Babylonians, who lived in Mesopotamia in the first and second millennia BC. The oldest surviving planetary astronomical text is the Babylonian Venus tablet of Ammisaduqa, a 7th-century BC copy of a list of observations of the motions of the planet Venus, that probably dates as early as the second millennium BC.[17] The MUL.APIN is a pair of cuneiform tablets dating from the 7th century BC that lays out the motions of the Sun, Moon, and planets over the course of the year.[18] Late Babylonian astronomy is the origin of Western astronomy and indeed all Western efforts in the exact sciences.[19] The Enuma anu enlil, written during the Neo-Assyrian period in the 7th century BC,[20] comprises a list of omens and their relationships with various celestial phenomena including the motions of the planets.[21][22] Venus, Mercury, and the outer planets Mars, Jupiter, and Saturn were all identified by Babylonian astronomers. These would remain the only known planets until the invention of the telescope in early modern times.'
      )
    ),
    React.createElement(
      'section',
      null,
      React.createElement(
        'h2',
        null,
        'Greco-Roman astronomy'
      ),
      React.createElement(
        'p',
        null,
        'The ancient Greeks initially did not attach as much significance to the planets as the Babylonians. In the 6th and 5th centuries BC, the Pythagoreans appear to have developed their own independent planetary theory, which consisted of the Earth, Sun, Moon, and planets revolving around a "Central Fire" at the center of the Universe. Pythagoras or Parmenides is said to have been the first to identify the evening star (Hesperos) and morning star (Phosphoros) as one and the same (Aphrodite, Greek corresponding to Latin Venus),[24] though this had long been known in Mesopotamia.[25][26] In the 3rd century BC, Aristarchus of Samos proposed a heliocentric system, according to which Earth and the planets revolved around the Sun. The geocentric system remained dominant until the Scientific Revolution.[16] By the 1st century BC, during the Hellenistic period, the Greeks had begun to develop their own mathematical schemes for predicting the positions of the planets. These schemes, which were based on geometry rather than the arithmetic of the Babylonians, would eventually eclipse the Babylonians\' theories in complexity and comprehensiveness and account for most of the astronomical movements observed from Earth with the naked eye. These theories would reach their fullest expression in the Almagest written by Ptolemy in the 2nd century CE. So complete was the domination of Ptolemy\'s model that it superseded all previous works on astronomy and remained the definitive astronomical text in the Western world for 13 centuries.[17][27] To the Greeks and Romans, there were seven known planets, each presumed to be circling Earth according to the complex laws laid out by Ptolemy. They were, in increasing order from Earth (in Ptolemy\'s order and using modern names): the Moon, Mercury, Venus, the Sun, Mars, Jupiter, and Saturn.'
      )
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    'div',
    { className: 'site-footer' },
    React.createElement('hr', null),
    React.createElement(
      'p',
      null,
      'This page was last edited on 23 October 2023, at 11:10 (UTC).'
    )
  );
};

var mainWindow = React.createElement(
  'div',
  null,
  React.createElement(Header, null),
  React.createElement(Main, null),
  React.createElement(Footer, null)
);

root.render(mainWindow);
