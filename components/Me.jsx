import Link from "next/link";
import React from "react";
import pic from '../public/images/pic.jpg';
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          간단한 소개
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          <img  src='/images/pic.jpg' layout="fixed" className="rounded-full" width="270"
  height="300" />
            현재 24살이며 중부대학교 정보보안학과를 다니고있습니다.<br/>
            관심분야는 모의해킹분야이며 현재 리눅스와 Kisa 메뉴얼과 책으로 혼자서<br/>
            여러가지를 해보고있습니다 내년에 주요 자격증들을 준비할 생각입니다.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            어플리케이션을 안드로이드 스튜디오로 만들어보고 배워서 프론트엔드는<br/>
            막 잘한다 정도는 아니지만 경험이 있어서 금방 습득합니다.<br/>
            고등학교때는 동아리에서 간단하게 유니티를 이용한 게임도 만들어보고<br/>
            컴퓨터 분야 쪽에서는 여러 재미있는 다양한 경험을 해봤습니다.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            취미로는 게임을 제일 좋아하고 노래를 좋아해서 작곡 작사 보컬 다 배운경험이 있습니다<br/>
            물론 잘하지는 않지만 편집도 할줄 알겠다 나중에 유튜브는 해볼 생각입니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              홈으로
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              포트폴리오
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
