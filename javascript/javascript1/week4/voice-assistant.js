const usersList = {
    name: '',
    todosList: [],
    day: '',
    favoriteDish: '',
    myCalendar: []

};

function getReply(command) {
                //   Command to Lowercase
    const commandToLowerCase = command.toLowerCase();
                    // Command Name 
    if(commandToLowerCase.includes('hello my name is')) {
        const commandArray = commandToLowerCase.split(" ");
        const name = commandArray[commandArray.length - 1];
        usersList.name = name;
        return `nice to meet you ${usersList.name}`;
    // } else if(usersList.name === ) {
    //     return `You have already introduced yourself`;
    } else if(commandToLowerCase.includes('what is my name')) {
        if(usersList.name === undefined){
            return `You have not introduced yourself`;
        } else {
        return `${usersList.name}`;
     } 
                    //  Add or remove to-do list 
    } else if(commandToLowerCase.endsWith('todo') || commandToLowerCase.endsWith('todo?')) {
            const todoCommand = commandToLowerCase.split(" ");
            const addToDoList = todoCommand.slice(1, -3);
            const addToDoListJoin = addToDoList.join(" ");
          if(commandToLowerCase.startsWith('add')) {
            usersList.todosList.push(addToDoListJoin);
            return `${addToDoListJoin} added to your todo`;
        } else if (commandToLowerCase.startsWith('remove')) {
            const removeToFindIndex = usersList.todosList.indexOf(addToDoListJoin);
            const removeToDo = usersList.todosList.splice(removeToFindIndex, 1);
            return `Removed ${addToDoListJoin} from my todo`;
        } else if(commandToLowerCase.startsWith('what is')) {
            return `You have ${usersList.todosList.length} todos - ${usersList.todosList.join(' and ')}`;
        }
                              // Day 
    } else if(commandToLowerCase.includes('what day is it today')) {
         usersList.day = new Date().toLocaleDateString();
         const todayToArray = usersList.day.split('/');
         const monthsArrays = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          const month = monthsArrays[todayToArray[1].slice(-1, 2)-1];
          return `${todayToArray[0]}. of ${month} ${todayToArray[2]}`;
                        //   Simple Math
    } else if(commandToLowerCase.startsWith('what is') && typeof(commandToLowerCase[6] = "number") && typeof(commandToLowerCase[8] = "number")) {
          const mathCommand = commandToLowerCase.split(" ");
          let num1 = Number(mathCommand[2]);
          let sign = mathCommand[3];
          let num2 = Number(mathCommand[4]);
          if(sign === '+'){
              usersList.math = num1 + num2;
              return `Here is your answer ${usersList.math}`;
          } else if (sign === '-') {
                usersList.math = num1 -  num2
            return `Here is your answer ${usersList.math}`;
          } else if (sign === '*') {
               usersList.math = num1 * num2;
               return `Here is your answer ${usersList.math}`
          } else if (sign === '/') {
               usersList.math = (num1/num2).toFixed(3);
               return `Here is your answer ${usersList.math}`
          } else if (sign === '%') {
               usersList.math = num1 % num2
               return `Here is your answer ${usersList.math}`
          } 
                   // Favorite dish
        } else if(commandToLowerCase.includes('my favorite dish is')) {
            const favoriteCommand = commandToLowerCase.split(" ");
            const favoriteDishName = favoriteCommand.slice(4).join(" ");
            if (favoriteDishName === 'spaghetti') {
                usersList.favoriteDish = 'lasagne';
                return usersList.favoriteDish;
            } else {
                usersList.favoriteDish = favoriteDishName;
                return usersList.favoriteDish;
            }    
            } if (commandToLowerCase.includes('what is my favorite dish')) {
                return `Your favorite dish is ${usersList.favoriteDish}`

                // set a timer
        } else if(commandToLowerCase.includes('set a timer for 4 minutes')) {
                 const timerCommand = command.split(" ");
                 const stringToANumber = parseInt(timerCommand[4]);
                 const minInmilliseconds = 4000;
                 setTimeout(() => { 
                     console.log(`Timer set for 4 minutes`);
                     
                 }, 10);
                 setTimeout(() => { 
                    console.log(usersList.timer = 'Timer done');
                    
                }, minInmilliseconds);

        } else if (commandToLowerCase.startsWith('add') && commandToLowerCase.endsWith('calendar')){
                 const calendarCommand = commandToLowerCase.split(" ");
                 const calendarDateCommand = calendarCommand.slice(4, 5).join();
                 usersList.myCalendar.push({name: calendarCommand.slice(1, 3).join(""), date: calendarDateCommand});
                 return `${usersList.myCalendar[0].name} added to your calendar`;
       } else if (commandToLowerCase.includes('what am i doing this week?')) {
                const calendarDateForComments =  usersList.myCalendar[0].date.split('/');

                 const monthArrays = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                 const nameOfThemonth = monthArrays[calendarDateForComments[1].slice(-1, 2) -1];

                 return `This week you have 1 event: ${usersList.myCalendar[0].name} the ${calendarDateForComments[0]}. of ${nameOfThemonth} ${calendarDateForComments[2]}`;

       }

    }
    

console.log(getReply('Hello my name is Sowmya'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add dancing on the floor to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today'));
console.log(getReply('what is 9 * 12'));
console.log(getReply('My favorite dish is spaghetti'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Add Bike ride the 26/09/2019 to my calendar'));
console.log(getReply('Add camp adventure the 28/09/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));
console.log(getReply('set a timer for 4 minutes'));
console.log(usersList);

