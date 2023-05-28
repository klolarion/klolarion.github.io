const quotes = [
    {
        quote: '우리는 모드 스타이고, 빛날 가치가 있다.',
        author: '마릴린 먼로',
    },
    {
        quote: '모두가 비슷한 생각을 한다는 것은, 아무도 생각하고 있지 않다는 것이다.',
        author: '아인슈타인',
    },
    {
        quote: '왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.',
        author: '공자',
    },
    {
        quote: '배우나 생각하지 않으면 공허하고, 생각하나 배우지 않으면 위험하다.',
        author: '마릴린 먼로',
    },{
        quote: '작은 변화가 일어날 떄 진정한 삶을 살게 된다.',
        author: '레프 톨스토이',
    },
    {
        quote: '투표는 총알보다 빠르다. 투표는 총알보다 강하다.',
        author: '에이브러햄 링컨',
    },
    {
        quote: '예절이 사람을 만든다.',
        author: '위컴의 윌리엄',
    },
    {
        quote: '정치에 참여하지 않는 벌 중 하나는 자신보다 저급한 사람들의 지배를 받는 것이다.',
        author: '플라톤',
    },
    {
        quote: '자기 아이큐를 뽐내는 놈들은 다 루저들이다. ',
        author: '스티븐 호킹',
    },
    {
        quote: '참여하는 사람은 주인이요 그렇지 않은 사람은 손님이다.',
        author: '도산 안창호',
    },
    {
        quote: '비관론자는 모든 기회에서 어려움을 찾아내고 낙관론자는 모든 어려움에서 기회를 찾아낸다.',
        author: '윈스턴 처칠',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const num = parseInt(Math.random()*quotes.length);

quote.innerText = quotes[num].quote;
author.innerText = quotes[num].author;