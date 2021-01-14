import { EventHandler } from '../handler/event.handler';

/**
 * Add event
 *
 * @param key
 */
export const event = (key: string): MethodDecorator => {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void => {
    if (!key || key === undefined) {
      throw new Error(
        `Could not set event key for: ${target.prototype.constructor.name}`
      );
    }

    EventHandler.addEvent(key, descriptor.value);
  };
};
