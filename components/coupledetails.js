import Flower from "./flower";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function CoupleDetails(props) {
  return (
    <div id="couple">
      <div className="couple container" data-aos="fade-up">
        <Flower />
        <div className="couple-image">
          <img src="/asset/couple.jpg" alt="couple.jpg" />
        </div>
        <div className="couple-name">
          <div className="couple-name-girl">
            <div className="girl-name">
              <p>Dina Anifer Sari</p>
            </div>
            <div>
              <p>Putri Pertama dari</p>
            </div>
            <div className="couple-parent">
              <p>Bapak Sarijo, S.E.</p>
              <p>dan</p>
              <p>Ibu Pujiati</p>
            </div>
          </div>
          <div className="couple-name-boy">
            <div className="boy-name">
              <p>Beni Setiyadi Saputro</p>
            </div>
            <div>
              <p>Putra Ke-Empat dari</p>
            </div>
            <div className="couple-parent">
              <p>Bapak Achmad Surun</p>
              <p>dan</p>
              <p>Ibu Pujiati</p>
            </div>
          </div>
          {/* <div className="love-story">
            <div
              className="love-story-button"
              onClick={() => props.setDisplayLoveStory(true)}
            >
              <p>Love Story</p>
            </div>
          </div> */}
        </div>

        <style jsx>{`
          .couple {
            margin-bottom: 3rem;
          }
          .couple-image {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 1.8rem 1rem;
          }

          .couple-image > img {
            width: 100%;
            height: auto;
          }

          .couple-name {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .couple-name-girl,
          .couple-name-boy {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
          }

          .girl-name > p,
          .boy-name > p {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.2rem;
            font-size: 2em;
            font-weight: bold;
            text-align: center;
          }

          .couple-parent {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.1em;
            font-weight: bold;
          }

          .love-story-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CoupleDetails;
