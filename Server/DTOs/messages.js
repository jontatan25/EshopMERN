function saveUserDTO(userInfo) {
  const date = new Date();
  const dateString = date.toString();
  const userDTO = {
    username: userInfo.username,
    country: userInfo.country,
    flag: userInfo.flag,
    age: userInfo.age,
    gender: userInfo.gender,
    avatar: userInfo.avatar,
    date: dateString,
  };
  return userDTO;
}
function saveMessageDTO(messageInfo) {
  const now = new Date();
  const hoursAndMinutes = (now.getHours()<10?'0':'') + now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes() + ':' + (now.getSeconds()<10?'0':'') + now.getSeconds()
  const dateString = hoursAndMinutes.toString();
  const messageDTO = {
    username: messageInfo.username,
    message: messageInfo.message,
    avatar: messageInfo.avatar,
    date: dateString,
  };
  return messageDTO;
}

function saveMessageDTOClient(saveResult) {
  const messageDTO = {
    username: saveResult.username,
    message: saveResult.message,
    avatar: saveResult.avatar,
    date: saveResult.date,
    id: saveResult._id,
  };
  return messageDTO;
}

function getChatUsersDTO(users) {
  const usersDTO = [];
  for (let i = 0; i < users.length; i++) {
    const DTOMessage = {
      id: users[i]._id,
      username: users[i].username,
      country: users[i].country,
      flag: users[i].flag,
      age: users[i].age,
      gender: users[i].gender,
      avatar: users[i].avatar,
    };
    usersDTO.push(DTOMessage);
  }
  return usersDTO;
}
function getMessagesByEmailDTO(messages) {
  const messagesDTO = [];
  for (let i = 0; i < messages.length; i++) {
    const DTOMessage = {
      id: messages[i]._id,
      username: messages[i].username,
      message: messages[i].message,
      avatar: messages[i].avatar,
      date: messages[i].date,
    };
    messagesDTO.push(DTOMessage);
  }
  return messagesDTO;
}

export {
  saveUserDTO,
  saveMessageDTO,
  getChatUsersDTO,
  getMessagesByEmailDTO,
  saveMessageDTOClient,
};
