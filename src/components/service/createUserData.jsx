const URI =
  "https://api.telegram.org/bot5561216377:AAFdSv6VCHOQ_noIhLN4rJPZMh2G_sBwlI8/sendMessage?chat_id=-4180647434&parse_mode=HTML&text=";

export const createUserData = async (data) => {
  let date = new Date();
  let dataText = `Дата заявки: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}%0AВремя заявки: ${date.getHours()}:${date.getMinutes()}%0A%0A`;
  for (let i of data.keys()) {
    dataText += `<b>${i}</b>: <u>${data.get(i)}</u>%0A`;
  }
  try {
    const request = async () => {
      const res = await fetch(`${URI}${dataText}`, {
        credentials: "same-origin",
        method: "POST",
      });
      const response = await res.json();
      if (!res.ok) {
        console.log("Error");
      }
      return response;
    };
    if (data) {
      request();
    }
    return true;
  } catch (e) {
    console.log("Catch error");
    return false;
  }
};
