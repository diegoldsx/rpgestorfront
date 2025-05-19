import { z } from 'zod';
import { Option } from '@/types/options/Option';

export function createEnumFromOptions<T extends readonly Option[]>(
  options: T
) {
  return z.enum(options.map((opt) => opt.value) as [string, ...string[]]);
}
