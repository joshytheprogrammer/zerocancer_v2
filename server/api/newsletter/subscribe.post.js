export default defineEventHandler(async (event) => {
  // Read the request body
  const rawBody = await readBody(event)
  const config = useRuntimeConfig(event)
  
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "zerocancer.africa",
    "Authorization": "Basic "+ config.mailchimpApiKey,
    "Content-Type": "application/json"
   }
   
  let bodyContent = JSON.stringify({
    "email_address": rawBody.email_address,
    "status": "subscribed",
    "status_if_new": "subscribed"
  });
  
  let response = await fetch("https://us22.api.mailchimp.com/3.0/lists/9c0b7b6132/members/"+rawBody.email_address, { 
    method: "PUT",
    body: bodyContent,
    headers: headersList
  });
  
  let data = await response.json();
  
  if (response.ok) {
    return {
      statusCode: data.status,
      data: JSON.stringify({ success: true, message: data.title })
    };
  } else {
    return {
      statusCode: data.status,
      data: JSON.stringify({ success: false, message: data.title })
    };
  }
})
