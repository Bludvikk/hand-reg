import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','firstName','lastName','gender','weight','age','city','phone','email','address','hematologistId','typeId','severityId','hashedPassword','hashedRt','createdAt','updatedAt']);

export const ReferenceScalarFieldEnumSchema = z.enum(['id','code','name','createdAt','updatedAt','deletedAt','isShow','isDefault','entityId']);

export const EntityScalarFieldEnumSchema = z.enum(['id','code','name','createdAt','updatedAt','deletedAt','isShow','isDefault','isParent','parentId','fieldProp']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string().nullish(),
  weight: z.string().nullish(),
  age: z.number().nullish(),
  city: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string(),
  address: z.string().nullish(),
  hematologistId: z.number().nullish(),
  typeId: z.number().nullish(),
  severityId: z.number().nullish(),
  hashedPassword: z.string(),
  hashedRt: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// REFERENCE SCHEMA
/////////////////////////////////////////

export const ReferenceSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  isShow: z.boolean(),
  isDefault: z.boolean(),
  entityId: z.number(),
})

export type Reference = z.infer<typeof ReferenceSchema>

/////////////////////////////////////////
// ENTITY SCHEMA
/////////////////////////////////////////

export const EntitySchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  isShow: z.boolean(),
  isDefault: z.boolean(),
  isParent: z.boolean(),
  parentId: z.number().nullish(),
  fieldProp: z.string(),
})

export type Entity = z.infer<typeof EntitySchema>
