export interface ResultTestData {
  type: string;
  query: string;
  zodiac: string;
  description: string;
  img_src: string;
}

export interface TestData {
  info: {
    mainTitle: string;
    subTitle: string;
    mainUrl: string;
    scoreType: string;
    mainImage: string;
    thumbImage: string;
    lang: string;
    category: string;
  };
  questions: {
    which: string;
    question: string;
    answers: {
      type: string;
      content: string;
    }[];
  }[];
  results: ResultTestData[];
}

export const TESTS = [
  // personalColor
  {
    info: {
      mainTitle: "별자리 테스트",
      subTitle:
        "생일로 보는 별자리는 그만! 내 MBTI에 어울리는 별자리는 무엇일까?",
      mainUrl: "zodiacSign",
      scoreType: "MBTI",
      mainImage:
        "https://www.dropbox.com/scl/fi/u4moi8xe7wme1ao796ujw/personalColor-intro.png?rlkey=qn2igicxafksekjx9fsnukk9z&st=ifpx4r50&dl=1",
      thumbImage:
        "https://www.dropbox.com/scl/fi/9iqe0gypnnclo5elt3hpi/personalColor-thumb.png?rlkey=m9uwdd6xww0v66g2gjo2688jz&st=ut5c22fv&dl=1",
      lang: "Kor",
      category: "characteristic",
    },
    questions: [
      {
        which: "EI",
        question: "처음 보는 친구들에게 나는?",
        answers: [
          {
            type: "E",
            content: "내가 먼저 말을 건낸다.",
          },
          {
            type: "I",
            content: "대부분 다른 친구가 먼저 말을 건낸다.",
          },
        ],
      },
      {
        which: "EI",
        question: "주말에 난?",
        answers: [
          {
            type: "E",
            content: "사람들과 만나는 것을 즐긴다.",
          },
          {
            type: "I",
            content: "혼자 있는 게 싫지 않은 편이다.",
          },
        ],
      },
      {
        which: "EI",
        question: "친구들과 놀 때 나는?",
        answers: [
          {
            type: "E",
            content: "왁자지껄한 신나는 분위기를 좋아한다.",
          },
          {
            type: "I",
            content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 더 중요하게 생각하는 것은?",
        answers: [
          {
            type: "S",
            content: "현재가 없으면 미래도 없다.",
          },
          {
            type: "N",
            content: "미래를 생각하지 않으면 발전이 없다.",
          },
        ],
      },
      {
        which: "SN",
        question: "일할 때 나는?",
        answers: [
          {
            type: "S",
            content: "남들이 하는 대로 따라 가는 것이 좋다.",
          },
          {
            type: "N",
            content: "스스로 나만의 방법을 만드는 게 좋다. ",
          },
        ],
      },
      {
        which: "SN",
        question: "주변 사람들이 나에게 하는 말은?",
        answers: [
          {
            type: "S",
            content: "꾸준하고 참을성이 있다는 말을 자주한다.",
          },
          {
            type: "N",
            content: "창의적이고 독창적이라는 말을 자주한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "거절해야 하는 상황이 오면 나는?",
        answers: [
          {
            type: "T",
            content: "강력하게 할 수 없다고 말한다.",
          },
          {
            type: "F",
            content: "고민하다가 대부분 들어주는 편이다.",
          },
        ],
      },
      {
        which: "TF",
        question: "화났을 때 나는?",
        answers: [
          {
            type: "T",
            content: "논리적으로 잘 말하면서 따진다. ",
          },
          {
            type: "F",
            content: "할말이 많지만 너무 분해서 눈물부터 난다.",
          },
        ],
      },
      {
        which: "TF",
        question:
          "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
        answers: [
          {
            type: "T",
            content: "친구의 잘못된 점을 말해준다.",
          },
          {
            type: "F",
            content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
          },
        ],
      },
      {
        which: "JP",
        question: "준비물을 준비할 때 나는?",
        answers: [
          {
            type: "J",
            content: "하루 전 날 미리 준비한다.",
          },
          {
            type: "P",
            content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
          },
        ],
      },
      {
        which: "JP",
        question:
          "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
        answers: [
          {
            type: "J",
            content: "계획에 없던 일인데…매우 당황스럽다.",
          },
          {
            type: "P",
            content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
          },
        ],
      },
      {
        which: "JP",
        question: "내가 가고싶은 여행지 스타일은?",
        answers: [
          {
            type: "J",
            content:
              "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
          },
          {
            type: "P",
            content:
              "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "estjduathwkfl",
        zodiac: "염소자리",
        description:
          "경영자인 당신! 조직적이고 실용적인 성향이 염소자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/uyw66arfxke0f9tvqpgm9/.png?rlkey=05vkxyg09vb3bya13e5483z2g&st=rr48gc8g&dl=1",
      },
      {
        type: "ESTP",
        query: "estpdidwkfl",
        zodiac: "양자리",
        description:
          "사업가인 당신! 대담하고 도전적인 성향이 양자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/uhlqg9tb14r6dpyc6nvse/.png?rlkey=y5kyh406z834ipe88ifn4qxdu&st=0yu63djt&dl=1",
      },
      {
        type: "ESFJ",
        query: "esfjtkwkwkfl",
        zodiac: "사자자리",
        description:
          "집정관인 당신! 리더십과 카리스마가 사자자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/6tl1oj9fs4ko9hh2phyek/.png?rlkey=hvd4spdc2xvzlziedkm2kass6&st=ht5imocm&dl=1",
      },
      {
        type: "ESFP",
        query: "esfpTkdenddlwkfl",
        zodiac: "쌍둥이자리",
        description:
          "연예인인 당신! 사교적이고 즐거움을 추구하는 성격이 쌍둥이자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/xpzmylko9fw72p12etspk/.png?rlkey=mnuwrodllinr6d5z319xh3kd0&st=suk2y38o&dl=1",
      },
      {
        type: "ENTJ",
        query: "entjtkwkwkfl",
        zodiac: "사자자리",
        description:
          "지도자인 당신! 리더십이 강하고 주도적인 면이 사자자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/6tl1oj9fs4ko9hh2phyek/.png?rlkey=hvd4spdc2xvzlziedkm2kass6&st=v0yfaah1&dl=1",
      },
      {
        type: "ENTP",
        query: "entptktnwkfl",
        zodiac: "사수자리",
        description:
          "변론가인 당신! 에너제틱하고 토론은 좋아하는 면이 사수자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/az58bxia3k4ueb238t3wh/.png?rlkey=zph89frhk2lemzw7sr6g75loq&st=t62d39pv&dl=1",
      },
      {
        type: "ENFJ",
        query: "enfjrpwkfl",
        zodiac: "게자리",
        description:
          "선도자인 당신! 카리스마 있고 배려심 깊은 면이 게자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/b9j6qwvep4j8pcvzu81kj/.png?rlkey=e64s2f91s9a7wjpebdzbzndlm&st=y0vx4ikf&dl=1",
      },
      {
        type: "ENFP",
        query: "enfptktnwkfl",
        zodiac: "사수자리",
        description:
          "활동가인 당신! 낙천적이고 모험심 강한 면이 사수자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/az58bxia3k4ueb238t3wh/.png?rlkey=zph89frhk2lemzw7sr6g75loq&st=yi6v45fz&dl=1",
      },
      {
        type: "ISTJ",
        query: "istjghkdthwkfl",
        zodiac: "황소자리",
        description:
          "현실주의자인 당신! 책임감이 강하고 신중한 면이 황소자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/e52v6l8jw3qg0sgqgway8/.png?rlkey=bjhkawpi1odwd8omlzsr6p0c5&st=vqcbjqbk&dl=1",
      },
      {
        type: "ISTP",
        query: "istptktnwkfl",
        zodiac: "사수자리",
        description:
          "장인인 당신! 모험심이 강하고 독립적인 성격이 사수자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/az58bxia3k4ueb238t3wh/.png?rlkey=zph89frhk2lemzw7sr6g75loq&st=v0id5xux&dl=1",
      },
      {
        type: "ISFJ",
        query: "isfjcjsuwkfl",
        zodiac: "처녀자리",
        description:
          "수호자인 당신! 헌신적이고 섬세한 감성이 처녀자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/afrg2h0aaqn4o1hbr0i0n/.png?rlkey=6ytpjqm9pgxcmdawf0pxdgrj0&st=7bi9v3k7&dl=1",
      },
      {
        type: "ISFP",
        query: "isfpcjscldwkfl",
        zodiac: "천칭자리",
        description:
          "모험가인 당신! 아름다움과 조화를 중시하는 성격이 천칭자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/25x1omp7dgszlfynrgpof/.png?rlkey=pyqmh4fjzq1wayt7fyp7vbuoc&st=k2terexm&dl=1",
      },
      {
        type: "INTJ",
        query: "intjduathwkfl",
        zodiac: "염소자리",
        description:
          "전략가인 당신! 야망 있고 목표 지향적인 면이 염소자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/uyw66arfxke0f9tvqpgm9/.png?rlkey=05vkxyg09vb3bya13e5483z2g&st=nu8dyfyl&dl=1",
      },
      {
        type: "INTP",
        query: "intpanfqudwkfl",
        zodiac: "물병자리",
        description:
          "논리술사인 당신! 지적이고 자유로운 사고가 물병자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/kqn09f0dg8exyp6hocq8y/.png?rlkey=3c731gy7ifqroujvd843t0ava&st=8gem750c&dl=1",
      },
      {
        type: "INFJ",
        query: "infjanfrhrlwkfl",
        zodiac: "물고기자리",
        description:
          "옹호자인 당신! 깊은 공감력과 신비로운 분위기가 물고기자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/cszwpl8e7r3vjo1prd05q/.png?rlkey=wf679au087h191klgwy5y1m80&st=kimlglk8&dl=1",
      },
      {
        type: "INFP",
        query: "infpcjsuwkfl",
        zodiac: "처녀자리",
        description:
          "중재자인 당신! 순수하고 따뜻한 성향이 처녀자리와 잘 어울려요.",
        img_src:
          "https://www.dropbox.com/scl/fi/afrg2h0aaqn4o1hbr0i0n/.png?rlkey=6ytpjqm9pgxcmdawf0pxdgrj0&st=q7vp3bgr&dl=1",
      },
    ],
  },
  // personalColorEng
  // {
  //   info: {
  //     mainTitle: "Personal Color Test",
  //     subTitle: "What is the color that suits me?",
  //     mainUrl: "personalColorEng",
  //     scoreType: "MBTI",
  //     mainImage:
  //       "https://www.dropbox.com/scl/fi/jmihoko6rjpk0d3rgewsr/personalColorEng-intro.png?rlkey=ifyyqa8m4w44vq1nk08fshhnj&st=n42rl4fc&dl=1",
  //     thumbImage:
  //       "https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1",
  //     lang: "Eng",
  //     category: "characteristic",
  //   },
  //   questions: [
  //     {
  //       which: "EI",
  //       question: "처음 보는 친구들에게 나는?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "내가 먼저 말을 건낸다.",
  //         },
  //         {
  //           type: "I",
  //           content: "대부분 다른 친구가 먼저 말을 건낸다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "EI",
  //       question: "주말에 난?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "사람들과 만나는 것을 즐긴다.",
  //         },
  //         {
  //           type: "I",
  //           content: "혼자 있는 게 싫지 않은 편이다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "EI",
  //       question: "친구들과 놀 때 나는?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "왁자지껄한 신나는 분위기를 좋아한다.",
  //         },
  //         {
  //           type: "I",
  //           content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "내가 더 중요하게 생각하는 것은?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "현재가 없으면 미래도 없다.",
  //         },
  //         {
  //           type: "N",
  //           content: "미래를 생각하지 않으면 발전이 없다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "일할 때 나는?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "남들이 하는 대로 따라 가는 것이 좋다.",
  //         },
  //         {
  //           type: "N",
  //           content: "스스로 나만의 방법을 만드는 게 좋다. ",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "주변 사람들이 나에게 하는 말은?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "꾸준하고 참을성이 있다는 말을 자주한다.",
  //         },
  //         {
  //           type: "N",
  //           content: "창의적이고 독창적이라는 말을 자주한다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question: "거절해야 하는 상황이 오면 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "강력하게 할 수 없다고 말한다.",
  //         },
  //         {
  //           type: "F",
  //           content: "고민하다가 대부분 들어주는 편이다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question: "화났을 때 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "논리적으로 잘 말하면서 따진다. ",
  //         },
  //         {
  //           type: "F",
  //           content: "할말이 많지만 너무 분해서 눈물부터 난다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question:
  //         "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "친구의 잘못된 점을 말해준다.",
  //         },
  //         {
  //           type: "F",
  //           content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question: "준비물을 준비할 때 나는?",
  //       answers: [
  //         {
  //           type: "J",
  //           content: "하루 전 날 미리 준비한다.",
  //         },
  //         {
  //           type: "P",
  //           content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question:
  //         "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
  //       answers: [
  //         {
  //           type: "J",
  //           content: "계획에 없던 일인데…매우 당황스럽다.",
  //         },
  //         {
  //           type: "P",
  //           content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question: "내가 가고싶은 여행지 스타일은?",
  //       answers: [
  //         {
  //           type: "J",
  //           content:
  //             "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
  //         },
  //         {
  //           type: "P",
  //           content:
  //             "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
  //         },
  //       ],
  //     },
  //   ],
  //   results: [
  //     {
  //       type: "ESTJ",
  //       query: "ESTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/7jyylkbnew8w67sadxwf3/ESTJ.png?rlkey=x28ejf7fphxcknxgrox4jt0xi&st=gi6jplvf&dl=1",
  //     },
  //     {
  //       type: "ESTP",
  //       query: "ESTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/69zj9tuprhhhawqh3vb3p/ESTP.png?rlkey=3qzxrw45bbweszae5ujug6jrf&st=fp9olors&dl=1",
  //     },
  //     {
  //       type: "ESFJ",
  //       query: "ESFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/d91sjo51emt7y3stj7hbg/ESFJ.png?rlkey=xgxmki7qiwn4i0hdwj3vuhzsi&st=ethsiyxr&dl=1",
  //     },
  //     {
  //       type: "ESFP",
  //       query: "ESFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/4en5qkoku1gdhqcy94gbn/ESFJ.png?rlkey=yysnrrp2292gb6v933lrn8od9&st=xzvb06i0&dl=1",
  //     },
  //     {
  //       type: "ENTJ",
  //       query: "ENTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/d6yk934zbz3skyuzqx2uh/ENTJ.png?rlkey=ww8y9oig2cjvgedolhlzlydc4&st=zkhwom3a&dl=1",
  //     },
  //     {
  //       type: "ENTP",
  //       query: "ENTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/nocstuf0kek8vqwof04kr/ENTP.png?rlkey=jhzncfwwge0vm0prc9z1q1us8&st=3nbx8feg&dl=1",
  //     },
  //     {
  //       type: "ENFJ",
  //       query: "ENFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/mz9xj0eiun4y0wyk6i68b/ENFJ.png?rlkey=a27hkov12q2jnh5afjpcb4vf8&st=0pwukbac&dl=1",
  //     },
  //     {
  //       type: "ENFP",
  //       query: "ENFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/ytgc86i5mxjiynwrm4mfw/ENFP.png?rlkey=tomxuobmmpl9fma9ng67pw2d8&st=o0m2tssj&dl=1",
  //     },
  //     {
  //       type: "ISTJ",
  //       query: "ISTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/0uwl1mzly1mwi0fsu0acz/ISTJ.png?rlkey=nnbk0rn8w7di6iw7ipybpwwey&st=ra2mod39&dl=1",
  //     },
  //     {
  //       type: "ISTP",
  //       query: "ISTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/6clhx19z1c0l04ulxf5y2/ISTP.png?rlkey=4fwnw6cebeekdvgq3i2hlgsl1&st=k789fxan&dl=1",
  //     },
  //     {
  //       type: "ISFJ",
  //       query: "ISFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/nrhs5u9dgk6w1gs90wkvv/ISFJ.png?rlkey=jxgftwx5hwg088zsbutxbqlgq&st=bi2ywew2&dl=1",
  //     },
  //     {
  //       type: "ISFP",
  //       query: "ISFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/wdnx56kbkdal04nn6364w/ISFP.png?rlkey=5jyfp2x3dcsasjdqraviuqzcg&st=0g9zrn2z&dl=1",
  //     },
  //     {
  //       type: "INTJ",
  //       query: "INTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/hti638rqyby82gguj01z8/INTJ.png?rlkey=ijtbi4hh45dysynn3h6q3k9rg&st=trmrqhry&dl=1",
  //     },
  //     {
  //       type: "INTP",
  //       query: "INTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/nbena5wf4wuok93tftaxy/INTP.png?rlkey=q5d5oyzmrs8ytuiyzcbekm9v7&st=ev85otx2&dl=1",
  //     },
  //     {
  //       type: "INFJ",
  //       query: "INFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/6wxifksbt0c936xlmo3d7/INFJ.png?rlkey=7l6o8yl266k4aor8kbru0b1hy&st=l6xxjeqc&dl=1",
  //     },
  //     {
  //       type: "INFP",
  //       query: "INFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/q4bpun6h0ddy1tf7a4h7c/INFP.png?rlkey=57mzaw4neohebbeh0xnrpcow9&st=m92y77uq&dl=1",
  //     },
  //   ],
  // },
  // personalColorJP
  // {
  //   info: {
  //     mainTitle: "パーソナルカラー診断_性格編",
  //     subTitle: "自分に似合う色は何だろう？ パーソナルカラーテスト",
  //     mainUrl: "personalColorJP",
  //     scoreType: "MBTI",
  //     mainImage:
  //       "https://www.dropbox.com/scl/fi/oyaueh1pzggp5s92532ba/personalColorJP-intro.png?rlkey=pc8j3xs4o64hlxoiqegk6nrdb&st=ipxjb532&dl=1",
  //     thumbImage:
  //       "https://www.dropbox.com/scl/fi/kt272mdx3kigrtgwojeod/personalColorJP-thumb.png?rlkey=j19yzp6gt6iokqgg8kzrl1gpj&st=gzznyj10&dl=1",
  //     lang: "JP",
  //     category: "characteristic",
  //   },
  //   questions: [
  //     {
  //       which: "EI",
  //       question: "처음 보는 친구들에게 나는?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "내가 먼저 말을 건낸다.",
  //         },
  //         {
  //           type: "I",
  //           content: "대부분 다른 친구가 먼저 말을 건낸다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "EI",
  //       question: "주말에 난?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "사람들과 만나는 것을 즐긴다.",
  //         },
  //         {
  //           type: "I",
  //           content: "혼자 있는 게 싫지 않은 편이다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "EI",
  //       question: "친구들과 놀 때 나는?",
  //       answers: [
  //         {
  //           type: "E",
  //           content: "왁자지껄한 신나는 분위기를 좋아한다.",
  //         },
  //         {
  //           type: "I",
  //           content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. ",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "내가 더 중요하게 생각하는 것은?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "현재가 없으면 미래도 없다.",
  //         },
  //         {
  //           type: "N",
  //           content: "미래를 생각하지 않으면 발전이 없다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "일할 때 나는?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "남들이 하는 대로 따라 가는 것이 좋다.",
  //         },
  //         {
  //           type: "N",
  //           content: "스스로 나만의 방법을 만드는 게 좋다. ",
  //         },
  //       ],
  //     },
  //     {
  //       which: "SN",
  //       question: "주변 사람들이 나에게 하는 말은?",
  //       answers: [
  //         {
  //           type: "S",
  //           content: "꾸준하고 참을성이 있다는 말을 자주한다.",
  //         },
  //         {
  //           type: "N",
  //           content: "창의적이고 독창적이라는 말을 자주한다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question: "거절해야 하는 상황이 오면 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "강력하게 할 수 없다고 말한다.",
  //         },
  //         {
  //           type: "F",
  //           content: "고민하다가 대부분 들어주는 편이다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question: "화났을 때 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "논리적으로 잘 말하면서 따진다. ",
  //         },
  //         {
  //           type: "F",
  //           content: "할말이 많지만 너무 분해서 눈물부터 난다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "TF",
  //       question:
  //         "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
  //       answers: [
  //         {
  //           type: "T",
  //           content: "친구의 잘못된 점을 말해준다.",
  //         },
  //         {
  //           type: "F",
  //           content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question: "준비물을 준비할 때 나는?",
  //       answers: [
  //         {
  //           type: "J",
  //           content: "하루 전 날 미리 준비한다.",
  //         },
  //         {
  //           type: "P",
  //           content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question:
  //         "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
  //       answers: [
  //         {
  //           type: "J",
  //           content: "계획에 없던 일인데…매우 당황스럽다.",
  //         },
  //         {
  //           type: "P",
  //           content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!",
  //         },
  //       ],
  //     },
  //     {
  //       which: "JP",
  //       question: "내가 가고싶은 여행지 스타일은?",
  //       answers: [
  //         {
  //           type: "J",
  //           content:
  //             "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!",
  //         },
  //         {
  //           type: "P",
  //           content:
  //             "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!",
  //         },
  //       ],
  //     },
  //   ],
  //   results: [
  //     {
  //       type: "ESTJ",
  //       query: "ESTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/pw32b9gizven8wqpw5dwf/ESTJ.png?rlkey=qtklzibgln378c3bdknwjw7tf&st=8l16g8ct&dl=1",
  //     },
  //     {
  //       type: "ESTP",
  //       query: "ESTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/ibgrksb70x2bjzcp0z04h/ESTP.png?rlkey=ik3lcdangfzm98erz6br44qb1&st=lhd9w11r&dl=1",
  //     },
  //     {
  //       type: "ESFJ",
  //       query: "ESFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/3sj74dcaopwcef1nu21s5/ESFJ.png?rlkey=dsbzcq1d82u89qtzgvmke5ase&st=9cf15gjq&dl=1",
  //     },
  //     {
  //       type: "ESFP",
  //       query: "ESFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/fpewgwyldewu32atxl46r/ESFP.png?rlkey=wqk84mirvwsztbndmcxnyf5nq&st=6e0egn3c&dl=1",
  //     },
  //     {
  //       type: "ENTJ",
  //       query: "ENTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/5z99j9pguw2v481c2684d/ENTJ.png?rlkey=gh85ty07z8wt487w67qxax5px&st=ss1r7dxx&dl=1",
  //     },
  //     {
  //       type: "ENTP",
  //       query: "ENTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/wbt2slrxassf1w1xkmtre/ENTP.png?rlkey=otdc1hazlyxnangfcryydh5k1&st=69k3sp7u&dl=1",
  //     },
  //     {
  //       type: "ENFJ",
  //       query: "ENFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/45rtpzm7yc0abt0jpw4dg/ENFJ.png?rlkey=03bckb05d1vkz534jkqskdunh&st=sja06fnq&dl=1",
  //     },
  //     {
  //       type: "ENFP",
  //       query: "ENFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/q6mzyi55sr85bpaahvrbf/ENFP.png?rlkey=3721niechpy0xsvvc2i9rzrd3&st=96zbdbsu&dl=1",
  //     },
  //     {
  //       type: "ISTJ",
  //       query: "ISTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/65z4aoimkhjya6wmu7vo8/ISTJ.png?rlkey=guf8653rlsy12qwqju2prox59&st=fgwc8cnp&dl=1",
  //     },
  //     {
  //       type: "ISTP",
  //       query: "ISTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/be1p8s7v4y3cn5l5jqm1q/ISTP.png?rlkey=3zylu48zhmqmit9ihfy76487u&st=8vdfflut&dl=1",
  //     },
  //     {
  //       type: "ISFJ",
  //       query: "ISFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/kqlmkbn2pqvmf34ezybcd/ISFJ.png?rlkey=sd3dryf9pahqaq83t23g5hiq8&st=kxo5opty&dl=1",
  //     },
  //     {
  //       type: "ISFP",
  //       query: "ISFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/0p3eidtg3jcmfmxp6f59s/ISFP.png?rlkey=wmktoly5dyl6xezae7nwxwu3u&st=sh6o7h2i&dl=1",
  //     },
  //     {
  //       type: "INTJ",
  //       query: "INTJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/ibyezz790rxzciz7mmdmb/INTJ.png?rlkey=aewbj0ydimf4z1xv0olhpc2zh&st=lcotd17i&dl=1",
  //     },
  //     {
  //       type: "INTP",
  //       query: "INTP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/gnthsbrbmpe23m07dacyt/INTP.png?rlkey=i45gddj68d5go2mpanknj4yf7&st=aois0s0l&dl=1",
  //     },
  //     {
  //       type: "INFJ",
  //       query: "INFJ",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/tndrtsb971747ngvvhh8a/INFJ.png?rlkey=y7lvzvphffjam2yr5hpsqhbnz&st=1sk1yal6&dl=1",
  //     },
  //     {
  //       type: "INFP",
  //       query: "INFP",
  //       img_src:
  //         "https://www.dropbox.com/scl/fi/8r17nrwcdlbop2nluv6c3/INFP.png?rlkey=6atqeqic5a98adqima7ii56qm&st=pf2ucdmw&dl=1",
  //     },
  //   ],
  // },
];
