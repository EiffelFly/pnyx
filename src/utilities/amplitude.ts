import amplitude from 'amplitude-js';
import { UserProperties, Event, EventProperties } from "../types/amplitude"
import amplitudeConfig from "../amplitude-config"

const amplitudeInstance = amplitude.getInstance();

export const initAmplitude = () => {
  amplitudeInstance.init(amplitudeConfig.API_KEY);
};

export const setAmplitudeUserId = ( userId: string ) => {
  amplitudeInstance.setUserId(userId);
};

export const setAmplitudeUserProperties = ( properties: UserProperties ) => {
  amplitudeInstance.setUserProperties(properties);
};

export const sendAmplitudeData = (eventType: Event, eventProperties: EventProperties) => {
  amplitudeInstance.logEvent(eventType, eventProperties);
};