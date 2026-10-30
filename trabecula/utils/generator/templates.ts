import { makeSectionComment } from "trabecula/utils/generator/files";

export const makeFilterQueryType = () =>
  `export type _FilterQuery<Schema> = {
    [SchemaKey in keyof Schema]?:
      | Schema[SchemaKey]
      | Array<Schema[SchemaKey]>
      | mongo.FilterOperators<Schema[SchemaKey]>;
  } & {
    _id?: string | Array<string> | mongo.FilterOperators<string>;
    $and?: Array<_FilterQuery<Schema>>;
    $comment?: string;
    $nor?: Array<_FilterQuery<Schema>>;
    $or?: Array<_FilterQuery<Schema>>;
    $text?: {
      $caseSensitive?: boolean;
      $diacriticSensitive?: boolean;
      $language?: string;
      $search: string;
    };
    $where?: string | Function;
  };`;

export const makeSocketDefs = ({
  customEvents,
  modelNames,
}: {
  customEvents: Array<{ args?: string; name: string }>;
  modelNames: string[];
}) => {
  const socketEmitEvents: string[] = [];
  const socketEvents: string[] = [];

  modelNames.forEach((modelName) => {
    const schemaName = `models.${modelName}Schema`;

    const events = {
      created: `on${modelName}Created`,
      deleted: `on${modelName}Deleted`,
      updated: `on${modelName}Updated`,
    };

    socketEmitEvents.push(
      `${events.created}: (args: ${schemaName}, options?: SocketEventOptions) => void;`,
      `${events.deleted}: (args: { ids: string[] }, options?: SocketEventOptions) => void;`,
      `${events.updated}: (args: { id: string; updates: Partial<${schemaName}> }, options?: SocketEventOptions) => void;`,
    );

    socketEvents.push(events.created, events.deleted, events.updated);
  });

  customEvents.forEach((event) => {
    socketEmitEvents.push(
      `${event.name}: (${event.args ? `args: ${event.args},` : ""} options?: SocketEventOptions) => void;`,
    );
    socketEvents.push(event.name);
  });

  const makeSocketEventOptionsType = () =>
    `export type SocketEventOptions = { contentId: string; tabId: number };`;

  const makeSocketEventTypes = () =>
    `export interface SocketEmitEvents { ${socketEmitEvents.sort((a, b) => a.localeCompare(b)).join("\n")} }\n
    export type SocketEmitEvent = keyof SocketEmitEvents;\n
    export interface SocketEvents extends SocketEmitEvents { connected: () => void; }`;

  const makeSocketEvents = () =>
    `export const socketEvents: SocketEmitEvent[] = ["${socketEvents.join('", "')}"];`;

  return `${makeSectionComment("Socket Definitions")}\n
    ${makeSocketEventOptionsType()}\n
    ${makeSocketEventTypes()}\n
    ${makeSocketEvents()}`;
};

/** Makes a store property's default, wrapping object, array and date defaults in a factory. */
export const makeStoreDefaultValue = (prop: { defaultValue?: string; required?: boolean }) => {
  if (prop.defaultValue)
    return /^([{\[]|dayjs\(\))/.test(prop.defaultValue)
      ? `() => ${prop.defaultValue}`
      : prop.defaultValue;
  else return prop.required ? "" : "null";
};
