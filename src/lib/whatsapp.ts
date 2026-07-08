const PHONE = '5493515200092'

export function whatsappLink(message = 'Hola, me gustaría agendar una cita.') {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
