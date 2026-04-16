// Application constants

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export const CATEGORIES = {
    APPETIZERS: 'appetizers',
    MAIN_COURSE: 'main-course',
    DESSERTS: 'desserts',
    BEVERAGES: 'beverages',
}

export const SORT_OPTIONS = {
    NAME_ASC: 'name-asc',
    NAME_DESC: 'name-desc',
    PRICE_ASC: 'price-asc',
    PRICE_DESC: 'price-desc',
}

export const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
}

export const ALL_CATEGORY = 'all'