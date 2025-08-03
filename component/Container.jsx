import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

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
     <Image
  src={imageSrc}
  alt="Santa Image"
  width={50}
  height={50}
  style={{ objectFit: 'contain' }}
  priority // LCP 대상이거나 상단 요소일 경우
/>
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