var content = [
    {
        index: 1,
        question: '너무 마음에 드는 책을 발견한 당신.',
        answers: [
            {
                index: 1,
                text: '다른 사람들에게 추천해준다',
                scores: {
                    사교: 1.0,
                    토론: 0.5,
                }
            },
            {
                index: 2,
                text: '이 책을 이제서야 발견했다니! 저자의 다른 책도 찾아본다',
                scores: {
                    혼독: 1.0,
                    숙제: 0.7
                }
            }
        ]
    },
    {
        index: 2,
        question: '책에서 가슴을 울리는 문구를 찾은 당신.',
        answers: [
            {
                index: 1,
                text: '좋은 건 널리널리! 사진을 찍어 개인 SNS에 공유한다',
                scores: {
                    사교: 1.0,
                    낭독: 0.5,
                    토론: 0.3
                }
            },
            {
                index: 2,
                text: '내 마음에만 담아둔다',
                scores: {
                    혼독: 1.0,
                    기록: 0.7
                }
            }
        ]
    },
    {
        index: 3,
        question: '소개팅에서 좋아하는 책이 뭐냐고 묻는 상대방.',
        answers: [
            {
                index: 1,
                text: '신나서 책 이야기를 한다',
                scores: {
                    책청년: 1.0,
                    책른: 1.0
                }
            },
            {
                index: 2,
                text: '최근에 읽은 책이 뭐였지... 기억을 쥐어짜내본다',
                scores: {
                    책린이: 2.0,
                }
            }
        ]
    },
    {
        index: 4,
        question: '친구와 우연히도 같은 책을 읽고 있는걸 알게 된 당신.',
        answers: [
            {
                index: 1,
                text: '같이 읽자고 제안한다',
                scores: {
                    사교: 0.5,
                    낭독: 1.0,
                    토론: 0.3
                }
            },
            {
                index: 2,
                text: '혼자 읽는다',
                scores: {
                    혼독: 1.0,
                    숙제: 1.0
                }
            }
        ]
    },
    {
        index: 5,
        question: '친구가 하루 독서 할당량을 못 채우면 벌금을 내자고 한다.',
        answers: [
            {
                index: 1,
                text: '부담이다, 그렇게까지 의무감으로 읽긴 싫어',
                scores: {
                    혼독: 1.0
                }
            },
            {
                index: 2,
                text: '좋아! 동기부여가 돼! 더 열심히 읽을 수 있을 거 같아',
                scores: {
                    사교: 1.0,
                    숙제: 0.5
                }
            }
        ]
    },
    {
        index: 6,
        question: '주변에서 강력 추천 받은 넷플릭스. 막상 시작했는데 첫화부터 재미가 없다.',
        answers: [
            {
                index: 1,
                text: '언젠가는 재밌겠지... 끝까지 본다',
                scores: {
                    토론: 0.7,
                    숙제: 0.5
                }
            },
            {
                index: 2,
                text: '바로 끄고 다른 시리즈를 찾아본다',
                scores: {
                }
            }
        ]
    },
    {
        index: 7,
        question: '나의 독서량은?',
        answers: [
            {
                index: 1,
                text: '한 달에 세 권 이하',
                scores: {
                    책린이: 1.0,
                    책청년: 2.0
                }
            },
            {
                index: 2,
                text: '한 달에 책 세 권 이상',
                scores: {
                    책른: 2.0
                }
            }
        ]
    },
    {
        index: 8,
        question: '서점에 간 당신.',
        answers: [
            {
                index: 1,
                text: '베스트셀러를 둘러보며 재밌어 보이는 책들을 구경한다',
                scores: {
                    사교: 0.5,
                    토론: 0.5,
                }
            },
            {
                index: 2,
                text: '검색대에서 미리 생각해뒀던 책을 찾는다',
                scores: {
                    기록: 0.5,
                    숙제: 1.0
                }
            }
        ]
    },
    {
        index: 9,
        question: '친구들과 노래방에 간 당신.',
        answers: [
            {
                index: 1,
                text: '마이크는 내꺼! 익숙한 노래가 나오면 무조건 부르고 본다',
                scores: {
                    낭독: 1.0
                }
            },
            {
                index: 2,
                text: '아는 노래가 나와도 내가 예약한 곡이 아니면 옆에서 흥만 돋군다',
                scores: {
                    사교: 0.5,
                    토론: 0.5
                }
            }
        ]
    },
    {
        index: 10,
        question: '친구와의 갈등을 해결하는 방법은?',
        answers: [
            {
                index: 1,
                text: '일기장에 생각을 쓰고 혼자 감정을 정리한다',
                scores: {
                    혼독: 0.5,
                    기록: 1.0
                }
            },
            {
                index: 2,
                text: '말로 해결한다',
                scores: {
                    사교: 0.5,
                    토론: 1.0
                }
            }
        ]
    },
    {
        index: 11,
        question: '선호하는 연락 방법은?',
        answers: [
            {
                index: 1,
                text: '문자',
                scores: {
                    기록: 1.0
                }
            },
            {
                index: 2,
                text: '통화',
                scores: {
                    낭독: 1.0,
                    토론: 0.5
                }
            }
        ]
    },
    {
        index: 12,
        question: '낯선 곳으로 여행을 가게 된 당신.',
        answers: [
            {
                index: 1,
                text: '여행 전 미리 짜놓은 계획대로 움직인다',
                scores: {
                    기록: 0.5,
                    숙제: 1.0
                }
            },
            {
                index: 2,
                text: '계획 없이 즉흥적으로 움직인다',
                scores: {
                    혼독: 1.0,
                }
            }
        ]
    },
    {
        index: 13,
        question: '팀플에서 담당하고 싶은 업무는?',
        answers: [
            {
                index: 1,
                text: '발표',
                scores: {
                    낭독: 1.0,
                }
            },
            {
                index: 2,
                text: '리서치',
                scores: {
                    기록: 1.0,
                    숙제: 0.7
                }
            }
        ]
    }
]

export default content