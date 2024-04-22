export default defineEventHandler(async (event) => {
  const rawBody = await readBody(event)
  const config = useRuntimeConfig(event)

  const headersList = {
    Authorization: 'Bearer '+config.paystackSecretKey,
    'Content-Type': 'application/json'
  }
  
  const response = await fetch("https://api.paystack.co/transaction/verify/"+rawBody.ref, {
    method: "GET",
    headers: headersList
  });

  return await response.json()
})