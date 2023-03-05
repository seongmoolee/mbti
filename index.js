function getRandomMBTI() {
    const mbtiList = [
        'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
        'ISTP', 'ISFP', 'INFP', 'INTP',
        'ESTP', 'ESFP', 'ENFP', 'ENTP',
        'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
    ];
    
    const randomIndex = Math.floor(Math.random() * mbtiList.length);
    return mbtiList[randomIndex];
  }
  
  const mbtiArray = [];
  
  for (let i = 0; i < 10000; i++) {
    const mbti = getRandomMBTI();
    mbtiArray.push(mbti);
  }
  
  console.log(mbtiArray);