"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StyledContainer from "../component/Container";
import CountdownBadge from "../component/RedButton";

import LogoImage from "../public/images/ShiningLogo1.webp";
import BallImage from "../public/images/Christmas Snow Globe.png";
import RightImage from "../public/images/chevron-right.png";
import Santaman from "../public/images/santa.png";

import PopupImage from "../public/images/tutorial.svg";
import CloseIcon from "../public/images/x.svg";

import Image from "next/image";

const MainPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [nickname, setNickname] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    if (isPopupVisible) {
      localStorage.setItem("tutorialSeen", "true");
    }
  };

  useEffect(() => {
    setHasMounted(true);

    const tutorialSeen = localStorage.getItem("tutorialSeen");
    const storedNickname = localStorage.getItem("nickname");
    if (storedNickname) setNickname(storedNickname);

    if (!tutorialSeen) {
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 1000);
    }
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <Image
        src="/images/processback.png"
        alt="Background"
        fill
        priority // 👈 이거 추가
        fetchPriority="low" // 👈 이것도 함께 적용 (의미 명확히)
        className="object-cover z-[-1]"
      />

      <div className="w-[320px] h-[420px] mt-10 flex flex-col bg-white/0 border border-gray-300/0 rounded-lg">
        <div className="flex justify-between items-center my-5">
          <Image
            src={LogoImage}
            alt="Logo"
            width={190}
            height={60}
            priority
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className="w-[190px] h-[60px]"
            sizes="(max-width: 640px) 160px, 190px"
          />
          <h1
            onClick={() => router.push("/TreeManito")}
            className="text-white text-sm font-[SUITE] cursor-pointer"
          >
            {nickname ? `${nickname} 트리보러가기` : "트리보러가기"}
          </h1>
        </div>

        <div
          className="bg-white/80 rounded-lg p-4 cursor-pointer mb-5"
          onClick={() => router.push("/teststart")}
        >
          <div className="flex justify-between items-center">
            <Image
              src={BallImage}
              alt="Ball"
              width={50}
              height={60}
              className="h-auto"
            />
            <p className="text-sm text-black whitespace-pre-line font-[SUITE]">
              산타가 보는 나는 어떤 성격일까?!{"\n"}궁금하다면 클릭! 🎄✨
            </p>
            <Image
              src={RightImage}
              alt="Right"
              width={30}
              height={30}
              className="h-auto"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-white text-base font-[SUITE] my-2">
            마니또 트리를 시작해보세요!
          </h1>
          <div
            className="w-20 h-8 bg-white/80 rounded-full flex items-center justify-center cursor-pointer"
            onClick={togglePopup}
          >
            <h1 className="text-sm text-[#184E40] font-[SUITE]">🎁 튜토리얼</h1>
          </div>
        </div>

        {isPopupVisible && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative w-[90%] max-w-md">
              <Image src={PopupImage} alt="Popup" className="w-full h-auto" />
              <Image
                src={CloseIcon}
                alt="Close"
                width={30}
                height={30}
                className="absolute top-4 right-4 cursor-pointer h-auto"
                onClick={togglePopup}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <StyledContainer
            width="140px"
            height="125px"
            text1="그룹 만들기"
            text2={["마니또 그룹을", "만들어요!"]}
            imageSrc="/images/santa3.png"
            onClick={() => router.push("/MakeGroup")}
          />
          <StyledContainer
            width="140px"
            height="125px"
            text1="그룹 입장하기"
            text2={["초대받은", "그룹에 입장해요!"]}
            imageSrc="/images/santa.png"
            onClick={() => router.push("/JoinGroupPage")}
          />
        </div>
      </div>

      <hr className="border-t border-gray-300 w-[90%] opacity-30 mt-5" />

      <div className="flex items-center justify-center gap-4 my-4">
        <h1 className="text-white text-base font-[SUITE]">
          {nickname ? `${nickname} 산타의 마니또` : "산타의 마니또"}
        </h1>
        <CountdownBadge />
      </div>

      <div
        className="w-[320px] h-[140px] bg-white/80 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        onClick={() => router.push("/BeforeMatching")}
      >
        <Image
          src={Santaman}
          alt="Santa"
          width={50}
          height={50}
          className="h-auto"
        />
        <div className="bg-[rgba(143,20,38,0.80)] rounded-full w-40 h-7 mt-2 flex items-center justify-center">
          <p className="text-white text-xs font-semibold font-[SUITE] text-center">
            마니또 매칭 대기중이에요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;