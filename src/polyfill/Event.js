import Event from '../classes/Event';

if (typeof window.CustomEvent !== 'function') {
    window.CustomEvent = Event.CustomEvent;
}
