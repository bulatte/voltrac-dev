import { Messages } from "next-intl";

export type NestedKey<Schema, Path extends string = ""> = Schema extends string
  ? never
  : Schema extends Record<string, unknown>
  ?
      | (Path extends "" ? never : Path)
      | {
          [Key in keyof Schema & string]: NestedKey<
            Schema[Key],
            Path extends "" ? Key : `${Path}.${Key}`
          >;
        }[keyof Schema & string]
  : never;

export type TranslationKey = NestedKey<Messages>;
