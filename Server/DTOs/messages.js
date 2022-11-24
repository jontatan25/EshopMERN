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
  const hoursAndMinutes = (now.getHours()<10?'0':'') + now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes() + ':' + now.getSeconds();
  const dateString = hoursAndMinutes.toString();
  const messageDTO = {
    username: messageInfo.username,
    message: messageInfo.message,
    date: dateString,
  };
  return messageDTO;
}

function saveMessageDTOClient(getMessages) {
  const date = new Date();
  const dateString = date.toString();
  const messageDTO = {
    email: getMessages.email,
    date: dateString,
    body: getMessages.body,
  };
  return messageDTO;
}

function getMessagesByEmailDTO(messages) {
  const messagesDTO = [];
  for (let i = 0; i < messages.length; i++) {
    const DTOMessage = {
      id: messages[i]._id,
      username: messages[i].username,
      message: messages[i].message,
      date: messages[i].date,
    };
    messagesDTO.push(DTOMessage);
  }
  return messagesDTO;
}

export {
  saveUserDTO,
  saveMessageDTO,
  getMessagesByEmailDTO,
  saveMessageDTOClient,
};
