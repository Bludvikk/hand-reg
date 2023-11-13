export const OmitFieldSchema = { createdAt: true, updatedAt: true } as const
export type OmitField = keyof typeof OmitFieldSchema
export type OmitFieldWithId = OmitField | 'id'