/**
 * Formatting utilities
 */

export const formatCurrency = (value, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value)
}

export const formatDate = (date, locale = 'pt-BR') => {
    return new Intl.DateTimeFormat(locale).format(new Date(date))
}

export const formatDateTime = (date, locale = 'pt-BR') => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(date))
}

export const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const formatBRL = (value) => {
    return formatCurrency(value, 'pt-BR', 'BRL')
}