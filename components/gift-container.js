import { useState } from "react";
import Flower from "./flower";
import rules from "./rules";

function DisplayedGift() {
  const [copyStatus, setCopyStatus] = useState(false);
  const bankAccount = {
    BSI: "4479505120",
  };

  const handleCopy = (e, bankName) => {
    e.preventDefault();
    navigator.clipboard.writeText(bankAccount[bankName]);
    setCopyStatus(true);
  };

  return (
    <div>
      <div className="gift container" id="gift" data-aos="fade-up">
        <div className="gift-wrapper">
          <div className="header">
            <p>Love Gift</p>
          </div>
          <div className="opening">
            <p>
              Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui:
            </p>
          </div>
          <div className="rekening-wrapper">
            <div className="rekening">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width={128}
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 21000 5969"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n   \n    .fil1 {fill:#0CA49D;fill-rule:nonzero}\n    .fil0 {fill:#168F8C;fill-rule:nonzero}\n    .fil2 {fill:#F9AD3C;fill-rule:nonzero}\n   \n  ",
                      }}
                    />
                  </defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M6967 1716l-7 0 0 1c2,0 4,0 7,-1z"
                    />
                    <path
                      className="fil1"
                      d="M7014 1649l0 4288 1008 0 0 -3214c0,-240 -128,-965 -1008,-1074z"
                    />
                    <path
                      className="fil1"
                      d="M1654 5191c128,0 233,-16 314,-49 81,-33 145,-75 191,-126 46,-52 77,-110 95,-175 17,-65 26,-131 26,-198 0,-77 -10,-145 -30,-207 -20,-61 -55,-113 -103,-155 -49,-42 -113,-75 -194,-98 -80,-23 -182,-34 -304,-34l-678 0 0 1042 683 0zm-683 -2724l0 1033 505 0c107,0 204,-8 290,-23 86,-15 159,-42 220,-80 60,-38 106,-91 138,-158 32,-67 47,-151 47,-253 0,-100 -12,-182 -37,-248 -25,-66 -63,-119 -115,-159 -52,-40 -117,-69 -197,-86 -79,-17 -174,-26 -283,-26l-569 0zm569 -726c289,0 535,27 738,80 203,54 369,129 497,227 128,98 222,216 280,356 58,140 88,296 88,468 0,94 -13,184 -40,271 -27,87 -69,168 -126,244 -57,76 -131,145 -221,208 -90,63 -198,118 -324,164 276,67 480,175 612,324 132,149 198,343 198,580 0,178 -34,344 -103,497 -69,153 -170,287 -303,400 -133,114 -297,203 -492,267 -195,64 -418,96 -669,96l-1671 0 0 -4182 1539 0z"
                    />
                    <path
                      className="fil1"
                      d="M6157 2590c-29,46 -59,80 -90,103 -32,23 -72,34 -122,34 -44,0 -91,-14 -142,-42 -51,-28 -108,-59 -172,-93 -64,-34 -137,-66 -220,-93 -82,-28 -176,-42 -281,-42 -182,0 -317,39 -406,116 -89,77 -134,182 -134,314 0,84 27,154 80,210 54,56 124,103 211,144 87,40 187,77 299,111 112,34 226,71 343,112 117,41 231,89 343,145 112,56 212,126 299,212 87,86 157,191 211,314 54,123 80,272 80,446 0,193 -33,374 -100,542 -67,168 -164,315 -292,441 -127,125 -284,224 -471,296 -187,72 -399,108 -636,108 -130,0 -263,-13 -398,-40 -135,-27 -266,-65 -392,-113 -126,-49 -245,-107 -356,-174 -111,-67 -208,-142 -290,-224l287 -453c23,-33 53,-60 90,-82 37,-22 78,-33 122,-33 57,0 115,18 174,55 58,36 124,77 198,121 74,44 158,84 254,121 96,36 209,55 339,55 176,0 313,-39 411,-116 98,-78 146,-200 146,-369 0,-98 -27,-177 -80,-238 -54,-61 -124,-112 -211,-152 -87,-40 -186,-76 -297,-106 -111,-31 -225,-65 -342,-102 -117,-37 -231,-83 -342,-138 -111,-55 -210,-126 -297,-215 -87,-89 -158,-200 -211,-333 -54,-133 -80,-297 -80,-492 0,-157 32,-310 95,-459 63,-149 156,-282 279,-399 123,-117 273,-210 451,-280 178,-70 382,-105 612,-105 128,0 253,10 375,30 122,20 237,50 346,89 109,39 211,86 306,141 95,55 179,116 254,185l-241 451z"
                    />
                    <path
                      className="fil2"
                      d="M8133 104c-2,-35 -6,-70 -11,-104 226,233 548,369 897,347 167,-11 323,-57 462,-130 -108,188 -164,409 -149,642 18,288 142,544 330,734 -96,-19 -197,-27 -300,-20 -408,26 -753,262 -935,596 -72,-494 -455,-878 -935,-963 405,-198 672,-626 642,-1103z"
                    />
                    <path
                      className="fil1"
                      d="M9863 4226c46,0 86,-5 119,-16 33,-11 61,-25 82,-44 22,-19 38,-42 48,-69 10,-27 15,-56 15,-88 0,-62 -22,-111 -66,-146 -44,-36 -110,-54 -198,-54l-259 0 0 417 259 0zm-259 -941l0 408 214 0c46,0 85,-5 119,-15 34,-10 62,-24 84,-42 22,-18 39,-39 49,-64 11,-26 16,-53 16,-84 0,-71 -21,-122 -64,-155 -42,-33 -108,-49 -197,-49l-221 0zm221 -128c74,0 137,7 190,22 53,14 97,35 131,62 35,27 60,60 76,99 16,38 24,82 24,130 0,30 -5,58 -14,85 -9,27 -23,52 -41,75 -18,23 -42,45 -70,63 -28,18 -61,33 -99,45 88,17 154,48 198,94 45,46 67,106 67,180 0,51 -9,97 -28,139 -18,42 -46,78 -82,108 -36,30 -80,53 -132,70 -52,16 -112,24 -179,24l-423 0 0 -1197 382 0z"
                    />
                    <path
                      className="fil1"
                      d="M11142 3910l-188 -487c-6,-14 -11,-31 -18,-50 -6,-19 -12,-40 -18,-62 -12,45 -24,83 -36,113l-188 486 447 0zm337 444l-125 0c-15,0 -26,-4 -35,-11 -9,-7 -16,-16 -20,-28l-112 -289 -537 0 -112 289c-3,10 -10,19 -19,27 -9,8 -21,12 -35,12l-125 0 479 -1197 164 0 479 1197z"
                    />
                    <path
                      className="fil1"
                      d="M12606 3158l0 1197 -81 0c-13,0 -24,-2 -33,-7 -8,-4 -17,-12 -25,-23l-692 -902c1,14 2,28 3,41 1,13 1,26 1,38l0 853 -142 0 0 -1197 84 0c7,0 13,1 18,2 5,1 9,2 13,4 4,2 8,4 12,8 4,3 8,8 13,13l692 901c-1,-15 -2,-28 -3,-42 -1,-14 -1,-27 -1,-39l0 -848 142 0z"
                    />
                    <path
                      className="fil1"
                      d="M13074 3682l61 0c21,0 38,-3 51,-8 13,-6 25,-15 35,-28l398 -451c11,-15 23,-25 35,-30 12,-6 27,-8 45,-8l137 0 -456 515c-11,13 -22,25 -33,33 -10,8 -21,15 -33,21 15,5 29,12 41,23 12,9 24,22 36,38l476 567 -140 0c-11,0 -20,-1 -28,-2 -7,-2 -14,-4 -19,-7 -6,-3 -11,-7 -15,-11 -4,-4 -8,-9 -12,-15l-413 -475c-11,-14 -23,-24 -36,-29 -13,-6 -32,-9 -58,-9l-73 0 0 548 -161 0 0 -1197 161 0 0 525z"
                    />
                    <path
                      className="fil1"
                      d="M15058 3345c-5,8 -11,15 -17,19 -6,4 -13,6 -21,6 -9,0 -21,-5 -33,-14 -13,-9 -29,-20 -48,-31 -19,-12 -42,-22 -69,-32 -27,-10 -59,-14 -98,-14 -36,0 -68,5 -96,15 -27,9 -50,23 -69,39 -18,17 -32,36 -42,59 -9,22 -14,46 -14,73 0,33 8,61 24,84 17,22 38,40 65,56 27,16 58,29 92,41 35,11 70,23 105,35 36,12 71,26 105,42 35,15 65,34 92,58 27,23 49,52 65,86 17,34 25,76 25,125 0,52 -9,102 -27,148 -18,46 -44,85 -79,119 -34,34 -76,61 -126,80 -50,19 -106,29 -170,29 -78,0 -149,-14 -212,-42 -63,-28 -118,-67 -163,-114l47 -77c4,-6 10,-11 16,-15 7,-4 14,-7 22,-7 7,0 15,3 24,9 9,6 20,13 32,22 12,9 25,19 40,29 15,11 32,20 51,29 19,9 41,16 66,23 25,6 52,8 83,8 38,0 73,-5 103,-16 30,-11 55,-25 76,-44 21,-19 37,-43 48,-69 11,-27 17,-57 17,-89 0,-36 -8,-66 -25,-89 -16,-23 -38,-43 -64,-58 -27,-16 -57,-29 -92,-39 -35,-11 -70,-22 -105,-33 -36,-12 -71,-25 -105,-40 -35,-15 -65,-35 -92,-58 -27,-24 -48,-54 -65,-89 -16,-36 -24,-81 -24,-134 0,-42 8,-83 24,-123 17,-40 41,-75 72,-105 32,-31 70,-55 116,-74 46,-18 99,-28 159,-28 67,0 128,11 182,32 55,21 104,52 145,92l-39 77z"
                    />
                    <path
                      className="fil1"
                      d="M15778 3878l0 477 -162 0 0 -477 -439 -720 142 0c14,0 26,4 34,11 8,7 16,16 22,27l274 465c10,20 19,38 28,55 8,17 16,34 22,51 6,-17 13,-34 21,-51 8,-17 16,-36 26,-55l273 -465c5,-9 12,-18 21,-26 9,-8 20,-12 34,-12l143 0 -439 720z"
                    />
                    <path
                      className="fil1"
                      d="M16889 3910l-188 -487c-6,-14 -11,-31 -18,-50 -6,-19 -12,-40 -18,-62 -12,45 -24,83 -36,113l-188 486 447 0zm337 444l-125 0c-15,0 -26,-4 -35,-11 -9,-7 -16,-16 -20,-28l-112 -289 -537 0 -112 289c-3,10 -10,19 -19,27 -9,8 -21,12 -35,12l-125 0 479 -1197 164 0 479 1197z"
                    />
                    <path
                      className="fil1"
                      d="M17716 3737c47,0 88,-6 124,-17 36,-12 66,-28 90,-48 25,-21 43,-46 55,-75 12,-29 18,-61 18,-96 0,-71 -23,-125 -70,-161 -47,-36 -117,-54 -211,-54l-177 0 0 452 170 0zm553 617l-144 0c-30,0 -51,-11 -65,-34l-311 -428c-9,-13 -20,-23 -31,-28 -11,-6 -27,-9 -50,-9l-123 0 0 499 -161 0 0 -1197 338 0c76,0 141,8 196,23 55,15 101,37 136,66 36,29 63,64 80,105 17,41 26,86 26,137 0,42 -7,82 -20,119 -13,37 -33,70 -58,99 -25,29 -56,54 -93,74 -36,21 -77,36 -124,47 21,12 38,29 53,51l349 475z"
                    />
                    <polygon
                      className="fil1"
                      points="18594,4355 18431,4355 18431,3158 18594,3158 "
                    />
                    <path
                      className="fil1"
                      d="M19535 3910l-188 -487c-6,-14 -11,-31 -18,-50 -6,-19 -12,-40 -18,-62 -12,45 -24,83 -36,113l-188 486 447 0zm337 444l-125 0c-14,0 -26,-4 -35,-11 -9,-7 -16,-16 -20,-28l-112 -289 -537 0 -112 289c-3,10 -10,19 -19,27 -9,8 -21,12 -35,12l-125 0 479 -1197 164 0 479 1197z"
                    />
                    <polygon
                      className="fil1"
                      points="21000,3158 21000,4355 20838,4355 20838,3810 20192,3810 20192,4355 20030,4355 20030,3158 20192,3158 20192,3692 20838,3692 20838,3158 "
                    />
                    <polygon
                      className="fil1"
                      points="9604,5933 9442,5933 9442,4736 9604,4736 "
                    />
                    <path
                      className="fil1"
                      d="M10880 4736l0 1197 -81 0c-13,0 -24,-2 -33,-7 -8,-4 -17,-12 -25,-23l-692 -902c1,14 2,28 3,41 1,13 1,26 1,38l0 853 -142 0 0 -1197 84 0c7,0 13,1 18,2 5,1 9,2 13,4 4,2 8,4 12,8 4,3 8,8 13,13l692 901c-1,-14 -2,-28 -3,-42 -1,-14 -1,-27 -1,-39l0 -848 142 0z"
                    />
                    <path
                      className="fil1"
                      d="M12224 5335c0,90 -14,171 -43,245 -28,74 -69,136 -120,189 -52,52 -114,93 -187,122 -72,28 -153,43 -241,43l-447 0 0 -1197 447 0c88,0 168,14 241,43 73,28 135,69 187,122 52,52 92,115 120,189 28,74 43,155 43,245zm-166 0c0,-74 -10,-139 -30,-197 -20,-58 -48,-107 -85,-147 -37,-40 -81,-71 -134,-92 -52,-21 -111,-32 -175,-32l-285 0 0 935 285 0c65,0 123,-11 175,-32 52,-21 97,-52 134,-91 37,-40 65,-89 85,-147 20,-58 30,-124 30,-197z"
                    />
                    <path
                      className="fil1"
                      d="M13563 5335c0,90 -14,172 -43,247 -28,75 -68,139 -120,193 -52,54 -114,96 -187,126 -72,30 -153,44 -241,44 -88,0 -168,-15 -241,-44 -72,-30 -134,-72 -186,-126 -52,-54 -92,-118 -120,-193 -28,-75 -43,-158 -43,-247 0,-90 14,-172 43,-246 28,-75 68,-140 120,-194 52,-55 114,-97 186,-127 72,-30 153,-45 241,-45 88,0 168,15 241,45 73,30 135,72 187,127 52,54 92,119 120,194 28,75 43,157 43,246zm-166 0c0,-74 -10,-139 -30,-198 -20,-58 -48,-108 -85,-148 -37,-41 -81,-72 -134,-94 -52,-22 -111,-33 -175,-33 -64,0 -122,11 -175,33 -52,22 -97,53 -134,94 -37,40 -65,89 -85,148 -20,58 -30,124 -30,198 0,73 10,139 30,198 20,58 48,107 85,148 37,40 82,71 134,93 52,21 111,32 175,32 65,0 123,-11 175,-32 52,-22 97,-53 134,-93 37,-41 65,-90 85,-148 20,-58 30,-124 30,-198z"
                    />
                    <path
                      className="fil1"
                      d="M14765 4736l0 1197 -81 0c-13,0 -24,-2 -33,-7 -8,-4 -17,-12 -25,-23l-692 -902c1,14 2,28 3,41 1,13 1,26 1,38l0 853 -142 0 0 -1197 84 0c7,0 13,1 18,2 5,1 9,2 13,4 4,2 8,4 12,8 4,3 8,8 13,13l692 901c-1,-14 -2,-28 -3,-42 -1,-14 -1,-27 -1,-39l0 -848 142 0z"
                    />
                    <polygon
                      className="fil1"
                      points="15809,5801 15808,5933 15071,5933 15071,4736 15808,4736 15808,4868 15233,4868 15233,5265 15699,5265 15699,5392 15233,5392 15233,5801 "
                    />
                    <path
                      className="fil1"
                      d="M16647 4923c-5,8 -11,15 -17,19 -6,4 -13,6 -21,6 -9,0 -21,-5 -33,-14 -13,-9 -29,-20 -48,-31 -19,-12 -42,-22 -69,-32 -27,-9 -59,-14 -98,-14 -36,0 -68,5 -96,15 -27,9 -50,23 -69,39 -18,17 -32,36 -42,59 -9,22 -14,47 -14,73 0,33 8,61 24,84 17,22 38,40 65,56 27,16 58,29 92,41 35,11 70,23 105,35 36,12 71,26 105,42 35,15 65,34 92,58 27,23 49,52 65,86 17,34 25,76 25,125 0,52 -9,102 -27,148 -18,46 -44,85 -79,119 -34,34 -76,61 -126,80 -50,19 -106,29 -170,29 -78,0 -149,-14 -212,-42 -63,-28 -118,-67 -163,-114l47 -77c4,-6 10,-11 16,-15 7,-4 14,-7 22,-7 7,0 15,3 24,9 10,6 20,13 32,22 12,9 25,19 40,29 15,11 32,20 51,29 19,9 41,16 66,23 25,6 52,8 83,8 38,0 73,-5 103,-16 30,-11 55,-25 76,-44 21,-20 37,-43 48,-69 11,-27 17,-57 17,-89 0,-36 -8,-66 -25,-89 -16,-23 -38,-43 -64,-58 -27,-16 -57,-29 -92,-39 -35,-11 -70,-22 -105,-33 -36,-12 -71,-25 -105,-40 -35,-15 -65,-35 -92,-58 -27,-24 -48,-54 -65,-89 -16,-36 -24,-81 -24,-134 0,-42 8,-83 24,-123 17,-40 41,-75 72,-105 32,-31 70,-55 116,-74 46,-18 99,-28 159,-28 67,0 128,11 182,32 55,21 104,52 145,92l-39 77z"
                    />
                    <polygon
                      className="fil1"
                      points="17104,5933 16942,5933 16942,4736 17104,4736 "
                    />
                    <path
                      className="fil1"
                      d="M18046 5488l-188 -487c-6,-15 -11,-31 -18,-50 -6,-19 -12,-40 -18,-62 -12,45 -24,83 -36,113l-188 486 447 0zm337 444l-125 0c-15,0 -26,-4 -35,-11 -9,-7 -16,-16 -20,-28l-112 -289 -537 0 -112 289c-3,10 -10,19 -19,27 -9,8 -21,12 -35,12l-125 0 479 -1197 164 0 479 1197z"
                    />
                  </g>
                </svg>
              </div>
              <div className="owner">
                a/n <strong>Dina Anifersari</strong>
              </div>
              <div className="nomor-rekening">{bankAccount.BSI}</div>
              <div
                className="copy-rekening"
                onClick={(e) => handleCopy(e, "BSI")}
              >
                <a>
                  <strong>{copyStatus ? "Tersalin" : "Salin Rekening"}</strong>
                </a>
              </div>
            </div>
          </div>
          <div className="closing">
            <p>Terimakasih</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gift {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
          gap: 1rem;
          z-index: 10;
        }

        .gift-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.8em;
          align-self: center;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .rekening {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: auto;
          padding: 1rem 0;
          border-radius: 0.5rem;
        }

        .icon > img {
          width: 8rem;
          height: auto;
        }

        .owner {
          font-size: 1.5em;
        }

        .nomor-rekening {
          font-size: 1.2em;
        }

        .copy-rekening {
          padding: 0.5rem 1rem;
          background-color: rgb(227, 183, 160);
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          border-radius: 0.25rem;
        }

        .closing {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.2em;
        }

        .fade-enter {
          opacity: 0;
          z-index: -30;
        }

        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
          z-index: -30;
        }

        .fade-exit {
          opacity: 1;
          z-index: -30;
        }

        .fade-exit-active {
          transition: opacity 300ms;
          opacity: 0;
          z-index: -30;
        }

        .gift-background {
          display: block;
          width: 100vw;
          height: 100vh;
          z-index: 42;
          background-color: rgba(0, 0, 0, 0.3);
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default DisplayedGift;
