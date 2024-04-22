export default defineEventHandler(async (event) => {
  const rawBody = await readBody(event)
  const config = useRuntimeConfig(event)

  const headersList = {
    Authorization: 'Bearer '+config.paystackSecretKey,
    'Content-Type': 'application/json'
  }
   
  let bodyContent = JSON.stringify({
    "email": rawBody.formData.email,
    "amount": rawBody.formData.amount*100,
    "reference": rawBody.formData.paystackReference,
    "currency": 'NGN', // T0 be changed
    "callback_url": 'http://localhost:3000/donate?method=verify'
  });
  
  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  return await response.json()
  // console.log(rawBody.formData, config.paystackSecretKey)
})