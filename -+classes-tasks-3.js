console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level){
      this.id = id;
      this.level = level;
    }
    get points (){ // create getter function with object inside of it
      //for is used to iterate through obj with statement of level \

      // example : challenge one lvl 1
      const lvlpoints = {
        VE : 5,
        EA : 10,
        ME : 20,
        HA : 40,
        VH : 80,
        EX : 120
      }

      for (let key in lvlpoints){
        if(key === this.level) {
          return lvlpoints[key];
        }
      }
    }
  }

  class User{
    constructor(name, xp, log){
      this.name = name,
      this.xp = xp,
      this.log = log
    }


    newSolvedChallenge(challenge){
      // The method must increment the xp of the user and store the challenge id into the array log.
      this.xp += challenge.points;
      this.log.push(challenge.id)

      return this.xp
    }

  }

  const user1 = new User('Madam', 0, [])
  const user2 = new User('STeve', 0, [])

  const challenge1 = new Challenge(1, 'VE')
  const challenge2 = new Challenge(2, 'EA')
  const challenge3 = new Challenge(3, 'ME')
  const challenge4 = new Challenge(4, 'HA')
  const challenge5 = new Challenge(5, 'VH')
  const challenge6 = new Challenge(6, 'EX')


  console.table({
    user1Ch1: user1.newSolvedChallenge(challenge1),
    user1Ch4: user1.newSolvedChallenge(challenge4),
    user1Ch6: user1.newSolvedChallenge(challenge6),
    user1: user1.xp,
    user1Log: user1.log
  })

  console.table({
    user2Ch2: user2.newSolvedChallenge(challenge2),
    user2Ch3: user2.newSolvedChallenge(challenge3),
    user2Ch5: user2.newSolvedChallenge(challenge5),
    user2: user2.xp,
    user2Log: user2.log
  })

  console.group(`tests`)
  {
    console.log({
      challLvl: challenge4.level,
      chalId: challenge4.id,
      challPoints: challenge4.points,
    })

  }

 user2.newSolvedChallenge(challenge2);
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  // ... code
}
console.groupEnd();

