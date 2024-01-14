import { hash, compare } from 'bcrypt'

export const hashText = async text => await hash(text, 10)

export const compareText = async (text, hash) => await compare(text, hash)
