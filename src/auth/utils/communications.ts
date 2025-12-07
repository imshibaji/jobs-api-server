export async function sendEmail(email: string, subject: string, message: string): Promise<void>{}

export async function sendSms(phoneNumber: string, message: string): Promise<void> {}

export async function sendWhatsapp(phoneNumber: string, message: string): Promise<void> {}

export async function sendTelegram(chatId: string, message: string): Promise<void> {}

export async function sendSlack(channelId: string, message: string): Promise<void> {}

export async function sendDiscord(webhookUrl: string, message: string): Promise<void> {}

export async function sendWebhook(webhookUrl: string, message: string): Promise<void> {}

export async function sendPushNotification(token: string, message: string): Promise<void> {}