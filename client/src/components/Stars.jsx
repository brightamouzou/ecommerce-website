import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Stars({starsNumber}) {
    const intPart=parseInt(starsNumber, 10)
    const decimalPart=starsNumber-intPart
    const remainingStars=parseInt(5-starsNumber)
    return (
      <div className="stars starArticle">
        <div>

            {Array.from({ length: intPart })
              .fill(0)
              .map((ele, idx) => (
                <>
                  <span className="star starPlain checked">
                    <StarIcon />
                  </span>
                </>
              ))}
            {decimalPart > 0 && (
              <span className="star starHalf checked">
                <StarHalfIcon />
              </span>
            )}
            {Array.from({ length: remainingStars })
              .fill(0)
              .map((ele, idx) => (
                <>
                  <span className="star starPlain noChecked">
                    <StarIcon />
                  </span>
                </>
              ))}
        </div>

        <span>{starsNumber}</span>
      </div>
    );
}

export default Stars