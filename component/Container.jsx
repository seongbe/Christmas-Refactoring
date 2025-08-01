import React from 'react';
import PropTypes from 'prop-types';

const StyledContainer = ({
  width = '320px',
  height = '200px',
  text1,
  text2,
  margin = '0',
  onClick,
  imageSrc
}) => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-white/80 rounded-lg p-4 box-border cursor-pointer"
      style={{ width, height, margin }}
      onClick={onClick}
    >
      {imageSrc && (
        <div className="absolute -top-7 flex justify-center w-full">
          <img src={imageSrc} alt="Santa Image" className="w-[50px] h-[50px]" />
        </div>
      )}
      <p className="font-[SUITE] text-[16px] text-[#254434] my-1 z-10 whitespace-pre-line">{text1}</p>
      {Array.isArray(text2) ? (
        text2.map((line, index) => (
          <p key={index} className="font-[SUITE] text-[14px] text-[#254434] z-10 whitespace-pre-line">
            {line}
          </p>
        ))
      ) : (
        <p className="font-[SUITE] text-[14px] text-[#254434] z-10 whitespace-pre-line">{text2}</p>
      )}
    </div>
  );
};

StyledContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  imageSrc: PropTypes.string
};

export default StyledContainer;