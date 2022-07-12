function saveMessageDTO(messageWithEmail) {
  const date = new Date();
  const dateString = date.toString();
  const messageDTO = {
    email: messageWithEmail.email,
    type: "user",
    date: dateString,
    body: messageWithEmail.message.body,
  };
  return messageDTO;
}
function saveMessageDTOClient(getMessages) {
  const date = new Date();
  const dateString = date.toString();
  const messageDTO = {
    email: getMessages.email,
    type: "user",
    date: dateString,
    body: getMessages.body,
  };
  return messageDTO;
}

function getMessagesByEmailDTO(messages) {
  const messagesDTO = [];
  for (let i = 0; i < messages.length; i++) {
    const DTOMessage = { email: messages[i].email, type: messages[i].type, date: messages[i].date, body: messages[i].body};
    messagesDTO.push(DTOMessage);
  }
  return messagesDTO;
}

export { saveMessageDTO, getMessagesByEmailDTO, saveMessageDTOClient };
