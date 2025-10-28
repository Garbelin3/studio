export function fbqTrack(eventName: string, params?: Record<string, any>): void {
    if (typeof window === 'undefined') return;
    const fbq = (window as any).fbq as undefined | ((...args: any[]) => void);
    if (!fbq) return;
    try {
        fbq('track', eventName, params);
    } catch { }
}

export function fbqInitPurchase(value: number, contentName: string, currency: string = 'BRL') {
    fbqTrack('InitiateCheckout', { value, currency, content_name: contentName });
}

export function fbqViewContent(contentName: string, contentCategory?: string) {
    fbqTrack('ViewContent', { content_name: contentName, content_category: contentCategory });
}


