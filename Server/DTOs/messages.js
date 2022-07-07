function saveMessageDTO(message) {
  const date = new Date();
  const dateString = date.toString();
  const messageDTO = {
    email: message.email,
    type: "user",
    date: dateString,
    body: message.body,
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

export { saveMessageDTO, getMessagesByEmailDTO };
